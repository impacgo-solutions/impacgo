import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaDraftingCompass,
  FaCalculator,
  FaCubes,
  FaChartLine,
  FaSyncAlt,
  FaLightbulb,
  FaRocket,
  FaCheckCircle,
  FaCogs,
  FaShieldAlt,
} from "react-icons/fa";
import POSHeader from "../components/POSHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import constructionImg from "../assets/Construction.webp";
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

const features = [
  {
    title: "Floor Plan Processing",
    description:
      "AI-powered floor plan analysis with automatic section identification, room recognition, and structural mapping.",
    icon: <FaDraftingCompass className="text-orange-600 text-3xl mb-4" />,
  },
  {
    title: "Automated Cost Estimation",
    description:
      "Consolidated cost estimates generated automatically from floor plans — labour, materials, equipment, and overheads.",
    icon: <FaCalculator className="text-orange-600 text-3xl mb-4" />,
  },
  {
    title: "Material Requirement Optimisation",
    description:
      "Calculate exact material requirements with waste optimisation, alternative material suggestions, and bulk-buy strategies.",
    icon: <FaCubes className="text-orange-600 text-3xl mb-4" />,
  },
  {
    title: "Dynamic Timeline & Market Trends",
    description:
      "Live project timelines that adapt to market price trends, supplier lead times, and resource availability.",
    icon: <FaChartLine className="text-orange-600 text-3xl mb-4" />,
  },
  {
    title: "Real-time Impact Analysis",
    description:
      "Instant impact analysis on scope changes — see cost, schedule, and resource implications before committing.",
    icon: <FaSyncAlt className="text-orange-600 text-3xl mb-4" />,
  },
  {
    title: "Data-Driven Insights",
    description:
      "Insights drawn from historical projects and market data — informed decisions at every stage of planning.",
    icon: <FaLightbulb className="text-orange-600 text-3xl mb-4" />,
  },
];

const benefits = [
  {
    title: "Faster Estimates",
    description:
      "Generate estimates in minutes instead of days — free up your senior estimators for higher-value work.",
    icon: <FaRocket className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Higher Accuracy",
    description:
      "AI-driven calculations reduce manual errors and produce more reliable estimates and timelines.",
    icon: <FaCheckCircle className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Adapts to Your Workflow",
    description:
      "Configurable for residential, commercial, and infrastructure projects — flexible to your firm's playbook.",
    icon: <FaCogs className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Risk Reduction",
    description:
      "Catch scope and cost risks early with real-time impact analysis — avoid surprises during execution.",
    icon: <FaShieldAlt className="text-green-600 text-3xl mb-4" />,
  },
];

export default function ConstructionPlanner() {
  const navigate = useNavigate();
  const faqs = [
  {
    question: "What is Construction Planner?",
    answer: "Construction Planner is an AI-powered planning tool for architects and construction teams. It processes floor plans, identifies sections automatically, generates consolidated cost estimates, optimises material requirements, and provides dynamic project timelines with market trend analysis.",
  },
  {
    question: "Is Construction Planner available now?",
    answer: "Construction Planner is currently in active development. Get in touch to join our early access programme and help shape the future of AI-driven construction planning. Early adopters get priority feature input and pricing.",
  },
  {
    question: "How accurate are the AI-generated cost estimates?",
    answer: "Our AI models combine floor plan analysis with current market data and historical project data to produce accurate, location-specific cost estimates. Accuracy improves as the system learns from more projects in your specific market.",
  },
];

const serviceSchema = createServiceSchema({
  serviceName: "Construction Planner — AI-Powered Construction Planning Software",
  description: "AI-powered construction planning software for architects and construction teams. Floor plan analysis, automated cost estimation, material optimisation, and dynamic project timelines.",
  serviceType: "Construction Planning Software",
  path: "/products/construction-planner",
});

const faqSchema = createFaqSchema(faqs);

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Construction Planner", path: "/products/construction-planner" },
]);

  return (
    <div>
      <SEO
  title="Construction Planner Software | Project Management for Construction | Global"
  description="Construction project planning and management software for global construction firms. Project scheduling, resource planning, cost tracking, and progress reporting. India and global construction."
  keywords="construction planner software, construction project management, construction scheduling software, construction India, construction software global, project management construction"
  path="/products/construction-planner"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>
      <ScrollToTop />
      <POSHeader alwaysSolid />
      <div className="pt-16 md:pt-20">
        <Breadcrumbs variant="dark" />
      </div>

      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-6 md:px-12">
          {/* Hero */}
          <div className="relative">
            <img
              src={constructionImg}
              alt="Construction Planner"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-gradient-to-br from-orange-900/80 to-red-900/70">
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest">
                ⚙ IN DEVELOPMENT
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Construction Planner
              </h1>
              <p className="text-lg md:text-xl text-white max-w-2xl">
                AI-powered planning for architects and construction teams —
                floor plan analysis, cost estimation, material optimisation,
                and dynamic timelines.
              </p>
            </div>
          </div>

          {/* In Development Notice */}
          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <p className="text-yellow-800">
              <strong>Coming Soon:</strong> Construction Planner is currently in
              active development. Get in touch to join our early access
              programme and shape the future of AI-driven construction
              planning.
            </p>
          </div>

          {/* Features */}
          <div className="mt-12">
            <Reveal as="h3" className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Planned Capabilities
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((item, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  {item.icon}
                  <h4 className="text-xl font-semibold text-orange-600 mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.description}</p>
                </RevealItem>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-16">
            <Reveal as="h3" className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Why Choose Construction Planner?
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {benefits.map((item, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  {item.icon}
                  <h4 className="text-xl font-semibold text-green-600 mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.description}</p>
                </RevealItem>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Reveal className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Interested in early access?
            </p>
            <button
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300"
              onClick={() => navigate("/contact")}
            >
              Join the Waitlist
            </button>
          </Reveal>
        </div>
      </section>

      <ContactCard />
      <Footer />
    </div>
  );
}