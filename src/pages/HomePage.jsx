import d365 from "../assets/d3651.jpg";
import crm from "../assets/crm.jpg";
import manufacturingImage from "../assets/manufacturing.jpg";
import supplyChain from "../assets/supplychain.jpg";
import retail from "../assets/retail.jpg";
import bgimg from "../assets/background.jpg";
import { useState, useEffect } from "react";
import dfms from "../assets/dfms.jpg";
import worktast from "../assets/worktask.jpg";
import construction from "../assets/Construction.jpg";
import SEO from "../components/SEO";
import { organizationSchema, localBusinessSchema } from "../components/schemas";
import emailjs from "@emailjs/browser";
import {
  ChevronDown, CheckCircle, Mail, User, Phone, MessageSquare,
  Code2,          // ← only once here
  Plug, Database, Factory, Bot, Package, Lightbulb, Rocket,
  Smartphone, Globe, Cpu, Workflow, BrainCircuit, Eye,
  TrendingUp, GitBranch, ShieldCheck, Zap, HeartHandshake,
  Layers, Target, LifeBuoy, Tractor, ClipboardList, Building2,
  AlertTriangle, BarChart3, Sparkles, Heart,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pos from "../assets/pos.jpg";
import { useNavigate } from "react-router-dom";
import LocationMap from "../components/LocationMap";
import ContactCard from "../components/ContactCard";
import financial from "../assets/financialimg.jpg";
import health from "../assets/healthcare.jpg";
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
        <SoftwareDevelopmentSection />
        <ERPImplementationSection />
        <MoreServicesSection />
        <AIAutomationSection />
        {/* <AchievementsSection /> */}
        <ProductsSection />
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
    "ERPNext Implementation",
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
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Industries We Serve
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Impacgo Solutions delivers industry-specific ERP, automation, and digital transformation solutions for global enterprises — with deep India compliance expertise built in.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.name}
              onClick={() => industry.path && navigate(industry.path)}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:scale-105 ${
                industry.path ? "cursor-pointer" : ""
              }`}
            >
              <div className="relative h-48">
                <img
                  src={industry.image}
                  alt={industry.name}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- OUR SERVICES (Slide 2) ---------------------- */
/* Each card navigates to its respective service detail page */
/* ---------------------- OUR SERVICES (Slide 2) ---------------------- */
function ServicesSection() {
  const navigate = useNavigate();

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
      description: "Microsoft D365 F&O and ERPNext for all business sizes",
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

  return (
    <section id="services" className="py-20 bg-blue-50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Full-spectrum technology solutions — strategy to execution
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
  const Icon = service.icon;
  return (
    <div
      key={service.title}
      role="button"
      tabIndex={0}
      aria-label={`Learn more about ${service.title}`}
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
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
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
      <h3 className="text-lg font-semibold mb-2 text-gray-800">
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
    </div>
  );
})}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- SOFTWARE DEVELOPMENT (Slide 3) ---------------------- */
function SoftwareDevelopmentSection() {
  const navigate = useNavigate();

  const blocks = [
    {
      icon: Smartphone,
      title: "Mobile Applications",
      items: [
        "iOS & Android native and cross-platform apps",
        "React Native & Flutter development",
        "Intuitive UI/UX design & prototyping",
        "Offline-first architecture for field use",
        "Real-time push notifications & sync",
        "App Store & Play Store deployment",
      ],
    },
    {
      icon: Globe,
      title: "Web Applications",
      items: [
        "Responsive portals, dashboards & e-commerce",
        "React, Angular, Vue.js front-end development",
        "Node.js, Python, .NET backend services",
        "Progressive Web Apps (PWA)",
        "Cloud-native Azure / AWS deployments",
        "API-first and microservices architecture",
      ],
    },
  ];

  return (
    <section id="software-development" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-blue-600 font-semibold mb-2 text-sm">
            Application Development
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mobile · Web · Custom Software
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built for scale, performance and your unique business workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <div
                key={block.title}
                className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mr-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {block.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/services/app-development")}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all"
          >
            Explore Software Development
          </button>
        </div>
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
      tag: "FOR SMEs & MID-MARKET",
      title: "ERPNext",
      subtitle: "Open Source ERP Platform",
      gradient: "from-teal-500 to-green-600",
      path: "/services/erpnext",
      items: [
        "Accounting & Finance",
        "CRM & Sales",
        "Inventory & Warehouse",
        "HR & Payroll",
        "Project Management",
        "E-commerce & POS",
      ],
    },
  ];

  return (
    <section id="erp-implementation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-blue-600 font-semibold mb-2 text-sm">
            ERP Implementation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The right ERP for the right business size — implemented right
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {erps.map((erp) => (
            <div
              key={erp.title}
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
                  onClick={() => navigate(erp.path)}
                  className="self-start bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all text-sm"
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- MORE SERVICES (Slide 5) ---------------------- */
function MoreServicesSection() {
  const navigate = useNavigate();

  const blocks = [
    {
      icon: Cpu,
      title: "MES Implementation",
      subtitle: "Manufacturing Execution Systems",
      path: "/services/mes",
      items: [
        "Real-time production floor monitoring",
        "Work order & job scheduling management",
        "Quality control, inspection & traceability",
        "OEE — Overall Equipment Effectiveness",
        "Material & genealogy tracking",
        "ERP integration for closed-loop manufacturing",
      ],
    },
    {
      icon: GitBranch,
      title: "Integrations",
      subtitle: "Seamless System Connectivity",
      path: "/services/integrations",
      items: [
        "REST API & SOAP web service connectors",
        "Third-party SaaS integrations",
        "EDI / B2B data exchange pipelines",
        "Real-time bidirectional data sync",
        "Middleware & iPaaS (Azure Logic Apps)",
        "Legacy system modernisation & bridging",
      ],
    },
    {
      icon: Lightbulb,
      title: "Consulting Services",
      subtitle: "Strategic Technology Advisory",
      path: "/services/consulting",
      items: [
        "Business process analysis & redesign",
        "Technology roadmap & architecture planning",
        "ERP / MES readiness & gap assessment",
        "Change management & user adoption",
        "Training programmes & workshops",
        "Ongoing post go-live hypercare support",
      ],
    },
  ];

  return (
    <section id="more-services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-blue-600 font-semibold mb-2 text-sm">
            More Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Manufacturing execution, integrations and advisory services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <div
                key={block.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {block.title}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-4">
                  {block.subtitle}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate(block.path)}
                  className="self-start bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all text-sm"
                >
                  Know More
                </button>
              </div>
            );
          })}
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
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-purple-300 font-semibold mb-2 text-sm">
            AI & Automation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Intelligent solutions that automate, assist and amplify your
            business
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
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
      calviqPath: "/calviq",
      tag: null,
      gradient: "from-green-500 to-emerald-600",
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Purpose-built software products developed by Impacgo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
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
                  {product.calviqPath && (
                    <button
                      className="mt-2 border border-blue-600 text-blue-600 py-2 px-4 rounded-full hover:bg-blue-50 transition-all"
                      onClick={() => navigate(product.calviqPath)}
                    >
                      View Calviq Landing Page
                    </button>
                  )}
                </div>
              </div>
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Impacgo?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Impacgo doesn't just implement technology — we deliver outcomes
            your business can measure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
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
              </div>
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
        <div className="text-center mb-6">
          <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
            Our Clients
          </p>
          <h3 className="text-gray-600 text-sm md:text-base">
            Trusted by Leading Global Enterprises
          </h3>
        </div>

        <div className="flex md:flex-wrap items-center justify-start md:justify-center gap-x-10 overflow-x-auto md:overflow-visible scrollbar-hide px-2">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-6 md:max-h-5 lg:max-h-7 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
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

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
            Let's Build Something Impactful. Together.
          </h2>
        </div>

        <form
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >

          {/* Name */}
          <div className="mb-6">
            <label className="flex items-center mb-2 text-gray-700">
              <User className="mr-2 text-blue-600" />
              Name
            </label>

            <input
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
            <label className="flex items-center mb-2 text-gray-700">
              <Mail className="mr-2 text-blue-600" />
              Email
            </label>

            <input
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
            <label className="flex items-center mb-2 text-gray-700">
              <Phone className="mr-2 text-blue-600" />
              Phone
            </label>

            <input
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
            <label className="flex items-center mb-2 text-gray-700">
              <MessageSquare className="mr-2 text-blue-600" />
              Message
            </label>

            <textarea
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
        </form>
      </div>
    </section>
  );
}