import React from "react";
import { FaCog, FaShieldAlt, FaChartLine, FaTools, FaLock, FaCloudUploadAlt, FaHeadset } from "react-icons/fa";
import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import POSHeader from '../components/POSHeader';
import ams from "../assets/ams.webp";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { createServiceSchema, createBreadcrumbSchema } from "../components/schemas";
const amsOfferings = [
  {
    title: "Application Monitoring",
    description:
      "Continuous monitoring to ensure optimal performance and uptime. Proactive identification and resolution of potential issues.",
    icon: <FaChartLine className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Maintenance and Support",
    description:
      "Regular updates and patches to keep your applications current. 24/7 technical support to address any issues promptly.",
    icon: <FaHeadset className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Enhancing application performance to improve user experience. Identifying and resolving bottlenecks to ensure efficiency.",
    icon: <FaCog className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Incident Management",
    description:
      "Swift response to application incidents to minimize downtime. Root cause analysis and preventive measures to avoid recurrence.",
    icon: <FaTools className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Change Management",
    description:
      "Managing application changes and updates seamlessly. Ensuring minimal disruption to your business operations.",
    icon: <FaLock className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Security Management",
    description:
      "Implementing robust security measures to protect your applications. Regular security audits and compliance checks.",
    icon: <FaShieldAlt className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Enhancements and Upgrades",
    description:
      "Developing and implementing new features to meet evolving business needs. Scheduling upgrades to minimize impact on operations.",
    icon: <FaCloudUploadAlt className="text-blue-600 text-3xl mb-4" />,
  },
];

const amsBenefits = [
  {
    title: "Expertise",
    description:
      "Access to specialized knowledge and skills for managing your applications.",
    icon: <FaCog className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Cost Efficiency",
    description:
      "Reduce costs associated with hiring and training internal IT staff.",
    icon: <FaChartLine className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Scalability",
    description: "Easily scale services to match your business growth.",
    icon: <FaCloudUploadAlt className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Reliability",
    description:
      "Ensure your applications are always available and performing optimally.",
    icon: <FaShieldAlt className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Focus",
    description:
      "Free up your internal resources to focus on strategic initiatives.",
    icon: <FaLock className="text-green-600 text-3xl mb-4" />,
  },
]; 

export default function AMS() {
  const navigate = useNavigate();
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
  const serviceSchema = createServiceSchema({
  serviceName: "Application Management Services (AMS)",
  description: "24/7 Application Management Services for Dynamics 365 and enterprise applications in India. Monitoring, support, performance optimisation, security, and ongoing enhancements.",
  serviceType: "Application Management",
  path: "/services/ams",
});
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Application Management Services", path: "/services/ams" },
  ]);
  return (
    <div>
      <SEO
  title="Application Managed Services | Microsoft Dynamics 365 AMS | Global Specialists"
  description="Specialist Application Managed Services (AMS) for Microsoft Dynamics 365 worldwide. SLA-backed support, minor enhancements, performance tuning, and continuous improvement. India and global enterprises."
  keywords="Application Managed Services, AMS partner, D365 managed services, Microsoft Dynamics support, ERP managed services, AMS India, AMS global, Dynamics 365 AMS"
  path="/services/ams"
  schema={[serviceSchema, breadcrumbSchema]}
/>
    <ScrollToTop />
    <POSHeader alwaysSolid />

    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50">
        <img
          src={ams} // Replace with the actual hero image URL
          alt="Dynamics 365 Implementation"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Application Management Services (AMS)
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
          Optimize and maintain your applications with our expert AMS solutions. Focus on your core business activities while we ensure your systems run smoothly and securely.
          </p>
        </div>
      </div>

        {/* AMS Offerings */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center p-5">
            Our AMS Offerings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {amsOfferings.map((offering, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {offering.icon}
                <h4 className="text-xl font-semibold text-blue-600 mb-4">
                  {offering.title}
                </h4>
                <p className="text-gray-700">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AMS Benefits */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Our AMS ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {amsBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {benefit.icon}
                <h4 className="text-xl font-semibold text-green-600 mb-4">
                  {benefit.title}
                </h4>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Ready to enhance your application management?
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
