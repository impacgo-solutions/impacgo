import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import bgimg from '../assets/crm.jpg';
import { ChevronDown } from 'lucide-react';

function CRMHeroSection() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen bg-gray-100 overflow-hidden"
    >
      <img
        src={bgimg}
        alt="Web and Mobile Application Development"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-gray-800"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Web & Mobile Application Development
        </h2>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          We design and develop scalable, secure, and high-performance web and mobile
          applications that empower enterprises, integrate seamlessly with ERP systems,
          and drive digital transformation.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")}
          className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 lg:ml-7"
        >
          Know More
        </motion.button>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="h-10 w-10 text-gray-800" />
      </motion.div>
    </motion.div>
  );
}

export default CRMHeroSection;
