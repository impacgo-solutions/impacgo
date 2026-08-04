import logo from "../assets/logo.png";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// `alwaysSolid` is for pages whose content starts light/white right at the
// top (no dark hero behind the header) — without it, the default
// transparent-until-scroll header renders white text over a light
// background and is unreadable until the user scrolls past 50px.
export default function POSHeader({ alwaysSolid = false }) {
  const [isScrolled, setIsScrolled] = useState(alwaysSolid);

  useEffect(() => {
    if (alwaysSolid) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysSolid]);

  return (
    <div>
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={logo}
              alt="Impacgo Solutions Logo"
              className="w-auto h-10"
            />
          </motion.div>
          <nav>
            <ul className="flex space-x-6">
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to="/"
                  className={`text-lg font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-200'
                  }`}
                >
                  Home
                </Link>
              </motion.li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
