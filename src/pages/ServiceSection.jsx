import { useNavigate } from 'react-router-dom';
import bgimg from '../assets/posbg.webp'; 
import financial from '../assets/financialimg.webp'
import devep from "../assets/devp.webp"
import ams from "../assets/ams.webp"

function ServiceSection() {
  const services = [
    { 
      name: 'Implementation Services', 
      description: 'Seamless Implementation for Optimal Performance',
      image: financial, // replace with actual image import or URL
      details: 'Implementing Dynamics 365 Finance and Operations (D365FO) can transform your business operations, providing a robust and scalable ERP solution.',
      path: '/services/implementation'
    },
    { 
      name: 'Development Services', 
      description: 'Maximize Your ERP Potential with Expert Development and Enhancements',
      image: devep, // replace with actual image import or URL
      details: 'Our Dynamics 365 Finance and Operations (D365FO) development and enhancement services are designed to help you get the most out of your ERP system',
      path: '/services/development'
    },
    { 
      name: 'AMS (Application Management Services)', 
      description: 'Optimize and Maintain Your Applications with Expert AMS Solutions. ',
      image: ams, // replace with actual image import or URL
      details: 'Our Application Management Services (AMS) provide comprehensive support and maintenance for your business applications. ',
      path: '/services/ams'
    }
  ];

  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-lg shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-gray-500 mb-4">{service.details}</p>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all"
                onClick={() => navigate(service.path)}
              >
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
