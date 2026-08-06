import logo from "../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

// Links shown in the "Products" dropdown/accordion — kept here rather than
// derived from HomePage's ProductsSection data because Header renders on
// every page load of the homepage regardless of scroll position, so it
// needs just the name+link, not the full card content (description,
// features, images) that section owns.
const ourProducts = [
  { name: "Dairy Farm Management (CALVIQ)", path: "/products/dairy-farm" },
  { name: "Inventory Management (StockLyte)", path: "/products/inventory-management" },
  { name: "FarmYieldIQ", path: "/products/farm-yield-iq" },
  { name: "Work Task Application", path: "/products/work-task" },
  { name: "Construction Planner", path: "/products/construction-planner" },
];

// These deliberately do NOT link out to the external prototype URLs — same
// reasoning as the homepage ERP cards (src/pages/HomePage.jsx
// ERPProductsSection): the prototypes are early in-house builds, not
// something to send a nav-menu click straight into. Each entry instead
// routes to that module's own detail page (src/pages/erp/ERPModuleDetail.jsx).
// Short, single-line names on purpose — this list sits in a narrow nav
// column (and the mobile accordion at a similar width) where the full
// "Impacgo X — Tagline" form wraps to two lines and throws off the column
// height next to "Our Products". The full tagline still shows immediately
// on each module's own detail page and on the homepage Suite cards.
const erpProducts = [
  { name: "Impacgo HRMS", path: "/erp/hrms" },
  { name: "Impacgo Finance", path: "/erp/finance" },
  { name: "Impacgo Chain", path: "/erp/chain" },
  { name: "Impacgo Make", path: "/erp/make" },
  { name: "Impacgo Plan", path: "/erp/plan" },
  { name: "Impacgo Retail", path: "/erp/retail" },
  { name: "Impacgo Project", path: "/erp/project" },
];

// `alwaysSolid` is for pages whose content starts light/white right at the
// top (no dark hero behind the header) — without it, the default
// transparent-until-scroll header renders dark text/logo over a light
// background and is unreadable until the user scrolls past 50px. Was the
// reason a separate, nav-incomplete Header component existed; this prop
// lets every page use the same full header instead.
export default function Header({ alwaysSolid = false }) {
  const [isScrolled, setIsScrolled] = useState(alwaysSolid);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const closeTimer = useRef(null);

  const productsRef = useRef(null);

  const openProducts = () => {
    clearTimeout(closeTimer.current);
    setIsProductsOpen(true);
  };
  const scheduleCloseProducts = () => {
    closeTimer.current = setTimeout(() => setIsProductsOpen(false), 150);
  };

  // Real mouse/trackpad devices get a mouseenter before this click ever
  // fires, which already opened the panel — so the trigger just re-opens
  // (a no-op) rather than toggling, which would otherwise flip it straight
  // back shut. Touch devices (tablets, 2-in-1s at this md+ breakpoint) never
  // fire mouseenter/mouseleave at all, so the click has to do the toggling
  // itself or the panel could only ever be opened, never closed by tapping
  // the trigger again.
  const handleProductsTriggerClick = () => {
    const hasHover =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (hasHover) {
      openProducts();
    } else {
      setIsProductsOpen((v) => !v);
    }
  };

  // Desktop dropdown also needs to close on an outside click (trackpad/touch
  // taps don't fire a mouseleave the way a real mouse does), and on Escape
  // for keyboard users.
  useEffect(() => {
    if (!isProductsOpen) return;
    const handleClickOutside = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setIsProductsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsProductsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isProductsOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (!alwaysSolid) {
      window.addEventListener("scroll", handleScroll);
    }

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
  }, [isMenuOpen, alwaysSolid]);

  // Navigation items
  // Products/Services/Contact are plain <a> tags (not React Router Links),
  // so they're resolved by the browser as absolute to the domain root — they
  // need the deployed base path (e.g. "/impacgo/" on GitHub Pages) prefixed
  // explicitly, unlike the isRoute:true entries which go through React
  // Router's basename automatically.
  const navItems = [
    { name: "Home", path: "/", isRoute: true },
    // { name: "About", path: "/about", isRoute: true },
    { name: "Products", path: `${import.meta.env.BASE_URL}#products`, isRoute: false },
    { name: "Services", path: `${import.meta.env.BASE_URL}#services`, isRoute: false },
    { name: "Blog", path: "/blog", isRoute: true },
    { name: "FAQ", path: "/faq", isRoute: true },
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
            ? "bg-white shadow-glass-sm border-b border-gray-100 py-2"
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
                const linkClasses = `relative text-base lg:text-lg font-medium transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
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
                    {item.name === "Products" ? (
                      <div
                        ref={productsRef}
                        className="relative"
                        onMouseEnter={openProducts}
                        onMouseLeave={scheduleCloseProducts}
                      >
                        <button
                          type="button"
                          onClick={handleProductsTriggerClick}
                          aria-expanded={isProductsOpen}
                          className={`flex items-center gap-1 ${linkClasses}`}
                        >
                          Products
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        <AnimatePresence>
                          {isProductsOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              transition={{ duration: 0.15 }}
                              className="absolute right-0 mt-3 w-[560px] max-w-[90vw] bg-white rounded-2xl shadow-glass-lg border border-gray-100 p-6 grid grid-cols-2 gap-6 text-left"
                            >
                              <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                                  Our Products
                                </p>
                                <ul className="space-y-2.5">
                                  {ourProducts.map((p) => (
                                    <li key={p.name}>
                                      <Link
                                        to={p.path}
                                        onClick={() => setIsProductsOpen(false)}
                                        className="text-gray-700 hover:text-blue-600 text-sm transition-colors"
                                      >
                                        {p.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                                <a
                                  href={`${import.meta.env.BASE_URL}#products`}
                                  onClick={() => setIsProductsOpen(false)}
                                  className="inline-block mt-3 text-xs font-semibold text-blue-600 hover:text-blue-700"
                                >
                                  View all products →
                                </a>
                              </div>

                              <div className="border-l border-gray-100 pl-6">
                                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3">
                                  Impacgo ERP Suite
                                  <span className="ml-1.5 align-middle text-[9px] font-bold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full normal-case tracking-normal">
                                    In Development
                                  </span>
                                </p>
                                <ul className="space-y-2.5">
                                  {erpProducts.map((p) => (
                                    <li key={p.name}>
                                      <Link
                                        to={p.path}
                                        onClick={() => setIsProductsOpen(false)}
                                        className="text-gray-700 hover:text-emerald-600 text-sm transition-colors"
                                      >
                                        {p.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                                <a
                                  href={`${import.meta.env.BASE_URL}#erp-products`}
                                  onClick={() => setIsProductsOpen(false)}
                                  className="inline-block mt-3 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                                >
                                  View all Impacgo ERP Suite modules →
                                </a>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : item.isRoute ? (
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
    aria-label="Open menu"
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
        className="fixed top-0 left-0 h-full w-[280px] bg-white shadow-glass-lg z-50 md:hidden flex flex-col"
      >
        {/* TOP SECTION */}
        <div className="flex items-center justify-between p-5 border-b flex-shrink-0">
          <img
            src={logo}
            alt="logo"
            className="h-8 object-contain"
          />

          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="text-gray-700 hover:text-red-500 transition"
          >
            <X size={30} />
          </button>
        </div>

        {/* NAV ITEMS — independently scrollable so an expanded Products
            accordion (which keeps growing as Suite modules ship) can never
            push Services/Blog/Contact/Get Started out of reach. Body scroll
            is locked while this menu is open, so without its own scroll
            container, overflow here would be completely unreachable. */}
        <nav className="flex flex-col p-5 space-y-5 flex-1 overflow-y-auto">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
              }}
            >
              {item.name === "Products" ? (
                <div>
                  <button
                    type="button"
                    onClick={() => setIsMobileProductsOpen((v) => !v)}
                    aria-expanded={isMobileProductsOpen}
                    className="w-full flex items-center justify-between text-lg font-medium text-gray-800 hover:text-blue-600 transition"
                  >
                    Products
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-200 ${isMobileProductsOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isMobileProductsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pb-1">
                          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                            Our Products
                          </p>
                          <ul className="space-y-2 mb-4">
                            {ourProducts.map((p) => (
                              <li key={p.name}>
                                <Link
                                  to={p.path}
                                  onClick={closeMenu}
                                  className="text-sm text-gray-600 hover:text-blue-600 transition"
                                >
                                  {p.name}
                                </Link>
                              </li>
                            ))}
                          </ul>

                          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                            Impacgo ERP Suite <span className="text-[9px] font-bold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full normal-case">In Development</span>
                          </p>
                          <ul className="space-y-2">
                            {erpProducts.map((p) => (
                              <li key={p.name}>
                                <Link
                                  to={p.path}
                                  onClick={closeMenu}
                                  className="text-sm text-gray-600 hover:text-emerald-600 transition"
                                >
                                  {p.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.isRoute ? (
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
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 active:scale-95 text-white py-3 rounded-xl font-semibold transition"
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