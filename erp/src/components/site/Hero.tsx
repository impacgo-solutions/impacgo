"use client";

import { type CSSProperties } from "react";
import { DemoForm } from "@/components/site/DemoForm";
import { ArrowRight, Check } from "@/components/site/icons";
import { LiveToasts, Words, type Toast } from "@/components/site/Media";
import { RotatingWord } from "@/components/site/motion";
import { SuiteConsole } from "@/components/site/suite";
import { SectionHead, accent, button, container, d, type } from "@/components/site/Section";
import { CONTACT_HREF } from "@/lib/contact";

/*
 * Home-page demo request card (desktop; on smaller screens the hero's
 * "Book a free demo" button opens the same form as a popup). There is no
 * free trial or self-serve sign-up — requests are emailed to the team.
 */
function DemoCard() {
  return (
    <div id="demo-card" className="rounded-3xl border border-[#ebe5dc] bg-white p-7 shadow-[0_30px_70px_-30px_rgb(45_79_224/35%)] sm:p-8">
      <DemoForm
        compact
        source="the ERP home page demo card"
        heading={
          <div className="pb-2">
            <p className="text-[22px] font-semibold tracking-[-0.02em] text-[#14161c]">See Impacgo ERP in action</p>
            <p className="pt-1.5 text-[15px] text-[#5c6170]">Book a free, personalised demo. We&apos;ll walk you through the modules your business needs.</p>
          </div>
        }
      />
    </div>
  );
}

/* ---------- The whole suite in one window, with live events from every module ---------- */
const EVENTS: Toast[] = [
  { tone: "#c8452a", tint: "#fff1ec", icon: "✓", title: "Payroll approved", text: "March · 248 payslips → Finance" },
  { tone: "#2d4fe0", tint: "#eef1ff", icon: "↓", title: "Goods received", text: "PO-1042 · 1,200 kg steel rod" },
  { tone: "#6d4ef0", tint: "#f3f0ff", icon: "!", title: "Shortage flagged by MRP", text: "Bearing 6204 · needed W16" },
  { tone: "#b26a07", tint: "#fff7e8", icon: "⚙", title: "Work order completed", text: "WO-2295 · 300 brackets to stock" },
  { tone: "#c2185b", tint: "#fdeef4", icon: "₹", title: "Store day closed", text: "Koramangala · ₹1.42L posted" },
  { tone: "#15803d", tint: "#ecfdf3", icon: "✓", title: "Invoice posted", text: "INV-8812 · ₹2,45,000" },
];

function SuitePreview() {
  return (
    <div data-reveal="zoom" className="relative">
      <div data-scroll="rise">
        <SuiteConsole />
      </div>
      <LiveToasts items={EVENTS} className="absolute -bottom-8 -left-10 z-20 hidden xl:block" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--hx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--hy", `${e.clientY - r.top}px`);
      }}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fcf0df,#fcf0df_calc(100%-240px),#ffffff)]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span data-scroll="drift" style={{ "--k": "-140px" } as CSSProperties} className="site-blob-a absolute -top-48 -left-32 size-[620px] rounded-full bg-[#c9d3ff]/70 blur-[110px]" />
        <span data-scroll="drift" style={{ "--k": "-60px" } as CSSProperties} className="site-blob-b absolute -top-24 right-[-10%] size-[560px] rounded-full bg-[#f9cfe0]/70 blur-[110px]" />
        <span data-scroll="drift" style={{ "--k": "-220px" } as CSSProperties} className="site-blob-c absolute top-[460px] left-[30%] size-[520px] rounded-full bg-[#ffe0c9]/60 blur-[110px]" />
        <span className="site-grid-light absolute inset-0" />
        <span className="site-grid-lit absolute inset-0" />
        <span className="site-hero-glow absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 pt-[136px] pb-24 sm:px-8 lg:min-h-[100svh] lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-20 lg:pt-[112px] lg:pb-16">
        <div data-scroll="exit" className="max-lg:text-center">
          <a href="#modules" data-reveal className="group inline-flex items-center gap-2 text-[15px] font-medium max-sm:hidden text-[#383d48] transition-colors hover:text-[#2d4fe0]">
            <span className="text-[13px] font-semibold tracking-[0.08em] text-[#c8452a] uppercase">New</span>
            <span aria-hidden className="h-3.5 w-px bg-[#d6cfc4]" />
            The Impacgo ERP Suite: seven modules, one platform
            <ArrowRight className="text-[#2d4fe0] transition-transform group-hover:translate-x-0.5" />
          </a>
          <h1 data-reveal="words" style={d(80)} className={`${type.display.replace("text-balance ", "").replace("lg:text-[78px]", "lg:text-[68px]")} pt-6`}>
            <Words parts={["One platform to run"]} />
            <br className="max-sm:hidden" /> <Words parts={["your"]} start={4} />{" "}
            <span className="site-w inline-block overflow-hidden pb-[0.18em] -mb-[0.12em] align-bottom">
              <span className="site-w-in inline-block" style={{ "--i": 5 } as CSSProperties}>
                <RotatingWord words={["entire business.", "people.", "finances.", "supply chain.", "factory floor.", "stores.", "projects."]} ms={2200} />
              </span>
            </span>
          </h1>
          <p data-reveal style={d(160)} className={`${type.lead} mx-auto max-w-[560px] pt-7 lg:mx-0 lg:text-[21px]`}>
            Impacgo ERP connects HR, finance, supply chain, manufacturing, planning, retail and projects in one system, so every department works from the same data and nothing is typed twice.
          </p>
          <ul data-reveal style={d(240)} className="flex flex-wrap gap-x-7 gap-y-2 pt-8 text-[15px] text-[#383d48] max-lg:justify-center">
            {["7 integrated modules", "Role-based access", "Cloud, multi-tenant"].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <Check width={16} height={16} className="text-[#2d4fe0]" />
                {t}
              </li>
            ))}
          </ul>
          <div data-reveal style={d(320)} className="flex flex-wrap gap-3 pt-9 max-lg:justify-center lg:hidden">
            <a href={CONTACT_HREF} className={button.primary}>
              Book a free demo <ArrowRight />
            </a>
            <a href="#modules" className={button.secondary}>
              Explore the modules
            </a>
          </div>
        </div>
        <div data-reveal="zoom" style={d(200)} className="hidden lg:block">
          <DemoCard />
        </div>
      </div>

      <div className={`relative ${container} flex flex-col justify-center py-24 sm:py-32 lg:min-h-[100svh]`}>
        <div className="mb-14 sm:mb-16">
          <SectionHead eyebrow="A quick look inside" title={["Every department,", { text: "one window", className: accent }]} sub="Click through the modules, or watch the suite cycle through them on its own." />
        </div>
        <SuitePreview />
      </div>
    </section>
  );
}
