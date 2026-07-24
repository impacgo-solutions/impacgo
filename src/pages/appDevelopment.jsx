import { FaCheckCircle, FaRocket, FaUsers, FaCogs, FaLightbulb } from "react-icons/fa";
import { MdOutlineCampaign, MdOutlineSupportAgent, MdOutlineEngineering } from "react-icons/md";
import POSHeader from "../components/POSHeader";
import CRMHeroSection from "../components/CRMHeroSection";
import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../components/Footer';
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
const crmFeatures = [
  {
    title: "Custom Web Applications",
    description:
      "Design and develop scalable, secure, and high-performance web applications tailored to your business needs.",
    icon: FaUsers,
  },
  {
    title: "Mobile Application Development",
    description:
      "Build native and cross-platform mobile applications that deliver seamless user experiences across devices.",
    icon: FaRocket,
  },
  {
    title: "Cloud-Based Solutions",
    description:
      "Develop cloud-native applications leveraging modern cloud platforms for scalability, reliability, and performance.",
    icon: MdOutlineCampaign,
  },
  {
    title: "ERP & System Integration",
    description:
      "Integrate web and mobile applications with ERP systems and third-party platforms for unified business operations.",
    icon: MdOutlineSupportAgent,
  },
  {
    title: "UI/UX Design",
    description:
      "Create intuitive and user-centric interfaces focused on usability, performance, and visual consistency.",
    icon: MdOutlineEngineering,
  },
  {
    title: "Customization & Enhancements",
    description:
      "Enhance existing applications with new features, performance optimization, and scalable architecture.",
    icon: FaCogs,
  },
];


const crmBenefits = [
  {
    title: "Business-Centric Solutions",
    description:
      "Applications designed to align with business goals, workflows, and operational efficiency.",
    icon: FaLightbulb,
  },
  {
    title: "Scalable Architecture",
    description:
      "Solutions built to scale as your business grows, supporting increased users and data volumes.",
    icon: FaCheckCircle,
  },
  {
    title: "Seamless Integration",
    description:
      "Smooth integration with ERP, cloud services, and third-party tools for unified systems.",
    icon: FaLightbulb,
  },
  {
    title: "Faster Time to Market",
    description:
      "Agile development approach to deliver applications quickly without compromising quality.",
    icon: FaRocket,
  },
  {
    title: "Improved User Experience",
    description:
      "Focus on intuitive design and performance to maximize user adoption and satisfaction.",
    icon: FaUsers,
  },
];


const implementationProcess = [
  {
    title: "Requirement Analysis",
    description:
      "Understand business objectives, user needs, and technical requirements to define the solution scope.",
    icon: FaCheckCircle,
  },
  {
    title: "Solution Design & UI/UX",
    description:
      "Design application architecture and user interfaces aligned with best practices and business goals.",
    icon: FaCogs,
  },
  {
    title: "Development",
    description:
      "Develop web and mobile applications using modern frameworks and scalable technologies.",
    icon: FaUsers,
  },
  {
    title: "Integration",
    description:
      "Integrate applications with ERP systems, APIs, and cloud services for seamless operations.",
    icon: FaCogs,
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Perform rigorous testing to ensure performance, security, and reliability across platforms.",
    icon: MdOutlineEngineering,
  },
  {
    title: "Deployment & Support",
    description:
      "Deploy applications to production and provide ongoing maintenance, enhancements, and support.",
    icon: MdOutlineSupportAgent,
  },
];


export default function AppDevelopment() {
  const navigate = useNavigate();
  const faqs = [
  {
    question: "What types of web and mobile applications does Impacgo build?",
    answer: "Impacgo develops custom web applications using React, Angular, and Vue.js, and mobile apps for iOS and Android using React Native and Flutter. We build everything from customer portals to enterprise dashboards and field service apps integrated with ERP systems.",
  },
  {
    question: "Can your apps integrate with Microsoft Dynamics 365?",
    answer: "Yes, we specialise in building web and mobile applications that integrate seamlessly with Dynamics 365 Finance and Operations, Dynamics 365 CRM, and the Power Platform. We commonly build Power Apps connected to D365FO for shop floor, field service, and approval workflows.",
  },
  {
    question: "How long does it take to build a custom mobile app?",
    answer: "A typical custom mobile app takes 8-16 weeks depending on complexity, number of features, integration requirements, and platforms. Power Apps for D365FO can be delivered in 4-8 weeks. Contact us for a detailed timeline estimate.",
  },
  {
    question: "Do you provide ongoing app support and maintenance?",
    answer: "Yes, Impacgo provides comprehensive Application Management Services (AMS) including continuous monitoring, performance optimisation, security patches, feature enhancements, and 24/7 technical support for all delivered applications.",
  },
];

const serviceSchema = createServiceSchema({
  serviceName: "Web and Mobile Application Development",
  description: "Custom web and mobile application development for enterprises in India. React, Angular, Vue.js, React Native, Flutter, and Power Apps development integrated with Microsoft Dynamics 365.",
  serviceType: "Application Development",
  path: "/services/app-development",
});

const faqSchema = createFaqSchema(faqs);

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "App Development", path: "/services/app-development" },
]);
  return (
    <div> 
      <SEO
  title="Custom App Development | Web · Mobile · Power Apps | Global Specialists"
  description="Custom web, mobile, and Power Apps development services worldwide. React, React Native, .NET, and Microsoft Power Platform. India and global enterprises."
  keywords="custom app development, web app development, mobile app development, Power Apps development, React developer, React Native developer, .NET developer, app development partner India, app development partner global"
  path="/services/app-development"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>
      <ScrollToTop />
    <POSHeader />
    <CRMHeroSection />
    <section className="py-16 bg-gray-50">
    
      <div className="container mx-auto px-6 md:px-12">
        {/* CRM Features */}
        <div className="mb-16">
  <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
    Key Features
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {crmFeatures.map((feature, index) => (
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
          <p className="text-gray-600 text-base">{feature.description}</p>
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
    {crmBenefits.map((benefit, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-start space-x-6"
      >
        <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full shadow-lg">
          <benefit.icon className="text-white text-3xl" />
        </div>
        <div className="ml-4">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h4>
          <p className="text-base text-gray-600 leading-relaxed">{benefit.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>



        {/* Implementation Process */}
        <div className="relative py-16 bg-gray-50">
          <h3 className="text-5xl font-semibold text-gray-800 mb-10 text-center tracking-wide uppercase">
            Web & Mobile Application Development Process
          </h3>

          <div className="relative flex flex-col items-center">
            {/* Vertical Line */}
            <div className="absolute w-1 bg-gradient-to-t from-blue-600 to-indigo-500 h-full left-1/2 transform -translate-x-1/2 z-0 rounded-lg"></div>

            {/* Steps */}
            {implementationProcess.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center w-full md:w-3/4 mb-12 ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Content Box */}
                <div
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 z-10 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  } w-full sm:w-3/4 md:w-1/2`}
                >
                  <h4 className="text-2xl font-semibold text-blue-700 mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>

                {/* Icon and Subline */}
                <div className="w-1/12 flex flex-col items-center z-10 relative">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform hover:scale-110">
                    <step.icon className="text-white text-3xl" />
                  </div>
                  {/* Optional Subline */}
                  {index !== implementationProcess.length - 1 && (
                    <div className="h-8 w-1 bg-gradient-to-t from-blue-600 to-indigo-500 mx-auto"></div>
                  )}
                </div>
                {/* <div className="p-9 text-2xl font-extrabold text-blue-600 m-2">Step {index+1}</div> */}
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <p className="text-3xl font-extrabold text-gray-900 mb-8 max-w-2xl mx-auto">
            Ready to build powerful web and mobile applications for your business?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-5 rounded-lg text-lg font-bold shadow-2xl transform transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700"
          onClick={()=>{navigate('/contact')}}>
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