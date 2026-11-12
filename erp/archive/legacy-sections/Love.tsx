import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight } from "@/components/site/icons";
import { Words } from "@/components/site/Media";
import { MiniBoard } from "@/components/site/Sections";
import { accent, container, d, type } from "@/components/site/Section";
import { withBasePath } from "@/lib/base-path";

/* "Here's why your team will love Impacgo": pastel story cards, each pairing one benefit with a UI collage and a real person. */

function Heart() {
  return (
    <span aria-hidden className="site-heart relative mx-[0.02em] inline-block h-[0.78em] w-[0.86em] translate-y-[0.06em] align-baseline">
      <svg viewBox="0 0 32 29" className="absolute inset-0 size-full overflow-visible">
        <defs>
          <linearGradient id="love-heart" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff7a59" />
            <stop offset="0.55" stopColor="#e5512f" />
            <stop offset="1" stopColor="#c43a7a" />
          </linearGradient>
        </defs>
        <path d="M16 28.2S1.6 19.7 1.6 9.6A7.6 7.6 0 0 1 16 5.9a7.6 7.6 0 0 1 14.4 3.7c0 10.1-14.4 18.6-14.4 18.6z" fill="url(#love-heart)" />
        <path d="M7.4 7.6a4.4 4.4 0 0 1 4.6-1.4" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function Card({ tone, title, text, link, href, children, className = "", delay = 0, wide = false }: { tone: string; title: string; text: string; link: string; href: string; children: ReactNode; className?: string; delay?: number; wide?: boolean }) {
  return (
    <article data-reveal style={d(delay)} className={`relative flex flex-col overflow-hidden rounded-[32px] ${wide ? "lg:col-span-2 lg:flex-row" : ""} ${tone} ${className}`}>
      <div className={`relative z-10 max-w-[520px] px-7 pt-9 sm:px-10 sm:pt-11 ${wide ? "lg:w-[44%] lg:shrink-0 lg:self-center lg:py-16 lg:pl-14" : ""}`}>
        <h3 className="text-balance text-[26px] leading-[1.15] font-semibold tracking-[-0.025em] text-[#14161c] sm:text-[32px]">{title}</h3>
        <p className={`${type.body} pt-3 text-[#464b57]`}>{text}</p>
        <Link href={href} className="group mt-6 inline-flex items-center gap-2.5 text-[16px] font-semibold text-[#14161c]">
          <span className="site-sweep">{link}</span>
          <span className="grid size-7 place-items-center rounded-full bg-[#14161c] text-white transition-transform group-hover:translate-x-1">
            <ArrowRight width={15} height={15} />
          </span>
        </Link>
      </div>
      <div className={`relative mt-8 flex-1 ${wide ? "lg:mt-0" : ""}`}>{children}</div>
    </article>
  );
}

/* A real person cut out from their background, rising from the bottom edge of the card. */
function Person({ src, alt, width, height, className }: { src: string; alt: string; width: number; height: number; className: string }) {
  return <Image src={withBasePath(src)} alt={alt} width={width} height={height} sizes="(max-width: 1024px) 60vw, 380px" className={`site-person pointer-events-none absolute bottom-0 h-auto select-none ${className}`} />;
}

function Float({ children, className, delay = 0 }: { children: ReactNode; className: string; delay?: number }) {
  return (
    <div className={`absolute z-10 ${className}`}>
      <div className="site-float rounded-2xl border border-[#ebe5dc] bg-white shadow-[0_24px_50px_-24px_rgb(20_22_28/40%)]" style={{ animationDelay: `${delay}s` } as CSSProperties}>
        {children}
      </div>
    </div>
  );
}

export function Love() {
  return (
    <section id="features" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className={container}>
        <div className="text-center">
          <h2 data-reveal="words" className={type.h2}>
            <Words parts={["Here's why your team will"]} />
          </h2>
          <p data-reveal style={d(250)} className="pt-1 text-[64px] leading-[1.05] font-semibold tracking-[-0.045em] text-[#14161c] sm:text-[104px] lg:text-[128px]">
            L<Heart />
            <span className="sr-only">o</span>ve <span className={accent}>Impacgo</span>
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:mt-20 lg:grid-cols-2">
          {/* 1. Customer 360: woman with laptop beside her contact card */}
          <Card
            wide
            className="lg:min-h-[540px]"
            tone="bg-[linear-gradient(120deg,#ffe7d1,#fff3e6_55%,#ffeedf)]"
            title="All your customer information in one place"
            text="Stop digging through spreadsheets. Every person, company, deal and follow-up sits on one record, so you always know the whole story before you call."
            link="See contacts"
            href="/crm/contacts"
          >
            <div className="relative h-[420px] lg:h-full">
              <span aria-hidden className="absolute right-[6%] bottom-0 size-[380px] rounded-full bg-[radial-gradient(circle,#ffd2b3,transparent_68%)]" />
              <Person src="/images/people/woman-laptop.webp" alt="A smiling sales professional holding a laptop" width={342} height={1000} className="right-[8%] w-[140px] sm:w-[155px] lg:right-[7%] lg:w-[158px]" />
              <Float className="top-[38%] left-[4%] w-[205px] sm:top-[10%] sm:left-[10%] sm:w-[270px] lg:top-[14%] lg:left-[2%]" delay={0}>
                <div className="flex items-center gap-3 border-b border-[#f0ebe3] p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#c8452a] text-[14px] font-bold text-white">MP</span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-semibold text-[#14161c]">Maya Patel</span>
                    <span className="block truncate text-[12px] text-[#5c6170]">Head of Operations · Northwind</span>
                  </span>
                </div>
                <div className="flex flex-col gap-2 p-4 text-[13px] text-[#464b57]">
                  <span>maya@northwind.example</span>
                  <span className="flex items-center justify-between">
                    +1 212 555 0134
                    <span className="rounded-full bg-[#ecfdf3] px-2.5 py-0.5 text-[12px] font-semibold text-[#15803d]">Call</span>
                  </span>
                  <span className="w-fit rounded-full bg-[#fff1ec] px-2.5 py-0.5 text-[12px] font-semibold text-[#c8452a]">Key account</span>
                </div>
              </Float>
              <Float className="bottom-[8%] left-[14%] w-[300px] max-sm:hidden lg:bottom-[10%] lg:left-[24%]" delay={1.2}>
                <div className="p-4">
                  <p className="text-[13px] font-semibold text-[#14161c]">Deals</p>
                  {[
                    ["Northwind POS rollout", "$48,000", "Proposal", "#6f86f6"],
                    ["Northwind loyalty app", "$21,000", "Qualification", "#4f6cf2"],
                  ].map(([n, v, s, c]) => (
                    <div key={n} className="flex items-center justify-between gap-3 border-t border-[#f0ebe3] pt-2.5 mt-2.5 text-[12px]">
                      <span className="truncate font-medium text-[#14161c]">{n}</span>
                      <span className="flex shrink-0 items-center gap-1.5 text-[#5c6170]">
                        <span className="size-1.5 rounded-full" style={{ background: c }} />
                        {s} · {v}
                      </span>
                    </div>
                  ))}
                </div>
              </Float>
            </div>
          </Card>

          {/* 2. Pipeline: the interactive board */}
          <Card tone="bg-[linear-gradient(160deg,#ece8ff,#f5f2ff)]" title="Never lose track of where a deal stands" text="One visual pipeline for every deal. Try it right here: move a deal, close one, and watch the totals follow." link="Open the pipeline" href="/crm/deals?view=board" delay={80}>
            <div className="px-5 pb-6 sm:px-8 sm:pb-8">
              <div className="rounded-2xl bg-white/80 p-3 shadow-[0_24px_50px_-28px_rgb(20_22_28/35%)] ring-1 ring-white backdrop-blur">
                <MiniBoard />
              </div>
            </div>
          </Card>

          {/* 3. Follow-ups: man checking his phone, reminders popping up */}
          <Card className="min-h-[600px]" tone="bg-[linear-gradient(160deg,#e3edff,#f1f6ff)]" title="Follow-ups that never slip" text="Every call, email and to-do becomes a task with a due date, linked to its deal. The bell tells you what's due before it's late." link="See tasks" href="/crm/tasks" delay={160}>
            <div className="relative h-[380px]">
              <Person src="/images/people/exec-in.webp" alt="A sales lead in a blue suit staying on top of his follow-ups" width={499} height={1000} className="right-[4%] w-[176px] sm:w-[186px]" />
              {[
                { t: "Task due today", s: "Contract review call", c: "#c8452a", bg: "#fff1ec", icon: "!", pos: "top-[4%] left-[6%]" },
                { t: "Deal moved", s: "Northwind POS · Proposal", c: "#2d4fe0", bg: "#eef1ff", icon: "→", pos: "top-[36%] left-[2%]" },
                { t: "New lead", s: "Priya Raman · Orchid Studios", c: "#15803d", bg: "#ecfdf3", icon: "+", pos: "top-[68%] left-[9%]" },
              ].map((n, i) => (
                <Float key={n.t} className={`${n.pos} w-[250px]`} delay={i * 0.8}>
                  <div className="flex items-center gap-3 px-3.5 py-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl text-[15px] font-bold" style={{ background: n.bg, color: n.c }}>
                      {n.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[13px] font-semibold text-[#14161c]">{n.t}</span>
                      <span className="block truncate text-[12px] text-[#5c6170]">{n.s}</span>
                    </span>
                  </div>
                </Float>
              ))}
            </div>
          </Card>

          {/* 4. Conversion flow */}
          <Card className="min-h-[540px]" tone="bg-[linear-gradient(160deg,#f6f0e6,#fbf7f0)]" title="One click turns a lead into a deal" text="When a lead is ready, convert it. Impacgo creates the contact, the account and the deal together, with nothing to retype." link="See lead conversion" href="/crm/leads" delay={80}>
            <div className="flex h-full flex-col items-center justify-center gap-3 px-6 pb-10">
              <span className="site-float rounded-2xl bg-[#14161c] px-5 py-3 text-[15px] font-semibold text-white shadow-[0_20px_40px_-20px_rgb(20_22_28/60%)]">Lead · Kwame Mensah</span>
              <svg width="260" height="70" viewBox="0 0 260 70" aria-hidden className="text-[#c9c1b4]">
                <path d="M130 0v22M130 22L30 66M130 22v44M130 22l100 44" fill="none" stroke="currentColor" strokeWidth="2" className="site-flow" />
              </svg>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  ["Contact", "#fff1ec", "#c8452a"],
                  ["Account", "#eef1ff", "#2d4fe0"],
                  ["Deal · $42,000", "#ecfdf3", "#15803d"],
                ].map(([l, bg, fg], i) => (
                  <span key={l} className="site-float rounded-xl px-4 py-2.5 text-[14px] font-semibold shadow-[0_12px_28px_-18px_rgb(20_22_28/40%)] ring-1 ring-white" style={{ background: bg, color: fg, animationDelay: `${0.4 + i * 0.5}s` }}>
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* 5. Search: man smiling beside the search bar */}
          <Card className="min-h-[540px]" tone="bg-[linear-gradient(160deg,#ffe6ec,#fff3f6)]" title="Find anything in seconds" text="Type a name, company or email and jump straight to it. One search box covers every lead, contact, account, deal and task." link="Try search" href="/crm/search" delay={160}>
            <div className="relative h-[330px]">
              <Person src="/images/people/man-smile.webp" alt="A smiling team member" width={490} height={1000} className="right-[4%] w-[150px] sm:w-[160px]" />
              <Float className="top-[6%] left-[5%] w-[min(300px,62%)]">
                <div className="p-3">
                  <div className="flex items-center gap-2 rounded-xl border border-[#c9d3ff] px-3 py-2 shadow-[0_0_0_4px_rgb(45_79_224/8%)]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2d4fe0" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
                      <circle cx="11" cy="11" r="7" />
                      <path d="M20 20l-3.5-3.5" />
                    </svg>
                    <span className="flex-1 text-[13px] text-[#14161c]">
                      harbor<span className="ml-px inline-block h-4 w-px translate-y-0.5 animate-pulse bg-[#2d4fe0]" />
                    </span>
                  </div>
                  {["Harborline Logistics", "Harborline fleet tracking", "Sofia Lindqvist · Harborline"].map((r, i) => (
                    <p key={r} className={`mt-1 truncate rounded-lg px-2.5 py-2 text-[13px] ${i === 0 ? "bg-[#eef1ff] font-semibold text-[#2d4fe0]" : "text-[#383d48]"}`}>
                      {r}
                    </p>
                  ))}
                </div>
              </Float>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
