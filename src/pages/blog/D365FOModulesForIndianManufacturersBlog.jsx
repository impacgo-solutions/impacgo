import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Factory,
  Database,
} from "lucide-react";

import POSHeader from "../../components/POSHeader";
import Footer from "../../components/Footer";
import ContactCard from "../../components/ContactCard";
import SEO from "../../components/SEO";
import { createFaqSchema, createBreadcrumbSchema } from "../../components/schemas";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function D365FOModulesForIndianManufacturersBlog() {
  // ============ Article Schema for SEO ============
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "D365FO Modules for Indian Manufacturers: Complete Guide for 2026",
    description:
      "Explore the most important D365FO modules used by Indian manufacturers including Finance, Supply Chain Management, Production Control, Warehouse Management, Quality Management, Asset Management, and Master Planning.",
    image: "https://www.impacgo.com/logo.png",
    datePublished: "2026-06-22",
    dateModified: "2026-06-22",
    author: {
      "@type": "Person",
      name: "Bhushan Gonthina",
      jobTitle: "Developer",
      worksFor: {
        "@type": "Organization",
        name: "Impacgo Solutions Pvt Ltd",
        url: "https://www.impacgo.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Impacgo Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://www.impacgo.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.impacgo.com/blog/d365fo-modules-for-indian-manufacturers",
    },
  };

  const faqs = [
    {
      question: "Which D365FO module is most important for manufacturers?",
      answer:
        "The most important modules for manufacturers are Production Control and Supply Chain Management. These modules help manage production processes, inventory, procurement, and shop floor operations while ensuring smooth material flow across the organization.",
    },
    {
      question: "Does D365FO support GST compliance for Indian manufacturers?",
      answer:
        "Yes. D365FO includes Indian localization features that support GST calculations, e-Invoicing, e-Way Bills, TDS, and statutory reporting requirements. This helps manufacturers maintain compliance while reducing manual effort.",
    },
    {
      question: "Can D365FO handle multiple factories and warehouses?",
      answer:
        "Yes. D365FO supports multi-site, multi-warehouse, and multi-company operations. Manufacturers can manage inventory, production, procurement, and financial data across multiple plants from a single integrated platform.",
    },
    {
      question: "Which D365FO module helps improve production planning?",
      answer:
        "The Master Planning module helps manufacturers optimize production schedules, forecast demand, perform Material Requirements Planning (MRP), and ensure that raw materials and resources are available when needed.",
    },
    {
      question: "How does the Quality Management module benefit manufacturers?",
      answer:
        "The Quality Management module enables manufacturers to define inspection processes, perform quality checks, track non-conformance issues, and maintain product standards. This helps reduce defects and improve customer satisfaction.",
    },
  ];

  const faqSchema = createFaqSchema(faqs);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    {
      name: "D365FO Modules for Indian Manufacturers",
      path: "/blog/d365fo-modules-for-indian-manufacturers",
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO
        title="D365FO Modules for Indian Manufacturers | Complete Guide 2026"
        description="Explore the most important D365FO modules for Indian manufacturers, including Finance, Supply Chain Management, Production Control, Warehouse Management, Quality Management, Asset Management, and Master Planning. Learn how these modules improve productivity, compliance, inventory control, and operational efficiency."
        keywords="D365FO modules for manufacturers, D365FO manufacturing module, D365FO production control, D365FO supply chain management, D365FO warehouse management, D365FO quality management, D365FO master planning, Dynamics 365 manufacturing ERP India, D365FO GST compliance India, D365FO for Indian manufacturers"
        path="/blog/d365fo-modules-for-indian-manufacturers"
        schema={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      <ScrollToTop />
      <POSHeader />

      <main className="flex-grow">
        {/* ============ Hero Section ============ */}
        <section className="relative w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative container mx-auto px-6 md:px-12 pt-32 pb-16 md:pt-40 md:pb-20">
            <div className="max-w-4xl mx-auto">
              <nav className="text-sm text-blue-200 mb-6">
                <Link to="/" className="hover:text-white">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/blog" className="hover:text-white">Blog</Link>
                <span className="mx-2">/</span>
                <span className="text-white">D365FO Modules for Indian Manufacturers</span>
              </nav>

              <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/40 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Tag className="h-3.5 w-3.5 text-blue-200 mr-2" />
                <span className="text-xs font-semibold text-blue-100 uppercase tracking-wider">
                  D365FO Manufacturing
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                D365FO Modules for Indian Manufacturers
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
                A complete guide for 2026 covering the key Microsoft Dynamics 365
                Finance & Operations modules used by Indian manufacturers to improve
                production efficiency, inventory control, quality management,
                financial visibility, and supply chain performance.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200">
                {/* <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-400/30 flex items-center justify-center mr-3">
                    <span className="text-white font-bold">ST</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Srikar Tantravahi</p>
                    <p className="text-xs">Developer, Impacgo Solutions</p>
                  </div>
                </div> */}
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>22 June 2026</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>12 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Article Body ============ */}
        <article className="bg-white">
          <div className="container mx-auto px-6 md:px-12 py-12 md:py-16 max-w-4xl">

            {/* TL;DR card */}
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6 mb-12">
              <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Quick Overview
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Microsoft Dynamics 365 Finance & Operations offers a comprehensive
                set of modules designed to help Indian manufacturers streamline
                operations, improve production efficiency, manage inventory, and
                maintain financial control from a single integrated platform.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The most commonly used modules include <strong>Finance</strong>,
                <strong> Supply Chain Management</strong>,
                <strong> Production Control</strong>,
                <strong> Warehouse Management</strong>,
                <strong> Quality Management</strong>,
                <strong> Asset Management</strong>, and
                <strong> Master Planning</strong>. Together, these modules help
                manufacturers reduce costs, improve visibility, and support business
                growth while ensuring compliance with Indian regulatory requirements.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
              <h3 className="text-base font-bold text-gray-900 mb-4">
                In this article
              </h3>
              <ol className="space-y-2 text-sm text-blue-600">
                <li><a href="#finance-module" className="hover:underline">1. Finance Module</a></li>
                <li><a href="#gst-compliance" className="hover:underline">2. GST Compliance for Indian Manufacturers</a></li>
                <li><a href="#multi-factories" className="hover:underline">3. Multi-Factory and Warehouse Support</a></li>
                <li><a href="#master-planning" className="hover:underline">4. Master Planning Module</a></li>
                <li><a href="#quality-management" className="hover:underline">5. Quality Management Module</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <section id="finance-module" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                1. Which D365FO Module is Most Important for Manufacturers?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When manufacturers evaluate Microsoft Dynamics 365 Finance & Operations
                (D365FO), one of the first questions they ask is: "Which modules do we
                actually need?" The answer depends on your business processes, industry requirements,
                and growth plans. A small manufacturing company may only require Finance and Supply Chain Management, while a large enterprise may need
                Production Control, Warehouse Management, Quality Management, Asset Management, and Master Planning as well.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                D365FO is designed as a comprehensive ERP platform where each module addresses a specific business function. Together, these modules provide end-to-end visibility across
                finance, procurement, inventory, production, warehousing, maintenance, and customer operations.
                This integrated approach eliminates data silos and helps manufacturers make faster, more informed decisions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In this article, we'll explore the most important D365FO
                modules for Indian manufacturers, their key capabilities,
                business benefits, and how they help organizations improve
                operational efficiency, maintain compliance, reduce costs,
                and scale for future growth with
                <Link to="/services/d365" className="text-blue-600 underline hover:text-blue-800">
                  {" "}Microsoft Dynamics 365 Finance & Operations
                </Link>.
              </p>
            </section>

            {/* Section 2 */}
            <section id="gst-compliance" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                2. Does D365FO Support GST Compliance for Indian Manufacturers?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Yes. Microsoft Dynamics 365 Finance & Operations includes
                comprehensive Indian localization features that help manufacturers
                comply with GST regulations and other statutory requirements.
                These capabilities reduce manual effort, improve accuracy, and
                simplify tax reporting across business operations.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">GST Management</h3>
                      <p className="text-sm text-gray-600">Automated GST calculations and tax configuration</p>
                    </div>
                    <span className="bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-full">Built-In</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    D365FO supports GST tax calculations, input tax credit tracking,
                    tax settlements, and GST reporting requirements for Indian businesses.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">E-Invoicing</h3>
                      <p className="text-sm text-gray-600">Government-compliant electronic invoicing</p>
                    </div>
                    <span className="bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">Supported</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Generate and manage GST-compliant e-invoices with integration
                    capabilities for government-authorized Invoice Registration Portals.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">E-Way Bill Integration</h3>
                      <p className="text-sm text-gray-600">Transportation compliance management</p>
                    </div>
                    <span className="bg-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">Available</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Streamline movement of goods by supporting e-Way Bill generation
                    and compliance requirements for transportation activities.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">TDS & Statutory Reporting</h3>
                      <p className="text-sm text-gray-600">Indian tax and compliance reporting</p>
                    </div>
                    <span className="bg-amber-600 text-white text-sm font-bold px-4 py-1 rounded-full">Included</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Manage TDS calculations, statutory reports, and financial
                    compliance requirements through localized Indian features.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="multi-factories" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                3. Can D365FO Handle Multiple Factories and Warehouses?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Yes. Microsoft Dynamics 365 Finance & Operations is designed to
                support manufacturers operating across multiple factories,
                warehouses, distribution centers, and legal entities. It provides
                centralized visibility while allowing each location to maintain
                its own operational processes and inventory controls.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Capability</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Description</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    <tr className="border-b">
                      <td className="px-4 py-3 font-semibold">Multi-Site Management</td>
                      <td className="px-4 py-3">Manage multiple factories from a single platform</td>
                      <td className="px-4 py-3">Centralized operational visibility</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Multi-Warehouse Support</td>
                      <td className="px-4 py-3">Track inventory across multiple warehouses</td>
                      <td className="px-4 py-3">Improved inventory accuracy</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-semibold">Intercompany Operations</td>
                      <td className="px-4 py-3">Manage transactions between business entities</td>
                      <td className="px-4 py-3">Better financial control</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Inventory Transfers</td>
                      <td className="px-4 py-3">Transfer stock between locations efficiently</td>
                      <td className="px-4 py-3">Reduced stock shortages</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Centralized Reporting</td>
                      <td className="px-4 py-3">Consolidated reporting across all locations</td>
                      <td className="px-4 py-3">Better decision-making</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                With D365FO, manufacturers can monitor inventory levels,
                production activities, and warehouse operations across all
                locations in real time. This helps organizations improve
                coordination, reduce operational inefficiencies, and maintain
                consistent processes throughout the business.
              </p>
            </section>

            {/* Section 4 */}
            <section id="master-planning" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                4. Which D365FO Module Helps Improve Production Planning?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>Master Planning</strong> module is the primary D365FO
                module responsible for improving production planning. It helps
                manufacturers forecast demand, plan resources, optimize inventory,
                and ensure materials are available when needed. By automating
                planning processes, manufacturers can reduce shortages, minimize
                excess inventory, and improve on-time delivery performance.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <CheckCircle className="h-6 w-6 text-green-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Demand Forecasting</h3>
                  <p className="text-sm text-gray-700">Predict future demand using historical sales data and business forecasts.</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <CheckCircle className="h-6 w-6 text-green-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Material Requirements Planning (MRP)</h3>
                  <p className="text-sm text-gray-700">Automatically calculate raw material requirements based on production demand.</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <CheckCircle className="h-6 w-6 text-green-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Capacity Planning</h3>
                  <p className="text-sm text-gray-700">Balance workloads across machines, work centers, and production resources.</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <CheckCircle className="h-6 w-6 text-green-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Production Scheduling</h3>
                  <p className="text-sm text-gray-700">Create optimized production schedules based on demand and available capacity.</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <CheckCircle className="h-6 w-6 text-green-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Inventory Optimization</h3>
                  <p className="text-sm text-gray-700">Maintain ideal inventory levels while reducing carrying costs.</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <CheckCircle className="h-6 w-6 text-green-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Automated Recommendations</h3>
                  <p className="text-sm text-gray-700">Generate planning suggestions to improve manufacturing efficiency and responsiveness.</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                By leveraging the Master Planning module, Indian manufacturers can
                align production with market demand, improve resource utilization,
                and make better operational decisions through real-time planning insights.
              </p>
            </section>

            {/* Section 5 */}
            <section id="quality-management" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                5. How Does the Quality Management Module Benefit Manufacturers?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Quality Management module in D365FO helps manufacturers
                maintain consistent product quality throughout the production
                process. By automating inspections, tracking quality issues,
                and enforcing quality standards, manufacturers can reduce defects,
                improve customer satisfaction, and ensure regulatory compliance.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <AlertCircle className="h-6 w-6 text-red-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Quality Inspections</h3>
                  <p className="text-sm text-gray-700">Automate quality checks during receiving, production, and shipping processes.</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <AlertCircle className="h-6 w-6 text-red-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Non-Conformance Tracking</h3>
                  <p className="text-sm text-gray-700">Identify, record, and resolve quality issues before they impact customers.</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <AlertCircle className="h-6 w-6 text-red-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Standardized Testing</h3>
                  <p className="text-sm text-gray-700">Create inspection plans and testing procedures to ensure product consistency.</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <AlertCircle className="h-6 w-6 text-red-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Regulatory Compliance</h3>
                  <p className="text-sm text-gray-700">Support industry regulations and quality standards through documented processes.</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <AlertCircle className="h-6 w-6 text-red-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Reduced Defects</h3>
                  <p className="text-sm text-gray-700">Detect quality issues early and minimize rework, scrap, and production losses.</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <AlertCircle className="h-6 w-6 text-red-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Improved Customer Satisfaction</h3>
                  <p className="text-sm text-gray-700">Deliver high-quality products consistently and strengthen customer trust.</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                By implementing the Quality Management module, Indian manufacturers
                can establish a culture of continuous improvement, reduce operational
                risks, and ensure that products meet both customer expectations and
                industry quality standards.
              </p>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12 pt-8 border-t border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

           

          </div>
        </article>

        {/* ============ CTA Section ============ */}
        <section className="py-20 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white">
          <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
            <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <TrendingUp className="h-4 w-4 text-blue-200 mr-2" />
              <span className="text-sm font-semibold text-blue-100">
                Free Manufacturing ERP Assessment
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Modernize Your Manufacturing Operations with D365FO?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Discover how the right combination of D365FO modules can help
              streamline production, improve inventory visibility, enhance
              quality control, and support business growth. Our experts can
              help you identify the modules that best fit your manufacturing
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow inline-flex items-center justify-center"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services/d365"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center"
              >
                Explore D365FO Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* ============ Related Posts ============ */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/blog/how-long-does-d365fo-implementation-take"
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="h-40 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                  <Factory className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    D365 Implementation
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    How Long Does a D365FO Implementation Take?
                  </h3>
                  <p className="text-sm text-gray-600">
                    A realistic timeline guide covering discovery, configuration,
                    data migration, testing, and go-live for D365FO projects.
                  </p>
                </div>
              </Link>
              <Link
                to="/blog/ax-2012-end-of-support-2028-india"
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="h-40 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                  <AlertCircle className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    AX Migration
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    AX 2012 End of Support 2028
                  </h3>
                  <p className="text-sm text-gray-600">
                    Microsoft's end of support deadline for AX 2012 is January 2028.
                    Here's what enterprises need to plan for.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <ContactCard />
      <Footer />
    </div>
  );
}