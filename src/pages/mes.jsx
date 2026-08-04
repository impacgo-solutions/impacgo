import {
  FaCheckCircle,
  FaIndustry,
  FaTasks,
  FaCheckDouble,
  FaChartBar,
  FaClipboardList,
  FaSyncAlt,
  FaUsers,
  FaRocket,
  FaCogs,
  FaShieldAlt,
  FaSearch,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";
import { MdOutlineEngineering, MdOutlineSupportAgent } from "react-icons/md";
import POSHeader from "../components/POSHeader";
import PageHero from "../components/PageHero";
import manufacturingImg from "../assets/manufacturing.webp";
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

const mesFeatures = [
  {
    title: "Real-time Production Floor Monitoring",
    description:
      "Live visibility into shop floor activity, machine status, and production progress for every work centre.",
    icon: FaIndustry,
  },
  {
    title: "Work Order & Job Scheduling",
    description:
      "Efficient work order release, dispatch, sequencing, and dynamic job scheduling across the production floor.",
    icon: FaTasks,
  },
  {
    title: "Quality Control & Traceability",
    description:
      "In-process quality inspection, non-conformance tracking, and full lot/serial traceability across operations.",
    icon: FaCheckDouble,
  },
  {
    title: "OEE — Overall Equipment Effectiveness",
    description:
      "Track Availability, Performance, and Quality in real time. Identify losses and drive continuous improvement.",
    icon: FaChartBar,
  },
  {
    title: "Material & Genealogy Tracking",
    description:
      "Forward and backward traceability of raw materials, batches, and finished goods across the production lifecycle.",
    icon: FaClipboardList,
  },
  {
    title: "ERP-MES Integration",
    description:
      "Closed-loop manufacturing — bidirectional sync between ERP (D365 / ERPNext) and the shop floor MES system.",
    icon: FaSyncAlt,
  },
];

const mesBenefits = [
  {
    title: "Manufacturing Expertise",
    description:
      "Deep domain experience across discrete, process, and hybrid manufacturing environments.",
    icon: FaUsers,
  },
  {
    title: "Rapid Deployment",
    description:
      "Phased MES rollouts that minimise disruption and deliver measurable wins quickly.",
    icon: FaRocket,
  },
  {
    title: "Configurable Solutions",
    description:
      "MES tailored to your work centres, processes, and KPIs — not a rigid one-size-fits-all template.",
    icon: FaCogs,
  },
  {
    title: "Compliance & Audit Ready",
    description:
      "Built-in traceability, audit trails, and reporting for regulated and quality-driven environments.",
    icon: FaShieldAlt,
  },
  {
    title: "Continuous Improvement",
    description:
      "Built-in dashboards and analytics that surface bottlenecks and drive ongoing operational excellence.",
    icon: FaCheckCircle,
  },
];

const implementationProcess = [
  {
    title: "Shop Floor Discovery",
    description:
      "Walk the floor, map work centres, machines, and processes. Define KPIs, traceability needs, and integration scope.",
    icon: FaSearch,
  },
  {
    title: "Solution Architecture & Design",
    description:
      "Design MES architecture aligned to your manufacturing model — discrete, process, or hybrid — and ERP landscape.",
    icon: FaProjectDiagram,
  },
  {
    title: "Configuration & Development",
    description:
      "Configure work order flows, quality plans, OEE metrics, and develop any custom modules required for your operations.",
    icon: FaTools,
  },
  {
    title: "ERP & Equipment Integration",
    description:
      "Bidirectional ERP integration (D365 / ERPNext) and shop floor connectivity — PLCs, scanners, and IoT devices.",
    icon: FaCogs,
  },
  {
    title: "Testing & Pilot Run",
    description:
      "End-to-end testing, pilot production runs, operator training, and validation against quality and traceability requirements.",
    icon: MdOutlineEngineering,
  },
  {
    title: "Go-Live & Hypercare",
    description:
      "Phased plant rollout, dedicated hypercare, and continuous improvement support post go-live.",
    icon: MdOutlineSupportAgent,
  },
];

export default function MES() {
  const navigate = useNavigate();
  const faqs = [
  {
    question: "What is a Manufacturing Execution System (MES)?",
    answer: "A Manufacturing Execution System (MES) connects your shop floor to enterprise systems. It tracks production in real-time, manages work orders, monitors quality, calculates OEE (Overall Equipment Effectiveness), and provides full material traceability for manufacturers.",
  },
  {
    question: "How does MES integrate with my existing ERP?",
    answer: "Impacgo MES integrates bidirectionally with Microsoft Dynamics 365, ERPNext, SAP, and other ERPs via APIs and middleware. This creates closed-loop manufacturing where ERP sends work orders to MES and MES sends production data back to ERP in real-time.",
  },
  {
    question: "How long does MES implementation take?",
    answer: "A typical MES implementation takes 4 to 9 months depending on plant complexity, number of work centres, integration scope, and quality requirements. We use a phased approach starting with pilot work centres before plant-wide rollout.",
  },
  {
    question: "Which industries benefit from MES?",
    answer: "MES delivers value across discrete manufacturing (automotive, electronics), process manufacturing (food, chemicals, pharma), and hybrid manufacturing. Industries with quality, traceability, or OEE concerns see the highest ROI from MES implementation.",
  },
];

const serviceSchema = createServiceSchema({
  serviceName: "Manufacturing Execution System (MES) Implementation",
  description: "MES implementation for Indian manufacturers. Real-time shop floor monitoring, OEE tracking, quality control, work order management, and ERP integration for discrete and process manufacturing.",
  serviceType: "Manufacturing Execution System",
  path: "/services/mes",
});

const faqSchema = createFaqSchema(faqs);

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "MES Implementation", path: "/services/mes" },
]);
  return (
    <div>
      <SEO
  title="Manufacturing Execution Systems (MES) Implementation | D365FO Integration | Global Specialists"
  description="Specialist MES implementation and D365FO integration services worldwide. Shop floor data capture, production tracking, quality management, and OEE dashboards. Integration with Wonderware, Rockwell, Siemens MES, and custom platforms. India and global manufacturers."
  keywords="MES implementation, manufacturing execution systems, MES D365FO integration, shop floor data capture, OEE dashboard, MES consultant, Wonderware integration, Rockwell MES integration, MES India, MES partner global, smart factory implementation"
  path="/services/mes"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>
      <ScrollToTop />
      <POSHeader />
      <PageHero
        gradient="from-slate-900 via-slate-800 to-amber-900"
        image={manufacturingImg}
        imageAlt="Manufacturing Execution Systems"
        title="Manufacturing Execution Systems (MES)"
        description="Connect your shop floor to the top floor with real-time production visibility, OEE tracking, quality control, and closed-loop ERP integration — built for modern manufacturers."
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
              {mesFeatures.map((feature, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-start space-x-4"
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
              {mesBenefits.map((benefit, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-start space-x-6"
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
              Our MES Implementation Process
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
                    className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 z-10 ${
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
              Ready to digitise your shop floor and unlock real-time
              manufacturing intelligence?
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