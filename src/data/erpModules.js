import { Users, DollarSign, Truck, Factory, Workflow, ShoppingCart, FolderKanban } from "lucide-react";

// Single source of truth for the Impacgo ERP Suite — used by both the
// homepage summary cards (ERPProductsSection) and the per-module detail
// pages (src/pages/erp/ERPModuleDetail.jsx). Content is grounded in the
// actual working prototypes (not invented): module names, groupings and
// workflow steps below match what each prototype's UI actually shows.
//
// heroImage points into public/erp-hero/ (a plain string path, not a
// bundler import) so the site keeps building even before an image exists
// for a given slug — the hero just falls back to its gradient alone until
// the file is dropped in. WebP (not PNG/JPG) to keep these lightweight
// since they load on every visit to a module page:
//   public/erp-hero/hrms.webp | finance.webp | chain.webp | make.webp | plan.webp | retail.webp | project.webp
export const erpModules = [
  {
    slug: "hrms",
    heroImage: "/erp-hero/hrms.webp",
    icon: Users,
    name: "HRMS",
    tagline: "Workforce Management",
    color: "violet",
    description:
      "Hiring, attendance, payroll and performance — the full employee lifecycle in one system.",
    capabilities: ["Attendance", "Payroll", "Leave", "Recruitment"],

    headline: "One Platform for Your Entire Workforce",
    subheadline:
      "From the day someone applies to the day they're promoted, Impacgo HRMS keeps every employee record, approval and payslip in one place — instead of scattered across spreadsheets, chat threads and paper forms.",
    heroHighlights: [
      { label: "People Management", value: "Directory, onboarding & transfers" },
      { label: "Attendance & Time", value: "Check-in, shifts & regularization" },
      { label: "Payroll", value: "Salary structures & payslips" },
      { label: "Approvals", value: "One queue for leave, time & expenses" },
    ],
    workflow: {
      title: "One Queue, Every Approval",
      description:
        "Leave requests, timesheet submissions, attendance regularizations and reimbursement claims all land in a single Pending Approvals list — instead of a manager's inbox.",
      steps: ["Employee submits request", "Routes to the right approver", "Manager approves or rejects", "Reflected instantly in payroll & records"],
    },
    moduleGroups: [
      {
        category: "People Management",
        items: ["Employee Directory", "Onboarding & Offboarding", "Transfers & Promotions"],
      },
      {
        category: "Attendance & Time",
        items: ["Check In / Check Out", "Shift Management", "Regularization"],
      },
      {
        category: "Work & Timesheet",
        items: ["Work Entries (Daily / Weekly / Monthly)", "Timesheet Approval"],
      },
      {
        category: "Leave Management",
        items: ["Apply Leave", "Leave Calendar", "Holiday Calendar"],
      },
      {
        category: "Payroll & Compensation",
        items: ["Salary Structure", "Payslips", "Reimbursements"],
      },
      {
        category: "Benefits & Perks",
        items: ["Insurance", "ESOP / Equity", "Wellness Programs"],
      },
      {
        category: "Performance",
        items: ["Goals / OKRs", "Review Cycles", "Recognition"],
      },
      {
        category: "Project Management",
        items: ["Programs & Projects", "Sprints & Releases", "Resource Allocation"],
      },
      {
        category: "Recruitment",
        items: ["Job Openings", "Candidate Pipeline", "Offers"],
      },
      {
        category: "Documents & Reports",
        items: ["Employee Documents", "Company Policies", "Attendance, Payroll & Custom Reports"],
      },
    ],
    benefits: [
      {
        title: "One Source of Truth",
        description: "Employee records, attendance, leave and payroll live in one system instead of five disconnected tools.",
      },
      {
        title: "Nothing Gets Lost in Email",
        description: "Every leave request, timesheet and reimbursement claim routes through a structured approval queue — not inboxes.",
      },
      {
        title: "Built for Growing Teams",
        description: "Role hierarchy and permissions scale from a handful of employees to a multi-department organisation.",
      },
      {
        title: "Payroll-Ready Data",
        description: "Attendance, leave and reimbursements feed straight into salary structures — no manual reconciliation at month-end.",
      },
    ],
    faqs: [
      {
        question: "Is Impacgo HRMS available today?",
        answer:
          "HRMS is an active, in-development module of the Impacgo ERP Suite. We're onboarding early-access partners who want a say in the roadmap — reach out and we'll walk you through where it stands and what's next.",
      },
      {
        question: "Can it handle payroll for multiple states or entities?",
        answer:
          "Yes — the compensation module is built to support multiple salary structures and organisational hierarchies, which is a core requirement for the businesses we're building it with.",
      },
      {
        question: "Does it replace our existing HR software, or work alongside it?",
        answer:
          "Either — some early-access partners are replacing spreadsheets and legacy tools outright, others are running it in parallel first. We'll scope the right approach for your team.",
      },
    ],
  },

  {
    slug: "finance",
    heroImage: "/erp-hero/finance.webp",
    icon: DollarSign,
    name: "Finance",
    tagline: "Accounting & Compliance",
    color: "blue",
    description: "Financial management across legal entities, with built-in India tax compliance.",
    capabilities: ["General Ledger", "AP / AR", "Budgeting", "Tax Filing"],

    headline: "Financial Operations Across Every Legal Entity",
    subheadline:
      "General ledger, receivables, payables, cash and compliance — for organisations running more than one legal entity, branch, or country from the same books.",
    heroHighlights: [
      { label: "Core Finance", value: "GL, AR, AP & Cash / Bank" },
      { label: "Legal Entities", value: "Multiple entities & branches" },
      { label: "Compliance", value: "GSTR-1, GSTR-3B & TDS tracking" },
      { label: "Period Close", value: "Structured financial closing" },
    ],
    workflow: {
      title: "Record → Approve → Reconcile → Close",
      description:
        "Every journal entry, invoice and bank transaction moves through the same disciplined cycle, so period close isn't a month-end scramble.",
      steps: ["Journal entries, invoices & bank transactions recorded", "Routed for approval", "Reconciled against bank & sub-ledgers", "Period closed & reported"],
    },
    moduleGroups: [
      {
        category: "Core Finance",
        items: ["General Ledger", "Accounts Receivable", "Accounts Payable", "Cash & Bank"],
      },
      {
        category: "Planning & Assets",
        items: ["Budgeting", "Fixed Assets", "Taxation"],
      },
      {
        category: "Period Close",
        items: ["Financial Closing"],
      },
      {
        category: "Legal-Entity Support",
        items: ["Multiple Legal Entities", "Multiple Branches", "Multi-Currency Ready"],
      },
      {
        category: "Compliance (India)",
        items: ["GSTR-1 — Outward Supplies", "GSTR-3B — Summary Return", "TDS Return (Form 26Q)"],
      },
      {
        category: "Insights",
        items: ["Financial Reports", "Prioritised Worklist Across Modules"],
      },
    ],
    benefits: [
      {
        title: "Audit-Ready by Default",
        description: "Every entry carries an approval trail — no reconstructing what happened at quarter-end.",
      },
      {
        title: "Compliance Built In",
        description: "GST and TDS filings are tracked with due dates and status, not managed in a separate spreadsheet.",
      },
      {
        title: "One Book Per Group",
        description: "Consolidate across multiple companies and branches instead of maintaining separate ledgers by hand.",
      },
      {
        title: "Faster Period Close",
        description: "A dedicated closing workflow instead of an ad-hoc month-end fire drill.",
      },
    ],
    faqs: [
      {
        question: "Is Impacgo Finance available today?",
        answer:
          "Finance is an active, in-development module. We're bringing on early-access finance teams to validate the ledger, compliance and closing workflows against real books — talk to us about joining.",
      },
      {
        question: "Does it handle GST and TDS filing directly?",
        answer:
          "It tracks GSTR-1, GSTR-3B and TDS (Form 26Q) filing status and due dates against your actual transactions, so nothing slips past a deadline unnoticed.",
      },
      {
        question: "Can it run multiple legal entities or branches on one account?",
        answer:
          "Yes — support for multiple legal entities and branches is core to how the module is built, not an add-on.",
      },
    ],
  },

  {
    slug: "chain",
    heroImage: "/erp-hero/chain.webp",
    icon: Truck,
    name: "Chain",
    tagline: "Supply Chain Management",
    color: "amber",
    description: "CRM through to purchasing, inventory and logistics — one connected supply chain.",
    capabilities: ["CRM", "Purchasing", "Inventory", "Logistics"],

    headline: "One Connected Supply Chain — From Lead to Delivery",
    subheadline:
      "CRM, sales, purchasing, inventory, warehouse and logistics as one system — so a lead you won last month and the shipment leaving your warehouse today are part of the same record, not five disconnected tools.",
    heroHighlights: [
      { label: "CRM", value: "Leads, opportunities & customers" },
      { label: "Sales & Purchase", value: "Quotation to invoice, RFQ to PO" },
      { label: "Inventory", value: "Batches, serials & bin locations" },
      { label: "Logistics", value: "Dispatch planning & courier tracking" },
    ],
    workflow: {
      title: "Three Core Flows",
      description: "Every supply chain runs on the same three journeys — Chain gives each one a visible, click-through pipeline.",
      pipelines: [
        {
          name: "Order to Cash",
          steps: ["Lead", "Opportunity", "Quotation", "Sales Order", "Delivery Note", "Sales Invoice", "Customer Payment"],
        },
        {
          name: "Procure to Pay",
          steps: ["Purchase Request", "RFQ", "Supplier Quotation", "Purchase Order", "Purchase Receipt", "Purchase Invoice"],
        },
        {
          name: "Inventory Flow",
          steps: ["Purchase Receipt", "Warehouse", "Stock Transfer", "Shipment"],
        },
      ],
    },
    moduleGroups: [
      {
        category: "CRM",
        items: ["Leads", "Opportunities", "Customers", "Customer Groups", "Customer Contacts", "Sales Persons", "Sales Territories", "Price Lists"],
      },
      {
        category: "Sales Management",
        items: ["Quotations", "Sales Orders", "Delivery Notes", "Sales Invoices", "Sales Returns", "Credit Notes", "Dispatch Schedule", "Customer Payments"],
      },
      {
        category: "Purchase Management",
        items: ["Suppliers", "Supplier Groups", "Purchase Requests", "RFQ", "Supplier Quotations", "Purchase Orders", "Purchase Receipts (GRN)", "Purchase Invoices", "Purchase Returns", "Debit Notes"],
      },
      {
        category: "Inventory Management",
        items: ["Item Master", "Item Groups", "Units of Measure", "Warehouses", "Bin Locations", "Stock Entry", "Stock Transfer", "Stock Reconciliation", "Batch Management", "Serial Number Tracking"],
      },
      {
        category: "Warehouse Management",
        items: ["Picking Lists", "Packing Lists", "Put-away", "Cycle Counting", "Inventory Movement", "Bin Management"],
      },
      {
        category: "Logistics",
        items: ["Shipments", "Delivery Schedule", "Transport Management", "Dispatch Planning", "Courier Tracking", "Vehicle Allocation"],
      },
    ],
    benefits: [
      {
        title: "One Record, Start to Finish",
        description: "A lead, its quotation, the resulting order and the shipment that fulfils it are all connected — not re-entered at each stage.",
      },
      {
        title: "Full Inventory Traceability",
        description: "Batch and serial tracking down to the bin location, not just a total stock count.",
      },
      {
        title: "Purchase Discipline",
        description: "RFQs, supplier quotations and purchase orders follow the same auditable path every time.",
      },
      {
        title: "Logistics You Can See",
        description: "Dispatch planning and courier tracking sit inside the same system as the order that triggered them.",
      },
    ],
    faqs: [
      {
        question: "Is Impacgo Chain available today?",
        answer:
          "Chain is an active, in-development module — currently at prototype v2.4. We're working with early-access trading and distribution businesses to validate the CRM-to-logistics flow end to end.",
      },
      {
        question: "Does it cover both sales and purchasing, or just one side?",
        answer:
          "Both, on the same platform — Order to Cash (sales) and Procure to Pay (purchasing) share the same customer, supplier, item and warehouse data.",
      },
      {
        question: "Can it track batches and serial numbers, not just quantities?",
        answer:
          "Yes — batch management and serial number tracking are part of Inventory Management, alongside bin-level stock visibility.",
      },
    ],
  },

  {
    slug: "make",
    heroImage: "/erp-hero/make.webp",
    icon: Factory,
    name: "Make",
    tagline: "Manufacturing",
    color: "slate",
    description: "Bill of materials through to shop-floor execution and production costing.",
    capabilities: ["BOM & Routing", "Work Orders", "Shop Floor", "Costing"],

    headline: "From Bill of Materials to Finished Goods",
    subheadline:
      "Engineer the product, plan the run, execute it on the shop floor, and know exactly what it cost — without switching between a spreadsheet, a production board and a separate costing tool.",
    heroHighlights: [
      { label: "Engineering", value: "BOM, routing & work centers" },
      { label: "Execution", value: "Work orders & job cards" },
      { label: "Shop Floor", value: "Material issue tracking" },
      { label: "Cost & Performance", value: "Production costing & utilization" },
    ],
    workflow: {
      title: "Engineer → Plan → Execute → Cost",
      description: "Every production run follows the same traceable path, from an approved BOM to a costed finished good.",
      steps: ["BOM & routing approved", "Work order released", "Material issued & job cards completed on the shop floor", "Production costed & machine utilization tracked"],
    },
    moduleGroups: [
      {
        category: "Engineering",
        items: ["Bill of Materials", "Routing", "Work Centers"],
      },
      {
        category: "Planning",
        items: ["Production Planning"],
      },
      {
        category: "Execution",
        items: ["Work Orders", "Job Cards", "Shop Floor (Material Issue & Tracking)"],
      },
      {
        category: "Cost & Performance",
        items: ["Production Costing", "Machine Utilization"],
      },
      {
        category: "Insights",
        items: ["Manufacturing Reports"],
      },
    ],
    benefits: [
      {
        title: "One Approved Recipe",
        description: "Every work order runs off a version-controlled BOM and routing, not whatever the last shift remembered.",
      },
      {
        title: "Shop Floor Visibility",
        description: "Job cards and material issues are tracked in real time, not reconciled at the end of the week.",
      },
      {
        title: "True Production Cost",
        description: "Costing rolls up from actual material issue and machine utilization, not a rough estimate.",
      },
      {
        title: "Maintenance-Aware Scheduling",
        description: "Work center status (including maintenance) feeds directly into what can be planned next.",
      },
    ],
    faqs: [
      {
        question: "Is Impacgo Make available today?",
        answer:
          "Make is an active, in-development module. We're bringing on early-access manufacturers to pressure-test the BOM-to-costing flow against real production runs — get in touch to join.",
      },
      {
        question: "Can it handle multi-level BOMs and revisions?",
        answer:
          "Yes — BOM revisions go through an approval step before a work order can be released against them.",
      },
      {
        question: "Does it track actual costs, or just planned/standard costs?",
        answer:
          "Production costing is built to roll up from what was actually issued and produced on the shop floor, alongside machine utilization data.",
      },
    ],
  },

  {
    slug: "plan",
    heroImage: "/erp-hero/plan.webp",
    icon: Workflow,
    name: "Plan",
    tagline: "Planning & MRP",
    color: "emerald",
    description: "Demand-driven planning that keeps production and procurement in sync.",
    capabilities: ["Demand Forecast", "MRP", "Scheduling", "Capacity"],

    headline: "Demand-Driven Planning That Keeps Production in Sync",
    subheadline:
      "Forecast demand, run MRP, schedule production and catch shortages before they stall a work order — instead of finding out you're short on raw material the day it's needed.",
    heroHighlights: [
      { label: "Demand", value: "Sales forecasting" },
      { label: "Supply Planning", value: "MRP, MPS & capacity planning" },
      { label: "Scheduling", value: "Production schedule & calendar" },
      { label: "Control", value: "Exception management" },
    ],
    workflow: {
      title: "Forecast → Plan → Schedule → Resolve",
      description: "Demand feeds supply planning, supply planning drives the schedule, and exceptions surface the moment something won't add up.",
      steps: ["Demand forecast approved", "MRP & MPS generate supply & purchase suggestions", "Production scheduled against capacity", "Shortages & delays flagged as exceptions"],
    },
    moduleGroups: [
      {
        category: "Demand",
        items: ["Demand Forecasting"],
      },
      {
        category: "Supply Planning",
        items: ["Material Requirement Planning (MRP)", "Master Production Scheduling (MPS)", "Capacity Planning", "Procurement Planning"],
      },
      {
        category: "Scheduling",
        items: ["Production Scheduling", "Planning Calendar"],
      },
      {
        category: "Control",
        items: ["Exception Management"],
      },
      {
        category: "Insights",
        items: ["Planning Reports"],
      },
    ],
    benefits: [
      {
        title: "See Shortages Before They Bite",
        description: "Material shortfalls are flagged against a needed-by date, not discovered when the line stops.",
      },
      {
        title: "One Number Everyone Plans Against",
        description: "Demand forecast, MRP and MPS all reference the same approved plan instead of separate spreadsheets.",
      },
      {
        title: "Capacity-Aware Scheduling",
        description: "Production scheduling accounts for real capacity constraints, not just open dates on a calendar.",
      },
      {
        title: "Exceptions, Not Just Reports",
        description: "Capacity breaches and late supplier deliveries are surfaced as actionable exceptions to resolve.",
      },
    ],
    faqs: [
      {
        question: "Is Impacgo Plan available today?",
        answer:
          "Plan is an active, in-development module, built alongside Make and Chain since planning depends on real production and supply data. Reach out if you'd like to shape it as an early-access partner.",
      },
      {
        question: "Does it work without Impacgo Make or Chain?",
        answer:
          "Plan is designed to sit on top of production (Make) and supply chain (Chain) data — it's most useful alongside them, though we're happy to discuss your specific setup.",
      },
      {
        question: "What kind of \"exceptions\" does it catch?",
        answer:
          "Things like a work center nearing capacity breach or a supplier delivery running late — flagged as open exceptions to resolve, not buried in a report.",
      },
    ],
  },

  {
    slug: "retail",
    heroImage: "/erp-hero/retail.webp",
    icon: ShoppingCart,
    name: "Retail",
    tagline: "POS & Store Operations",
    color: "orange",
    description: "Point-of-sale and store operations built for multi-store retail chains.",
    capabilities: ["POS Billing", "Multi-Store", "Loyalty", "Promotions"],

    headline: "Point of Sale Built for Multi-Store Retail Chains",
    subheadline:
      "Billing, inventory, loyalty and shift closing for every store in the chain — on one system, instead of a different spreadsheet per location.",
    heroHighlights: [
      { label: "Point of Sale", value: "Barcode/QR billing, hold & split bills" },
      { label: "Multi-Store", value: "Stores, counters & cash management" },
      { label: "Customers", value: "Loyalty, rewards & wallet" },
      { label: "Promotions", value: "Coupons, discounts & combo offers" },
    ],
    workflow: {
      title: "Every Bill Updates the Business Instantly",
      description: "A completed sale isn't just a receipt — it updates stock and rolls straight into the day's cash closing.",
      steps: ["Customer at POS", "Billing (barcode/QR scan)", "Payment & receipt (cash · card · UPI · wallet)", "Instant inventory update & daily cash closing"],
    },
    moduleGroups: [
      {
        category: "Point of Sale",
        items: ["POS Billing", "Held Bills", "Returns & Exchange"],
      },
      {
        category: "Store Management",
        items: ["Stores", "Counters", "Cash Open / Close"],
      },
      {
        category: "Inventory",
        items: ["Store Inventory", "Stock Transfers", "Stock Requests"],
      },
      {
        category: "Customers",
        items: ["Loyalty Members", "Reward Points", "Customer Wallet"],
      },
      {
        category: "Promotions",
        items: ["Coupons", "Discounts", "Combo Offers", "Buy One Get One"],
      },
      {
        category: "Payments",
        items: ["Payment Methods (Cash, Card, UPI, Wallet)", "Transaction Log"],
      },
      {
        category: "Shift Management",
        items: ["Cashier Shifts", "Tender-wise Totals", "Shift Closing & Variance"],
      },
      {
        category: "Insights",
        items: ["Daily Sales & Cash Summary", "Store & Item Performance", "Customer & Loyalty Reports"],
      },
    ],
    benefits: [
      {
        title: "One System, Every Store",
        description: "Stores, counters and cash registers are managed centrally instead of store-by-store spreadsheets.",
      },
      {
        title: "Stock Updates in Real Time",
        description: "Every completed bill adjusts store inventory instantly — no manual end-of-day stock reconciliation.",
      },
      {
        title: "Loyalty That's Actually Usable",
        description: "Reward points and wallet balances are visible to cashiers at the point of billing, not in a separate app.",
      },
      {
        title: "Clean Shift Closing",
        description: "Tender-wise totals and variance are calculated automatically at shift close, not tallied by hand.",
      },
    ],
    faqs: [
      {
        question: "Is Impacgo Retail available today?",
        answer:
          "Retail is an active, in-development module. We're onboarding early-access multi-store retailers to validate POS billing, inventory sync and shift closing under real store conditions.",
      },
      {
        question: "Can it run across multiple store locations?",
        answer:
          "Yes — multi-store and multi-counter operation is core to how it's built, with stock visibility and transfers between locations.",
      },
      {
        question: "What payment methods does it support?",
        answer:
          "Cash, card, UPI and wallet payments are all tracked in the transaction log, including split and combined payment methods on a single bill.",
      },
    ],
  },

  {
    slug: "project",
    heroImage: "/erp-hero/project.webp",
    icon: FolderKanban,
    name: "Project",
    tagline: "Project & Delivery Management",
    color: "teal",
    description: "Projects, tasks, timesheets and budgets — full delivery visibility from kickoff to go-live.",
    capabilities: ["Task Boards", "Gantt & Milestones", "Timesheets", "Risk & Budget"],

    headline: "Every Project, Task and Budget in One View",
    subheadline:
      "Track projects from kickoff to go-live — tasks on a Kanban board, timelines on a Gantt chart, team capacity against real hours, and budget burn against actual spend — instead of a status update pulled together the night before a review.",
    heroHighlights: [
      { label: "Delivery", value: "Projects, tasks & milestones" },
      { label: "Planning", value: "Gantt chart & calendar" },
      { label: "Resourcing", value: "Team capacity & timesheets" },
      { label: "Governance", value: "Issues, risks & budget tracking" },
    ],
    workflow: {
      title: "Plan → Execute → Track → Close",
      description:
        "Every project follows the same visible path, from a scoped plan to a closed-out budget — not a spreadsheet nobody opens again after kickoff.",
      steps: ["Project scoped, budgeted & team assigned", "Tasks tracked on Kanban board & Gantt chart", "Time, issues, risks & spend logged against the plan", "Milestones hit & project closed out"],
    },
    moduleGroups: [
      {
        category: "Delivery",
        items: ["Projects", "Task Boards (Kanban)", "Milestones", "Gantt Chart", "Calendar"],
      },
      {
        category: "Resourcing",
        items: ["Team & Capacity Planning", "Timesheets"],
      },
      {
        category: "Governance",
        items: ["Issues & Bug Tracking", "Risk Register & Risk Matrix", "Budget & Expense Approvals", "Document Vault"],
      },
      {
        category: "Insights",
        items: ["Project & Resource Reports", "Completion, Utilization & Budget Analytics"],
      },
    ],
    benefits: [
      {
        title: "One Home for Every Project",
        description: "Projects, tasks, timesheets, issues and budgets live in one system instead of a spreadsheet per project manager.",
      },
      {
        title: "See Risk Before It Becomes a Delay",
        description: "A live risk register and probability-impact matrix surface what could go wrong before it does.",
      },
      {
        title: "Budget Burn You Can See Daily",
        description: "Spend against budget updates as expenses are logged and approved — not reconciled at month-end.",
      },
      {
        title: "Capacity-Aware Staffing",
        description: "Team allocation is tracked against real capacity, so no one finds out they're overbooked mid-sprint.",
      },
    ],
    faqs: [
      {
        question: "Is Impacgo Project available today?",
        answer:
          "Project is an active, in-development module of the Impacgo ERP Suite. We're onboarding early-access project teams to validate the Kanban, Gantt and budget-tracking workflows on real engagements — reach out and we'll walk you through where it stands.",
      },
      {
        question: "Does it handle billable time and timesheets?",
        answer:
          "Yes — timesheets are logged against specific projects and tasks, with submitted/approved status, so billable hours and utilisation are tracked without a separate spreadsheet.",
      },
      {
        question: "Can it track risks and issues separately from tasks?",
        answer:
          "Yes — Issues (with severity and status) and Risks (with probability, impact and mitigation plans) each have their own register, alongside a probability-impact risk matrix view.",
      },
    ],
  },
];

export const getErpModule = (slug) => erpModules.find((m) => m.slug === slug);
