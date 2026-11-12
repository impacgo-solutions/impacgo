import type { Metadata } from "next";
import "./site.css";
import { OG_DEFAULTS } from "@/lib/seo";
import { CtaBand, Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { MagneticFx, RevealObserver, ScrollFx } from "@/components/site/motion";
import { BeforeAfter, Problem, StoryNav } from "@/components/site/Story";
import { Ecosystem, Family, Faq, Flows, Industries, Journey, ModuleExplorer, Pillars, Platform, Stats } from "@/components/site/erp";

/*
 * Impacgo ERP marketing page. The earlier CRM-only sections (Love, Showcase,
 * Teams, InAction in Sections.tsx / Love.tsx) are no longer rendered here.
 */
const ERP_URL = "https://www.impacgo.com/erp-suite";

export const metadata: Metadata = {
  alternates: { canonical: ERP_URL },
  openGraph: {
    ...OG_DEFAULTS,
    url: ERP_URL,
    title: "Impacgo ERP: one platform to run your entire business",
    description: "HRMS, Finance, Chain, Make, Plan, Retail and Project in one integrated platform, built by Impacgo Solutions.",
  },
};

export default function Home() {
  return (
    <div className="site-grain overflow-x-clip">
      <Intro />
      <Header />
      <main>
        <Hero />
        <Industries />
        <Problem />
        <BeforeAfter />
        <Pillars />
        <ModuleExplorer />
        <Journey />
        <Flows />
        <Ecosystem />
        <Platform />
        <Stats />
        <Family />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
      <RevealObserver />
      <ScrollFx />
      <MagneticFx />
      <StoryNav />
    </div>
  );
}
