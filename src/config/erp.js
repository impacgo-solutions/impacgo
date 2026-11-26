// The Impacgo ERP site is a separate Next.js app (this repo's erp/ folder,
// basePath "/erp-suite") served on this same domain: vercel.json rewrites /erp-suite/*
// to the ERP deployment in production, and vite.config.js proxies it to
// `next dev` locally. Links to it must be plain <a> tags (full page loads),
// never React Router <Link>/navigate(), or this SPA's router would show its
// own 404 instead of letting the request reach the ERP app.
// Override with VITE_ERP_URL if the ERP is ever hosted elsewhere.
export const ERP_SITE_URL = import.meta.env.VITE_ERP_URL || "/erp-suite";

// Each module has its own tab on the ERP site, opened via #module-<slug>
// (slugs match src/data/erpModules.js: hrms, finance, chain, make, plan,
// retail, project).
export const erpModuleUrl = (slug) => `${ERP_SITE_URL}#module-${slug}`;

// Each module also has its own page on the ERP site (/erp-suite/hrms …), made
// for search engines. Keys are the slugs above; values match the ERP app's
// erp/src/lib/module-pages.ts and the /erp/:slug redirects in vercel.json.
export const ERP_MODULE_PAGES = {
  hrms: "hrms",
  finance: "finance-accounting",
  chain: "supply-chain",
  make: "manufacturing",
  plan: "mrp-planning",
  retail: "retail-pos",
  project: "project-management"
};
export const erpModulePageUrl = (slug) =>
  ERP_MODULE_PAGES[slug] ? `${ERP_SITE_URL}/${ERP_MODULE_PAGES[slug]}` : erpModuleUrl(slug);
