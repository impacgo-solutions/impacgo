import React from "react";
import { FaIndustry, FaStoreAlt, FaHeartbeat, FaMoneyCheckAlt, FaCar, FaCity, FaProjectDiagram, FaGraduationCap, FaPlug, FaTruck } from "react-icons/fa";

const industries = [
  {
    title: "Manufacturing",
    description:
      "Streamline production processes and improve supply chain management. Enhance inventory control and optimize resource planning.",
    icon: <FaIndustry size={40} color="#4C51BF" />,
  },
  {
    title: "Retail",
    description:
      "Manage end-to-end retail operations, from inventory to customer service. Improve customer experiences with personalized services and insights.",
    icon: <FaStoreAlt size={40} color="#4C51BF" />,
  },
  {
    title: "Healthcare",
    description:
      "Enhance patient care with integrated financial and operational management. Ensure compliance with healthcare regulations and improve resource allocation.",
    icon: <FaHeartbeat size={40} color="#4C51BF" />,
  },
  {
    title: "Financial Services",
    description:
      "Optimize financial operations and improve risk management. Enhance customer engagement with personalized financial services.",
    icon: <FaMoneyCheckAlt size={40} color="#4C51BF" />,
  },
  {
    title: "Automotive",
    description:
      "Manage complex supply chains and improve production efficiency. Enhance dealer management and customer service.",
    icon: <FaCar size={40} color="#4C51BF" />,
  },
  {
    title: "Public Sector",
    description:
      "Streamline government operations and improve public service delivery. Ensure transparency and compliance with regulatory requirements.",
    icon: <FaCity size={40} color="#4C51BF" />,
  },
  {
    title: "Professional Services",
    description:
      "Manage projects, resources, and finances efficiently. Improve client engagement and service delivery.",
    icon: <FaProjectDiagram size={40} color="#4C51BF" />,
  },
  {
    title: "Education",
    description:
      "Manage administrative processes and improve financial planning. Enhance student and faculty experiences with integrated solutions.",
    icon: <FaGraduationCap size={40} color="#4C51BF" />,
  },
  {
    title: "Energy and Utilities",
    description:
      "Optimize asset management and improve operational efficiency. Enhance customer service and ensure regulatory compliance.",
    icon: <FaPlug size={40} color="#4C51BF" />,
  },
  {
    title: "Distribution",
    description:
      "Streamline logistics and improve inventory management. Enhance order processing and customer satisfaction.",
    icon: <FaTruck size={40} color="#4C51BF" />,
  },
];

export default function IndustriesSupported() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Industries Supported by Dynamics 365 Finance and Operations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-white/60 p-8 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 text-blue-600">{industry.icon}</div>
                <h3 className="text-2xl font-semibold text-blue-700">{industry.title}</h3>
              </div>
              <p className="text-gray-600 text-md leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
