"use client";

import { useLayoutEffect, useRef } from "react";
import { ImpacgoLogo } from "@/components/site/BrandLockup";
import { INTRO_KEY } from "@/lib/intro";

/*
 * Opening reveal, shown once per browser session: the Impacgo Solutions logo
 * pops in, "ERP" rises beside it, then the curtain lifts off the hero. It
 * never blocks clicks (pointer-events: none).
 *
 * Skipping it on repeat visits / reduced motion happens in two places:
 *  - Full page loads: INTRO_SKIP_SCRIPT (lib/intro.ts) runs in <head> (app/layout.tsx) before
 *    first paint and marks <html data-intro-skip>, so it never flashes.
 *  - In-app navigations (e.g. clicking "ERP" on the sign-in page): that head
 *    script doesn't run again, so the layout effect below decides before the
 *    browser paints, and records the session key the first time it plays.
 */
export function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  // Guards against React Strict Mode's double-run in dev, which would otherwise
  // see the key it just set and hide the intro on the very first visit.
  const decided = useRef(false);

  useLayoutEffect(() => {
    if (decided.current || !ref.current) return;
    decided.current = true;
    let skip = true;
    try {
      skip = !!sessionStorage.getItem(INTRO_KEY) || matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!skip) sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // storage blocked: just don't show it
    }
    if (skip) ref.current.setAttribute("data-skip", "");
  }, []);

  return (
    <div ref={ref} id="site-intro" aria-hidden className="site-intro">
      <div className="flex items-center gap-5 sm:gap-6">
        <span className="site-intro-logo">
          <ImpacgoLogo className="h-12 sm:h-16" priority />
        </span>
        <span className="site-intro-divider h-10 w-px bg-[#d6cfc4] sm:h-14" />
        <span className="overflow-hidden pb-1 text-[34px] leading-none font-medium tracking-[-0.03em] text-[#5c6170] sm:text-[44px]">
          <span className="site-intro-word inline-block">ERP</span>
        </span>
      </div>
    </div>
  );
}
