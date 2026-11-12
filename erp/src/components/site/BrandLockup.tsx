"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { BASE_PATH, MAIN_SITE, withBasePath } from "@/lib/base-path";

/* Same Impacgo Solutions logo as the main site's header, so the ERP reads as part of one website. */
export function ImpacgoLogo({ className, priority = false }: { className: string; priority?: boolean }) {
  return <Image src={withBasePath("/images/impacgo-solutions-logo.png")} alt="Impacgo Solutions Logo" width={222} height={60} priority={priority} className={`w-auto object-contain ${className}`} />;
}

/*
 * Parent-first sub-brand lockup: [IMPACGO SOLUTIONS] | ERP — used in the
 * header, mobile menu, footer, and the sign-in and demo request pages.
 * The parent logo is a plain <a> to the main site's home (like the logo
 * everywhere else on impacgo.com); "ERP" is a next/link to this app's home.
 */
export function BrandLockup({ logoClass, onNavigate, priority = false }: { logoClass: string; onNavigate?: () => void; priority?: boolean }) {
  // Already on the ERP home: skip next/link's same-page navigation (it re-fetches
  // the page and doesn't scroll) and just glide back to the top. Modified clicks
  // (new tab etc.) are left to the browser.
  const toErpHome = (e: MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (window.location.pathname.replace(/\/$/, "") === BASE_PATH) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <span className="flex shrink-0 items-center gap-3 sm:gap-3.5">
      <a href={MAIN_SITE.home} aria-label="Impacgo Solutions home" onClick={onNavigate} className="shrink-0">
        <ImpacgoLogo className={logoClass} priority={priority} />
      </a>
      <span aria-hidden className="h-6 w-px bg-[#d6cfc4] sm:h-8" />
      <Link href="/" aria-label="Impacgo ERP home" onClick={toErpHome} className="text-[18px] leading-none font-medium tracking-[-0.4px] text-[#5c6170] transition-colors hover:text-[#14161c] sm:text-[20px]">
        ERP
      </Link>
    </span>
  );
}
