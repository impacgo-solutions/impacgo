import d365 from "../assets/d3651.webp";
import crm from "../assets/crm.webp";
import manufacturingImage from "../assets/manufacturing.webp";
import supplyChain from "../assets/supplychain.webp";
import retail from "../assets/retail.webp";
import bgimg from "../assets/background.webp";
import { useState, useEffect } from "react";
import dfms from "../assets/dfms.webp";
import worktast from "../assets/worktask.webp";
import construction from "../assets/Construction.webp";
import farmYieldIq from "../assets/farmyieldiq-dashboard.webp";
import SEO from "../components/SEO";
import { organizationSchema, localBusinessSchema } from "../components/schemas";
import { erpModules } from "../data/erpModules";
import emailjs from "@emailjs/browser";
import {
  ChevronDown, CheckCircle, Mail, User, Phone, MessageSquare,
  Code2,          // ← only once here
  Plug, Database, Factory, Bot, Package, Lightbulb, Rocket,
  Smartphone, Globe, Workflow, BrainCircuit, Eye,
  TrendingUp, ShieldCheck, Zap, HeartHandshake,
  Layers, Target, LifeBuoy, Tractor, ClipboardList, Building2,
  AlertTriangle, BarChart3, Sparkles, Heart,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal, { RevealItem } from "../components/Reveal";
import pos from "../assets/pos.webp";
import { useNavigate, Link } from "react-router-dom";
import LocationMap from "../components/LocationMap";
import ContactCard from "../components/ContactCard";
import financial from "../assets/financialimg.webp";
import health from "../assets/healthcare.webp";
import resonac from "../assets/clients/Resonac.webp";
import hitechi from "../assets/clients/hitechi.webp";
import ironingboy from "../assets/clients/ironingboy.webp";   

export default function HomePage() {
  // Header nav items like "Products"/"Services" link to "/#products" etc.
  // When arriving here from a different page (full navigation), the browser
  // processes the hash before React has rendered these sections, so the
  // native anchor-scroll silently misses. Retry once mounted.
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
  title="Microsoft Dynamics 365 & Power Platform Partner | Global D365FO Specialists | Impacgo"
  description="Specialist Microsoft Dynamics 365 Finance & Operations and Power Platform implementation partner for global enterprises. AX 2012 migration, D365FO, Power Apps, Power BI, AI Builder. Deep India compliance expertise (GST, e-invoicing). Multi-country rollouts. Free consultation."
  keywords="Microsoft Dynamics 365 partner, D365FO implementation partner, Power Platform consultant, AX 2012 migration specialist, Power Apps developer, Power BI implementation, AI Builder integration, Dynamics 365 CRM partner, Microsoft Dynamics 365 India, D365 partner India, Power Platform India, ERP partner India"
  path="/"
  schema={[organizationSchema, localBusinessSchema]}
/>
      <Header />
      <main>
        <HeroSection />
        <IndustriesSection />
        <ServicesSection />
        <ERPImplementationSection />
        <AIAutomationSection />
        {/* <AchievementsSection /> */}
        <ProductsSection />
        <ERPProductsSection />
        <WhyChooseUsSection />
        {/* <ClientLogosSection /> */}
        <ContactSection />
        <LocationMap />
        <ContactCard />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------- HERO ---------------------- */
function HeroSection() {
  const services = [
    "Microsoft Dynamics 365",
    "Impacgo ERP",
    "Web & Mobile Applications",
    "MES Systems",
    "AI & Automation Solutions",
    "Digital Transformation",
  ];

  const [currentService, setCurrentService] = useState(services[0]);
  const [isVisible, setIsVisible] = useState(true);

  const scrollToPosition = () => {
    window.scrollTo({ top: 700, behavior: "smooth" });
  };

  useEffect(() => {      
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentService((prev) => {
          const idx = services.indexOf(prev);
          return services[(idx + 1) % services.length];
        });
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-r from-teal-500 to-purple-600 overflow-hidden">
      <img
        src={bgimg}
        alt="Business Team"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <p className="uppercase tracking-[0.3em] text-sm md:text-base mb-4 text-white/80">
          Impacgo Solutions
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transforming Business
          <br />
          Through{" "}
          <span
            className={`text-5xl md:text-7xl font-extrabold transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentService}
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          Your Technology Partner — From Strategy to Execution. We deliver
          customer-focused services with complete transparency and strong
          business ethics.
        </p>

        <button
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 active:scale-95 transition-all duration-300"
          onClick={scrollToPosition}
        >
          Learn More
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="h-10 w-10 text-white animate-bounce" />
      </div>
    </div>
  );
}

/* ---------------------- INDUSTRIES ---------------------- */
function IndustriesSection() {
  const navigate = useNavigate();

  const industries = [
    {
      name: "Manufacturing",
      description: "Production optimization, supply chain management, and ERP-driven manufacturing excellence.",
      image: manufacturingImage,
      path: "/industries/manufacturing", // ← Clickable!
    },
    {
      name: "Trading & Distribution",
      description: "Multi-site trading operations, inventory control, and ERP-integrated distribution networks.",
      image: supplyChain,
      path: "/industries/distribution", // No page yet
    },
   {
  name: "Retail & E-Commerce",
  description: "Omnichannel retail solutions with POS, ERP, and customer experience optimization.",
  image: retail,
  path: "/industries/retail",
},
    {
      name: "Healthcare",
      description: "Patient management, compliance-driven ERP solutions, and healthcare process automation.",
      image: health,
      path: null,
    },
    {
      name: "Financial Services",
      description: "Risk management, financial operations, compliance, and intelligent financial reporting.",
      image: financial,
      path: null,
    },
    {
      name: "Technology & Consulting",
      description: "Digital transformation, ERP consulting, and innovation-led enterprise solutions.",
      image: manufacturingImage,
      path: null,
    },
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Impacgo Solutions delivers industry-specific ERP, automation, and digital transformation solutions for global enterprises — with deep India compliance expertise built in.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <RevealItem
              key={industry.name}
              index={index}
              onClick={() => industry.path && navigate(industry.path)}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:scale-105 ${
                industry.path ? "cursor-pointer" : ""
              }`}
            >
              <div className="relative h-48">
                <img
                  src={industry.image}
                  alt={industry.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
                {industry.path && (
                  <p className="text-blue-600 text-sm font-medium mt-3">
                    Learn more →
                  </p>
                )}
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- OUR SERVICES (Slide 2) ---------------------- */
/* Each card navigates to its respective service detail page */
/* ---------------------- OUR SERVICES (Slide 2) ---------------------- */
const SERVICES_VISIBLE_COUNT = 8;

function ServicesSection() {
  const navigate = useNavigate();
  const [showAllServices, setShowAllServices] = useState(false);

  const services = [
    {
      icon: AlertTriangle,
      title: "AX 2012 → D365 Migration",
      description:
        "Migrate before the January 2028 Microsoft deadline — board-mandated upgrade for AX 2012 users",
      path: "/services/ax-migration",
      highlight: true,
    },
    {
    icon: Smartphone,
    title: "Power Apps Development",
    description: "Custom canvas & model-driven apps connected to D365FO — delivered in 4-8 weeks",
    path: "/services/power-apps",
  },
  {
    icon: Workflow,
    title: "Power Automate Consulting",
    description: "Approval workflows, document automation & RPA — connecting D365, M365, and 500+ systems",
    path: "/services/power-automate",
  },
  {
    icon: BarChart3,
    title: "Power BI Implementation",
    description: "Live dashboards on D365FO — replace Excel month-end reports with real-time analytics",
    path: "/services/power-bi",
  },
  {
    icon: Sparkles,
    title: "AI Builder Integration",
    description: "Invoice OCR, prediction models & sentiment AI embedded into your Power Platform workflows",
    path: "/services/ai-builder",
  },
    {
  icon: Globe,
  title: "Application Development",
  description: "Mobile & Web Apps built for scale and performance",
  path: "/services/app-development",
},
    {
  icon: Code2,
  title: "D365FO Development & Customisation",
  description: "X++ extensions, custom forms, integrations & ALM with Azure DevOps — upgrade-safe D365FO code",
  path: "/services/d365-development",
},
{
  icon: Heart,
  title: "Dynamics 365 CRM",
  description: "D365 Sales, Customer Service, Marketing & Field Service — natively connected to D365 F&O",
  path: "/services/d365-crm",
},
    {
      icon: Plug,
      title: "Integrations",
      description: "Seamless API & system integrations across platforms",
      path: "/services/integrations",
    },
    {
      icon: Database,
      title: "ERP Implementation",
      description: "Microsoft D365 F&O and our own Impacgo ERP for every business size",
      path: "/services/d365",
    },
    {
      icon: Factory,
      title: "MES Systems",
      description: "Manufacturing Execution System deployment & support",
      path: "/services/mes",
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Intelligent automation, AI chatbots & process efficiency",
      path: "/services/ai-automation",
    },
    {
      icon: Package,
      title: "Product Development",
      description:
        "End-to-end custom product ideation, design and development",
      path: "/services/app-development",
    },
    {
      icon: Lightbulb,
      title: "Consulting",
      description: "Strategic technology advisory & transformation services",
      path: "/services/consulting",
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "End-to-end business modernisation journeys",
      path: "/services/consulting",
    },
  ];

  const handleKeyDown = (e, path) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate(path);
    }
  };

  const hiddenCount = services.length - SERVICES_VISIBLE_COUNT;
  const visibleServices = showAllServices
    ? services
    : services.slice(0, SERVICES_VISIBLE_COUNT);

  return (
    <section id="services" className="py-20 bg-blue-50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Full-spectrum technology solutions — strategy to execution
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleServices.map((service, index) => {
  const Icon = service.icon;
  return (
    <RevealItem
      key={service.title}
      index={index}
      role="button"
      tabIndex={0}
      aria-labelledby={`service-title-${index}`}
      onClick={() => navigate(service.path)}
      onKeyDown={(e) => handleKeyDown(e, service.path)}
      className={`group rounded-xl shadow-md p-6 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 flex flex-col items-center text-center focus:outline-none focus:ring-2 focus:ring-offset-2 relative ${
        service.highlight
          ? "bg-gradient-to-br from-red-50 to-orange-50 border-red-400 hover:border-red-600 focus:ring-red-500"
          : "bg-white border-transparent hover:border-blue-500 focus:ring-blue-500"
      }`}
    >
      {/* Urgent badge for AX migration card */}
      {service.highlight && (
        <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          ⚡ Urgent
        </span>
      )}

      {/* Icon — centered */}
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${
          service.highlight
            ? "bg-red-100 group-hover:bg-red-600"
            : "bg-blue-100 group-hover:bg-blue-600"
        }`}
      >
        <Icon
          className={`h-7 w-7 transition-colors duration-300 ${
            service.highlight
              ? "text-red-600 group-hover:text-white"
              : "text-blue-600 group-hover:text-white"
          }`}
        />
      </div>

      {/* Title — centered */}
      <h3 id={`service-title-${index}`} className="text-lg font-semibold mb-2 text-gray-800">
        {service.title}
      </h3>

      {/* Description — centered */}
      <p className="text-sm text-gray-600 mb-4 flex-1">
        {service.description}
      </p>

      {/* Click affordance — centered */}
      <div
        className={`flex items-center justify-center text-sm font-medium mt-auto ${
          service.highlight ? "text-red-600" : "text-blue-600"
        }`}
      >
        <span>Learn more</span>
        <svg
          className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </RevealItem>
  );
})}
        </div>

        {hiddenCount > 0 && (
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setShowAllServices((v) => !v)}
              className="inline-flex items-center gap-2 bg-white border-2 border-blue-200 text-blue-600 px-6 py-3 rounded-full font-semibold hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
            >
              {showAllServices ? "Show Less" : `Show ${hiddenCount} More Services`}
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  showAllServices ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------------- ERP IMPLEMENTATION (Slide 4) ---------------------- */
function ERPImplementationSection() {
  const navigate = useNavigate();

  const erps = [
    {
      tag: "FOR LARGE ENTERPRISES",
      title: "Microsoft Dynamics 365",
      subtitle: "Finance & Operations",
      gradient: "from-indigo-600 to-blue-600",
      path: "/services/d365",
      items: [
        "Financial Management & Accounting",
        "Supply Chain & Inventory",
        "Manufacturing Planning (MRP)",
        "HR & Payroll",
        "Project Operations",
        "Advanced Analytics & BI",
      ],
    },
    {
      tag: "IMPACGO'S OWN PLATFORM",
      title: "Impacgo ERP",
      subtitle: "One Connected Business Platform",
      gradient: "from-teal-500 to-green-600",
      path: "/#erp-products",
      items: [
        "Workforce Management (HRMS)",
        "Accounting & Compliance",
        "Supply Chain Management",
        "Manufacturing",
        "Planning & MRP",
        "POS & Store Operations",
      ],
    },
  ];

  return (
    <section id="erp-implementation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-12">
          <p className="uppercase tracking-widest text-blue-600 font-semibold mb-2 text-sm">
            ERP Implementation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The right ERP for the right business size — implemented right
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {erps.map((erp, index) => (
            <RevealItem
              key={erp.title}
              index={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div
                className={`bg-gradient-to-r ${erp.gradient} p-6 text-white`}
              >
                <span className="inline-block bg-white/20 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wider">
                  {erp.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold">{erp.title}</h3>
                <p className="text-white/90 mt-1">{erp.subtitle}</p>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 flex-1">
                  {erp.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    if (erp.path.startsWith("/#")) {
                      document
                        .getElementById(erp.path.slice(2))
                        ?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      navigate(erp.path);
                    }
                  }}
                  className="self-start bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all text-sm"
                >
                  Know More
                </button>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- AI & AUTOMATION (Slide 7) ---------------------- */
function AIAutomationSection() {
  const navigate = useNavigate();

  const items = [
    {
      icon: Workflow,
      title: "Intelligent Process Automation",
      description:
        "Automate repetitive workflows across finance, HR, supply chain and operations using RPA and AI-driven bots.",
    },
    {
      icon: BrainCircuit,
      title: "AI-Powered Decision Support",
      description:
        "Leverage AI to analyse business data and surface actionable insights for smarter, faster decisions.",
    },
    {
      icon: Bot,
      title: "AI Chatbots & Assistants",
      description:
        "Conversational AI for customer support, helpdesks and field operations — available 24/7 on web & mobile.",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description:
        "Visual inspection, defect detection and document recognition for manufacturing and document processing.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description:
        "Turn historical data into insights — sales forecasting, churn prediction and inventory optimisation.",
    },
    {
      icon: Database,
      title: "Data Pipelines & AI Integration",
      description:
        "ETL pipelines, data lakes, API integrations and embedding AI into existing ERP or MES systems.",
    },
  ];

  return (
    <section
      id="ai-automation"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center mb-12">
          <p className="uppercase tracking-widest text-purple-200 font-semibold mb-2 text-sm">
            AI & Automation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Intelligent solutions that automate, assist and amplify your
            business
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <RevealItem
                key={item.title}
                index={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </RevealItem>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/services/ai-automation")}
            className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
          >
            Explore AI & Automation
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- ACHIEVEMENTS ---------------------- */
function AchievementsSection() {
  const achievements = [
    { value: "20+", label: "Years of Experience" },
    { value: "15+", label: "Global Implementations" },
    { value: "8+", label: "Countries Served" },
    { value: "10+", label: "Industries Supported" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {achievements.map((item) => (
            <div
              key={item.label}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">
                {item.value}
              </p>
              <p className="text-sm md:text-base text-gray-600 tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- OUR PRODUCTS (Slide 6) ---------------------- */
function ProductsSection() {
  const navigate = useNavigate();

  const products = [
    {
      icon: Tractor,
      name: "Dairy Farm Management System (CALVIQ)",
      description: "Complete farm management for modern dairy operations.",
      features: [
        "Milk production tracking per animal & session",
        "Herd & animal health / veterinary records",
        "Breeding, reproduction & calving management",
        "Feed & nutrition inventory management",
        "Finance, milk sales invoicing & reporting",
        "KPI dashboards & production analytics",
      ],
      image: dfms,
      path: "/products/dairy-farm",
      landingPage: { path: "/calviq", label: "Explore Calviq" },
      tag: null,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Package,
      name: "Inventory Management System (STOCKLYTE)",
      description: "Real-time, multi-location inventory control tower.",
      features: [
        "Real-time stock tracking across every location",
        "Automated reorder points & low-stock alerts",
        "Barcode / QR scanning for fast stock movement",
        "Vendor & purchase order management",
        "Multi-warehouse & multi-location visibility",
        "Analytics dashboards & demand forecasting",
      ],
      image: supplyChain,
      path: "/products/inventory-management",
      landingPage: { path: "/stocklyte", label: "Explore StockLyte" },
      tag: null,
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      icon: Layers,
      name: "Farmland Plot Operations Platform (FARMYIELDIQ)",
      description: "Unified operations for managed farmland plots, partners and sales.",
      features: [
        "Layout, block & plot management with pricing and registration tracking",
        "Per-plot crop details — track crop type & plant count",
        "Partner portfolios with document vault & payment tracking",
        "Real estate sales pipeline — leads, bookings & team hierarchy",
        "Employee, travel expense & partner request management",
        "Dashboard KPIs across partners, layouts, plots & documents",
      ],
      image: farmYieldIq,
      path: "/products/farm-yield-iq",
      landingPage: { path: "/farmyieldiq", label: "Explore FarmYieldIQ" },
      tag: null,
      gradient: "from-emerald-600 to-amber-600",
    },
    {
      icon: ClipboardList,
      name: "Work Task Application",
      description: "Consultant & employee time tracking, project-based.",
      features: [
        "Project creation & team assignment",
        "Task management with status tracking",
        "Daily timesheet & work session logging",
        "Consultant utilisation & billable hours",
        "Project-wise effort & productivity reports",
        "Manager approval workflows & audit trail",
      ],
      image: worktast,
      path: "/products/work-task",
      tag: null,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Building2,
      name: "Construction Planner",
      description: "AI-powered planning for architects & construction teams.",
      features: [
        "Floor plan processing & section identification",
        "Automated consolidated cost estimation",
        "Material requirement calculation & optimisation",
        "Dynamic timeline with market trend analysis",
        "Real-time impact analysis on scope, cost & schedule",
        "Data-driven insights for informed decisions",
      ],
      image: construction,
      path: "/products/construction-planner",
      tag: "⚙ In Development",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Purpose-built software products developed by Impacgo
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <RevealItem
                key={product.name}
                index={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-70`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-white" />
                  </div>
                  {product.tag && (
                    <span className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                      {product.tag}
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all"
                    onClick={() => navigate(product.path)}
                  >
                    Know More
                  </button>
                  {product.landingPage && (
                    <button
                      className="mt-2 border border-blue-600 text-blue-600 py-2 px-4 rounded-full hover:bg-blue-50 transition-all"
                      onClick={() => navigate(product.landingPage.path)}
                    >
                      {product.landingPage.label}
                    </button>
                  )}
                </div>
              </RevealItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- IMPACGO ERP SUITE ---------------------- */
// Card content stays "basic" here — module name, one-line description, a
// handful of capability chips — the full pitch (workflows, module
// breakdown, benefits, FAQ) lives on each module's own detail page at
// /erp/:slug (src/pages/erp/ERPModuleDetail.jsx). Data is shared from
// src/data/erpModules.js so the two never drift apart.
function ERPProductsSection() {
  const colorClasses = {
    violet: "bg-violet-50 text-violet-600",
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    slate: "bg-slate-100 text-slate-600",
    emerald: "bg-emerald-50 text-emerald-600",
    orange: "bg-orange-50 text-orange-600",
    teal: "bg-teal-50 text-teal-600",
  };

  return (
    <section id="erp-products" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-12">
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full tracking-wide mb-4">
            IN DEVELOPMENT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Impacgo ERP Suite</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our own suite of business applications — HR, Finance, Supply Chain, Manufacturing,
            Planning and Retail — built as one connected system. Click a module for the full picture.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {erpModules.map((mod, index) => {
            const Icon = mod.icon;
            return (
              <RevealItem key={mod.name} index={index}>
              <Link
                id={`erp-${mod.slug}`}
                to={`/erp/${mod.slug}`}
                className="group block h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 p-6 scroll-mt-28 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${colorClasses[mod.color]}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wide bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">
                    In Development
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800">Impacgo {mod.name}</h3>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  {mod.tagline}
                </p>
                <p className="text-gray-600 text-sm mb-4">{mod.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {mod.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="text-xs font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </Link>
              </RevealItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- WHY CHOOSE US (Slide 8) ---------------------- */
function WhyChooseUsSection() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Domain Expertise",
      description:
        "Deep experience across manufacturing, dairy, services and distribution verticals.",
    },
    {
      icon: Zap,
      title: "Rapid Delivery",
      description:
        "Agile methodology — fast go-live with minimal disruption to your operations.",
    },
    {
      icon: HeartHandshake,
      title: "Trusted Partner",
      description:
        "Long-term relationships built on transparency, honesty and measurable outcomes.",
    },
    {
      icon: Layers,
      title: "Full-Stack Capability",
      description:
        "Custom software to ERP to MES — one team covers your entire technology stack.",
    },
    {
      icon: Target,
      title: "ROI Focused",
      description:
        "Every engagement is designed to deliver clear, measurable return on investment.",
    },
    {
      icon: LifeBuoy,
      title: "Dedicated Support",
      description:
        "Post go-live hypercare, training programmes and continuous improvement services.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Impacgo?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Impacgo doesn't just implement technology — we deliver outcomes
            your business can measure.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <RevealItem
                key={item.title}
                index={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- CLIENT LOGOS ---------------------- */
function ClientLogosSection() {
  const clients = [
    { name: "Resonac", logo: resonac },
    { name: "Hitachi", logo: hitechi },
    { name: "Ironing Boy", logo: ironingboy },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-6">
          <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
            Our Clients
          </p>
          <h3 className="text-gray-600 text-sm md:text-base">
            Trusted by Leading Global Enterprises
          </h3>
        </Reveal>

        <div className="flex md:flex-wrap items-center justify-start md:justify-center gap-x-10 overflow-x-auto md:overflow-visible scrollbar-hide px-2">
          {clients.map((client, index) => (
            <RevealItem
              key={client.name}
              index={index}
              className="flex-shrink-0 flex items-center justify-center h-7"
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                width="120"
                height="28"
                className="h-6 md:h-5 lg:h-7 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- CONTACT ---------------------- */
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not Provided",
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      const response = await emailjs.send(
        "service_d7y8ehi",
        "template_yadp6j3",
        templateParams,
        "IFgEgXdtrHt3Am0eV"
      );

      console.log("SUCCESS!", response.status, response.text);

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("");
      }, 5000);

    } catch (error) {
      console.error("FAILED...", error);

      setStatus("error");

      setErrorMessage(
        "Failed to send message. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="py-20 bg-blue-50 scroll-mt-24">
      <div className="container mx-auto px-4">

        <Reveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
            Let's Build Something Impactful. Together.
          </h2>
        </Reveal>

        <Reveal
          as="form"
          delay={0.1}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >

          {/* Name */}
          <div className="mb-6">
            <label htmlFor="contact-name" className="flex items-center mb-2 text-gray-700">
              <User className="mr-2 text-blue-600" />
              Name
            </label>

            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === "sending"}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="contact-email" className="flex items-center mb-2 text-gray-700">
              <Mail className="mr-2 text-blue-600" />
              Email
            </label>

            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === "sending"}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label htmlFor="contact-phone" className="flex items-center mb-2 text-gray-700">
              <Phone className="mr-2 text-blue-600" />
              Phone
            </label>

            <input
              id="contact-phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              disabled={status === "sending"}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="contact-message" className="flex items-center mb-2 text-gray-700">
              <MessageSquare className="mr-2 text-blue-600" />
              Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows="4"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              disabled={status === "sending"}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {status === "sending"
              ? "Sending..."
              : "Send Message"}
          </button>

          {/* Success Message */}
{status === "success" && (
  <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-5 shadow-sm animate-fade-in">
    
    <div className="flex items-start">
      
      {/* Icon */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="text-green-600 w-7 h-7" />
        </div>
      </div>

      {/* Content */}
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-green-800">
          Message Sent Successfully 🚀
        </h3>

        <p className="text-sm text-green-700 mt-1 leading-relaxed">
          Thank you for contacting Impacgo Solutions.
          Our team has received your message and we’ll connect with you shortly.
        </p>

        <p className="text-xs text-green-600 mt-3">
          Typically responds within 24 hours.
        </p>
      </div>
    </div>
  </div>
)}

          {/* Error */}
          {status === "error" && (
            <p className="mt-4 text-center text-red-600 font-medium">
              {errorMessage}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
