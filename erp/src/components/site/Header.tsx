"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { BrandLockup } from "@/components/site/BrandLockup";
import { isMainSiteHref, MAIN_SITE } from "@/lib/base-path";
import { CONTACT_HREF } from "@/lib/contact";
import { ERP_MODULES, ErpIcon } from "@/components/site/suite";
import { ArrowRight, Caret, Close, Menu } from "@/components/site/icons";

/* Hash links are plain <a> tags so the browser fires hashchange and the module tab opens. */
const PRODUCT = ERP_MODULES.map((m) => ({ key: m.key, title: `Impacgo ${m.name}`, desc: m.area, href: `#module-${m.key}`, tint: m.tint, color: m.color }));

const PLATFORM = [
  { label: "Why Impacgo ERP", href: "#features" },
  { label: "How modules connect", href: "#flows" },
  { label: "Technology & architecture", href: "#platform" },
  { label: "Impacgo family", href: "#family" },
];

const RESOURCES = [
  { label: "FAQs", href: "#faq" },
  { label: "How it works", href: "#how" },
  { label: "About Impacgo", href: MAIN_SITE.home },
];

function NavLink({ href, className, onClick, children }: { href: string; className: string; onClick?: () => void; children: ReactNode }) {
  if (href.startsWith("#") || isMainSiteHref(href)) return <a href={href} className={className} onClick={onClick}>{children}</a>;
  if (href.startsWith("http")) return <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>{children}</a>;
  return <Link href={href} className={className} onClick={onClick}>{children}</Link>;
}

function Dropdown({ label, dark, children, wide }: { label: string; dark: boolean; children: ReactNode; wide?: boolean }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<number>(0);
  const show = () => {
    clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(false), 120);
  };
  return (
    <li className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${dark ? "text-white/85 hover:text-white" : "text-[#383d48] hover:text-[#14161c]"}`}
      >
        {label}
        <Caret className={`h-[7px] w-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`absolute top-full left-1/2 pt-3 transition-[opacity,translate,visibility] duration-200 ${wide ? "w-[680px] -translate-x-[40%]" : "w-56 -translate-x-1/2"} ${
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-[#ebe5dc] bg-white p-2 shadow-[0_24px_60px_-20px_rgb(20_22_28/35%)]" onClick={() => setOpen(false)}>
          {children}
        </div>
      </div>
    </li>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [section, setSection] = useState<string | null>("Suite");
  const group = (title: string, links: { label: string; href: string }[]) => (
    <div className="border-b border-[#f3efe8]">
      <button type="button" onClick={() => setSection(section === title ? null : title)} aria-expanded={section === title} className="flex w-full cursor-pointer items-center justify-between py-4 text-[17px] font-semibold text-[#14161c]">
        {title}
        <Caret className={`h-[8px] w-[12px] transition-transform ${section === title ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ${section === title ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="flex flex-col pb-3">
            {links.map((l) => (
              <NavLink key={l.label} href={l.href} onClick={onClose} className="rounded-lg px-2 py-2.5 text-[15px] text-[#464b57] hover:bg-[#faf7f2] hover:text-[#14161c]">
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-white animate-[site-fade_.2s_ease]" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="flex h-[72px] items-center justify-between px-5">
        <BrandLockup logoClass="h-8" onNavigate={onClose} />
        <button type="button" onClick={onClose} aria-label="Close menu" className="grid size-10 cursor-pointer place-items-center rounded-lg text-[#14161c] hover:bg-[#f3eee6]">
          <Close />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-5">
        <a href={MAIN_SITE.home} onClick={onClose} className="group flex items-center gap-2 border-b border-[#f3efe8] py-4 text-[15px] font-semibold text-[#2d4fe0]">
          <ArrowRight className="rotate-180 transition-transform group-hover:-translate-x-0.5" /> Back to Impacgo home
        </a>
        {group("Suite", PRODUCT.map((p) => ({ label: p.title, href: p.href })))}
        {group("Platform", PLATFORM)}
        {group("Resources", RESOURCES)}
        <a href="#flows" onClick={onClose} className="block border-b border-[#f3efe8] py-4 text-[17px] font-semibold text-[#14161c]">
          How it works
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3 border-t border-[#f3efe8] p-5">
        <Link href="/login" onClick={onClose} className="grid h-12 place-items-center rounded-xl border border-[#ebe5dc] text-[15px] font-semibold text-[#14161c]">
          Sign in
        </Link>
        {/* Opens the demo popup (ContactModal); onClose also shuts this menu. */}
        <a href={CONTACT_HREF} onClick={onClose} className="grid h-12 place-items-center rounded-xl bg-[linear-gradient(180deg,#e5512f,#cc3b1c)] text-[15px] font-semibold text-white">
          Book a free demo
        </a>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(window.scrollY > 16);
        setProgress(max > 0 ? window.scrollY / max : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // The site is light throughout, so the header always uses dark text.
  const dark = false;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled ? "border-b border-[#ebe5dc]/80 bg-white/90 shadow-[0_8px_30px_-18px_rgb(20_22_28/25%)] backdrop-blur-xl" : "border-b border-transparent bg-white/0"
        }`}
      >
        <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-[#2d4fe0] via-[#6d4ef0] to-[#8b6cf6]" style={{ transform: `scaleX(${progress})` }} />
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center gap-6 px-5 sm:px-8">
          <BrandLockup logoClass="h-7 sm:h-9 md:h-10" priority />

          <nav aria-label="Main" className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-1">
              <Dropdown label="Suite" dark={dark} wide>
                <div className="grid grid-cols-[1fr_220px] gap-2">
                  <div className="grid grid-cols-2 gap-1">
                    {PRODUCT.map((p) => (
                      <a key={p.key} href={p.href} className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-[#faf7f2]">
                        <span className="grid size-10 shrink-0 place-items-center rounded-lg transition-transform duration-200 group-hover:scale-105" style={{ background: p.tint, color: p.color }}>
                          <ErpIcon name={p.key} size={19} />
                        </span>
                        <span>
                          <span className="block text-[14px] font-semibold text-[#14161c]">{p.title}</span>
                          <span className="block text-[13px] text-[#5c6170]">{p.desc}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                  <a href={CONTACT_HREF} className="group relative flex flex-col justify-end overflow-hidden rounded-xl bg-gradient-to-br from-[#eef1ff] via-[#f3f0ff] to-[#fff3ea] p-4 text-[#14161c]">
                    <span className="relative text-[12px] font-semibold tracking-[0.08em] text-[#2d4fe0] uppercase">Book a free demo</span>
                    <span className="relative pt-1 text-[16px] leading-snug font-semibold">See the suite mapped to your business</span>
                    <span className="relative inline-flex items-center gap-2 pt-3 text-[13px] font-semibold text-[#2d4fe0]">
                      Talk to our team <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </div>
              </Dropdown>
              <Dropdown label="Platform" dark={dark}>
                {PLATFORM.map((m) => (
                  <a key={m.label} href={m.href} className="block rounded-lg px-3 py-2 text-[14px] text-[#383d48] hover:bg-[#faf7f2] hover:text-[#14161c]">
                    {m.label}
                  </a>
                ))}
              </Dropdown>
              <li>
                <a href="#flows" className={`block rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${dark ? "text-white/85 hover:text-white" : "text-[#383d48] hover:text-[#14161c]"}`}>
                  How it works
                </a>
              </li>
              <Dropdown label="Resources" dark={dark}>
                {RESOURCES.map((r) => (
                  <NavLink key={r.label} href={r.href} className="block rounded-lg px-3 py-2 text-[14px] text-[#383d48] hover:bg-[#faf7f2] hover:text-[#14161c]">
                    {r.label}
                  </NavLink>
                ))}
              </Dropdown>
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            {/* Explicit way back to the main site; only on wide screens, where it fits beside the nav (the mobile menu has its own). */}
            <a href={MAIN_SITE.home} className={`group hidden items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-medium transition-colors xl:inline-flex ${dark ? "text-white/85 hover:text-white" : "text-[#383d48] hover:text-[#14161c]"}`}>
              <ArrowRight className="rotate-180 transition-transform group-hover:-translate-x-0.5" /> Impacgo home
            </a>
            <Link href="/login" className={`hidden rounded-lg px-3 py-2 text-[15px] font-medium transition-colors sm:block ${dark ? "text-white/85 hover:text-white" : "text-[#383d48] hover:text-[#14161c]"}`}>
              Sign in
            </Link>
            <a
              href={CONTACT_HREF}
              className={`site-magnetic group hidden h-10 items-center gap-2 rounded-xl px-4 text-[15px] font-semibold transition-colors sm:inline-flex ${
                dark ? "bg-white text-[#14161c] hover:bg-white/90" : "bg-[linear-gradient(180deg,#e5512f,#cc3b1c)] text-white shadow-[inset_0_1px_0_rgb(255_255_255/20%),0_8px_20px_-8px_rgb(204_59_28/55%)] hover:brightness-110"
              }`}
            >
              Book a free demo <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobile(true)}
              className={`grid size-10 cursor-pointer place-items-center rounded-lg lg:hidden ${dark ? "text-white hover:bg-white/10" : "text-[#14161c] hover:bg-[#f3eee6]"}`}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>
      {mobile ? <MobileMenu onClose={() => setMobile(false)} /> : null}
    </>
  );
}
