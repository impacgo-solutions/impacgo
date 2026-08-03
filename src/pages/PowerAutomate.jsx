import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaSitemap,
  FaFileInvoice,
  FaPlug,
  FaClock,
  FaCogs,
  FaShieldAlt,
  FaBell,
  FaUserShield,
  FaChartLine,
  FaLifeRing,
  FaCodeBranch,
  FaRobot,
} from "react-icons/fa";
import { Zap, Workflow, GitBranch } from "lucide-react";

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

export default function PowerAutomate() {
  const navigate = useNavigate();

  // ============ SEO Data ============
  const faqs = [
    {
      question: "What is Microsoft Power Automate and what can it automate?",
      answer:
        "Microsoft Power Automate is a workflow automation platform that lets you build automated processes across Microsoft and third-party systems without traditional coding. It can automate approval workflows (purchase orders, leave requests, expense claims), data synchronisation (D365FO to SharePoint, Excel to Teams), document processing (invoice extraction with AI Builder), scheduled tasks (daily reports, alerts), and desktop RPA (legacy system data entry automation). It connects to 500+ Microsoft and third-party systems via pre-built connectors.",
    },
    {
      question: "How long does a Power Automate project take?",
      answer:
        "A single Power Automate flow typically takes 1-3 weeks to design, build, test, and deploy. A complete automation project covering multiple business processes (e.g., 4-6 flows for procurement automation) takes 4-6 weeks. Complex flows involving custom connectors, AI Builder, or desktop RPA can take 6-8 weeks. Impacgo follows an agile sprint model with weekly demos.",
    },
    {
      question: "Can Power Automate replace our existing approval workflows in email?",
      answer:
        "Yes — and this is one of the most common Power Automate use cases for Indian enterprises. We replace email-based approval chains (where POs and expense claims get stuck in inboxes) with structured approval flows in Power Automate. Approvers receive notifications in Teams, Outlook, or mobile, approve with one click, and the system automatically routes to the next approver or pushes the data into D365FO. Full audit trail included.",
    },
    {
      question: "What's the difference between Power Automate cloud flows and desktop flows (RPA)?",
      answer:
        "Cloud flows run in Microsoft's cloud and connect modern API-enabled systems (D365FO, SharePoint, Salesforce, etc.) — fast, scalable, and the default choice for modern automation. Desktop flows (Power Automate Desktop) run on a Windows machine and automate legacy applications that don't have APIs — by simulating clicks, keystrokes, and screen reading. This is true RPA (Robotic Process Automation) and is typically used to bridge gaps between modern Microsoft systems and older non-API legacy systems.",
    },
    {
      question: "Does Power Automate require licensing fees?",
      answer:
        "Microsoft Power Automate has per-user and per-flow licensing options. Some basic flows are included with Microsoft 365 subscriptions you may already have. Premium connectors (like SAP, Oracle, Salesforce) and AI Builder capabilities require Power Automate premium licensing. Impacgo helps you understand the licensing strategy that fits your specific use case — and we optimise flow design to minimise license costs where possible.",
    },
  ];

  const serviceSchema = createServiceSchema({
    serviceName: "Microsoft Power Automate Consulting",
    description:
      "Power Automate workflow automation consulting for Indian enterprises. Build approval workflows, data sync, document automation, and RPA across Dynamics 365, Microsoft 365, and 500+ business systems. Delivered in 2-6 weeks.",
    serviceType: "Workflow Automation Consulting",
    path: "/services/power-automate",
  });

  const faqSchema = createFaqSchema(faqs);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Power Automate Consulting", path: "/services/power-automate" },
  ]);

  // ============ Page Content Data ============
  const keyFeatures = [
    {
      title: "Approval Workflow Automation",
      description:
        "Multi-level approval flows for purchase orders, expense claims, leave requests, contract approvals, and procurement requests — integrated with D365FO and routed to Teams or Outlook with full audit trail.",
      icon: <FaSitemap className="text-cyan-500 text-4xl mb-4" />,
    },
    {
      title: "Document & Invoice Automation",
      description:
        "Combine Power Automate with AI Builder to extract data from PDFs, scanned invoices, purchase orders, and delivery notes. Auto-create entries in D365FO with validation rules and exception handling.",
      icon: <FaFileInvoice className="text-cyan-500 text-4xl mb-4" />,
    },
    {
      title: "Cross-System Data Synchronisation",
      description:
        "Bidirectional data sync between D365FO, SharePoint, Microsoft Teams, Excel, Outlook, and third-party SaaS. Eliminate manual exports, imports, and copy-paste workflows that cost hours every week.",
      icon: <FaPlug className="text-cyan-500 text-4xl mb-4" />,
    },
    {
      title: "Scheduled Flows & Reports",
      description:
        "Automated daily, weekly, or monthly reports — pulled from D365FO, formatted, and emailed or posted to Teams. Daily inventory snapshots, weekly sales summaries, monthly close reminders — without human intervention.",
      icon: <FaClock className="text-cyan-500 text-4xl mb-4" />,
    },
    {
      title: "Notifications, Alerts & Escalations",
      description:
        "Real-time alerts for business events — low inventory, late deliveries, overdue invoices, budget overruns. Smart escalation rules to the right person via Teams, email, or mobile push.",
      icon: <FaBell className="text-cyan-500 text-4xl mb-4" />,
    },
    {
      title: "Desktop RPA for Legacy Systems",
      description:
        "Power Automate Desktop (RPA) to bridge legacy non-API systems with your modern Microsoft stack. Automate data entry, screen scraping, and bulk transactions in old systems that can't be replaced immediately.",
      icon: <FaRobot className="text-cyan-500 text-4xl mb-4" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Microsoft Specialisation",
      description:
        "We work exclusively in the Microsoft Dynamics and Power Platform ecosystem — deeper knowledge of D365FO entities, security, and integration patterns than generalist automation firms.",
      icon: <FaShieldAlt className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "D365FO Workflow Expertise",
      description:
        "We've built dozens of Power Automate flows integrated with Dynamics 365 F&O — from procurement approvals to month-end automation. We know the API surface inside out.",
      icon: <FaUserShield className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Fast Delivery (2-6 Weeks)",
      description:
        "Most Power Automate projects deliver business value within weeks. You see a working flow in sprint 1 — and a complete automation suite in 4-6 weeks.",
      icon: <FaClock className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Production-Grade Flows",
      description:
        "Not 'toy' flows that break with the first edge case. We build with proper error handling, retry logic, alerting, environment management, and ALM in Azure DevOps.",
      icon: <FaCogs className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Custom Connectors",
      description:
        "When the 500+ pre-built connectors aren't enough, we build custom connectors to your legacy ERPs, in-house APIs, and niche SaaS platforms.",
      icon: <FaCodeBranch className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Monitoring & Managed Services",
      description:
        "Post go-live SLA-backed monitoring of every flow. Failed flows get caught and resolved before they impact your business. Continuous improvement and version upgrades under AMS.",
      icon: <FaLifeRing className="text-green-500 text-4xl mb-4" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Process Discovery Workshop",
      description:
        "1-week workshop with the teams that own the manual processes you want to automate. We map current workflows, time spent, error rates, and pain points — and prioritise flows by ROI. Deliverable: process inventory, automation roadmap, and proposal.",
    },
    {
      step: "02",
      title: "Flow Design & Architecture",
      description:
        "We design the flow logic, connector strategy, security model, environment plan (dev / test / production), licensing strategy, and ALM approach. Deliverable: technical design doc and project plan with sprint milestones.",
    },
    {
      step: "03",
      title: "Iterative Flow Development",
      description:
        "Agile sprints of 1-2 weeks each. We build each flow with full error handling, retry logic, and approval routing. End-of-sprint demos let stakeholders test working flows early and provide feedback.",
    },
    {
      step: "04",
      title: "Integration & End-to-End Testing",
      description:
        "Flows tested against your D365FO, SharePoint, Teams, and third-party systems. Happy path testing, edge case testing, exception path testing, and concurrency testing — to catch failures before users see them.",
    },
    {
      step: "05",
      title: "User Training & UAT",
      description:
        "Your business users run real scenarios in UAT. Training programmes for approvers, requesters, and IT admins. Documentation, recorded videos, and live sessions — to ensure smooth adoption from day one.",
    },
    {
      step: "06",
      title: "Go-Live, Monitoring & AMS",
      description:
        "Production deployment with rollback plans. Flow monitoring via Power Automate's admin centre alerts our team if any flow fails. Transition to AMS for ongoing flow optimisation, new flow additions, and license management.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO
  title="Power Automate Consulting Partner | Workflow Automation & RPA | Global Specialists"
  description="Microsoft Power Automate consulting and implementation services worldwide. Approval workflows, document automation, RPA, and Dynamics 365 process automation. Connecting D365, M365, and 500+ business systems. India compliance built in. 4-8 week delivery."
  keywords="Power Automate consultant, workflow automation, RPA implementation, Power Automate D365FO, business process automation, Power Automate developer, Microsoft Power Automate partner, Power Automate India, workflow automation India, RPA India, Power Platform automation"
  path="/services/power-automate"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>

      <ScrollToTop />
      <POSHeader />

      <main className="flex-grow">
        <PageHero
          backgroundStyle="linear-gradient(135deg, #0e7490 0%, #0891b2 35%, #6d28d9 100%)"
          image={financialimg}
          imageAlt="Microsoft Power Automate Consulting"
          eyebrow="Automate Workflows in Days, Not Months"
          eyebrowIcon={Zap}
          title={
            <>
              Power Automate{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-cyan-200 bg-clip-text text-transparent">
                Consulting Partner
              </span>{" "}
              — Global Implementation Partner
            </>
          }
          description="Eliminate manual approvals, email-based handoffs, and repetitive data entry. Build automated workflows connecting Dynamics 365, Microsoft 365, SharePoint, Teams, and 500+ third-party systems — with Power Automate, Microsoft's enterprise workflow automation platform."
          stats={[
            { icon: Zap, label: "Delivery", value: "2-6 weeks" },
            { icon: Workflow, label: "Flow types", value: "Cloud · RPA" },
            { icon: GitBranch, label: "Connectors", value: "500+" },
          ]}
          primaryCta={{ label: "Get a Free Automation Consultation", onClick: () => navigate("/contact") }}
          secondaryCta={{
            label: "See Our Process",
            onClick: () => document.getElementById("powerautomate-process")?.scrollIntoView({ behavior: "smooth" }),
          }}
          panel={
            <HeroPanel
              eyebrow="Common Use Cases"
              title="What Indian enterprises automate with Power Automate"
              items={[
                { icon: Workflow, title: "Purchase order approvals", description: "Multi-level approval flows for D365FO" },
                { icon: GitBranch, title: "Cross-system data sync", description: "D365FO ↔ SharePoint ↔ Teams ↔ third-party SaaS" },
                { icon: Zap, title: "Document & invoice automation", description: "AI Builder + Power Automate for PDFs" },
              ]}
              footnote="Cloud flows, automated flows, scheduled flows, instant flows, and desktop RPA — all natively connected to your Microsoft ecosystem."
            />
          }
        />

        {/* ============ Speed Banner ============ */}
        <section className="bg-cyan-50 border-y-2 border-cyan-200 py-6">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <Zap className="h-8 w-8 text-cyan-600 flex-shrink-0" />
              <p className="text-cyan-900 text-base md:text-lg">
                <span className="font-bold">
                  Most Indian enterprises waste 20-40 hours/week on manual
                  approval chains and copy-paste workflows.
                </span>{" "}
                Power Automate eliminates that work — usually in under 6 weeks.{" "}
                <button
                  onClick={() => navigate("/contact")}
                  className="underline font-semibold hover:text-cyan-700"
                >
                  Start your automation project →
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* ============ Key Features ============ */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-cyan-600 font-semibold mb-2 text-sm">
                What We Automate
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Power Automate Consulting Services
              </h2>
              <p className="text-lg text-gray-600">
                From approval workflows to document automation to RPA —
                automation that connects your entire Microsoft and third-party
                ecosystem.
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

        {/* ============ Why Choose Us ============ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-cyan-600 font-semibold mb-2 text-sm">
                Why Impacgo
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Impacgo for Power Automate?
              </h2>
              <p className="text-lg text-gray-600">
                Microsoft Dynamics and Power Platform specialists with
                production-grade workflow expertise — not a generalist
                automation shop.
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

        {/* ============ Process (zigzag timeline) ============ */}
        <section id="powerautomate-process" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-cyan-600 font-semibold mb-2 text-sm">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Power Automate Project Process
              </h2>
              <p className="text-lg text-gray-600">
                A proven, agile methodology — discovery to go-live to ongoing
                monitoring, in 2-6 weeks.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-200"></div>

              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step circle */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-cyan-600 text-white items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="md:hidden inline-block w-10 h-10 rounded-full bg-cyan-600 text-white font-bold text-sm items-center justify-center mb-3 flex">
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

        {/* ============ FAQ Section ============ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <div className="text-center mb-12">
              <p className="uppercase tracking-widest text-cyan-600 font-semibold mb-2 text-sm">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Power Automate — Frequently Asked Questions
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

        {/* ============ CTA Section ============ */}
        <section className="py-20 bg-gradient-to-br from-cyan-700 via-cyan-600 to-purple-700 text-white">
          <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
            <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-yellow-300 mr-2" />
              <span className="text-sm font-semibold text-yellow-100">
                Free Automation Consultation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Eliminate manual workflows in your business — in weeks, not months
            </h2>
            <p className="text-lg text-cyan-100 mb-8">
              Whether you need to automate purchase order approvals, sync data
              between D365FO and other systems, process invoices with AI, or
              build RPA for legacy systems — we can scope, build, and deploy in
              2-6 weeks. Get a free consultation with our Power Platform team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-cyan-700 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                Request Free Consultation
              </button>
              <button
                onClick={() => navigate("/services/power-apps")}
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Explore Power Apps
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