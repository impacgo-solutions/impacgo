"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import { Icon } from "@/components/crm/icons";
import { ArrowRight, Check, Chevron, Close, Play } from "@/components/site/icons";
import { LoopVideo, TiltFrame, Words } from "@/components/site/Media";
import { CountUp, useAutoplay } from "@/components/site/motion";
import { scrollToSignup } from "@/components/site/Hero";
import { Section, SectionHead, accent, afterHead, button, container, d, sectionFrame, tint, type } from "@/components/site/Section";
import { withBasePath } from "@/lib/base-path";

/* ---------- Industry marquee ---------- */
const INDUSTRIES = ["Retail", "Technology", "Healthcare", "Manufacturing", "Finance", "Education", "Real estate", "Consulting", "Logistics", "Hospitality", "Media", "Non-profit"];

export function Industries() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <p data-reveal className="px-5 text-center text-[24px] leading-snug font-semibold tracking-[-0.025em] text-[#14161c] sm:text-[32px]">
        Built for growing teams in every industry
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

/*
 * A working mini pipeline: drag a deal to another stage (or click it to move it forward)
 * and the totals update. Moving a deal on from Negotiation wins it, with a confetti burst.
 */
const STAGES = [
  { name: "Qualification", dot: "#4f6cf2" },
  { name: "Proposal", dot: "#6f86f6" },
  { name: "Negotiation", dot: "#f59e0b" },
];
const WON = STAGES.length;
const START_DEALS = [
  { id: 1, name: "Harborline pilot", value: 18000, stage: 0 },
  { id: 2, name: "Atlas Robotics", value: 9400, stage: 0 },
  { id: 3, name: "Northwind POS", value: 48000, stage: 1 },
  { id: 4, name: "Bluepeak licence", value: 26500, stage: 2 },
  { id: 5, name: "Verde Foods", value: 12000, stage: 2 },
];
const CONFETTI = ["#2d4fe0", "#8b6cf6", "#6d4ef0", "#f59e0b", "#e65a3d", "#7a52c7"];
const money = (n: number) => `$${n.toLocaleString("en-US")}`;

type Burst = { id: number; x: number; y: number; bits: { c: string; tx: number; ty: number; r: number; s: number }[] };

/* Random confetti pieces flying out in a ring (called from event handlers only). */
function confettiBits() {
  return Array.from({ length: 28 }, (_, i) => {
    const a = (i / 28) * Math.PI * 2 + Math.random() * 0.4;
    const v = 60 + Math.random() * 90;
    return { c: CONFETTI[i % CONFETTI.length], tx: Math.cos(a) * v, ty: Math.sin(a) * v - 40, r: Math.random() * 540 - 270, s: 0.6 + Math.random() * 0.8 };
  });
}

export function MiniBoard() {
  const [deals, setDeals] = useState(START_DEALS);
  const [over, setOver] = useState<number | null>(null);
  const [moved, setMoved] = useState<number | null>(null);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const boardRef = useRef<HTMLDivElement>(null);
  const burstId = useRef(0);
  const won = deals.filter((d) => d.stage === WON);

  const celebrate = (from: Element | null) => {
    const board = boardRef.current?.getBoundingClientRect();
    const r = from?.getBoundingClientRect();
    if (!board || !r || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = ++burstId.current;
    const bits = confettiBits();
    setBursts((b) => [...b, { id, x: r.left - board.left + r.width / 2, y: r.top - board.top + r.height / 2, bits }]);
    window.setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 1100);
  };

  const move = (id: number, stage: number, from: Element | null) => {
    if (stage === WON) celebrate(from);
    setDeals((all) => all.map((d) => (d.id === id ? { ...d, stage } : d)));
    setMoved(id);
  };

  return (
    <div ref={boardRef} className="relative">
      <div className="grid grid-cols-3 gap-2.5 rounded-2xl bg-[#faf7f2] p-3">
        {STAGES.map((s, si) => {
          const inStage = deals.filter((d) => d.stage === si);
          return (
            <div
              key={s.name}
              onDragOver={(e) => {
                e.preventDefault();
                setOver(si);
              }}
              onDragLeave={() => setOver((o) => (o === si ? null : o))}
              onDrop={(e) => {
                e.preventDefault();
                setOver(null);
                move(Number(e.dataTransfer.getData("text/plain")), si, null);
              }}
              className={`flex min-h-[150px] flex-col gap-2 rounded-xl p-1 transition-colors duration-200 ${over === si ? "bg-[#e8ecff] ring-2 ring-[#aebdff] ring-inset" : ""}`}
            >
              <div className="px-1">
                <p className="flex items-center gap-1.5 truncate text-[12px] font-semibold text-[#464b57]">
                  <span className="size-2 rounded-full" style={{ background: s.dot }} />
                  {s.name}
                </p>
                <p className="pt-0.5 text-[11px] text-[#686c79] tabular-nums">{money(inStage.reduce((t, d) => t + d.value, 0))}</p>
              </div>
              {inStage.map((d) => {
                const next = d.stage + 1;
                return (
                  <button
                    key={d.id}
                    type="button"
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData("text/plain", String(d.id))}
                    onClick={(e) => move(d.id, next, e.currentTarget)}
                    aria-label={`${d.name}, ${money(d.value)}, in ${s.name}. ${next === WON ? "Mark as won" : `Move to ${STAGES[next].name}`}`}
                    className={`cursor-grab rounded-xl border bg-white p-2.5 text-left shadow-[0_1px_2px_rgb(20_22_28/5%)] transition-[border-color,box-shadow] hover:border-[#aebdff] hover:shadow-[0_8px_18px_-10px_rgb(45_79_224/45%)] active:cursor-grabbing ${d.id === moved ? "animate-[crm-pop_.35s_ease] border-[#aebdff]" : "border-[#ebe5dc]"}`}
                  >
                    <span className="block truncate text-[12px] font-semibold text-[#14161c]">{d.name}</span>
                    <span className="block text-[11px] text-[#5c6170] tabular-nums">{money(d.value)}</span>
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-3 text-[13px] text-[#686c79]">
        {won.length ? (
          <span
            key={won.length}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              move(Number(e.dataTransfer.getData("text/plain")), WON, e.currentTarget);
            }}
            className="inline-flex animate-[crm-pop_.4s_ease] items-center gap-2 rounded-full bg-[#ecfdf3] px-3 py-1 font-semibold text-[#15803d] ring-1 ring-[#bbf7d0]"
          >
            <span className="size-2 rounded-full bg-[#16a34a]" />
            Closed Won · {won.length} {won.length === 1 ? "deal" : "deals"} · <span className="tabular-nums">{money(won.reduce((t, d) => t + d.value, 0))}</span>
          </span>
        ) : (
          <span className="rounded-md bg-[#eef1ff] px-1.5 py-0.5 text-[11px] font-bold tracking-[0.06em] text-[#2d4fe0] uppercase">Try it</span>
        )}
        {won.length === deals.length ? (
          <button type="button" onClick={() => setDeals(START_DEALS)} className="cursor-pointer font-semibold text-[#2d4fe0] hover:underline">
            Every deal won. Reset the board
          </button>
        ) : (
          <span>Drag a deal, or click it to move it on. Close one from Negotiation to win it.</span>
        )}
      </div>
      {bursts.map((b) => (
        <span key={b.id} aria-hidden className="pointer-events-none absolute" style={{ left: b.x, top: b.y }}>
          {b.bits.map((p, i) => (
            <span
              key={i}
              className="site-confetti absolute block h-2 w-1.5 rounded-[2px]"
              style={{ background: p.c, "--tx": `${p.tx}px`, "--ty": `${p.ty}px`, "--r": `${p.r}deg`, "--s": p.s } as CSSProperties}
            />
          ))}
        </span>
      ))}
    </div>
  );
}

/* ---------- What is what: each module explained ---------- */
const MODULE_GUIDE = [
  {
    key: "leads",
    name: "Leads",
    icon: "leads",
    color: "#2d4fe0",
    tint: "#eef1ff",
    what: "A lead is a person or business that has shown interest but hasn't been qualified yet.",
    example: "Priya from Orchid Studios downloaded your brochure and left her email.",
    uses: ["Capture enquiries from calls, forms and events", "Track status from New to Pre-Qualified", "Convert good leads with one click"],
    href: "/crm/leads",
    video: "lead",
  },
  {
    key: "contacts",
    name: "Contacts",
    icon: "contacts",
    color: "#c8452a",
    tint: "#fff3ef",
    what: "A contact is a real person you do business with, usually linked to a company account.",
    example: "Maya Patel, Head of Operations at Northwind Traders.",
    uses: ["Keep phone, email and title in one place", "See every deal the person is part of", "Plan calls and follow-ups as tasks"],
    href: "/crm/contacts",
    video: "contact",
  },
  {
    key: "accounts",
    name: "Accounts",
    icon: "accounts",
    color: "#6d4ef0",
    tint: "#eef5fc",
    what: "An account is a company you sell to. It groups all of its people, deals and activities.",
    example: "Harborline Logistics, with 2 contacts and 2 open deals.",
    uses: ["See everyone you know at a company", "Track every deal with that company", "Keep shared notes and details together"],
    href: "/crm/accounts",
    video: "search",
  },
  {
    key: "deals",
    name: "Deals",
    icon: "deals",
    color: "#7a52c7",
    tint: "#f5f1fd",
    what: "A deal is a sales opportunity with a value, a stage and an expected closing date.",
    example: "“Northwind POS rollout”, $48,000, in Proposal stage, closing this month.",
    uses: ["Move deals across stages on a board", "Know the value of your whole pipeline", "Spot deals that are about to close"],
    href: "/crm/deals?view=board",
    video: "pipeline",
  },
  {
    key: "tasks",
    name: "Tasks",
    icon: "tasks",
    color: "#b26a07",
    tint: "#fff7e8",
    what: "A task is a to-do with a due date and priority, linked to the lead, contact, account or deal it's about.",
    example: "“Send revised proposal” to Northwind, due tomorrow, high priority.",
    uses: ["Never miss a follow-up", "See overdue work in the notification bell", "Tick tasks off right from Home"],
    href: "/crm/tasks",
    video: "tasks",
  },
];

export function ModulesExplained() {
  const [active, setActive] = useState(0);
  const m = MODULE_GUIDE[active];
  return (
    <Section id="modules" tone="tint">
      <SectionHead
        eyebrow="What is what"
        title={["Five building blocks.", { text: "Explained simply.", className: accent }]}
        sub="New to CRMs? Here's what each part of Impacgo CRM is for, with a real example of each."
      />
      <div role="tablist" aria-label="CRM modules" data-reveal style={d(220)} className="mx-auto mt-12 flex w-fit max-w-full gap-1 overflow-x-auto rounded-2xl border border-[#ebe5dc] bg-white p-1.5 [scrollbar-width:none]">
        {MODULE_GUIDE.map((g, i) => (
          <button
            key={g.key}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-[15px] font-semibold transition-[background-color,color,box-shadow] duration-200 ${
              i === active ? "bg-[#fcf0df] text-[#14161c] shadow-[inset_0_0_0_1px_#ebe5dc]" : "text-[#5c6170] hover:text-[#14161c]"
            }`}
          >
            <span className="grid size-6 place-items-center rounded-lg" style={{ background: g.tint, color: g.color }}>
              <Icon name={g.icon} size={15} />
            </span>
            {g.name}
          </button>
        ))}
      </div>

      <div key={m.key} className="grid animate-[site-rise_.45s_cubic-bezier(.22,1,.36,1)] items-center gap-12 pt-14 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-16">
        <div>
          <p className="text-[15px] font-semibold" style={{ color: m.color }}>
            What is {m.name === "Accounts" ? "an account" : `a ${m.name.slice(0, -1).toLowerCase()}`}?
          </p>
          <p className="pt-4 text-[28px] leading-[1.3] font-semibold tracking-[-0.025em] text-[#14161c]">{m.what}</p>
          <p className="mt-8 border-l-2 pl-5 text-[17px] leading-[1.65] text-[#464b57]" style={{ borderColor: m.color }}>
            <span className="font-semibold text-[#14161c]">For example: </span>
            {m.example}
          </p>
          <ul className="flex flex-col gap-4 pt-8">
            {m.uses.map((u) => (
              <li key={u} className="flex items-start gap-3 text-[17px] leading-[1.5] text-[#383d48]">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full" style={{ background: m.tint, color: m.color }}>
                  <Check width={12} height={12} />
                </span>
                {u}
              </li>
            ))}
          </ul>
          <Link href={m.href} className={`${button.link} mt-8`} style={{ color: m.color }}>
            Open {m.name} in the demo <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <TiltFrame max={4}>
          <LoopVideo name={m.video} label={`${m.name} in Impacgo CRM, shown in action`} />
        </TiltFrame>
      </div>
    </Section>
  );
}

/* ---------- Built for every team (photos) ---------- */
const TEAMS = [
  {
    photo: "/images/people/sales-rep-in.webp", w: 495, h: 1000, alt: "A confident sales professional in a navy blazer",
    role: "Sales teams", text: "Share one pipeline, see who owns what, and stop deals slipping through the cracks.",
    tone: "bg-[linear-gradient(160deg,#ffe7d1,#fff3e6)]", glow: "#ffcfae", chip: ["Deal moved", "Northwind POS · Proposal"],
    fit: "top-[6%] h-[160%]", // full-length photo: zoom to a waist-up crop like the others
  },
  {
    photo: "/images/people/manager.webp", w: 631, h: 1000, alt: "A confident sales manager",
    role: "Sales managers", text: "Check pipeline value, overdue work and deals closing soon in a single glance each morning.",
    tone: "bg-[linear-gradient(160deg,#ece8ff,#f6f3ff)]", glow: "#d6ccff", chip: ["Open pipeline", "$312,900 · 6 deals"],
  },
  {
    photo: "/images/people/founder-in.webp", w: 558, h: 1000, alt: "A smiling young founder with arms crossed",
    role: "Founders", text: "Start organised from day one without a long setup or a dedicated admin.",
    tone: "bg-[linear-gradient(160deg,#e3edff,#f1f6ff)]", glow: "#c7d8ff", chip: ["Workspace ready", "Sample data loaded"],
  },
  {
    photo: "/images/people/shop-owner.webp", w: 880, h: 1000, alt: "A cheerful small business owner in an apron",
    role: "Small businesses", text: "Remember every customer, follow up on time and turn more enquiries into sales.",
    tone: "bg-[linear-gradient(160deg,#ffe6ec,#fff3f6)]", glow: "#ffc9d6", chip: ["Follow-up done", "Call back Elena Rossi"],
  },
];

export function Teams() {
  return (
    <Section id="teams">
      <SectionHead eyebrow="Who it's for" title={["Built for the way", { text: "your team works", className: accent }]} sub="Whether you're a team of two or twenty, Impacgo CRM stays simple enough to use every day." />
      <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${afterHead}`}>
        {TEAMS.map((t, i) => (
          <article key={t.role} data-reveal style={d(i * 100)} className="group overflow-hidden rounded-[28px] border border-[#ebe5dc] bg-white transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgb(20_22_28/35%)]">
            <div className={`relative h-[290px] overflow-hidden ${t.tone}`}>
              <span aria-hidden className="absolute bottom-[-30%] left-1/2 size-[300px] -translate-x-1/2 rounded-full" style={{ background: `radial-gradient(circle, ${t.glow}, transparent 68%)` }} />
              <Image
                src={withBasePath(t.photo)}
                alt={t.alt}
                width={t.w}
                height={t.h}
                sizes="(max-width: 640px) 80vw, 280px"
                className={`site-person absolute left-1/2 w-auto max-w-none -translate-x-1/2 transition-[scale] duration-700 group-hover:scale-[1.04] ${"fit" in t ? t.fit : "bottom-0 h-[94%]"}`}
                style={{ transformOrigin: "50% 100%" }}
              />
              <div className="site-float absolute bottom-4 left-4 rounded-xl border border-white/70 bg-white/90 px-3 py-2 shadow-[0_14px_30px_-18px_rgb(20_22_28/45%)] backdrop-blur" style={{ animationDelay: `${i * 0.6}s` }}>
                <p className="flex items-center gap-1.5 text-[12px] font-semibold text-[#14161c]">
                  <span className="size-1.5 rounded-full bg-[#16a34a]" />
                  {t.chip[0]}
                </p>
                <p className="text-[11px] text-[#5c6170]">{t.chip[1]}</p>
              </div>
            </div>
            <div className="px-6 pt-6 pb-7">
              <h3 className={type.h3}>{t.role}</h3>
              <p className={`${type.body} pt-2`}>{t.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- How it works ---------- */
const STEPS = [
  { icon: "leads", title: "Capture", text: "Add leads from calls, forms or events in seconds." },
  { icon: "filter", title: "Qualify", text: "Track status from New to Pre-Qualified as you talk." },
  { icon: "convert", title: "Convert", text: "One click creates the contact, account and deal." },
  { icon: "deals", title: "Close", text: "Move deals across the board until they are won." },
];

export function HowItWorks() {
  return (
    <Section id="how">
      <SectionHead eyebrow="How it works" title={["From first hello to", { text: "closed deal", className: accent }]} sub="Four simple steps that take every opportunity across the finish line." />
      <div data-scroll="draw" data-scroll-end="0.55" className={`relative ${afterHead}`}>
        <div aria-hidden className="absolute top-[28px] right-[12.5%] left-[12.5%] hidden h-0.5 rounded-full bg-[#ebe5dc] md:block">
          <span className="site-draw-line block h-full rounded-full bg-gradient-to-r from-[#2d4fe0] via-[#6d4ef0] to-[#8b6cf6]" />
        </div>
        <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          {STEPS.map((s, i) => (
            <li key={s.title} data-step style={{ "--i": i } as CSSProperties} className="flex flex-col items-center text-center">
              <span className="site-step-icon relative grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-[#2d4fe0] to-[#6d4ef0] text-white shadow-[0_12px_30px_-12px_rgb(45_79_224/60%)]">
                <Icon name={s.icon} size={23} />
              </span>
              <p className="site-step-text pt-6 text-[13px] font-semibold tracking-[0.12em] text-[#686c79] uppercase">Step {i + 1}</p>
              <h3 className={`site-step-text ${type.h3} pt-1.5`}>{s.title}</h3>
              <p className={`site-step-text ${type.body} max-w-[250px] pt-2`}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ---------- Showcase slider ---------- */
const SLIDES = [
  { tag: "Pipeline", title: "Win more deals", text: "Move deals through every stage on a visual board and always know what comes next.", link: "Explore the pipeline", href: "/crm/deals?view=board", video: "pipeline" },
  { tag: "Relationships", title: "Know every customer", text: "Every contact, account and detail in one place, so each touchpoint feels personal.", link: "Explore contacts", href: "/crm/contacts", video: "contact" },
  { tag: "Insights", title: "See what matters", text: "A live dashboard of open pipeline, won deals and overdue tasks keeps you a step ahead.", link: "View the dashboard", href: "/crm", video: "dashboard" },
  { tag: "Momentum", title: "Keep the momentum", text: "Convert qualified leads in one click and plan every follow-up as a task.", link: "See lead conversion", href: "/crm/leads", video: "lead" },
];
const SLIDE_MS = 9000;

/* Desktop screens tall enough to hold the whole card pin the showcase and drive it by scroll. */
const PIN_QUERY = "(min-width: 1024px) and (min-height: 860px) and (prefers-reduced-motion: no-preference)";
function usePinned() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(PIN_QUERY);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(PIN_QUERY).matches,
    () => false,
  );
}

/*
 * Scrollytelling showcase. Pinned (desktop): the section is four screens tall, its
 * content sticks, and scroll position picks the story; --sp (0 → 4) fills the
 * progress bars. Otherwise it is an autoplaying carousel.
 */
export function Showcase() {
  const auto = useAutoplay(SLIDES.length, SLIDE_MS);
  const pinned = usePinned();
  const ref = useRef<HTMLElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const index = pinned ? scrollIndex : auto.index;

  useEffect(() => {
    const el = ref.current;
    if (!pinned || !el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const total = Math.max(1, el.offsetHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / total));
      el.style.setProperty("--sp", (p * SLIDES.length).toFixed(3));
      setScrollIndex(Math.min(SLIDES.length - 1, Math.floor(p * SLIDES.length)));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [pinned]);

  const go = (target: number) => {
    const i = (target + SLIDES.length) % SLIDES.length;
    const el = ref.current;
    if (!pinned || !el) return auto.go(i);
    // Jump to the middle of that story's scroll range.
    const total = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + (total * (i + 0.5)) / SLIDES.length, behavior: "instant" });
    setScrollIndex(i);
  };

  return (
    <section id="workspace" ref={ref} className={pinned ? `relative h-[400svh] scroll-mt-0 ${tint}` : `${sectionFrame} ${tint}`} {...(pinned ? {} : auto.pauseProps)}>
      <div className={pinned ? "sticky top-0 flex h-[100svh] flex-col justify-center pt-[72px]" : ""}>
        <div className={container}>
          <SectionHead eyebrow="Built for your whole sales day" title={["One workspace,", { text: "every part of the job", className: accent }]} />
          <div data-reveal className={`grid overflow-hidden rounded-[28px] border border-[#ebe5dc] bg-white shadow-[0_30px_70px_-40px_rgb(20_22_28/30%)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] ${pinned ? "mt-10" : afterHead}`}>
            <div className="grid p-8 sm:p-12 lg:p-14">
              {SLIDES.map((s, i) => (
                <div key={s.title} aria-hidden={i !== index} className={`[grid-area:1/1] flex flex-col justify-center transition-[opacity,translate] duration-500 ${i === index ? "translate-y-0 opacity-100" : `pointer-events-none opacity-0 ${i < index ? "-translate-y-4" : "translate-y-4"}`}`}>
                  <p className={type.eyebrow}>
                    <span className="mr-3 text-[#9a9ea8] tabular-nums">0{i + 1}</span>
                    {s.tag}
                  </p>
                  <h3 className="text-balance pt-4 text-[34px] leading-[1.1] font-semibold tracking-[-0.035em] text-[#14161c] sm:text-[46px]">{s.title}</h3>
                  <p className={`${type.lead} max-w-[400px] pt-4`}>{s.text}</p>
                  <Link href={s.href} tabIndex={i === index ? 0 : -1} className={`${button.link} mt-8 w-fit`}>
                    {s.link} <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="relative grid min-h-[380px] place-items-center bg-[radial-gradient(110%_90%_at_100%_0%,#dfe5ff,transparent_60%),linear-gradient(#faf7f2,#faf7f2)] p-6 sm:p-10">
              {SLIDES.map((s, i) => (
                <div key={s.title} aria-hidden className={`[grid-area:1/1] grid w-full place-items-center transition-[opacity,scale] duration-700 ${i === index ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`}>
                  {i === index ? (
                    <TiltFrame max={3} className="w-full">
                      <LoopVideo name={s.video} label={`${s.title}: Impacgo CRM in action`} />
                    </TiltFrame>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6 pt-8">
            <div className="grid flex-1 grid-cols-4 gap-3">
              {SLIDES.map((s, i) => (
                <button key={s.title} type="button" onClick={() => go(i)} aria-label={`Show ${s.title}`} aria-current={i === index} className="group cursor-pointer text-left">
                  <span className="block h-1 overflow-hidden rounded-full bg-[#ebe5dc]">
                    {pinned ? (
                      <span className="block h-full origin-left bg-[#2d4fe0]" style={{ transform: `scaleX(clamp(0, calc(var(--sp, 0) - ${i}), 1))` }} />
                    ) : i === index ? (
                      <span key={`${index}-${auto.cycle}`} className={`site-fill block h-full bg-[#2d4fe0] ${auto.paused ? "site-fill-paused" : ""}`} style={{ "--dur": `${SLIDE_MS}ms` } as CSSProperties} />
                    ) : i < index ? (
                      <span className="block h-full bg-[#aebdff]" />
                    ) : null}
                  </span>
                  <span className={`block pt-2 text-[13px] font-medium transition-colors max-sm:hidden ${i === index ? "text-[#14161c]" : "text-[#686c79] group-hover:text-[#464b57]"}`}>{s.tag}</span>
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(index - 1)} aria-label="Previous slide" className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#ebe5dc] bg-white text-[#14161c] transition-colors hover:border-[#d6cfc4] hover:bg-[#faf7f2]">
                <Chevron dir="left" width={18} height={18} />
              </button>
              <button type="button" onClick={() => go(index + 1)} aria-label="Next slide" className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#ebe5dc] bg-white text-[#14161c] transition-colors hover:border-[#d6cfc4] hover:bg-[#faf7f2]">
                <Chevron dir="right" width={18} height={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Everything connected (hub) ---------- */
const NODES = [
  { label: "Leads", icon: "leads", href: "/crm/leads" },
  { label: "Contacts", icon: "contacts", href: "/crm/contacts" },
  { label: "Accounts", icon: "accounts", href: "/crm/accounts" },
  { label: "Deals", icon: "deals", href: "/crm/deals" },
  { label: "Pipeline", icon: "pipeline", href: "/crm/deals?view=board" },
  { label: "Tasks", icon: "tasks", href: "/crm/tasks" },
  { label: "Dashboard", icon: "home", href: "/crm" },
  { label: "Search", icon: "search", href: "/crm/search" },
];

const NODE_COLORS = ["#2d4fe0", "#c8452a", "#6d4ef0", "#7a52c7", "#b26a07", "#2d4fe0", "#c8452a", "#6d4ef0"];

export function Connected() {
  const R = 41; // radius in % of the square stage
  const pos = NODES.map((_, i) => {
    const a = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
    return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
  });
  return (
    <Section id="connected" inner="grid items-center gap-16 lg:grid-cols-2">
      <div>
        <SectionHead
          center={false}
          eyebrow="Connected by design"
          title={["Every record,", { text: "connected", className: accent }]}
          sub="A lead becomes a contact, an account and a deal without retyping a thing. Every task stays linked to the record it belongs to."
        />
        <ul data-reveal style={d(220)} className="grid gap-4 pt-9">
          {["Linked leads, contacts and accounts", "Deals with their full history", "Tasks attached to any record", "One search across everything"].map((t) => (
            <li key={t} className="flex items-start gap-3 text-[17px] leading-[1.5] text-[#383d48]">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#eef1ff] text-[#2d4fe0]">
                <Check width={12} height={12} />
              </span>
              {t}
            </li>
          ))}
        </ul>
        <div data-reveal style={d(300)} className="flex flex-wrap gap-3 pt-10">
          <Link href="/signup" onClick={scrollToSignup} className={button.primary}>
            Get started free <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/crm" className={button.secondary}>
            Try the live demo
          </Link>
        </div>
      </div>

      <div data-reveal="zoom" data-scroll="drift" style={{ "--k": "-70px" } as CSSProperties} className="site-orbit-wrap relative mx-auto aspect-square w-full max-w-[520px]">
        <span aria-hidden className="absolute inset-[18%] rounded-full bg-gradient-to-br from-[#dfe5ff] via-[#ead9fb] to-[#ffe3d3] blur-2xl" />
        <svg viewBox="0 0 100 100" aria-hidden className="site-orbit absolute inset-0 size-full">
          <circle cx="50" cy="50" r={R} fill="none" stroke="#ebe5dc" strokeWidth="0.3" strokeDasharray="1 1.5" />
          {pos.map((p, i) => (
            <g key={i}>
              <line x1="50" y1="50" x2={p.x} y2={p.y} stroke="#ebe5dc" strokeWidth="0.4" />
              <line x1="50" y1="50" x2={p.x} y2={p.y} stroke="url(#hub-flow)" strokeWidth="0.6" className="site-flow" style={{ animationDelay: `${i * 0.2}s` }} />
            </g>
          ))}
          <defs>
            <linearGradient id="hub-flow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2d4fe0" />
              <stop offset="1" stopColor="#6d4ef0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute top-1/2 left-1/2 grid size-[26%] -translate-x-1/2 -translate-y-1/2 place-items-center">
          <span aria-hidden className="site-pulse absolute inset-0 rounded-[28%] bg-[#2d4fe0]/25" />
          <span className="relative grid size-full place-items-center rounded-[28%] bg-gradient-to-br from-[#2d4fe0] to-[#6d4ef0] shadow-[0_20px_50px_-15px_rgb(45_79_224/70%)]">
            <svg viewBox="0 0 28 28" aria-hidden className="size-[46%]">
              <path d="M9 8.5h3.2v11H9z" fill="#fff" />
              <path d="M14.5 8.5l6 5.5-6 5.5" fill="none" stroke="#c9d3ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        {/* Nodes ride the same slow orbit as the lines but counter-rotate to stay upright */}
        <div className="site-orbit absolute inset-0">
          {NODES.map((n, i) => (
            <span key={n.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${pos[i].x}%`, top: `${pos[i].y}%` }}>
              <span className="site-orbit-counter block">
                <Link
                  href={n.href}
                  className="site-float flex items-center gap-2 rounded-xl border border-[#ebe5dc] bg-white px-3 py-2 text-[13px] font-semibold whitespace-nowrap text-[#14161c] shadow-[0_10px_30px_-12px_rgb(20_22_28/30%)] transition-[border-color,box-shadow] hover:border-[#aebdff] hover:shadow-[0_14px_34px_-12px_rgb(45_79_224/45%)] sm:text-[14px]"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <Icon name={n.icon} size={16} style={{ color: NODE_COLORS[i % NODE_COLORS.length] }} />
                  {n.label}
                </Link>
              </span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Stats ---------- */
const STATS = [
  { to: 5, suffix: "", label: "Core modules", note: "Leads to tasks, connected" },
  { to: 8, suffix: "", label: "Pipeline stages", note: "Qualification to Closed Won" },
  { to: 1, suffix: "-click", label: "Lead conversion", note: "Contact, account and deal" },
  { to: 100, suffix: "%", label: "In your browser", note: "Nothing to install" },
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
      <SectionHead eyebrow="By the numbers" title={["Small team or growing fast,", { text: "it scales with you", className: accent }]} />
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
      <p className="pt-5 text-center text-[14px] text-[#686c79]">Figures describe features built into Impacgo CRM.</p>
    </Section>
  );
}

/* ---------- See it in action + overview lightbox ---------- */
const OVERVIEW = [
  { video: "dashboard", caption: "Start the day on Home: pipeline value, tasks and new leads" },
  { video: "pipeline", caption: "Drag deals between stages; every column totals its value" },
  { video: "lead", caption: "Add a lead, then convert it into a contact, account and deal" },
  { video: "search", caption: "Search everything and open the full history of any account" },
  { video: "tasks", caption: "Move tasks across the board as work progresses" },
  { video: "contact", caption: "Jump from a contact to their company and every related deal" },
];

/* Plays every product clip in order; each progress bar fills with its clip. */
function OverviewModal({ onClose }: { onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const go = (i: number) => {
    setIndex((i + OVERVIEW.length) % OVERVIEW.length);
    setProgress(0);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  });

  const clip = OVERVIEW[index];
  return (
    <div role="dialog" aria-modal="true" aria-label="Impacgo CRM overview" onClick={onClose} className="fixed inset-0 z-[70] grid animate-[site-fade_.25s_ease] place-items-center bg-[#14161c]/70 p-4 backdrop-blur-sm">
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-[1100px] animate-[site-rise_.35s_cubic-bezier(.22,1,.36,1)] overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button type="button" onClick={onClose} aria-label="Close overview" autoFocus className="absolute top-3 right-3 z-10 grid size-10 cursor-pointer place-items-center rounded-full bg-white/95 text-[#14161c] shadow-md hover:bg-white">
          <Close />
        </button>
        <video
          key={clip.video}
          src={withBasePath(`/videos/${clip.video}.webm`)}
          poster={withBasePath(`/videos/${clip.video}.png`)}
          autoPlay
          muted
          playsInline
          aria-label={clip.caption}
          onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime / (e.currentTarget.duration || 1))}
          onEnded={() => go(index + 1)}
          className="block aspect-[1280/727] w-full bg-[#faf7f2]"
        />
        <div className="flex flex-wrap items-center gap-4 border-t border-[#ebe5dc] px-5 py-4">
          <p className="min-w-0 flex-1 text-[15px] font-medium text-[#14161c]">
            <span className="mr-2 text-[#2d4fe0]">
              {index + 1}/{OVERVIEW.length}
            </span>
            {clip.caption}
          </p>
          <div className="flex gap-1.5">
            {OVERVIEW.map((o, i) => (
              <button key={o.video} type="button" onClick={() => go(i)} aria-label={`Clip ${i + 1}: ${o.caption}`} aria-current={i === index} className="h-1.5 w-8 cursor-pointer overflow-hidden rounded-full bg-[#ebe5dc]">
                <span className="block h-full rounded-full bg-[#2d4fe0] transition-[width] duration-200" style={{ width: i < index ? "100%" : i === index ? `${progress * 100}%` : "0%" }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function InAction() {
  const [open, setOpen] = useState(false);
  return (
    <Section id="demo">
      <div data-scroll="expand" data-scroll-end="0.9" className="relative overflow-hidden rounded-[32px] border border-[#ebe5dc] bg-[linear-gradient(170deg,#eef1ff,#f3f0ff_70%)] px-6 pt-16 text-center sm:px-12 sm:pt-24">
        <span aria-hidden className="site-grid-light pointer-events-none absolute inset-0" />
        <span aria-hidden className="site-blob-a pointer-events-none absolute -top-40 left-1/4 size-[460px] rounded-full bg-[#c9d3ff]/60 blur-3xl" />
        <div className="relative">
          <h2 data-reveal="words" className={type.display}>
            <Words parts={["See it in", { text: "action", className: accent }]} />
          </h2>
          <p data-reveal style={d(200)} className={`${type.lead} mx-auto max-w-[560px] pt-5`}>
            Watch the full product tour, or open the live demo and click around with real sample data.
          </p>
          <div data-reveal style={d(280)} className="flex flex-wrap justify-center gap-3 pt-10">
            <button type="button" onClick={() => setOpen(true)} className={`${button.primary} gap-3 pl-3`}>
              <span className="relative grid size-8 place-items-center rounded-lg bg-white/15 transition-transform group-hover:scale-110">
                <span aria-hidden className="site-pulse absolute inset-0 rounded-lg bg-white/30" />
                <Play width={20} height={20} />
              </span>
              Watch the product tour
            </button>
            <Link href="/crm" className={button.secondary}>
              Try the live demo
            </Link>
          </div>
          <div data-reveal style={d(340)} className="mx-auto mt-16 max-w-[1000px]">
            <div data-scroll="rise" data-scroll-end="0.8">
              <TiltFrame max={3} className="[&>div]:rounded-b-none [&>div]:border-b-0">
                <LoopVideo name="lead" label="Creating a lead and converting it into a deal in Impacgo CRM" />
              </TiltFrame>
            </div>
          </div>
        </div>
      </div>
      {open ? <OverviewModal onClose={() => setOpen(false)} /> : null}
    </Section>
  );
}

/* ---------- FAQ accordion ---------- */
const FAQS: { q: string; a: ReactNode }[] = [
  { q: "What can I manage in Impacgo CRM?", a: "Leads, contacts, accounts, deals and tasks, all connected, so every record shows its related contacts, deals and activities." },
  { q: "How does lead conversion work?", a: "Open a qualified lead and click Convert. Impacgo CRM creates a contact, reuses or creates the account, and can open a new deal, moving the lead's tasks along with it." },
  { q: "Can I see my pipeline visually?", a: "Yes. Every module has a board view. Drag a card to change its stage or status, and each deal column totals its value." },
  { q: "How do I keep track of follow-ups?", a: "Create tasks with due dates and priorities, link them to any record, and tick them off from Home. Due and overdue tasks also appear in the notification bell." },
  { q: "Can I find records quickly?", a: "Use the search box at the top of the app (Ctrl K) to search every module at once, or filter, sort and search within any list." },
  { q: "Does Impacgo CRM work on mobile?", a: "Yes. The CRM adapts to phones and tablets, with a slide-out menu and touch-friendly controls." },
  {
    q: "Is there a demo I can try?",
    a: (
      <>
        Yes. Open the <Link href="/crm" className="font-semibold text-[#2d4fe0] hover:underline">live demo</Link> to explore with sample data, or{" "}
        <Link href="/signup" className="font-semibold text-[#2d4fe0] hover:underline">create an account</Link> to start with your own records.
      </>
    ),
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" tone="tint" inner="grid gap-12 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHead center={false} eyebrow="FAQ" title={["Questions,", { text: "answered", className: accent }]} sub="Everything you need to know about getting started with Impacgo CRM." />
        <div data-reveal style={d(220)} className="relative mt-10 h-[300px] overflow-hidden rounded-[28px] bg-[linear-gradient(150deg,#ffe7d1,#f3eeff)]">
          <span aria-hidden className="absolute bottom-[-35%] left-[-10%] size-[320px] rounded-full bg-[radial-gradient(circle,#ffd2b3,transparent_68%)]" />
          <Image src={withBasePath("/images/people/support.webp")} alt="A friendly Impacgo team member pointing to the live demo" width={465} height={1000} sizes="160px" className="site-person absolute bottom-0 left-[6%] h-[96%] w-auto" />
          <div className="site-float absolute top-[18%] right-[5%] w-[min(220px,56%)] rounded-2xl rounded-bl-md bg-white p-4 shadow-[0_20px_40px_-22px_rgb(20_22_28/45%)]">
            <p className="text-[15px] leading-snug font-semibold text-[#14161c]">Still curious?</p>
            <p className="pt-1 text-[13px] leading-snug text-[#5c6170]">Click around the live demo. It&apos;s full of sample data.</p>
            <Link href="/crm" className={`${button.link} mt-3 text-[14px] whitespace-nowrap`}>
              Try the live demo <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
      <div className="divide-y divide-[#ebe5dc] border-y border-[#ebe5dc]">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} data-reveal style={d(i * 60)}>
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
                    <Icon name="plus" size={16} strokeWidth={2.2} />
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
