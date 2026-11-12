import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { BrandLockup } from "@/components/site/BrandLockup";
import { ArrowRight, Glyph } from "@/components/site/icons";
import { button, sectionFrame, type } from "@/components/site/Section";
import { isMainSiteHref, MAIN_SITE, withBasePath } from "@/lib/base-path";
import { CONTACT_EMAIL, CONTACT_HREF, CONTACT_PHONE, CONTACT_PHONE_TEL } from "@/lib/contact";


const COLUMNS = [
  {
    title: "Suite",
    links: [
      ["Impacgo HRMS", "#module-hrms"],
      ["Impacgo Finance", "#module-finance"],
      ["Impacgo Chain", "#module-chain"],
      ["Impacgo Make", "#module-make"],
      ["Impacgo Plan", "#module-plan"],
      ["Impacgo Retail", "#module-retail"],
      ["Impacgo Project", "#module-project"],
    ],
  },
  {
    title: "Platform",
    links: [
      ["Why Impacgo ERP", "#features"],
      ["How it works", "#how"],
      ["Connected flows", "#flows"],
      ["Architecture", "#platform"],
      ["FAQs", "#faq"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Impacgo", MAIN_SITE.home],
      ["Book a free demo", CONTACT_HREF],
      ["Demo request page", "/demo"],
      ["Talk to our team", CONTACT_HREF],
      ["Sign in to your app", "/login"],
    ],
  },
] as const;

const SERVICES = [
  { icon: "services", name: "Dynamics 365", desc: "Finance & Operations", href: MAIN_SITE.d365 },
  { icon: "power", name: "Power Platform", desc: "Apps & automation", href: MAIN_SITE.powerPlatform },
  { icon: "bi", name: "Power BI", desc: "Analytics & reporting", href: MAIN_SITE.powerBi },
] as const;

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const cls = "site-sweep pb-0.5 text-[15px] text-[#5c6170] hover:text-[#2d4fe0]";
  if (href.startsWith("#") || isMainSiteHref(href))
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  return href.startsWith("http") ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className={`${sectionFrame} bg-white`}>
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div data-reveal className="relative grid overflow-hidden rounded-[32px] border border-[#dfe5ff] bg-[linear-gradient(120deg,#eef1ff,#f3f0ff)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="relative flex flex-col justify-center px-7 py-14 sm:px-14 sm:py-24">
            <h2 className={`${type.h2} max-w-[540px]`}>Ready to run your whole business on <span className="site-gradient-text">one platform?</span></h2>
            <p className={`${type.lead} max-w-[440px] pt-5`}>Book a free, personalised demo and we&apos;ll map the suite to the way your business already works.</p>
            <div className="flex flex-wrap gap-3 pt-10">
              <a href={CONTACT_HREF} className={button.primary}>
                Book a free demo <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href={CONTACT_PHONE_TEL} className={button.secondary}>
                Call {CONTACT_PHONE}
              </a>
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden">
            <span aria-hidden className="absolute bottom-[-30%] left-1/2 size-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#ffd2b3,transparent_66%)]" />
            <span aria-hidden className="absolute top-[10%] right-[8%] size-[220px] rounded-full bg-[radial-gradient(circle,#d9d0ff,transparent_68%)]" />
            <Image src={withBasePath("/images/people/celebrate-in.webp")} alt="A business owner celebrating a smooth month-end close" width={579} height={1000} sizes="(max-width: 1024px) 60vw, 300px" className="site-person absolute bottom-0 left-1/2 h-[92%] w-auto -translate-x-[40%]" />
            <div className="site-float absolute bottom-6 left-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_14px_34px_-16px_rgb(20_22_28/40%)] backdrop-blur sm:left-8">
              <span className="grid size-9 place-items-center rounded-full bg-[#dcfce7] text-[#16a34a]">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
              </span>
              <span>
                <span className="block text-[14px] font-semibold text-[#14161c]">Month-end closed</span>
                <span className="block text-[12px] text-[#5c6170]">All seven modules posted to Finance</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#ebe5dc] bg-[#faf7f2] text-[#14161c]">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 pt-20 pb-14 sm:px-8 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <BrandLockup logoClass="h-9 sm:h-10" />
          <p className="max-w-[340px] pt-5 text-[15px] leading-relaxed text-[#5c6170]">
            HRMS, Finance, Chain, Make, Plan, Retail and Project in one integrated platform, built by Impacgo Solutions.
          </p>
          <div className="flex flex-col gap-3 pt-8">
            <p className="text-[12px] font-bold tracking-[0.1em] text-[#686c79] uppercase">More from Impacgo</p>
            {SERVICES.map((s) => (
              <a key={s.name} href={s.href} className="group flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl border border-[#ebe5dc] bg-white text-[#2d4fe0] transition-colors group-hover:border-[#c9d3ff]">
                  <Glyph name={s.icon} width={19} height={19} />
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-[#14161c]">{s.name}</span>
                  <span className="block text-[13px] text-[#5c6170]">{s.desc}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[13px] font-bold tracking-[0.1em] text-[#686c79] uppercase">{col.title}</h3>
              <ul className="flex flex-col gap-3 pt-5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <FooterLink href={href}>{label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-[#ebe5dc]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-5 py-6 sm:px-8 text-[13px] text-[#5c6170]">
          <div className="flex flex-col gap-1.5">
            <p>© {new Date().getFullYear()} Impacgo. All rights reserved.</p>
            <p className="flex flex-wrap gap-x-4 gap-y-1">
              <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-[#2d4fe0]">{CONTACT_EMAIL}</a>
              <a href={CONTACT_PHONE_TEL} className="transition-colors hover:text-[#2d4fe0]">{CONTACT_PHONE}</a>
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {([["Terms of Service", MAIN_SITE.terms], ["Privacy Policy", MAIN_SITE.privacy], ["Security", MAIN_SITE.privacy], ["Cookie Policy", MAIN_SITE.privacy]] as const).map(([l, href]) => (
              <li key={l}>
                <a href={href} className="transition-colors hover:text-[#2d4fe0]">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div aria-hidden className="overflow-hidden">
        <p data-scroll="drift" style={{ "--k": "-50px" } as CSSProperties} className="site-wordmark -mb-[0.2em] pt-4 text-center text-[min(22vw,320px)] leading-[1.15] font-semibold tracking-[-0.06em] select-none">
          Impacgo
        </p>
      </div>
    </footer>
  );
}
