"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { Section, SectionHead, accent, container, type } from "@/components/site/Section";

/* ---------- "Sound familiar?": a pinned statement whose words light up as you scroll ---------- */
const STATEMENT: [string, "pain" | "gain" | null][] = [
  ["Payroll in one tool. Invoices in another. Stock counts in a spreadsheet nobody trusts.", "pain"],
  ["Growing businesses rarely slow down because people work badly. They slow down because their systems don't talk.", null],
  ["Impacgo ERP connects your people, money, materials and customers in one platform,", "gain"],
  ["so every team works from the same truth.", null],
];

const TONE = { pain: "text-[#c8452a]", gain: "text-[#2d4fe0]" };

export function Problem() {
  let n = 0;
  const words = STATEMENT.flatMap(([text, tone]) => text.split(" ").map((w) => ({ w, tone, i: n++ })));
  return (
    <section id="problem" data-scroll="pin" className="relative h-[220svh] scroll-mt-0 bg-white" style={{ "--n": words.length } as CSSProperties}>
      <div className="sticky top-0 flex h-[100svh] items-center pt-[72px]">
        <div className={container}>
          <p className={type.eyebrow}>Sound familiar?</p>
          <p className="max-w-[1020px] pt-6 text-[28px] leading-[1.25] font-semibold tracking-[-0.03em] text-[#14161c] sm:text-[42px] lg:text-[52px]">
            {words.map(({ w, tone, i }) => (
              <span key={i}>
                <span className={`site-scrub ${tone ? TONE[tone] : ""}`} style={{ "--i": i } as CSSProperties}>
                  {w}
                </span>{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Before / after comparison slider ---------- */
function Before() {
  const rows = [
    ["Steel rod 12mm", "1,240", "980?", "2,310"],
    ["Bearing 6204", "420", "—", "1,100"],
    ["Carton L", "3,600", "??", "#REF!"],
    ["Motor 0.5HP", "80", "in transit?", ""],
    ["Paint (litres)", "", "140", "96"],
    ["Pump body", "32", "", "#REF!"],
  ];
  return (
    <div className="absolute inset-0 bg-[#f4f3ef] p-5 sm:p-8">
      <div className="absolute top-[14%] left-[4%] w-[54%] rotate-[-1.5deg] overflow-hidden rounded-lg border border-[#d9d7d0] bg-white text-[11px] text-[#6b6a66] shadow-sm sm:text-[13px]">
        <div className="flex items-center gap-2 border-b border-[#e4e2dc] bg-[#efeee9] px-3 py-1.5 text-[#8a8983]">
          <span className="truncate font-mono">stock_count_MARCH_final_v4.xlsx</span>
        </div>
        <div className="grid grid-cols-[1.4fr_0.8fr_0.9fr_0.8fr] border-b border-[#e4e2dc] bg-[#f7f6f2] font-semibold">
          {["Item", "Main WH", "Plant 2", "Books"].map((h) => (
            <span key={h} className="truncate border-r border-[#ecebe6] px-2 py-1.5 last:border-0 sm:px-3">
              {h}
            </span>
          ))}
        </div>
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-[1.4fr_0.8fr_0.9fr_0.8fr] border-b border-[#ecebe6] last:border-0">
            {r.map((c, j) => (
              <span key={j} className={`truncate border-r border-[#ecebe6] px-2 py-1.5 last:border-0 sm:px-3 ${c === "#REF!" ? "text-[#c8452a]" : ""}`}>
                {c}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute top-[54%] left-[33%] w-[18%] min-w-[130px] rotate-[4deg] bg-[#fde68a] p-3 text-[12px] leading-snug text-[#6b5a1a] shadow-md sm:p-4 sm:text-[15px]">
        GST return due 20th!!
        <br />
        who has store sales?
      </div>
      <div className="absolute top-[6%] left-[44%] w-[16%] min-w-[120px] rotate-[-6deg] bg-[#fbcfe8] p-3 text-[12px] leading-snug text-[#7a3159] shadow-md sm:p-4 sm:text-[15px]">
        Payroll: still waiting on Plant 2 attendance
      </div>
      <div className="absolute bottom-[7%] left-[5%] w-[44%] rotate-[1deg] rounded-lg border border-[#d9d7d0] bg-white p-3 text-[12px] text-[#6b6a66] shadow-sm sm:p-4 sm:text-[14px]">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[#3d3c39]">Inbox</span>
          <span className="rounded-full bg-[#c8452a] px-2 text-[11px] font-bold text-white">63</span>
        </div>
        <p className="truncate pt-2">Re: Re: PO approval, urgent (3rd reminder)</p>
        <p className="truncate pt-1">Fwd: work order status?? No reply in 4 days</p>
      </div>
      <span className="absolute bottom-[33%] left-[6%] rounded-full bg-[#fee2e2] px-3 py-1 text-[12px] font-semibold text-[#b91c1c] sm:text-[13px]">Stock mismatch: ₹4.2L unexplained</span>
    </div>
  );
}

function After() {
  const tiles = [
    { name: "Finance", status: "Books reconciled", value: "₹42.7L", note: "cash & bank", color: "#15803d", tint: "#ecfdf3" },
    { name: "Chain", status: "3 warehouses in sync", value: "₹1.24Cr", note: "stock value", color: "#2d4fe0", tint: "#eef1ff" },
    { name: "Make", status: "94% on time", value: "23", note: "open work orders", color: "#b26a07", tint: "#fff7e8" },
    { name: "HRMS", status: "Payroll ready", value: "248", note: "payslips", color: "#c8452a", tint: "#fff1ec" },
  ];
  return (
    <div className="absolute inset-0 bg-[radial-gradient(90%_80%_at_100%_0%,#dfe5ff,transparent_60%),linear-gradient(#fcf0df,#fcf0df)] p-5 sm:p-8">
      <div className="flex items-end justify-between gap-4 pt-10 sm:pt-12">
        <div>
          <p className="text-[12px] font-semibold tracking-[0.1em] text-[#686c79] uppercase sm:text-[13px]">Business overview · March</p>
          <p className="text-[24px] font-semibold tracking-[-0.03em] text-[#14161c] sm:text-[34px]">₹84.6L revenue</p>
        </div>
        <span className="rounded-full bg-[#ecfdf3] px-3 py-1 text-[12px] font-semibold text-[#15803d] ring-1 ring-[#bbf7d0] sm:text-[13px]">All modules in sync</span>
      </div>
      <div className="grid grid-cols-2 gap-3 pt-5 sm:grid-cols-4 sm:gap-4">
        {tiles.map((t) => (
          <div key={t.name} className="rounded-2xl bg-white/80 p-3 ring-1 ring-[#ebe5dc] sm:p-4">
            <p className="flex items-center gap-2 text-[12px] font-semibold sm:text-[13px]" style={{ color: t.color }}>
              <span className="size-2 rounded-full" style={{ background: t.color }} />
              {t.name}
            </p>
            <p className="pt-3 text-[22px] leading-none font-semibold tracking-[-0.02em] text-[#14161c] sm:text-[28px]">{t.value}</p>
            <p className="pt-1 text-[11px] text-[#686c79] sm:text-[12px]">{t.note}</p>
            <p className="mt-3 w-fit rounded-full px-2 py-0.5 text-[11px] font-semibold sm:text-[12px]" style={{ background: t.tint, color: t.color }}>
              {t.status}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute right-5 bottom-5 flex items-center gap-3 rounded-2xl border border-[#ebe5dc] bg-white px-4 py-3 shadow-[0_18px_40px_-20px_rgb(20_22_28/40%)] max-sm:hidden sm:right-8 sm:bottom-8">
        <span className="grid size-9 place-items-center rounded-xl bg-[#ecfdf3] text-[15px] font-bold text-[#15803d]">✓</span>
        <span>
          <span className="block text-[14px] font-semibold text-[#14161c]">GSTR-1 ready to file</span>
          <span className="block text-[12px] text-[#5c6170]">Store sales posted from Retail</span>
        </span>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  const [x, setX] = useState(50);
  return (
    <Section id="before-after">
      <SectionHead eyebrow="From chaos to clarity" title={["Same business.", { text: "One source of truth.", className: accent }]} sub="Drag the slider to see what changes when every department works in one connected system." />
      <div data-reveal className="relative mt-14 aspect-[16/9] overflow-hidden rounded-[28px] border border-[#ebe5dc] bg-white shadow-[0_40px_90px_-50px_rgb(20_22_28/45%)] select-none max-md:aspect-[4/5] sm:mt-16">
        <After />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - x}% 0 0)` }}>
          <Before />
        </div>
        <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-[#3d3c39]/85 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur sm:top-5 sm:left-5 sm:text-[13px]">Before</span>
        <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-[#2d4fe0] px-3 py-1 text-[12px] font-semibold text-white sm:top-5 sm:right-5 sm:text-[13px]">With Impacgo ERP</span>
        <div aria-hidden className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgb(20_22_28/10%),0_0_24px_rgb(20_22_28/25%)]" style={{ left: `${x}%` }}>
          <span className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#2d4fe0] shadow-[0_10px_30px_-8px_rgb(20_22_28/45%)] ring-1 ring-[#ebe5dc]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
            </svg>
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={x}
          onChange={(e) => setX(Number(e.target.value))}
          aria-label="Compare working before and after Impacgo ERP"
          className="absolute inset-0 size-full cursor-ew-resize opacity-0"
        />
      </div>
    </Section>
  );
}

/* ---------- Chapter navigator (large screens) ---------- */
const CHAPTERS = [
  { id: "top", label: "Welcome" },
  { id: "problem", label: "The problem" },
  { id: "before-after", label: "Before & after" },
  { id: "features", label: "Why Impacgo ERP" },
  { id: "modules", label: "The seven modules" },
  { id: "how", label: "How it works" },
  { id: "flows", label: "Connected flows" },
  { id: "connected", label: "One ecosystem" },
  { id: "platform", label: "Architecture" },
  { id: "numbers", label: "By the numbers" },
  { id: "family", label: "Impacgo family" },
  { id: "faq", label: "FAQ" },
];

export function StoryNav() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current = 0;
      CHAPTERS.forEach((c, i) => {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top <= line) current = i;
      });
      const footer = document.querySelector("footer")?.getBoundingClientRect().top ?? Infinity;
      setActive(current);
      setVisible(window.scrollY > window.innerHeight * 0.5 && footer > window.innerHeight * 0.6);
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
  }, []);

  return (
    <nav
      aria-label="Page chapters"
      className={`group/nav fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 flex-col items-end gap-1 transition-opacity duration-500 xl:flex ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      {CHAPTERS.map((c, i) => (
        <button
          key={c.id}
          type="button"
          onClick={() => document.getElementById(c.id)?.scrollIntoView({ behavior: "smooth" })}
          aria-label={c.label}
          aria-current={i === active ? "step" : undefined}
          className="group/item flex cursor-pointer items-center gap-3 py-1"
        >
          <span
            className={`rounded-md bg-white/90 px-2 py-0.5 text-[12px] font-medium whitespace-nowrap shadow-sm ring-1 ring-[#ebe5dc] backdrop-blur transition-[opacity,translate] duration-300 ${
              i === active ? "text-[#2d4fe0]" : "text-[#5c6170]"
            } translate-x-2 opacity-0 group-hover/nav:translate-x-0 group-hover/nav:opacity-100`}
          >
            {c.label}
          </span>
          <span className={`block h-0.5 rounded-full transition-[width,background-color] duration-300 ${i === active ? "w-7 bg-[#2d4fe0]" : "w-3.5 bg-[#d6cfc4] group-hover/item:w-5 group-hover/item:bg-[#5c6170]"}`} />
        </button>
      ))}
      <span className="pt-2 pr-0.5 text-[11px] font-semibold text-[#686c79] tabular-nums">
        {String(active + 1).padStart(2, "0")} / {CHAPTERS.length}
      </span>
    </nav>
  );
}
