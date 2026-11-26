import type { ModuleKey } from "@/lib/erp-modules";

/*
 * Content for the seven module pages (/erp-suite/hrms, /erp-suite/supply-chain …).
 * Each page targets the words people actually search for ("HRMS software",
 * "MRP software", "retail POS software") so Google and AI assistants can send
 * those searches to the right Impacgo page.
 *
 * Grounded in the working module apps: the capability groups, workflows,
 * benefits and the "Is it available today?" answers come from the main site's
 * src/data/erpModules.js. Keep both in step when a module changes.
 */

export type ModulePage = {
  key: ModuleKey;
  slug: string;
  /** <title>, max ~60 characters. */
  title: string;
  /** Meta description, max ~155 characters. */
  description: string;
  h1: string;
  intro: string;
  /** Words people search for; used in structured data. */
  searchTerms: string[];
  groups: { category: string; items: string[] }[];
  workflow: { title: string; text: string; lanes: { name?: string; steps: string[] }[] };
  benefits: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const MODULE_PAGES: ModulePage[] = [
  {
    key: "hrms",
    slug: "hrms",
    title: "HRMS Software: Payroll, Attendance & Leave | Impacgo",
    description: "Impacgo HRMS is HR and payroll software: employee records, attendance and shifts, leave, payroll and payslips, recruitment and one approval queue.",
    h1: "HRMS software for payroll, attendance and leave",
    intro:
      "From the day someone applies to the day they're promoted, Impacgo HRMS keeps every employee record, approval and payslip in one place, instead of scattered across spreadsheets, chat threads and paper forms.",
    searchTerms: ["HRMS software", "HR software", "payroll software", "attendance management software", "leave management system", "HR and payroll software India"],
    groups: [
      { category: "People management", items: ["Employee directory", "Onboarding and offboarding", "Transfers and promotions"] },
      { category: "Attendance and time", items: ["Check in / check out", "Shift management", "Attendance regularisation"] },
      { category: "Leave management", items: ["Apply leave", "Leave calendar", "Holiday calendar"] },
      { category: "Payroll and compensation", items: ["Salary structures", "Payslips", "Reimbursements"] },
      { category: "Work and timesheets", items: ["Daily, weekly and monthly work entries", "Timesheet approval"] },
      { category: "Recruitment", items: ["Job openings", "Candidate pipeline", "Offers"] },
      { category: "Performance", items: ["Goals and OKRs", "Review cycles", "Recognition"] },
      { category: "Benefits and perks", items: ["Insurance", "ESOP / equity", "Wellness programmes"] },
      { category: "Documents and reports", items: ["Employee documents", "Company policies", "Attendance, payroll and custom reports"] },
    ],
    workflow: {
      title: "One queue for every approval",
      text: "Leave requests, timesheets, attendance regularisations and reimbursement claims all land in a single Pending Approvals list, instead of a manager's inbox.",
      lanes: [{ steps: ["Employee submits a request", "It routes to the right approver", "Manager approves or rejects", "Payroll and records update instantly"] }],
    },
    benefits: [
      { title: "One source of truth", text: "Employee records, attendance, leave and payroll live in one system instead of five disconnected tools." },
      { title: "Nothing gets lost in email", text: "Every leave request, timesheet and reimbursement claim goes through a structured approval queue, not inboxes." },
      { title: "Built for growing teams", text: "Role hierarchy and permissions scale from a handful of employees to a multi-department organisation." },
      { title: "Payroll-ready data", text: "Attendance, leave and reimbursements feed straight into salary structures, with no manual reconciliation at month-end." },
    ],
    faqs: [
      { q: "What is HRMS software?", a: "HRMS (human resource management system) software keeps employee records, attendance, leave, payroll and recruitment in one system. Impacgo HRMS does this and connects to Impacgo Finance, so approved payroll is posted to the books automatically." },
      { q: "Is Impacgo HRMS available today?", a: "Yes. Impacgo HRMS is available today as its own app at hrms.impacgo.com. Book a free demo and our team will walk you through it and set up your access." },
      { q: "Does Impacgo HRMS include payroll?", a: "Yes. It covers salary structures, payslips and reimbursements, and approved attendance and leave flow straight into the month's payroll." },
      { q: "Can it handle payroll for multiple states or entities?", a: "Yes. The compensation module supports multiple salary structures and organisational hierarchies." },
      { q: "Does it replace our existing HR software, or work alongside it?", a: "Either. Some teams replace spreadsheets and legacy tools outright, others run it in parallel first. We'll scope the right approach for your team." },
    ],
  },
  {
    key: "finance",
    slug: "finance-accounting",
    title: "Accounting Software with GST & TDS | Impacgo Finance",
    description: "Impacgo Finance: general ledger, payables, receivables, bank, budgeting, fixed assets and GST and TDS tracking across multiple entities and branches.",
    h1: "Finance and accounting software with GST and TDS built in",
    intro:
      "General ledger, receivables, payables, cash and compliance for organisations running more than one legal entity, branch or country from the same books, fed automatically by payroll, purchasing, production and retail.",
    searchTerms: ["accounting software", "ERP finance module", "GST accounting software", "general ledger software", "multi-entity accounting software", "TDS compliance software India"],
    groups: [
      { category: "Core finance", items: ["General ledger", "Accounts receivable", "Accounts payable", "Cash and bank"] },
      { category: "Planning and assets", items: ["Budgeting", "Fixed assets", "Taxation"] },
      { category: "Period close", items: ["Financial closing workflow"] },
      { category: "Legal-entity support", items: ["Multiple legal entities", "Multiple branches", "Multi-currency ready"] },
      { category: "Compliance (India)", items: ["GSTR-1: outward supplies", "GSTR-3B: summary return", "TDS return (Form 26Q)"] },
      { category: "Insights", items: ["Financial reports", "Prioritised worklist across modules"] },
    ],
    workflow: {
      title: "Record, approve, reconcile, close",
      text: "Every journal entry, invoice and bank transaction moves through the same disciplined cycle, so period close isn't a month-end scramble.",
      lanes: [{ steps: ["Entries, invoices and bank transactions recorded", "Routed for approval", "Reconciled against bank and sub-ledgers", "Period closed and reported"] }],
    },
    benefits: [
      { title: "Audit-ready by default", text: "Every entry carries an approval trail, so there's no reconstructing what happened at quarter-end." },
      { title: "Compliance built in", text: "GST and TDS filings are tracked with due dates and status, not managed in a separate spreadsheet." },
      { title: "One book per group", text: "Work across multiple companies and branches instead of maintaining separate ledgers by hand." },
      { title: "Faster period close", text: "A dedicated closing workflow instead of an ad-hoc month-end fire drill." },
    ],
    faqs: [
      { q: "What is Impacgo Finance?", a: "Impacgo Finance is the accounting module of Impacgo ERP: general ledger, payables, receivables, cash and bank, budgeting, fixed assets, GST and TDS tracking and financial reports, for one or many legal entities." },
      { q: "Is Impacgo Finance available today?", a: "Yes. Impacgo Finance is available today as its own app at finance.impacgo.com. Book a free demo and our team will walk you through the ledger, compliance and closing workflows and set up your access." },
      { q: "Does it handle GST and TDS filing?", a: "It tracks GSTR-1, GSTR-3B and TDS (Form 26Q) filing status and due dates against your actual transactions, so nothing slips past a deadline unnoticed." },
      { q: "Can it run multiple legal entities or branches on one account?", a: "Yes. Support for multiple legal entities and branches is core to how the module is built, not an add-on." },
      { q: "Does it connect to payroll, purchasing and sales?", a: "Yes. Approved payroll from HRMS, supplier bills from Chain, production costs from Make and store sales from Retail all post to the ledger without re-entry." },
    ],
  },
  {
    key: "chain",
    slug: "supply-chain",
    title: "Supply Chain & Inventory Management Software | Impacgo",
    description: "Impacgo Chain connects CRM, sales, purchasing, inventory, warehouse and logistics: order to cash, procure to pay, batch and serial tracking by bin.",
    h1: "Supply chain and inventory management software",
    intro:
      "CRM, sales, purchasing, inventory, warehouse and logistics as one system, so a lead you won last month and the shipment leaving your warehouse today are part of the same record, not five disconnected tools.",
    searchTerms: ["supply chain management software", "inventory management software", "warehouse management software", "purchase management software", "sales order management", "batch and serial number tracking"],
    groups: [
      { category: "CRM", items: ["Leads and opportunities", "Customers and customer groups", "Sales persons and territories", "Price lists"] },
      { category: "Sales management", items: ["Quotations and sales orders", "Delivery notes and sales invoices", "Sales returns and credit notes", "Dispatch schedule and customer payments"] },
      { category: "Purchase management", items: ["Suppliers and supplier groups", "Purchase requests, RFQs and supplier quotations", "Purchase orders and receipts (GRN)", "Purchase invoices, returns and debit notes"] },
      { category: "Inventory management", items: ["Item master, item groups and units", "Warehouses and bin locations", "Stock entry, transfer and reconciliation", "Batch and serial number tracking"] },
      { category: "Warehouse management", items: ["Picking and packing lists", "Put-away and bin management", "Cycle counting", "Inventory movement"] },
      { category: "Logistics", items: ["Shipments and delivery schedule", "Transport and dispatch planning", "Courier tracking", "Vehicle allocation"] },
    ],
    workflow: {
      title: "Three core flows, one record",
      text: "Every supply chain runs on the same three journeys. Chain gives each one a visible, click-through pipeline.",
      lanes: [
        { name: "Order to cash", steps: ["Lead", "Opportunity", "Quotation", "Sales order", "Delivery note", "Sales invoice", "Customer payment"] },
        { name: "Procure to pay", steps: ["Purchase request", "RFQ", "Supplier quotation", "Purchase order", "Purchase receipt", "Purchase invoice"] },
        { name: "Inventory flow", steps: ["Purchase receipt", "Warehouse", "Stock transfer", "Shipment"] },
      ],
    },
    benefits: [
      { title: "One record, start to finish", text: "A lead, its quotation, the resulting order and the shipment that fulfils it are connected, not re-entered at each stage." },
      { title: "Full inventory traceability", text: "Batch and serial tracking down to the bin location, not just a total stock count." },
      { title: "Purchase discipline", text: "RFQs, supplier quotations and purchase orders follow the same auditable path every time." },
      { title: "Logistics you can see", text: "Dispatch planning and courier tracking sit in the same system as the order that triggered them." },
    ],
    faqs: [
      { q: "What is supply chain management software?", a: "Supply chain management software runs buying, stocking, moving and selling goods in one system. Impacgo Chain covers CRM, sales, purchasing, inventory, warehousing and logistics, and keeps one stock ledger that every other Impacgo module reads." },
      { q: "Is Impacgo Chain available today?", a: "Yes. Impacgo Chain is available today as its own app at chain.impacgo.com. Book a free demo and our team will walk you through the flow from lead to delivery and set up your access." },
      { q: "Does it cover both sales and purchasing?", a: "Yes, on the same platform. Order to cash (sales) and procure to pay (purchasing) share the same customer, supplier, item and warehouse data." },
      { q: "Can it track batches and serial numbers, not just quantities?", a: "Yes. Batch management and serial number tracking are part of inventory management, alongside bin-level stock visibility." },
      { q: "Does it work for multiple warehouses?", a: "Yes. Warehouses, bin locations and stock transfers between locations are built in, so every module sees the same stock balance." },
    ],
  },
  {
    key: "make",
    slug: "manufacturing",
    title: "Manufacturing ERP Software: BOM to Costing | Impacgo Make",
    description: "Impacgo Make runs production from bill of materials to finished goods: routings, work orders, job cards, material issue, costing and machine utilisation.",
    h1: "Manufacturing ERP software, from bill of materials to finished goods",
    intro:
      "Engineer the product, plan the run, execute it on the shop floor and know exactly what it cost, without switching between a spreadsheet, a production board and a separate costing tool.",
    searchTerms: ["manufacturing ERP software", "production management software", "BOM software", "work order management", "production costing software", "shop floor management"],
    groups: [
      { category: "Engineering", items: ["Bill of materials (BOM)", "Routing", "Work centres"] },
      { category: "Planning", items: ["Production planning"] },
      { category: "Execution", items: ["Work orders", "Job cards", "Shop floor material issue and tracking"] },
      { category: "Cost and performance", items: ["Production costing", "Machine utilisation"] },
      { category: "Insights", items: ["Manufacturing reports"] },
    ],
    workflow: {
      title: "Engineer, plan, execute, cost",
      text: "Every production run follows the same traceable path, from an approved BOM to a costed finished good.",
      lanes: [{ steps: ["BOM and routing approved", "Work order released", "Material issued and job cards completed", "Production costed, machine use tracked"] }],
    },
    benefits: [
      { title: "One approved recipe", text: "Every work order runs off a version-controlled BOM and routing, not whatever the last shift remembered." },
      { title: "Shop floor visibility", text: "Job cards and material issues are tracked in real time, not reconciled at the end of the week." },
      { title: "True production cost", text: "Costing rolls up from actual material issue and machine utilisation, not a rough estimate." },
      { title: "Maintenance-aware scheduling", text: "Work centre status, including maintenance, feeds directly into what can be planned next." },
    ],
    faqs: [
      { q: "What is manufacturing ERP software?", a: "Manufacturing ERP software manages production from the bill of materials to finished goods, including work orders, shop floor tracking and costing. Impacgo Make does this and connects to Chain for stock and Finance for cost." },
      { q: "Is Impacgo Make available today?", a: "Yes. Impacgo Make is available today as its own app at make.impacgo.com. Book a free demo and our team will walk you through the BOM-to-costing flow and set up your access." },
      { q: "Can it handle multi-level BOMs and revisions?", a: "Yes. BOM revisions go through an approval step before a work order can be released against them." },
      { q: "Does it track actual costs, or just standard costs?", a: "Production costing rolls up from what was actually issued and produced on the shop floor, alongside machine utilisation data." },
      { q: "How does Make connect to inventory and accounts?", a: "Work orders issue material from Chain, completed orders add finished goods back to stock, and material, labour and overhead roll up into production cost in Finance." },
    ],
  },
  {
    key: "plan",
    slug: "mrp-planning",
    title: "MRP & Production Planning Software | Impacgo Plan",
    description: "Impacgo Plan: demand forecasting, MRP, master production scheduling, capacity planning and shortage exceptions, connected to production and stock.",
    h1: "MRP and production planning software",
    intro:
      "Forecast demand, run MRP, schedule production and catch shortages before they stall a work order, instead of finding out you're short on raw material the day it's needed.",
    searchTerms: ["MRP software", "production planning software", "material requirements planning", "master production scheduling", "capacity planning software", "demand forecasting software"],
    groups: [
      { category: "Demand", items: ["Demand forecasting"] },
      { category: "Supply planning", items: ["Material requirements planning (MRP)", "Master production scheduling (MPS)", "Capacity planning", "Procurement planning"] },
      { category: "Scheduling", items: ["Production scheduling", "Planning calendar"] },
      { category: "Control", items: ["Exception management"] },
      { category: "Insights", items: ["Planning reports"] },
    ],
    workflow: {
      title: "Forecast, plan, schedule, resolve",
      text: "Demand feeds supply planning, supply planning drives the schedule, and exceptions surface the moment something won't add up.",
      lanes: [{ steps: ["Demand forecast approved", "MRP and MPS suggest supply and purchases", "Production scheduled against capacity", "Shortages and delays flagged"] }],
    },
    benefits: [
      { title: "See shortages before they bite", text: "Material shortfalls are flagged against a needed-by date, not discovered when the line stops." },
      { title: "One number everyone plans against", text: "Demand forecast, MRP and MPS all reference the same approved plan instead of separate spreadsheets." },
      { title: "Capacity-aware scheduling", text: "Production scheduling accounts for real capacity constraints, not just open dates on a calendar." },
      { title: "Exceptions, not just reports", text: "Capacity breaches and late supplier deliveries surface as actionable exceptions to resolve." },
    ],
    faqs: [
      { q: "What is MRP software?", a: "MRP (material requirements planning) software works out what materials you need, how many and by when, from your demand and current stock. Impacgo Plan runs MRP on live stock from Chain and releases work orders to Make." },
      { q: "Is Impacgo Plan available today?", a: "Impacgo Plan works hand in hand with Make and Chain, since planning depends on real production and supply data. Book a free demo and our team will walk you through it and how it fits your operations." },
      { q: "Does it work without Impacgo Make or Chain?", a: "Plan is designed to sit on top of production (Make) and supply chain (Chain) data, so it's most useful alongside them. We're happy to discuss your specific setup." },
      { q: "What kind of exceptions does it catch?", a: "Things like a work centre nearing a capacity breach or a supplier delivery running late, flagged as open exceptions to resolve, not buried in a report." },
    ],
  },
  {
    key: "retail",
    slug: "retail-pos",
    title: "Retail POS & Billing Software for Multi-Store | Impacgo",
    description: "Impacgo Retail: POS billing with barcode scanning, cash, card, UPI and wallet payments, loyalty, promotions, store stock and shift closing for every store.",
    h1: "Retail POS and billing software for multi-store chains",
    intro:
      "Billing, inventory, loyalty and shift closing for every store in the chain, on one system instead of a different spreadsheet per location. Every sale updates stock and the books.",
    searchTerms: ["retail POS software", "billing software for retail", "multi-store POS", "point of sale system", "retail store management software", "POS with UPI payments"],
    groups: [
      { category: "Point of sale", items: ["POS billing", "Held bills", "Returns and exchange"] },
      { category: "Store management", items: ["Stores", "Counters", "Cash open / close"] },
      { category: "Inventory", items: ["Store inventory", "Stock transfers", "Stock requests"] },
      { category: "Customers", items: ["Loyalty members", "Reward points", "Customer wallet"] },
      { category: "Promotions", items: ["Coupons", "Discounts", "Combo offers", "Buy one get one"] },
      { category: "Payments", items: ["Cash, card, UPI and wallet", "Transaction log"] },
      { category: "Shift management", items: ["Cashier shifts", "Tender-wise totals", "Shift closing and variance"] },
      { category: "Insights", items: ["Daily sales and cash summary", "Store and item performance", "Customer and loyalty reports"] },
    ],
    workflow: {
      title: "Every bill updates the business instantly",
      text: "A completed sale isn't just a receipt. It updates stock and rolls straight into the day's cash closing.",
      lanes: [{ steps: ["Customer at the counter", "Billing with barcode or QR scan", "Payment by cash, card, UPI or wallet", "Stock updated and cash closed"] }],
    },
    benefits: [
      { title: "One system, every store", text: "Stores, counters and cash registers are managed centrally instead of store-by-store spreadsheets." },
      { title: "Stock updates in real time", text: "Every completed bill adjusts store inventory instantly, with no manual end-of-day stock reconciliation." },
      { title: "Loyalty that's actually usable", text: "Reward points and wallet balances are visible to cashiers at billing, not in a separate app." },
      { title: "Clean shift closing", text: "Tender-wise totals and variance are calculated automatically at shift close, not tallied by hand." },
    ],
    faqs: [
      { q: "What is retail POS software?", a: "Retail POS (point of sale) software handles billing at the counter, payments, returns and store stock. Impacgo Retail does this for one store or a whole chain, and posts every sale to inventory and accounts." },
      { q: "Is Impacgo Retail available today?", a: "Yes. Impacgo Retail is available today as its own app at retail.impacgo.com. Book a free demo and our team will walk you through POS billing, inventory sync and shift closing and set up your access." },
      { q: "Can it run across multiple store locations?", a: "Yes. Multi-store and multi-counter operation is core to how it's built, with stock visibility and transfers between locations." },
      { q: "What payment methods does it support?", a: "Cash, card, UPI and wallet payments are all tracked in the transaction log, including split payments on a single bill." },
      { q: "Does it support loyalty points and promotions?", a: "Yes. Loyalty members, reward points and a customer wallet sit alongside coupons, discounts, combo offers and buy-one-get-one promotions." },
    ],
  },
  {
    key: "project",
    slug: "project-management",
    title: "Project Management Software: Kanban & Gantt | Impacgo",
    description: "Impacgo Project: Kanban boards, Gantt charts, milestones, timesheets, capacity planning, a risk register and budget tracking for every project you run.",
    h1: "Project management software with Kanban, Gantt and timesheets",
    intro:
      "Track projects from kickoff to go-live: tasks on a Kanban board, timelines on a Gantt chart, team capacity against real hours and budget burn against actual spend, instead of a status update pulled together the night before a review.",
    searchTerms: ["project management software", "Gantt chart software", "Kanban project management", "timesheet software", "project budget tracking", "resource planning software"],
    groups: [
      { category: "Delivery", items: ["Projects", "Kanban task boards", "Milestones", "Gantt chart", "Calendar"] },
      { category: "Resourcing", items: ["Team and capacity planning", "Timesheets"] },
      { category: "Governance", items: ["Issue and bug tracking", "Risk register and risk matrix", "Budget and expense approvals", "Document vault"] },
      { category: "Insights", items: ["Project and resource reports", "Completion, utilisation and budget analytics"] },
    ],
    workflow: {
      title: "Plan, execute, track, close",
      text: "Every project follows the same visible path, from a scoped plan to a closed-out budget, not a spreadsheet nobody opens again after kickoff.",
      lanes: [{ steps: ["Project scoped, budgeted and staffed", "Tasks tracked on Kanban and Gantt", "Time, issues, risks and spend logged", "Milestones hit and project closed"] }],
    },
    benefits: [
      { title: "One home for every project", text: "Projects, tasks, timesheets, issues and budgets live in one system instead of a spreadsheet per project manager." },
      { title: "See risk before it becomes a delay", text: "A live risk register and probability-impact matrix surface what could go wrong before it does." },
      { title: "Budget burn you can see daily", text: "Spend against budget updates as expenses are logged and approved, not reconciled at month-end." },
      { title: "Capacity-aware staffing", text: "Team allocation is tracked against real capacity, so no one finds out they're overbooked mid-sprint." },
    ],
    faqs: [
      { q: "What is project management software?", a: "Project management software plans and tracks tasks, timelines, people and budgets in one place. Impacgo Project adds Kanban boards, Gantt charts, timesheets, a risk register and budget tracking, connected to Impacgo HRMS." },
      { q: "Is Impacgo Project available today?", a: "Impacgo Project brings tasks, timelines, timesheets and budgets into one place. Book a free demo and our team will walk you through the Kanban, Gantt and budget-tracking workflows and how they fit your delivery process." },
      { q: "Does it handle billable time and timesheets?", a: "Yes. Timesheets are logged against specific projects and tasks with submitted and approved status, so billable hours and utilisation are tracked without a separate spreadsheet." },
      { q: "Can it track risks and issues separately from tasks?", a: "Yes. Issues (with severity and status) and risks (with probability, impact and mitigation plans) each have their own register, alongside a probability-impact matrix." },
      { q: "Does it connect to HR and payroll?", a: "Yes. Projects draw people from Impacgo HRMS, and their timesheets flow back for payroll and project cost." },
    ],
  },
];

export const PAGE_BY_KEY = Object.fromEntries(MODULE_PAGES.map((p) => [p.key, p])) as Record<ModuleKey, ModulePage>;
export const PAGE_BY_SLUG = Object.fromEntries(MODULE_PAGES.map((p) => [p.slug, p])) as Record<string, ModulePage>;

/** "/hrms" — pass to next/link (it adds the /erp-suite basePath). */
export const modulePath = (key: ModuleKey) => `/${PAGE_BY_KEY[key].slug}`;
