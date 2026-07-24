import {
  FaCalculator,
  FaUsers,
  FaWarehouse,
  FaUserTie,
  FaProjectDiagram,
  FaShoppingCart,
  FaCheckCircle,
  FaCogs,
  FaRocket,
  FaHandHoldingHeart,
  FaSearch,
  FaTools,
  FaDatabase,
  FaPlug,
} from "react-icons/fa";
import { MdOutlineEngineering, MdOutlineSupportAgent } from "react-icons/md";
import POSHeader from "../components/POSHeader";
import ERPNextHeroSection from "../components/ERPNextHeroSection";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import SEO from "../components/SEO";
import { createServiceSchema, createFaqSchema, createBreadcrumbSchema } from "../components/schemas";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const erpnextFeatures = [
  {
    title: "Accounting & Finance",
    description:
      "Complete double-entry accounting, invoicing, multi-currency support, and financial reporting tailored for SMEs.",
    icon: FaCalculator,
  },
  {
    title: "CRM & Sales",
    description:
      "Lead-to-cash management, opportunity tracking, quotations, and sales pipeline visibility for your team.",
    icon: FaUsers,
  },
  {
    title: "Inventory & Warehouse",
    description:
      "Multi-warehouse stock management, batch & serial tracking, stock reconciliation, and reorder automation.",
    icon: FaWarehouse,
  },
  {
    title: "HR & Payroll",
    description:
      "Employee lifecycle, leave & attendance, payroll processing, and statutory compliance management.",
    icon: FaUserTie,
  },
  {
    title: "Project Management",
    description:
      "Project planning, task management, time tracking, and project profitability analysis.",
    icon: FaProjectDiagram,
  },
  {
    title: "E-commerce & POS",
    description:
      "Built-in POS for retail, online storefront, and seamless integration with stock and accounting modules.",
    icon: FaShoppingCart,
  },
];

const erpnextBenefits = [
  {
    title: "Open Source Advantage",
    description:
      "No license fees — invest in implementation and customisation instead of recurring software costs.",
    icon: FaCheckCircle,
  },
  {
    title: "SME-Friendly",
    description:
      "Purpose-built for small and mid-market businesses with rapid go-live timelines.",
    icon: FaRocket,
  },
  {
    title: "Highly Customisable",
    description:
      "Custom doctypes, workflows, and reports tailored exactly to your business processes.",
    icon: FaCogs,
  },
  {
    title: "Ongoing Support",
    description:
      "Implementation, training, and post go-live hypercare from our certified ERPNext team.",
    icon: FaHandHoldingHeart,
  },
  {
    title: "Scalable Platform",
    description:
      "Grows with your business — from a few users to hundreds, single-site to multi-company operations.",
    icon: FaUsers,
  },
];

const implementationProcess = [
  {
    title: "Discovery & Requirements",
    description:
      "Understand your business processes, pain points, and define ERPNext implementation scope and success criteria.",
    icon: FaSearch,
  },
  {
    title: "Solution Design & Fit-Gap Analysis",
    description:
      "Map ERPNext modules to your processes, identify gaps, and design custom doctypes, workflows, and reports.",
    icon: FaProjectDiagram,
  },
  {
    title: "Configuration & Customisation",
    description:
      "Configure modules, build custom doctypes, set up print formats, dashboards, and automations to fit your business.",
    icon: FaTools,
  },
  {
    title: "Data Migration",
    description:
      "Migrate masters and transactions — chart of accounts, items, customers, suppliers — with reconciliation and validation.",
    icon: FaDatabase,
  },
  {
    title: "Integration & Testing",
    description:
      "Integrate with payment gateways, e-commerce, banking, and third-party tools. Comprehensive UAT before go-live.",
    icon: FaPlug,
  },
  {
    title: "Go-Live & Hypercare",
    description:
      "User training, phased rollout, and dedicated post go-live hypercare to ensure smooth adoption and ROI.",
    icon: MdOutlineSupportAgent,
  },
];

export default function ERPNext() {
  const navigate = useNavigate();
  const faqs = [
  {
    question: "What is ERPNext and who is it for?",
    answer: "ERPNext is a complete open-source ERP platform built for small and mid-market businesses. It includes accounting, CRM, inventory, HR, manufacturing, projects, and e-commerce — without license fees. Ideal for SMEs in India looking for a cost-effective integrated ERP.",
  },
  {
    question: "How much does ERPNext implementation cost in India?",
    answer: "ERPNext has no software license fees as it is open source. Implementation costs in India depend on customisation requirements, modules in scope, data migration, and training. Typical SME implementations range from a few lakhs to tens of lakhs depending on scope.",
  },
  {
    question: "How long does ERPNext implementation take?",
    answer: "Standard ERPNext implementation for SMEs takes 8 to 16 weeks. Larger or heavily customised implementations may take 4-6 months. Impacgo follows a phased approach to ensure rapid go-live with minimal disruption.",
  },
  {
    question: "Can ERPNext be customised for our specific business?",
    answer: "Yes, ERPNext is highly customisable. We build custom doctypes, workflows, print formats, dashboards, and reports tailored to your exact business processes. Custom Python modules can also be added for unique requirements.",
  },
];

const serviceSchema = createServiceSchema({
  serviceName: "ERPNext Implementation",
  description: "ERPNext open-source ERP implementation, customisation, and support for small and mid-market businesses in India. Accounting, CRM, inventory, HR, manufacturing, and e-commerce in one platform.",
  serviceType: "ERP Implementation",
  path: "/services/erpnext",
});

const faqSchema = createFaqSchema(faqs);

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "ERPNext", path: "/services/erpnext" },
]);
  return (
    <div>
      <SEO
  title="ERPNext Implementation Partner | Open-Source ERP | Global Specialists"
  description="Specialist ERPNext implementation services worldwide. Open-source ERP for manufacturing, distribution, and services. India compliance (GST, TDS, e-invoicing) built in. Affordable alternative to SAP/Oracle. Free consultation."
  keywords="ERPNext implementation partner, ERPNext consultant, ERPNext India, ERPNext manufacturing, ERPNext distribution, open source ERP partner, ERPNext customisation, ERPNext development, Frappe consultant, ERPNext global"
  path="/services/erpnext"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>
      <ScrollToTop />
      <POSHeader />
      <ERPNextHeroSection />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          {/* Key Features */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {erpnextFeatures.map((feature, index) => (
                <div
                  key={index}
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
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Why Choose Us ?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {erpnextBenefits.map((benefit, index) => (
                <div
                  key={index}
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
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Process */}
          <div className="relative py-16 bg-gray-50">
            <h3 className="text-5xl font-semibold text-gray-800 mb-10 text-center tracking-wide uppercase">
              Our ERPNext Implementation Process
            </h3>

            <div className="relative flex flex-col items-center">
              {/* Vertical Line */}
              <div className="absolute w-1 bg-gradient-to-t from-blue-600 to-indigo-500 h-full left-1/2 transform -translate-x-1/2 z-0 rounded-lg"></div>

              {/* Steps */}
              {implementationProcess.map((step, index) => (
                <div
                  key={index}
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
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-16">
            <p className="text-3xl font-extrabold text-gray-900 mb-8 max-w-2xl mx-auto">
              Ready to launch ERPNext for your growing business?
            </p>
            <button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-5 rounded-lg text-lg font-bold shadow-2xl transform transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <ContactCard />
      <Footer />
    </div>
  );
}