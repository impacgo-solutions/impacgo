/*
 * The ERP site is served under a sub-path of www.impacgo.com (see `basePath`
 * in next.config.ts). next/link and next/navigation add that prefix
 * automatically, but plain asset URLs — next/image `src`, <video>/<source>
 * `src` and `poster` — do not, so wrap any "/images/…" or "/videos/…" path
 * in withBasePath().
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const withBasePath = (path: string) => `${BASE_PATH}${path}`;

/*
 * The ERP is one section of the main Impacgo website (same domain), so links
 * to the rest of the site are plain same-origin paths that open in the same
 * tab. They must be rendered as <a>, never next/link — next/link would
 * prefix them with BASE_PATH and send the visitor back into the ERP.
 * Paths match the routes in the main site's src/App.jsx.
 */
export const MAIN_SITE = {
  home: "/",
  contact: "/contact",
  terms: "/terms",
  privacy: "/privacy",
  d365: "/services/d365",
  powerPlatform: "/services/power-apps",
  powerBi: "/services/power-bi",
  stocklyte: "/stocklyte",
  calviq: "/calviq",
  farmyieldiq: "/farmyieldiq",
} as const;

const MAIN_SITE_HREFS = new Set<string>(Object.values(MAIN_SITE));

/** True for links to the main Impacgo site (see MAIN_SITE). */
export const isMainSiteHref = (href: string) => MAIN_SITE_HREFS.has(href);

/*
 * Section links (#flows, #module-hrms …) point at sections of the ERP home
 * page. On the other ERP pages (the module pages such as /erp-suite/hrms) they
 * must lead back to the home page; the popups (#contact, #overview-video) are
 * mounted in the layout and work on every page, so those stay as they are.
 * The result is a full path, so render it as a plain <a> (never next/link).
 */
const POPUP_HASHES = new Set(["#contact", "#overview-video"]);
export const homeSection = (href: string, onHome: boolean) =>
  onHome || !href.startsWith("#") || POPUP_HASHES.has(href) ? href : `${BASE_PATH || "/"}${href}`;
