import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaSearchPlus,
  FaCode,
  FaDatabase,
  FaCheckCircle,
  FaRocket,
  FaLifeRing,
  FaShieldAlt,
  FaBalanceScale,
  FaClock,
  FaUserShield,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";
import { AlertTriangle, Calendar } from "lucide-react";

import POSHeader from "../components/POSHeader";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import PageHero, { HeroPanel } from "../components/PageHero";
import Reveal, { RevealItem } from "../components/Reveal";
import financialimg from "../assets/financialimg.webp";
import SEO from "../components/SEO";
import {
  createServiceSchema,
  createFaqSchema,
  createBreadcrumbSchema,
} from "../components/schemas";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function AXMigration() {
  const navigate = useNavigate();

  // ============ SEO Data ============
  const faqs = [
    {
      question: "When does Microsoft AX 2012 support end?",
      answer:
        "Microsoft ended mainstream support for Dynamics AX 2012 R3 in October 2021. Extended support ends in January 2028. After January 2028, Microsoft will no longer provide security patches, regulatory updates (including GST and TDS rule changes for Indian businesses), or hotfixes for AX 2012 — making it a compliance and security risk to continue running.",
    },
    {
      question:
        "How long does an AX 2012 to D365 Finance and Operations migration take?",
      answer:
        "A straightforward AX 2012 migration with minimal customisations typically takes 9 to 12 months. A heavily customised AX 2012 environment with multiple integrated systems and 10+ years of transaction data can take 18 to 24 months. The migration assessment alone takes 4-8 weeks. Starting your migration project in 2026 leaves comfortable runway before the January 2028 deadline; starting in 2027 does not.",
    },
    {
      question:
        "What are the three approaches to migrating AX 2012 to D365FO?",
      answer:
        "There are three migration approaches: (1) Code Upgrade — upgrades existing AX customisations to D365FO extensions; fastest path but preserves existing customisation debt. (2) Reimplementation — treats the D365FO project as a fresh implementation using lessons learned from AX; most future-proof but requires significant business change management. (3) Hybrid — upgrades the core AX code while redesigning heavily customised areas from scratch; the most common approach for Indian enterprises with mixed levels of AX customisation.",
    },
    {
      question:
        "What does an AX 2012 to D365FO migration cost for Indian enterprises?",
      answer:
        "Migration costs vary based on the volume of AX customisations accumulated over the years, complexity of historical transaction data, number of integrated systems, and chosen migration approach (code upgrade, reimplementation, or hybrid). Impacgo offers a free 4-8 week migration readiness assessment that delivers a detailed cost estimate, recommended approach, and project timeline specific to your AX 2012 environment.",
    },
    {
      question:
        "Why should we start AX migration planning now if go-live is two years away?",
      answer:
        "The full migration cycle takes longer than most companies expect: migration assessment (4-8 weeks) + partner procurement and contracting (2-4 months) + actual migration project (9-24 months). Starting in 2026 gives you runway to complete migration before January 2028 with time for stabilisation, regression testing, and user adoption. Starting in 2027 forces a rushed migration with no buffer for unexpected issues — a serious risk for enterprises running critical financial and operational processes on AX 2012.",
    },
  ];

  const serviceSchema = createServiceSchema({
    serviceName:
      "AX 2012 to Microsoft Dynamics 365 Finance and Operations Migration",
    description:
      "Expert AX 2012 to D365 Finance and Operations migration services in India. Code upgrade, data migration, and reimplementation services for Indian enterprises before the January 2028 support deadline. Free migration readiness assessment.",
    serviceType: "ERP Migration",
    path: "/services/ax-migration",
  });

  const faqSchema = createFaqSchema(faqs);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    {
      name: "AX 2012 to D365FO Migration",
      path: "/services/ax-migration",
    },
  ]);

  // ============ Page Content Data ============
  const keyFeatures = [
    {
      title: "Migration Readiness Assessment",
      description:
        "Comprehensive 4-8 week assessment of your AX 2012 environment — customisations inventory, data quality audit, integration mapping, and migration approach recommendation tailored to Indian compliance.",
      icon: <FaSearchPlus className="text-blue-500 text-4xl mb-4" />,
    },
    {
      title: "Code Upgrade & X++ to D365FO Extensions",
      description:
        "Convert your existing AX 2012 X++ customisations to D365 Finance and Operations extensions — preserving business logic without breaking the cloud upgrade path.",
      icon: <FaCode className="text-blue-500 text-4xl mb-4" />,
    },
    {
      title: "Data Migration with GST & TDS Compliance",
      description:
        "Migrate years of AX 2012 transaction data — masters, open transactions, historical records — with Indian tax compliance (GST, TDS, statutory reporting) fully preserved.",
      icon: <FaDatabase className="text-blue-500 text-4xl mb-4" />,
    },
    {
      title: "Functional Gap Analysis",
      description:
        "Identify where D365FO handles processes differently from AX 2012 — and redesign workflows that need restructuring rather than just lift-and-shift.",
      icon: <FaBalanceScale className="text-blue-500 text-4xl mb-4" />,
    },
    {
      title: "Regression Testing & UAT",
      description:
        "Comprehensive test plans covering financial close, procurement, manufacturing, payroll, and Indian statutory reports — with structured user acceptance testing.",
      icon: <FaCheckCircle className="text-blue-500 text-4xl mb-4" />,
    },
    {
      title: "Cloud Go-Live & Hypercare",
      description:
        "Cutover planning, go-live support, and post go-live hypercare for 8-12 weeks. Issue resolution, performance tuning, and user training to stabilise operations on D365FO.",
      icon: <FaRocket className="text-blue-500 text-4xl mb-4" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Microsoft Specialisation",
      description:
        "We work exclusively in the Microsoft Dynamics ecosystem — deeper AX and D365FO product knowledge than generalist partners who also implement SAP and Oracle.",
      icon: <FaShieldAlt className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "India Compliance Expertise",
      description:
        "GST, TDS, e-invoicing, statutory reporting and Indian payroll fully understood — no surprises at month-end close after migration.",
      icon: <FaUserShield className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "On-Time, On-Budget Delivery",
      description:
        "Transparent project methodology, regular stakeholder reporting, and fixed-scope assessment phase before commitment — no runaway timelines.",
      icon: <FaClock className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Power Platform Bundling",
      description:
        "We extend D365FO with Power Apps, Power Automate, and Power BI as part of the migration — solving the operational gaps AX 2012 left behind.",
      icon: <FaCogs className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Risk-Managed Migration",
      description:
        "Phased approach with rollback plans, parallel-run capability, and dedicated risk management — your operations stay live throughout the migration.",
      icon: <FaChartLine className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Post Go-Live Managed Services",
      description:
        "Ongoing AMS support after go-live — incident management, minor enhancements, performance optimisation, and continuous improvement under SLA.",
      icon: <FaLifeRing className="text-green-500 text-4xl mb-4" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Migration Readiness Assessment",
      description:
        "4-8 weeks of structured discovery — current AX 2012 environment audit, customisation inventory, integration mapping, data quality analysis, business process review. Deliverable: detailed migration plan with timeline, approach recommendation (code upgrade, reimplementation, or hybrid), and budget estimate.",
    },
    {
      step: "02",
      title: "Strategy & Approach Finalisation",
      description:
        "Together with your stakeholders, we finalise the migration approach — code upgrade for speed, reimplementation for future-proofing, or hybrid for mixed customisation. We define D365FO modules in scope, integration architecture, and a governance model for the project.",
    },
    {
      step: "03",
      title: "Code Migration & Environment Setup",
      description:
        "AX 2012 X++ customisations are converted to D365FO extensions following Microsoft's recommended patterns. D365FO development, test, and production environments are provisioned on Azure with appropriate sizing for your transaction volume.",
    },
    {
      step: "04",
      title: "Data Migration & Validation",
      description:
        "Historical transaction data, masters, and open documents migrated from AX 2012 to D365FO using Microsoft Data Migration Tool plus custom scripts where needed. Reconciliation reports verify financial balances, inventory, and statutory positions match exactly.",
    },
    {
      step: "05",
      title: "Testing, UAT & Training",
      description:
        "Comprehensive regression testing across finance, procurement, manufacturing, sales, payroll, and Indian compliance reports. User acceptance testing with key business users. Role-based training programmes prepare your team for go-live on D365FO.",
    },
    {
      step: "06",
      title: "Go-Live, Cutover & Hypercare",
      description:
        "Planned cutover weekend with final data migration. Go-live day on-site support, immediate issue resolution, and 8-12 week hypercare period to stabilise operations. Transition to ongoing AMS managed services for long-term D365FO support.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO
  title="AX 2012 to D365 Migration Partner | End of Support 2028 | Global Migration Specialists"
  description="Specialist Microsoft Dynamics AX 2012 to D365 Finance & Operations migration services for global enterprises. Beat the January 2028 end-of-support deadline. Deep India compliance expertise (GST, e-invoicing, TDS). Multi-country rollout experience. Free migration assessment."
  keywords="AX 2012 migration partner, Dynamics AX to D365 migration, AX 2012 end of support 2028, Dynamics AX 2012 R3 migration, D365FO migration services, AX 2012 to cloud migration, AX 2012 upgrade specialist, Microsoft Dynamics migration partner, AX 2012 migration India, AX 2012 migration consultant India, Dynamics 365 finance operations migration"
  path="/services/ax-migration"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>

      <ScrollToTop />
      <POSHeader />

      <main className="flex-grow">
        <PageHero
          backgroundStyle="linear-gradient(135deg, #1e3a8a 0%, #1e40af 35%, #4338ca 100%)"
          image={financialimg}
          imageAlt="AX 2012 to D365 Migration"
          eyebrow="AX 2012 Support Ends January 2028"
          eyebrowIcon={AlertTriangle}
          title={
            <>
              AX 2012 to{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                Dynamics 365 F&O
              </span>{" "}
              — Global Migration Specialists
            </>
          }
          description="Microsoft extended support for AX 2012 R3 ends January 2028. Impacgo's specialist Microsoft Dynamics team has migrated enterprises from AX 2012 to D365 Finance and Operations with minimal disruption. Get a free migration readiness assessment."
          stats={[
            { icon: Calendar, label: "Deadline", value: "Jan 2028" },
            { label: "Typical migration", value: "9-24 months" },
            { label: "Assessment", value: "4-8 weeks" },
          ]}
          primaryCta={{ label: "Get Free Migration Assessment", onClick: () => navigate("/contact") }}
          secondaryCta={{
            label: "See Migration Process",
            onClick: () => document.getElementById("ax-process")?.scrollIntoView({ behavior: "smooth" }),
          }}
          panel={
            <HeroPanel
              eyebrow="Why act now"
              title="Starting 2026 gives you runway. Starting 2027 doesn't."
              items={[
                { number: 1, title: "Migration assessment", description: "4–8 weeks" },
                { number: 2, title: "Partner procurement", description: "2–4 months" },
                { number: 3, title: "Migration project", description: "9–24 months" },
              ]}
              footnote="No security patches. No GST/regulatory updates. No hotfixes after Jan 2028."
            />
          }
        />

        {/* ============ Urgent Banner ============ */}
        <section className="bg-red-50 border-y-2 border-red-200 py-6">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
              <p className="text-red-900 text-base md:text-lg">
                <span className="font-bold">Microsoft AX 2012 R3 extended support ends January 2028.</span>{" "}
                After that date — no security patches, no GST/regulatory updates, no hotfixes.{" "}
                <button
                  onClick={() => navigate("/contact")}
                  className="underline font-semibold hover:text-red-700"
                >
                  Start your migration assessment now →
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* ============ Key Features ============ */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-blue-600 font-semibold mb-2 text-sm">
                What's Included
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete AX 2012 to D365FO Migration Services
              </h2>
              <p className="text-lg text-gray-600">
                End-to-end migration covering every layer of your AX 2012 environment —
                code, data, configurations, integrations, and people.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </RevealItem>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Why Choose Us ============ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-blue-600 font-semibold mb-2 text-sm">
                Why Impacgo
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Impacgo for Your AX Migration?
              </h2>
              <p className="text-lg text-gray-600">
                Microsoft Dynamics specialists with deep India implementation experience —
                not a generalist IT firm taking on a one-off project.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((benefit, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {benefit.icon}
                  <h3 className="text-xl font-semibold text-green-600 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </RevealItem>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Migration Process (zigzag timeline) ============ */}
        <section id="ax-process" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-blue-600 font-semibold mb-2 text-sm">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AX 2012 to D365FO — Migration Process
              </h2>
              <p className="text-lg text-gray-600">
                A proven, phased methodology — assessment to go-live to hypercare.
              </p>
            </Reveal>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

              {processSteps.map((step, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className={`relative flex flex-col md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step circle */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-blue-600 text-white items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="md:hidden inline-block w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm items-center justify-center mb-3 flex">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FAQ Section ============ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <Reveal className="text-center mb-12">
              <p className="uppercase tracking-widest text-blue-600 font-semibold mb-2 text-sm">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AX 2012 Migration — Frequently Asked Questions
              </h2>
            </Reveal>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </RevealItem>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA Section ============ */}
        <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">
          <Reveal className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
            <div className="inline-flex items-center bg-red-500/20 border border-red-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="h-4 w-4 text-red-300 mr-2" />
              <span className="text-sm font-semibold text-red-100">
                Time-Sensitive: Jan 2028 Deadline
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Free AX 2012 Migration Readiness Assessment
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Don't wait until 2027 to start planning. Get a no-obligation
              migration readiness assessment from Impacgo's Microsoft Dynamics
              specialists. We'll review your AX 2012 environment, recommend
              the right migration approach, and outline a realistic timeline
              and budget — at no cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                Request Free Assessment
              </button>
              <button
                onClick={() => navigate("/services/d365")}
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Learn About D365 F&O
              </button>
            </div>
          </Reveal>
        </section>
      </main>

      <ContactCard />
      <Footer />
    </div>
  );
}