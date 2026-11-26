/*
 * The Impacgo ERP suite's module data: names, colours, copy and the
 * cross-module flows. Plain data (no "use client"), so both server pages
 * (app/[slug]/page.tsx) and client components (components/site/suite.tsx,
 * which re-exports everything here) can import it.
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
