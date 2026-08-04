import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaMobileAlt,
  FaCloud,
  FaPlug,
  FaPaintBrush,
  FaCodeBranch,
  FaShieldAlt,
  FaRocket,
  FaUserShield,
  FaCogs,
  FaClock,
  FaChartLine,
  FaLifeRing,
} from "react-icons/fa";
import { Zap, Smartphone, Layers } from "lucide-react";

import Header from "../components/Header";
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

export default function PowerApps() {
  const navigate = useNavigate();

  // ============ SEO Data ============
  const faqs = [
    {
      question: "What is Microsoft Power Apps and how is it different from custom app development?",
      answer:
        "Microsoft Power Apps is a low-code platform for building custom business applications without writing extensive code. It lets you create both canvas apps (for mobile and tablet-first scenarios) and model-driven apps (for data-heavy business processes). Compared to traditional custom development, Power Apps delivers apps 3-5x faster, integrates seamlessly with Dynamics 365 and Microsoft 365, and is significantly cheaper to maintain over time — making it ideal for extending D365FO with mobile interfaces, automating internal processes, and digitising paper-based workflows.",
    },
    {
      question: "How long does it take to build a Power App?",
      answer:
        "A typical Power App takes 4 to 8 weeks from kickoff to go-live. A simple departmental app (timesheets, approvals, basic inspections) can be delivered in 4 weeks. A complex Power App connected to Dynamics 365 F&O with offline support, role-based security, and custom workflows typically takes 6-8 weeks. Impacgo follows an agile delivery model with weekly demos so you see progress every sprint.",
    },
    {
      question: "Can Power Apps connect to our existing systems like D365FO, SAP, or legacy databases?",
      answer:
        "Yes. Power Apps comes with 500+ pre-built connectors including Microsoft Dynamics 365 F&O, Dynamics 365 CRM, SharePoint, Teams, SQL Server, Oracle, SAP (via OData/REST), Salesforce, and many more. For systems without a standard connector, we build custom connectors using REST APIs. This means your Power App can read and write data to any business system you currently use.",
    },
    {
      question: "Do Power Apps work offline for field workers and shop floor staff?",
      answer:
        "Yes. Canvas Power Apps support offline data capture — perfect for shop floor production reporting, field service inspections, warehouse stocktakes, or remote site visits where connectivity is intermittent. Data syncs automatically when the device comes back online. Impacgo designs offline-first architecture so your field team never loses data due to network issues.",
    },
    {
      question: "What does Power Apps development cost in India?",
      answer:
        "Power Apps development costs vary based on app complexity, number of screens, integrations required, and security requirements. A simple departmental app typically costs significantly less than a custom-developed mobile app. Microsoft Power Apps licensing (per user or per app) is separate. Contact Impacgo for a free consultation and detailed proposal based on your specific use case.",
    },
  ];

  const serviceSchema = createServiceSchema({
    serviceName: "Microsoft Power Apps Development",
    description:
      "Custom Power Apps development for Indian enterprises. Canvas apps and model-driven apps connected to Dynamics 365 F&O, Dataverse, SharePoint, and 500+ business systems. Mobile-first, offline-capable, delivered in 4-8 weeks.",
    serviceType: "Low-Code Application Development",
    path: "/services/power-apps",
  });

  const faqSchema = createFaqSchema(faqs);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Power Apps Development", path: "/services/power-apps" },
  ]);

  // ============ Page Content Data ============
  const keyFeatures = [
    {
      title: "Canvas App Development",
      description:
        "Mobile-first, pixel-perfect apps for shop floor workers, field engineers, and frontline staff. Drag-and-drop UI design with full control over every screen, button, and workflow.",
      icon: <FaMobileAlt className="text-purple-500 text-4xl mb-4" />,
    },
    {
      title: "Model-Driven App Development",
      description:
        "Data-rich business applications built on Dataverse. Ideal for sales pipelines, case management, inventory tracking, and any process where data structure matters more than UI customisation.",
      icon: <FaCloud className="text-purple-500 text-4xl mb-4" />,
    },
    {
      title: "D365 F&O & CRM Integration",
      description:
        "Seamless bidirectional sync with Dynamics 365 Finance and Operations and Dynamics 365 CRM. Read and write data, trigger workflows, and surface ERP data on mobile devices in real-time.",
      icon: <FaPlug className="text-purple-500 text-4xl mb-4" />,
    },
    {
      title: "Custom UI/UX Design",
      description:
        "Apps designed with your brand identity, role-based navigation, and intuitive workflows. Field-tested with end users for high adoption rates from day one.",
      icon: <FaPaintBrush className="text-purple-500 text-4xl mb-4" />,
    },
    {
      title: "Custom Connectors & APIs",
      description:
        "Beyond the 500+ pre-built connectors, we build custom connectors to legacy ERPs, in-house systems, and third-party SaaS platforms that don't ship with native Power Platform integration.",
      icon: <FaCodeBranch className="text-purple-500 text-4xl mb-4" />,
    },
    {
      title: "Security, Governance & ALM",
      description:
        "Role-based access control, data loss prevention (DLP) policies, environment management, and proper application lifecycle management (ALM) using Azure DevOps or GitHub.",
      icon: <FaShieldAlt className="text-purple-500 text-4xl mb-4" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Microsoft Specialisation",
      description:
        "We work exclusively in the Microsoft Dynamics and Power Platform ecosystem — deeper product knowledge than generalist development shops.",
      icon: <FaShieldAlt className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "D365FO Integration Expertise",
      description:
        "We've built dozens of Power Apps that read and write to D365 Finance and Operations. We know the entity APIs, security models, and integration patterns inside out.",
      icon: <FaUserShield className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Fast Delivery (4-8 Weeks)",
      description:
        "Power Apps lets us deliver 3-5x faster than traditional custom development. You see working software in 2 weeks, go-live in 4-8.",
      icon: <FaClock className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Production-Grade Architecture",
      description:
        "Not 'toy' apps. We build with proper ALM, environment strategy, automated testing, and CI/CD using Azure DevOps — apps that scale and stay maintainable.",
      icon: <FaCogs className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Mobile & Offline-Capable",
      description:
        "Field-ready apps designed for low-connectivity environments. Shop floor, warehouse, field service — your team never loses data.",
      icon: <FaChartLine className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Ongoing Support & AMS",
      description:
        "Post go-live support with SLA-backed response times. Minor enhancements, performance tuning, and continuous improvement under managed services.",
      icon: <FaLifeRing className="text-green-500 text-4xl mb-4" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Requirements Workshop",
      description:
        "1-2 week structured workshop with your business stakeholders and end users. We map current processes, identify pain points, define user personas, and prioritise the app's feature scope. Deliverable: documented requirements, wireframes, and a fixed-scope proposal.",
    },
    {
      step: "02",
      title: "Solution Design & Architecture",
      description:
        "We design the data model (in Dataverse or your existing system), security model (role-based access), connector strategy (D365FO, SharePoint, third-party systems), and ALM strategy (dev / test / production environments). Deliverable: technical design document and project plan.",
    },
    {
      step: "03",
      title: "Iterative Development & Weekly Demos",
      description:
        "Agile sprints of 1-2 weeks each. We build screens, workflows, connectors, and security in each sprint. End-of-sprint demos let you provide feedback early and steer the app's direction. No surprises at the end of the project.",
    },
    {
      step: "04",
      title: "Integration & Testing",
      description:
        "Power App connected to your D365FO, CRM, SharePoint, or custom systems. We run end-to-end testing covering happy paths, edge cases, offline scenarios, and security boundaries. Performance testing for load and concurrency.",
    },
    {
      step: "05",
      title: "User Acceptance Testing & Training",
      description:
        "Your end users run real-world scenarios. We capture feedback, fix issues, and finalise the app. Role-based training programmes — written guides, video tutorials, and live sessions — prepare your team for go-live.",
    },
    {
      step: "06",
      title: "Go-Live, Support & Continuous Improvement",
      description:
        "Production deployment with rollback plans. 2-4 weeks of hypercare immediately after go-live to fix any post-launch issues. Transition to ongoing AMS for minor enhancements, performance tuning, and version upgrades.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO
  title="Power Apps Development Partner | Canvas & Model-Driven Apps | Global Power Platform Specialists"
  description="Microsoft Power Apps development services worldwide. Custom canvas and model-driven apps connected to Dynamics 365 F&O. Mobile-ready field apps, shop floor solutions, and approval workflows. Delivered in 4-8 weeks. India compliance built in."
  keywords="Power Apps developer, Power Apps D365FO, canvas app developer, model-driven app developer, Power Apps development partner, Microsoft Power Apps consultant, Power Apps mobile development, Power Apps Microsoft Dynamics, Power Apps developer India, Power Platform development, Power Apps consulting"
  path="/services/power-apps"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>

      <ScrollToTop />
      <Header />

      <main className="flex-grow">
        <PageHero
          backgroundStyle="linear-gradient(135deg, #5b21b6 0%, #6d28d9 35%, #2563eb 100%)"
          image={financialimg}
          imageAlt="Microsoft Power Apps Development"
          eyebrow="Custom Apps in 4-8 Weeks · D365FO Connected"
          eyebrowIcon={Zap}
          title={
            <>
              Power Apps{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-purple-200 bg-clip-text text-transparent">
                Development Partner
              </span>{" "}
              — Global Implementation Partner
            </>
          }
          description="Custom canvas and model-driven Power Apps connected to Microsoft Dynamics 365 F&O, Dataverse, and your business systems. Build mobile-first apps for shop floor, field service, approvals, and inspections — without heavyweight custom development."
          stats={[
            { icon: Zap, label: "Delivery", value: "4-8 weeks" },
            { icon: Smartphone, label: "Platform", value: "Web · Mobile" },
            { icon: Layers, label: "Connected to", value: "D365 · M365" },
          ]}
          primaryCta={{ label: "Get a Free Power Apps Consultation", onClick: () => navigate("/contact") }}
          secondaryCta={{
            label: "See Our Process",
            onClick: () => document.getElementById("powerapps-process")?.scrollIntoView({ behavior: "smooth" }),
          }}
          panel={
            <HeroPanel
              eyebrow="Common Use Cases"
              title="What Indian enterprises build with Power Apps"
              items={[
                { icon: Smartphone, title: "Shop floor mobile apps", description: "Production reporting, quality checks" },
                { icon: Layers, title: "Field service & inspection", description: "Offline-capable for site visits" },
                { icon: Zap, title: "Approval workflow apps", description: "Purchase orders, expense claims" },
              ]}
              footnote="All apps connect to your D365FO, Dataverse, SharePoint, Teams, and 500+ third-party systems via Power Platform connectors."
            />
          }
        />

        {/* ============ Speed Banner ============ */}
        <section className="bg-purple-50 border-y-2 border-purple-200 py-6">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <Zap className="h-8 w-8 text-purple-600 flex-shrink-0" />
              <p className="text-purple-900 text-base md:text-lg">
                <span className="font-bold">
                  Power Apps deliver 3-5x faster than custom development —
                </span>{" "}
                with the same scalability, security, and integration depth.{" "}
                <button
                  onClick={() => navigate("/contact")}
                  className="underline font-semibold hover:text-purple-700"
                >
                  Start your Power Apps project →
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* ============ Key Features ============ */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-purple-600 font-semibold mb-2 text-sm">
                What We Build
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Power Apps Development Services
              </h2>
              <p className="text-lg text-gray-600">
                From mobile-first canvas apps to data-heavy model-driven apps —
                connected to Dynamics 365, Dataverse, and your business systems.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300"
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
              <p className="uppercase tracking-widest text-purple-600 font-semibold mb-2 text-sm">
                Why Impacgo
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Impacgo for Your Power Apps Project?
              </h2>
              <p className="text-lg text-gray-600">
                Microsoft Dynamics and Power Platform specialists with deep
                D365FO integration expertise — not a generalist dev shop.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((benefit, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white/60 backdrop-blur-xl border border-white/50 p-6 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/85 hover:-translate-y-1 transition-all duration-300"
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

        {/* ============ Development Process (zigzag timeline) ============ */}
        <section id="powerapps-process" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-purple-600 font-semibold mb-2 text-sm">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Power Apps Development Process
              </h2>
              <p className="text-lg text-gray-600">
                A proven, agile methodology — discovery to go-live to ongoing
                support, in 4-8 weeks.
              </p>
            </Reveal>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>

              {processSteps.map((step, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className={`relative flex flex-col md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step circle */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-purple-600 text-white items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300">
                      <div className="md:hidden inline-block w-10 h-10 rounded-full bg-purple-600 text-white font-bold text-sm items-center justify-center mb-3 flex">
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
              <p className="uppercase tracking-widest text-purple-600 font-semibold mb-2 text-sm">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Power Apps — Frequently Asked Questions
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
        <section className="py-20 bg-gradient-to-br from-purple-700 via-purple-600 to-blue-700 text-white">
          <Reveal className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
            <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-yellow-300 mr-2" />
              <span className="text-sm font-semibold text-yellow-100">
                Free Power Apps Consultation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Build Your First Power App in 4-8 Weeks
            </h2>
            <p className="text-lg text-purple-100 mb-8">
              Whether you're extending Dynamics 365, replacing paper-based
              processes, or building a mobile app for shop floor or field
              service — we can scope, design, and deliver your Power App in
              weeks, not months. Get a free consultation with our Power
              Platform team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                Request Free Consultation
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