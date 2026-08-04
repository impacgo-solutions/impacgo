import {
  FaCheckCircle,
  FaRobot,
  FaBrain,
  FaCommentDots,
  FaEye,
  FaChartLine,
  FaDatabase,
  FaUsers, 
  FaRocket,
  FaShieldAlt,
  FaSearch,
   
  FaProjectDiagram,
  FaCogs,
  FaTools,
} from "react-icons/fa";
import { MdOutlineEngineering, MdOutlineSupportAgent } from "react-icons/md";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import manufacturingImg from "../assets/manufacturing.webp";
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

const aiFeatures = [
  {
    title: "Intelligent Process Automation",
    description:
      "Automate repetitive workflows across finance, HR, supply chain, and operations using RPA and AI-driven bots.",
    icon: FaRobot,
  },
  {
    title: "AI-Powered Decision Support",
    description:
      "Leverage AI to analyse business data and surface actionable insights for smarter, faster decisions.",
    icon: FaBrain,
  },
  {
    title: "AI Chatbots & Assistants",
    description:
      "Conversational AI for customer support, helpdesks, and field operations — available 24/7 on web & mobile.",
    icon: FaCommentDots,
  },
  {
    title: "Computer Vision",
    description:
      "Visual inspection, defect detection, and document recognition for manufacturing and document processing.",
    icon: FaEye,
  },
  {
    title: "Predictive Analytics",
    description:
      "Turn historical data into insights — sales forecasting, churn prediction, and inventory optimisation.",
    icon: FaChartLine,
  },
  {
    title: "Data Pipelines & AI Integration",
    description:
      "ETL pipelines, data lakes, API integrations, and embedding AI into existing ERP or MES systems.",
    icon: FaDatabase,
  },
];

const aiBenefits = [
  {
    title: "Practical AI",
    description:
      "We focus on AI that delivers real business value — not hype-driven projects without ROI.",
    icon: FaCheckCircle,
  },
  {
    title: "Faster Time to Value",
    description:
      "Quick proofs of concept that validate ideas before committing to full-scale roll-outs.",
    icon: FaRocket,
  },
  {
    title: "Responsible AI",
    description:
      "Privacy, security, and ethical considerations built in from day one of every AI engagement.",
    icon: FaShieldAlt,
  },
  {
    title: "End-to-End Capability",
    description:
      "From data engineering to model deployment to user adoption — one team covers the full lifecycle.",
    icon: FaUsers,
  },
  {
    title: "Domain Expertise",
    description:
      "Cross-industry experience embedding AI into ERP, MES, and operational systems for measurable impact.",
    icon: FaBrain,
  },
];

const implementationProcess = [
  {
    title: "Use Case Discovery",
    description:
      "Identify high-value AI opportunities aligned to your business goals — automation, prediction, vision, or NLP.",
    icon: FaSearch,
  },
  {
    title: "Data Assessment & Strategy",
    description:
      "Evaluate data readiness, define data pipelines, and design the AI architecture aligned to your stack.",
    icon: FaProjectDiagram,
  },
  {
    title: "Proof of Concept",
    description:
      "Rapid PoC to validate feasibility, accuracy, and business value before full-scale investment.",
    icon: FaTools,
  },
  {
    title: "Model Development & Integration",
    description:
      "Build, train, and validate models. Integrate AI into ERP, MES, web/mobile apps, or workflow systems.",
    icon: FaCogs,
  },
  {
    title: "Testing & Validation",
    description:
      "Rigorous testing for accuracy, performance, bias, and edge cases before production deployment.",
    icon: MdOutlineEngineering,
  },
  {
    title: "Deployment & MLOps",
    description:
      "Production deployment with monitoring, retraining pipelines, and ongoing model performance management.",
    icon: MdOutlineSupportAgent,
  },
];

export default function AIAutomation() {
  const navigate = useNavigate();
  const faqs = [
  {
    question: "What AI and automation services does Impacgo provide?",
    answer: "Impacgo delivers intelligent process automation (RPA), AI-powered decision support, AI chatbots and assistants, computer vision for visual inspection and document recognition, predictive analytics, and data pipelines integrated with ERP and MES systems.",
  },
  {
    question: "Can AI be integrated with my existing ERP or business systems?",
    answer: "Yes, we specialise in embedding AI into existing Microsoft Dynamics 365, Impacgo ERP, MES, and other business systems. Common integrations include AI Builder for invoice processing, predictive analytics on D365FO data, and chatbots connected to D365 CRM.",
  },
  {
    question: "How quickly can we see ROI from AI automation?",
    answer: "We follow a rapid proof-of-concept approach. Most clients see measurable ROI from automation projects within 3-6 months. Quick wins like document processing automation and predictive analytics typically deliver value within the first quarter post go-live.",
  },
  {
    question: "Do you provide responsible AI implementations?",
    answer: "Yes, every AI engagement at Impacgo includes privacy, security, ethical, and compliance considerations from day one. We ensure data protection, model explainability, and bias monitoring across all AI deployments.",
  },
];

const serviceSchema = createServiceSchema({
  serviceName: "AI and Automation Solutions",
  description: "AI and intelligent automation services for Indian enterprises. RPA, AI chatbots, predictive analytics, computer vision, and AI integration with ERP and business systems.",
  serviceType: "AI and Automation",
  path: "/services/ai-automation",
});

const faqSchema = createFaqSchema(faqs);

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "AI & Automation", path: "/services/ai-automation" },
]);
  return (
    <div>
      <SEO
  title="AI & Automation Consulting | Microsoft AI Builder · Power Automate · RPA | Global Specialists"
  description="Specialist AI and automation consulting services worldwide. Microsoft AI Builder, Power Automate, RPA, and intelligent document processing. Embedded in Dynamics 365 workflows. India and global enterprises."
  keywords="AI automation consultant, Microsoft AI consultant, RPA implementation, intelligent automation, business process automation, AI consultant India, AI automation partner global, Power Platform AI, Microsoft Copilot integration"
  path="/services/ai-automation"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>
      <ScrollToTop />
      <Header />
      <PageHero
        gradient="from-slate-900 via-purple-900 to-slate-900"
        image={manufacturingImg}
        imageAlt="AI & Automation Solutions"
        title="AI & Automation Solutions"
        description="Intelligent solutions that automate, assist, and amplify your business — from RPA and AI chatbots to computer vision, predictive analytics, and AI-powered decision support embedded into your ERP systems."
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
              {aiFeatures.map((feature, index) => (
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
              {aiBenefits.map((benefit, index) => (
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
              Our AI Implementation Process
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
              Ready to embed AI into your business and unlock new levels of
              efficiency?
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