import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Clock,
  Factory,
  Languages,
  Layers,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Smartphone,
  Users,
  Wallet,
  Truck,
  Store,
  Workflow,
  BarChart3,
} from "lucide-react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import SEO from "../components/SEO";
import Reveal, { RevealItem } from "../components/Reveal";
import { ORG_ID, localBusinessSchema, createFaqSchema, createBreadcrumbSchema } from "../components/schemas";
import { ERP_SITE_URL, erpModulePageUrl } from "../config/erp";

/*
 * /erp-company-visakhapatnam — the page for local searches: "ERP company in
 * Vizag", "ERP software Visakhapatnam", "HRMS software Andhra Pradesh",
 * "Dynamics 365 partner Vizag". One strong page for the city Impacgo is based
 * in (not a set of thin copies for other cities, which search engines treat as
 * spam). Every fact here is already on the site: address, phone, hours and
 * languages (schemas.js), founding year, services, ERP modules and products.
 */

const PATH = "/erp-company-visakhapatnam";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// What Impacgo offers businesses in Vizag. ERP links are plain <a>: the ERP
// is a separate app on this domain (see src/config/erp.js).
const OFFERINGS = [
  { icon: Layers, title: "Impacgo ERP", text: "Our own ERP: seven connected modules for HR, finance, supply chain, manufacturing, planning, retail and projects.", href: ERP_SITE_URL },
  { icon: Users, title: "HRMS & payroll software", text: "Employee records, attendance and shifts, leave, payroll and payslips, recruitment and one approval queue.", href: erpModulePageUrl("hrms") },
  { icon: Wallet, title: "Finance & GST accounting", text: "General ledger, payables, receivables, bank, budgeting and GST and TDS tracking across entities and branches.", href: erpModulePageUrl("finance") },
  { icon: Truck, title: "Supply chain & inventory", text: "CRM, sales, purchasing, warehouses, batch and serial tracking and logistics on one stock ledger.", href: erpModulePageUrl("chain") },
  { icon: Factory, title: "Manufacturing & MRP", text: "Bills of materials, work orders, job cards, production costing, MRP and capacity planning.", href: erpModulePageUrl("make") },
  { icon: Store, title: "Retail POS & billing", text: "Counter billing with cash, card, UPI and wallet, loyalty, promotions and multi-store stock.", href: erpModulePageUrl("retail") },
  { icon: Building2, title: "Microsoft Dynamics 365", text: "Dynamics 365 Finance & Operations implementation, development and AX 2012 migration.", to: "/services/d365" },
  { icon: Workflow, title: "Power Platform & AI", text: "Power Apps, Power Automate, Power BI dashboards and AI automation built around your ERP.", to: "/services/power-apps" },
  { icon: Smartphone, title: "Custom web & mobile apps", text: "Web and mobile apps (React, React Native, .NET, Power Apps) connected to your business systems.", to: "/services/app-development" },
];

const INDUSTRIES = ["Manufacturing", "Pharma", "Food processing", "Distribution & wholesale", "Retail chains", "FMCG", "Engineering", "Automotive parts", "Textiles & apparel", "Construction", "Dairy farms", "Professional services"];

const WHY_LOCAL = [
  { icon: MapPin, title: "Based in Visakhapatnam", text: "Our office is in Balaji Nagar, Vizag, so workshops, training and go-live support can happen face to face." },
  { icon: ShieldCheck, title: "India compliance built in", text: "GST, TDS and e-invoicing are part of how we set up finance, purchasing and billing from day one." },
  { icon: Languages, title: "English, Hindi and Telugu", text: "Talk to us in the language your team is most comfortable with." },
  { icon: BarChart3, title: "Our own ERP and Microsoft", text: "Choose Impacgo ERP or Microsoft Dynamics 365. We build and implement both, so the advice is about fit, not one product." },
];

const FAQS = [
  {
    question: "Is there an ERP software company in Visakhapatnam (Vizag)?",
    answer:
      "Yes. Impacgo Solutions is an ERP software company headquartered in Balaji Nagar, Visakhapatnam (Vizag), Andhra Pradesh, founded in 2020. We build our own Impacgo ERP and implement Microsoft Dynamics 365 and the Power Platform for businesses in Vizag, across India and worldwide, with 15+ ERP implementations delivered in 8+ countries including Japan, Malaysia, Thailand, the USA and the UK.",
  },
  {
    question: "What ERP software does Impacgo offer in Vizag?",
    answer:
      "Impacgo ERP has seven connected modules: HRMS, Finance, Chain (supply chain), Make (manufacturing), Plan (MRP), Retail (POS) and Project. Start with the modules you need and add the rest as you grow. We also implement Microsoft Dynamics 365 Finance & Operations.",
  },
  {
    question: "Do you provide HRMS and payroll software in Visakhapatnam?",
    answer:
      "Yes. Impacgo HRMS covers employee records, attendance and shifts, leave, payroll and payslips, recruitment and onboarding. It is available today at hrms.impacgo.com, and approved payroll posts straight to Impacgo Finance.",
  },
  {
    question: "Do you work with businesses across Andhra Pradesh and the rest of India?",
    answer:
      "Yes. We are based in Visakhapatnam and work with businesses across Andhra Pradesh and India, and with clients in Japan, Singapore, Malaysia, Thailand, the Middle East, the USA and the UK, on site and remotely.",
  },
  {
    question: "Can you build custom software or a mobile app for my business in Vizag?",
    answer:
      "Yes. We build custom web and mobile apps (React, React Native, .NET and Power Apps) and connect them to your ERP and other business systems.",
  },
  {
    question: "How do I book a free ERP demo or consultation in Vizag?",
    answer:
      "Call +91 99664 77499, email info@impacgo.com or use the contact form. You can also book a free Impacgo ERP demo online, or visit our office in Balaji Nagar, Visakhapatnam (Monday to Friday, 9:00 to 18:00).",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `https://www.impacgo.com${PATH}#webpage`,
  url: `https://www.impacgo.com${PATH}`,
  name: "ERP Software Company in Visakhapatnam (Vizag) | Impacgo",
  inLanguage: "en-IN",
  about: { "@id": ORG_ID },
  isPartOf: { "@id": "https://www.impacgo.com/#website" },
};

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "ERP Company in Visakhapatnam", path: PATH },
]);

const card =
  "bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300";

export default function VizagErpCompany() {
  const navigate = useNavigate();
  return (
    <div>
      <SEO
        title="ERP Software Company in Visakhapatnam (Vizag) | Impacgo"
        description="Impacgo is an ERP software company in Visakhapatnam (Vizag), Andhra Pradesh: Impacgo ERP, HRMS, finance and GST, Dynamics 365 and custom apps."
        path={PATH}
        schema={[localBusinessSchema, pageSchema, createFaqSchema(FAQS), breadcrumbSchema]}
      />
      <ScrollToTop />
      <Header />
      <PageHero
        gradient="from-slate-900 via-blue-900 to-indigo-900"
        eyebrow="Visakhapatnam (Vizag) · Andhra Pradesh · India"
        eyebrowIcon={MapPin}
        title="ERP Software Company in Visakhapatnam (Vizag)"
        description="Impacgo Solutions builds Impacgo ERP (HRMS, Finance, supply chain, manufacturing, retail POS and more) and implements Microsoft Dynamics 365 for businesses in Vizag, across India and worldwide."
        stats={[
          { icon: CalendarDays, label: "Founded in Vizag", value: "2020" },
          { icon: Building2, label: "ERP projects worldwide", value: "15+" },
          { icon: Layers, label: "Countries served", value: "8+" },
        ]}
        primaryCta={{ label: "Book a free consultation", onClick: () => navigate("/contact") }}
        secondaryCta={{ label: "Explore Impacgo ERP", onClick: () => window.location.assign(ERP_SITE_URL) }}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          {/* What we do */}
          <div className="mb-16">
            <Reveal as="h2" className="text-3xl font-bold text-center text-gray-800 mb-3">
              ERP, HRMS and business software for Vizag businesses
            </Reveal>
            <Reveal as="p" className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Everything below is built or implemented by our team in Visakhapatnam, for companies in Andhra Pradesh, across India and worldwide. We have delivered 15+ ERP implementations in 8+ countries, from Japan to the UK.{" "}
              <Link to="/global-erp-implementation" className="text-blue-600 font-semibold hover:underline">See our global work</Link>.
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OFFERINGS.map((o, i) => {
                const inner = (
                  <>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center justify-center bg-blue-50 p-3 rounded-full">
                        <o.icon className="text-blue-600 h-6 w-6" />
                      </span>
                      <h3 className="text-lg font-semibold text-blue-700">{o.title}</h3>
                    </div>
                    <p className="text-gray-600">{o.text}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-800">
                      Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </>
                );
                return (
                  <RevealItem key={o.title} index={i} className="h-full">
                    {o.to ? (
                      <Link to={o.to} className={`group block h-full ${card}`}>{inner}</Link>
                    ) : (
                      <a href={o.href} className={`group block h-full ${card}`}>{inner}</a>
                    )}
                  </RevealItem>
                );
              })}
            </div>
          </div>

          {/* Industries */}
          <div className="mb-16">
            <Reveal as="h2" className="text-3xl font-bold text-center text-gray-800 mb-3">
              Industries we serve in Andhra Pradesh
            </Reveal>
            <Reveal as="p" className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
              From pharma and food processing units to distributors, retail chains and dairy farms, with software set up the way each industry works.
            </Reveal>
            <Reveal className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {INDUSTRIES.map((x) => (
                <span key={x} className="bg-white/80 border border-white/60 shadow-glass rounded-full px-4 py-2 text-gray-700 font-medium">
                  {x}
                </span>
              ))}
            </Reveal>
            <Reveal as="p" className="text-center text-gray-600 mt-6">
              Running a dairy farm? See <Link to="/calviq" className="text-blue-600 font-semibold hover:underline">CALVIQ dairy farm software</Link>. Managing stock across stores? See <Link to="/stocklyte" className="text-blue-600 font-semibold hover:underline">StockLyte inventory software</Link>.
            </Reveal>
          </div>

          {/* Why a local partner */}
          <div className="mb-16">
            <Reveal as="h2" className="text-3xl font-bold text-center text-gray-800 mb-8">
              Why work with a Vizag-based ERP partner
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_LOCAL.map((w, i) => (
                <RevealItem key={w.title} index={i} className={card}>
                  <span className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg mb-4">
                    <w.icon className="text-white h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{w.title}</h3>
                  <p className="text-gray-600">{w.text}</p>
                </RevealItem>
              ))}
            </div>
          </div>

          {/* Visit us */}
          <div className="mb-16">
            <Reveal as="h2" className="text-3xl font-bold text-center text-gray-800 mb-8">
              Visit our office in Visakhapatnam
            </Reveal>
            <RevealItem index={0} className={`${card} max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6`}>
              <div className="flex gap-3">
                <MapPin className="text-blue-600 h-6 w-6 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">Impacgo Solutions Private Limited<br />No 9-29-19, Gupta Villa, Third Floor<br />Balaji Nagar, Visakhapatnam (Vizag)<br />Andhra Pradesh 530003, India</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=Impacgo+Solutions+Visakhapatnam" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 mt-2">
                    Open in Google Maps <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <Phone className="text-blue-600 h-6 w-6 shrink-0" />
                  <a href="tel:+919966477499" className="text-gray-700 font-semibold hover:text-blue-600">+91 99664 77499</a>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-blue-600 h-6 w-6 shrink-0" />
                  <a href="mailto:info@impacgo.com" className="text-gray-700 font-semibold hover:text-blue-600">info@impacgo.com</a>
                </div>
                <div className="flex gap-3">
                  <Clock className="text-blue-600 h-6 w-6 shrink-0" />
                  <p className="text-gray-700">Monday to Friday, 9:00 to 18:00</p>
                </div>
              </div>
            </RevealItem>
          </div>

          {/* FAQs: plain <details>, so every answer is in the page HTML */}
          <div className="mb-16 max-w-3xl mx-auto">
            <Reveal as="h2" className="text-3xl font-bold text-center text-gray-800 mb-8">
              ERP in Vizag: common questions
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
              Looking for an ERP partner in Visakhapatnam?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-lg text-lg font-bold shadow-2xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
                onClick={() => navigate("/contact")}
              >
                Book a free consultation
              </button>
              <a
                href={`${ERP_SITE_URL}/demo`}
                className="bg-white text-blue-700 border-2 border-blue-600 px-10 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:bg-blue-50"
              >
                Book a free ERP demo
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCard />
      <Footer />
    </div>
  );
}
