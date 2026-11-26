import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Briefcase,
  Code2,
  Factory,
  FileCheck2,
  Globe2,
  GraduationCap,
  Layers,
  LifeBuoy,
  Network,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import SEO from "../components/SEO";
import Reveal, { RevealItem } from "../components/Reveal";
import { ORG_ID, organizationSchema, createFaqSchema, createBreadcrumbSchema } from "../components/schemas";
import { ERP_SITE_URL } from "../config/erp";

/*
 * /global-erp-implementation — for searches beyond India: "ERP implementation
 * partner Japan", "Dynamics 365 partner Malaysia", "offshore ERP partner",
 * "Malaysia e-invoicing LHDN", "ERP company India for global clients".
 * Facts come from the approved Impacgo company profile (2026): 20+ years of
 * ERP experience in the leadership, 15+ global ERP implementations, 8+
 * countries, 10+ industries, the selected clients and their projects.
 * Rosti is left out on purpose: it is hidden on the website too (HomePage.jsx).
 */

const PATH = "/global-erp-implementation";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Where Impacgo has delivered, with the client projects named in the company profile.
const REGIONS = [
  { region: "Japan", projects: [["Resonac Corporation", "Global ERP maintenance and customisations"]] },
  { region: "Singapore & Malaysia", projects: [["Resonac Asia Pacific", "Multi-site trading implementation"], ["Resonac Materials Johor", "ERP and e-invoice implementation"]] },
  { region: "Thailand", projects: [["Showa Denko Materials", "Manufacturing implementation"]] },
  { region: "USA", projects: [["Resonac America", "Multi-site trading implementation"]] },
  { region: "United Kingdom", projects: [["Ironing Boy", "Web and mobile app development"]] },
  { region: "India", projects: [["Hitachi Chemical India", "Manufacturing implementation"], ["Allied JB Friction", "Manufacturing implementation"], ["Hitachi India", "SAP consulting services"]] },
];

const SERVICES = [
  { icon: Layers, title: "Impacgo ERP Suite", text: "Our own ERP: HRMS, Finance, supply chain, manufacturing, planning, retail POS and projects on one platform.", href: ERP_SITE_URL },
  { icon: Briefcase, title: "ERP implementation", text: "Our suite and leading platforms such as Microsoft Dynamics 365 Finance & Operations.", to: "/services/implementation" },
  { icon: FileCheck2, title: "e-Invoicing & compliance", text: "India GST e-invoicing, e-way bill and TDS, and Malaysia LHDN e-invoicing, built into normal billing.", to: "/blog/gst-e-invoicing-in-dynamics-365-finance-operations" },
  { icon: Network, title: "Integrations & MES", text: "ERP linked to manufacturing execution systems, banks and portals.", to: "/services/integrations" },
  { icon: Sparkles, title: "AI & automation", text: "Workflow automation and AI-assisted work with Power Automate, AI Builder and more.", to: "/services/ai-automation" },
  { icon: Code2, title: "Web & mobile apps", text: "Custom apps built around how your teams work, connected to your ERP.", to: "/services/app-development" },
  { icon: LifeBuoy, title: "Support & managed services", text: "Maintenance and enhancements after go-live, with SLA-backed support.", to: "/services/ams" },
  { icon: GraduationCap, title: "Training & consulting", text: "Process consulting, fit-gap analysis and hands-on user training.", to: "/services/consulting" },
];

const STEPS = [
  ["Discover", "Understand your processes, pain points and compliance needs."],
  ["Design", "Fit-gap analysis and a solution blueprint you sign off."],
  ["Build", "Configure, develop, integrate and migrate your data."],
  ["Test & train", "Business-led testing and hands-on user training."],
  ["Go-live & support", "Cutover, hypercare and continuous improvement."],
];

const FAQS = [
  {
    question: "Does Impacgo implement ERP outside India?",
    answer:
      "Yes. Impacgo Solutions has delivered 15+ ERP implementations for clients in 8+ countries, including Japan, Singapore, Malaysia, Thailand, the USA, the UK and India, and serves clients in the Middle East. Our headquarters is in Visakhapatnam, India.",
  },
  {
    question: "Which global companies has Impacgo worked with?",
    answer:
      "Selected clients include Resonac Corporation (Japan), Resonac Asia Pacific (Singapore and Malaysia), Resonac America (USA), Resonac Materials Johor (Malaysia), Showa Denko Materials (Thailand), Hitachi Chemical India, Hitachi India, Allied JB Friction (India) and Ironing Boy (UK).",
  },
  {
    question: "Can you help with Malaysia e-invoicing (LHDN)?",
    answer:
      "Yes. We get Malaysian entities ready for LHDN e-invoicing, and we delivered an ERP and e-invoice implementation for Resonac Materials Johor. In India we also handle GST e-invoicing (IRP, IRN and signed QR), e-way bills and TDS.",
  },
  {
    question: "Do you work with Japanese companies?",
    answer:
      "Yes. Our founder-led team has delivered global ERP maintenance and customisations for Resonac Corporation in Japan and implementations for its group companies across Asia and the USA, and is fluent in Japanese and global business norms.",
  },
  {
    question: "Which ERP platforms do you implement for global clients?",
    answer:
      "Our own Impacgo ERP Suite and leading platforms such as Microsoft Dynamics 365 Finance & Operations, plus compliance, integrations, MES, AI automation and custom apps around them. Because we offer both, we recommend what fits rather than one product.",
  },
  {
    question: "How do we start a global ERP project with Impacgo?",
    answer:
      "Email info@impacgo.com or call +91 99664 77499 for a free consultation. We start with a discovery of your processes and compliance needs in each country, then share a solution blueprint for you to sign off.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `https://www.impacgo.com${PATH}#webpage`,
  url: `https://www.impacgo.com${PATH}`,
  name: "Global ERP Implementation Partner | Impacgo",
  inLanguage: "en",
  about: { "@id": ORG_ID },
  isPartOf: { "@id": "https://www.impacgo.com/#website" },
};

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Global ERP Implementation", path: PATH },
]);

const card =
  "bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300";

export default function GlobalErpPartner() {
  const navigate = useNavigate();
  return (
    <div>
      <SEO
        title="Global ERP Implementation Partner | Impacgo"
        description="Impacgo has delivered 15+ ERP implementations in 8+ countries: Japan, Singapore, Malaysia, Thailand, the USA, the UK and India. ERP, D365, e-invoicing."
        path={PATH}
        schema={[organizationSchema, pageSchema, createFaqSchema(FAQS), breadcrumbSchema]}
      />
      <ScrollToTop />
      <Header />
      <PageHero
        gradient="from-slate-900 via-indigo-900 to-blue-900"
        eyebrow="India · Japan · Southeast Asia · Middle East · USA · UK"
        eyebrowIcon={Globe2}
        title="Global ERP Implementation Partner, from Japan to the UK"
        description="Impacgo Solutions builds its own ERP Suite and implements Microsoft Dynamics 365 for manufacturers, traders and growing businesses worldwide, from our headquarters in Visakhapatnam, India."
        stats={[
          { icon: Award, label: "Years of ERP experience", value: "20+" },
          { icon: Briefcase, label: "Global ERP implementations", value: "15+" },
          { icon: Globe2, label: "Countries served", value: "8+" },
        ]}
        primaryCta={{ label: "Book a free consultation", onClick: () => navigate("/contact") }}
        secondaryCta={{ label: "Explore Impacgo ERP", onClick: () => window.location.assign(ERP_SITE_URL) }}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          {/* Where we've delivered */}
          <div className="mb-16">
            <Reveal as="h2" className="text-3xl font-bold text-center text-gray-800 mb-3">
              Where we have delivered ERP projects
            </Reveal>
            <Reveal as="p" className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Selected clients and projects across Asia, North America and Europe, delivered by our founder-led team.
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {REGIONS.map((r, i) => (
                <RevealItem key={r.region} index={i} className={card}>
                  <p className="text-sm font-bold tracking-widest uppercase text-red-600 mb-3">{r.region}</p>
                  <ul className="flex flex-col gap-3">
                    {r.projects.map(([client, project]) => (
                      <li key={client}>
                        <h3 className="text-lg font-semibold text-gray-800">{client}</h3>
                        <p className="text-gray-600">{project}</p>
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              ))}
            </div>
          </div>

          {/* What we deliver */}
          <div className="mb-16">
            <Reveal as="h2" className="text-3xl font-bold text-center text-gray-800 mb-3">
              One partner across your entire ERP journey
            </Reveal>
            <Reveal as="p" className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Products and services under one roof, for single-country rollouts and multi-site, multi-country programmes.
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((s, i) => {
                const inner = (
                  <>
                    <span className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mb-4">
                      <s.icon className="text-blue-600 h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">{s.title}</h3>
                    <p className="text-gray-600">{s.text}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600">
                      Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </>
                );
                return (
                  <RevealItem key={s.title} index={i} className="h-full">
                    {s.to ? (
                      <Link to={s.to} className={`group block h-full ${card}`}>{inner}</Link>
                    ) : (
                      <a href={s.href} className={`group block h-full ${card}`}>{inner}</a>
                    )}
                  </RevealItem>
                );
              })}
            </div>
          </div>

          {/* How we deliver */}
          <div className="mb-16">
            <Reveal as="h2" className="text-3xl font-bold text-center text-gray-800 mb-8">
              A structured approach your team owns after go-live
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {STEPS.map(([title, text], i) => (
                <RevealItem key={title} index={i} className={card}>
                  <p className="text-3xl font-extrabold text-blue-600 mb-3">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
                  <p className="text-gray-600">{text}</p>
                </RevealItem>
              ))}
            </div>
          </div>

          {/* Why Impacgo */}
          <div className="mb-16">
            <Reveal as="h2" className="text-3xl font-bold text-center text-gray-800 mb-8">
              Why global clients choose Impacgo
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                [Award, "End-to-end ERP expertise", "20+ years of ERP experience in our leadership, across implementation, integration and support."],
                [Globe2, "Proven global delivery", "Projects delivered in Japan, Southeast Asia, the USA, the UK and India."],
                [Workflow, "Products and services together", "Our own ERP Suite plus Dynamics 365, so we recommend what fits."],
                [Users, "Cross-cultural client care", "Founder-led by Venkata Srikar Tantravahi, fluent in Japanese and global business norms."],
              ].map(([Icon, title, text], i) => (
                <RevealItem key={title} index={i} className={card}>
                  <span className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg mb-4">
                    <Icon className="text-white h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                  <p className="text-gray-600">{text}</p>
                </RevealItem>
              ))}
            </div>
            <Reveal as="p" className="text-center text-gray-600 mt-8">
              <Factory className="inline h-5 w-5 text-blue-600 mr-1 -mt-1" />
              Industries: manufacturing, trading and distribution, retail and e-commerce, healthcare, financial services, agriculture and dairy, real estate and infrastructure, technology and services.
            </Reveal>
          </div>

          {/* FAQs */}
          <div className="mb-16 max-w-3xl mx-auto">
            <Reveal as="h2" className="text-3xl font-bold text-center text-gray-800 mb-8">
              Global ERP projects: common questions
            </Reveal>
            <div className="flex flex-col gap-3">
              {FAQS.map((f, i) => (
                <RevealItem key={f.question} index={i}>
                  <details className="group bg-white/80 border border-white/60 rounded-2xl shadow-glass p-5" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-800 [&::-webkit-details-marker]:hidden">
                      <h3 className="text-lg">{f.question}</h3>
                      <span aria-hidden className="text-blue-600 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="text-gray-600 mt-3 leading-relaxed">{f.answer}</p>
                  </details>
                </RevealItem>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Reveal className="text-center">
            <p className="text-3xl font-extrabold text-gray-900 mb-8 max-w-2xl mx-auto">
              Planning an ERP rollout in one country or several?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-lg text-lg font-bold shadow-2xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
                onClick={() => navigate("/contact")}
              >
                Book a free consultation
              </button>
              <Link
                to="/erp-company-visakhapatnam"
                className="bg-white text-blue-700 border-2 border-blue-600 px-10 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:bg-blue-50"
              >
                Visit us in Visakhapatnam
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCard />
      <Footer />
    </div>
  );
}
