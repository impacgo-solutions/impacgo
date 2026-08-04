import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import SectionBlobs from "../components/SectionBlobs";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import SEO from "../components/SEO";
import Reveal, { RevealItem } from "../components/Reveal";
import { createFaqSchema, createBreadcrumbSchema } from "../components/schemas";
import { erpModules } from "../data/erpModules";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// General, company-level questions — every answer here only restates facts
// already published elsewhere on the site (organizationSchema, the erp
// module data, existing page copy), nothing new is being claimed.
const generalFaqs = [
  {
    question: "What does Impacgo Solutions do?",
    answer:
      "Impacgo Solutions is a Microsoft Dynamics 365 Finance & Operations and Power Platform implementation partner serving global enterprises, with deep India compliance expertise (GST, e-invoicing). Alongside consulting, we also build our own software products.",
  },
  {
    question: "Which Microsoft products does Impacgo implement?",
    answer:
      "Microsoft Dynamics 365 Finance & Operations, Dynamics 365 CRM (Sales, Customer Service, Marketing, Field Service), and the full Power Platform — Power Apps, Power Automate, Power BI, and AI Builder. We also handle AX 2012 to D365 migrations.",
  },
  {
    question: "Does Impacgo build its own software products?",
    answer:
      "Yes. Alongside our Microsoft Dynamics 365 and Power Platform consulting, we build CalveIQ (dairy farm management), StockLyte (inventory management), FarmYieldIQ (farmland plot operations), and the Impacgo ERP Suite — our own in-house business platform covering HR, Finance, Supply Chain, Manufacturing, Planning and Retail.",
  },
  {
    question: "Is the Impacgo ERP Suite available today?",
    answer:
      "The Impacgo ERP Suite is an active, in-development product — we're onboarding early-access partners across its HR, Finance, Supply Chain, Manufacturing, Planning, Retail, and Project modules. Reach out to find out where a specific module stands.",
  },
  {
    question: "Where is Impacgo based, and do you work with clients outside India?",
    answer:
      "Impacgo Solutions is based in Visakhapatnam, Andhra Pradesh, India, and works with global enterprises across multiple countries, with particular depth in India-specific compliance requirements like GST and e-invoicing.",
  },
  {
    question: "How do I get started with Impacgo?",
    answer:
      "Reach out through our contact page for a free consultation. We'll walk through your requirements and the right approach — whether that's a Microsoft Dynamics 365 implementation, a Power Platform project, or one of our own products.",
  },
];

export default function FAQ() {
  const allFaqsForSchema = [
    ...generalFaqs,
    ...erpModules.flatMap((mod) => mod.faqs),
  ];
  const faqSchema = createFaqSchema(allFaqsForSchema);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ]);

  return (
    <div>
      <SEO
        title="Frequently Asked Questions | Impacgo Solutions"
        description="Answers about Microsoft Dynamics 365, Power Platform, AX 2012 migration, and the Impacgo ERP Suite — Impacgo Solutions' most common questions in one place."
        keywords="Impacgo FAQ, Microsoft Dynamics 365 questions, Impacgo ERP Suite FAQ, D365FO implementation questions, Power Platform FAQ"
        path="/faq"
        schema={[faqSchema, breadcrumbSchema]}
      />
      <ScrollToTop />
      <Header alwaysSolid />

      <PageHero
        gradient="from-slate-900 via-blue-900 to-indigo-900"
        title="Frequently Asked Questions"
        description="Answers about our Microsoft Dynamics 365 and Power Platform services, our own Impacgo ERP Suite, and how to get started."
      />

      <section className="relative py-16 md:py-20 bg-white overflow-hidden">
        <SectionBlobs colorA="bg-blue-300/25" colorB="bg-indigo-300/20" />
        <div className="relative z-10 container mx-auto px-4 max-w-3xl">
          <Reveal as="h2" className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
            General
          </Reveal>
          <div className="space-y-4 mb-16">
            {generalFaqs.map((faq, index) => (
              <RevealItem
                key={faq.question}
                index={index}
                step={0.08}
                as="details"
                className="group bg-white/70 backdrop-blur-xl rounded-xl border border-white/60 shadow-glass-sm hover:shadow-glass hover:bg-white/90 transition-all duration-300 overflow-hidden"
              >
                <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-gray-800 flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">⌄</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>
              </RevealItem>
            ))}
          </div>

          <Reveal as="h2" className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
            Impacgo ERP Suite
          </Reveal>
          <p className="text-center text-gray-500 text-sm mb-10">
            Module-specific questions — see each module's own page for the full picture.
          </p>

          {erpModules.map((mod) => (
            <div key={mod.slug} className="mb-12">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Impacgo {mod.name} — {mod.tagline}
              </h3>
              <div className="space-y-4">
                {mod.faqs.map((faq, index) => (
                  <RevealItem
                    key={faq.question}
                    index={index}
                    step={0.06}
                    as="details"
                    className="group bg-white/70 backdrop-blur-xl rounded-xl border border-white/60 shadow-glass-sm hover:shadow-glass hover:bg-white/90 transition-all duration-300 overflow-hidden"
                  >
                    <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-gray-800 flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">⌄</span>
                    </summary>
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>
                  </RevealItem>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCard />
      <Footer />
    </div>
  );
}
