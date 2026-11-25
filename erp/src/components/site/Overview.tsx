"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Close } from "@/components/site/icons";
import { SectionHead, accent, container, sectionFrame } from "@/components/site/Section";
import { withBasePath } from "@/lib/base-path";

/*
 * The 36-second "one connected platform" overview video.
 *
 * - <OverviewSection> sits right after the "Sound familiar?" problem section:
 *   a large framed video that plays muted, on a loop, only while on screen
 *   (it carries its own on-screen text, so it reads without sound).
 * - <OverviewModal> (mounted once in app/layout.tsx) plays it from the start,
 *   with sound and controls. It opens from any <a href="#overview-video"> —
 *   the hero's "Watch the overview" link and the button on the section — or a
 *   direct /erp-suite#overview-video URL, mirroring <ContactModal>.
 */
export const OVERVIEW_HREF = "#overview-video";
const SRC = "/videos/overview.mp4";
const POSTER = "/videos/overview-poster.webp";
const LABEL =
  "Impacgo ERP overview: business data scattered across tools, replaced by one system with seven modules on a shared core, following one order from Retail through Chain, Plan, Make and Finance, with live reports for every team.";

export function OverviewSection() {
  const ref = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false); // poster too waits until the visitor is close

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNear(true);
        io.disconnect();
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  // Load nothing until the visitor is close, then play only while visible.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || saveData) return; // poster only; the play button still opens the full video
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (v.preload !== "auto") v.preload = "auto";
          v.play().catch(() => {});
        } else v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section id="overview" className={`${sectionFrame} bg-white`}>
      <div className={container}>
        <SectionHead
          eyebrow="The suite in 36 seconds"
          title={["See how it all", { text: "connects", className: accent }]}
          sub="One platform, seven modules, one shared core. Follow a single order from the shop counter to the books."
        />
        <div data-reveal="zoom" className="relative mx-auto mt-14 max-w-[1080px] sm:mt-16">
          <div aria-hidden className="pointer-events-none absolute -inset-x-10 -inset-y-8 rounded-[48px] bg-[radial-gradient(60%_60%_at_50%_45%,rgb(229_81_47/14%),transparent_70%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[22px] border border-[#ebe5dc] bg-white shadow-[0_40px_90px_-40px_rgb(20_22_28/45%)] sm:rounded-[28px]">
            <video
              ref={ref}
              className="block aspect-video h-auto w-full bg-white"
              src={withBasePath(SRC)}
              poster={near ? withBasePath(POSTER) : undefined}
              muted
              loop
              playsInline
              preload="none"
              aria-label={LABEL}
            />
          </div>
          <div className="relative mt-8 flex justify-center">
            <a
              href={OVERVIEW_HREF}
              className="group inline-flex items-center gap-3 rounded-full bg-[#14161c] py-2 pr-6 pl-2 text-[16px] font-semibold text-white shadow-[0_14px_30px_-14px_rgb(20_22_28/60%)] transition-colors hover:bg-[#262932]"
            >
              <span className="grid size-9 place-items-center rounded-full bg-[linear-gradient(180deg,#e5512f,#cc3b1c)] transition-transform group-hover:scale-105">
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden><path d="M4 2.5l8 4.5-8 4.5z" fill="currentColor" /></svg>
              </span>
              Watch with sound <span className="font-normal text-white/70">· 0:36</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OverviewModal() {
  const [open, setOpen] = useState(false);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const show = useCallback(() => {
    returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
    returnFocus.current?.focus?.();
  }, []);

  // Open from any <a href="#overview-video"> (plain clicks only) or a #overview-video URL.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = e.target instanceof Element ? e.target.closest(`a[href="${OVERVIEW_HREF}"]`) : null;
      if (!link) return;
      e.preventDefault();
      show();
    };
    const fromHash = () => {
      if (window.location.hash !== OVERVIEW_HREF) return;
      history.replaceState(history.state, "", window.location.pathname + window.location.search);
      show();
    };
    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", fromHash);
    fromHash();
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", fromHash);
    };
  }, [show]);

  // While open: lock page scroll, Esc closes, focus stays on the dialog.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-[#0b0c10]/85 p-4 backdrop-blur-[4px] sm:p-8"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div role="dialog" aria-modal="true" aria-label="Impacgo ERP overview video" className="relative w-full max-w-[1200px]">
        <button
          ref={closeBtn}
          type="button"
          onClick={close}
          aria-label="Close video"
          className="absolute -top-12 right-0 grid size-10 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <Close />
        </button>
        <video
          className="block aspect-video h-auto w-full overflow-hidden rounded-2xl bg-black shadow-2xl"
          src={withBasePath(SRC)}
          poster={withBasePath(POSTER)}
          controls
          autoPlay
          playsInline
          preload="auto"
          aria-label={LABEL}
        />
      </div>
    </div>
  );
}
