import React from "react";
import { FaClipboardList, FaCogs, FaDatabase, FaPlug, FaCheckCircle, FaChalkboardTeacher, FaHandHoldingHeart } from "react-icons/fa";
import Footer from "./Footer";
import POSHeader from "./POSHeader";
import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ContactCard from "../components/ContactCard";
import impl from "../assets/financialimg.jpg";
import SEO from "../components/SEO";
import { createServiceSchema, createBreadcrumbSchema } from "../components/schemas";

const implementationProcess = [
  {
    title: "Project Management",
    description:
      "Comprehensive project planning and management to ensure timely delivery. Regular updates and transparent communication throughout the project lifecycle.",
    icon: <FaClipboardList size={40} color="#4C51BF" />,
  },
  {
    title: "Analysis and Design",
    description:
      "Detailed analysis of your business processes and requirements. Custom solution design to align with your strategic objectives.",
    icon: <FaCogs size={40} color="#4C51BF" />,
  },
  {
    title: "Configuration and Customization",
    description:
      "Configuring D365FO to fit your specific business processes. Customizing features and functionalities to enhance operational efficiency.",
    icon: <FaCogs size={40} color="#4C51BF" />,
  },
  {
    title: "Data Migration",
    description:
      "Secure and accurate migration of your existing data to D365FO. Ensuring data integrity and minimal disruption to your operations.",
    icon: <FaDatabase size={40} color="#4C51BF" />,
  },
  {
    title: "Integration",
    description:
      "Seamless integration with existing systems and third-party applications. Ensuring smooth data flow and interoperability across your organization.",
    icon: <FaPlug size={40} color="#4C51BF" />,
  },
  {
    title: "Testing and Quality Assurance",
    description:
      "Rigorous testing to ensure the solution meets your requirements. Identifying and resolving any issues before go-live.",
    icon: <FaCheckCircle size={40} color="#4C51BF" />,
  },
  {
    title: "Training and Support",
    description:
      "Comprehensive training for your team to maximize the benefits of D365FO. Ongoing support and maintenance to ensure continuous improvement.",
    icon: <FaChalkboardTeacher size={40} color="#4C51BF" />,
  },
];

const benefits = [
  {
    title: "Expertise",
    description:
      "Leverage our extensive experience and knowledge in D365FO implementations.",
    icon: <FaCheckCircle size={40} color="#43A047" />,
  },
  {
    title: "Efficiency",
    description: "Streamline your operations with a tailored ERP solution.",
    icon: <FaCogs size={40} color="#43A047" />,
  },
  {
    title: "Scalability",
    description: "Implement a solution that grows with your business.",
    icon: <FaPlug size={40} color="#43A047" />,
  },
  {
    title: "Support",
    description:
      "Receive continuous support to ensure long-term success.",
    icon: <FaHandHoldingHeart size={40} color="#43A047" />,
  },
];


export default function ImplementationServices() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
  const navigate = useNavigate();
  const serviceSchema = createServiceSchema({
  serviceName: "Dynamics 365 F&O Implementation Services",
  description: "End-to-end Dynamics 365 Finance and Operations implementation services in India — project management, analysis, configuration, data migration, testing, and training.",
  serviceType: "ERP Implementation",
  path: "/services/implementation",
});
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Implementation Services", path: "/services/implementation" },
  ]);
  return (
    <div>
      <SEO
  title="ERP Implementation Services | Microsoft Dynamics 365 & ERPNext | Global Specialists"
  description="Specialist ERP implementation services worldwide. Microsoft Dynamics 365 F&O, ERPNext, and custom ERP deployment for manufacturing, distribution, retail, and services. India compliance built in."
  keywords="ERP implementation services, Microsoft Dynamics implementation, ERPNext implementation, ERP partner, ERP consulting, ERP rollout, ERP implementation India, ERP implementation global"
  path="/services/implementation"
  schema={[serviceSchema, breadcrumbSchema]}
/>
    <ScrollToTop />
    <POSHeader />
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Overview Section */}
        <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50">
        <img
          src={impl} // Replace with the actual hero image URL
          alt="Dynamics 365 Implementation"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dynamics 365 Finance and Operations Implementation
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Empower your business with a tailored ERP solution designed to streamline operations and enhance scalability.
          </p>
        </div>
      </div>

        {/* Implementation Process */}
<div className="relative py-16 bg-gray-50">
  <h3 className="text-5xl font-semibold text-gray-800 mb-10 text-center tracking-wide uppercase">
    Our Implementation Process
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
          <h4 className="text-2xl font-semibold text-blue-700 mb-3">{step.title}</h4>
          <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
        </div>

        {/* Icon and Subline */}
        <div className="flex flex-col items-center z-10 relative p-9">
          <div className="w-12 h-12  text-white rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform hover:scale-110">
            {step.icon}
          </div>
          {/* Optional Step Label */}
          {/* <div className="text-blue-600 font-extrabold text-2xl">Step {index + 1}</div> */}
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Benefits Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Us ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4 text-green-600">{benefit.icon}</div>
                  <h4 className="text-xl font-semibold text-green-600">{benefit.title}</h4>
                </div>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Ready to transform your business with Dynamics 365 Finance and Operations?
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          onClick={()=>{navigate('/contact')}}>
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
    <ContactCard />
    <Footer />
    </div>
  );
}
