import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaBoxes,
  FaBarcode,
  FaWarehouse,
  FaTruck,
  FaChartLine,
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaCogs,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import POSHeader from "../components/POSHeader";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import inventoryImg from "../assets/supplychain.jpg";
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
    title: "Real-Time Stock Tracking",
    description:
      "Live visibility of stock levels across every location, updated the moment a scan or transaction happens.",
    icon: <FaBoxes className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Barcode & QR Scanning",
    description:
      "Fast, accurate stock movement using barcode and QR scanning from any mobile device — no dedicated hardware required.",
    icon: <FaBarcode className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Multi-Warehouse Management",
    description:
      "Manage unlimited warehouses and locations from a single control tower, with per-location stock visibility.",
    icon: <FaWarehouse className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Vendor & Purchase Orders",
    description:
      "Create, track, and reconcile purchase orders end-to-end, with automated reorder points and low-stock alerts.",
    icon: <FaTruck className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Finance & Invoicing",
    description:
      "Stock valuation, cost tracking, and invoicing tied directly to inventory movement for accurate financial reporting.",
    icon: <FaFileInvoiceDollar className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Analytics & Forecasting",
    description:
      "Demand forecasting and analytics dashboards to plan reorders and reduce both stockouts and overstocking.",
    icon: <FaChartLine className="text-blue-600 text-3xl mb-4" />,
  },
];

const benefits = [
  {
    title: "Built for Scale",
    description:
      "From a single storeroom to a multi-warehouse network — the platform scales with your operation.",
    icon: <FaCheckCircle className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Easy to Use",
    description:
      "A field-friendly interface that warehouse staff can pick up in minutes, on any device.",
    icon: <FaRocket className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Highly Configurable",
    description:
      "Adapts to your SKU structure, locations, reorder rules, and reporting needs.",
    icon: <FaCogs className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Trusted Support",
    description:
      "Implementation, training, and ongoing support from Impacgo's dedicated product team.",
    icon: <FaShieldAlt className="text-green-600 text-3xl mb-4" />,
  },
];

export default function InventoryManagement() {
  const navigate = useNavigate();
  const faqs = [
    {
      question: "What does the Inventory Management System (StockLyte) do?",
      answer:
        "StockLyte is a real-time inventory management platform for multi-location businesses. It tracks stock across every warehouse or store, automates reorder points, manages vendors and purchase orders, and provides analytics dashboards for demand forecasting.",
    },
    {
      question: "Is it suitable for businesses with multiple warehouses or stores?",
      answer:
        "Yes, StockLyte is built specifically for multi-location visibility — from a single storeroom to a network of warehouses — with per-location stock levels and transfers between them.",
    },
    {
      question: "Does it integrate with existing systems?",
      answer:
        "Yes, StockLyte supports barcode/QR-based data capture and is designed to fit alongside existing finance and ERP systems rather than requiring a full replacement.",
    },
  ];

  const faqSchema = createFaqSchema(faqs);

  const serviceSchema = createServiceSchema({
    serviceName: "Inventory Management Software",
    description:
      "Real-time, multi-location inventory management software with barcode scanning, purchase orders, and demand forecasting.",
    serviceType: "Inventory Management Software",
    path: "/products/inventory-management",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/#products" },
    { name: "Inventory Management", path: "/products/inventory-management" },
  ]);

  return (
    <div>
      <SEO
        title="Inventory Management System | StockLyte | Global Specialists"
        description="Real-time, multi-location inventory management software. Barcode scanning, automated reorder points, purchase orders, and demand forecasting analytics."
        keywords="inventory management software, stock management system, multi-location inventory, warehouse management, barcode inventory scanning, StockLyte"
        path="/products/inventory-management"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />
      <ScrollToTop />
      <POSHeader />

      <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12">
          {/* Hero */}
          <div className="relative">
            <img
              src={inventoryImg}
              alt="Inventory Management System"
              className="w-full h-96 object-cover bg-white"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-gradient-to-br from-indigo-900/80 to-blue-900/70">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1 rounded-full tracking-widest">
                  IMPACGO PRODUCT
                </span>
                <span className="bg-indigo-400/90 text-indigo-950 text-xs font-bold px-4 py-1 rounded-full tracking-widest">
                  STOCKLYTE
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Inventory Management System
              </h1>
              <p className="text-lg md:text-xl text-white max-w-2xl">
                Real-time, multi-location inventory control — stock tracking,
                purchase orders, barcode scanning, and demand forecasting.
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
              Why Choose StockLyte?
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
              Ready to take control of your inventory? This product is built and
              run as{" "}
              <span className="font-semibold text-indigo-700">STOCKLYTE</span>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300"
                onClick={() => navigate("/contact")}
              >
                Request a Demo
              </button>
              <button
                className="border-2 border-indigo-600 text-indigo-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition duration-300"
                onClick={() => navigate("/stocklyte")}
              >
                View StockLyte Landing Page
              </button>
              <a
                href="https://stocklyte.impacgo.com/"
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
