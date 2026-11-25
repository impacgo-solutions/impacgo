/*
 * JSON-LD structured data for the Impacgo ERP pages, so Google, Bing and AI
 * search tools understand that www.impacgo.com/erp-suite is ERP software
 * (with HRMS, finance, supply chain, manufacturing, planning, retail/POS and
 * project modules) made by Impacgo Solutions.
 *
 * The organisation uses the same "@id" as the main site's schemas
 * (src/components/schemas.js), so search engines treat both as one company.
 * Module names and descriptions mirror ERP_MODULES in components/site/suite.tsx
 * (that file is a client module, so its data can't be imported here).
 */

const SITE_URL = "https://www.impacgo.com";
const ERP_URL = `${SITE_URL}/erp-suite`;
const ORG_ID = `${SITE_URL}/#organization`;

const MODULES = [
  { name: "Impacgo HRMS", key: "hrms", description: "Human resource management: employee records, attendance and shifts, leave, payroll and payslips, recruitment and onboarding, employee self-service." },
  { name: "Impacgo Finance", key: "finance", description: "Financial management and accounting: general ledger, payables, receivables, cash and bank, GST and tax workflows, financial statements." },
  { name: "Impacgo Chain", key: "chain", description: "Supply chain management: procurement, sales orders, inventory and warehouse management, batch/serial tracking and stock transfers." },
  { name: "Impacgo Make", key: "make", description: "Manufacturing and production: bills of materials, work orders, routings, job cards, material consumption and production costing." },
  { name: "Impacgo Plan", key: "plan", description: "Planning and MRP: demand and supply planning, material requirements planning, production scheduling and capacity planning." },
  { name: "Impacgo Retail", key: "retail", description: "Retail and point of sale: POS billing, product and pricing management, multi-store operations and payments, synced to inventory and accounts." },
  { name: "Impacgo Project", key: "project", description: "Project and delivery management: tasks and milestones, Kanban and Gantt planning, budgets, cost tracking and timesheets." },
];

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Impacgo Solutions",
  legalName: "Impacgo Solutions Private Limited",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "info@impacgo.com",
  telephone: "+91-9966477499",
  sameAs: ["https://www.linkedin.com/company/impacgo-solutions-private-limited/"],
};

export const erpSuiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    {
      "@type": "SoftwareApplication",
      "@id": `${ERP_URL}#software`,
      name: "Impacgo ERP",
      url: ERP_URL,
      description:
        "Impacgo ERP connects HR, finance, supply chain, manufacturing, planning, retail and projects in one integrated, multi-tenant platform.",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Enterprise Resource Planning (ERP)",
      operatingSystem: "Web",
      featureList: MODULES.map((m) => `${m.name}: ${m.description}`),
      publisher: { "@id": ORG_ID },
      brand: { "@id": ORG_ID },
      hasPart: MODULES.map((m) => ({
        "@type": "SoftwareApplication",
        name: m.name,
        url: `${ERP_URL}#module-${m.key}`,
        description: m.description,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        publisher: { "@id": ORG_ID },
      })),
    },
    {
      "@type": "WebPage",
      "@id": `${ERP_URL}#webpage`,
      url: ERP_URL,
      name: "Impacgo ERP: one platform to run your entire business",
      about: { "@id": `${ERP_URL}#software` },
      publisher: { "@id": ORG_ID },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Impacgo ERP", item: ERP_URL },
        ],
      },
    },
  ],
};

/** Serialise for a <script type="application/ld+json"> tag (escapes "<", per the Next.js JSON-LD guide). */
export const toJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
