import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaFileInvoice,
  FaBrain,
  FaTags,
  FaSmile,
  FaEye,
  FaIdCard,
  FaShieldAlt,
  FaUserShield,
  FaClock,
  FaCogs,
  FaChartLine,
  FaLifeRing,
} from "react-icons/fa";
import { Sparkles, BrainCircuit, FileText } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import PageHero, { HeroPanel } from "../components/PageHero";
import Reveal, { RevealItem } from "../components/Reveal";
import financialimg from "../assets/financialimg.webp";
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

export default function AIBuilder() {
  const navigate = useNavigate();

  // ============ SEO Data ============
  const faqs = [
    {
      question: "What is Microsoft AI Builder and what does it do?",
      answer:
        "Microsoft AI Builder is the low-code AI engine built into the Power Platform. It lets you add prediction, document processing, text classification, sentiment analysis, and object detection capabilities directly inside Power Apps screens and Power Automate flows — without writing machine learning code. It ships with pre-built models for invoices, receipts, business cards, and IDs, and lets you train custom models for your domain using your own data. Think of it as 'AI for the Power Platform' — accessible to citizen developers and IT teams, not just data scientists.",
    },
    {
      question: "What's the most common AI Builder use case for Indian enterprises?",
      answer:
        "Invoice and purchase order data extraction. Indian enterprises receive thousands of supplier invoices each month as PDFs or scanned documents. AI Builder's pre-built invoice processing model extracts vendor name, invoice number, line items, GST amounts, totals, and dates — and Power Automate pushes the structured data into D365FO with validation rules and approval routing. This single use case typically saves 30-60% of accounts payable team time and dramatically reduces invoice processing errors.",
    },
    {
      question: "Do we need a data science team to use AI Builder?",
      answer:
        "No. That's the entire point of AI Builder. The pre-built models (invoice processing, receipt processing, business card reader, ID reader, sentiment analysis, key phrase extraction, language detection) work out of the box with zero training. For custom prediction models (e.g., predicting customer churn or sales lead quality), AI Builder walks IT teams and business analysts through a wizard — pick your data table, pick the column to predict, click train. The platform handles model selection, validation, and deployment. Impacgo helps with the domain-specific configuration and integration into your business processes.",
    },
    {
      question: "How does AI Builder integrate with Dynamics 365 F&O?",
      answer:
        "AI Builder integrates with D365FO through Power Automate flows and Power Apps. Typical pattern: a PDF invoice arrives in SharePoint or email → Power Automate flow triggers → AI Builder extracts the invoice data → Power Automate validates against vendor master in D365FO → if valid, creates a pending invoice in D365FO accounts payable → routes for approval. The same pattern applies to PO acknowledgments, delivery notes, expense receipts, and customer order forms.",
    },
    {
      question: "What does AI Builder cost in India?",
      answer:
        "AI Builder uses credit-based licensing. Each AI Builder action (invoice extracted, prediction made, etc.) consumes a small number of credits. Credits are purchased in capacity packs (1 million credits per pack). Most Indian enterprises start with one capacity pack and scale up based on actual usage. Impacgo helps you estimate credit consumption based on your specific use case during the consultation — and we optimise flow design to minimise unnecessary AI calls.",
    },
  ];

  const serviceSchema = createServiceSchema({
    serviceName: "Microsoft AI Builder Integration",
    description:
      "AI Builder consulting and integration services for Indian enterprises. Embed AI into Power Apps and Power Automate flows for invoice extraction, document processing, prediction, sentiment analysis, and object detection. Connected to Dynamics 365 F&O and Microsoft 365.",
    serviceType: "Low-Code AI Integration",
    path: "/services/ai-builder",
  });

  const faqSchema = createFaqSchema(faqs);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "AI Builder Integration", path: "/services/ai-builder" },
  ]);

  // ============ Page Content Data ============
  const keyFeatures = [
    {
      title: "Invoice & Document Processing",
      description:
        "Extract structured data from supplier invoices, purchase orders, delivery notes, and expense receipts using AI Builder's pre-built and custom-trained document models. Auto-create entries in D365FO with validation.",
      icon: <FaFileInvoice className="text-violet-600 text-4xl mb-4" />,
    },
    {
      title: "Custom Prediction Models",
      description:
        "Build prediction models on your business data — customer churn risk, sales lead quality, demand forecasting, equipment failure prediction — and surface predictions directly in Power Apps and Dynamics 365.",
      icon: <FaBrain className="text-violet-600 text-4xl mb-4" />,
    },
    {
      title: "Text Classification & Categorisation",
      description:
        "Auto-classify support tickets, customer feedback, emails, and case notes into predefined categories. Train models on your historical data so the AI learns your specific business taxonomy.",
      icon: <FaTags className="text-violet-600 text-4xl mb-4" />,
    },
    {
      title: "Sentiment & Key Phrase Analysis",
      description:
        "Analyse customer feedback, support transcripts, social mentions, and survey responses for sentiment (positive / neutral / negative) and extract key phrases. Embed analysis into your CRM workflows.",
      icon: <FaSmile className="text-violet-600 text-4xl mb-4" />,
    },
    {
      title: "Object Detection & Computer Vision",
      description:
        "Custom object detection models for quality control, inventory counting, safety compliance, and visual inspection. Integrate with shop floor Power Apps for camera-based AI checks.",
      icon: <FaEye className="text-violet-600 text-4xl mb-4" />,
    },
    {
      title: "ID & Business Card Recognition",
      description:
        "Pre-built models for ID document reading and business card extraction. Useful for KYC workflows, visitor management, lead capture at events, and customer onboarding processes.",
      icon: <FaIdCard className="text-violet-600 text-4xl mb-4" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Microsoft Specialisation",
      description:
        "We work exclusively in the Microsoft Dynamics and Power Platform ecosystem — deeper knowledge of how AI Builder integrates with Power Apps, Power Automate, and D365FO than general AI consulting firms.",
      icon: <FaShieldAlt className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "D365FO & Power Platform Expertise",
      description:
        "We've built AI Builder integrations into D365FO procurement, sales, and customer service workflows. We know the entity APIs, security models, and integration patterns end-to-end.",
      icon: <FaUserShield className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Fast Delivery (3-6 Weeks)",
      description:
        "Most AI Builder projects deliver business value within weeks. Pre-built models go live in days; custom models trained on your data go live in 3-6 weeks.",
      icon: <FaClock className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Credit Cost Optimisation",
      description:
        "AI Builder credits add up at scale. We design flows that minimise unnecessary AI calls — caching, batching, and routing only the documents that truly need AI extraction.",
      icon: <FaCogs className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Custom Model Training",
      description:
        "Beyond pre-built models, we train custom AI Builder models on your specific documents, predictions, and classifications. Indian invoice formats, regional business cards, industry-specific objects.",
      icon: <FaChartLine className="text-green-500 text-4xl mb-4" />,
    },
    {
      title: "Ongoing Support & AMS",
      description:
        "Post go-live SLA-backed monitoring of AI Builder accuracy and credit consumption. Model retraining as your data evolves. Continuous improvement under managed services.",
      icon: <FaLifeRing className="text-green-500 text-4xl mb-4" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "AI Use Case Discovery",
      description:
        "1-week workshop with the teams that handle document-heavy or repetitive cognitive tasks. We identify high-ROI use cases — invoice processing, ticket classification, churn prediction, quality inspection — and prioritise by business impact. Deliverable: AI Builder roadmap and proposal.",
    },
    {
      step: "02",
      title: "Model Selection & Architecture",
      description:
        "We decide whether your use case is best served by a pre-built AI Builder model (invoice processing, sentiment analysis) or a custom-trained model (your churn data, your document layout). We design the Power Automate flow, D365FO integration, and credit consumption strategy.",
    },
    {
      step: "03",
      title: "Data Preparation & Model Training",
      description:
        "For custom models, we work with your data — sample invoices, historical churn data, training images — to prepare AI Builder training datasets. Pre-built models skip this step. Either way, we configure the model with your specific business rules and field mappings.",
    },
    {
      step: "04",
      title: "Integration into Power Platform & D365FO",
      description:
        "Embed the AI Builder model into Power Apps screens and Power Automate flows. Push extracted data, predictions, or classifications into Dynamics 365 F&O with validation rules, exception handling, and approval routing where required.",
    },
    {
      step: "05",
      title: "Accuracy Testing & Tuning",
      description:
        "Test AI Builder accuracy against real-world data. Tune confidence thresholds — automate only the high-confidence cases, route low-confidence cases to humans for review. Goal: maximum automation rate without sacrificing accuracy on your critical processes.",
    },
    {
      step: "06",
      title: "Go-Live, Monitoring & Continuous Improvement",
      description:
        "Production deployment with rollback plans. AI accuracy monitoring — flag drifting models for retraining. Credit consumption monitoring. Transition to AMS for ongoing model improvements, new use cases, and platform updates.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO
  title="AI Builder Integration Partner | Power Platform AI | Global Low-Code AI Specialists"
  description="Microsoft AI Builder integration services worldwide. Embed AI into Power Apps and Power Automate for invoice extraction, document processing, prediction, sentiment analysis, and object detection. Connected to Dynamics 365 F&O. India compliance built in. Delivered in 3-6 weeks."
  keywords="AI Builder, Microsoft AI Builder consultant, AI Builder D365FO, Power Platform AI, AI invoice processing, document AI, AI prediction Power Apps, Microsoft AI integration, low code AI, AI Builder India, AI Builder consultant India, AI Builder partner"
  path="/services/ai-builder"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>

      <ScrollToTop />
      <Header />

      <main className="flex-grow">
        <PageHero
          backgroundStyle="linear-gradient(135deg, #4c1d95 0%, #6d28d9 35%, #be185d 100%)"
          image={financialimg}
          imageAlt="Microsoft AI Builder Integration"
          eyebrow="AI for Power Apps, Power Automate & D365"
          eyebrowIcon={Sparkles}
          title={
            <>
              AI Builder{" "}
              <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                Integration Partner
              </span>{" "}
              — Global Specialists
            </>
          }
          description="Embed Microsoft AI Builder into your Power Apps, Power Automate flows, and Dynamics 365 processes. Automate invoice extraction, document classification, sentiment analysis, prediction, and object detection — without a data science team or a deep learning bootcamp."
          stats={[
            { icon: Sparkles, label: "Delivery", value: "3-6 weeks" },
            { icon: BrainCircuit, label: "AI Models", value: "Pre-built · Custom" },
            { icon: FileText, label: "Top use case", value: "Invoice OCR" },
          ]}
          primaryCta={{ label: "Get a Free AI Builder Consultation", onClick: () => navigate("/contact") }}
          secondaryCta={{
            label: "See Our Process",
            onClick: () => document.getElementById("aibuilder-process")?.scrollIntoView({ behavior: "smooth" }),
          }}
          panel={
            <HeroPanel
              eyebrow="Common Use Cases"
              title="What Indian enterprises build with AI Builder"
              items={[
                { icon: FileText, title: "Invoice & PO data extraction", description: "Auto-create D365FO entries from PDFs" },
                { icon: BrainCircuit, title: "Prediction models", description: "Churn, demand forecasting, lead scoring" },
                { icon: Sparkles, title: "Text classification & sentiment", description: "Auto-categorise support tickets & feedback" },
              ]}
              footnote="Embedded directly into Power Apps screens and Power Automate flows — no separate ML platform, no data science team required."
            />
          }
        />

        {/* ============ Pain-Point Banner ============ */}
        <section className="bg-violet-50 border-y-2 border-violet-200 py-6">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <Sparkles className="h-8 w-8 text-violet-600 flex-shrink-0" />
              <p className="text-violet-900 text-base md:text-lg">
                <span className="font-bold">
                  Indian AP teams spend 30-60% of their week manually keying
                  invoice data into D365FO.
                </span>{" "}
                AI Builder eliminates that — embedded into Power Automate,
                connected to Dynamics 365.{" "}
                <button
                  onClick={() => navigate("/contact")}
                  className="underline font-semibold hover:text-violet-700"
                >
                  Start your AI Builder project →
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* ============ Key Features ============ */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-violet-600 font-semibold mb-2 text-sm">
                What We Build
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete AI Builder Integration Services
              </h2>
              <p className="text-lg text-gray-600">
                From pre-built invoice OCR to custom-trained prediction models
                — AI capabilities embedded directly into your Power Platform
                and Dynamics 365 workflows.
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
              <p className="uppercase tracking-widest text-violet-600 font-semibold mb-2 text-sm">
                Why Impacgo
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Impacgo for AI Builder?
              </h2>
              <p className="text-lg text-gray-600">
                Microsoft Dynamics and Power Platform specialists with
                production AI Builder experience — not a generalist AI
                consultancy.
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
        <section id="aibuilder-process" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <p className="uppercase tracking-widest text-violet-600 font-semibold mb-2 text-sm">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI Builder Project Process
              </h2>
              <p className="text-lg text-gray-600">
                A proven, agile methodology — discovery to model training to
                go-live, in 3-6 weeks.
              </p>
            </Reveal>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-violet-200"></div>

              {processSteps.map((step, index) => (
                <RevealItem
                  key={index}
                  index={index}
                  className={`relative flex flex-col md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step circle */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-violet-600 text-white items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-glass hover:shadow-glass-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300">
                      <div className="md:hidden inline-block w-10 h-10 rounded-full bg-violet-600 text-white font-bold text-sm items-center justify-center mb-3 flex">
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
              <p className="uppercase tracking-widest text-violet-600 font-semibold mb-2 text-sm">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI Builder — Frequently Asked Questions
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
        <section className="py-20 bg-gradient-to-br from-violet-700 via-purple-600 to-pink-600 text-white">
          <Reveal className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
            <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-200 mr-2" />
              <span className="text-sm font-semibold text-yellow-100">
                Free AI Builder Consultation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Add AI to your Power Apps and D365 workflows — in weeks, not months
            </h2>
            <p className="text-lg text-violet-100 mb-8">
              Whether you want to automate invoice extraction, predict
              customer churn, classify support tickets, or analyse documents
              — Impacgo's Power Platform team can scope, build, and deploy AI
              Builder solutions in 3-6 weeks. No data science team required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-violet-700 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                Request Free Consultation
              </button>
              <button
                onClick={() => navigate("/services/power-automate")}
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Explore Power Automate
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