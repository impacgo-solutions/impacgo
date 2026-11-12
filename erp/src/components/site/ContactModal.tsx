"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DemoForm } from "@/components/site/DemoForm";
import { Close } from "@/components/site/icons";
import { CONTACT_HREF } from "@/lib/contact";

/*
 * "Book a free demo" popup for the whole ERP site (mounted once in
 * app/layout.tsx). Opens from any <a href="#contact"> — every "Book a free
 * demo" / "Talk to our team" link — or a direct /erp-suite#contact URL, so
 * visitors stay on the page they're on. The form itself is the shared
 * <DemoForm>, which emails the request to the Impacgo team.
 */
export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(0); // new key each time it opens -> a fresh form
  const panel = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const show = useCallback(() => {
    returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSession((s) => s + 1);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    returnFocus.current?.focus?.();
  }, []);

  // Open from any <a href="#contact"> (plain clicks only) or a #contact URL.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = e.target instanceof Element ? e.target.closest(`a[href="${CONTACT_HREF}"]`) : null;
      if (!link) return;
      e.preventDefault();
      show();
    };
    const fromHash = () => {
      if (window.location.hash !== CONTACT_HREF) return;
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

  // While open: lock page scroll, Esc closes, Tab stays inside the dialog.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab" || !panel.current) return;
      const items = [...panel.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([type=hidden]):not([tabindex='-1']), select, textarea")].filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#14161c]/45 backdrop-blur-[3px] sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="relative max-h-[92svh] w-full max-w-[540px] overflow-y-auto rounded-t-3xl bg-white p-6 shadow-[0_40px_90px_-30px_rgb(20_22_28/55%)] sm:rounded-3xl sm:p-8"
      >
        <button type="button" onClick={close} aria-label="Close" className="absolute top-4 right-4 grid size-10 cursor-pointer place-items-center rounded-full text-[#464b57] transition-colors hover:bg-[#f3eee6] hover:text-[#14161c]">
          <Close />
        </button>
        <DemoForm
          key={session}
          source="the Book a free demo popup"
          autoFocus
          onClose={close}
          heading={
            <div className="pr-10 pb-2">
              <p className="text-[13px] font-semibold tracking-[0.08em] text-[#2d4fe0] uppercase">Impacgo ERP</p>
              <h2 id="contact-title" className="pt-1.5 text-[26px] leading-tight font-semibold tracking-[-0.02em] text-[#14161c]">
                Book your free demo
              </h2>
              <p className="pt-2 text-[15px] leading-relaxed text-[#5c6170]">See the suite mapped to the way your business runs. Share a few details and we&apos;ll schedule a personalised walkthrough.</p>
            </div>
          }
        />
      </div>
    </div>
  );
}
