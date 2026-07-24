import React from "react";
import { FaCogs, FaMobileAlt, FaDatabase, FaSyncAlt, FaUsers, FaShieldAlt } from "react-icons/fa";
import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import POSHeader from "../components/POSHeader";
import devp from "../assets/devp.png";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { createServiceSchema, createBreadcrumbSchema } from "../components/schemas";
const services = [
  {
    title: "Custom Development",
    description:
      "Tailor D365FO to meet your unique business requirements. Develop custom modules and functionalities to enhance your ERP capabilities. Utilize modern development tools like Visual Studio and .NET for robust solutions.",
    icon: <FaCogs className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "System Enhancements",
    description:
      "Optimize existing functionalities to improve performance and user experience. Implement new features and updates to keep your system current. Enhance reporting and analytics capabilities for better decision-making.",
    icon: <FaSyncAlt className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Integration Services",
    description:
      "Seamlessly integrate D365FO with other Microsoft products and third-party applications. Ensure smooth data flow and interoperability across your organization. Leverage Power Platform tools for enhanced integration and automation.",
    icon: <FaSyncAlt className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Data Management",
    description:
      "Ensure accurate and secure data migration and management. Implement data entities and management solutions for efficient data handling. Utilize Dataverse and Power BI for advanced data analytics and reporting.",
    icon: <FaDatabase className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Mobile Solutions",
    description:
      "Develop and deploy mobile applications to extend D365FO capabilities. Enable your team to access and manage business processes on the go. Ensure offline capabilities for uninterrupted productivity.",
    icon: <FaMobileAlt className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Support and Maintenance",
    description:
      "Provide ongoing support to ensure your system runs smoothly. Regular maintenance and updates to keep your ERP system optimized. Troubleshoot and resolve any issues promptly to minimize downtime.",
    icon: <FaShieldAlt className="text-blue-600 text-3xl mb-4" />,
  },
];

const benefits = [
  {
    title: "Expertise",
    description:
      "Leverage our extensive experience in D365FO development and enhancements.",
    icon: <FaUsers className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Customization",
    description: "Get a solution tailored to your specific business needs.",
    icon: <FaCogs className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Efficiency",
    description:
      "Improve operational efficiency with optimized and enhanced ERP functionalities.",
    icon: <FaSyncAlt className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Scalability",
    description: "Ensure your ERP system grows with your business.",
    icon: <FaUsers className="text-green-600 text-3xl mb-4" />,
  },
  {
    title: "Support",
    description: "Receive continuous support to maintain and enhance your system.",
    icon: <FaShieldAlt className="text-green-600 text-3xl mb-4" />,
  },
];

export default function DevelopmentServices() {
  const navigate = useNavigate();
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
  const serviceSchema = createServiceSchema({
  serviceName: "Dynamics 365 F&O Development and Enhancement",
  description: "Custom Dynamics 365 F&O development, X++ customisation, system enhancements, integration development, and mobile solutions for D365FO environments.",
  serviceType: "ERP Development",
  path: "/services/development",
});
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Development Services", path: "/services/development" },
  ]);
  return (
    <div>
      <SEO
  title="Software Development Services | Custom ERP & App Development | Global Specialists"
  description="Specialist software development services worldwide. Custom ERP extensions, web apps, mobile apps, Power Apps, and integration development. India and global enterprises."
  keywords="software development services, custom software development, ERP development, web app development, mobile app development, software development India, software development global"
  path="/services/development"
  schema={[serviceSchema, breadcrumbSchema]}
/>
    <ScrollToTop />
    <POSHeader />
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        {/* Overview Section */}
        <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50">
        <img
          src={devp} // Replace with the actual hero image URL
          alt="Dynamics 365 Implementation"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Dynamics 365 Finance and Operations Development and Enhancement Services
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
          Maximize your ERP potential with our expert development and enhancement services. From custom development to system integrations, we are here to meet your business needs.
          </p>
        </div>
      </div>

        {/* Services Section */}
        <div>
          <h3 className="text-4xl font-bold text-gray-800 mb-6 text-center m-5 p-5">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {service.icon}
                <h4 className="text-xl font-semibold text-blue-600 mb-4">
                  {service.title}
                </h4>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
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
            Ready to enhance your Dynamics 365 Finance and Operations system?
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
