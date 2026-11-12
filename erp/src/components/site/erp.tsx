"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import { ArrowRight, Check, ExternalArrow } from "@/components/site/icons";
import { TiltFrame } from "@/components/site/Media";
import { CountUp, useAutoplay } from "@/components/site/motion";
import { Section, SectionHead, accent, afterHead, button, d, type } from "@/components/site/Section";
import { ERP_MODULES, ErpIcon, FLOWS, MODULE, ModuleScreen, ModuleTile, appHost, type ModuleKey } from "@/components/site/suite";
import { MAIN_SITE, withBasePath } from "@/lib/base-path";
import { CONTACT_HREF } from "@/lib/contact";

export const DEMO_URL = CONTACT_HREF; // opens the contact popup (components/site/ContactModal.tsx)

function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true,
  );
}

/* Cursor spotlight for .site-spot cards. */
const spot = (e: PointerEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

function Ticks({ items, color = "#2d4fe0", tint = "#eef1ff", cols = false }: { items: string[]; color?: string; tint?: string; cols?: boolean }) {
  return (
    <ul className={`grid gap-3.5 ${cols ? "sm:grid-cols-2 sm:gap-x-6" : ""}`}>
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 text-[16px] leading-[1.5] text-[#383d48]">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full" style={{ background: tint, color }}>
            <Check width={12} height={12} />
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}

/* ---------- Industry marquee ---------- */
const INDUSTRIES = ["Manufacturing", "Distribution", "Retail chains", "Wholesale", "FMCG", "Engineering", "Automotive parts", "Textiles & apparel", "Food processing", "Pharma", "Construction", "Professional services"];

export function Industries() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <p data-reveal className="px-5 text-center text-[24px] leading-snug font-semibold tracking-[-0.025em] text-[#14161c] sm:text-[32px]">
        Built for businesses that make, move and sell
      </p>
      <div data-reveal style={d(120)} className="site-marquee-wrap mx-auto mt-12 max-w-[1200px] overflow-hidden">
        <div className="site-marquee gap-4 py-2">
          {[...INDUSTRIES, ...INDUSTRIES].map((name, i) => (
            <span key={i} className="inline-flex h-14 shrink-0 items-center rounded-2xl border border-[#ece6dd] bg-white px-7 text-[16px] font-medium text-[#383d48] shadow-[0_6px_18px_-12px_rgb(20_22_28/25%)]">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Impacgo ERP: the six design objectives ---------- */
const ROLES: { name: string; can: ModuleKey[] }[] = [
  { name: "Accountant", can: ["finance"] },
  { name: "Store manager", can: ["retail", "chain"] },
  { name: "HR manager", can: ["hrms", "project"] },
  { name: "Plant head", can: ["make", "plan", "chain"] },
];

function RolePicker() {
  const [role, setRole] = useState(0);
  const can = ROLES[role].can;
  return (
    <div>
      <div role="radiogroup" aria-label="Choose a role" className="flex flex-wrap gap-1.5">
        {ROLES.map((r, i) => (
          <button
            key={r.name}
            type="button"
            role="radio"
            aria-checked={i === role}
            onClick={() => setRole(i)}
            className={`cursor-pointer rounded-full px-3 py-1.5 text-[13px] font-semibold transition-colors ${i === role ? "bg-[#14161c] text-white" : "bg-white text-[#464b57] ring-1 ring-[#ebe5dc] hover:ring-[#c9c1b4]"}`}
          >
            {r.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 pt-4 sm:grid-cols-7 lg:grid-cols-4">
        {ERP_MODULES.map((m) => {
          const on = can.includes(m.key);
          return (
            <span
              key={m.key}
              className={`relative flex flex-col items-center gap-1 rounded-xl px-1 py-2.5 text-[11px] font-semibold transition-[background-color,color,opacity,scale] duration-300 ${on ? "scale-100" : "scale-95 opacity-55"}`}
              style={{ background: on ? m.tint : "#f4f1ec", color: on ? m.color : "#8a8e99" }}
            >
              <ErpIcon name={on ? m.key : "lock"} size={17} />
              {m.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function PillarCard({ icon, title, text, children, className = "", delay = 0 }: { icon: string; title: string; text: string; children: ReactNode; className?: string; delay?: number }) {
  return (
    <article data-reveal style={d(delay)} onPointerMove={spot} className={`site-spot flex flex-col overflow-hidden rounded-[28px] border border-[#ebe5dc] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_30px_60px_-36px_rgb(45_79_224/40%)] sm:p-8 ${className}`}>
      <span className="grid size-11 place-items-center rounded-xl bg-[#eef1ff] text-[#2d4fe0]">
        <ErpIcon name={icon} size={21} />
      </span>
      <h3 className={`${type.h3} pt-5`}>{title}</h3>
      <p className={`${type.body} pt-2`}>{text}</p>
      <div className="mt-auto pt-7">{children}</div>
    </article>
  );
}

export function Pillars() {
  return (
    <Section id="features">
      <SectionHead eyebrow="Why Impacgo ERP" title={["Built to run", { text: "the whole business", className: accent }]} sub="Six principles shape every module, so the suite feels like one product rather than seven separate tools." />
      <div className={`grid gap-5 lg:grid-cols-3 ${afterHead}`}>
        <PillarCard className="lg:col-span-2" icon="database" title="One record, used everywhere" text="Customers, suppliers, items, employees and accounts are created once and shared by every module that needs them. No duplicate entry, no conflicting copies.">
          <div className="relative rounded-2xl bg-[#faf7f2] p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-[#ebe5dc] bg-white px-4 py-3 shadow-[0_14px_30px_-20px_rgb(20_22_28/35%)]">
                <span className="grid size-10 place-items-center rounded-lg bg-[#eef1ff] text-[#2d4fe0]">
                  <ErpIcon name="box" size={20} />
                </span>
                <span>
                  <span className="block text-[14px] font-semibold text-[#14161c]">Steel rod 12 mm</span>
                  <span className="block text-[12px] text-[#686c79]">Item RM-1042 · one master record</span>
                </span>
              </div>
              <svg width="40" height="12" viewBox="0 0 40 12" aria-hidden className="text-[#c9c1b4] max-sm:hidden">
                <path d="M0 6h36" stroke="currentColor" strokeWidth="2" className="site-flow" />
              </svg>
              <div className="flex flex-wrap gap-2">
                {[
                  ["chain", "1,240 kg on hand"],
                  ["plan", "Needed in W16"],
                  ["make", "Used by 3 BOMs"],
                  ["finance", "Valued at ₹78/kg"],
                ].map(([k, label], i) => {
                  const m = MODULE[k as ModuleKey];
                  return (
                    <span key={k} data-reveal="zoom" style={d(300 + i * 120)} className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-[13px] ring-1 ring-[#ebe5dc]">
                      <ErpIcon name={m.key} size={15} style={{ color: m.color }} />
                      <span className="font-semibold text-[#14161c]">{m.name}</span>
                      <span className="text-[#686c79]">{label}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </PillarCard>

        <PillarCard icon="shield" title="Access by role" text="People see the modules and actions their role needs. Try it: pick a role." delay={80}>
          <RolePicker />
        </PillarCard>

        <PillarCard icon="flow" title="Workflows that cross departments" text="A process that starts in one module carries on in the next, with the data travelling with it." delay={0}>
          <div className="flex flex-col gap-2">
            {[
              ["plan", "Shortage found"],
              ["chain", "Purchase order raised"],
              ["make", "Work order released"],
              ["finance", "Cost posted"],
            ].map(([k, label], i) => {
              const m = MODULE[k as ModuleKey];
              return (
                <div key={k} className="flex items-center gap-3">
                  <span className="relative flex flex-col items-center">
                    <ModuleTile m={m} size={30} icon={15} className="rounded-lg" />
                    {i < 3 ? (
                      <svg width="2" height="10" aria-hidden className="text-[#c9c1b4]">
                        <path d="M1 0v10" stroke="currentColor" strokeWidth="2" className="site-flow" />
                      </svg>
                    ) : null}
                  </span>
                  <span className={`text-[14px] ${i < 3 ? "-mt-2.5" : ""}`}>
                    <span className="font-semibold text-[#14161c]">{m.name}</span> <span className="text-[#5c6170]">· {label}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </PillarCard>

        <PillarCard icon="eye" title="Every department at a glance" text="Live numbers from people, money, stock and production, side by side." delay={80}>
          <div className="grid grid-cols-2 gap-2">
            {[
              { k: "make" as ModuleKey, label: "On-time", to: 94, suffix: "%" },
              { k: "hrms" as ModuleKey, label: "Attendance", to: 93, suffix: "%" },
              { k: "chain" as ModuleKey, label: "Open POs", to: 14, suffix: "" },
              { k: "retail" as ModuleKey, label: "Bills today", to: 412, suffix: "" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-3" style={{ background: MODULE[s.k].tint }}>
                <p className="text-[11px] font-semibold" style={{ color: MODULE[s.k].color }}>
                  {MODULE[s.k].name} · {s.label}
                </p>
                <p className="pt-1 text-[24px] leading-none font-semibold tracking-[-0.02em] text-[#14161c]">
                  <CountUp to={s.to} suffix={s.suffix} />
                </p>
              </div>
            ))}
          </div>
        </PillarCard>

        <PillarCard icon="tenant" title="Each organisation sealed off" text="Multi-tenant by design. Run several companies on one platform with data isolated at the tenant level." delay={160}>
          <div className="relative h-[136px]">
            {["Group HQ", "Northwind Retail", "Northwind Industries"].map((t, i) => (
              <div
                key={t}
                className="site-float absolute inset-x-0 flex items-center gap-3 rounded-xl border border-[#ebe5dc] bg-white px-4 py-3 shadow-[0_14px_30px_-20px_rgb(20_22_28/35%)]"
                style={{ top: `${i * 38}px`, marginInline: `${(2 - i) * 12}px`, zIndex: i, animationDelay: `${i * 0.5}s` } as CSSProperties}
              >
                <span className="grid size-8 place-items-center rounded-lg bg-[#f4f1ec] text-[#464b57]">
                  <ErpIcon name="tenant" size={16} />
                </span>
                <span className="flex-1 truncate text-[14px] font-semibold text-[#14161c]">{t}</span>
                <ErpIcon name="lock" size={16} className="text-[#15803d]" />
              </div>
            ))}
          </div>
        </PillarCard>

        <PillarCard className="lg:col-span-3" icon="grow" title="Start with what you need. Grow into the rest." text="The suite is modular. Begin with Finance and Chain, then switch on Make, Plan, Retail, Project or HRMS when you're ready. Each one connects the moment it goes live.">
          <div className="flex flex-wrap items-center gap-3">
            {ERP_MODULES.map((m, i) => {
              const live = i === 1 || i === 2;
              return (
                <span
                  key={m.key}
                  data-reveal="zoom"
                  style={{ ...d(200 + i * 90), ...(live ? { background: m.tint, color: m.color } : {}) } as CSSProperties}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[14px] font-semibold ${live ? "" : "border border-dashed border-[#d6cfc4] text-[#5c6170]"}`}
                >
                  <ErpIcon name={live ? m.key : "plus"} size={16} />
                  {live ? m.name : `Add ${m.name}`}
                </span>
              );
            })}
          </div>
        </PillarCard>
      </div>
    </Section>
  );
}

/* ---------- The seven modules, explained ---------- */
export function ModuleExplorer() {
  const [active, setActive] = useState(0);
  const m = ERP_MODULES[active];

  // Links such as /#module-finance (header, footer, hub) open that module's tab.
  useEffect(() => {
    const sync = () => {
      const key = window.location.hash.replace("#module-", "");
      const i = ERP_MODULES.findIndex((x) => x.key === key);
      if (i >= 0) setActive(i);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <Section id="modules" tone="tint" className="relative">
      {ERP_MODULES.map((x) => (
        <span key={x.key} id={`module-${x.key}`} aria-hidden className="absolute top-0 scroll-mt-20" />
      ))}
      <SectionHead eyebrow="The suite" title={["Seven modules.", { text: "One way of working.", className: accent }]} sub="Each module is a complete product for its department. Together they share one set of data and one way of working." />
      <div role="tablist" aria-label="ERP modules" data-reveal style={d(220)} className="mx-auto mt-12 flex w-fit max-w-full gap-1 overflow-x-auto rounded-2xl border border-[#ebe5dc] bg-white p-1.5 [scrollbar-width:none]">
        {ERP_MODULES.map((g, i) => (
          <button
            key={g.key}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-xl px-3.5 py-2.5 text-[15px] font-semibold transition-[background-color,color,box-shadow] duration-200 ${i === active ? "text-[#14161c] shadow-[inset_0_0_0_1px_#ebe5dc]" : "text-[#5c6170] hover:text-[#14161c]"}`}
            style={i === active ? { background: g.tint } : undefined}
          >
            <span className="grid size-6 place-items-center rounded-lg" style={{ background: i === active ? "#fff" : g.tint, color: g.color }}>
              <ErpIcon name={g.key} size={15} />
            </span>
            {g.name}
          </button>
        ))}
      </div>

      <div key={m.key} className="grid animate-[site-rise_.45s_cubic-bezier(.22,1,.36,1)] items-center gap-12 pt-14 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-14">
        <div>
          <p className="text-[15px] font-semibold" style={{ color: m.color }}>
            <span className="tabular-nums text-[#9a9ea8]">0{active + 1}</span> &nbsp;Impacgo {m.name} · {m.area}
          </p>
          <p className="pt-4 text-[28px] leading-[1.25] font-semibold tracking-[-0.025em] text-[#14161c] sm:text-[32px]">{m.pitch}</p>
          <p className={`${type.body} pt-4`}>{m.what}</p>
          <p className="mt-7 border-l-2 pl-5 text-[16px] leading-[1.65] text-[#464b57]" style={{ borderColor: m.color }}>
            <span className="font-semibold text-[#14161c]">For example: </span>
            {m.example}
          </p>
          <div className="pt-7">
            <Ticks items={m.features} color={m.color} tint={m.tint} cols />
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-8">
            <span className="text-[13px] font-semibold text-[#686c79]">Works with</span>
            {m.links.map((k) => {
              const l = MODULE[k];
              return (
                <button key={k} type="button" onClick={() => setActive(ERP_MODULES.indexOf(l))} className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold ring-1 ring-[#ebe5dc] transition-shadow hover:ring-[#c9c1b4]" style={{ color: l.color }}>
                  <ErpIcon name={k} size={14} />
                  {l.name}
                </button>
              );
            })}
          </div>
          {/* Modules with their own app link straight to it (same tab, so Back returns here); the rest offer a demo. */}
          <div className="flex flex-wrap gap-3 pt-8">
            {m.appUrl ? (
              <a href={m.appUrl} className={button.primary} aria-label={`Open Impacgo ${m.name} (${appHost(m.appUrl)})`}>
                Open Impacgo {m.name} <ExternalArrow />
              </a>
            ) : null}
            <a href={CONTACT_HREF} className={m.appUrl ? button.secondary : button.primary}>
              Book a free demo{m.appUrl ? null : <ArrowRight />}
            </a>
          </div>
        </div>
        <TiltFrame max={4} url={m.appUrl ? appHost(m.appUrl) : "impacgo.com/erp-suite"}>
          <ModuleScreen k={m.key} className="min-h-[420px]" />
        </TiltFrame>
      </div>
    </Section>
  );
}

/* ---------- One order, end to end ---------- */
const JOURNEY: { k: ModuleKey; title: string; text: string }[] = [
  { k: "plan", title: "Plan it", text: "MRP compares demand with live stock and suggests what to buy and build." },
  { k: "chain", title: "Buy it", text: "A purchase order goes out and goods are received into a warehouse bin." },
  { k: "make", title: "Make it", text: "Work orders issue material, book time on job cards and track cost." },
  { k: "chain", title: "Stock it", text: "Finished goods post back to stock through one common ledger." },
  { k: "retail", title: "Sell it", text: "The POS bills the customer and that store's stock updates." },
  { k: "finance", title: "Book it", text: "Purchases, production cost and sales land in the ledger." },
];

export function Journey() {
  return (
    <Section id="how">
      <SectionHead eyebrow="How it works" title={["From shortage to ledger,", { text: "without a single re-key", className: accent }]} sub="Follow one order through the suite. Every step picks up exactly where the last one left off." />
      <div data-scroll="draw" data-scroll-end="0.55" className={`relative ${afterHead}`}>
        <div aria-hidden className="absolute top-[28px] right-[8.33%] left-[8.33%] hidden h-0.5 rounded-full bg-[#ebe5dc] lg:block">
          <span className="site-draw-line block h-full rounded-full bg-gradient-to-r from-[#6d4ef0] via-[#2d4fe0] to-[#15803d]" />
        </div>
        <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {JOURNEY.map((s, i) => {
            const m = MODULE[s.k];
            return (
              <li key={s.title} data-step style={{ "--i": i, "--n": JOURNEY.length } as CSSProperties} className="flex flex-col items-center text-center">
                <span className="site-step-icon relative grid size-14 place-items-center rounded-2xl text-white" style={{ background: `linear-gradient(140deg, ${m.color}, color-mix(in srgb, ${m.color} 70%, #14161c))`, boxShadow: `0 12px 30px -12px ${m.color}` }}>
                  <ErpIcon name={m.key} size={24} />
                </span>
                <p className="site-step-text pt-6 text-[12px] font-semibold tracking-[0.12em] uppercase" style={{ color: m.color }}>
                  {i + 1} · {m.name}
                </p>
                <h3 className={`site-step-text ${type.h3} pt-1.5`}>{s.title}</h3>
                <p className="site-step-text max-w-[240px] pt-2 text-[15px] leading-[1.6] text-[#5c6170]">{s.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

/* ---------- How the modules work together: animated flow map ---------- */
const POS: Record<ModuleKey, [number, number]> = {
  hrms: [14, 13],
  project: [14, 51],
  plan: [50, 9],
  chain: [50, 33],
  make: [86, 13],
  retail: [86, 51],
  finance: [50, 57],
};
const EDGES: [ModuleKey, ModuleKey][] = [
  ["hrms", "finance"],
  ["chain", "finance"],
  ["chain", "plan"],
  ["plan", "make"],
  ["make", "chain"],
  ["retail", "chain"],
  ["project", "hrms"],
  ["make", "finance"],
];

/* Gently curved path between two modules (the same curve whichever end it starts from). */
function curve(a: ModuleKey, b: ModuleKey) {
  // The bend is computed in the edge's stored direction, so travel either way follows one curve.
  const flip = EDGES.some(([x, y]) => x === b && y === a);
  const [p, q] = flip ? [POS[b], POS[a]] : [POS[a], POS[b]];
  const dx = q[0] - p[0];
  const dy = q[1] - p[1];
  const len = Math.hypot(dx, dy) || 1;
  const bend = Math.min(7, len * 0.12);
  const cx = ((p[0] + q[0]) / 2 - (dy / len) * bend).toFixed(2);
  const cy = ((p[1] + q[1]) / 2 + (dx / len) * bend).toFixed(2);
  const [s, e] = flip ? [q, p] : [p, q];
  return `M${s[0]} ${s[1]} Q${cx} ${cy} ${e[0]} ${e[1]}`;
}

function FlowMap({ flow }: { flow: number }) {
  const reduce = useReducedMotion();
  const f = FLOWS[flow];
  const hops = f.path.slice(1).map((to, i) => [f.path[i], to] as [ModuleKey, ModuleKey]);
  if (f.both) hops.push(...hops.map(([a, b]) => [b, a] as [ModuleKey, ModuleKey]));
  const inFlow = new Set(f.path);

  return (
    <div className="relative aspect-[100/66] w-full">
      <svg viewBox="0 0 100 66" className="absolute inset-0 size-full overflow-visible" aria-hidden>
        {EDGES.map(([a, b]) => (
          <path key={`${a}${b}`} d={curve(a, b)} fill="none" stroke="#e4ddd2" strokeWidth="0.45" strokeDasharray="1 1.2" />
        ))}
        <g key={flow}>
          {hops.map(([a, b], i) => {
            const path = curve(a, b);
            return (
              <g key={`${a}${b}${i}`}>
                <path d={path} fill="none" stroke={MODULE[a].color} strokeOpacity="0.25" strokeWidth="1.6" strokeLinecap="round" />
                <path d={path} fill="none" stroke={MODULE[a].color} strokeWidth="0.7" strokeLinecap="round" className="site-flow" />
                {reduce ? null : (
                  <circle r="1.25" fill={MODULE[a].color}>
                    <animateMotion dur="1.8s" repeatCount="indefinite" path={path} begin={`${(i % (f.path.length - 1)) * 0.9}s`} />
                  </circle>
                )}
              </g>
            );
          })}
        </g>
      </svg>
      {ERP_MODULES.map((m) => {
        const [x, y] = POS[m.key];
        const on = inFlow.has(m.key);
        const step = f.path.indexOf(m.key);
        return (
          <span
            key={m.key}
            className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-xl border bg-white px-2 py-1.5 text-[11px] font-semibold whitespace-nowrap transition-[opacity,scale,box-shadow,border-color] duration-500 sm:gap-2 sm:px-3 sm:py-2 sm:text-[14px] ${on ? "scale-105 opacity-100" : "scale-95 opacity-45"}`}
            style={{ left: `${x}%`, top: `${(y / 66) * 100}%`, borderColor: on ? m.color : "#ebe5dc", boxShadow: on ? `0 14px 30px -14px ${m.color}` : "none", color: "#14161c" }}
          >
            <span className="grid size-5 place-items-center rounded-md sm:size-7 sm:rounded-lg" style={{ background: m.tint, color: m.color }}>
              <ErpIcon name={m.key} size={14} />
            </span>
            {m.name}
            {on && step >= 0 && !f.both ? (
              <span className="grid size-4 place-items-center rounded-full text-[9px] font-bold text-white sm:size-5 sm:text-[11px]" style={{ background: m.color }}>
                {step + 1}
              </span>
            ) : null}
          </span>
        );
      })}
    </div>
  );
}

export function Flows() {
  const { index, go, pauseProps } = useAutoplay(FLOWS.length, 5200);
  const f = FLOWS[index];
  return (
    <Section id="flows" tone="tint">
      <SectionHead eyebrow="Connected by design" title={["Work that starts in one module", { text: "finishes in another", className: accent }]} sub="Pick a business activity and watch its data travel through the suite." />
      <div className={`grid items-center gap-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-14 ${afterHead}`} {...pauseProps}>
        <ol data-reveal="left" className="flex flex-col gap-1.5">
          {FLOWS.map((x, i) => (
            <li key={x.activity}>
              <button
                type="button"
                onClick={() => go(i)}
                aria-pressed={i === index}
                className={`flex w-full cursor-pointer flex-col gap-1.5 rounded-xl px-4 py-3 text-left transition-[background-color,box-shadow] duration-300 ${i === index ? "bg-white shadow-[0_12px_30px_-18px_rgb(45_79_224/50%)] ring-1 ring-[#dfe5ff]" : "hover:bg-white/70"}`}
              >
                <span className={`text-[15px] font-semibold ${i === index ? "text-[#14161c]" : "text-[#464b57]"}`}>{x.activity}</span>
                <span className="flex flex-wrap items-center gap-1 text-[12px] font-semibold">
                  {x.path.map((k, j) => (
                    <span key={k} className="inline-flex items-center gap-1">
                      {j > 0 ? <span className="text-[#9a9ea8]">{x.both ? "↔" : "→"}</span> : null}
                      <span style={{ color: MODULE[k].color }}>{MODULE[k].name}</span>
                    </span>
                  ))}
                </span>
              </button>
            </li>
          ))}
        </ol>
        <div data-reveal="zoom" className="relative rounded-[28px] border border-[#ebe5dc] bg-white p-5 shadow-[0_40px_80px_-50px_rgb(20_22_28/40%)] sm:p-8">
          <span aria-hidden className="site-grid-light pointer-events-none absolute inset-0 rounded-[28px]" />
          <FlowMap flow={index} />
          <p key={index} aria-live="polite" className="animate-[site-rise_.4s_cubic-bezier(.22,1,.36,1)] border-t border-[#f0ebe3] pt-5 text-[16px] leading-[1.6] text-[#383d48]">
            <span className="font-semibold text-[#14161c]">{f.activity}. </span>
            {f.story}
          </p>
        </div>
      </div>

      <div data-reveal className="mt-14 grid items-center gap-6 rounded-[28px] border border-[#dfe5ff] bg-[linear-gradient(120deg,#eef1ff,#f6f3ff)] p-7 sm:grid-cols-[auto_minmax(0,1fr)] sm:p-9">
        <ModuleTile m={MODULE.chain} size={56} icon={28} className="rounded-2xl bg-white" />
        <div>
          <p className="text-[20px] font-semibold tracking-[-0.015em] text-[#14161c]">One stock ledger. One version of the truth.</p>
          <p className={`${type.body} max-w-[820px] pt-2`}>
            Chain owns shared stock data. Every inventory movement, whether a goods receipt, a work order or a store sale, posts through one common mechanism, so balances and movement history always agree. Make and Retail use the same inventory and Finance posting services rather than keeping stock of their own.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Ecosystem hub ---------- */
export function Ecosystem() {
  const R = 40;
  const pos = ERP_MODULES.map((_, i) => {
    const a = (i / ERP_MODULES.length) * Math.PI * 2 - Math.PI / 2;
    return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
  });
  return (
    <Section id="connected" inner="grid items-center gap-16 lg:grid-cols-2">
      <div>
        <SectionHead
          center={false}
          eyebrow="One business ecosystem"
          title={["People, money and materials,", { text: "finally in sync", className: accent }]}
          sub="Impacgo ERP replaces a patchwork of disconnected tools with one platform, so every department plans, works and reports from the same data."
        />
        <div data-reveal style={d(220)} className="pt-9">
          <Ticks items={["Shared master data across every module", "Cross-module workflows instead of exports and imports", "One stock ledger, owned by Chain", "Role-based access on every screen"]} />
        </div>
        <div data-reveal style={d(300)} className="flex flex-wrap gap-3 pt-10">
          <a href={DEMO_URL} className={button.primary}>
            Book a free demo <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#flows" className={button.secondary}>
            See how modules connect
          </a>
        </div>
      </div>

      <div data-reveal="zoom" data-scroll="drift" style={{ "--k": "-70px" } as CSSProperties} className="site-orbit-wrap relative mx-auto aspect-square w-full max-w-[520px]">
        <span aria-hidden className="absolute inset-[18%] rounded-full bg-gradient-to-br from-[#dfe5ff] via-[#ead9fb] to-[#ffe3d3] blur-2xl" />
        <svg viewBox="0 0 100 100" aria-hidden className="site-orbit absolute inset-0 size-full">
          <circle cx="50" cy="50" r={R} fill="none" stroke="#ebe5dc" strokeWidth="0.3" strokeDasharray="1 1.5" />
          {pos.map((p, i) => (
            <g key={i}>
              <line x1="50" y1="50" x2={p.x} y2={p.y} stroke="#ebe5dc" strokeWidth="0.4" />
              <line x1="50" y1="50" x2={p.x} y2={p.y} stroke={ERP_MODULES[i].color} strokeOpacity="0.8" strokeWidth="0.6" className="site-flow" style={{ animationDelay: `${i * 0.2}s` }} />
            </g>
          ))}
        </svg>
        <div className="absolute top-1/2 left-1/2 grid size-[28%] -translate-x-1/2 -translate-y-1/2 place-items-center">
          <span aria-hidden className="site-pulse absolute inset-0 rounded-[28%] bg-[#2d4fe0]/25" />
          <span className="relative flex size-full flex-col items-center justify-center rounded-[28%] bg-gradient-to-br from-[#2d4fe0] to-[#6d4ef0] shadow-[0_20px_50px_-15px_rgb(45_79_224/70%)]">
            <svg viewBox="0 0 28 28" aria-hidden className="size-[40%]">
              <path d="M9 8.5h3.2v11H9z" fill="#fff" />
              <path d="M14.5 8.5l6 5.5-6 5.5" fill="none" stroke="#c9d3ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="pt-1 text-[11px] font-bold tracking-[0.1em] text-white/90 sm:text-[12px]">ERP</span>
          </span>
        </div>
        <div className="site-orbit absolute inset-0">
          {ERP_MODULES.map((m, i) => (
            <span key={m.key} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${pos[i].x}%`, top: `${pos[i].y}%` }}>
              <span className="site-orbit-counter block">
                <a
                  href={`#module-${m.key}`}
                  className="site-float flex items-center gap-2 rounded-xl border border-[#ebe5dc] bg-white px-3 py-2 text-[13px] font-semibold whitespace-nowrap text-[#14161c] shadow-[0_10px_30px_-12px_rgb(20_22_28/30%)] transition-[border-color,box-shadow] hover:shadow-[0_14px_34px_-12px_rgb(45_79_224/45%)] sm:text-[14px]"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <ErpIcon name={m.key} size={16} style={{ color: m.color }} />
                  {m.name}
                </a>
              </span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Technology & architecture ---------- */
const TECH = [
  { icon: "tenant", title: "Multi-tenant SaaS", text: "Each organisation's data is isolated at the tenant level." },
  { icon: "database", title: "PostgreSQL", text: "A proven relational database for transactional business data." },
  { icon: "api", title: "API-first", text: "Frontends and services talk through well-defined APIs." },
  { icon: "shield", title: "Role-based access", text: "Permissions by role, module and action." },
  { icon: "flow", title: "Shared integration services", text: "Common stock and Finance posting keep modules consistent." },
  { icon: "cog", title: "Configurable modules", text: "Workflows, settings and permissions per module." },
];

function Layer({ label, children, delay }: { label: string; children: ReactNode; delay: number }) {
  return (
    <div data-reveal style={d(delay)} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
      <p className="pb-3 text-[11px] font-semibold tracking-[0.12em] text-white/50 uppercase">{label}</p>
      {children}
    </div>
  );
}

export function Platform() {
  return (
    <Section id="platform">
      <SectionHead eyebrow="Technology & architecture" title={["Enterprise foundations,", { text: "without the enterprise drag", className: accent }]} sub="A multi-tenant cloud platform on PostgreSQL and APIs, with security and permissions built in from day one." />
      <div className={`grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16 ${afterHead}`}>
        <div data-reveal="zoom" className="relative overflow-hidden rounded-[32px] bg-[#0f1328] p-5 shadow-[0_50px_100px_-50px_rgb(15_19_40/80%)] sm:p-8">
          <span aria-hidden className="site-grid pointer-events-none absolute inset-0" />
          <span aria-hidden className="site-blob-a pointer-events-none absolute -top-32 -right-24 size-[360px] rounded-full bg-[#4f6cf2]/30 blur-[90px]" />
          {/* Data pulse running down through the stack */}
          <span aria-hidden className="absolute top-8 bottom-8 left-[22px] w-px bg-white/10 sm:left-[34px]">
            <span className="site-drop absolute left-1/2 size-2 -translate-x-1/2 rounded-full bg-[#8ea2ff] shadow-[0_0_12px_#8ea2ff]" />
          </span>
          <div className="relative flex flex-col gap-3 pl-5 sm:pl-6">
            <Layer label="Your organisations" delay={0}>
              <div className="flex flex-wrap gap-2">
                {["Group HQ", "Manufacturing Co.", "Retail Co."].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-[13px] font-medium text-white">
                    <ErpIcon name="lock" size={14} className="text-[#86efac]" />
                    {t}
                  </span>
                ))}
              </div>
            </Layer>
            <Layer label="Role-based access control" delay={100}>
              <div className="flex flex-wrap gap-2 text-[12px] text-white/80">
                {["Admin", "Accountant", "Store manager", "HR manager", "Plant head"].map((r) => (
                  <span key={r} className="rounded-full border border-white/15 px-2.5 py-1">
                    {r}
                  </span>
                ))}
              </div>
            </Layer>
            <Layer label="Seven modules" delay={200}>
              <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                {ERP_MODULES.map((m) => (
                  <span key={m.key} className="flex flex-col items-center gap-1 rounded-xl bg-white/[0.06] py-2 text-[11px] font-semibold text-white/85">
                    <span className="grid size-7 place-items-center rounded-lg" style={{ background: m.tint, color: m.color }}>
                      <ErpIcon name={m.key} size={15} />
                    </span>
                    {m.name}
                  </span>
                ))}
              </div>
            </Layer>
            <Layer label="Shared data & integration services" delay={300}>
              <div className="flex flex-wrap gap-2 text-[13px] font-medium text-white">
                {["Common stock posting", "Finance posting", "Workflows", "APIs"].map((t) => (
                  <span key={t} className="rounded-lg bg-[#2d4fe0]/40 px-3 py-1.5 ring-1 ring-[#8ea2ff]/30">
                    {t}
                  </span>
                ))}
              </div>
            </Layer>
            <Layer label="Data" delay={400}>
              <span className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-white">
                <ErpIcon name="database" size={20} className="text-[#8ea2ff]" />
                PostgreSQL
                <span className="text-[13px] font-normal text-white/60">· tenant-isolated</span>
              </span>
            </Layer>
          </div>
        </div>

        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {TECH.map((t, i) => (
            <li key={t.title} data-reveal style={d(i * 80)}>
              <span className="grid size-11 place-items-center rounded-xl bg-[#eef1ff] text-[#2d4fe0]">
                <ErpIcon name={t.icon} size={21} />
              </span>
              <p className="pt-4 text-[18px] font-semibold tracking-[-0.01em] text-[#14161c]">{t.title}</p>
              <p className="pt-1.5 text-[15px] leading-[1.6] text-[#5c6170]">{t.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ---------- Scope in numbers ---------- */
const STATS = [
  { to: 7, suffix: "", label: "Integrated modules", note: "HRMS to Project, one platform" },
  { to: 42, suffix: "", label: "Capability areas", note: "From payroll to MRP to POS" },
  { to: FLOWS.length, suffix: "", label: "Cross-module flows", note: "Data that moves on its own" },
  { to: 1, suffix: "", label: "Stock ledger", note: "Owned by Chain, shared by all" },
];
const BAR_STYLES = [
  { h: "62%", from: "#5b78f5", to: "#2d4fe0" },
  { h: "74%", from: "#8b6cf6", to: "#6d4ef0" },
  { h: "86%", from: "#ef7a5a", to: "#d23d1d" },
  { h: "100%", from: "#3a3f4d", to: "#14161c" },
];

export function Stats() {
  return (
    <Section id="numbers" tone="tint">
      <SectionHead eyebrow="By the numbers" title={["Everything a growing business runs on,", { text: "in one suite", className: accent }]} />
      <div data-reveal className={`relative overflow-hidden rounded-[32px] border border-[#ebe5dc] bg-white px-4 pt-10 sm:px-10 ${afterHead}`}>
        <span aria-hidden className="site-grid-light pointer-events-none absolute inset-0" />
        <div className="relative grid h-[420px] grid-cols-2 items-end gap-3 sm:gap-5 lg:grid-cols-4 max-lg:h-auto max-lg:pb-6">
          {STATS.map((s, i) => {
            const bar = BAR_STYLES[i];
            return (
              <div key={s.label} className="site-bar flex flex-col justify-start rounded-t-[28px] p-5 text-white shadow-[0_-10px_40px_-20px_rgb(20_22_28/40%)] max-lg:rounded-[24px] sm:p-7" style={{ height: bar.h, background: `linear-gradient(180deg, ${bar.from}, ${bar.to})`, "--d": `${i * 140}ms` } as CSSProperties}>
                <p className="text-[40px] leading-none font-semibold tracking-[-0.03em] tabular-nums sm:text-[56px]">
                  <CountUp to={s.to} suffix={s.suffix} />
                </p>
                <p className="pt-4 text-[17px] font-semibold">{s.label}</p>
                <p className="pt-1 text-[14px] leading-snug text-white/85">{s.note}</p>
              </div>
            );
          })}
        </div>
      </div>
      <p className="pt-5 text-center text-[14px] text-[#686c79]">Figures describe the functional scope of the Impacgo ERP suite.</p>
    </Section>
  );
}

/* ---------- The wider Impacgo family ---------- */
const FAMILY = [
  { icon: "box", name: "StockLyte", area: "Inventory and stock management", color: "#2d4fe0", tint: "#eef1ff", href: MAIN_SITE.stocklyte },
  { icon: "cow", name: "CALVIQ", area: "Dairy farm management", color: "#b26a07", tint: "#fff7e8", href: MAIN_SITE.calviq },
  { icon: "leaf", name: "FarmYieldIQ", area: "Farmland and agricultural operations", color: "#15803d", tint: "#ecfdf3", href: MAIN_SITE.farmyieldiq },
];

export function Family() {
  return (
    <Section id="family">
      <SectionHead eyebrow="More from Impacgo" title={["One family of", { text: "business apps", className: accent }]} sub="Alongside the ERP suite, Impacgo builds focused apps for specific needs. Each one runs as its own product." />
      {/* The Impacgo CRM demo card used to sit on the left here; the CRM is no longer part of the ERP site. */}
      <div className={afterHead}>
        <div className="grid gap-5 md:grid-cols-3">
          {FAMILY.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              data-reveal
              style={d(100 + i * 100)}
              onPointerMove={spot}
              className="site-spot group flex items-center gap-5 rounded-[28px] border border-[#ebe5dc] bg-white p-6 transition-[box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-30px_rgb(20_22_28/35%)] sm:p-7"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3" style={{ background: p.tint, color: p.color }}>
                <ErpIcon name={p.icon} size={26} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[20px] font-semibold tracking-[-0.015em] text-[#14161c]">{p.name}</span>
                <span className="block pt-0.5 text-[15px] text-[#5c6170]">{p.area}</span>
              </span>
              <ArrowRight className="shrink-0 text-[#9a9ea8] transition-[translate,color] group-hover:translate-x-1 group-hover:text-[#2d4fe0]" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- FAQ ---------- */
const FAQS: { q: string; a: ReactNode }[] = [
  { q: "What is Impacgo ERP?", a: "An integrated, multi-module ERP platform from Impacgo Solutions. It brings HR, finance, supply chain, manufacturing, planning, retail and projects into one connected system, so departments share data and workflows instead of copying them between tools." },
  { q: "Do I need all seven modules?", a: "No. The suite is modular. Start with the modules you need, such as Finance and Chain, and add HRMS, Make, Plan, Retail or Project as you grow. Each one connects to the others as soon as it goes live." },
  { q: "How do the modules share data?", a: "Through defined integration workflows. Payroll in HRMS posts to Finance, Plan reads stock from Chain and releases work orders to Make, finished goods flow back into Chain, and every Retail bill updates stock and the books." },
  { q: "Why does Chain own the stock data?", a: "So there is only ever one stock balance. Every inventory movement, from goods receipts to production and store sales, posts through one common mechanism, which keeps balances and movement history consistent across modules." },
  { q: "Is each company's data kept separate?", a: "Yes. Impacgo ERP is a multi-tenant SaaS platform with tenant-level data isolation, so you can run several organisations on one platform without their data mixing." },
  { q: "Can I control who sees what?", a: "Yes. Role-based access control lets you grant access by role and permission, so an accountant, a store manager and an HR manager each see only the modules and actions their work needs." },
  { q: "Which features are available today?", a: "Modules and features roll out by release, and what you use can depend on your implementation. Book a free demo and our team will walk you through what's live and what fits your business." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" tone="tint" inner="grid gap-12 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHead center={false} eyebrow="FAQ" title={["Questions,", { text: "answered", className: accent }]} sub="What you need to know before bringing your business onto Impacgo ERP." />
        <div data-reveal style={d(220)} className="relative mt-10 h-[300px] overflow-hidden rounded-[28px] bg-[linear-gradient(150deg,#ffe7d1,#f3eeff)]">
          <span aria-hidden className="absolute bottom-[-35%] left-[-10%] size-[320px] rounded-full bg-[radial-gradient(circle,#ffd2b3,transparent_68%)]" />
          <Image src={withBasePath("/images/people/support.webp")} alt="A friendly Impacgo team member" width={465} height={1000} sizes="160px" className="site-person absolute bottom-0 left-[6%] h-[96%] w-auto" />
          <div className="site-float absolute top-[18%] right-[5%] w-[min(220px,56%)] rounded-2xl rounded-bl-md bg-white p-4 shadow-[0_20px_40px_-22px_rgb(20_22_28/45%)]">
            <p className="text-[15px] leading-snug font-semibold text-[#14161c]">Still deciding?</p>
            <p className="pt-1 text-[13px] leading-snug text-[#5c6170]">We&apos;ll map the suite to how your business runs today.</p>
            <a href={DEMO_URL} className={`${button.link} mt-3 text-[14px] whitespace-nowrap`}>
              Book a free demo <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
      <div className="divide-y divide-[#ebe5dc] border-y border-[#ebe5dc]">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} data-reveal style={d(i * 50)}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center gap-6 py-7 text-left text-[20px] leading-[1.4] font-semibold tracking-[-0.01em] text-[#14161c] transition-colors hover:text-[#2d4fe0]"
                >
                  <span className="flex-1">{f.q}</span>
                  <span className={`relative grid size-8 shrink-0 place-items-center rounded-full border transition-[background-color,border-color,rotate] duration-300 ${isOpen ? "rotate-45 border-[#2d4fe0] bg-[#2d4fe0] text-white" : "border-[#ebe5dc] text-[#464b57]"}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div id={`faq-${i}`} className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className={`${type.body} max-w-[640px] pr-14 pb-7`}>{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
