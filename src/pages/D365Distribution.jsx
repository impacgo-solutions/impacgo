import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaWarehouse,
  FaHandshake,
  FaShippingFast,
  FaGlobe,
  FaMoneyBillWave,
  FaMobileAlt,
  FaShieldAlt,
  FaUserShield,
  FaClock,
  FaCogs,
  FaChartLine,
  FaLifeRing,
} from "react-icons/fa";
import { Truck, Boxes, Globe } from "lucide-react";

import POSHeader from "../components/POSHeader";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import PageHero, { HeroPanel } from "../components/PageHero";
import supplyChainImg from "../assets/supplychain.jpg";
import SEO from "../components/SEO";
import {
  createServiceSchema,
  createFaqSchema,
  createBreadcrumbSchema,
} from "../components/schemas";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function D365Distribution() {
  const navigate = useNavigate();

  // ============ SEO Data ============
  const faqs = [
    {
      question: "Which Dynamics 365 module is best for Indian distributors and wholesalers?",
      answer:
        "For most Indian distributors, wholesalers, and trading companies, the right product is Microsoft Dynamics 365 Finance and Operations (D365 F&O). It includes Advanced Warehouse Management (WMS), Trade Agreements (customer and vendor pricing structures), Multi-Location Inventory, Sales Order Management, Procurement, and full Indian compliance (GST, TDS, e-invoicing, e-way bills). It scales from single-warehouse traders to multi-state distributors with 20+ locations. Dynamics 365 Business Central works for smaller distributors (under 50 users, 1-2 locations), but most growing Indian distributors will outgrow it.",
    },
    {
      question: "How long does a D365 distribution implementation take in India?",
      answer:
        "A single-entity, single-warehouse D365 F&O distribution implementation typically takes 5-7 months from kickoff to go-live. A multi-state, multi-warehouse rollout with advanced WMS, trade agreements, and e-commerce integration takes 9-12 months. Importer-distributors with import documentation, customs duty handling, and bonded warehouse requirements typically need 9-15 months. Impacgo follows a phased approach with parallel-run before go-live so your daily operations stay live throughout.",
    },
    {
      question: "Can D365 F&O handle multi-warehouse and multi-state inventory for Indian distributors?",
      answer:
        "Yes. D365 F&O Advanced Warehouse Management handles unlimited warehouses, sites, and locations. Indian distributors typically configure separate warehouses for each branch or godown, with stock transfer orders for inter-warehouse movement. The system handles GST-compliant branch transfers (with e-way bills auto-generated), stock-in-transit accounting, and consolidated reporting across all locations. Real-time inventory visibility — sales teams see exactly what's available in every warehouse before promising customers.",
    },
    {
      question: "Does D365 F&O integrate with our B2B customer portal and e-commerce?",
      answer:
        "Yes. D365 F&O integrates with B2B customer portals (built on Power Apps Portals, custom React/Angular apps, or third-party platforms) using REST APIs. Common integrations include: customer self-service order placement, real-time stock and pricing display, order tracking, invoice download, and payment integration. For B2C e-commerce, D365 F&O integrates with Shopify, Magento, WooCommerce, and custom platforms via APIs. Impacgo builds these integrations using Azure Logic Apps, custom middleware, or direct API calls — whichever fits your scale.",
    },
    {
      question: "What does a D365 distribution implementation cost in India?",
      answer:
        "Implementation costs vary based on number of warehouses, transaction volume, level of customisation, integrations required (B2B portal, e-commerce, transport management, logistics partners), and chosen partner. Microsoft D365 F&O licensing is separate and is based on user count. Impacgo offers a free Distribution Discovery Workshop that delivers a detailed scope, recommended deployment approach, realistic timeline, and budget specific to your distribution operations.",
    },
  ];

  const serviceSchema = createServiceSchema({
    serviceName:
      "Microsoft Dynamics 365 Finance & Operations for Distribution",
    description:
      "Specialist D365 F&O implementation for Indian distributors, wholesalers, and trading companies. Advanced warehouse management, trade agreements, multi-location inventory, B2B portals, and Indian compliance (GST, TDS, e-invoicing, e-way bills).",
    serviceType: "Distribution ERP Implementation",
    path: "/industries/distribution",
  });

  const faqSchema = createFaqSchema(faqs);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Distribution", path: "/industries/distribution" },
  ]);

  // ============ Page Content Data ============
  const keyFeatures = [
    {
      title: "Advanced Warehouse Management (WMS)",
      description:
        "Multi-warehouse, multi-site, bin-level inventory tracking with directed put-away, wave picking, cycle counting, and barcode/RFID workflows. Built-in mobile WMS for warehouse staff via Power Apps and warehouse devices.",
      icon: <FaWarehouse className="text-emerald-600 text-4xl mb-4" />,
    },
    {
      title: "Trade Agreements & Pricing",
      description:
        "Customer-specific pricing, vendor pricing, volume discounts, promotional discounts, rebate agreements, and date-effective trade terms. Sophisticated pricing rules without spreadsheet workarounds.",
      icon: <FaHandshake className="text-emerald-600 text-4xl mb-4" />,
    },
    {
      title: "Multi-Location & Branch Transfers",
      description:
        "Unlimited warehouses, sites, godowns, and depots. Inter-branch stock transfer orders with GST-compliant branch transfer documentation, e-way bill generation, stock-in-transit tracking, and consolidated reporting.",
      icon: <FaShippingFast className="text-emerald-600 text-4xl mb-4" />,
    },
    {
      title: "B2B Portal & E-Commerce Integration",
      description:
        "Customer self-service portals built on Power Apps or React. Integrations with Shopify, Magento, WooCommerce, and custom B2B platforms. Real-time stock, pricing, and order status visible to customers 24/7.",
      icon: <FaGlobe className="text-emerald-600 text-4xl mb-4" />,
    },
    {
      title: "Indian Compliance & Statutory",
      description:
        "GST input/output reconciliation, GSTR-1/3B filing, TDS/TCS, e-invoicing with IRP integration, e-way bills, branch transfer documentation, and Indian financial reporting. India-localised D365FO out of the box.",
      icon: <FaMoneyBillWave className="text-emerald-600 text-4xl mb-4" />,
    },
    {
      title: "Mobile Sales & Field Operations",
      description:
        "Power Apps for field sales reps — customer visit logs, order taking, real-time stock check, credit limit checking, and order submission. Offline-capable for low-connectivity locations.",
      icon: <FaMobileAlt className="text-emerald-600 text-4xl mb-4" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Microsoft Distribution Specialisation",
      description:
        "We work exclusively in the Microsoft Dynamics ecosystem with deep distribution experience. WMS, trade agreements, branch transfers, and multi-location inventory are core competencies — not afterthoughts.",
      icon: <FaShieldAlt className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "India Compliance Expertise",
      description:
        "GST, TDS, TCS, e-invoicing, e-way bills, multi-state branch transfer documentation, and Indian statutory reports — fully understood, configured, and tested before go-live.",
      icon: <FaUserShield className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "B2B Portal & E-Commerce Integration",
      description:
        "We build B2B portals on Power Apps Portals or custom platforms — and integrate with Shopify, Magento, WooCommerce, or custom e-commerce platforms via APIs and middleware.",
      icon: <FaCogs className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Phased Go-Live Methodology",
      description:
        "Parallel-run before cutover. Warehouse-by-warehouse rollout for multi-location distributors. Rollback plans. Your sales and dispatch operations stay live throughout — no big-bang go-live risk.",
      icon: <FaClock className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Power Platform Bundling",
      description:
        "We extend D365FO with Power Apps for field sales, Power Automate for approval workflows and credit hold escalations, and Power BI for sales analytics — at no additional engagement.",
      icon: <FaChartLine className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Post Go-Live Managed Services",
      description:
        "Ongoing AMS support — month-end close support, minor enhancements, performance tuning, new warehouse onboarding, and continuous improvement under SLA.",
      icon: <FaLifeRing className="text-green-500 text-4xl mb-4" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Distribution Discovery Workshop",
      description:
        "2-3 week workshop with your sales, warehouse, procurement, and finance teams. We map current distribution processes, identify D365FO module fit, scope WMS configuration, B2B integration needs, and Indian compliance setup. Deliverable: detailed scope, timeline, and budget proposal.",
    },
    {
      step: "02",
      title: "Warehouse Blueprinting & Solution Design",
      description:
        "Detailed solution design covering warehouse zones and bin structure, trade agreement framework (customer/vendor pricing, discounts, rebates), branch transfer workflows, integration architecture for B2B/e-commerce, and India compliance configuration. Deliverable: functional and technical design.",
    },
    {
      step: "03",
      title: "Configuration, Customisation & Integration",
      description:
        "D365FO configured for your operations — legal entities, warehouses, sites, bin templates, trade agreement structures, customer/vendor master data templates, and Indian compliance. Custom development for unique requirements. Integrations to B2B portals, e-commerce platforms, transport partners.",
    },
    {
      step: "04",
      title: "Data Migration & Validation",
      description:
        "Master data (items, customers, vendors, price lists) migrated from legacy systems. Opening inventory balances per warehouse and per bin, open sales orders, open purchase orders, and pending shipments. Reconciliation reports confirm financial and inventory positions match exactly.",
    },
    {
      step: "05",
      title: "Testing, UAT & Training",
      description:
        "End-to-end testing across sales cycle, procurement cycle, warehouse operations, and Indian statutory reporting. User acceptance testing with sales reps, warehouse staff, dispatch team, and finance team. Role-based training programmes including mobile WMS app training for warehouse operators.",
    },
    {
      step: "06",
      title: "Parallel Run, Go-Live & Hypercare",
      description:
        "1-2 month parallel run between legacy system and D365FO for critical operations. Cutover weekend with final data migration. Go-live day on-site support, immediate issue resolution, and 8-12 week hypercare. Transition to AMS for long-term D365FO support.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO
  title="D365 for Distribution | WMS · Trade Agreements · Multi-Warehouse | Global Specialists"
  description="Microsoft Dynamics 365 Finance & Operations implementation for global distributors and wholesalers. Advanced warehouse management, trade agreements, multi-location inventory, B2B portals, and India GST/TDS/e-way bill compliance. Free discovery workshop."
  keywords="D365 Distribution, Dynamics 365 wholesale, Microsoft ERP for distribution, D365FO WMS, D365 trading company, Distribution ERP partner, D365 multi-warehouse, B2B distribution ERP, D365 trade agreements, wholesale distribution Microsoft Dynamics, D365 Distribution India, Distribution ERP India"
  path="/industries/distribution"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>

      <ScrollToTop />
      <POSHeader />

      <main className="flex-grow">
        <PageHero
          backgroundStyle="linear-gradient(135deg, #064e3b 0%, #047857 35%, #1e40af 100%)"
          image={supplyChainImg}
          imageAlt="D365 for Distribution and Wholesale"
          eyebrow="WMS · Trade Agreements · Multi-Location · Indian Distribution"
          eyebrowIcon={Truck}
          title={
            <>
              Dynamics 365 for{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-cyan-200 bg-clip-text text-transparent">
                Distribution & Wholesale
              </span>{" "}
              — Global Distribution Specialists
            </>
          }
          description="Specialist Microsoft Dynamics 365 Finance & Operations implementation for Indian distributors, wholesalers, and trading companies. Advanced warehouse management, multi-location inventory, trade agreements, B2B portals, and full GST/TDS compliance."
          stats={[
            { icon: Boxes, label: "Go-live", value: "5-9 months" },
            { icon: Globe, label: "Multi-site", value: "Unlimited" },
            { icon: Truck, label: "Coverage", value: "B2B · B2C" },
          ]}
          primaryCta={{ label: "Free Distribution Discovery Workshop", onClick: () => navigate("/contact") }}
          secondaryCta={{
            label: "See Our Process",
            onClick: () => document.getElementById("d365dist-process")?.scrollIntoView({ behavior: "smooth" }),
          }}
          panel={
            <HeroPanel
              eyebrow="Distribution Capabilities"
              title="What we build on D365FO for Indian distributors"
              items={[
                { icon: Boxes, title: "Advanced warehouse management", description: "Multi-warehouse, bin tracking, wave picking" },
                { icon: Truck, title: "Trade agreements & pricing", description: "Customer/vendor pricing, discounts, rebates" },
                { icon: Globe, title: "B2B portals & e-commerce", description: "Customer self-service, order automation" },
              ]}
              footnote="GST, TDS, e-invoicing, e-way bills, multi-state branch transfers, and Indian distribution compliance — fully configured."
            />
          }
        />

        {/* ============ Pain-Point Banner ============ */}
        <section className="bg-emerald-50 border-y-2 border-emerald-200 py-6">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <Truck className="h-8 w-8 text-emerald-600 flex-shrink-0" />
              <p className="text-emerald-900 text-base md:text-lg">
                <span className="font-bold">
                  Indian distributors juggling multiple warehouses, Excel
                  price lists, and disconnected B2B systems lose 10-20% of
                  margin to errors and stockouts.
                </span>{" "}
                D365 F&O closes the gap.{" "}
                <button
                  onClick={() => navigate("/contact")}
                  className="underline font-semibold hover:text-emerald-700"
                >
                  Request a discovery workshop →
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* ============ Key Features ============ */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-emerald-600 font-semibold mb-2 text-sm">
                Distribution Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete D365 F&O for Indian Distribution
              </h2>
              <p className="text-lg text-gray-600">
                Warehouse to customer to financial close — one integrated
                system covering every part of your distribution operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Why Choose Us ============ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-emerald-600 font-semibold mb-2 text-sm">
                Why Impacgo
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Impacgo for Your Distribution Implementation?
              </h2>
              <p className="text-lg text-gray-600">
                Microsoft Dynamics distribution specialists with deep India
                compliance and B2B integration experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {benefit.icon}
                  <h3 className="text-xl font-semibold text-green-600 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Process (zigzag timeline) ============ */}
        <section id="d365dist-process" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-emerald-600 font-semibold mb-2 text-sm">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                D365 Distribution Implementation Process
              </h2>
              <p className="text-lg text-gray-600">
                A proven, phased methodology — discovery to go-live to ongoing
                managed services. Parallel-run before cutover. Warehouse-by-
                warehouse for multi-site rollouts.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>

              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step circle */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-emerald-600 text-white items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="md:hidden inline-block w-10 h-10 rounded-full bg-emerald-600 text-white font-bold text-sm items-center justify-center mb-3 flex">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FAQ Section ============ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <div className="text-center mb-12">
              <p className="uppercase tracking-widest text-emerald-600 font-semibold mb-2 text-sm">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                D365 for Distribution — Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA Section ============ */}
        <section className="py-20 bg-gradient-to-br from-emerald-700 via-teal-700 to-blue-700 text-white">
          <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
            <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Truck className="h-4 w-4 text-emerald-200 mr-2" />
              <span className="text-sm font-semibold text-emerald-100">
                Free Distribution Discovery Workshop
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bring your Indian distribution operations onto Dynamics 365
            </h2>
            <p className="text-lg text-emerald-100 mb-8">
              Whether you're moving off legacy distribution software, replacing
              Excel-based pricing and inventory, or rolling D365 F&O out to
              multiple warehouses — Impacgo's Microsoft distribution
              specialists can scope, plan, and execute. India compliance, B2B
              portal integration, and Power Platform bundling included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-emerald-700 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                Request Free Discovery Workshop
              </button>
              <button
                onClick={() => navigate("/industries/manufacturing")}
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                See Manufacturing Industry
              </button>
            </div>
          </div>
        </section>
      </main>

      <ContactCard />
      <Footer />
    </div>
  );
}