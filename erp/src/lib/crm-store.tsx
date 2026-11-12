"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import type { ModuleKey } from "@/lib/modules";
import { emptyState, sampleState, type CrmRecord, type CrmState, type Value } from "@/lib/crm-data";

/*
 * UI-only data store. Records live in memory, starting from sample data, and
 * are mirrored to localStorage so a refresh keeps your changes in this
 * browser. Nothing is sent to a server.
 *
 * It is an external store read through useSyncExternalStore: the server and
 * the hydration pass see `null` (rendering the loading shell), then the
 * browser snapshot takes over, so there is never a hydration mismatch.
 */

const STORAGE_KEY = "crm-ui-demo:data:v1";
const PROFILE_KEY = "crm-ui-demo:profile:v1";

export type Profile = { name: string; email: string };
const DEFAULT_PROFILE: Profile = { name: "Demo User", email: "demo@example.com" };

type Snapshot = { state: CrmState; profile: Profile };
type DealInput = { name: string; amount: number | null; closing_date: string | null; stage: string };

function readJson<T>(key: string): T | null {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function writeJson(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage blocked or full: the demo still works for this session.
  }
}

let snapshot: Snapshot | null = null;
const listeners = new Set<() => void>();

function getSnapshot(): Snapshot {
  snapshot ??= {
    state: readJson<CrmState>(STORAGE_KEY) ?? sampleState(),
    profile: readJson<Profile>(PROFILE_KEY) ?? DEFAULT_PROFILE,
  };
  return snapshot;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function commit(state: CrmState) {
  snapshot = { ...getSnapshot(), state };
  writeJson(STORAGE_KEY, state);
  listeners.forEach((l) => l());
}

const current = () => getSnapshot().state;
const now = () => new Date().toISOString();

/* Used by the (front-end only) sign-up screen to name the demo user. */
export function saveProfile(profile: Profile) {
  writeJson(PROFILE_KEY, profile);
  if (snapshot) {
    snapshot = { ...snapshot, profile };
    listeners.forEach((l) => l());
  }
}

const actions = {
  /* Create (id null) or update a record; returns its id. */
  save(key: ModuleKey, id: number | null, data: Record<string, Value>): number {
    const s = current();
    if (id == null) {
      const record: CrmRecord = { ...data, id: s.nextId, created_at: now(), updated_at: now() };
      if (key === "leads") record.converted_at = null;
      commit({ ...s, [key]: [...s[key], record], nextId: s.nextId + 1 });
      return record.id;
    }
    commit({ ...s, [key]: s[key].map((r) => (r.id === id ? { ...r, ...data, updated_at: now() } : r)) });
    return id;
  },

  /* Delete a record, its activities, and clear references to it. */
  remove(key: ModuleKey, id: number) {
    const s = current();
    const unlink = (rows: CrmRecord[], column: string) =>
      rows.map((r) => (r[column] === id ? { ...r, [column]: null } : r));
    let next: CrmState = { ...s, [key]: s[key].filter((r) => r.id !== id) };
    next = { ...next, tasks: next.tasks.filter((t) => t.related_to !== `${key}:${id}`) };
    if (key === "accounts") next = { ...next, contacts: unlink(next.contacts, "account_id"), deals: unlink(next.deals, "account_id") };
    if (key === "contacts") next = { ...next, deals: unlink(next.deals, "contact_id") };
    commit(next);
  },

  moveDeal(id: number, stage: string) {
    const s = current();
    commit({ ...s, deals: s.deals.map((d) => (d.id === id ? { ...d, stage, updated_at: now() } : d)) });
  },

  toggleTask(id: number, completed: boolean) {
    const s = current();
    const status = completed ? "Completed" : "Not Started";
    commit({ ...s, tasks: s.tasks.map((t) => (t.id === id ? { ...t, status, updated_at: now() } : t)) });
  },

  /* Lead conversion: creates (or reuses) an account, a contact and optionally a deal. */
  convertLead(leadId: number, deal: DealInput | null) {
    const s = current();
    const lead = s.leads.find((l) => l.id === leadId && !l.converted_at);
    if (!lead) return null;

    let nextId = s.nextId;
    const stamp = now();
    const make = (fields: Record<string, Value>): CrmRecord => ({
      description: null,
      ...fields,
      id: nextId++,
      created_at: stamp,
      updated_at: stamp,
    });

    const company = String(lead.company ?? "").trim();
    let accounts = s.accounts;
    let accountId: number | null = null;
    if (company) {
      const existing = accounts.find((a) => String(a.name).toLowerCase() === company.toLowerCase());
      if (existing) accountId = existing.id;
      else {
        const account = make({ name: company, phone: lead.phone, industry: null, website: null, city: null, employees: null });
        accounts = [...accounts, account];
        accountId = account.id;
      }
    }

    const contact = make({
      first_name: lead.first_name,
      last_name: lead.last_name,
      email: lead.email,
      phone: lead.phone,
      title: null,
      account_id: accountId,
      lead_source: lead.lead_source,
      description: lead.description,
    });
    const newDeal = deal ? make({ ...deal, account_id: accountId, contact_id: contact.id }) : null;

    commit({
      ...s,
      accounts,
      contacts: [...s.contacts, contact],
      deals: newDeal ? [...s.deals, newDeal] : s.deals,
      leads: s.leads.map((l) => (l.id === leadId ? { ...l, converted_at: stamp } : l)),
      // Carry the lead's activities over to the new contact.
      tasks: s.tasks.map((t) => (t.related_to === `leads:${leadId}` ? { ...t, related_to: `contacts:${contact.id}` } : t)),
      nextId,
    });
    return { contactId: contact.id, dealId: newDeal?.id ?? null };
  },

  loadSample() {
    commit(sampleState());
  },

  clearAll() {
    commit(emptyState());
  },
};

function useSnapshot() {
  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}

export function useCrm() {
  const snap = useSnapshot();
  if (!snap) throw new Error("useCrm must be used inside <CrmProvider>");
  return { ...snap, ...actions };
}

/* Shows the loading shell until the browser snapshot is available. */
export function CrmProvider({ children }: { children: ReactNode }) {
  return useSnapshot() ? children : <LoadingShell />;
}

/* First frame before stored data is read: the app chrome with skeleton content. */
function LoadingShell() {
  return (
    <div className="flex min-h-screen bg-[#faf7f2]" aria-busy="true" aria-label="Loading">
      <div className="hidden w-[256px] shrink-0 border-r border-[#ebe5dc] bg-white lg:block" />
      <div className="flex min-w-0 flex-1 flex-col">
      <div className="h-[64px] border-b border-[#ebe5dc] bg-white" />
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-4 px-4 py-5 sm:px-6">
        <div className="h-7 w-48 animate-pulse rounded bg-[#e3e7ee]" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-[104px] animate-pulse rounded-[6px] bg-white" />
          ))}
        </div>
        <div className="h-[320px] animate-pulse rounded-[6px] bg-white" />
      </div>
      </div>
    </div>
  );
}
