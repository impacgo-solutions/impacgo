import type { Metadata } from "next";

/*
 * Shared Open Graph defaults. Next.js replaces (not merges) a parent's
 * `openGraph` when a page defines its own, so pages that set openGraph must
 * spread these in to keep the image / site name.
 */
export const OG_DEFAULTS = {
  type: "website",
  siteName: "Impacgo Solutions",
  locale: "en_IN",
  images: [{ url: "https://www.impacgo.com/og-image.jpg", width: 1200, height: 630, alt: "Impacgo Solutions: ERP software and Dynamics 365 partner in Visakhapatnam (Vizag), India" }],
} satisfies NonNullable<Metadata["openGraph"]>;
