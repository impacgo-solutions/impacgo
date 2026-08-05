import {
  FaProjectDiagram,
  FaRoute,
  FaSearchPlus,
  FaPeopleArrows,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaUsers,
  FaCheckCircle,
  FaRocket,
  FaShieldAlt,
  FaHandshake,
  FaSearch,
  FaCogs,
  FaTools,
} from "react-icons/fa";
import { MdOutlineEngineering, MdOutlineSupportAgent } from "react-icons/md";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import financialimg from "../assets/financialimg.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import SEO from "../components/SEO";
import Reveal, { RevealItem } from "../components/Reveal";
import { createServiceSchema, createFaqSchema, createBreadcrumbSchema } from "../components/schemas";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const consultingFeatures = [
  {
    title: "Business Process Analysis & Redesign",
    description:
      "Map current-state processes, identify bottlenecks, and design future-state workflows aligned to your strategy.",
    icon: FaProjectDiagram,
  },
  {
    title: "Technology Roadmap & Architecture",
    description:
      "Multi-year technology roadmaps and target architectures aligned with your business priorities and budget.",
    icon: FaRoute,
  },
  {
    title: "ERP / MES Readiness & Gap Assessment",
    description:
      "Honest assessments of organisational readiness, fit-gap analysis, and risk-managed implementation plans.",
    icon: FaSearchPlus,
  },
  {
    title: "Change Management & User Adoption",
    description:
      "Communication plans, stakeholder engagement, and adoption frameworks that make transformation stick.",
    icon: FaPeopleArrows,
  },
  {
    title: "Training Programmes & Workshops",
    description:
      "Role-based training, train-the-trainer programmes, and hands-on workshops for end users and admins.",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Post Go-live Hypercare",
    description:
      "Dedicated hypercare support, issue triage, and continuous improvement after go-live.",
    icon: FaHandsHelping,
  },
];

const consultingBenefits = [
  {
    title: "19+ Years Experience",
    description:
      "Senior consultants with deep manufacturing, distribution, and services domain experience.",
    icon: FaUsers,
  },
  {
    title: "Outcome-Focused",
    description:
      "Every engagement is anchored to measurable business outcomes — not just deliverables.",
    icon: FaCheckCircle,
  },
  {
    title: "Pragmatic Approach",
    description:
      "We balance ambition with execution reality — what's right for YOUR organisation, not theoretical best practice.",
    icon: FaRocket,
  },
  {
    title: "Trusted Partner",
    description:
      "Long-term relationships built on transparency, honesty, and integrity in every engagement.",
    icon: FaShieldAlt,
  },
  {
    title: "Cross-Industry Insight",
    description:
      "Lessons learned across manufacturing, retail, dairy, and services — applied to accelerate your transformation.",
    icon: FaHandshake,
  },
];

const implementationProcess = [
  {
    title: "Discovery & Stakeholder Engagement",
    description:
      "Engage leadership and key stakeholders, understand business priorities, and define engagement scope and outcomes.",
    icon: FaSearch,
  },
  {
    title: "Current-State Assessment",
    description:
      "Map existing processes, technology landscape, organisational readiness, and identify gaps and quick wins.",
    icon: FaSearchPlus,
  },
  {
    title: "Strategy & Roadmap Design",
    description:
      "Define future-state vision, technology roadmap, target architecture, and a phased transformation plan.",
    icon: FaRoute,
  },
  {
    title: "Execution & Change Management",
    description:
      "Drive execution with structured change management, training programmes, and stakeholder communication.",
    icon: FaCogs,
  },
  {
    title: "Adoption & Validation",
    description:
      "Measure adoption, validate outcomes against KPIs, and refine processes based on real-world feedback.",
    icon: MdOutlineEngineering,
  },
  {
    title: "Continuous Improvement",
    description:
      "Ongoing advisory, hypercare support, and iterative improvement to sustain transformation gains.",
    icon: MdOutlineSupportAgent,
  },
];

export default function Consulting() {
  const navigate = useNavigate();
  const faqs = [
  {
    question: "What consulting services does Impacgo offer?",
    answer: "Impacgo provides strategic technology consulting including business process analysis and redesign, technology roadmap and architecture planning, ERP/MES readiness and gap assessment, change management, training programmes, and post go-live hypercare support.",
  },
  {
    question: "How experienced are your consultants?",
    answer: "Our senior consultants bring 19+ years of combined experience across manufacturing, distribution, retail, healthcare, and financial services. We have led ERP implementations, digital transformations, and AI adoption journeys across global enterprises.",
  },
  {
    question: "Do you provide change management for digital transformations?",
    answer: "Yes, change management is core to every consulting engagement. We design stakeholder communication plans, role-based training programmes, adoption frameworks, and ongoing reinforcement to ensure transformations stick and deliver measurable ROI.",
  },
  {
    question: "How do you measure consulting engagement success?",
    answer: "Every consulting engagement is anchored to measurable business outcomes — cost reduction, process efficiency, time-to-market, user adoption rates, ROI metrics. We define success criteria upfront and report progress regularly.",
  },
];

const serviceSchema = createServiceSchema({
  serviceName: "Digital Transformation Consulting",
  description: "Strategic technology and digital transformation consulting in India. Business process redesign, technology roadmap, ERP/MES readiness, change management, and training programmes.",
  serviceType: "Technology Consulting",
  path: "/services/consulting",
});

const faqSchema = createFaqSchema(faqs);

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/#services" },
  { name: "Consulting", path: "/services/consulting" },
]);
  return (
    <div>
      <SEO
  title="Microsoft Dynamics & Digital Transformation Consulting | Global Specialists"
  description="Specialist Microsoft Dynamics 365 and digital transformation consulting worldwide. ERP strategy, technology roadmap, vendor selection, and implementation oversight. India and global enterprises."
  keywords="Microsoft Dynamics consulting, digital transformation consultant, ERP strategy consultant, technology roadmap, ERP vendor selection, Dynamics 365 consulting India, digital transformation India, Microsoft consultant global"
  path="/services/consulting"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>
      <ScrollToTop />
      <Header />
      <PageHero
        gradient="from-slate-900 via-slate-800 to-blue-900"
        image={financialimg}
        imageAlt="Consulting & Digital Transformation"
        title="Consulting & Digital Transformation"
        description="Strategic technology advisory — process redesign, ERP/MES readiness, change management, training, and end-to-end digital transformation journeys backed by 19+ years of domain expertise."
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
              {consultingFeatures.map((feature, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 flex items-start space-x-4"
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
              {consultingBenefits.map((benefit, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 flex items-start space-x-6"
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
              Our Consulting Process
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
                    className={`bg-white/70 backdrop-blur-xl border border-white/60 p-8 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 z-10 ${
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
              Looking for a strategic technology partner to drive your
              transformation?
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