"use client";

import type { CSSProperties, ReactNode, SVGProps } from "react";
import { TiltFrame } from "@/components/site/Media";
import { useAutoplay } from "@/components/site/motion";

/*
 * The Impacgo ERP suite: one source of truth for module names, colours, copy and
 * the cross-module flows, plus the illustrated "screens" every section reuses.
 * Screen figures are sample data that show what each module looks like.
 */

export type ModuleKey = "hrms" | "finance" | "chain" | "make" | "plan" | "retail" | "project";

export type ErpModule = {
  key: ModuleKey;
  name: string;
  area: string;
  color: string;
  tint: string;
  pitch: string;
  what: string;
  example: string;
  features: string[];
  links: ModuleKey[];
  /** The module's own web app (sign in there). Modules without one yet just offer a demo. */
  appUrl?: string;
};

/** "https://hrms.impacgo.com/" -> "hrms.impacgo.com" */
export const appHost = (url: string) => new URL(url).host;

export const ERP_MODULES: ErpModule[] = [
  {
    key: "hrms",
    appUrl: "https://hrms.impacgo.com/",
    name: "HRMS",
    area: "Human resource management",
    color: "#c8452a",
    tint: "#fff1ec",
    pitch: "Your people, from first interview to monthly payslip.",
    what: "Hire, onboard, track attendance, approve leave and run payroll in one place, with self-service so employees can help themselves.",
    example: "Attendance from three plants and every approved leave flow straight into this month's payroll, with no spreadsheets passed around.",
    features: ["Employee records and organisation structure", "Attendance, shifts and regularisation", "Leave management and approvals", "Payroll, salary structures and payslips", "Recruitment and onboarding", "Timesheets, work entries and self-service"],
    links: ["finance", "project"],
  },
  {
    key: "finance",
    appUrl: "https://finance.impacgo.com/",
    name: "Finance",
    area: "Financial management and accounting",
    color: "#15803d",
    tint: "#ecfdf3",
    pitch: "Books that close themselves, because every module posts to them.",
    what: "General ledger, payables, receivables, bank and GST, fed automatically by payroll, purchasing, production and retail.",
    example: "A supplier invoice from Chain, a salary run from HRMS and a day of store sales from Retail all land in the ledger without re-entry.",
    features: ["General ledger and accounting", "Accounts payable and receivable", "GST and tax workflows", "Cash, bank, payments and receipts", "Financial statements and reporting", "Financial controls and compliance support"],
    links: ["hrms", "chain", "make", "retail"],
  },
  {
    key: "chain",
    appUrl: "https://chain.impacgo.com/",
    name: "Chain",
    area: "Supply chain management",
    color: "#2d4fe0",
    tint: "#eef1ff",
    pitch: "Buy, store, move and sell stock with one stock ledger.",
    what: "Procurement, sales orders, warehouses, bins and batch tracking. Chain owns your stock data, so every module sees the same balance.",
    example: "1,200 kg of steel is received into bin A-03 at the main warehouse, and Plan, Make and Finance see it instantly.",
    features: ["Procurement and purchasing", "Sales and order workflows", "Inventory and warehouse management", "Warehouse bins and stock balances", "Supplier and customer records", "Batch/serial tracking and stock transfers"],
    links: ["finance", "plan", "make", "retail"],
  },
  {
    key: "make",
    appUrl: "https://make.impacgo.com/",
    name: "Make",
    area: "Manufacturing and production",
    color: "#b26a07",
    tint: "#fff7e8",
    pitch: "From bill of materials to finished goods, with cost on every job.",
    what: "BOMs, work orders, routings and job cards across your work centres, with material and cost tracked on every order.",
    example: "Work order WO-2291 issues material from Chain, books time on the CNC line and posts its finished goods and cost when it completes.",
    features: ["Bill of Materials (BOM)", "Production planning and work orders", "Routing, operations and job cards", "Material issue and consumption", "Work centres and production resources", "Production costing and performance tracking"],
    links: ["chain", "plan", "finance"],
  },
  {
    key: "plan",
    name: "Plan",
    area: "Planning and MRP",
    color: "#6d4ef0",
    tint: "#f3f0ff",
    pitch: "Know what to buy and build before you run short.",
    what: "Demand and supply planning, MRP, scheduling and capacity, so shortages show up as exceptions weeks before they stop a line.",
    example: "MRP spots that bearings will run 1,800 short in week 16 and suggests a purchase order before production feels it.",
    features: ["Demand and supply planning", "Material Requirements Planning (MRP)", "Production scheduling", "Resource and capacity planning", "Forecasting and planning analytics", "Exception and shortage management"],
    links: ["chain", "make"],
  },
  {
    key: "retail",
    appUrl: "https://retail.impacgo.com/",
    name: "Retail",
    area: "Retail and point of sale",
    color: "#c2185b",
    tint: "#fdeef4",
    pitch: "Fast billing at the counter, with stock and books kept in step.",
    what: "POS billing, pricing, multi-store operations and payments, with every sale synced to inventory and accounts.",
    example: "A bill at your Koramangala store reduces that store's stock in Chain and is posted to Finance, with no end-of-day upload.",
    features: ["POS billing and transactions", "Product and pricing management", "Store and multi-store operations", "Inventory synchronisation", "Payment workflows", "Sales and store performance reports"],
    links: ["chain", "finance"],
  },
  {
    key: "project",
    name: "Project",
    area: "Project and delivery management",
    color: "#0e7490",
    tint: "#ecfeff",
    pitch: "Deliver on time and on budget, with the right people on the job.",
    what: "Plan projects on Kanban or Gantt views, track budgets and costs, staff them from HRMS and log time with timesheets.",
    example: "An installation project books engineers from HRMS, tracks spend against its budget and raises a risk when a milestone slips.",
    features: ["Project setup and tracking", "Task and milestone management", "Kanban and Gantt-style planning", "Project budgets and cost tracking", "Timesheets and resource allocation", "Risks, issues and project reporting"],
    links: ["hrms"],
  },
];

export const MODULE = Object.fromEntries(ERP_MODULES.map((m) => [m.key, m])) as Record<ModuleKey, ErpModule>;

/* Business activities that start in one module and continue in another. */
export const FLOWS: { activity: string; path: ModuleKey[]; both?: boolean; story: string }[] = [
  { activity: "Employee and salary operations", path: ["hrms", "finance"], story: "Approved payroll posts salary expense and liabilities to the ledger, with no journal typed by hand." },
  { activity: "Purchase and supplier payment", path: ["chain", "finance"], story: "Goods receipts and supplier bills become payables, then payments, against the same purchase order." },
  { activity: "Material procurement and production", path: ["chain", "plan", "make"], story: "MRP reads live stock from Chain, plans the shortfall and releases work orders to the shop floor." },
  { activity: "Finished goods and stock updates", path: ["make", "chain"], story: "Completed work orders add finished goods to stock through Chain's common posting, so balances never disagree." },
  { activity: "Retail billing and accounting", path: ["retail", "chain", "finance"], story: "Every POS bill reduces store stock and is posted to the books, with no end-of-day upload." },
  { activity: "Project staffing and employee time", path: ["project", "hrms"], both: true, story: "Projects draw people from HRMS, and their timesheets flow back for payroll and project cost." },
  { activity: "Production cost visibility", path: ["make", "finance"], story: "Material, labour and overhead from each work order roll up into production cost in Finance." },
];

/* ---------- Icons ---------- */
const ICONS: Record<string, ReactNode> = {
  hrms: <><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0111 0" /><circle cx="17" cy="9" r="2.4" /><path d="M15.6 14.1a4.5 4.5 0 015 4.4" /></>,
  finance: <><ellipse cx="12" cy="6" rx="7" ry="2.5" /><path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" /><path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" /></>,
  chain: <><path d="M3 6h11v10H3z" /><path d="M14 10h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></>,
  make: <><path d="M3 20V11l5 3v-3l5 3v-3l5 3V5h3v15z" /><path d="M7 17h2M12 17h2" /></>,
  plan: <><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /><path d="M7.5 16.5l3-2.5 2.5 1.5 3.5-3" /></>,
  retail: <><path d="M4 9l1.5-5h13L20 9" /><path d="M4 9a2.7 2.7 0 005.3 0 2.7 2.7 0 005.4 0 2.7 2.7 0 005.3 0" /><path d="M5 11.5V20h14v-8.5M10 20v-5h4v5" /></>,
  project: <><path d="M4 4v16h16" /><path d="M7.5 8h6M10 12h7.5M8.5 16h5" /></>,
  shield: <><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  layers: <><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 13l9 5 9-5" /></>,
  database: <><ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" /><path d="M4.5 5.5v13c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-13" /><path d="M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5" /></>,
  api: <><path d="M8 3.5v4M16 3.5v4" /><path d="M6 7.5h12v3a6 6 0 01-12 0z" /><path d="M12 16.5v4" /></>,
  tenant: <><path d="M4 20V6l7-2v16" /><path d="M11 9h7a2 2 0 012 2v9" /><path d="M3 20h18M7 8h1M7 12h1M7 16h1M14 13h2M14 16h2" /></>,
  eye: <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" /></>,
  flow: <><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.5 6H14a4 4 0 014 4v5.5" /></>,
  grow: <><path d="M4 18l6-6 4 4 6-8" /><path d="M15 8h5v5" /></>,
  cog: <><circle cx="12" cy="12" r="3" /><path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9L5.3 5.3" /></>,
  lock: <><rect x="5" y="10.5" width="14" height="10" rx="2" /><path d="M8 10.5V8a4 4 0 018 0v2.5" /></>,
  cow: <><path d="M6 8c-2 0-3-1.5-3-3 1.5 0 2.5.5 3 1.5M18 8c2 0 3-1.5 3-3-1.5 0-2.5.5-3 1.5" /><path d="M6 7.5h12v6a6 6 0 01-12 0z" /><circle cx="9.5" cy="15.5" r=".8" /><circle cx="14.5" cy="15.5" r=".8" /></>,
  box: <><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" /><path d="M4 7.5l8 4.5 8-4.5M12 12v9" /></>,
  leaf: <><path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14z" /><path d="M5 19l7-7" /></>,
  crm: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
};

export function ErpIcon({ name, size = 18, ...p }: SVGProps<SVGSVGElement> & { name: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      {ICONS[name]}
    </svg>
  );
}

/* Rounded square in the module's colours, used wherever a module is named. */
export function ModuleTile({ m, size = 40, icon = 20, className = "" }: { m: ErpModule; size?: number; icon?: number; className?: string }) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-xl ${className}`} style={{ width: size, height: size, background: m.tint, color: m.color }}>
      <ErpIcon name={m.key} size={icon} />
    </span>
  );
}

/* ---------- Illustrated module screens ---------- */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function Kpis({ items, color }: { items: [string, string, string?][]; color: string }) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      {items.map(([label, value, note], i) => (
        <div key={label} className="site-pop-in rounded-xl border border-[#efe9e0] bg-white p-2.5 sm:p-3.5" style={delay(i * 70)}>
          <p className="truncate text-[10px] font-semibold tracking-[0.06em] text-[#686c79] uppercase sm:text-[11px]">{label}</p>
          <p className="pt-1 text-[17px] leading-none font-semibold tracking-[-0.02em] text-[#14161c] tabular-nums sm:text-[24px]">{value}</p>
          {note ? (
            <p className="truncate pt-1.5 text-[10px] font-semibold sm:text-[11px]" style={{ color }}>
              {note}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function Panel({ title, children, className = "", aside }: { title: string; children: ReactNode; className?: string; aside?: ReactNode }) {
  return (
    <div className={`site-pop-in rounded-xl border border-[#efe9e0] bg-white p-3 sm:p-4 ${className}`} style={delay(200)}>
      <div className="flex items-center justify-between gap-2 pb-2.5">
        <p className="truncate text-[12px] font-semibold text-[#14161c] sm:text-[13px]">{title}</p>
        {aside}
      </div>
      {children}
    </div>
  );
}

function Chip({ children, color, tint }: { children: ReactNode; color: string; tint: string }) {
  return (
    <span className="inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap sm:text-[11px]" style={{ background: tint, color }}>
      {children}
    </span>
  );
}

const OK = { color: "#15803d", tint: "#ecfdf3" };
const WARN = { color: "#b45309", tint: "#fff7e8" };
const BAD = { color: "#b91c1c", tint: "#fef2f2" };
const INFO = { color: "#2d4fe0", tint: "#eef1ff" };

function Bar({ pct, color, i = 0, h = "h-1.5" }: { pct: number; color: string; i?: number; h?: string }) {
  return (
    <span className={`block ${h} overflow-hidden rounded-full bg-[#f1ede6]`}>
      <span className="site-grow-x block h-full rounded-full" style={{ width: `${pct}%`, background: color, ...delay(250 + i * 90) }} />
    </span>
  );
}

function HrmsScreen() {
  const m = MODULE.hrms;
  const pct = 231 / 248;
  return (
    <>
      <Kpis color={m.color} items={[["Headcount", "248", "3 sites"], ["Present today", "231", "93% attendance"], ["Leave requests", "6", "Awaiting approval"]]} />
      <div className="grid gap-2 pt-2 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-3 sm:pt-3">
        <Panel title="Attendance today" className="flex flex-col items-center max-sm:hidden">
          <svg viewBox="0 0 80 80" className="size-[96px] -rotate-90">
            <circle cx="40" cy="40" r="32" fill="none" stroke="#f1ede6" strokeWidth="9" />
            <circle cx="40" cy="40" r="32" fill="none" stroke={m.color} strokeWidth="9" strokeLinecap="round" pathLength={100} strokeDasharray={`${pct * 100} 100`} className="site-ring-draw" />
          </svg>
          <p className="pt-2 text-[12px] text-[#5c6170]">231 of 248 in</p>
        </Panel>
        <Panel title="Leave requests" aside={<Chip {...WARN}>6 pending</Chip>}>
          {[
            ["Ananya Rao", "Casual · 2 days", "Approve", WARN],
            ["Vikram Shah", "Sick · 1 day", "Approved", OK],
            ["Meera Nair", "Earned · 5 days", "Approve", WARN],
          ].map(([n, t, s, tone], i) => (
            <div key={n as string} className="site-pop-in flex items-center gap-2.5 border-t border-[#f3efe8] py-2 first:border-0" style={delay(300 + i * 80)}>
              <span className="grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-bold text-white" style={{ background: m.color }}>
                {(n as string).split(" ").map((w) => w[0]).join("")}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12px] font-semibold text-[#14161c]">{n as string}</span>
                <span className="block truncate text-[11px] text-[#686c79]">{t as string}</span>
              </span>
              <Chip {...(tone as typeof OK)}>{s as string}</Chip>
            </div>
          ))}
        </Panel>
      </div>
      <Panel title="March payroll · 248 payslips" className="mt-2 sm:mt-3" aside={<Chip {...OK}>Ready to post to Finance</Chip>}>
        <Bar pct={100} color={m.color} h="h-2" />
      </Panel>
    </>
  );
}

function FinanceScreen() {
  const m = MODULE.finance;
  const months = [["Oct", 62, 48], ["Nov", 70, 52], ["Dec", 66, 58], ["Jan", 78, 55], ["Feb", 74, 51], ["Mar", 88, 60]] as const;
  return (
    <>
      <Kpis color={m.color} items={[["Receivables", "₹18.4L", "12 invoices due"], ["Payables", "₹9.2L", "5 bills this week"], ["Cash & bank", "₹42.7L", "Reconciled today"]]} />
      <div className="grid gap-2 pt-2 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] sm:gap-3 sm:pt-3">
        <Panel
          title="Income vs expense"
          aside={
            <span className="flex gap-2 text-[10px] text-[#686c79]">
              <span className="flex items-center gap-1"><span className="size-1.5 rounded-full" style={{ background: m.color }} />Income</span>
              <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-[#c9c1b4]" />Expense</span>
            </span>
          }
        >
          <div className="flex h-[118px] items-end gap-2.5">
            {months.map(([mo, inc, exp], i) => (
              <div key={mo} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="flex h-[96px] w-full items-end justify-center gap-0.5">
                  <span className="site-grow-y block w-1/2 max-w-[12px] rounded-t-[3px]" style={{ height: `${inc}%`, background: m.color, ...delay(200 + i * 70) }} />
                  <span className="site-grow-y block w-1/2 max-w-[12px] rounded-t-[3px] bg-[#d6cfc4]" style={{ height: `${exp}%`, ...delay(240 + i * 70) }} />
                </div>
                <span className="text-[10px] text-[#686c79]">{mo}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="GST summary · March" aside={<Chip {...OK}>GSTR-1 ready</Chip>}>
          {[
            ["Output GST", "₹7,42,300"],
            ["Input tax credit", "₹4,18,650"],
            ["Net payable", "₹3,23,650"],
          ].map(([l, v], i) => (
            <p key={l} className={`site-pop-in flex justify-between border-t border-[#f3efe8] py-2 text-[12px] first:border-0 ${i === 2 ? "font-semibold text-[#14161c]" : "text-[#464b57]"}`} style={delay(300 + i * 80)}>
              {l}
              <span className="tabular-nums">{v}</span>
            </p>
          ))}
        </Panel>
      </div>
    </>
  );
}

function ChainScreen() {
  const m = MODULE.chain;
  const rows = [
    ["Steel rod 12 mm", "Main · A-03-2", "1,240 kg", "In stock", OK],
    ["Bearing 6204", "Main · C-11-1", "420 pcs", "Low", BAD],
    ["Packing carton L", "Plant 2 · B-07", "3,600 pcs", "In stock", OK],
    ["Motor 0.5 HP", "Main → Plant 2", "80 pcs", "In transit", INFO],
  ] as const;
  return (
    <>
      <Kpis color={m.color} items={[["Stock value", "₹1.24Cr", "3 warehouses"], ["Open POs", "14", "4 due this week"], ["Low stock", "9 items", "Below reorder level"]]} />
      <Panel title="Stock by bin" className="mt-2 sm:mt-3" aside={<Chip {...INFO}>PO-1042 received</Chip>}>
        <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)_minmax(0,0.8fr)_auto] gap-x-3 pb-1.5 text-[10px] font-semibold tracking-[0.06em] text-[#686c79] uppercase">
          <span>Item</span>
          <span>Warehouse · bin</span>
          <span className="text-right">On hand</span>
          <span className="w-[70px]" />
        </div>
        {rows.map(([item, bin, qty, status, tone], i) => (
          <div key={item} className="site-pop-in grid grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)_minmax(0,0.8fr)_auto] items-center gap-x-3 border-t border-[#f3efe8] py-2 text-[12px]" style={delay(260 + i * 80)}>
            <span className="truncate font-semibold text-[#14161c]">{item}</span>
            <span className="truncate text-[#5c6170]">{bin}</span>
            <span className="text-right text-[#383d48] tabular-nums">{qty}</span>
            <span className="flex w-[70px] justify-end">
              <Chip {...tone}>{status}</Chip>
            </span>
          </div>
        ))}
      </Panel>
    </>
  );
}

function MakeScreen() {
  const m = MODULE.make;
  const orders = [
    ["WO-2291", "Gearbox housing", "500 units · CNC line 2", 82],
    ["WO-2292", "Shaft assembly", "1,200 units · Assembly", 64],
    ["WO-2295", "Mounting bracket", "300 units · Press shop", 100],
    ["WO-2298", "Pump body", "250 units · Foundry", 38],
  ] as const;
  return (
    <>
      <Kpis color={m.color} items={[["Open work orders", "23", "6 starting today"], ["On-time delivery", "94%", "Last 30 days"], ["Scrap rate", "1.8%", "Down from 2.4%"]]} />
      <Panel title="Work orders on the floor" className="mt-2 sm:mt-3" aside={<Chip {...OK}>Job card JC-771 started</Chip>}>
        {orders.map(([id, name, meta, pct], i) => (
          <div key={id} className="border-t border-[#f3efe8] py-2 first:border-0">
            <div className="flex items-center justify-between gap-3 pb-1.5 text-[12px]">
              <span className="min-w-0 truncate">
                <span className="font-semibold text-[#14161c]">{id}</span> <span className="text-[#464b57]">{name}</span>
                <span className="text-[#686c79] max-sm:hidden"> · {meta}</span>
              </span>
              <span className="shrink-0 font-semibold tabular-nums" style={{ color: pct === 100 ? "#15803d" : m.color }}>
                {pct === 100 ? "Done" : `${pct}%`}
              </span>
            </div>
            <Bar pct={pct} color={pct === 100 ? "#16a34a" : m.color} i={i} />
          </div>
        ))}
      </Panel>
    </>
  );
}

function PlanScreen() {
  const m = MODULE.plan;
  const weeks = [["W14", 64], ["W15", 78], ["W16", 86], ["W17", 104], ["W18", 72], ["W19", 58]] as const;
  return (
    <>
      <Kpis color={m.color} items={[["Planned orders", "37", "From last MRP run"], ["Shortages", "4", "Next 6 weeks"], ["Capacity used", "82%", "All work centres"]]} />
      <div className="grid gap-2 pt-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] sm:gap-3 sm:pt-3">
        <Panel title="Capacity by week">
          <div className="relative flex h-[118px] items-end gap-2">
            {/* 100% capacity line: bars are drawn at load / 1.1 of their 96px track, above an ~21px label row */}
            <span className="absolute inset-x-0 border-t border-dashed border-[#e7a3a3]" style={{ bottom: "108px" }} />
            {weeks.map(([w, load], i) => (
              <div key={w} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="flex h-[96px] w-full items-end justify-center">
                  <span className="site-grow-y block w-full max-w-[22px] rounded-t-[4px]" style={{ height: `${load / 1.1}%`, background: load > 100 ? "#dc2626" : m.color, ...delay(200 + i * 70) }} />
                </div>
                <span className={`text-[10px] ${load > 100 ? "font-semibold text-[#b91c1c]" : "text-[#686c79]"}`}>{w}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Exceptions" aside={<Chip {...BAD}>4 open</Chip>}>
          {[
            ["Bearing 6204 short by 1,800", "Needed W16 · Suggest PO", BAD],
            ["Paint line over capacity", "W17 at 104% · Move 2 orders", WARN],
            ["Motor 0.5 HP arrives late", "Reschedule WO-2301", WARN],
          ].map(([t, s, tone], i) => (
            <div key={t as string} className="site-pop-in flex items-start gap-2.5 border-t border-[#f3efe8] py-2 first:border-0" style={delay(300 + i * 80)}>
              <span className="mt-1 size-2 shrink-0 rounded-full" style={{ background: (tone as typeof OK).color }} />
              <span className="min-w-0">
                <span className="block truncate text-[12px] font-semibold text-[#14161c]">{t as string}</span>
                <span className="block truncate text-[11px] text-[#686c79]">{s as string}</span>
              </span>
            </div>
          ))}
        </Panel>
      </div>
    </>
  );
}

function RetailScreen() {
  const m = MODULE.retail;
  const stores = [["Koramangala", 142, "₹1.42L"], ["Indiranagar", 108, "₹1.08L"], ["HSR Layout", 86, "₹0.86L"], ["Whitefield", 50, "₹0.50L"]] as const;
  return (
    <>
      <Kpis color={m.color} items={[["Sales today", "₹3.86L", "4 stores"], ["Bills", "412", "Since 9:00 am"], ["Average bill", "₹937", "Up 6% this week"]]} />
      <div className="grid gap-2 pt-2 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] sm:gap-3 sm:pt-3">
        <Panel title="Sales by store">
          {stores.map(([s, v, label], i) => (
            <div key={s} className="py-1.5">
              <p className="flex justify-between pb-1 text-[12px]">
                <span className="text-[#383d48]">{s}</span>
                <span className="font-semibold text-[#14161c] tabular-nums">{label}</span>
              </p>
              <Bar pct={(v / 142) * 100} color={m.color} i={i} />
            </div>
          ))}
        </Panel>
        <Panel title="Bill #4412" aside={<Chip {...OK}>Paid · UPI</Chip>} className="max-sm:hidden">
          {[
            ["Cotton kurta × 2", "₹1,598"],
            ["Linen scarf", "₹649"],
            ["GST 5%", "₹113"],
          ].map(([l, v], i) => (
            <p key={l} className="site-pop-in flex justify-between border-t border-dashed border-[#ebe5dc] py-1.5 text-[12px] text-[#464b57] first:border-0" style={delay(300 + i * 80)}>
              {l}
              <span className="tabular-nums">{v}</span>
            </p>
          ))}
          <p className="flex justify-between border-t border-[#14161c] pt-2 text-[13px] font-semibold text-[#14161c]">
            Total <span className="tabular-nums">₹2,360</span>
          </p>
        </Panel>
      </div>
    </>
  );
}

function ProjectScreen() {
  const m = MODULE.project;
  const tasks = [
    ["Site survey", 0, 2, true],
    ["Design approval", 1, 2, true],
    ["Equipment procurement", 2, 3, false],
    ["Installation", 4, 3, false],
    ["Testing & handover", 6, 2, false],
  ] as const;
  return (
    <>
      <Kpis color={m.color} items={[["Active projects", "12", "2 starting this month"], ["Budget used", "64%", "On plan"], ["Milestones due", "5", "Next 14 days"]]} />
      <Panel title="Plant line upgrade · Gantt" className="mt-2 sm:mt-3" aside={<Chip {...WARN}>1 risk open</Chip>}>
        <div className="grid grid-cols-[minmax(0,130px)_minmax(0,1fr)] gap-x-3 pb-1 text-[10px] font-semibold text-[#686c79]">
          <span />
          <span className="grid grid-cols-8">
            {Array.from({ length: 8 }, (_, i) => (
              <span key={i}>W{i + 1}</span>
            ))}
          </span>
        </div>
        {tasks.map(([name, start, len, done], i) => (
          <div key={name} className="grid grid-cols-[minmax(0,130px)_minmax(0,1fr)] items-center gap-x-3 border-t border-[#f3efe8] py-1.5">
            <span className="truncate text-[12px] text-[#383d48]">{name}</span>
            <span className="relative h-4">
              <span
                className="site-grow-x absolute top-0 h-full rounded-md"
                style={{ left: `${(start / 8) * 100}%`, width: `${(len / 8) * 100}%`, background: done ? "#16a34a" : m.color, opacity: done ? 0.85 : 1, ...delay(250 + i * 110) }}
              />
            </span>
          </div>
        ))}
      </Panel>
    </>
  );
}

const SCREENS: Record<ModuleKey, () => ReactNode> = {
  hrms: HrmsScreen,
  finance: FinanceScreen,
  chain: ChainScreen,
  make: MakeScreen,
  plan: PlanScreen,
  retail: RetailScreen,
  project: ProjectScreen,
};

const TITLES: Record<ModuleKey, string> = {
  hrms: "People overview",
  finance: "Finance overview",
  chain: "Inventory & purchasing",
  make: "Production floor",
  plan: "Planning & MRP",
  retail: "Store performance",
  project: "Projects & delivery",
};

/* One module's dashboard. Re-keyed on change so its bars and rows animate in again. */
export function ModuleScreen({ k, className = "" }: { k: ModuleKey; className?: string }) {
  const m = MODULE[k];
  const Screen = SCREENS[k];
  return (
    <div key={k} className={`bg-[#faf8f4] p-3 sm:p-4 ${className}`}>
      <div className="flex items-center gap-2.5 pb-3">
        <ModuleTile m={m} size={30} icon={16} className="rounded-lg" />
        <p className="text-[14px] font-semibold text-[#14161c] sm:text-[15px]">{TITLES[k]}</p>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-[#15803d] ring-1 ring-[#e3f5e9]">
          <span className="relative flex size-1.5">
            <span className="site-pulse absolute inset-0 rounded-full bg-[#16a34a]" />
            <span className="relative size-1.5 rounded-full bg-[#16a34a]" />
          </span>
          Live
        </span>
      </div>
      <Screen />
    </div>
  );
}

/* ---------- Hero console: the whole suite in one app window ---------- */
export function SuiteConsole() {
  const { index, go, pauseProps } = useAutoplay(ERP_MODULES.length, 4600);
  const active = ERP_MODULES[index];

  return (
    <div {...pauseProps}>
      <TiltFrame max={3} url="impacgo.com/erp-suite">
        <div className="grid min-h-[470px] bg-white md:grid-cols-[200px_minmax(0,1fr)]">
          <aside className="min-w-0 border-[#efe9e0] max-md:border-b md:border-r">
            <div className="flex items-center gap-2 px-4 pt-4 pb-3 max-md:hidden">
              <span className="text-[11px] font-semibold tracking-[0.12em] text-[#686c79] uppercase">Impacgo ERP</span>
            </div>
            <div role="tablist" aria-label="ERP modules" className="flex gap-1 overflow-x-auto p-2 [scrollbar-width:none] md:flex-col md:p-2 md:pt-0">
              {ERP_MODULES.map((m, i) => (
                <button
                  key={m.key}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  onClick={() => go(i)}
                  className={`relative flex shrink-0 cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13px] font-semibold transition-colors duration-200 ${i === index ? "text-[#14161c]" : "text-[#5c6170] hover:bg-[#faf7f2] hover:text-[#14161c]"}`}
                  style={i === index ? { background: m.tint } : undefined}
                >
                  <span className="grid size-6 place-items-center rounded-md" style={{ color: m.color, background: i === index ? "#fff" : m.tint }}>
                    <ErpIcon name={m.key} size={14} />
                  </span>
                  {m.name}
                  {i === index ? <span aria-hidden className="absolute top-2 bottom-2 left-0 w-[3px] rounded-full max-md:hidden" style={{ background: m.color }} /> : null}
                </button>
              ))}
            </div>
          </aside>
          <div className="min-w-0">
            <div className="flex items-center gap-3 border-b border-[#efe9e0] px-4 py-2.5">
              <span className="flex h-8 flex-1 items-center gap-2 rounded-lg bg-[#f6f3ee] px-3 text-[12px] text-[#686c79]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
                <span className="truncate">Search employees, items, invoices, work orders…</span>
              </span>
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#4f6cf2] to-[#6d4ef0] text-[11px] font-bold text-white">AK</span>
            </div>
            <ModuleScreen k={active.key} />
          </div>
        </div>
      </TiltFrame>
      <p aria-live="polite" className="sr-only">
        Showing {active.name}: {active.area}
      </p>
    </div>
  );
}
