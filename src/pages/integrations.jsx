import {
  FaCheckCircle,
  FaPlug,
  FaCloud,
  FaExchangeAlt,
  FaSyncAlt,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaCogs,
  FaUsers,
  FaSearch,
  FaProjectDiagram,
  FaTools,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";
import { MdOutlineEngineering, MdOutlineSupportAgent } from "react-icons/md";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import supplyChainImg from "../assets/supplychain.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import SEO from "../components/SEO";
import { createServiceSchema, createFaqSchema, createBreadcrumbSchema } from "../components/schemas";
import Reveal, { RevealItem } from "../components/Reveal";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const integrationFeatures = [
  {
    title: "REST API & SOAP Connectors",
    description:
      "Build secure, well-documented API integrations between ERP, MES, CRM, and any third-party system.",
    icon: FaPlug,
  },
  {
    title: "Third-party SaaS Integrations",
    description:
      "Pre-built and custom connectors to leading SaaS platforms — payment, logistics, marketing, HR, and more.",
    icon: FaCloud,
  },
  {
    title: "EDI / B2B Data Exchange",
    description:
      "Industry-standard EDI pipelines for orders, invoices, ASNs, and other B2B documents with trading partners.",
    icon: FaExchangeAlt,
  },
  {
    title: "Real-time Bidirectional Sync",
    description:
      "Event-driven, low-latency data sync between systems — keep every platform consistent and current.",
    icon: FaSyncAlt,
  },
  {
    title: "Middleware & iPaaS",
    description:
      "Azure Logic Apps, Service Bus, and other iPaaS platforms — robust orchestration and message routing.",
    icon: FaServer,
  },
  {
    title: "Legacy System Modernisation",
    description:
      "Bridge legacy systems to modern platforms — wrapping, gradual migration, and decommissioning paths.",
    icon: FaDatabase,
  },
];

const integrationBenefits = [
  {
    title: "Enterprise-grade Reliability",
    description:
      "Idempotent integrations, retry logic, and dead-letter handling — built for production workloads.",
    icon: FaCheckCircle,
  },
  {
    title: "Secure by Design",
    description:
      "OAuth, mTLS, secret management, and full audit logging across every integration we deliver.",
    icon: FaShieldAlt,
  },
  {
    title: "Tooling-Agnostic",
    description:
      "We work with Azure, AWS, MuleSoft, Boomi, custom .NET / Node.js — whichever fits your stack.",
    icon: FaCogs,
  },
  {
    title: "Faster Time to Value",
    description:
      "Reusable integration patterns and accelerators get you to production faster, with less risk.",
    icon: FaRocket,
  },
  {
    title: "Long-term Partnership",
    description:
      "Beyond go-live — monitoring, observability, and continuous improvement of every integration.",
    icon: FaUsers,
  },
];

const implementationProcess = [
  {
    title: "Discovery & Assessment",
    description:
      "Understand the systems involved, data flows, business rules, and define integration scope and success criteria.",
    icon: FaSearch,
  },
  {
    title: "Architecture & Design",
    description:
      "Design integration architecture — point-to-point, hub-and-spoke, or iPaaS — aligned to your scale and stack.",
    icon: FaProjectDiagram,
  },
  {
    title: "Development & Configuration",
    description:
      "Develop connectors, mappings, and middleware orchestrations using Azure Logic Apps, custom code, or your platform of choice.",
    icon: FaTools,
  },
  {
    title: "Integration & Data Mapping",
    description:
      "Map data structures, handle transformations, validation rules, and ensure end-to-end data integrity across systems.",
    icon: FaCogs,
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Functional, performance, and failure-mode testing — including retries, dead-letter queues, and edge cases.",
    icon: MdOutlineEngineering,
  },
  {
    title: "Deployment & Support",
    description:
      "Production rollout with monitoring and observability, followed by hypercare and long-term managed support.",
    icon: MdOutlineSupportAgent,
  },
];

export default function Integrations() {
  const navigate = useNavigate();
  const faqs = [
  {
    question: "What types of system integrations do you build?",
    answer: "Impacgo builds REST API and SOAP integrations, EDI/B2B data exchange pipelines, third-party SaaS integrations, real-time bidirectional data sync, and middleware orchestrations using Azure Logic Apps, Service Bus, and iPaaS platforms.",
  },
  {
    question: "Can you integrate Dynamics 365 with other systems?",
    answer: "Yes, we specialise in Microsoft Dynamics 365 integrations with SAP, Salesforce, banking systems, e-commerce platforms, payment gateways, logistics providers, and custom legacy applications. Bidirectional, real-time data sync is our specialty.",
  },
  {
    question: "How long does an integration project take?",
    answer: "Simple API integrations take 2-4 weeks. Complex multi-system integrations with custom orchestration, error handling, and data transformation take 6-16 weeks. We follow agile delivery with frequent demos to ensure alignment.",
  },
  {
    question: "Do you provide integration monitoring and support?",
    answer: "Yes, all our integrations include enterprise-grade reliability features — idempotent operations, retry logic, dead-letter queues, audit logging, and 24/7 monitoring. Post go-live managed support is available with SLA-backed response times.",
  },
];

const serviceSchema = createServiceSchema({
  serviceName: "System Integration Services",
  description: "Enterprise system integration services in India. REST API integrations, EDI pipelines, third-party SaaS connections, middleware orchestration with Azure, and ERP integrations.",
  serviceType: "System Integration",
  path: "/services/integrations",
});

const faqSchema = createFaqSchema(faqs);

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Integrations", path: "/services/integrations" },
]);
  return (
    <div>
      <SEO
  title="Microsoft Dynamics Integration Services | D365FO + Third-Party Systems | Global Specialists"
  description="Specialist Microsoft Dynamics 365 integration services worldwide. Connect D365FO with CRM, e-commerce, MES, banking, logistics, and custom systems via Azure Logic Apps, Service Bus, OData, and REST APIs. India and global enterprises."
  keywords="Dynamics 365 integration, D365FO integration partner, Microsoft Dynamics integration consultant, Azure Logic Apps integration, D365 OData integration, D365 REST API, ERP integration partner, D365 middleware, integration India, integration global"
  path="/services/integrations"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>
      <ScrollToTop />
      <Header />
      <PageHero
        gradient="from-teal-900 via-cyan-800 to-blue-900"
        image={supplyChainImg}
        imageAlt="System Integrations"
        title="Integrations & System Connectivity"
        description="We connect ERP, MES, CRM, e-commerce, and third-party platforms with secure, real-time integrations built to scale — bridging legacy systems and modern cloud platforms seamlessly."
        primaryCta={{ label: "Know More", onClick: () => navigate("/contact") }}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          {/* Key Features */}
          <div className="mb-16">
            <Reveal as="h3" className="text-3xl font-bold text-center text-gray-800 mb-8">
              Key Features
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrationFeatures.map((feature, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 flex items-start space-x-4"
                >
                  <div className="flex items-center justify-center bg-blue-50 p-4 rounded-full">
                    <feature.icon className="text-blue-600 text-4xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-blue-700 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-base">
                      {feature.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <Reveal as="h3" className="text-3xl font-bold text-gray-800 text-center mb-8">
              Why Choose Us ?
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrationBenefits.map((benefit, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 flex items-start space-x-6"
                >
                  <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full shadow-lg">
                    <benefit.icon className="text-white text-3xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>

          {/* Implementation Process */}
          <div className="relative py-16 bg-gray-50">
            <Reveal as="h3" className="text-5xl font-semibold text-gray-800 mb-10 text-center tracking-wide uppercase">
              Our Integration Process
            </Reveal>

            <div className="relative flex flex-col items-center">
              {/* Vertical Line */}
              <div className="absolute w-1 bg-gradient-to-t from-blue-600 to-indigo-500 h-full left-1/2 transform -translate-x-1/2 z-0 rounded-lg"></div>

              {/* Steps */}
              {implementationProcess.map((step, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className={`relative flex items-center w-full md:w-3/4 mb-12 ${
                    index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Content Box */}
                  <div
                    className={`bg-white/70 backdrop-blur-xl border border-white/60 p-8 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 z-10 ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    } w-full sm:w-3/4 md:w-1/2`}
                  >
                    <h4 className="text-2xl font-semibold text-blue-700 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon and Subline */}
                  <div className="w-1/12 flex flex-col items-center z-10 relative">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform hover:scale-110">
                      <step.icon className="text-white text-3xl" />
                    </div>
                    {index !== implementationProcess.length - 1 && (
                      <div className="h-8 w-1 bg-gradient-to-t from-blue-600 to-indigo-500 mx-auto"></div>
                    )}
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>

          {/* Call-to-Action */}
          <Reveal className="text-center mt-16">
            <p className="text-3xl font-extrabold text-gray-900 mb-8 max-w-2xl mx-auto">
              Ready to connect your systems with secure, scalable integrations?
            </p>
            <button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-5 rounded-lg text-lg font-bold shadow-2xl transform transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Get Started
            </button>
          </Reveal>
        </div>
      </section>

      <ContactCard />
      <Footer />
    </div>
  );
}