import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaHeadset,
  FaBullhorn,
  FaTools,
  FaMobileAlt,
  FaSyncAlt,
  FaShieldAlt,
  FaUserShield,
  FaClock,
  FaCogs,
  FaChartLine,
  FaLifeRing,
} from "react-icons/fa";
import { Heart, Users, Headphones } from "lucide-react";

import POSHeader from "../components/POSHeader";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import PageHero, { HeroPanel } from "../components/PageHero";
import financialimg from "../assets/financialimg.jpg";
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

export default function D365CRM() {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What is Dynamics 365 CRM and which modules does it include?",
      answer:
        "Dynamics 365 CRM (Customer Engagement) is Microsoft's customer relationship management platform. It includes Dynamics 365 Sales (lead-to-opportunity-to-order pipeline management), Dynamics 365 Customer Service (case management, SLAs, omnichannel support), Dynamics 365 Marketing (customer journeys, email marketing, segmentation, event management), and Dynamics 365 Field Service (technician scheduling, work order management, IoT-driven service). Each module is licensed separately and can be deployed independently or together.",
    },
    {
      question: "Should we use Dynamics 365 CRM or Salesforce?",
      answer:
        "Both are leading CRM platforms. The right choice depends on your existing systems and team familiarity. If you're already on Microsoft 365, Teams, SharePoint, or D365 Finance & Operations, Dynamics 365 CRM offers significantly tighter integration, better Office and Outlook embedding, and a lower total cost of ownership. If your team is Salesforce-native or you have heavy AppExchange dependencies, Salesforce may be better. For Indian companies running Microsoft Dynamics F&O, D365 CRM is almost always the right answer — the integration with D365 F&O is native and seamless, giving you one unified customer view from lead to invoice.",
    },
    {
      question: "How long does a D365 CRM implementation take in India?",
      answer:
        "A single-module D365 CRM implementation (e.g., just Sales or just Customer Service) typically takes 8-14 weeks. A multi-module implementation covering Sales + Customer Service + Marketing takes 4-6 months. Heavily customised CRM with multiple integrations, complex business rules, and migration from legacy systems takes 6-9 months. Impacgo follows an agile delivery model with sprint-based releases — your sales or service team starts using new functionality every 2-4 weeks rather than waiting for big-bang go-live.",
    },
    {
      question: "Does D365 CRM integrate with D365 Finance & Operations?",
      answer:
        "Yes, natively. Microsoft provides a Common Data Service / Dataverse integration layer that synchronises customers, products, sales orders, invoices, and payments between D365 CRM and D365 F&O. Sales reps in CRM see real-time stock and pricing from F&O. Finance team in F&O sees the full sales pipeline and customer history from CRM. This is one of the biggest reasons to choose Microsoft over Salesforce when you're running Dynamics F&O — you get a unified customer record without expensive third-party middleware.",
    },
    {
      question: "What does a D365 CRM implementation cost in India?",
      answer:
        "Costs vary based on modules, user count, customisation level, integration scope, and data migration complexity. Microsoft D365 CRM licensing (Sales Professional, Sales Enterprise, Customer Service Enterprise, Marketing, Field Service) is per-user-per-month and separate from implementation services. Indian enterprises typically budget separately for licensing and implementation. Impacgo offers a free D365 CRM consultation that delivers a detailed scope, licensing recommendation, realistic timeline, and budget proposal specific to your sales and service operations.",
    },
  ];

  const serviceSchema = createServiceSchema({
    serviceName: "Microsoft Dynamics 365 CRM Implementation",
    description:
      "Specialist Dynamics 365 Customer Engagement implementation in India. D365 Sales, Customer Service, Marketing, and Field Service for Indian sales and service teams. Native integration with D365 Finance & Operations.",
    serviceType: "CRM Implementation",
    path: "/services/d365-crm",
  });

  const faqSchema = createFaqSchema(faqs);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Dynamics 365 CRM", path: "/services/d365-crm" },
  ]);

  const keyFeatures = [
    {
      title: "D365 Sales — Pipeline & Forecasting",
      description:
        "Lead capture and qualification, opportunity management, quote and proposal generation, sales forecasting, sales playbooks, and embedded LinkedIn Sales Navigator. Mobile sales app for field reps.",
      icon: <FaUsers className="text-pink-600 text-4xl mb-4" />,
    },
    {
      title: "D365 Customer Service — Omnichannel Support",
      description:
        "Case management with SLAs, omnichannel routing (email, phone, chat, WhatsApp, social), knowledge base, customer self-service portals, and AI-driven case suggestion via Copilot.",
      icon: <FaHeadset className="text-pink-600 text-4xl mb-4" />,
    },
    {
      title: "D365 Marketing — Journeys & Segmentation",
      description:
        "Customer journey builder, email marketing, landing pages, lead scoring, segmentation, account-based marketing, event management, and marketing-to-sales handoff via lead lifecycle.",
      icon: <FaBullhorn className="text-pink-600 text-4xl mb-4" />,
    },
    {
      title: "D365 Field Service — Technician Operations",
      description:
        "Work order management, technician scheduling and dispatch, mobile field app, inventory truck stock, IoT-driven service triggers, and remote assist via Dynamics 365 Remote Assist for HoloLens.",
      icon: <FaTools className="text-pink-600 text-4xl mb-4" />,
    },
    {
      title: "D365 F&O Integration",
      description:
        "Native bi-directional integration between D365 CRM and D365 F&O via Dataverse. Customers, contacts, products, sales orders, and invoices synchronised in real time for one unified customer view.",
      icon: <FaSyncAlt className="text-pink-600 text-4xl mb-4" />,
    },
    {
      title: "Mobile, Outlook & Teams Integration",
      description:
        "Native mobile apps for iOS and Android. Outlook integration so sales reps work from their inbox. Teams integration so collaboration happens where work actually gets done.",
      icon: <FaMobileAlt className="text-pink-600 text-4xl mb-4" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Microsoft Specialisation",
      description:
        "We do Microsoft Dynamics — not generic CRM. Deep knowledge of D365 CRM platform, Dataverse, Power Platform extensions, and the wider Microsoft ecosystem.",
      icon: <FaShieldAlt className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "D365 F&O + CRM Together",
      description:
        "Most CRM consultancies don't understand ERP integration. We do both — so the customer record actually links to orders, invoices, and payments without expensive middleware.",
      icon: <FaUserShield className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Indian Sales & Service Process Expertise",
      description:
        "We know how Indian sales teams actually work — distributor channels, dealer hierarchies, GST-aware quotes, multi-language support, regional service operations.",
      icon: <FaCogs className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Agile, Sprint-Based Delivery",
      description:
        "New CRM functionality every 2-4 weeks rather than 6-month big-bang projects. Your sales team adopts in small chunks, not all at once.",
      icon: <FaClock className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Power Platform Extensions",
      description:
        "We extend D365 CRM with Power Apps for unique sales workflows, Power Automate for approval chains, and Power BI for sales dashboards — at no additional engagement.",
      icon: <FaChartLine className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Ongoing AMS Support",
      description:
        "Post go-live managed services — user support, minor enhancements, platform updates, Dataverse storage optimisation, and continuous improvement under SLA.",
      icon: <FaLifeRing className="text-green-500 text-4xl mb-4" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "CRM Discovery Workshop",
      description:
        "1-2 week workshop with your sales, marketing, and service leadership. We map current customer journeys, identify pain points, scope CRM module fit, and define success metrics. Deliverable: detailed scope, module recommendation, timeline, and budget proposal.",
    },
    {
      step: "02",
      title: "Solution Design & Licensing",
      description:
        "Detailed solution design covering data model, business rules, security roles, sales/service processes, marketing journeys, and integration architecture with D365 F&O. Microsoft licensing recommendation based on user roles. Deliverable: functional design and licensing proposal.",
    },
    {
      step: "03",
      title: "Configuration & Customisation",
      description:
        "D365 CRM configured for your operations — entities, forms, business process flows, business rules, workflows, sales/service playbooks, and security model. Power Apps and Power Automate extensions for unique requirements. Integrations to D365 F&O and third-party systems.",
    },
    {
      step: "04",
      title: "Data Migration & Validation",
      description:
        "Customers, contacts, leads, opportunities, and historical interactions migrated from legacy CRM or spreadsheets. Data cleansing, deduplication, and validation. Reconciliation reports confirm migration accuracy.",
    },
    {
      step: "05",
      title: "UAT, Training & Adoption",
      description:
        "User acceptance testing with sales reps, service agents, marketing team, and management. Role-based training programmes — sales playbook training, service case handling, marketing journey design, manager dashboard usage. Adoption coaches embedded for first 4-6 weeks.",
    },
    {
      step: "06",
      title: "Go-Live, Hypercare & Managed Services",
      description:
        "Phased go-live by team or function. Daily monitoring during 4-8 week hypercare with immediate issue resolution. Transition to ongoing AMS for new enhancements, user support, platform updates, and continuous CRM evolution.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO
  title="Dynamics 365 CRM Implementation Partner | D365 Sales · Service · Marketing | Global Specialists"
  description="Specialist Microsoft Dynamics 365 CRM implementation worldwide. D365 Sales, Customer Service, Marketing, and Field Service for global sales and service teams. Native integration with D365 Finance & Operations. India compliance built in. Free consultation."
  keywords="Dynamics 365 CRM, D365 Sales, D365 Customer Service, D365 Marketing, D365 Field Service, Microsoft CRM partner, Dynamics 365 CRM implementation, CRM consultant, Dynamics 365 CRM India, D365 CRM India, customer engagement Microsoft, CRM global partner"
  path="/services/d365-crm"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>

      <ScrollToTop />
      <POSHeader />

      <main className="flex-grow">
        <PageHero
          backgroundStyle="linear-gradient(135deg, #831843 0%, #be185d 35%, #7c3aed 100%)"
          image={financialimg}
          imageAlt="Dynamics 365 CRM Implementation"
          eyebrow="Sales · Marketing · Customer Service · Field Service"
          eyebrowIcon={Heart}
          title={
            <>
              Dynamics 365{" "}
              <span className="bg-gradient-to-r from-pink-200 to-violet-200 bg-clip-text text-transparent">
                CRM
              </span>{" "}
              Implementation — Global Specialists
            </>
          }
          description="Specialist Microsoft Dynamics 365 Customer Engagement implementation for Indian sales, marketing, and customer service teams. D365 Sales, Customer Service, Marketing, and Field Service — connected to your D365 F&O backend for one unified customer view."
          stats={[
            { icon: Users, label: "Sales", value: "Pipeline · Forecast" },
            { icon: Headphones, label: "Service", value: "Cases · SLAs" },
            { icon: Heart, label: "Marketing", value: "Journeys · Lead Gen" },
          ]}
          primaryCta={{ label: "Get a Free D365 CRM Consultation", onClick: () => navigate("/contact") }}
          secondaryCta={{
            label: "See Our Process",
            onClick: () => document.getElementById("d365crm-process")?.scrollIntoView({ behavior: "smooth" }),
          }}
          panel={
            <HeroPanel
              eyebrow="CRM Capabilities"
              title="Dynamics 365 modules we implement"
              items={[
                { icon: Users, title: "D365 Sales", description: "Lead, opportunity, quote, forecast" },
                { icon: Headphones, title: "D365 Customer Service", description: "Omnichannel cases, SLAs, knowledge base" },
                { icon: Heart, title: "D365 Marketing & Field Service", description: "Journeys, segmentation, technician dispatch" },
              ]}
              footnote="All modules connect natively to D365 Finance & Operations for one unified customer view — from lead to order to service."
            />
          }
        />

        <section className="bg-pink-50 border-y-2 border-pink-200 py-6">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <Heart className="h-8 w-8 text-pink-600 flex-shrink-0" />
              <p className="text-pink-900 text-base md:text-lg">
                <span className="font-bold">
                  Indian sales teams running on spreadsheets and Outlook lose
                  20-40% of pipeline visibility — and miss follow-ups that
                  cost real deals.
                </span>{" "}
                D365 CRM fixes this.{" "}
                <button
                  onClick={() => navigate("/contact")}
                  className="underline font-semibold hover:text-pink-700"
                >
                  Start your CRM journey →
                </button>
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-pink-600 font-semibold mb-2 text-sm">
                CRM Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Dynamics 365 CRM Implementation
              </h2>
              <p className="text-lg text-gray-600">
                Sales, Customer Service, Marketing, and Field Service — every
                module of the D365 Customer Engagement suite, connected to
                your ERP.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-pink-600 font-semibold mb-2 text-sm">
                Why Impacgo
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Impacgo for D365 CRM?
              </h2>
              <p className="text-lg text-gray-600">
                The only Microsoft partner in India that does both D365 F&O
                and D365 CRM — so you get one unified customer view from lead
                to invoice.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {benefit.icon}
                  <h3 className="text-xl font-semibold text-green-600 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="d365crm-process" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-pink-600 font-semibold mb-2 text-sm">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                D365 CRM Implementation Process
              </h2>
              <p className="text-lg text-gray-600">
                Agile, sprint-based delivery — your sales and service teams
                see working CRM every 2-4 weeks, not 6 months in.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-200"></div>

              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-pink-600 text-white items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="md:hidden inline-block w-10 h-10 rounded-full bg-pink-600 text-white font-bold text-sm items-center justify-center mb-3 flex">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <div className="text-center mb-12">
              <p className="uppercase tracking-widest text-pink-600 font-semibold mb-2 text-sm">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dynamics 365 CRM — Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-pink-700 via-rose-600 to-violet-700 text-white">
          <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
            <div className="inline-flex items-center bg-pink-500/20 border border-pink-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-pink-200 mr-2" />
              <span className="text-sm font-semibold text-pink-100">
                Free D365 CRM Consultation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bring sales, service, and marketing onto one platform
            </h2>
            <p className="text-lg text-pink-100 mb-8">
              Whether you're replacing spreadsheets, migrating from legacy
              CRM, or unifying sales and service for the first time — Impacgo
              can scope, configure, and deploy Dynamics 365 CRM in weeks, not
              years. Native D365 F&O integration. Indian compliance built in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-pink-700 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                Request Free Consultation
              </button>
              <button
                onClick={() => navigate("/services/d365")}
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Explore D365 F&O
              </button>
            </div>
          </div>
        </section>
      </main>

      <ContactCard />
      <Footer />
    </div>
  );
}