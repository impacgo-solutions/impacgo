"use client";

import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { useState } from "react";
import { DeleteButton } from "@/components/crm/DeleteButton";
import { FieldValue } from "@/components/crm/FieldValue";
import { Icon } from "@/components/crm/icons";
import { RecordTable } from "@/components/crm/RecordTable";
import { TaskList } from "@/components/crm/TaskList";
import { Avatar, Badge, Card, EmptyState, btnPrimary, btnSecondary } from "@/components/crm/ui";
import { useCrm } from "@/lib/crm-store";
import { getRecord, getRelatedLists, getTimeline, type RecordRow } from "@/lib/crm-data";
import { MODULES, formatCurrency, formatDate, getModule, type ModuleDef } from "@/lib/modules";

/* The ref field on a related module that points back at this record, hidden in its related list. */
const BACK_REF: Partial<Record<string, string>> = { accounts: "account_id", contacts: "contact_id" };

function subtitle(mod: ModuleDef, r: RecordRow) {
  switch (mod.key) {
    case "leads":
      return [r.company, r.email].filter(Boolean).join(" · ");
    case "contacts":
      return [r.title, r._ref_account_id].filter(Boolean).join(" at ");
    case "accounts":
      return [r.industry, r.city].filter(Boolean).join(" · ");
    case "deals":
      return [formatCurrency(r.amount as number | null), r._ref_account_id].filter(Boolean).join(" · ");
    default:
      return r.due_date ? `Due ${formatDate(String(r.due_date))}` : "";
  }
}

function formatStamp(iso: string) {
  const d = new Date(iso);
  return `${d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}, ${d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`;
}

export function RecordView({ moduleKey, id }: { moduleKey: string; id: number }) {
  const { state, remove } = useCrm();
  const router = useRouter();
  const [tab, setTab] = useState<"overview" | "timeline">("overview");
  // Set when this page deletes the record, so it renders nothing (not "not found")
  // while navigating back to the list.
  const [deleted, setDeleted] = useState(false);
  const mod = getModule(moduleKey);
  const record = mod ? getRecord(state, mod, id) : undefined;
  if (deleted) return null;
  if (!mod || !record) notFound();

  const related = getRelatedLists(state, mod, record.id);
  const tasks = related.find((l) => l.module === "tasks");
  const others = related.filter((l) => l.module !== "tasks");
  const timeline = getTimeline(state, mod, record.id);
  const statusField = mod.fields.find((f) => ["status", "stage"].includes(f.name));
  const converted = mod.key === "leads" && Boolean(record.converted_at);
  const description = record.description as string | null;
  const fields = mod.fields.filter((f) => f.type !== "textarea");

  const nav = [
    { id: "info", label: `${mod.singular} Information` },
    ...others.map((l) => ({ id: `rel-${l.module}`, label: l.title, count: l.rows.length })),
    ...(tasks ? [{ id: "activities", label: "Open Activities", count: tasks.rows.filter((t) => t.status !== "Completed").length }] : []),
  ];

  const tabBtn = (key: typeof tab, label: string) => (
    <button
      type="button"
      role="tab"
      aria-selected={tab === key}
      onClick={() => setTab(key)}
      className={`-mb-px cursor-pointer border-b-2 px-1 pb-2.5 text-[15px] transition-colors duration-150 ${
        tab === key ? "border-[#2d4fe0] font-bold text-[#14161c]" : "border-transparent text-[#5c6170] hover:text-[#14161c]"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div>
      {/* Record header */}
      <div className="flex flex-wrap items-center gap-4 border-b border-[#ebe5dc] bg-[linear-gradient(100deg,#ffffff_55%,#eef1ff_80%,#fff5f1)] px-4 py-4 sm:px-6">
        <Link href={`/crm/${mod.key}`} aria-label={`Back to ${mod.plural}`} className="grid size-9 place-items-center rounded-lg text-[#464b57] hover:bg-[#faf7f2]">
          <Icon name="back" size={20} />
        </Link>
        <Avatar name={record._title} size={48} />
        <div className="min-w-0 flex-1">
          <h2 className="flex flex-wrap items-center gap-2.5 text-[20px] font-bold text-[#14161c]">
            <span className="truncate">{record._title}</span>
            {statusField && record[statusField.name] ? <Badge value={String(record[statusField.name])} /> : null}
            {converted ? <Badge value="Converted" /> : null}
          </h2>
          <p className="truncate pt-0.5 text-[14px] text-[#5c6170]">{subtitle(mod, record) || mod.singular}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {record.email ? (
            <a href={`mailto:${record.email}`} className={`${btnSecondary} max-sm:hidden`}>
              <Icon name="mail" size={16} /> Send Email
            </a>
          ) : null}
          {mod.key === "leads" && !converted ? (
            <Link href={`/crm/leads/${record.id}/convert`} className={btnPrimary}>
              <Icon name="convert" size={16} /> Convert
            </Link>
          ) : null}
          <Link href={`/crm/${mod.key}/${record.id}/edit`} className={btnSecondary}>
            <Icon name="edit" size={16} /> Edit
          </Link>
          <DeleteButton
            label={mod.singular}
            onDelete={() => {
              setDeleted(true);
              remove(mod.key, record.id);
              router.push(`/crm/${mod.key}`);
            }}
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-[1500px] gap-5 p-4 sm:p-5 lg:grid-cols-[220px_minmax(0,1fr)]">
        {/* Related list navigator */}
        <nav aria-label="Related lists" className="hidden self-start rounded-xl border border-[#ebe5dc] bg-white py-2 lg:sticky lg:top-[80px] lg:block">
          <p className="px-4 pt-1 pb-2 text-[13px] font-bold tracking-wide text-[#5c6170] uppercase">Related List</p>
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setTab("overview")}
              className="flex items-center justify-between px-4 py-2 text-[14px] text-[#14161c] hover:bg-[#eef1ff]"
            >
              {n.label}
              {"count" in n ? <span className="text-[12px] text-[#686c79]">{n.count}</span> : null}
            </a>
          ))}
          <button type="button" onClick={() => setTab("timeline")} className="flex w-full cursor-pointer items-center justify-between px-4 py-2 text-left text-[14px] text-[#14161c] hover:bg-[#eef1ff]">
            Timeline <span className="text-[12px] text-[#686c79]">{timeline.length}</span>
          </button>
        </nav>

        <div className="min-w-0">
          <div role="tablist" className="mb-4 flex gap-6 border-b border-[#ebe5dc]">
            {tabBtn("overview", "Overview")}
            {tabBtn("timeline", "Timeline")}
          </div>

          {tab === "overview" ? (
            <div className="flex flex-col gap-4">
              <Card id="info" title={`${mod.singular} Information`}>
                <dl className="grid gap-x-10 p-5 md:grid-cols-2">
                  {fields.map((field) => (
                    <div key={field.name} className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-baseline gap-3 border-b border-dashed border-[#f3efe8] py-2.5">
                      <dt className="truncate text-right text-[14px] text-[#5c6170]">{field.label}</dt>
                      <dd className="min-w-0 truncate text-[14px] text-[#14161c]">
                        <FieldValue field={field} row={record} />
                      </dd>
                    </div>
                  ))}
                </dl>
                {description ? (
                  <div className="border-t border-[#f3efe8] px-5 py-4">
                    <p className="pb-1 text-[14px] font-bold text-[#14161c]">Description</p>
                    <p className="text-[14px] whitespace-pre-wrap text-[#14161c]">{description}</p>
                  </div>
                ) : null}
                <p className="border-t border-[#f3efe8] px-5 py-2.5 text-[12px] text-[#686c79]">
                  Created {formatStamp(record.created_at)} · Modified {formatStamp(record.updated_at)}
                </p>
              </Card>

              {others.map((list) => (
                <Card
                  key={list.module}
                  id={`rel-${list.module}`}
                  title={`${list.title} (${list.rows.length})`}
                  actions={
                    <Link href={`/crm/${list.module}/new?${BACK_REF[mod.key]}=${record.id}`} className="text-[14px] font-bold text-[#2d4fe0] hover:underline">
                      + New
                    </Link>
                  }
                >
                  {list.rows.length > 0 ? (
                    <RecordTable mod={MODULES[list.module]} rows={list.rows} hideField={BACK_REF[mod.key]} />
                  ) : (
                    <p className="px-5 py-6 text-[14px] text-[#5c6170]">No {list.title.toLowerCase()} yet.</p>
                  )}
                </Card>
              ))}

              {tasks ? (
                <Card
                  id="activities"
                  title={`Open Activities (${tasks.rows.filter((t) => t.status !== "Completed").length})`}
                  actions={
                    <Link href={`/crm/tasks/new?related_to=${mod.key}:${record.id}`} className="text-[14px] font-bold text-[#2d4fe0] hover:underline">
                      + Task
                    </Link>
                  }
                >
                  {tasks.rows.length > 0 ? <TaskList tasks={tasks.rows} showRelated={false} /> : <EmptyState title="No activities" body="Add a task to plan your next step." />}
                </Card>
              ) : null}
            </div>
          ) : (
            <Card title="Timeline">
              <ol className="relative px-6 py-5">
                <span aria-hidden className="absolute top-7 bottom-7 left-[33px] w-px bg-[#ebe5dc]" />
                {timeline.map((e, i) => (
                  <li key={i} className="relative flex gap-4 pb-5 last:pb-0">
                    <span className="relative z-10 mt-1 grid size-5 shrink-0 place-items-center rounded-full border-2 border-[#2d4fe0] bg-white">
                      <span className="size-1.5 rounded-full bg-[#2d4fe0]" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[14px] text-[#14161c]">
                        {e.href ? (
                          <Link href={e.href} className="font-bold text-[#2d4fe0] hover:underline">
                            {e.title}
                          </Link>
                        ) : (
                          <span className="font-bold">{e.title}</span>
                        )}
                        {e.detail ? <span className="text-[#5c6170]"> · {e.detail}</span> : null}
                      </p>
                      <p className="pt-0.5 text-[12px] text-[#686c79]">{formatStamp(e.at)}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
