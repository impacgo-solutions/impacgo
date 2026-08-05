import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaChartBar,
  FaDatabase,
  FaCalculator,
  FaSyncAlt,
  FaUserShield,
  FaFileExport,
  FaShieldAlt,
  FaClock,
  FaCogs,
  FaLifeRing,
  FaChartLine,
  FaMobileAlt,
} from "react-icons/fa";
import { TrendingUp, BarChart3, Database } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import PageHero, { HeroPanel } from "../components/PageHero";
import financialimg from "../assets/financialimg.webp";
import SEO from "../components/SEO";
import {
  createServiceSchema,
  createFaqSchema,
  createBreadcrumbSchema,
} from "../components/schemas";
import Reveal, { RevealItem } from "../components/Reveal";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function PowerBI() {
  const navigate = useNavigate();

  // ============ SEO Data ============
  const faqs = [
    {
      question: "Why should we replace our Excel reports with Power BI?",
      answer:
        "Excel-based management reports have three big problems: (1) they take 2-3 days to prepare every month-end, tying up your finance team in copy-paste work instead of analysis. (2) They're always slightly out of date — the moment the report is sent, someone has a newer Excel file with different numbers. (3) They break every time D365FO export formats change. Power BI solves all three: dashboards refresh automatically from D365FO and your data sources, finance teams focus on insight not data prep, and the entire leadership team sees the same numbers in real time.",
    },
    {
      question: "How long does a Power BI implementation project take?",
      answer:
        "A focused Power BI project — one to two executive dashboards connected to D365FO — typically delivers in 4 to 6 weeks. A full enterprise Power BI rollout across finance, sales, operations, and inventory takes 8 to 12 weeks. Impacgo follows an agile delivery model with weekly demos so business stakeholders see working dashboards from sprint 1 — and steer the design before too much is built.",
    },
    {
      question: "Does Power BI connect to Dynamics 365 F&O for real-time data?",
      answer:
        "Yes. Power BI has native connectors to Dynamics 365 Finance and Operations via the D365 Common Data Service, Entity Store, and Azure SQL. We typically architect a hybrid model — DirectQuery for real-time operational data (current inventory levels, today's sales) and Import mode for historical analytics (YoY revenue trends, multi-year forecasts). This gives you both speed and depth without overloading your D365FO environment.",
    },
    {
      question: "What is DAX and do we need it for Power BI?",
      answer:
        "DAX (Data Analysis Expressions) is the formula language used in Power BI to define business measures — revenue, gross margin, working capital days, inventory turns, customer retention rates, etc. Most Power BI implementations live or die based on DAX quality. Impacgo's team includes certified DAX experts who build measure libraries optimised for Indian financial reporting — GST handling, multi-currency consolidation, statutory period closes, and Indian fiscal year reporting all built in.",
    },
    {
      question: "What does Power BI implementation cost in India?",
      answer:
        "Power BI implementation costs vary based on the number of dashboards, data source complexity, DAX measure depth, and required integrations with D365FO or other systems. Microsoft Power BI licensing (Pro at ~Rs. 800/user/month or Premium per capacity) is separate from implementation cost. Contact Impacgo for a free consultation — we'll scope your specific use case and provide a detailed proposal with both implementation and licensing recommendations.",
    },
  ];

  const serviceSchema = createServiceSchema({
    serviceName: "Microsoft Power BI Implementation",
    description:
      "Power BI implementation services for Indian enterprises. Live dashboards connected to Dynamics 365 F&O, SQL Server, Excel, and your data warehouse. DAX modeling, executive reporting, and self-service analytics — delivered in 4-8 weeks.",
    serviceType: "Business Intelligence Implementation",
    path: "/services/power-bi",
  });

  const faqSchema = createFaqSchema(faqs);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Power BI Implementation", path: "/services/power-bi" },
  ]);

  // ============ Page Content Data ============
  const keyFeatures = [
    {
      title: "Executive & CFO Dashboards",
      description:
        "Live P&L, cashflow, working capital, and KPI dashboards for leadership. Drill-down from headline numbers to transaction-level detail in 2 clicks. Designed for boardroom screens and mobile.",
      icon: <FaChartBar className="text-amber-600 text-4xl mb-4" />,
    },
    {
      title: "D365 F&O Data Modeling",
      description:
        "Connect Power BI to Dynamics 365 Finance & Operations using Common Data Service, Entity Store, and Azure SQL. Hybrid DirectQuery + Import architecture for the right mix of speed and depth.",
      icon: <FaDatabase className="text-amber-600 text-4xl mb-4" />,
    },
    {
      title: "DAX Measure Development",
      description:
        "Expertly built DAX measure libraries for revenue, margins, working capital, inventory turns, GST output, TDS deductions, and Indian fiscal year reporting — reusable across every dashboard.",
      icon: <FaCalculator className="text-amber-600 text-4xl mb-4" />,
    },
    {
      title: "Automated Refresh & Real-Time Data",
      description:
        "Scheduled refresh, DirectQuery for live operational data, incremental refresh for large fact tables. Dashboards stay current automatically — no more manual exports or stale numbers.",
      icon: <FaSyncAlt className="text-amber-600 text-4xl mb-4" />,
    },
    {
      title: "Row-Level Security & Governance",
      description:
        "Role-based dashboard access — sales managers see only their territories, plant managers see only their plants, the CFO sees everything. Workspace governance, data classification, and audit logs.",
      icon: <FaUserShield className="text-amber-600 text-4xl mb-4" />,
    },
    {
      title: "Paginated Reports & Statutory Output",
      description:
        "Pixel-perfect paginated reports for GST returns, TDS certificates, financial statements, and operational reports. Scheduled email distribution and SharePoint publishing.",
      icon: <FaFileExport className="text-amber-600 text-4xl mb-4" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Microsoft Specialisation",
      description:
        "We work exclusively in the Microsoft Dynamics and Power Platform ecosystem — deeper D365FO data model knowledge than generalist BI consultants.",
      icon: <FaShieldAlt className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Indian Finance Reporting Expertise",
      description:
        "GST, TDS, multi-currency consolidation, Indian fiscal year, statutory reporting — all built into our DAX measure libraries. No reinvention of the wheel.",
      icon: <FaUserShield className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Fast Delivery (4-8 Weeks)",
      description:
        "First working dashboard in sprint 1 (2 weeks). Production-ready Power BI rollout in 4-8 weeks for most projects.",
      icon: <FaClock className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Production-Grade Architecture",
      description:
        "Proper Power BI dataflows, workspaces, deployment pipelines, version control, and CI/CD via Azure DevOps. Not throwaway PBIX files emailed around.",
      icon: <FaCogs className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "DAX & Performance Tuning",
      description:
        "Power BI projects fail when dashboards are slow. We build with performance in mind — optimised DAX, star-schema modeling, incremental refresh, and aggregation tables.",
      icon: <FaChartLine className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Mobile & Embedded BI",
      description:
        "Dashboards optimised for Power BI mobile app and embedded inside D365FO, SharePoint, Teams, or custom apps. Your team gets analytics where they already work.",
      icon: <FaMobileAlt className="text-green-500 text-4xl mb-4" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Reporting Discovery Workshop",
      description:
        "1-week workshop with finance, operations, sales, and IT stakeholders. We catalog every existing report (Excel, SSRS, manual), identify pain points and missing analytics, and prioritise dashboards by ROI. Deliverable: reporting inventory and Power BI roadmap.",
    },
    {
      step: "02",
      title: "Data Architecture & Model Design",
      description:
        "We design the data architecture — D365FO Entity Store, Azure SQL, dataflows, semantic models. Star schema design, DAX measure strategy, refresh schedule, and workspace governance. Deliverable: technical architecture and project plan.",
    },
    {
      step: "03",
      title: "Dashboard Development (Agile Sprints)",
      description:
        "2-week sprints building dashboards, measures, and reports. Weekly demos let business users see working dashboards early and provide feedback. Iterative refinement of visuals, measures, and drill-down paths.",
    },
    {
      step: "04",
      title: "DAX Optimisation & Performance Tuning",
      description:
        "Every dashboard performance-tested for speed. DAX measures optimised, dataset sizes managed via incremental refresh, aggregation tables built where needed. Target: every dashboard renders in under 5 seconds.",
    },
    {
      step: "05",
      title: "UAT, Training & Self-Service Enablement",
      description:
        "Business users validate dashboards against current reports. Role-based training — for executive consumers, business analysts, and IT admins. Self-service Power BI training for teams who want to build their own dashboards.",
    },
    {
      step: "06",
      title: "Go-Live, Monitoring & Managed Services",
      description:
        "Production deployment via Power BI deployment pipelines. Monitoring of refresh failures and slow queries. Transition to AMS for ongoing dashboard additions, measure enhancements, and Power BI capacity optimisation.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO
  title="Power BI Implementation Partner | D365FO Dashboards | Global Analytics Specialists"
  description="Microsoft Power BI implementation services worldwide. Live dashboards connected to Dynamics 365 F&O, SQL Server, and your data warehouse. Replace Excel reporting with real-time analytics. DAX experts. India compliance reporting (GST, financial close) built in. 4-8 week delivery."
  keywords="Power BI implementation partner, Power BI D365FO, Power BI consultant, replace Excel reporting Power BI, DAX expert, Power BI dashboard development, financial reporting Power BI, Microsoft Power BI partner, Power BI implementation India, Power BI consulting, Power BI Microsoft Dynamics"
  path="/services/power-bi"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>

      <ScrollToTop />
      <Header />

      <main className="flex-grow">
        <PageHero
          backgroundStyle="linear-gradient(135deg, #b45309 0%, #d97706 35%, #1e40af 100%)"
          image={financialimg}
          imageAlt="Microsoft Power BI Implementation"
          eyebrow="Replace Excel Month-End Reports With Real-Time Dashboards"
          eyebrowIcon={TrendingUp}
          title={
            <>
              Power BI{" "}
              <span className="bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent">
                Implementation Partner
              </span>{" "}
              — Global
            </>
          }
          description="Stop building Excel reports that take three days to prepare and are out of date the moment they're sent. Impacgo builds live Power BI dashboards connected to Dynamics 365 F&O, your data warehouse, and finance systems — so your leadership team sees real numbers in real time."
          stats={[
            { icon: BarChart3, label: "Delivery", value: "4-8 weeks" },
            { icon: Database, label: "Sources", value: "D365 · Excel · SQL" },
            { icon: TrendingUp, label: "Refresh", value: "Real-time" },
          ]}
          primaryCta={{ label: "Get a Free Power BI Consultation", onClick: () => navigate("/contact") }}
          secondaryCta={{
            label: "See Our Process",
            onClick: () => document.getElementById("powerbi-process")?.scrollIntoView({ behavior: "smooth" }),
          }}
          panel={
            <HeroPanel
              eyebrow="Common Use Cases"
              title="What Indian finance teams build with Power BI"
              items={[
                { icon: BarChart3, title: "Executive & CFO dashboards", description: "Live P&L, cashflow, working capital views" },
                { icon: TrendingUp, title: "Sales & inventory analytics", description: "Real-time sales, stock, demand forecasting" },
                { icon: Database, title: "Financial close & statutory reports", description: "Faster month-end, GST/TDS dashboards" },
              ]}
              footnote="Native connectors for D365 F&O, SQL Server, Azure Synapse, Excel, SharePoint — plus DAX models built for Indian reporting requirements."
            />
          }
        />

        {/* ============ Pain-Point Banner ============ */}
        <section className="bg-amber-50 border-y-2 border-amber-200 py-6">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <TrendingUp className="h-8 w-8 text-amber-600 flex-shrink-0" />
              <p className="text-amber-900 text-base md:text-lg">
                <span className="font-bold">
                  Finance teams spend 2-3 days every month-end preparing reports
                  that are out of date the moment they're sent.
                </span>{" "}
                Power BI eliminates that.{" "}
                <button
                  onClick={() => navigate("/contact")}
                  className="underline font-semibold hover:text-amber-700"
                >
                  Start your Power BI project →
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* ============ Key Features ============ */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-amber-600 font-semibold mb-2 text-sm">
                What We Build
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Power BI Implementation Services
              </h2>
              <p className="text-lg text-gray-600">
                From executive dashboards to DAX measure libraries to paginated
                statutory reports — connected to D365FO and your wider data
                estate.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300"
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

        {/* ============ Why Choose Us ============ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-amber-600 font-semibold mb-2 text-sm">
                Why Impacgo
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Impacgo for Power BI?
              </h2>
              <p className="text-lg text-gray-600">
                Microsoft Dynamics and Power Platform specialists with deep
                D365FO data modeling and Indian finance reporting expertise.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((benefit, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className="bg-white/60 backdrop-blur-xl border border-white/50 p-6 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/85 hover:-translate-y-1 transition-all duration-300"
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

        {/* ============ Process (zigzag timeline) ============ */}
        <section id="powerbi-process" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-amber-600 font-semibold mb-2 text-sm">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Power BI Implementation Process
              </h2>
              <p className="text-lg text-gray-600">
                A proven, agile methodology — discovery to dashboards to
                ongoing managed services, in 4-8 weeks.
              </p>
            </Reveal>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>

              {processSteps.map((step, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className={`relative flex flex-col md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step circle */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-amber-600 text-white items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300">
                      <div className="md:hidden inline-block w-10 h-10 rounded-full bg-amber-600 text-white font-bold text-sm items-center justify-center mb-3 flex">
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

        {/* ============ FAQ Section ============ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <Reveal className="text-center mb-12">
              <p className="uppercase tracking-widest text-amber-600 font-semibold mb-2 text-sm">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Power BI — Frequently Asked Questions
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

        {/* ============ CTA Section ============ */}
        <section className="py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-blue-700 text-white">
          <Reveal className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
            <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <TrendingUp className="h-4 w-4 text-yellow-200 mr-2" />
              <span className="text-sm font-semibold text-yellow-100">
                Free Power BI Consultation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Replace your Excel reporting with live Power BI dashboards
            </h2>
            <p className="text-lg text-amber-50 mb-8">
              Whether you want one executive dashboard or a full enterprise
              rollout — connected to Dynamics 365, your data warehouse, or
              both — Impacgo's Power BI team can scope, build, and deploy in
              4-8 weeks. DAX experts, India compliance built in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-amber-700 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                Request Free Consultation
              </button>
              <button
                onClick={() => navigate("/services/power-apps")}
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Explore Power Apps
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