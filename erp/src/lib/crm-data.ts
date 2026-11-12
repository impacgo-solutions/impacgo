import {
  DEAL_STAGES,
  MODULES,
  OPEN_DEAL_STAGES,
  RELATABLE,
  type ModuleDef,
  type ModuleKey,
} from "@/lib/modules";

/*
 * Client-side data model: plain arrays of records per module, plus pure
 * helpers for querying them. No backend — the store keeps this in memory.
 */

export type Value = string | number | null;
export type CrmRecord = { id: number; created_at: string; updated_at: string } & Record<string, Value>;
export type CrmState = Record<ModuleKey, CrmRecord[]> & { nextId: number };

/* A record decorated for display: its title and resolved reference titles (`_ref_<field>`). */
export type RecordRow = CrmRecord & { _title: string };
export type Option = { id: number; title: string };
export type RelatedGroup = { module: ModuleKey; label: string; options: Option[] };
export type FormValues = Record<string, string>;
export type FormErrors = Record<string, string>;

export function recordTitle(key: ModuleKey, r: Record<string, Value>): string {
  if (key === "leads" || key === "contacts") return `${r.first_name ?? ""} ${r.last_name ?? ""}`.trim();
  if (key === "tasks") return String(r.subject ?? "");
  return String(r.name ?? "");
}

export function parseRelated(value: Value | undefined) {
  if (!value) return null;
  const [module, id] = String(value).split(":");
  if (!RELATABLE.includes(module as ModuleKey) || !/^\d+$/.test(id ?? "")) return null;
  return { module: module as ModuleKey, id: Number(id) };
}

function find(state: CrmState, key: ModuleKey, id: number) {
  return state[key].find((r) => r.id === id);
}

export function decorate(state: CrmState, mod: ModuleDef, record: CrmRecord): RecordRow {
  const row: RecordRow = { ...record, _title: recordTitle(mod.key, record) };
  for (const field of mod.fields) {
    if (field.type === "ref" && field.ref) {
      const target = record[field.name] != null ? find(state, field.ref, Number(record[field.name])) : undefined;
      row[`_ref_${field.name}`] = target ? recordTitle(field.ref, target) : null;
    }
    if (field.type === "related") {
      const parsed = parseRelated(record[field.name]);
      const target = parsed ? find(state, parsed.module, parsed.id) : undefined;
      row[`_ref_${field.name}`] = parsed && target ? recordTitle(parsed.module, target) : null;
    }
  }
  return row;
}

export type ListQuery = { q?: string; filter?: string; sort?: string; dir?: string };

export function listRecords(state: CrmState, mod: ModuleDef, query: ListQuery = {}): RecordRow[] {
  const q = query.q?.trim().toLowerCase();
  // `filter` may hold several comma-separated values of the module's filter field.
  const filters = query.filter ? query.filter.split(",").filter(Boolean) : [];
  let rows = state[mod.key].filter((r) => {
    if (mod.key === "leads" && r.converted_at) return false;
    if (filters.length && mod.filterField && !filters.includes(String(r[mod.filterField]))) return false;
    if (q && !mod.searchColumns.some((c) => String(r[c] ?? "").toLowerCase().includes(q))) return false;
    return true;
  });

  const sortable = [...mod.fields.map((f) => f.name), "created_at", "updated_at"];
  const sort = query.sort && sortable.includes(query.sort) ? query.sort : "created_at";
  const dir = query.dir === "asc" ? 1 : -1;
  rows = [...rows].sort((a, b) => {
    const av = a[sort];
    const bv = b[sort];
    if (av == null && bv == null) return (b.id - a.id);
    if (av == null) return 1;
    if (bv == null) return -1;
    const cmp = typeof av === "number" && typeof bv === "number" ? av - bv : String(av).localeCompare(String(bv));
    return cmp !== 0 ? cmp * dir : b.id - a.id;
  });

  return rows.map((r) => decorate(state, mod, r));
}

export function getRecord(state: CrmState, mod: ModuleDef, id: number): RecordRow | undefined {
  const record = find(state, mod.key, id);
  return record ? decorate(state, mod, record) : undefined;
}

export function getOptions(state: CrmState, key: ModuleKey): Option[] {
  return state[key]
    .filter((r) => !(key === "leads" && r.converted_at))
    .map((r) => ({ id: r.id, title: recordTitle(key, r) }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getFormOptions(state: CrmState, mod: ModuleDef) {
  const refs: Record<string, Option[]> = {};
  let related: RelatedGroup[] = [];
  for (const field of mod.fields) {
    if (field.type === "ref" && field.ref) refs[field.name] = getOptions(state, field.ref);
    if (field.type === "related") {
      related = RELATABLE.map((key) => ({ module: key, label: MODULES[key].plural, options: getOptions(state, key) }));
    }
  }
  return { refs, related };
}

/* Validate and coerce submitted values against the module definition. */
export function parseForm(state: CrmState, mod: ModuleDef, values: FormValues) {
  const errors: FormErrors = {};
  const data: Record<string, Value> = {};

  for (const field of mod.fields) {
    const raw = (values[field.name] ?? "").trim();
    if (!raw) {
      if (field.required) errors[field.name] = `${field.label} is required.`;
      data[field.name] = null;
      continue;
    }

    switch (field.type) {
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw)) errors[field.name] = "Enter a valid email address.";
        data[field.name] = raw.toLowerCase();
        break;
      case "number":
      case "currency": {
        const n = Number(raw.replace(/[,$\s]/g, ""));
        if (!Number.isFinite(n) || n < 0) errors[field.name] = `${field.label} must be a positive number.`;
        data[field.name] = n;
        break;
      }
      case "date":
        if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) errors[field.name] = "Enter a valid date.";
        data[field.name] = raw;
        break;
      case "url":
        data[field.name] = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
        break;
      case "select":
        if (!field.options?.includes(raw)) errors[field.name] = `Choose a valid ${field.label.toLowerCase()}.`;
        data[field.name] = raw;
        break;
      case "ref":
        if (!field.ref || !find(state, field.ref, Number(raw))) errors[field.name] = `Choose a valid ${field.label.toLowerCase()}.`;
        data[field.name] = Number(raw);
        break;
      case "related": {
        const parsed = parseRelated(raw);
        if (!parsed || !find(state, parsed.module, parsed.id)) errors[field.name] = "Choose a valid record.";
        data[field.name] = raw;
        break;
      }
      default:
        data[field.name] = raw;
    }
  }
  return { errors, data };
}

export type RelatedList = { module: ModuleKey; title: string; rows: RecordRow[] };

export function getRelatedLists(state: CrmState, mod: ModuleDef, id: number): RelatedList[] {
  const lists: RelatedList[] = [];
  const by = (key: ModuleKey, column: string) => {
    const target = MODULES[key];
    const rows = state[key].filter((r) => r[column] === id).map((r) => decorate(state, target, r));
    lists.push({ module: key, title: target.plural, rows });
  };

  if (mod.key === "accounts") {
    by("contacts", "account_id");
    by("deals", "account_id");
  }
  if (mod.key === "contacts") by("deals", "contact_id");

  if (mod.key !== "tasks") {
    const rows = state.tasks
      .filter((t) => t.related_to === `${mod.key}:${id}`)
      .sort((a, b) => Number(a.status === "Completed") - Number(b.status === "Completed") || String(a.due_date ?? "9").localeCompare(String(b.due_date ?? "9")))
      .map((t) => decorate(state, MODULES.tasks, t));
    lists.push({ module: "tasks", title: "Open Activities", rows });
  }
  return lists;
}

/* Global search: matching records from every module, best matches first. */
export function searchAll(state: CrmState, q: string, perModule = 20) {
  const term = q.trim().toLowerCase();
  if (!term) return [];
  return (Object.keys(MODULES) as ModuleKey[]).map((key) => {
    const mod = MODULES[key];
    const rows = state[key]
      .filter((r) => !(key === "leads" && r.converted_at))
      .filter((r) => mod.searchColumns.some((c) => String(r[c] ?? "").toLowerCase().includes(term)))
      .sort((a, b) => Number(recordTitle(key, b).toLowerCase().startsWith(term)) - Number(recordTitle(key, a).toLowerCase().startsWith(term)))
      .slice(0, perModule)
      .map((r) => decorate(state, mod, r));
    return { module: key, rows };
  }).filter((g) => g.rows.length > 0);
}

export type TimelineEvent = { at: string; title: string; detail?: string; href?: string };

/* Activity history for a record, newest first. */
export function getTimeline(state: CrmState, mod: ModuleDef, id: number): TimelineEvent[] {
  const record = state[mod.key].find((r) => r.id === id);
  if (!record) return [];
  const events: TimelineEvent[] = [{ at: record.created_at, title: `${mod.singular} created` }];
  if (record.updated_at !== record.created_at) events.push({ at: record.updated_at, title: `${mod.singular} updated` });
  if (mod.key === "leads" && record.converted_at) events.push({ at: String(record.converted_at), title: "Lead converted" });
  for (const t of state.tasks.filter((t) => t.related_to === `${mod.key}:${id}`)) {
    events.push({ at: t.created_at, title: `Task added: ${t.subject}`, href: `/crm/tasks/${t.id}` });
    if (t.status === "Completed") events.push({ at: t.updated_at, title: `Task completed: ${t.subject}`, href: `/crm/tasks/${t.id}` });
  }
  if (mod.key === "accounts" || mod.key === "contacts") {
    const column = mod.key === "accounts" ? "account_id" : "contact_id";
    for (const d of state.deals.filter((d) => d[column] === id)) {
      events.push({ at: d.created_at, title: `Deal added: ${d.name}`, detail: String(d.stage), href: `/crm/deals/${d.id}` });
    }
  }
  return events.sort((a, b) => b.at.localeCompare(a.at));
}

export function today() {
  return new Date().toISOString().slice(0, 10);
}

export function getDashboard(state: CrmState) {
  const isOpen = (d: CrmRecord) => (OPEN_DEAL_STAGES as string[]).includes(String(d.stage));
  const sum = (deals: CrmRecord[]) => deals.reduce((s, d) => s + (Number(d.amount) || 0), 0);
  const openLeads = state.leads.filter((l) => !l.converted_at);
  const openDeals = state.deals.filter(isOpen);
  const monthStart = today().slice(0, 7) + "-01";

  const stats = {
    openLeads: openLeads.length,
    newLeadsThisMonth: state.leads.filter((l) => l.created_at >= monthStart).length,
    contacts: state.contacts.length,
    accounts: state.accounts.length,
    openDeals: openDeals.length,
    pipelineValue: sum(openDeals),
    wonValue: sum(state.deals.filter((d) => d.stage === "Closed Won")),
    overdueTasks: state.tasks.filter((t) => t.status !== "Completed" && t.due_date != null && String(t.due_date) < today()).length,
  };

  const pipeline = DEAL_STAGES.map((stage) => {
    const deals = state.deals.filter((d) => d.stage === stage);
    return { stage, count: deals.length, total: sum(deals) };
  });

  const byDue = (a: CrmRecord, b: CrmRecord, key: string) =>
    String(a[key] ?? "9999").localeCompare(String(b[key] ?? "9999"));

  return {
    stats,
    pipeline,
    openTasks: state.tasks
      .filter((t) => t.status !== "Completed")
      .sort((a, b) => byDue(a, b, "due_date"))
      .slice(0, 8)
      .map((t) => decorate(state, MODULES.tasks, t)),
    recentLeads: [...openLeads]
      .sort((a, b) => b.created_at.localeCompare(a.created_at) || b.id - a.id)
      .slice(0, 6)
      .map((l) => decorate(state, MODULES.leads, l)),
    closingDeals: [...openDeals]
      .sort((a, b) => byDue(a, b, "closing_date"))
      .slice(0, 6)
      .map((d) => decorate(state, MODULES.deals, d)),
    isEmpty: state.leads.length + state.contacts.length + state.accounts.length + state.deals.length === 0,
  };
}

/* ---------- Sample data (fictional) ---------- */

function daysFromNow(days: number) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function stamp(daysAgo: number) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString();
}

export function emptyState(): CrmState {
  return { leads: [], contacts: [], accounts: [], deals: [], tasks: [], nextId: 1 };
}

export function sampleState(): CrmState {
  let id = 1;
  const make = (fields: Record<string, Value>, daysAgo: number): CrmRecord => ({
    id: id++,
    created_at: stamp(daysAgo),
    updated_at: stamp(daysAgo),
    description: null,
    ...fields,
  });

  const accounts = [
    { name: "Northwind Traders", industry: "Retail", website: "https://northwind.example", phone: "+1 415 555 0134", city: "San Francisco", employees: 240 },
    { name: "Bluepeak Analytics", industry: "Technology", website: "https://bluepeak.example", phone: "+1 512 555 0188", city: "Austin", employees: 85 },
    { name: "Harborline Logistics", industry: "Manufacturing", website: "https://harborline.example", phone: "+1 206 555 0102", city: "Seattle", employees: 1200 },
    { name: "Cedar & Finch Health", industry: "Healthcare", website: "https://cedarfinch.example", phone: "+1 617 555 0177", city: "Boston", employees: 430 },
    { name: "Lumen Capital", industry: "Finance", website: "https://lumencap.example", phone: "+1 212 555 0150", city: "New York", employees: 60 },
  ].map((a, i) => make(a, 40 - i));

  const contacts = [
    { first_name: "Maya", last_name: "Patel", title: "Head of Operations", email: "maya.patel@northwind.example", phone: "+1 415 555 0190", account_id: accounts[0].id, lead_source: "Trade Show" },
    { first_name: "Daniel", last_name: "Okafor", title: "CTO", email: "daniel@bluepeak.example", phone: "+1 512 555 0110", account_id: accounts[1].id, lead_source: "Web Research" },
    { first_name: "Sofia", last_name: "Lindqvist", title: "VP Supply Chain", email: "s.lindqvist@harborline.example", phone: "+1 206 555 0145", account_id: accounts[2].id, lead_source: "Partner" },
    { first_name: "James", last_name: "Whitaker", title: "Procurement Manager", email: "jwhitaker@harborline.example", phone: "+1 206 555 0163", account_id: accounts[2].id, lead_source: "Cold Call" },
    { first_name: "Amara", last_name: "Chen", title: "Director of IT", email: "amara.chen@cedarfinch.example", phone: "+1 617 555 0121", account_id: accounts[3].id, lead_source: "Employee Referral" },
    { first_name: "Lucas", last_name: "Moreau", title: "Managing Partner", email: "lucas@lumencap.example", phone: "+1 212 555 0199", account_id: accounts[4].id, lead_source: "External Referral" },
  ].map((c, i) => make(c, 30 - i));

  const deals = [
    { name: "Northwind POS rollout", amount: 48000, stage: "Proposal/Price Quote", close: 12, a: 0, c: 0 },
    { name: "Bluepeak annual licence", amount: 26500, stage: "Negotiation/Review", close: 5, a: 1, c: 1 },
    { name: "Harborline fleet tracking", amount: 132000, stage: "Needs Analysis", close: 40, a: 2, c: 2 },
    { name: "Harborline warehouse pilot", amount: 18000, stage: "Qualification", close: 25, a: 2, c: 3 },
    { name: "Cedar & Finch patient portal", amount: 76000, stage: "Value Proposition", close: 30, a: 3, c: 4 },
    { name: "Lumen advisory seats", amount: 15500, stage: "Closed Won", close: -6, a: 4, c: 5 },
    { name: "Northwind loyalty add-on", amount: 9800, stage: "Closed Lost", close: -15, a: 0, c: 0 },
    { name: "Bluepeak data connector", amount: 12400, stage: "Identify Decision Makers", close: 18, a: 1, c: 1 },
  ].map(({ close, a, c, ...d }, i) =>
    make({ ...d, closing_date: daysFromNow(close), account_id: accounts[a].id, contact_id: contacts[c].id }, 20 - i),
  );

  const leads = [
    { first_name: "Priya", last_name: "Raman", company: "Orchid Studios", email: "priya@orchidstudios.example", phone: "+1 310 555 0117", lead_source: "Web Download", status: "New" },
    { first_name: "Tom", last_name: "Becker", company: "Becker Hardware", email: "tom@beckerhw.example", phone: "+1 303 555 0124", lead_source: "Cold Call", status: "Attempted to Contact" },
    { first_name: "Elena", last_name: "Rossi", company: "Verde Foods", email: "elena.rossi@verdefoods.example", phone: "+1 773 555 0138", lead_source: "Trade Show", status: "Contacted" },
    { first_name: "Kwame", last_name: "Mensah", company: "Atlas Robotics", email: "kwame@atlasrobotics.example", phone: "+1 408 555 0156", lead_source: "Partner", status: "Pre-Qualified" },
    { first_name: "Hannah", last_name: "Kim", company: "Brightpath Schools", email: "hkim@brightpath.example", phone: "+1 503 555 0172", lead_source: "Chat", status: "New" },
    { first_name: "Omar", last_name: "Haddad", company: "Dune Hospitality", email: "omar@dunehospitality.example", phone: "+1 702 555 0181", lead_source: "Advertisement", status: "Contact in Future" },
  ].map((l, i) => make({ ...l, converted_at: null }, 10 - i));

  const tasks = [
    { subject: "Send revised proposal", due: 1, priority: "High", related_to: `deals:${deals[0].id}` },
    { subject: "Contract review call", due: 0, priority: "High", related_to: `deals:${deals[1].id}` },
    { subject: "Discovery workshop prep", due: 4, priority: "Normal", related_to: `deals:${deals[2].id}` },
    { subject: "Follow up on demo", due: -2, priority: "Normal", related_to: `leads:${leads[1].id}` },
    { subject: "Intro call", due: 2, priority: "Normal", related_to: `leads:${leads[3].id}` },
    { subject: "Quarterly check-in", due: 9, priority: "Low", related_to: `accounts:${accounts[4].id}` },
    { subject: "Share security whitepaper", due: 3, priority: "Normal", related_to: `contacts:${contacts[4].id}` },
  ].map(({ due, ...t }, i) => make({ ...t, due_date: daysFromNow(due), status: "Not Started" }, 7 - i));

  return { accounts, contacts, deals, leads, tasks, nextId: id };
}
