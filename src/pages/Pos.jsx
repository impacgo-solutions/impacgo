
import { FaCheckCircle, FaCloud, FaCode, FaCog, FaSyncAlt, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import POSHeader from '../components/POSHeader';
import maintain from "../assets/maintain.webp";
import posimg from "../assets/posimg.webp"
import ContactCard from "../components/ContactCard";
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

export default function Component() {
  const navigate = useNavigate();
  const faqs = [
  {
    question: "What POS solutions does Impacgo provide?",
    answer: "Impacgo builds custom POS solutions for retail businesses including end-to-end POS application development, business process design, ERP-integrated POS systems, POS migration from legacy systems, and ongoing AMS support.",
  },
  {
    question: "Can your POS integrate with ERP and inventory systems?",
    answer: "Yes, all our POS solutions integrate seamlessly with Microsoft Dynamics 365, our own Impacgo ERP, and other ERP systems for real-time inventory, sales, customer, and financial data sync across retail operations.",
  },
  {
    question: "Do you support multi-store and omnichannel retail?",
    answer: "Yes, our POS solutions support multi-store operations, omnichannel retail with online integration, cloud-based central reporting, and consistent customer experience across physical and digital channels.",
  },
];

const serviceSchema = createServiceSchema({
  serviceName: "POS Solutions",
  description: "Custom POS solutions for retail businesses in India. End-to-end development, ERP integration, and migration services for omnichannel retail operations.",
  serviceType: "POS Software",
  path: "/services/pos",
});

const faqSchema = createFaqSchema(faqs);

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "POS Solutions", path: "/services/pos" },
]);
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <SEO
  title="POS Solutions | Cloud POS & D365 Commerce Integration | Global Specialists"
  description="Specialist POS implementation and D365 Commerce integration worldwide. Cloud POS, modern POS, payment gateway integration, and retail operations. India and global retailers."
  keywords="POS solutions, cloud POS partner, D365 Commerce POS, modern POS implementation, retail POS partner, POS partner India, POS implementation global"
  path="/services/pos"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>
    <ScrollToTop />
      <POSHeader />

      <main className="flex-grow">
        <PageHero
          gradient="from-blue-900 via-indigo-800 to-purple-900"
          image={posimg}
          imageAlt="POS Solutions"
          title="POS Solutions Tailored for Your Retail Business"
          description="At Impacgo, we specialize in delivering comprehensive POS solutions that empower retail businesses to achieve seamless transactions, enhanced customer experience, and streamlined operations. With extensive experience in both custom-built and packaged POS systems, we offer tailored support that aligns perfectly with your operational goals."
          primaryCta={{ label: "Know More", onClick: () => navigate("/contact") }}
        />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <Reveal as="h3" className="text-4xl font-bold text-center text-gray-800 mb-12">Our Expertise in POS</Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <RevealItem index={0} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">Business Process Design</h4>
                <p className="text-lg text-gray-600">We help you define and optimize your retail processes to seamlessly integrate with with Industry Best Practices, ensuring cost savings while they support your operational goals and customer experience initiatives.</p>
              </RevealItem>
              <RevealItem index={1} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">End-to-End Application Development</h4>
                <p className="text-lg text-gray-600">From initial concept, development to deployment, we develop custom POS solutions tailored to your need. Our solutions are built with scalability, performance, and ease of use in mind.</p>
              </RevealItem>
              <RevealItem index={2} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">POS Migration Strategy</h4>
                <p className="text-lg text-gray-600">we offer a smooth transition strategy, ensuring feature enhancements, rigorous testing, and uninterrupted operations during migration from legacy to new POS.</p>
              </RevealItem>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <Reveal as="h3" className="text-4xl font-bold text-center text-gray-800 mb-12">POS Migration Services</Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: <FaChartLine className="h-6 w-6 text-blue-600" />, text: "End-to-end migration planning" },
                { icon: <FaSyncAlt className="h-6 w-6 text-blue-600" />, text: "Feature upgrades and customizations" },
                { icon: <FaCog className="h-6 w-6 text-blue-600" />, text: "Integration with existing retail workflows" },
                { icon: <FaCode className="h-6 w-6 text-blue-600" />, text: "Data migration and performance optimization" },
                { icon: <FaCheckCircle className="h-6 w-6 text-blue-600" />, text: "Continuous support post-migration" },
              ].map((item, index) => (
                <RevealItem key={index} index={index} className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg">
                  {item.icon}
                  <span className="text-lg text-gray-700">{item.text}</span>
                </RevealItem>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <Reveal as="h3" className="text-4xl font-bold text-center text-gray-800 mb-12">Annual Maintenance Support (AMS)</Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-semibold text-gray-700 mb-6">Our AMS services ensure that your POS system stays reliable and up to date:</h4>
                <ul className="space-y-4">
                  {[
                    "Performance Optimization, Troubleshooting",
                    "New Feature Integration",
                    "Proactive monitoring and incident management",
                    "Bug fixes and performance tuning",
                    "Regular updates to keep up with security and compliance standards",
                    "Feature enhancements based on evolving business needs",
                    "Performance monitoring, regular updates, issue resolution.",
                    "Continuous improvements tailored to your business."
                  ].map((item, index) => (
                    <RevealItem key={index} index={index} as="li" className="flex items-center space-x-2">
                      <FaCheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-lg text-gray-600">{item}</span>
                    </RevealItem>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[4/3]">
                <img
                  src={maintain}
                  alt="Annual Maintenance Support"
                  width="800"
                  height="600"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-400 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Reveal as="h3" className="text-4xl font-bold mb-8">Why Choose Us?</Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <RevealItem index={0} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                <FaCode className="h-6 w-6 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-4">Proven Expertise</h4>
                <p className="text-lg">We've worked with industry-leading solutions in custom retail application development.</p>
              </RevealItem>
              <RevealItem index={1} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                <FaCloud className="h-6 w-6 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-4">Scalable Cloud-based Solutions</h4>
                <p className="text-lg">Our solutions are built to grow with your business, leveraging cloud technology.</p>
              </RevealItem>
              <RevealItem index={2} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                <FaShieldAlt className="h-6 w-6 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-4">High Availability & Security</h4>
                <p className="text-lg">We ensure high availability and robust security using cloud capabilities.</p>
              </RevealItem>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg overflow-hidden max-w-2xl aspect-[4/3]">
                <img
                  src={posimg}
                  alt="POS system in retail store"
                  width="800"
                  height="600"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactCard />            
      <Footer />
    </div>
  );
}
