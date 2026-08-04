import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaCode,
  FaDatabase,
  FaPuzzlePiece,
  FaCodeBranch,
  FaShieldAlt,
  FaTools,
  FaUserShield,
  FaClock,
  FaCogs,
  FaChartLine,
  FaLifeRing,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { Code2, GitBranch, Terminal } from "lucide-react";

import POSHeader from "../components/POSHeader";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import PageHero, { HeroPanel } from "../components/PageHero";
import financialimg from "../assets/financialimg.webp";
import SEO from "../components/SEO";
import {
  createServiceSchema,
  createFaqSchema,
  createBreadcrumbSchema,
} from "../components/schemas";
import Reveal, { RevealItem } from "../components/Reveal";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function D365Development() {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What is X++ and why do D365FO customisations need it?",
      answer:
        "X++ is the proprietary programming language used by Dynamics 365 Finance and Operations (and its predecessor, Dynamics AX). All D365FO customisations — custom forms, business logic, batch jobs, integrations, security rules — are written in X++. While Microsoft offers many no-code/low-code options through Power Platform, deep ERP customisations still require X++ expertise. Impacgo's developers are X++ specialists with years of D365FO and legacy AX experience.",
    },
    {
      question: "What's the difference between extensions and over-layering in D365FO?",
      answer:
        "Over-layering was the customisation model in legacy Dynamics AX where developers modified Microsoft's source code directly. This created upgrade nightmares — every Microsoft update could break custom code. In D365FO, Microsoft enforces an extension-first model: you extend or augment Microsoft's code via hooks and event handlers without modifying it. The result is upgrade-safe customisation. Impacgo builds all D365FO development using extensions, never over-layering — your code survives every D365FO platform update.",
    },
    {
      question: "Do you support Azure DevOps and CI/CD for D365FO?",
      answer:
        "Yes. We set up full ALM (Application Lifecycle Management) for D365FO using Azure DevOps. This includes source control with Git, automated build pipelines, release pipelines for deployment to Tier-2/Tier-3 environments, automated testing, and LCS (Lifecycle Services) integration. Multi-developer teams can work in parallel safely. Code reviews and pull requests are mandatory. No more emailing XPP files between developers.",
    },
    {
      question: "Can you integrate D365FO with our other business systems?",
      answer:
        "Yes. We build D365FO integrations using OData entities, custom services (SOAP/REST), data import/export framework (DIXF), Azure Service Bus, Azure Logic Apps, and direct database APIs where appropriate. Common integrations include CRM systems, e-commerce platforms (Shopify, Magento), banking and payment gateways, logistics partners, MES, IoT, and custom legacy applications. We follow integration patterns that are reliable, monitorable, and recoverable.",
    },
    {
      question: "How do you charge for D365FO development work?",
      answer:
        "We offer two engagement models: (1) Fixed-price for well-defined scope projects (e.g., a specific custom report, a defined integration). (2) Time and materials with a dedicated D365FO developer or developer pod for ongoing development needs. Most clients with continuous customisation needs prefer the dedicated developer model — predictable monthly cost, full team integration, no scope negotiation overhead. Contact us for a detailed proposal.",
    },
  ];

  const serviceSchema = createServiceSchema({
    serviceName: "Microsoft Dynamics 365 Finance & Operations Development",
    description:
      "Specialist D365FO development services in India. X++ extensions, custom forms, integration code, data entities, batch jobs, security policies, and full ALM with Azure DevOps CI/CD. Upgrade-safe, production-grade D365FO development.",
    serviceType: "ERP Development",
    path: "/services/d365-development",
  });

  const faqSchema = createFaqSchema(faqs);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "D365FO Development", path: "/services/d365-development" },
  ]);

  const keyFeatures = [
    {
      title: "X++ Extensions & Customisation",
      description:
        "Custom forms, tables, methods, business logic, validation rules, workflows, and reports. All built using Microsoft's extension-first model — no over-layering, no upgrade risk.",
      icon: <FaCode className="text-blue-600 text-4xl mb-4" />,
    },
    {
      title: "Data Entities & OData",
      description:
        "Custom data entities for integration, import/export, and external system communication. OData endpoint development for real-time data exchange with web and mobile apps.",
      icon: <FaDatabase className="text-blue-600 text-4xl mb-4" />,
    },
    {
      title: "Custom Reports & Analytics",
      description:
        "SSRS reports, paginated Excel exports, electronic reporting (ER), and custom queries. Embedded Power BI reports inside D365FO forms for live operational dashboards.",
      icon: <FaChartLine className="text-blue-600 text-4xl mb-4" />,
    },
    {
      title: "Integration Development",
      description:
        "REST/SOAP services, Azure Service Bus connections, custom integration patterns, file-based imports, and middleware orchestration with Logic Apps or Azure Functions.",
      icon: <FaPuzzlePiece className="text-blue-600 text-4xl mb-4" />,
    },
    {
      title: "Security & Compliance Development",
      description:
        "Custom security roles, duties, privileges, and segregation-of-duties rules. Row-level security policies for sensitive data. Audit trails and compliance frameworks for Indian regulations.",
      icon: <FaShieldAlt className="text-blue-600 text-4xl mb-4" />,
    },
    {
      title: "Batch Jobs & Background Processing",
      description:
        "Custom batch jobs for nightly reconciliation, data archival, integration polling, scheduled reports, and bulk processing. Performance-tuned to run within batch windows.",
      icon: <FaCogs className="text-blue-600 text-4xl mb-4" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Microsoft D365FO Specialisation",
      description:
        "We do D365FO development only — not generic .NET or Java. Deep platform knowledge, current with the latest Microsoft updates and Wave releases.",
      icon: <FaUserShield className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Extension-First, Upgrade-Safe Code",
      description:
        "Every line of code we write follows Microsoft's extension model. Your customisations survive every D365FO platform update without breaking.",
      icon: <FaTools className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Azure DevOps & ALM Discipline",
      description:
        "Git source control, build pipelines, automated tests, code reviews, release management — proper engineering discipline, not cowboy development.",
      icon: <FaCodeBranch className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Legacy AX Experience",
      description:
        "Our team has worked on AX 2009, AX 2012, and D365FO. We understand legacy customisations and can re-architect them for the modern extension model during migration.",
      icon: <FaClock className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Dedicated Developer Model",
      description:
        "Most clients prefer our dedicated D365FO developer engagement — your own X++ developer or pod working as an extension of your team. No scope negotiation overhead.",
      icon: <FaCogs className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Cloud Deployment Expertise",
      description:
        "Full LCS (Lifecycle Services) experience. Tier-2/Tier-3 environment management. Sandbox-to-production deployment via Azure DevOps. No more zip-and-pray deployments.",
      icon: <FaCloudUploadAlt className="text-green-500 text-4xl mb-4" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirements & Technical Scoping",
      description:
        "Detailed requirements workshop with your business and IT stakeholders. We translate business needs into D365FO technical specifications — extensions, data model changes, integrations, security implications. Deliverable: functional design and technical design documents.",
    },
    {
      step: "02",
      title: "Solution Architecture & ALM Setup",
      description:
        "Solution architecture for the customisation — extension models, integration patterns, performance considerations, security design. Azure DevOps repository setup, build pipelines, branching strategy. Deliverable: architecture document and ALM infrastructure ready.",
    },
    {
      step: "03",
      title: "Development in Sprints",
      description:
        "2-week development sprints with weekly demos. Developers work in feature branches with mandatory code reviews. Unit tests for critical business logic. Integration tests for data flows. Deliverable: working customisation incrementally delivered to UAT environment.",
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description:
        "Functional testing, integration testing, performance testing, and user acceptance testing. Regression testing against existing D365FO functionality. Automated test cases added to CI pipeline for ongoing protection.",
    },
    {
      step: "05",
      title: "Deployment & Cutover",
      description:
        "Promotion through Tier-2 → Tier-3 → Production via Azure DevOps and LCS. Deployment runbook with rollback plan. Cutover during agreed maintenance window. Smoke testing immediately post-deployment.",
    },
    {
      step: "06",
      title: "Hypercare & Ongoing AMS",
      description:
        "4-8 week hypercare with daily monitoring and immediate issue response. Knowledge transfer to your team. Transition to ongoing managed services for continuous enhancements, platform update support, and performance tuning.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO
  title="D365FO Development Partner | X++ Developer · Custom Extensions | Global Specialists"
  description="Specialist Microsoft Dynamics 365 Finance & Operations development services worldwide. X++ extensions, custom forms, integrations, data entities, batch jobs, and full Azure DevOps ALM. Upgrade-safe, production-grade D365FO code. India compliance built in. Free consultation."
  keywords="D365FO development, X++ developer, Dynamics 365 customisation, D365 F&O extensions, Dynamics 365 development partner, X++ programmer, D365FO ALM Azure DevOps, D365 integration development, AX developer, D365FO development India, X++ developer India, D365FO global development"
  path="/services/d365-development"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>

      <ScrollToTop />
      <POSHeader />

      <main className="flex-grow">
        <PageHero
          backgroundStyle="linear-gradient(135deg, #0f172a 0%, #1e3a8a 35%, #0891b2 100%)"
          image={financialimg}
          imageAlt="D365FO Development and Customisation"
          eyebrow="X++ Development · Extensions · ALM · CI/CD"
          eyebrowIcon={Code2}
          title={
            <>
              D365FO{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                Development & Customisation
              </span>{" "}
              — Global X++ Specialists
            </>
          }
          description="Specialist Dynamics 365 Finance & Operations development team in India. X++ extensions, custom forms, integration code, data entities, batch jobs, security policies, and full ALM with Azure DevOps CI/CD. Production-grade D365FO code, not throwaway hacks."
          stats={[
            { icon: Terminal, label: "Language", value: "X++ · C#" },
            { icon: GitBranch, label: "ALM", value: "Azure DevOps" },
            { icon: Code2, label: "Model", value: "Extension-first" },
          ]}
          primaryCta={{ label: "Get a Free Development Consultation", onClick: () => navigate("/contact") }}
          secondaryCta={{
            label: "See Our Process",
            onClick: () => document.getElementById("d365dev-process")?.scrollIntoView({ behavior: "smooth" }),
          }}
          panel={
            <HeroPanel
              eyebrow="Development Capabilities"
              title="What our D365FO developers build"
              items={[
                { icon: Code2, title: "X++ extensions & customisations", description: "Forms, tables, methods, business logic" },
                { icon: Terminal, title: "Data entities & integrations", description: "OData, custom services, batch jobs" },
                { icon: GitBranch, title: "ALM & deployment automation", description: "Azure DevOps, LCS, build pipelines" },
              ]}
              footnote="All development follows Microsoft's extension-first model. No over-layering. Upgrade-safe code that survives every D365FO platform update."
            />
          }
        />

        <section className="bg-blue-50 border-y-2 border-blue-200 py-6">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <Code2 className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <p className="text-blue-900 text-base md:text-lg">
                <span className="font-bold">
                  Most D365FO customisations break with every platform update
                  because they over-layer Microsoft code.
                </span>{" "}
                Impacgo builds upgrade-safe extensions that survive every Wave
                release.{" "}
                <button
                  onClick={() => navigate("/contact")}
                  className="underline font-semibold hover:text-blue-700"
                >
                  Talk to our development team →
                </button>
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-blue-600 font-semibold mb-2 text-sm">
                What We Build
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete D365FO Development Services
              </h2>
              <p className="text-lg text-gray-600">
                X++ extensions, custom forms, integrations, data entities,
                reports, batch jobs, security — every type of D365FO
                customisation you need.
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-blue-600 font-semibold mb-2 text-sm">
                Why Impacgo
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Impacgo for D365FO Development?
              </h2>
              <p className="text-lg text-gray-600">
                D365FO development specialists with proper engineering
                discipline — not freelance over-layering.
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

        <section id="d365dev-process" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-blue-600 font-semibold mb-2 text-sm">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                D365FO Development Engagement Process
              </h2>
              <p className="text-lg text-gray-600">
                Requirements to production — agile sprints, code reviews,
                automated builds, hypercare.
              </p>
            </Reveal>

            <div className="relative max-w-4xl mx-auto">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

              {processSteps.map((step, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className={`relative flex flex-col md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <Reveal className="text-center mb-12">
              <p className="uppercase tracking-widest text-blue-600 font-semibold mb-2 text-sm">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                D365FO Development — Frequently Asked Questions
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

        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-700 text-white">
          <Reveal className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
            <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Code2 className="h-4 w-4 text-cyan-200 mr-2" />
              <span className="text-sm font-semibold text-cyan-100">
                Free D365FO Development Consultation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need D365FO X++ development? Talk to specialists, not generalists.
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Whether you need a single custom report, ongoing extension
              development, or a dedicated D365FO developer pod — Impacgo
              brings deep X++ expertise, proper ALM discipline, and
              upgrade-safe code that survives every platform update.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                Request Free Consultation
              </button>
              <button
                onClick={() => navigate("/services/d365")}
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Explore D365FO Implementation
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