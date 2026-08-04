import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaStore,
  FaShoppingBag,
  FaCreditCard,
  FaGift,
  FaWarehouse,
  FaMobileAlt,
  FaShieldAlt,
  FaUserShield,
  FaClock,
  FaCogs,
  FaChartLine,
  FaLifeRing,
} from "react-icons/fa";
import { Store, ShoppingBag, CreditCard } from "lucide-react";

import POSHeader from "../components/POSHeader";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import PageHero, { HeroPanel } from "../components/PageHero";
import Reveal, { RevealItem } from "../components/Reveal";
import retailImg from "../assets/retail.webp";
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

export default function D365Retail() {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What is Dynamics 365 Commerce and how is it different from D365 F&O?",
      answer:
        "Dynamics 365 Commerce is Microsoft's specialised retail platform built on top of D365 Finance & Operations. It adds retail-specific capabilities: cloud POS, modern POS for in-store, e-commerce storefronts, customer-facing shopping apps, loyalty programmes, store inventory management, omnichannel order fulfilment, and dynamic pricing. D365 Commerce shares the same backend as D365 F&O — so inventory, financials, procurement, and sales orders are unified across stores, online, and warehouses. Indian retailers running multi-store operations almost always need D365 Commerce, not just D365 F&O.",
    },
    {
      question: "How long does a D365 Commerce implementation take for an Indian retailer?",
      answer:
        "A single-region retailer with 5-20 stores typically implements D365 Commerce in 6-9 months. Multi-region retailers with 50+ stores and complex omnichannel scenarios (in-store, online, mobile, marketplace) typically need 9-15 months. Fashion and food retailers with seasonal pricing, promotions, and rapid product lifecycle management often need 12-18 months. Impacgo follows a phased approach — go-live with a pilot store cluster first, then roll out to remaining stores in waves.",
    },
    {
      question: "Does D365 Commerce support Indian GST and e-invoicing for retailers?",
      answer:
        "Yes. D365 Commerce has the India localisation pack covering: GST calculation at POS (correct CGST/SGST/IGST split), e-invoicing with IRP integration for B2B sales above threshold, e-way bill generation for inter-state stock transfers, retail-specific GST treatment (composition scheme, retail invoice formats), TCS handling, and GSTR-1/3B reporting. Receipts, invoices, and bills auto-format with Indian compliance requirements. We've configured this for several Indian retail clients — both single-state and multi-state operations.",
    },
    {
      question: "Can D365 Commerce integrate with our existing e-commerce platform like Shopify or Magento?",
      answer:
        "Yes. While Microsoft offers its own D365 Commerce e-commerce storefront, you can also integrate D365 F&O/Commerce with Shopify, Magento, WooCommerce, custom React platforms, or marketplaces (Amazon, Flipkart) via REST APIs and middleware. The integration covers product catalog sync, real-time inventory, order import, customer sync, and price/promotion updates. Impacgo builds these integrations using Azure Logic Apps, Azure Functions, or custom middleware depending on volume and complexity.",
    },
    {
      question: "What does a D365 Commerce implementation cost in India?",
      answer:
        "Costs vary based on number of stores, modules deployed (POS only vs full omnichannel), customisation, integration scope (e-commerce, payment gateways, logistics partners), and chosen partner. Microsoft licensing for D365 Commerce includes per-device POS licensing plus user licensing for back-office and is separate from implementation. Impacgo offers a free Retail Discovery Workshop with detailed scoping, deployment approach recommendation, realistic timeline, and budget specific to your retail operations.",
    },
  ];

  const serviceSchema = createServiceSchema({
    serviceName: "Microsoft Dynamics 365 Commerce for Retail",
    description:
      "Specialist Dynamics 365 Commerce implementation for Indian retailers. Omnichannel POS, e-commerce, store operations, inventory, merchandising, loyalty, and Indian compliance (GST, e-invoicing).",
    serviceType: "Retail ERP Implementation",
    path: "/industries/retail",
  });

  const faqSchema = createFaqSchema(faqs);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Retail", path: "/industries/retail" },
  ]);

  const keyFeatures = [
    {
      title: "Omnichannel POS",
      description:
        "Cloud POS for tablets and modern POS for store workstations. Offline-capable for connectivity-challenged stores. Common checkout experience across stores, mobile, and online. Indian compliance (GST, retail invoice formats) built in.",
      icon: <FaStore className="text-orange-600 text-4xl mb-4" />,
    },
    {
      title: "E-Commerce Storefronts",
      description:
        "D365 Commerce native online storefronts, or integration with Shopify, Magento, WooCommerce, and custom platforms. Real-time inventory, pricing, and order sync. Mobile-responsive customer experiences.",
      icon: <FaShoppingBag className="text-orange-600 text-4xl mb-4" />,
    },
    {
      title: "Loyalty, Promotions & Pricing",
      description:
        "Customer loyalty programmes with points, tiers, and rewards. Multi-tier promotions, coupons, BOGO offers. Dynamic pricing by channel, region, time, and customer segment. Real-time promotion engine.",
      icon: <FaGift className="text-orange-600 text-4xl mb-4" />,
    },
    {
      title: "Store & Warehouse Inventory",
      description:
        "Real-time visibility of stock across all stores and warehouses. Inter-store transfers, replenishment workflows, mobile receiving and counting, ship-from-store and click-and-collect fulfilment.",
      icon: <FaWarehouse className="text-orange-600 text-4xl mb-4" />,
    },
    {
      title: "Mobile Store Operations",
      description:
        "Mobile apps for store associates — inventory lookup, customer assistance, mobile POS for queue busting, clientelling, and remote selling. Power Apps customisations for store-specific workflows.",
      icon: <FaMobileAlt className="text-orange-600 text-4xl mb-4" />,
    },
    {
      title: "Payment Integration & Indian Compliance",
      description:
        "Integration with Indian payment gateways (Razorpay, Paytm, PhonePe), card terminals, UPI, and digital wallets. GST at POS, e-invoicing, e-way bills, and retail-specific Indian compliance fully configured.",
      icon: <FaCreditCard className="text-orange-600 text-4xl mb-4" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Microsoft Retail Specialisation",
      description:
        "We work in the Microsoft Dynamics ecosystem with retail focus. POS configuration, omnichannel orchestration, and store operations are core competencies — not afterthoughts.",
      icon: <FaShieldAlt className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Indian Retail Compliance Expertise",
      description:
        "GST at POS, e-invoicing, retail invoice formats, multi-state operations, e-way bills for stock transfers, and Indian payment gateway integration — fully understood and configured.",
      icon: <FaUserShield className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Phased, Pilot-Store Rollout",
      description:
        "We don't gamble your business on a big-bang go-live. Pilot store cluster first, learn what works, then roll out to remaining stores in waves. Your retail operations stay live throughout.",
      icon: <FaClock className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "E-Commerce Integration Depth",
      description:
        "Whether you use Microsoft D365 Commerce native storefronts or integrate with Shopify, Magento, or custom platforms — we've built it. Marketplace integrations (Amazon, Flipkart) included.",
      icon: <FaCogs className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Power Platform Bundling",
      description:
        "We extend D365 Commerce with Power Apps for store-specific workflows, Power Automate for approval chains and replenishment, and Power BI for sales/inventory dashboards — at no additional engagement.",
      icon: <FaChartLine className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Post Go-Live Managed Services",
      description:
        "Retail operations never stop — neither does our support. 24/7 POS support, new store onboarding, peak season readiness, platform updates, and continuous improvement under SLA.",
      icon: <FaLifeRing className="text-green-500 text-4xl mb-4" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Retail Discovery Workshop",
      description:
        "2-3 week workshop with your store operations, merchandising, e-commerce, and finance teams. We map current retail processes, identify pain points, scope omnichannel needs, and plan India compliance. Deliverable: detailed scope, timeline, and budget proposal.",
    },
    {
      step: "02",
      title: "Store & Channel Blueprinting",
      description:
        "Detailed solution design covering POS configuration (cloud POS vs modern POS), e-commerce architecture, omnichannel order orchestration, loyalty programme design, pricing/promotion framework, and Indian compliance setup. Deliverable: functional and technical design.",
    },
    {
      step: "03",
      title: "Configuration, Customisation & Integration",
      description:
        "D365 Commerce configured for your operations — legal entities, channels, stores, registers, payment methods, products, categories, prices, promotions. Custom development for unique requirements. Integrations to payment gateways, logistics partners, e-commerce platforms.",
    },
    {
      step: "04",
      title: "Data Migration & Validation",
      description:
        "Product master, customer master, pricing, promotions, loyalty members, and opening inventory migrated from legacy systems. Reconciliation reports confirm financial and inventory positions match exactly before pilot store cutover.",
    },
    {
      step: "05",
      title: "Pilot Store Go-Live & Learning",
      description:
        "Pilot store cluster (typically 2-5 stores) goes live first. Intensive on-site support, daily issue resolution, store staff training. 4-6 week pilot period to validate POS performance, inventory accuracy, and reporting before broader rollout.",
    },
    {
      step: "06",
      title: "Wave Rollout, Hypercare & AMS",
      description:
        "Remaining stores rolled out in waves of 5-10 stores at a time. Each wave includes pre-cutover training and post-cutover hypercare. Transition to ongoing AMS for new store onboarding, peak season support, and continuous retail platform improvement.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO
  title="D365 for Retail | D365 Commerce · Omnichannel POS · E-Commerce | Global Specialists"
  description="Microsoft Dynamics 365 Commerce implementation for global retailers. Omnichannel POS, e-commerce, store operations, inventory, merchandising, loyalty programmes, and India GST/e-invoicing compliance. Free retail discovery workshop."
  keywords="D365 Retail, Dynamics 365 Commerce, Microsoft retail ERP, D365 POS, omnichannel retail Microsoft, D365 Commerce partner, retail ERP partner, retail POS partner, Microsoft Dynamics retail implementation, D365 Retail India, Dynamics 365 Commerce India, omnichannel retail"
  path="/industries/retail"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>

      <ScrollToTop />
      <POSHeader />

      <main className="flex-grow">
        <PageHero
          backgroundStyle="linear-gradient(135deg, #7f1d1d 0%, #c2410c 35%, #b45309 100%)"
          image={retailImg}
          imageAlt="D365 for Retail and Commerce"
          eyebrow="Omnichannel POS · E-Commerce · Indian Retail"
          eyebrowIcon={Store}
          title={
            <>
              Dynamics 365 for{" "}
              <span className="bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent">
                Retail & Commerce
              </span>{" "}
              — Global Retail Specialists
            </>
          }
          description="Specialist Microsoft Dynamics 365 Commerce implementation for Indian retailers. Omnichannel POS, e-commerce, store operations, inventory, merchandising, loyalty, and Indian compliance (GST, e-invoicing) — one unified retail platform across every store and online channel."
          stats={[
            { icon: Store, label: "Go-live", value: "6-10 months" },
            { icon: CreditCard, label: "Channels", value: "In-store · Web · Mobile" },
            { icon: ShoppingBag, label: "Scale", value: "Unlimited stores" },
          ]}
          primaryCta={{ label: "Free Retail Discovery Workshop", onClick: () => navigate("/contact") }}
          secondaryCta={{
            label: "See Our Process",
            onClick: () => document.getElementById("d365retail-process")?.scrollIntoView({ behavior: "smooth" }),
          }}
          panel={
            <HeroPanel
              eyebrow="Retail Capabilities"
              title="What we build for Indian retailers"
              items={[
                { icon: Store, title: "Omnichannel POS & store ops", description: "Cloud POS, modern POS, store inventory" },
                { icon: ShoppingBag, title: "E-commerce & online storefronts", description: "D365 Commerce, Shopify, custom platforms" },
                { icon: CreditCard, title: "Loyalty, promotions & pricing", description: "Customer programmes, coupons, dynamic pricing" },
              ]}
              footnote="GST, e-invoicing, e-way bills, multi-state retail compliance, and Indian payment gateway integration — fully configured."
            />
          }
        />

        <section className="bg-orange-50 border-y-2 border-orange-200 py-6">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <Store className="h-8 w-8 text-orange-600 flex-shrink-0" />
              <p className="text-orange-900 text-base md:text-lg">
                <span className="font-bold">
                  Indian retailers running legacy POS + separate e-commerce +
                  Excel inventory lose 15-25% of margin to stockouts, manual
                  reconciliation, and missed promotions.
                </span>{" "}
                D365 Commerce unifies all of it.{" "}
                <button
                  onClick={() => navigate("/contact")}
                  className="underline font-semibold hover:text-orange-700"
                >
                  Request a discovery workshop →
                </button>
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-orange-600 font-semibold mb-2 text-sm">
                Retail Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete D365 Commerce for Indian Retail
              </h2>
              <p className="text-lg text-gray-600">
                POS to e-commerce to financial close — one unified retail
                platform across every channel and every store.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </RevealItem>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-orange-600 font-semibold mb-2 text-sm">
                Why Impacgo
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Impacgo for Your Retail Implementation?
              </h2>
              <p className="text-lg text-gray-600">
                Microsoft Dynamics retail specialists with deep India
                compliance and omnichannel experience.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((benefit, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {benefit.icon}
                  <h3 className="text-xl font-semibold text-green-600 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </RevealItem>
              ))}
            </div>
          </div>
        </section>

        <section id="d365retail-process" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-orange-600 font-semibold mb-2 text-sm">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                D365 Commerce Implementation Process
              </h2>
              <p className="text-lg text-gray-600">
                Pilot stores first. Wave rollout. Hypercare. No big-bang
                retail go-live ever.
              </p>
            </Reveal>

            <div className="relative max-w-4xl mx-auto">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>

              {processSteps.map((step, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className={`relative flex flex-col md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-orange-600 text-white items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="md:hidden inline-block w-10 h-10 rounded-full bg-orange-600 text-white font-bold text-sm items-center justify-center mb-3 flex">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <Reveal className="text-center mb-12">
              <p className="uppercase tracking-widest text-orange-600 font-semibold mb-2 text-sm">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                D365 for Retail — Frequently Asked Questions
              </h2>
            </Reveal>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </RevealItem>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-red-800 via-orange-700 to-amber-700 text-white">
          <Reveal className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Store className="h-4 w-4 text-orange-200 mr-2" />
              <span className="text-sm font-semibold text-orange-100">
                Free Retail Discovery Workshop
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bring all your stores, channels, and customer data onto one platform
            </h2>
            <p className="text-lg text-orange-100 mb-8">
              Whether you're moving off legacy retail software, unifying POS
              with e-commerce for the first time, or rolling out a new chain
              of stores — Impacgo's Microsoft retail specialists can scope,
              plan, and execute. India compliance, omnichannel orchestration,
              and Power Platform bundling included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-orange-700 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                Request Free Discovery Workshop
              </button>
              <button
                onClick={() => navigate("/industries/distribution")}
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                See Distribution Industry
              </button>
            </div>
          </Reveal>
        </section>
      </main>

      <ContactCard />
      <Footer />
    </div>
  );
}