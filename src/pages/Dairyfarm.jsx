import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaBoxes,
  FaHeartbeat,
  FaSeedling,
  FaSyncAlt,
  FaFileInvoiceDollar,
  FaChartBar,
  FaCheckCircle,
  FaCogs,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import POSHeader from "../components/POSHeader";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import dairyImg from "../assets/dfms.jpg";
import SEO from "../components/SEO";
import { createServiceSchema, createFaqSchema, createBreadcrumbSchema } from "../components/schemas";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const features = [
  {
    title: "Milk Production Tracking",
    description:
      "Track milk production per animal, per session, and per shift. Detailed yield analytics for every cow and herd.",
    icon: <FaBoxes className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Herd & Health Records",
    description:
      "Complete animal health and veterinary records — vaccinations, treatments, examinations, and medical history.",
    icon: <FaHeartbeat className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Breeding & Reproduction",
    description:
      "Manage breeding cycles, insemination, pregnancy detection, calving events, and lineage records.",
    icon: <FaSyncAlt className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Feed & Nutrition Management",
    description:
      "Feed inventory, ration formulation, daily consumption tracking, and feed cost optimisation.",
    icon: <FaSeedling className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Finance & Sales Invoicing",
    description:
      "Milk sales invoicing, customer ledgers, expense tracking, and farm financial reporting in one place.",
    icon: <FaFileInvoiceDollar className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "KPI Dashboards & Analytics",
    description:
      "Production KPIs, herd performance dashboards, and trend analytics for data-driven farm decisions.",
    icon: <FaChartBar className="text-blue-600 text-3xl mb-4" />,
  },
];

const benefits = [
  {
    title: "Built for Modern Dairy",
    description:
      "Designed from the ground up for the realities of modern dairy operations — small farms to large co-operatives.",
    icon: <FaCheckCircle className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Easy to Use",
    description:
      "Field-friendly interfaces, mobile access, and minimal training — works for farm staff at every skill level.",
    icon: <FaRocket className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Highly Configurable",
    description:
      "Customisable to your breed mix, feeding regimens, milking schedules, and reporting requirements.",
    icon: <FaCogs className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Trusted Support",
    description:
      "Implementation, training, and ongoing support from Impacgo's dedicated dairy product team.",
    icon: <FaShieldAlt className="text-green-600 text-3xl mb-4" />,
  },
];

export default function DairyFarm() {
  const navigate = useNavigate();
  const faqs = [
  {
    question: "What does the Dairy Farm Management System do?",
    answer: "Impacgo's Dairy Farm Management System is a complete digital solution for modern dairy operations. It tracks milk production per animal, manages herd health and veterinary records, breeding cycles, feed inventory, milk sales invoicing, and provides KPI dashboards for data-driven farm decisions.",
  },
  {
    question: "Is the system suitable for small farms and large co-operatives?",
    answer: "Yes, the Dairy Farm Management System scales from small family farms with a handful of cows to large multi-farm co-operatives managing thousands of animals. Configuration adapts to breed mix, feeding regimens, and reporting needs.",
  },
  {
    question: "Does the system work offline in remote farm areas?",
    answer: "Yes, the mobile app supports offline data capture for milking sessions, health events, and breeding records. Data syncs automatically when connectivity is restored, ensuring no information is lost in low-connectivity rural areas.",
  },
];

const faqSchema = createFaqSchema(faqs);

const serviceSchema = createServiceSchema({
  serviceName: "Dairy Farm Management Software",
  description:
    "AI-powered dairy farm management software for herd tracking, milk production, breeding, feed management, and farm analytics.",
  serviceType: "Dairy Farm Management Software",
  path: "/products/dairy-farm-management",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Dairy Farm Management", path: "/products/dairy-farm-management" },
]);

  return (
    
    <div>
      <SEO
  title="Dairy Farm Management System | Cloud Software for Dairy Operations | Global"
  description="Cloud-based dairy farm management system for global dairy operations. Cattle tracking, milk production, breeding, health records, and financial reporting. India and global dairy farms."
  keywords="dairy farm management software, dairy farm system, cattle management software, milk production software, dairy farm cloud, dairy farm India, dairy management global"
  path="/products/dairy-farm"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>
      <ScrollToTop />
      <POSHeader />

      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-6 md:px-12">
          {/* Hero */}
          <div className="relative">
            <img
              src={dairyImg}
              alt="Dairy Farm Management System"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-gradient-to-br from-green-900/80 to-emerald-900/70">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1 rounded-full tracking-widest">
                  IMPACGO PRODUCT
                </span>
                <span className="bg-emerald-400/90 text-emerald-950 text-xs font-bold px-4 py-1 rounded-full tracking-widest">
                  CALVIQ
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Dairy Farm Management System
              </h1>
              <p className="text-lg md:text-xl text-white max-w-2xl">
                Complete farm management for modern dairy operations — milk
                production, herd health, breeding, feed, finance, and
                analytics.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  {item.icon}
                  <h4 className="text-xl font-semibold text-blue-600 mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Why Choose Our Dairy System?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  {item.icon}
                  <h4 className="text-xl font-semibold text-green-600 mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ready to digitise your dairy operations? This product is built and run as{" "}
              <span className="font-semibold text-emerald-700">CALVIQ</span>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300"
                onClick={() => navigate("/calviq/demo")}
              >
                Request a Demo
              </button>
              <button
                className="border-2 border-emerald-600 text-emerald-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition duration-300"
                onClick={() => navigate("/calviq")}
              >
                View Calviq Landing Page
              </button>
              <a
                href="https://calviq.impacgo.com/#/login"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition duration-300"
              >
                Open App / Log In
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCard />
      <Footer />
    </div>
  );
}