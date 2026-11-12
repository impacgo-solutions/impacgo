import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaFileMedical,
  FaUsers,
  FaBrain,
  FaHeartbeat,
  FaQrcode,
  FaMicrophone,
  FaCheckCircle,
  FaShieldAlt,
  FaRocket,
  FaUserMd,
} from "react-icons/fa";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import Reveal, { RevealItem } from "../components/Reveal";
import healthImg from "../assets/healthcare.webp";
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
    title: "Digital Health Vault & OCR",
    description:
      "Scan prescriptions, lab reports and discharge summaries — auto-filed, searchable and always in your pocket.",
    icon: <FaFileMedical className="text-blue-700 text-3xl mb-4" />,
  },
  {
    title: "Family Profiles",
    description:
      "Manage medical records for every family member — parents, kids, grandparents — from one shared account.",
    icon: <FaUsers className="text-blue-700 text-3xl mb-4" />,
  },
  {
    title: "AI Health Insights",
    description:
      "AI-powered risk analysis, health score tracking and personalized recommendations built from your own records.",
    icon: <FaBrain className="text-blue-700 text-3xl mb-4" />,
  },
  {
    title: "Vitals & Medication Tracking",
    description:
      "Log vitals, get medication reminders, and stay on top of appointments without missing a dose.",
    icon: <FaHeartbeat className="text-blue-700 text-3xl mb-4" />,
  },
  {
    title: "Emergency QR Card",
    description:
      "A scannable emergency profile — blood group, allergies and conditions — accessible to first responders in seconds.",
    icon: <FaQrcode className="text-blue-700 text-3xl mb-4" />,
  },
  {
    title: "Voice Health Assistant",
    description:
      "Ask about your records, medications or symptoms with an AI voice assistant, hands-free.",
    icon: <FaMicrophone className="text-blue-700 text-3xl mb-4" />,
  },
];

const benefits = [
  {
    title: "Built for Every Family",
    description:
      "Designed around how real families track health — every generation, one vault — not a single-user app stretched to fit.",
    icon: <FaCheckCircle className="text-teal-600 text-3xl mb-4" />,
  },
  {
    title: "One Vault, Every Record",
    description:
      "No more digging through paper files, old chats or scattered folders — every report lands in the right profile automatically.",
    icon: <FaRocket className="text-teal-600 text-3xl mb-4" />,
  },
  {
    title: "Private & Secure by Design",
    description:
      "Encrypted storage and role-based family sharing mean you decide exactly who sees what, and when.",
    icon: <FaShieldAlt className="text-teal-600 text-3xl mb-4" />,
  },
  {
    title: "Trusted Support",
    description:
      "Onboarding, guidance and ongoing improvements from Impacgo's dedicated product team.",
    icon: <FaUserMd className="text-teal-600 text-3xl mb-4" />,
  },
];

export default function HealthVault() {
  const navigate = useNavigate();
  const faqs = [
    {
      question: "What does HealthVault actually manage?",
      answer:
        "HealthVault is a digital health vault for the whole family. It manages OCR-scanned prescriptions, lab reports and scans, family member profiles, vitals and medication reminders, appointments, an AI health score and risk insights, a nearby-care finder, and a scannable emergency QR profile.",
    },
    {
      question: "Is it for individuals or the whole family?",
      answer:
        "HealthVault is built around family profiles — parents, children and elders can all be managed from one shared account, with role-based access so each member's records stay private to the people who should see them.",
    },
    {
      question: "How does the AI health insight work?",
      answer:
        "It analyzes the records and vitals already stored in your vault to surface a health score, risk indicators and personalized recommendations. It's a decision-support tool to help you and your doctor, not a medical diagnosis.",
    },
    {
      question: "Is my family's health data secure?",
      answer:
        "Yes — records are stored in an encrypted vault, and role-based sharing controls mean you decide exactly who can view or edit each family member's information.",
    },
  ];

  const faqSchema = createFaqSchema(faqs);

  const serviceSchema = createServiceSchema({
    serviceName: "Family Health Records Software",
    description:
      "Digital health vault for the whole family — OCR-scanned records, AI health insights, vitals tracking, and an emergency QR profile.",
    serviceType: "Personal Health Record Management Software",
    path: "/products/health-vault",
  });

  const productSchema = createProductSchema({
    name: "HealthVault — Family Health Records Platform",
    description:
      "Digital health vault for the whole family — OCR-scanned prescriptions and reports, AI health insights, vitals tracking, medication reminders and an emergency QR profile.",
    category: "HealthApplication",
    path: "/products/health-vault",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/#products" },
    { name: "HealthVault", path: "/products/health-vault" },
  ]);

  return (
    <div>
      <SEO
        title="Family Health Records Platform | HealthVault | Global Specialists"
        description="HealthVault digitizes your family's prescriptions, lab reports and scans into one secure vault — with AI health insights, vitals tracking and an emergency QR profile."
        keywords="family health records app, digital health vault, medical records software, health insights AI, emergency QR medical card, HealthVault"
        path="/products/health-vault"
        schema={[serviceSchema, productSchema, faqSchema, breadcrumbSchema]}
      />
      <ScrollToTop />
      <Header alwaysSolid />
      <div className="pt-16 md:pt-20">
        <Breadcrumbs variant="dark" />
      </div>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container mx-auto px-6 md:px-12">
          {/* Hero */}
          <div className="relative">
            <img
              src={healthImg}
              alt="HealthVault Family Health Records Platform"
              className="w-full h-96 object-cover bg-white"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-950/85 to-teal-900/60">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1 rounded-full tracking-widest">
                  IMPACGO PRODUCT
                </span>
                <span className="bg-amber-400/90 text-amber-950 text-xs font-bold px-4 py-1 rounded-full tracking-widest">
                  HEALTHVAULT
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Family Health Records Platform
              </h1>
              <p className="text-lg md:text-xl text-white max-w-2xl">
                One secure digital vault for prescriptions, reports, vitals,
                and your family&apos;s emergency profile.
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
                  className="bg-white/70 backdrop-blur-xl border border-white/60 p-8 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300"
                >
                  {item.icon}
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">
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
              Why Choose HealthVault?
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {benefits.map((item, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white/70 backdrop-blur-xl border border-white/60 p-8 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300"
                >
                  {item.icon}
                  <h4 className="text-xl font-semibold text-teal-600 mb-4">
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
              Ready to give your family one place for every health record? This
              product is built and run as{" "}
              <span className="font-semibold text-blue-700">HEALTHVAULT</span>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                className="bg-gradient-to-r from-blue-700 to-teal-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300"
                onClick={() => navigate("/contact")}
              >
                Request a Demo
              </button>
              <button
                className="border-2 border-blue-700 text-blue-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition duration-300"
                onClick={() => navigate("/healthvault")}
              >
                View HealthVault Landing Page
              </button>
              <button
                className="text-gray-600 font-semibold hover:text-gray-900 underline underline-offset-4 transition-colors duration-300 px-2 py-3"
                onClick={() => navigate("/healthvault/signup")}
              >
                Get Early Access
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCard />
      <Footer />
    </div>
  );
}
