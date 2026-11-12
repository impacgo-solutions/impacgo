/*
 * Module definitions drive the generic list, form and detail views.
 * Pure data, so it is safe to import from both server and client code.
 * Field names are the keys on each record object.
 */

export type ModuleKey = "leads" | "contacts" | "accounts" | "deals" | "tasks";

export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "url"
  | "number"
  | "currency"
  | "date"
  | "select"
  | "textarea"
  | "ref"
  | "related";

export type Field = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: readonly string[];
  /* For type "ref": the module the id points at. */
  ref?: ModuleKey;
  /* Shown as a column in list view. */
  list?: boolean;
  /* Spans both columns in the form. */
  wide?: boolean;
};

export type ModuleDef = {
  key: ModuleKey;
  singular: string;
  plural: string;
  /* Columns matched by the list search box. */
  searchColumns: string[];
  /* Optional select field offered as a list filter. */
  filterField?: string;
  fields: Field[];
};

export const LEAD_SOURCES = [
  "Advertisement",
  "Cold Call",
  "Employee Referral",
  "External Referral",
  "Online Store",
  "Partner",
  "Web Download",
  "Web Research",
  "Trade Show",
  "Chat",
] as const;

export const LEAD_STATUSES = [
  "New",
  "Attempted to Contact",
  "Contacted",
  "Contact in Future",
  "Pre-Qualified",
  "Not Qualified",
  "Lost Lead",
] as const;

export const DEAL_STAGES = [
  "Qualification",
  "Needs Analysis",
  "Value Proposition",
  "Identify Decision Makers",
  "Proposal/Price Quote",
  "Negotiation/Review",
  "Closed Won",
  "Closed Lost",
] as const;

export const OPEN_DEAL_STAGES = DEAL_STAGES.filter((s) => !s.startsWith("Closed"));

export const INDUSTRIES = [
  "Technology",
  "Finance",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Education",
  "Real Estate",
  "Consulting",
  "Media",
  "Other",
] as const;

export const TASK_STATUSES = ["Not Started", "In Progress", "Waiting", "Completed", "Deferred"] as const;
export const TASK_PRIORITIES = ["High", "Normal", "Low"] as const;

/* Modules a task's "Related to" can point at. */
export const RELATABLE: ModuleKey[] = ["leads", "contacts", "accounts", "deals"];


export const MODULES: Record<ModuleKey, ModuleDef> = {
  leads: {
    key: "leads",
    singular: "Lead",
    plural: "Leads",
    searchColumns: ["first_name", "last_name", "company", "email", "phone"],
    filterField: "status",
    fields: [
      { name: "first_name", label: "First Name", type: "text" },
      { name: "last_name", label: "Last Name", type: "text", required: true },
      { name: "company", label: "Company", type: "text", list: true },
      { name: "email", label: "Email", type: "email", list: true },
      { name: "phone", label: "Phone", type: "tel", list: true },
      { name: "lead_source", label: "Lead Source", type: "select", options: LEAD_SOURCES, list: true },
      { name: "status", label: "Lead Status", type: "select", options: LEAD_STATUSES, required: true, list: true },
      { name: "description", label: "Description", type: "textarea", wide: true },
    ],
  },
  contacts: {
    key: "contacts",
    singular: "Contact",
    plural: "Contacts",
    searchColumns: ["first_name", "last_name", "email", "phone", "title"],
    filterField: "lead_source",
    fields: [
      { name: "first_name", label: "First Name", type: "text" },
      { name: "last_name", label: "Last Name", type: "text", required: true },
      { name: "account_id", label: "Account Name", type: "ref", ref: "accounts", list: true },
      { name: "title", label: "Title", type: "text", list: true },
      { name: "email", label: "Email", type: "email", list: true },
      { name: "phone", label: "Phone", type: "tel", list: true },
      { name: "lead_source", label: "Lead Source", type: "select", options: LEAD_SOURCES },
      { name: "description", label: "Description", type: "textarea", wide: true },
    ],
  },
  accounts: {
    key: "accounts",
    singular: "Account",
    plural: "Accounts",
    searchColumns: ["name", "website", "phone", "city"],
    filterField: "industry",
    fields: [
      { name: "name", label: "Account Name", type: "text", required: true },
      { name: "industry", label: "Industry", type: "select", options: INDUSTRIES, list: true },
      { name: "website", label: "Website", type: "url", list: true },
      { name: "phone", label: "Phone", type: "tel", list: true },
      { name: "city", label: "City", type: "text", list: true },
      { name: "employees", label: "Employees", type: "number" },
      { name: "description", label: "Description", type: "textarea", wide: true },
    ],
  },
  deals: {
    key: "deals",
    singular: "Deal",
    plural: "Deals",
    searchColumns: ["name"],
    filterField: "stage",
    fields: [
      { name: "name", label: "Deal Name", type: "text", required: true },
      { name: "amount", label: "Amount", type: "currency", list: true },
      { name: "stage", label: "Stage", type: "select", options: DEAL_STAGES, required: true, list: true },
      { name: "closing_date", label: "Closing Date", type: "date", list: true },
      { name: "account_id", label: "Account Name", type: "ref", ref: "accounts", list: true },
      { name: "contact_id", label: "Contact Name", type: "ref", ref: "contacts" },
      { name: "description", label: "Description", type: "textarea", wide: true },
    ],
  },
  tasks: {
    key: "tasks",
    singular: "Task",
    plural: "Tasks",
    searchColumns: ["subject"],
    filterField: "status",
    fields: [
      { name: "subject", label: "Subject", type: "text", required: true },
      { name: "due_date", label: "Due Date", type: "date", list: true },
      { name: "status", label: "Status", type: "select", options: TASK_STATUSES, required: true, list: true },
      { name: "priority", label: "Priority", type: "select", options: TASK_PRIORITIES, required: true, list: true },
      { name: "related_to", label: "Related To", type: "related", list: true },
      { name: "description", label: "Description", type: "textarea", wide: true },
    ],
  },
};

export const MODULE_ORDER: ModuleKey[] = ["leads", "contacts", "accounts", "deals", "tasks"];

export function getModule(key: string): ModuleDef | undefined {
  return (MODULE_ORDER as string[]).includes(key) ? MODULES[key as ModuleKey] : undefined;
}

export function formatCurrency(value: number | null | undefined) {
  if (value == null) return "";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export function formatDate(value: string | null | undefined) {
  if (!value) return "";
  const date = new Date(`${value.slice(0, 10)}T00:00:00`);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
