"use client";

import { notFound, redirect } from "next/navigation";
import { useState } from "react";
import { ConvertForm } from "@/components/crm/ConvertForm";
import { RecordForm } from "@/components/crm/RecordForm";
import { useCrm } from "@/lib/crm-store";
import { getRecord } from "@/lib/crm-data";
import { MODULES, getModule } from "@/lib/modules";

/* Create: required selects default to their first option; URL params can prefill fields. */
export function NewRecordView({ moduleKey, prefill }: { moduleKey: string; prefill: Record<string, string> }) {
  const mod = getModule(moduleKey);
  if (!mod) notFound();

  const initial: Record<string, string> = {};
  for (const field of mod.fields) {
    if (prefill[field.name]) initial[field.name] = prefill[field.name];
    else if (field.type === "select" && field.required && field.options) initial[field.name] = field.options[0];
  }

  return <RecordForm mod={mod} recordId={null} initial={initial} cancelHref={`/crm/${mod.key}`} title={`Create ${mod.singular}`} />;
}

export function EditRecordView({ moduleKey, id }: { moduleKey: string; id: number }) {
  const { state } = useCrm();
  const mod = getModule(moduleKey);
  const record = mod ? getRecord(state, mod, id) : undefined;
  if (!mod || !record) notFound();

  const initial = Object.fromEntries(mod.fields.map((f) => [f.name, record[f.name] == null ? "" : String(record[f.name])]));

  return <RecordForm mod={mod} recordId={record.id} initial={initial} cancelHref={`/crm/${mod.key}/${record.id}`} title={`Edit ${mod.singular} (${record._title})`} />;
}

export function ConvertLeadView({ id }: { id: number }) {
  const { state } = useCrm();
  // Set when this page performs the conversion, so it doesn't bounce back to the
  // (now converted) lead while navigating to the new deal.
  const [converting, setConverting] = useState(false);
  const lead = getRecord(state, MODULES.leads, id);
  if (converting) return null;
  if (!lead) notFound();
  if (lead.converted_at) redirect(`/crm/leads/${lead.id}`);

  return <ConvertForm leadId={lead.id} leadName={lead._title} company={String(lead.company ?? "")} onConverting={() => setConverting(true)} />;
}
