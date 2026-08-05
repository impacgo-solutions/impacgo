import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaProjectDiagram,
  FaTasks,
  FaClock,
  FaChartLine,
  FaUserCheck,
  FaShieldAlt,
  FaRocket,
  FaCogs,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import workTaskImg from "../assets/worktask.webp";
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
    title: "Project Creation & Team Assignment",
    description:
      "Create projects, define scopes, and assign consultants and team members with role-based access.",
    icon: <FaProjectDiagram className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Task Management",
    description:
      "Create tasks, track status, manage dependencies, and monitor progress across every project.",
    icon: <FaTasks className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Daily Timesheet & Work Logging",
    description:
      "Simple, fast daily timesheet entry with work session logging — capture every billable minute.",
    icon: <FaClock className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Consultant Utilisation",
    description:
      "Real-time visibility into utilisation rates, billable vs non-billable hours, and capacity planning.",
    icon: <FaChartLine className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Project Reports & Analytics",
    description:
      "Project-wise effort, productivity reports, profitability dashboards, and time-against-budget tracking.",
    icon: <FaChartLine className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Approval Workflows & Audit Trail",
    description:
      "Manager approval workflows, time-entry locking, and full audit trail for compliance and billing accuracy.",
    icon: <FaUserCheck className="text-blue-600 text-3xl mb-4" />,
  },
];

const benefits = [
  {
    title: "Built by Consultants",
    description:
      "Designed by people who actually deliver consulting — every feature solves a real pain point.",
    icon: <FaCheckCircle className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Quick Adoption",
    description:
      "Clean UI, fast time entry, and minimal clicks — your team will actually use it daily.",
    icon: <FaRocket className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Configurable Workflows",
    description:
      "Custom approval chains, billing rules, and project structures tailored to your engagement model.",
    icon: <FaCogs className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Secure & Reliable",
    description:
      "Role-based security, audit logs, and data integrity built for professional services firms.",
    icon: <FaShieldAlt className="text-green-600 text-3xl mb-4" />,
  },
];

export default function WorkTask() {
  const navigate = useNavigate();
  const faqs = [
  {
    question: "Who is the Work Task Application built for?",
    answer: "Work Task is designed for consulting firms, professional services companies, and project-based teams that need to track consultant time, project hours, utilisation, and billable work. Ideal for IT consulting, management consulting, and engineering services firms.",
  },
  {
    question: "Does Work Task support approval workflows?",
    answer: "Yes, Work Task includes configurable manager approval workflows, time-entry locking, and full audit trails for compliance and billing accuracy. Different teams can have different approval chains.",
  },
  {
    question: "Can it integrate with our payroll or billing system?",
    answer: "Yes, Work Task supports API integrations with payroll, accounting, and ERP systems. Approved timesheets can be exported to billing systems for automated invoicing of billable hours.",
  },
];

const serviceSchema = createServiceSchema({
  serviceName: "Work Task Application — Time Tracking Software",
  description: "Project-based time tracking and timesheet software for consultants and professional services teams in India. Project management, task tracking, utilisation reports, and approval workflows.",
  serviceType: "Time Tracking Software",
  path: "/products/work-task",
});

const faqSchema = createFaqSchema(faqs);

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Products", path: "/#products" },
  { name: "Work Task Application", path: "/products/work-task" },
]);

  return (
    <div>
      <SEO
  title="Work Task Management App | Field Service Mobile App | Global"
  description="Mobile work task management app for field service teams worldwide. Task assignment, real-time tracking, photo capture, and reporting. India and global field service operations."
  keywords="work task management app, field service app, task management mobile, field service software India, work order management, mobile task app global"
  path="/products/work-task"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>
      <ScrollToTop />
      <Header alwaysSolid />
      <div className="pt-16 md:pt-20">
        <Breadcrumbs variant="dark" />
      </div>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 md:px-12">
          {/* Hero */}
          <div className="relative">
            <img
              src={workTaskImg}
              alt="Work Task Application"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-900/80 to-indigo-900/70">
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1 rounded-full mb-4 tracking-widest">
                IMPACGO PRODUCT
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Work Task Application
              </h1>
              <p className="text-lg md:text-xl text-white max-w-2xl">
                Project-based time tracking for consultants and employees —
                projects, tasks, timesheets, utilisation, and approvals in one
                tool.
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
                  <h4 className="text-xl font-semibold text-blue-600 mb-4">
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
              Why Choose Work Task?
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {benefits.map((item, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white/70 backdrop-blur-xl border border-white/60 p-8 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300"
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
          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Stop chasing timesheets. Start tracking work that matters.
            </p>
            <button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300"
              onClick={() => navigate("/contact")}
            >
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      <ContactCard />
      <Footer />
    </div>
  );
}