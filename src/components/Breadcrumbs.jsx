import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { getErpModule } from "../data/erpModules";

// Section-level path segments link back to the matching homepage anchor —
// there's no standalone "/services" or "/products" index page, so the
// crumb points at the section on the homepage instead of a 404.
const SECTION_ANCHORS = {
  services: "/#services",
  products: "/#products",
  erp: "/#erp-products",
  industries: "/#industries",
};

const SECTION_LABELS = {
  services: "Services",
  products: "Products",
  erp: "Impacgo ERP Suite",
  industries: "Industries",
  blog: "Blog",
};

// Human-readable names for known leaf routes — falls back to
// slug-humanisation (dashes → spaces, title case) for anything not listed
// here, so a new page never breaks the trail, it just reads a bit plainer
// until it's added below.
const LEAF_LABELS = {
  // services/*
  d365: "Dynamics 365 F&O",
  pos: "POS Solutions",
  "ax-migration": "AX 2012 → D365 Migration",
  "power-apps": "Power Apps",
  "power-automate": "Power Automate",
  "power-bi": "Power BI",
  "ai-builder": "AI Builder",
  "app-development": "App Development",
  "d365-development": "D365FO Development",
  "d365-crm": "Dynamics 365 CRM",
  integrations: "Integrations",
  mes: "MES Systems",
  "ai-automation": "AI & Automation",
  consulting: "Consulting",
  erpnext: "ERPNext",
  implementation: "ERP Implementation",
  development: "Development Services",
  ams: "Annual Maintenance Support",
  // products/*
  "dairy-farm": "Dairy Farm Management (CALVIQ)",
  "inventory-management": "Inventory Management (StockLyte)",
  "farm-yield-iq": "FarmYieldIQ",
  "work-task": "Work Task Application",
  "construction-planner": "Construction Planner",
  // industries/*
  manufacturing: "Manufacturing",
  distribution: "Distribution",
  retail: "Retail & E-Commerce",
};

function humanize(segment) {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Self-contained breadcrumb trail — derives its crumbs from the current
 * route, so pages don't need to thread their own breadcrumb data through.
 *
 * `variant="light"` (default) is for sitting on top of a colored/dark hero
 * background; `variant="dark"` is for a plain white/light background.
 *
 * `bare` controls whether this renders its own full-bleed bar (own
 * container + horizontal padding + background band — for standalone
 * placement directly below the fixed header, above a page's own custom
 * hero) or just the crumb list with no wrapper (`bare`, for embedding
 * inside a parent that already provides its own container/padding, like
 * PageHero or ERPModuleDetail's hero — avoids doubling up the padding).
 */
export default function Breadcrumbs({ variant = "light", bare = false, className = "" }) {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = [{ label: "Home", to: "/" }];
  segments.forEach((seg, index) => {
    const isLast = index === segments.length - 1;
    const pathSoFar = "/" + segments.slice(0, index + 1).join("/");

    let label;
    if (index === 0 && SECTION_LABELS[seg]) {
      label = SECTION_LABELS[seg];
    } else if (segments[0] === "erp" && index === 1) {
      const mod = getErpModule(seg);
      label = mod ? `Impacgo ${mod.name}` : humanize(seg);
    } else {
      label = LEAF_LABELS[seg] || humanize(seg);
    }

    const to = isLast ? null : index === 0 && SECTION_ANCHORS[seg] ? SECTION_ANCHORS[seg] : pathSoFar;
    crumbs.push({ label, to });
  });

  const isLight = variant === "light";

  const list = (
    <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
      {crumbs.map((crumb, index) => (
        <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
          {index > 0 && (
            <ChevronRight
              className={`h-3.5 w-3.5 flex-shrink-0 ${isLight ? "text-white/40" : "text-gray-300"}`}
            />
          )}
          {crumb.to ? (
            <Link
              to={crumb.to}
              className={
                isLight
                  ? "text-white/70 hover:text-white transition-colors"
                  : "text-gray-500 hover:text-blue-600 transition-colors"
              }
            >
              {crumb.label}
            </Link>
          ) : (
            <span
              aria-current="page"
              className={isLight ? "text-white font-medium" : "text-gray-800 font-medium"}
            >
              {crumb.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  );

  if (bare) {
    return (
      <nav aria-label="Breadcrumb" className={className}>
        {list}
      </nav>
    );
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`relative z-10 ${isLight ? "" : "bg-gray-50 border-b border-gray-100"} ${className}`}
    >
      <div className="container mx-auto px-4 py-3">{list}</div>
    </nav>
  );
}
