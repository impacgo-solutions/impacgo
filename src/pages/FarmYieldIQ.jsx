import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaMapMarkedAlt,
  FaUsers,
  FaChartLine,
  FaUserTie,
  FaPlaneDeparture,
  FaSeedling,
  FaCheckCircle,
  FaCogs,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import POSHeader from "../components/POSHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import Reveal, { RevealItem } from "../components/Reveal";
import farmYieldImg from "../assets/farmyieldiq-dashboard.webp";
import SEO from "../components/SEO";
import { createServiceSchema, createFaqSchema, createBreadcrumbSchema, createProductSchema } from "../components/schemas";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const features = [
  {
    title: "Layouts, Blocks & Plots",
    description:
      "Manage land layouts and blocks down to individual plots — area, facing, price per sq. ft., payment status, and registration status, all in one ledger.",
    icon: <FaMapMarkedAlt className="text-emerald-700 text-3xl mb-4" />,
  },
  {
    title: "Per-Plot Crop Details",
    description:
      "Optional crop tracking on every plot — crop type and plant count, so plantation-style developments are documented alongside the land itself.",
    icon: <FaSeedling className="text-emerald-700 text-3xl mb-4" />,
  },
  {
    title: "Partner Portfolios",
    description:
      "Every customer's plots, documents and payments in one profile — so partners always see the true status of what they hold.",
    icon: <FaUsers className="text-emerald-700 text-3xl mb-4" />,
  },
  {
    title: "Sales Pipeline",
    description:
      "Leads through to bookings, tracked with your sales hierarchy, team targets and commissions — no deal falls through the cracks.",
    icon: <FaChartLine className="text-emerald-700 text-3xl mb-4" />,
  },
  {
    title: "Employees & Roles",
    description:
      "Role-based staff logins with module-level permissions and reporting hierarchy, matched to how your organisation is actually structured.",
    icon: <FaUserTie className="text-emerald-700 text-3xl mb-4" />,
  },
  {
    title: "Travel Expenses & Documents",
    description:
      "Staff travel-expense claims with an approve/reject/reimburse workflow, plus a central vault for partner certificates, agreements and invoices.",
    icon: <FaPlaneDeparture className="text-emerald-700 text-3xl mb-4" />,
  },
];

const benefits = [
  {
    title: "Built for Plotted-Land Developers",
    description:
      "Designed around how plotted-land developers actually run day-to-day operations — sales, partners and land records — not a generic CRM bolted on.",
    icon: <FaCheckCircle className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "One Dashboard, Every Team",
    description:
      "Admins, sales staff and field employees all work from the same live data, so nothing gets lost between office and farm.",
    icon: <FaRocket className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Role-Based & Configurable",
    description:
      "Access, permissions and workflows adapt to your org chart — from sales associate up to regional leadership.",
    icon: <FaCogs className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Trusted Support",
    description:
      "Implementation, training, and ongoing support from Impacgo's dedicated product team.",
    icon: <FaShieldAlt className="text-green-600 text-3xl mb-4" />,
  },
];

export default function FarmYieldIQ() {
  const navigate = useNavigate();
  const faqs = [
    {
      question: "What does FarmYieldIQ actually manage?",
      answer:
        "FarmYieldIQ is an operations platform for plotted-land businesses. It manages land layouts, blocks and individual plots with pricing, payment and registration status, optional per-plot crop details, partner (customer) portfolios, an internal real-estate sales pipeline, employees, travel expenses, and a shared document vault.",
    },
    {
      question: "Is it for customers/investors, or for internal staff?",
      answer:
        "FarmYieldIQ is an internal admin console used by your own team — sales staff, farm managers and administrators. Partners (your customers) are records managed inside it, so your team always has an accurate view of what each customer holds.",
    },
    {
      question: "Can it track crop details on individual plots?",
      answer:
        "Yes — each plot can carry optional cropping details, such as crop type and plant count, so plantation-style land developments are documented alongside the pricing and registration records.",
    },
    {
      question: "Does it cover my sales team and staff operations too?",
      answer:
        "Yes. Leads, follow-ups and bookings run through a sales pipeline with your team hierarchy and commissions, and employees can submit travel expenses for approval and reimbursement.",
    },
  ];

  const faqSchema = createFaqSchema(faqs);

  const serviceSchema = createServiceSchema({
    serviceName: "Farmland Plot Operations Software",
    description:
      "Operations platform for plotted-land businesses — layout, block and plot management, partner portfolios, and an internal sales pipeline.",
    serviceType: "Agricultural Real Estate Management Software",
    path: "/products/farm-yield-iq",
  });

  const productSchema = createProductSchema({
    name: "FarmYieldIQ — Farmland Plot Operations Platform",
    description:
      "Operations platform for plotted-land businesses — layout, block and plot management with pricing and registration tracking, partner portfolios, and an internal real-estate sales pipeline.",
    category: "BusinessApplication",
    path: "/products/farm-yield-iq",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/#products" },
    { name: "FarmYieldIQ", path: "/products/farm-yield-iq" },
  ]);

  return (
    <div>
      <SEO
        title="Farmland Plot Operations Platform | FarmYieldIQ | Global Specialists"
        description="FarmYieldIQ manages land layouts, blocks and plots, partner portfolios and an internal sales pipeline — all from one operations dashboard."
        keywords="farmland management software, plot management system, agri real estate software, land layout management, sales pipeline CRM, FarmYieldIQ"
        path="/products/farm-yield-iq"
        schema={[serviceSchema, productSchema, faqSchema, breadcrumbSchema]}
      />
      <ScrollToTop />
      <POSHeader alwaysSolid />
      <div className="pt-16 md:pt-20">
        <Breadcrumbs variant="dark" />
      </div>

      <section className="py-16 bg-gradient-to-r from-emerald-50 to-amber-50">
        <div className="container mx-auto px-6 md:px-12">
          {/* Hero */}
          <div className="relative">
            <img
              src={farmYieldImg}
              alt="FarmYieldIQ Operations Platform"
              className="w-full h-96 object-cover bg-white"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-gradient-to-br from-emerald-950/85 to-amber-900/60">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1 rounded-full tracking-widest">
                  IMPACGO PRODUCT
                </span>
                <span className="bg-amber-400/90 text-amber-950 text-xs font-bold px-4 py-1 rounded-full tracking-widest">
                  FARMYIELDIQ
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Farmland Plot Operations Platform
              </h1>
              <p className="text-lg md:text-xl text-white max-w-2xl">
                One dashboard for land layouts, plots, partner portfolios,
                and your internal sales team.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12">
            <Reveal as="h3" className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Key Features
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((item, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  {item.icon}
                  <h4 className="text-xl font-semibold text-emerald-700 mb-4">
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
              Why Choose FarmYieldIQ?
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
              Ready to run your land, plots and sales team from one place? This
              product is built and run as{" "}
              <span className="font-semibold text-emerald-700">FARMYIELDIQ</span>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                className="bg-gradient-to-r from-emerald-700 to-amber-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300"
                onClick={() => navigate("/contact")}
              >
                Request a Demo
              </button>
              <button
                className="border-2 border-emerald-700 text-emerald-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition duration-300"
                onClick={() => navigate("/farmyieldiq")}
              >
                View FarmYieldIQ Landing Page
              </button>
              <a
                href="https://farmyieldiq.impacgo.com/"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition duration-300"
              >
                Open App / Log In
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCard />
      <Footer />
    </div>
  );
}
