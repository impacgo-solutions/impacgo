import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import bgimg from '../assets/posbg.jpg';

import { ChevronDown, CheckCircle } from 'lucide-react'

function POSHeroSection() {
    const navigate = useNavigate();
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-screen bg-gray-100 overflow-hidden" // Changed to a solid light gray background
        >
          <img
            src={bgimg}
            alt="POS Solutions"
            className="absolute inset-0 w-full h-full object-cover opacity-20" // Slightly higher opacity for the background image
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-gray-800" // Darker text for contrast
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              POS Solutions Tailored for Your Retail Business
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              At Impacgo, we specialize in delivering comprehensive POS solutions that empower retail businesses to achieve seamless transactions, enhanced customer experience, and streamlined operations.
              <br /><br />
              With extensive experience in both custom-built and packaged POS systems, we offer tailored support that aligns perfectly with your operational goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-blue-600 text-white py-3 px-8  rounded-full shadow-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 lg:ml-7"
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
            <ChevronDown className="h-10 w-10 text-gray-800" /> {/* Changed icon color to match text */}
          </motion.div>
        </motion.div>
      );
}

export default POSHeroSection;
