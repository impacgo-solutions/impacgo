"use client";

import { FlowMap } from "@/components/site/erp";
import { LiveToasts, type Toast } from "@/components/site/Media";
import { useAutoplay } from "@/components/site/motion";
import { FLOWS, MODULE, type ModuleKey } from "@/lib/erp-modules";

/*
 * Interactive pieces of the module pages (app/[slug]/page.tsx), reusing the
 * ERP home page's motion: live notification toasts beside the hero screen and
 * the animated flow map, filtered to the flows this module takes part in.
 * Toast figures are sample data, like the module screens.
 */

const TOASTS: Record<ModuleKey, Omit<Toast, "tone" | "tint">[]> = {
  hrms: [
    { icon: "✓", title: "Leave approved", text: "Ananya Rao · Casual · 2 days" },
    { icon: "→", title: "Checked in", text: "Plant 2 · 9:02 AM · 231 present" },
    { icon: "₹", title: "Payslips ready", text: "March · 248 employees" },
    { icon: "+", title: "Offer accepted", text: "Senior accountant · joins 1 May" },
  ],
  finance: [
    { icon: "✓", title: "Supplier bill posted", text: "From Chain · no re-entry" },
    { icon: "₹", title: "Payroll posted", text: "Salary expense · March" },
    { icon: "=", title: "Bank reconciled", text: "Current account · 0 differences" },
    { icon: "!", title: "GSTR-1 due soon", text: "Outward supplies · track status" },
  ],
  chain: [
    { icon: "↓", title: "Goods received", text: "1,200 kg steel · bin A-03" },
    { icon: "✓", title: "Purchase order approved", text: "PO-1182 · 3 suppliers compared" },
    { icon: "→", title: "Shipment dispatched", text: "Sales order SO-2210" },
    { icon: "⇄", title: "Stock transferred", text: "Main warehouse → branch store" },
  ],
  make: [
    { icon: "→", title: "Work order released", text: "WO-2291 · CNC line" },
    { icon: "↓", title: "Material issued", text: "From Chain · bin A-03" },
    { icon: "✓", title: "Job card completed", text: "Operation 30 · on time" },
    { icon: "₹", title: "Production costed", text: "WO-2291 · posted to Finance" },
  ],
  plan: [
    { icon: "!", title: "Shortage flagged", text: "Bearings · 1,800 short · week 16" },
    { icon: "✓", title: "MRP run complete", text: "Purchase and work order suggestions" },
    { icon: "%", title: "Capacity alert", text: "Paint shop nearing capacity" },
    { icon: "→", title: "Purchase suggested", text: "Bearings · before week 16" },
  ],
  retail: [
    { icon: "₹", title: "Bill paid by UPI", text: "Koramangala store · counter 2" },
    { icon: "↓", title: "Store stock updated", text: "Every bill, instantly" },
    { icon: "★", title: "Reward points added", text: "Loyalty member · 120 points" },
    { icon: "✓", title: "Shift closed", text: "Counter 2 · no variance" },
  ],
  project: [
    { icon: "✓", title: "Milestone reached", text: "Site installation · on schedule" },
    { icon: "⏱", title: "Timesheet approved", text: "38 hours · logged to project" },
    { icon: "!", title: "Risk raised", text: "Vendor delivery may slip" },
    { icon: "₹", title: "Budget updated", text: "Spend vs budget · live" },
  ],
};

export function ModuleToasts({ k, className = "" }: { k: ModuleKey; className?: string }) {
  const m = MODULE[k];
  return <LiveToasts className={className} items={TOASTS[k].map((t) => ({ ...t, tone: m.color, tint: m.tint }))} />;
}

/* This module's cross-module flows: pick one (or let it autoplay) and watch the data travel. */
export function ModuleFlows({ k }: { k: ModuleKey }) {
  const mine = FLOWS.map((f, i) => ({ ...f, i })).filter((f) => f.path.includes(k));
  const { index, go, pauseProps } = useAutoplay(mine.length, 5200);
  const f = mine[index];
  return (
    <div className="grid items-center gap-10 pt-12 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-14" {...pauseProps}>
      <ol data-reveal="left" className="flex flex-col gap-1.5">
        {mine.map((x, i) => (
          <li key={x.activity}>
            <button
              type="button"
              onClick={() => go(i)}
              aria-pressed={i === index}
              className={`flex w-full cursor-pointer flex-col gap-1.5 rounded-xl px-4 py-3 text-left transition-[background-color,box-shadow] duration-300 ${i === index ? "bg-white shadow-[0_12px_30px_-18px_rgb(45_79_224/50%)] ring-1 ring-[#dfe5ff]" : "hover:bg-white/70"}`}
            >
              <span className={`text-[15px] font-semibold ${i === index ? "text-[#14161c]" : "text-[#464b57]"}`}>{x.activity}</span>
              <span className="flex flex-wrap items-center gap-1 text-[12px] font-semibold">
                {x.path.map((p, j) => (
                  <span key={p} className="inline-flex items-center gap-1">
                    {j > 0 ? <span className="text-[#9a9ea8]">{x.both ? "↔" : "→"}</span> : null}
                    <span style={{ color: MODULE[p].color }}>{MODULE[p].name}</span>
                  </span>
                ))}
              </span>
              {/* Every story stays in the page (search engines read them all); the active one opens. */}
              <span className={`grid transition-[grid-template-rows] duration-300 ${i === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <span className="overflow-hidden text-[14px] leading-[1.6] text-[#5c6170]">{x.story}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>
      <div data-reveal="zoom" className="relative rounded-[28px] border border-[#ebe5dc] bg-white p-5 shadow-[0_40px_80px_-50px_rgb(20_22_28/40%)] sm:p-8">
        <span aria-hidden className="site-grid-light pointer-events-none absolute inset-0 rounded-[28px]" />
        <FlowMap flow={f.i} />
      </div>
    </div>
  );
}
