import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import "../site.css";
import { CtaBand, Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ArrowRight, Check, ExternalArrow } from "@/components/site/icons";
import { TiltFrame, Words } from "@/components/site/Media";
import { ModuleFlows, ModuleToasts } from "@/components/site/ModuleExtras";
import { MagneticFx, RevealObserver, ScrollFx } from "@/components/site/motion";
import { button, container, d, type } from "@/components/site/Section";
import { ErpIcon, ModuleScreen } from "@/components/site/suite";
import { MAIN_SITE, withBasePath } from "@/lib/base-path";
import { CONTACT_HREF } from "@/lib/contact";
import { ERP_MODULES, FLOWS, MODULE, appHost, type ModuleKey } from "@/lib/erp-modules";
import { MODULE_PAGES, PAGE_BY_SLUG, modulePath } from "@/lib/module-pages";
import { OG_DEFAULTS } from "@/lib/seo";
import { moduleJsonLd, toJsonLd } from "@/lib/structured-data";

/*
 * One page per ERP module: /erp-suite/hrms, /erp-suite/finance-accounting,
 * /erp-suite/supply-chain, /erp-suite/manufacturing, /erp-suite/mrp-planning,
 * /erp-suite/retail-pos, /erp-suite/project-management.
 * They exist so searches like "HRMS software" or "MRP software" can land on
 * a page about exactly that. Not in the top navigation on purpose: they are
 * linked from the footer, from each module tab on the ERP home page and
 * from each other. Content lives in lib/module-pages.ts.
 *
 * Motion reuses the ERP home page's system (site.css + motion.tsx): the hero
 * animates in with pure CSS ([data-hero-now], no wait for JavaScript), the rest
 * reveals on scroll ([data-reveal]), steps light up as you scroll ([data-step]).
 * All text is server-rendered, so search engines read every word.
 */

const ERP_URL = "https://www.impacgo.com/erp-suite";
const h2 = "text-balance text-[32px] leading-[1.12] font-semibold tracking-[-0.025em] text-[#14161c] sm:text-[42px]";

/*
 * A photo of the module's world for its "Why" section (public/images/modules/<key>.webp,
 * from Unsplash: free for commercial use under the Unsplash License, no credit required),
 * with a floating "done" card and a small progress card. Card figures are sample data,
 * like the module screens.
 */
const PHOTOS: Record<ModuleKey, { alt: string; h: number; done: [string, string]; meter: [string, string, number] }> = {
  hrms: { alt: "Two colleagues celebrating with a high-five at their desk", h: 800, done: ["Payslips ready", "248 employees · paid on time"], meter: ["Present today", "231 of 248", 93] },
  finance: { alt: "A laptop showing financial charts and reports", h: 800, done: ["Month-end closed", "Every module posted to Finance"], meter: ["Bank reconciliation", "Current account · matched", 100] },
  chain: { alt: "A busy warehouse with stocked racks and packed boxes", h: 800, done: ["Goods received", "1,200 kg steel · bin A-03"], meter: ["Picking list", "18 of 24 lines picked", 75] },
  make: { alt: "An engineer working at a machine on the factory floor", h: 801, done: ["Work order complete", "WO-2291 · costed and posted"], meter: ["Capacity used", "CNC line · this week", 82] },
  plan: { alt: "A planning dashboard with demand and supply charts", h: 800, done: ["Shortage caught early", "Bearings · week 16"], meter: ["Capacity used", "All work centres", 82] },
  retail: { alt: "A customer paying by card at a shop counter", h: 800, done: ["Shift closed", "Counter 2 · no variance"], meter: ["Stores in sync", "Stock and sales · live", 100] },
  project: { alt: "A team planning a project on a sticky-note board", h: 800, done: ["Milestone reached", "Installation · on budget"], meter: ["Milestones done", "7 of 10", 70] },
};

// Only the seven module slugs exist; anything else is a 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return MODULE_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const page = PAGE_BY_SLUG[(await params).slug];
  if (!page) return {};
  const url = `${ERP_URL}/${page.slug}`;
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: { ...OG_DEFAULTS, url, title: page.title, description: page.description },
    twitter: { card: "summary", title: page.title, description: page.description },
  };
}

export default async function ModulePage({ params }: PageProps<"/[slug]">) {
  const page = PAGE_BY_SLUG[(await params).slug];
  if (!page) notFound();
  const m = MODULE[page.key];
  const photo = PHOTOS[m.key];
  const hasFlows = FLOWS.some((f) => f.path.includes(m.key));
  const others = ERP_MODULES.filter((x) => x.key !== m.key);
  const singleLane = page.workflow.lanes.length === 1;
  const vars = (o: Record<string, string | number>) => o as CSSProperties;

  return (
    <div className="site-grain overflow-x-clip">
      {/* Structured data for search engines and AI search (not visible). */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(moduleJsonLd(page, m)) }} />
      <Header />
      <main>
        {/* Hero: drifting colour blobs in the module's colours, words rise in, the screen zooms in, live toasts. */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <span data-scroll="drift" style={vars({ "--k": "-120px", background: m.tint })} className="site-blob-a absolute -top-40 -left-32 size-[560px] rounded-full opacity-90 blur-[100px]" />
            <span data-scroll="drift" style={vars({ "--k": "-60px", background: `color-mix(in srgb, ${m.color} 22%, transparent)` })} className="site-blob-b absolute -top-24 right-[-12%] size-[520px] rounded-full blur-[110px]" />
            <span className="site-grid-light absolute inset-0 [mask-image:linear-gradient(180deg,#000,transparent_85%)]" />
          </div>
          <div data-hero-now className={`${container} relative grid grid-cols-1 items-center gap-12 pt-28 pb-20 sm:pt-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:pb-24`}>
            <div>
              <nav data-reveal aria-label="Breadcrumb" className="text-[14px] text-[#5c6170]">
                <ol className="flex flex-wrap items-center gap-1.5">
                  <li>
                    <a href={MAIN_SITE.home} className="hover:text-[#2d4fe0]">Home</a>
                  </li>
                  <li aria-hidden>/</li>
                  <li>
                    <Link href="/" className="hover:text-[#2d4fe0]">Impacgo ERP</Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li aria-current="page" className="font-semibold text-[#14161c]">Impacgo {m.name}</li>
                </ol>
              </nav>
              <p data-reveal style={d(60)} className="flex items-center gap-2.5 pt-8 text-[15px] font-semibold">
                <span className="relative grid size-8 place-items-center rounded-lg bg-white shadow-[0_2px_8px_rgb(20_22_28/8%)]" style={{ color: m.color }}>
                  <span aria-hidden className="site-pulse absolute inset-0 rounded-lg" style={{ boxShadow: `0 0 0 2px ${m.color}` }} />
                  <ErpIcon name={m.key} size={17} />
                </span>
                <span style={{ color: m.color }}>Impacgo {m.name} · {m.area}</span>
              </p>
              <h1 data-reveal="words" style={d(100)} className="pt-5 text-[36px] leading-[1.08] font-semibold tracking-[-0.03em] text-[#14161c] sm:text-[50px]">
                <Words parts={[page.h1]} />
              </h1>
              <p data-reveal style={d(200)} className={`${type.lead} pt-6`}>{page.intro}</p>
              <div data-reveal style={d(280)} className="flex flex-wrap gap-3 pt-9">
                <a href={CONTACT_HREF} className={button.primary}>
                  Book a free demo <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
                {m.appUrl ? (
                  <a href={m.appUrl} className={`${button.secondary} gap-2`} aria-label={`Open Impacgo ${m.name} (${appHost(m.appUrl)})`}>
                    Open Impacgo {m.name} <ExternalArrow />
                  </a>
                ) : null}
              </div>
            </div>
            <div data-reveal="zoom" style={d(200)} className="relative">
              <TiltFrame max={4} url={m.appUrl ? appHost(m.appUrl) : "impacgo.com/erp-suite"}>
                <ModuleScreen k={m.key} className="min-h-[400px]" />
              </TiltFrame>
              <ModuleToasts k={m.key} className="absolute -bottom-8 -left-8 z-20 hidden xl:block" />
            </div>
          </div>
        </section>

        {/* Features: cards rise in one after another and lift on hover. */}
        <section className="py-20 sm:py-24">
          <div className={container}>
            <p data-reveal className={type.eyebrow} style={{ color: m.color }}>Features</p>
            <h2 data-reveal="words" className={`${h2} pt-3`}>
              <Words parts={["Everything in", { text: `Impacgo ${m.name}`, className: "site-gradient-text" }]} />
            </h2>
            <p data-reveal style={d(120)} className={`${type.body} max-w-[680px] pt-4`}>{m.what}</p>
            <div className="grid grid-cols-1 gap-4 pt-12 sm:grid-cols-2 lg:grid-cols-3">
              {page.groups.map((g, i) => (
                <div
                  key={g.category}
                  data-reveal
                  style={d((i % 3) * 80 + Math.floor(i / 3) * 60)}
                  className="group rounded-2xl border border-[#ebe5dc] bg-white p-6 transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_40px_-28px_rgb(20_22_28/35%)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-xl text-[13px] font-bold transition-transform duration-300 group-hover:scale-110" style={{ background: m.tint, color: m.color }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[17px] font-semibold text-[#14161c]">{g.category}</h3>
                  </div>
                  <ul className="flex flex-col gap-2.5 pt-4">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-[15px] leading-snug text-[#5c6170]">
                        <Check className="mt-0.5 size-4 shrink-0" style={{ color: m.color }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works: the connector line draws and each step lights up as you scroll. */}
        <section className="bg-[#faf7f2] py-20 sm:py-24">
          <div className={container}>
            <p data-reveal className={type.eyebrow} style={{ color: m.color }}>How it works</p>
            <h2 data-reveal="words" className={`${h2} pt-3`}>
              <Words parts={[page.workflow.title]} />
            </h2>
            <p data-reveal style={d(120)} className={`${type.body} max-w-[680px] pt-4`}>{page.workflow.text}</p>
            {singleLane ? (
              <div data-scroll="draw" data-scroll-end="0.55" className="relative pt-14">
                <div aria-hidden className="absolute top-[84px] right-[12.5%] left-[12.5%] hidden h-0.5 rounded-full bg-[#ebe5dc] lg:block">
                  <span className="site-draw-line block h-full rounded-full" style={{ background: `linear-gradient(90deg, ${m.color}, color-mix(in srgb, ${m.color} 55%, #6d4ef0))` }} />
                </div>
                <ol className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                  {page.workflow.lanes[0].steps.map((step, i, all) => (
                    <li key={step} data-step style={vars({ "--i": i, "--n": all.length })} className="flex flex-col items-center text-center">
                      <span className="site-step-icon grid size-14 place-items-center rounded-2xl text-[18px] font-bold text-white" style={{ background: `linear-gradient(140deg, ${m.color}, color-mix(in srgb, ${m.color} 70%, #14161c))`, boxShadow: `0 12px 30px -12px ${m.color}` }}>
                        {i + 1}
                      </span>
                      <p className="site-step-text max-w-[240px] pt-5 text-[17px] leading-snug font-semibold text-[#14161c]">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              page.workflow.lanes.map((lane, li) => (
                <div key={lane.name ?? li} data-reveal style={d(li * 100)} className="pt-10">
                  {lane.name ? <h3 className="pb-4 text-[17px] font-semibold text-[#14161c]">{lane.name}</h3> : null}
                  <ol className="flex flex-wrap items-center gap-2">
                    {lane.steps.map((step, i) => (
                      <li key={step} className="site-pop-in flex items-center gap-2" style={d(li * 100 + i * 70)}>
                        <span className="rounded-full bg-white px-4 py-2 text-[15px] font-medium text-[#14161c] ring-1 ring-[#ebe5dc] transition-colors hover:ring-[color:var(--c)]" style={vars({ "--c": m.color })}>{step}</span>
                        {i < lane.steps.length - 1 ? <ArrowRight className="text-[#9a9ea8]" /> : null}
                      </li>
                    ))}
                  </ol>
                </div>
              ))
            )}
            <p data-reveal className="mt-14 max-w-[760px] border-l-2 pl-5 text-[17px] leading-[1.65] text-[#464b57]" style={{ borderColor: m.color }}>
              <span className="font-semibold text-[#14161c]">For example: </span>
              {m.example}
            </p>
          </div>
        </section>

        {/* Benefits: a photo of the module's world (drifts gently on scroll) with floating cards, benefit cards alongside. */}
        <section className="py-20 sm:py-24">
          <div className={`${container} grid grid-cols-1 items-center gap-12 lg:grid-cols-[440px_minmax(0,1fr)] lg:gap-16`}>
            <div data-reveal="zoom" className="relative order-2 lg:order-1">
              <div className="relative h-[360px] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-40px_rgb(20_22_28/50%)] sm:h-[440px] lg:h-[500px]">
                <div data-scroll="photo">
                  <Image src={withBasePath(`/images/modules/${m.key}.webp`)} alt={photo.alt} fill sizes="(max-width: 1024px) 100vw, 440px" className="object-cover" />
                </div>
                <span aria-hidden className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgb(20 22 28 / 0%) 45%, rgb(20 22 28 / 62%)), linear-gradient(160deg, color-mix(in srgb, ${m.color} 18%, transparent), transparent 55%)` }} />
                <p className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
                  <span className="grid size-10 place-items-center rounded-xl bg-white" style={{ color: m.color }}>
                    <ErpIcon name={m.key} size={20} />
                  </span>
                  <span className="text-[16px] font-semibold">Impacgo {m.name}</span>
                </p>
              </div>
              {/* Floating "done" card */}
              <div className="site-float absolute top-6 -right-3 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_18px_40px_-18px_rgb(20_22_28/50%)] backdrop-blur sm:-right-6">
                <span className="relative grid size-9 place-items-center rounded-full" style={{ background: m.tint, color: m.color }}>
                  <span aria-hidden className="site-pulse absolute inset-0 rounded-full" style={{ boxShadow: `0 0 0 2px ${m.color}` }} />
                  <Check className="size-4" />
                </span>
                <span>
                  <span className="block text-[14px] font-semibold text-[#14161c]">{photo.done[0]}</span>
                  <span className="block text-[12px] text-[#5c6170]">{photo.done[1]}</span>
                </span>
              </div>
              {/* Progress card: the bar fills when the photo is revealed */}
              <div className="absolute -bottom-7 -right-3 w-[210px] sm:-right-6 rounded-2xl bg-white p-4 shadow-[0_18px_40px_-18px_rgb(20_22_28/50%)] max-sm:hidden" style={{ animation: "site-float 6s ease-in-out 1.2s infinite" }}>
                <span className="flex items-baseline justify-between gap-2">
                  <span className="text-[13px] font-semibold text-[#14161c]">{photo.meter[0]}</span>
                  <span className="text-[13px] font-bold tabular-nums" style={{ color: m.color }}>{photo.meter[2]}%</span>
                </span>
                <span className="block pt-0.5 text-[12px] text-[#5c6170]">{photo.meter[1]}</span>
                <span className="mt-3 block h-1.5 overflow-hidden rounded-full bg-[#f0ebe3]">
                  <span className="site-line block h-full rounded-full" style={{ width: `${photo.meter[2]}%`, background: `linear-gradient(90deg, ${m.color}, color-mix(in srgb, ${m.color} 60%, #6d4ef0))` }} />
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p data-reveal className={type.eyebrow} style={{ color: m.color }}>Why Impacgo {m.name}</p>
              <h2 data-reveal="words" className={`${h2} pt-3`}>
                <Words parts={[m.pitch]} />
              </h2>
              <div className="grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2">
                {page.benefits.map((b, i) => (
                  <div key={b.title} data-reveal className="rounded-2xl p-6 transition-[translate] duration-300 hover:-translate-y-1" style={{ ...d(i * 80), background: m.tint }}>
                    <h3 className="text-[17px] font-semibold text-[#14161c]">{b.title}</h3>
                    <p className="pt-2 text-[15px] leading-[1.6] text-[#464b57]">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Connected modules: the home page's animated flow map, showing this module's flows. */}
        {hasFlows ? (
          <section className="bg-[#faf7f2] py-20 sm:py-24">
            <div className={container}>
              <p data-reveal className={type.eyebrow} style={{ color: m.color }}>One connected ERP</p>
              <h2 data-reveal="words" className={`${h2} pt-3`}>
                <Words parts={[`How Impacgo ${m.name} works with`, { text: "the other modules", className: "site-gradient-text" }]} />
              </h2>
              <ModuleFlows k={m.key} />
            </div>
          </section>
        ) : null}

        {/* FAQs: plain <details>, so every answer is in the page HTML. */}
        <section className="py-20 sm:py-24">
          <div className={`${container} grid grid-cols-1 gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-16`}>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p data-reveal className={type.eyebrow} style={{ color: m.color }}>FAQ</p>
              <h2 data-reveal="words" className={`${h2} pt-3`}>
                <Words parts={["Questions about", { text: `Impacgo ${m.name}`, className: "site-gradient-text" }]} />
              </h2>
              <a data-reveal href={CONTACT_HREF} className={`${button.link} pt-6 text-[16px]`}>
                Ask us anything in a free demo <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="divide-y divide-[#ebe5dc] border-y border-[#ebe5dc]">
              {page.faqs.map((f, i) => (
                <details key={f.q} data-reveal style={d(i * 50)} open={i === 0} className="group/faq">
                  <summary className="flex cursor-pointer list-none items-center gap-6 py-6 text-[19px] leading-[1.4] font-semibold text-[#14161c] transition-colors hover:text-[#2d4fe0] [&::-webkit-details-marker]:hidden">
                    <h3 className="flex-1">{f.q}</h3>
                    <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full border border-[#ebe5dc] text-[#464b57] transition-[rotate,background-color,border-color,color] duration-300 group-open/faq:rotate-45 group-open/faq:border-[#2d4fe0] group-open/faq:bg-[#2d4fe0] group-open/faq:text-white">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className={`${type.body} max-w-[680px] animate-[site-rise_.4s_cubic-bezier(.22,1,.36,1)] pr-14 pb-6`}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Other modules */}
        <section className="bg-[#faf7f2] py-20 sm:py-24">
          <div className={container}>
            <h2 data-reveal="words" className={h2}>
              <Words parts={["Explore the other", { text: "Impacgo ERP modules", className: "site-gradient-text" }]} />
            </h2>
            <ul className="grid grid-cols-1 gap-3 pt-10 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o, i) => (
                <li key={o.key} data-reveal style={d(i * 60)}>
                  <Link href={modulePath(o.key)} className="group flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-[#ebe5dc] transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_-26px_rgb(20_22_28/40%)] hover:ring-[#c9c1b4]">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" style={{ background: o.tint, color: o.color }}>
                      <ErpIcon name={o.key} size={20} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-[16px] font-semibold text-[#14161c]">Impacgo {o.name}</span>
                      <span className="block text-[14px] text-[#5c6170]">{o.area}</span>
                    </span>
                    <ArrowRight className="text-[#9a9ea8] transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link data-reveal href="/" className={`${button.link} pt-8`}>
              See the whole Impacgo ERP suite <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer onHome={false} />
      <RevealObserver />
      <ScrollFx />
      <MagneticFx />
    </div>
  );
}
