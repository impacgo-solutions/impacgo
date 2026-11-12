import type { Metadata } from "next";

/*
 * Shared Open Graph defaults. Next.js replaces (not merges) a parent's
 * `openGraph` when a page defines its own, so pages that set openGraph must
 * spread these in to keep the image / site name.
 */
export const OG_DEFAULTS = {
  type: "website",
  siteName: "Impacgo Solutions",
  locale: "en_US",
  images: [{ url: "https://www.impacgo.com/logo.png", alt: "Impacgo Solutions" }],
} satisfies NonNullable<Metadata["openGraph"]>;
