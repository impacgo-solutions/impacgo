"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { FormBar, FormRow } from "@/components/crm/RecordForm";
import { btnPrimary, btnSecondary, inputClass } from "@/components/crm/ui";
import { useCrm } from "@/lib/crm-store";
import { DEAL_STAGES } from "@/lib/modules";

type Props = { leadId: number; leadName: string; company: string; onConverting: () => void };

export function ConvertForm({ leadId, leadName, company, onConverting }: Props) {
  const { convertLead } = useCrm();
  const router = useRouter();
  const [createDeal, setCreateDeal] = useState(true);
  const [error, setError] = useState<string | null>(null);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    let deal = null;

    if (createDeal) {
      const name = String(form.get("deal_name") ?? "").trim();
      const amountRaw = String(form.get("amount") ?? "").replace(/[,$\s]/g, "");
      const closing = String(form.get("closing_date") ?? "").trim();
      const amount = amountRaw ? Number(amountRaw) : null;
      if (!name) return setError("Enter a deal name, or untick “Create a new Deal for this Account”.");
      if (amount != null && (!Number.isFinite(amount) || amount < 0)) return setError("Amount must be a positive number.");
      deal = { name, amount, closing_date: closing || null, stage: String(form.get("stage")) };
    }

    onConverting();
    const result = convertLead(leadId, deal);
    if (result) router.push(result.dealId ? `/crm/deals/${result.dealId}` : `/crm/contacts/${result.contactId}`);
  }

  return (
    <form onSubmit={submit} noValidate>
      <FormBar title={`Convert Lead (${leadName})`}>
        <Link href={`/crm/leads/${leadId}`} className={btnSecondary}>
          Cancel
        </Link>
        <button type="submit" className={btnPrimary}>
          Convert
        </button>
      </FormBar>

      <div className="mx-auto flex max-w-[1000px] flex-col gap-4 p-4 sm:p-5">
        <section className="rounded-xl border border-[#ebe5dc] bg-white p-5">
          <ul className="flex flex-col gap-2 text-[14px] text-[#14161c]">
            <li>
              <strong>Create New Account:</strong>{" "}
              {company ? <>“{company}” (an existing account with this name is reused)</> : <span className="text-[#5c6170]">none, because the lead has no company</span>}
            </li>
            <li>
              <strong>Create New Contact:</strong> {leadName}
            </li>
          </ul>
          <label className="mt-5 flex cursor-pointer items-center gap-2.5 text-[14px] font-bold">
            <input type="checkbox" checked={createDeal} onChange={(e) => setCreateDeal(e.target.checked)} className="size-4 accent-[#2d4fe0]" />
            Create a new Deal for this Account
          </label>
        </section>

        <fieldset disabled={!createDeal} className="rounded-xl border border-[#ebe5dc] bg-white disabled:opacity-50">
          <legend className="sr-only">Deal details</legend>
          <h3 className="border-b border-[#f3efe8] px-5 py-3 text-[15px] font-bold">Deal Information</h3>
          <div className="grid gap-x-10 gap-y-4 p-5 md:grid-cols-2">
            <FormRow id="deal_name" label="Deal Name" required>
              <input id="deal_name" name="deal_name" defaultValue={company || leadName} className={inputClass} />
            </FormRow>
            <FormRow id="amount" label="Amount">
              <input id="amount" name="amount" inputMode="decimal" className={inputClass} />
            </FormRow>
            <FormRow id="closing_date" label="Closing Date">
              <input id="closing_date" name="closing_date" type="date" className={inputClass} />
            </FormRow>
            <FormRow id="stage" label="Stage">
              <select id="stage" name="stage" defaultValue={DEAL_STAGES[0]} className={inputClass}>
                {DEAL_STAGES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </FormRow>
          </div>
        </fieldset>

        {error ? (
          <p role="alert" className="rounded-lg bg-[#fdecec] px-4 py-2.5 text-[14px] text-[#c4161c]">
            {error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
