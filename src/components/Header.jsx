import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Navigation items
  // Products/Services/Contact are plain <a> tags (not React Router Links),
  // so they're resolved by the browser as absolute to the domain root — they
  // need the deployed base path (e.g. "/impacgo/" on GitHub Pages) prefixed
  // explicitly, unlike the isRoute:true entries which go through React
  // Router's basename automatically.
  const navItems = [
    { name: "Home", path: "/", isRoute: true },
    { name: "Products", path: `${import.meta.env.BASE_URL}#products`, isRoute: false },
    { name: "Services", path: `${import.meta.env.BASE_URL}#services`, isRoute: false },
    { name: "Blog", path: "/blog", isRoute: true },
    { name: "Contact", path: `${import.meta.env.BASE_URL}#contact`, isRoute: false },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-2"
            : "bg-transparent py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link to="/">
              <img
                src={logo}
                alt="Impacgo Solutions Logo"
                className="h-7 sm:h-9 md:h-10 w-auto object-contain cursor-pointer"
              />
            </Link>
          </motion.div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {navItems.map((item, index) => {
                const linkClasses = `text-base lg:text-lg font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-800 hover:text-blue-600"
                    : "text-white hover:text-blue-200"
                }`;

                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    {item.isRoute ? (
                      <Link to={item.path} className={linkClasses}>
                        {item.name}
                      </Link>
                    ) : (
                      <a href={item.path} className={linkClasses}>
                        {item.name}
                      </a>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* MOBILE MENU BUTTON */}
{!isMenuOpen && (
  <button
    onClick={() => setIsMenuOpen(true)}
    className={`md:hidden transition-colors duration-300 ${
      isScrolled ? "text-black" : "text-white"
    }`}
  >
    <Menu size={30} />
  </button>
)}
          
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
<AnimatePresence>
  {isMenuOpen && (
    <>
      {/* BACKDROP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeMenu}
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
      />

      {/* SIDEBAR */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-50 md:hidden"
      >
        {/* TOP SECTION */}
        <div className="flex items-center justify-between p-5 border-b">
          <img
            src={logo}
            alt="logo"
            className="h-8 object-contain"
          />

          <button
            onClick={closeMenu}
            className="text-gray-700 hover:text-red-500 transition"
          >
            <X size={30} />
          </button>
        </div>

        {/* NAV ITEMS */}
        <nav className="flex flex-col p-5 space-y-5">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
              }}
            >
              {item.isRoute ? (
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className="text-lg font-medium text-gray-800 hover:text-blue-600 transition"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.path}
                  onClick={closeMenu}
                  className="text-lg font-medium text-gray-800 hover:text-blue-600 transition"
                >
                  {item.name}
                </a>
              )}
            </motion.div>
          ))}

          {/* OPTIONAL BUTTON */}
          <div className="pt-6">
            <a
              href={`${import.meta.env.BASE_URL}#contact`}
              onClick={closeMenu}
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Get Started
            </a>
          </div>
        </nav>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </>
  );
}