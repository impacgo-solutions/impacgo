import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaIndustry,
  FaListAlt,
  FaCalculator,
  FaClipboardCheck,
  FaBoxes,
  FaMobileAlt,
  FaShieldAlt,
  FaUserShield,
  FaClock,
  FaCogs,
  FaChartLine,
  FaLifeRing,
} from "react-icons/fa";
import { Factory, Cog, Layers } from "lucide-react";

import POSHeader from "../components/POSHeader";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import PageHero, { HeroPanel } from "../components/PageHero";
import manufacturingImg from "../assets/manufacturing.jpg";
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

export default function D365Manufacturing() {
  const navigate = useNavigate();

  // ============ SEO Data ============
  const faqs = [
    {
      question: "Which Dynamics 365 module is best for Indian manufacturers?",
      answer:
        "For most Indian manufacturers, the right product is Microsoft Dynamics 365 Finance and Operations (D365 F&O) — formerly known as Dynamics AX. It includes Production Control, BOM and Routings, Master Planning (MRP/MPS), Quality Management, Warehouse Management, and full Indian compliance (GST, TDS, e-invoicing). It supports discrete manufacturing, process manufacturing (food, chemicals, pharma), and lean manufacturing models. Dynamics 365 Business Central is an option for smaller manufacturers (under 50 users), but most Indian mid-size and enterprise manufacturers will outgrow it within 2-3 years.",
    },
    {
      question: "How long does a D365 manufacturing implementation take in India?",
      answer:
        "A typical D365 F&O manufacturing implementation for a single Indian plant takes 6-9 months from kickoff to go-live. Multi-plant rollouts (3-5 plants) take 9-15 months with a hub-and-spoke deployment model. Heavily customised process manufacturing implementations (formula-based food or chemical with batch tracking, expiration management, and quality regulations) can take 12-18 months. Impacgo follows a phased approach with parallel-run before go-live to minimise plant disruption.",
    },
    {
      question: "Can D365 F&O integrate with our existing MES and shop floor systems?",
      answer:
        "Yes. D365 F&O integrates with most MES platforms (Wonderware, Rockwell, Siemens MES, custom MES) using REST APIs, OData, or middleware like Azure Logic Apps. The most common pattern is bidirectional sync — D365FO sends work orders, BOMs, and routings to the MES; the MES sends back actual production, scrap, downtime, and quality data. This closed-loop integration gives planners and supervisors a single source of truth on production status. Impacgo also builds Power Apps for shop floor operators when the existing MES is being phased out or extended.",
    },
    {
      question: "Does D365 F&O support GST, TDS, and Indian statutory reporting for manufacturers?",
      answer:
        "Yes. D365 F&O has the India localisation pack which includes GST (input, output, IGST, SGST, CGST), TDS, TCS, e-invoicing with IRP integration, e-way bill generation, GSTR-1, GSTR-3B, GSTR-2A reconciliation, and statutory reporting for the Companies Act. For manufacturers specifically, Indian excise (where applicable), job work tracking, and subcontracting workflows are also supported. Impacgo configures these for your specific operations and trains your finance team for month-end and statutory cycles.",
    },
    {
      question: "What does a D365 manufacturing implementation cost in India?",
      answer:
        "Costs vary based on number of plants, transaction volume, level of customisation, integrations required (MES, third-party systems, e-commerce), and chosen partner. Microsoft D365 F&O licensing is separate from implementation services and is based on user count and capacity. Impacgo offers a free Manufacturing Discovery Workshop that delivers a detailed scope, recommended deployment approach, realistic timeline, and budget estimate specific to your manufacturing operations.",
    },
  ];

  const serviceSchema = createServiceSchema({
    serviceName:
      "Microsoft Dynamics 365 Finance & Operations for Manufacturing",
    description:
      "Specialist D365 F&O implementation for Indian manufacturers. Production control, BOM, MRP/MPS, quality management, warehouse, MES integration, and Indian compliance (GST, TDS, e-invoicing). Discrete, process, and lean manufacturing.",
    serviceType: "Manufacturing ERP Implementation",
    path: "/industries/manufacturing",
  });

  const faqSchema = createFaqSchema(faqs);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Manufacturing", path: "/industries/manufacturing" },
  ]);

  // ============ Page Content Data ============
  const keyFeatures = [
    {
      title: "Production Control & Shop Floor",
      description:
        "Work order management, real-time production status, route operations, time and attendance, scrap and downtime tracking. Production supervisors get a live view of every order, every machine, every shift.",
      icon: <FaIndustry className="text-amber-600 text-4xl mb-4" />,
    },
    {
      title: "BOM, Routings & Engineering Change",
      description:
        "Multi-level BOMs, alternate BOMs, phantom items, engineering change orders with effective dates, routing definition with operations, resources, and standard times. Full engineering data ready for MRP.",
      icon: <FaListAlt className="text-amber-600 text-4xl mb-4" />,
    },
    {
      title: "Master Planning — MRP, MPS, Capacity",
      description:
        "Master scheduling (MPS) for finished goods, MRP for raw materials and subassemblies, finite and infinite capacity planning, what-if scenarios, and exception messages. Move from spreadsheet planning to integrated D365FO planning.",
      icon: <FaCalculator className="text-amber-600 text-4xl mb-4" />,
    },
    {
      title: "Quality Management & Compliance",
      description:
        "Quality orders linked to production, test groups and specifications, certificate of analysis, non-conformance tracking, batch and serial traceability — critical for process manufacturing, automotive, food, pharma, and export markets.",
      icon: <FaClipboardCheck className="text-amber-600 text-4xl mb-4" />,
    },
    {
      title: "Warehouse & Inventory Management",
      description:
        "Multi-location inventory, advanced warehouse management with put-away and pick strategies, lot and serial tracking, batch expiration management, FIFO/LIFO/standard costing, and physical inventory cycles.",
      icon: <FaBoxes className="text-amber-600 text-4xl mb-4" />,
    },
    {
      title: "Shop Floor Mobile Apps (Power Apps)",
      description:
        "Custom Power Apps for operators — production reporting, quality inspection, downtime entry, material requests. Offline-capable for low-connectivity shop floors. Embedded directly into D365FO data without barcode complexity.",
      icon: <FaMobileAlt className="text-amber-600 text-4xl mb-4" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Microsoft Manufacturing Specialisation",
      description:
        "We work exclusively in the Microsoft Dynamics ecosystem with manufacturing focus — Production Control, master planning, and shop floor integration are core competencies, not afterthoughts.",
      icon: <FaShieldAlt className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "India Compliance Expertise",
      description:
        "GST, TDS, e-invoicing, e-way bills, statutory reports, Indian payroll, and excise (where applicable) — fully understood, configured, and tested before go-live.",
      icon: <FaUserShield className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "MES & IoT Integration Depth",
      description:
        "We've built integrations with Wonderware, Rockwell, Siemens MES, custom MES platforms, and IoT sensors via Azure IoT Hub. Closed-loop manufacturing is what we do.",
      icon: <FaCogs className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Phased Go-Live Methodology",
      description:
        "Parallel-run before cutover. Plant-by-plant deployment for multi-site rollouts. Rollback plans. Your operations stay live throughout — we don't bet your factory on a big-bang go-live.",
      icon: <FaClock className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Power Platform Bundling",
      description:
        "We extend D365FO with Power Apps for shop floor and quality, Power Automate for approvals and notifications, and Power BI for OEE and production dashboards — at no additional engagement.",
      icon: <FaChartLine className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Post Go-Live Managed Services",
      description:
        "Ongoing AMS support — production support, month-end close support, minor enhancements, performance tuning, and continuous improvement under SLA.",
      icon: <FaLifeRing className="text-green-500 text-4xl mb-4" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Manufacturing Discovery Workshop",
      description:
        "2-3 week workshop with your production, planning, quality, warehouse, and finance teams. We map current manufacturing processes, identify D365FO module fit, scope MES integration, and plan India compliance configuration. Deliverable: detailed scope, timeline, and budget proposal.",
    },
    {
      step: "02",
      title: "Plant Blueprinting & Solution Design",
      description:
        "Detailed solution design covering production model (discrete, process, lean), BOM and routing structure, master planning approach, quality regime, warehouse zones and bin strategy, and integration architecture. Deliverable: functional and technical design documents signed off by stakeholders.",
    },
    {
      step: "03",
      title: "Configuration, Customisation & Integration",
      description:
        "D365FO configured for your operations — legal entity, financial dimensions, production parameters, BOM and routing templates, MRP parameters, quality groups, warehouse setup, and Indian compliance. Custom development for unique requirements. Integrations to MES, IoT, and third-party systems.",
    },
    {
      step: "04",
      title: "Data Migration & Validation",
      description:
        "Master data (items, BOMs, routings, customers, vendors) migrated from legacy systems. Opening balances, open production orders, open purchase orders, and inventory snapshots. Reconciliation reports confirm financial and inventory positions match exactly.",
    },
    {
      step: "05",
      title: "Testing, UAT & Training",
      description:
        "End-to-end testing across production cycle, financial close, and Indian statutory reporting. User acceptance testing with planners, supervisors, quality inspectors, and finance team. Role-based training programmes — for shop floor operators, supervisors, planners, and back-office staff.",
    },
    {
      step: "06",
      title: "Parallel Run, Go-Live & Hypercare",
      description:
        "1-2 month parallel run between legacy system and D365FO. Cutover weekend with final data migration. Go-live day on-site support, immediate issue resolution, and 8-12 week hypercare period to stabilise operations. Transition to AMS for long-term D365FO support.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO
  title="D365 for Manufacturing | Production · BOM · MES Integration | Global Specialists"
  description="Microsoft Dynamics 365 Finance & Operations implementation for global manufacturers. Production control, BOM, MRP/MPS, quality management, warehouse, and MES integration. Discrete, process, and lean manufacturing. India compliance (GST, TDS, e-invoicing) built in. Free discovery workshop."
  keywords="D365 Manufacturing, Dynamics 365 Finance Operations Manufacturing, Microsoft ERP for Manufacturing, D365FO production control, D365 BOM, Manufacturing ERP partner, Microsoft Dynamics Manufacturing implementation, D365 MES integration, D365 process manufacturing, D365 discrete manufacturing, D365 Manufacturing India, Manufacturing ERP India"
  path="/industries/manufacturing"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>

      <ScrollToTop />
      <POSHeader />

      <main className="flex-grow">
        <PageHero
          backgroundStyle="linear-gradient(135deg, #1e293b 0%, #1e3a8a 35%, #b45309 100%)"
          image={manufacturingImg}
          imageAlt="D365 for Manufacturing Implementation"
          eyebrow="Production Control · BOM · MES Integration · Indian Manufacturing"
          eyebrowIcon={Factory}
          title={
            <>
              Dynamics 365 for{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-200 bg-clip-text text-transparent">
                Manufacturing
              </span>{" "}
              — Global Manufacturing Specialists
            </>
          }
          description="Specialist Microsoft Dynamics 365 Finance & Operations implementation for Indian manufacturers. Production control, BOM, MRP, quality management, warehouse, and shop floor — fully integrated with MES, Power Apps, and Power BI. Built for discrete, process, and lean manufacturing."
          stats={[
            { icon: Cog, label: "Go-live", value: "6-9 months" },
            { icon: Factory, label: "Manufacturing", value: "Discrete · Process" },
            { icon: Layers, label: "Integrated", value: "D365 · MES" },
          ]}
          primaryCta={{ label: "Free Manufacturing Discovery Workshop", onClick: () => navigate("/contact") }}
          secondaryCta={{
            label: "See Our Process",
            onClick: () => document.getElementById("d365mfg-process")?.scrollIntoView({ behavior: "smooth" }),
          }}
          panel={
            <HeroPanel
              eyebrow="Manufacturing Capabilities"
              title="What we build on D365FO for Indian manufacturers"
              items={[
                { icon: Factory, title: "Production control & shop floor", description: "Work orders, routings, real-time status" },
                { icon: Cog, title: "BOM & MRP planning", description: "Multi-level BOMs, master planning, MPS" },
                { icon: Layers, title: "MES & IoT integration", description: "Closed-loop with shop floor systems" },
              ]}
              footnote="GST, TDS, e-invoicing, Indian payroll, and statutory reporting baked in. Discrete, process (food & chemicals), and lean manufacturing — all supported."
            />
          }
        />

        {/* ============ Pain-Point Banner ============ */}
        <section className="bg-amber-50 border-y-2 border-amber-200 py-6">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <Factory className="h-8 w-8 text-amber-600 flex-shrink-0" />
              <p className="text-amber-900 text-base md:text-lg">
                <span className="font-bold">
                  Indian manufacturers running on spreadsheets, legacy ERPs, or
                  disconnected MES lose 15-30% of operational visibility.
                </span>{" "}
                D365 F&O closes the gap — production, planning, quality,
                finance in one system.{" "}
                <button
                  onClick={() => navigate("/contact")}
                  className="underline font-semibold hover:text-amber-700"
                >
                  Request a discovery workshop →
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* ============ Key Features ============ */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-amber-600 font-semibold mb-2 text-sm">
                Manufacturing Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete D365 F&O for Indian Manufacturing
              </h2>
              <p className="text-lg text-gray-600">
                Production control to financial close — one integrated system
                covering every operation of your plant.
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
              <p className="uppercase tracking-widest text-amber-600 font-semibold mb-2 text-sm">
                Why Impacgo
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Impacgo for Your Manufacturing Implementation?
              </h2>
              <p className="text-lg text-gray-600">
                Microsoft Dynamics manufacturing specialists with deep India
                compliance and MES integration experience.
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
        <section id="d365mfg-process" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-amber-600 font-semibold mb-2 text-sm">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                D365 Manufacturing Implementation Process
              </h2>
              <p className="text-lg text-gray-600">
                A proven, phased methodology — discovery to go-live to ongoing
                managed services. Parallel-run before cutover. Plant-by-plant
                for multi-site.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>

              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step circle */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-amber-600 text-white items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="md:hidden inline-block w-10 h-10 rounded-full bg-amber-600 text-white font-bold text-sm items-center justify-center mb-3 flex">
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
              <p className="uppercase tracking-widest text-amber-600 font-semibold mb-2 text-sm">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                D365 for Manufacturing — Frequently Asked Questions
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
        <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-amber-700 text-white">
          <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
            <div className="inline-flex items-center bg-amber-500/20 border border-amber-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Factory className="h-4 w-4 text-amber-200 mr-2" />
              <span className="text-sm font-semibold text-amber-100">
                Free Manufacturing Discovery Workshop
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bring your Indian manufacturing operations onto Dynamics 365
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Whether you're moving off legacy AX, replacing spreadsheets and
              disconnected systems, or rolling D365 F&O out to multiple plants
              — Impacgo's Microsoft manufacturing specialists can scope, plan,
              and execute. India compliance, MES integration, and Power
              Platform bundling included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                Request Free Discovery Workshop
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