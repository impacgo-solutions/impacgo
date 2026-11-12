import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
    Calendar,
    Clock,
    Tag,
    Sparkles,
    ArrowRight,
    CheckCircle,
    AlertTriangle,
} from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactCard from "../../components/ContactCard";
import SEO from "../../components/SEO";
import {
    createArticleSchema,
    createFaqSchema,
    createBreadcrumbSchema,
} from "../../components/schemas";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

export default function CopilotD365FOBlog() {
    const navigate = useNavigate();

    const faqs = [
        {
            question: "What is Microsoft Copilot in Dynamics 365 Finance and Operations?",
            answer:
                "Copilot in D365FO is Microsoft's generative-AI layer built into finance and supply chain workspaces — it summarizes records, drafts customer collection emails, explains variances, and answers natural-language questions about your data directly inside the D365FO interface.",
        },
        {
            question: "Does Copilot replace the need for D365FO customization or reports?",
            answer:
                "No. Copilot is an assistant layered on top of your existing data and processes — it summarizes and drafts faster, but it doesn't replace core reporting (Power BI), workflow automation (Power Automate), or custom development work that structural business requirements still need.",
        },
        {
            question: "Is Copilot in D365FO included in standard licensing?",
            answer:
                "Copilot capabilities are rolling out in phases across different D365FO workspaces, and some features are licensed as add-ons tied to Microsoft's AI capacity model. Availability depends on your D365FO version and licensing tier — Impacgo can confirm what's included for your specific environment.",
        },
        {
            question: "Which D365FO areas currently have Copilot features?",
            answer:
                "As of 2026, Copilot capabilities are most mature in Accounts Receivable collections (payment reminder drafting), variance analysis in financial reporting, category management summaries in procurement, and natural-language query assistance across several workspaces — with more areas being added on Microsoft's release cadence.",
        },
        {
            question: "Is it safe to use Copilot with sensitive financial data?",
            answer:
                "Copilot in D365FO operates within your existing Microsoft 365 and Dataverse security boundary — it doesn't send your data to train public models, and responses respect the same role-based security you already have configured. It's worth reviewing Microsoft's current data handling documentation for your specific tenant before enabling it broadly.",
        },
    ];

    const articleSchema = createArticleSchema({
        title:
            "Microsoft Copilot in Dynamics 365 F&O: What It Actually Does in 2026",
        description:
            "A practical look at what Microsoft Copilot actually does inside Dynamics 365 Finance and Operations today — collections, variance analysis, and natural-language queries — versus what it doesn't replace.",
        imageUrl: "https://www.impacgo.com/logo.png",
        datePublished: "2026-08-11",
        dateModified: "2026-08-11",
        authorName: "Impacgo Solutions",
        path: "/blog/copilot-in-dynamics-365-finance-operations",
    });

    const faqSchema = createFaqSchema(faqs);

    const breadcrumbSchema = createBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        {
            name: "Copilot in Dynamics 365 F&O",
            path: "/blog/copilot-in-dynamics-365-finance-operations",
        },
    ]);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Microsoft Copilot in Dynamics 365 F&O: What It Actually Does in 2026"
                description="What Microsoft Copilot actually does inside D365 Finance and Operations today — AI-assisted collections, variance analysis, and natural-language queries — and where it stops."
                keywords="Copilot in Dynamics 365, D365FO Copilot, Microsoft Copilot finance operations, AI in D365FO, Dynamics 365 AI features, Copilot accounts receivable, D365FO generative AI"
                path="/blog/copilot-in-dynamics-365-finance-operations"
                schema={[articleSchema, faqSchema, breadcrumbSchema]}
            />

            <ScrollToTop />
            <Header alwaysSolid />

            <main className="flex-grow">
                <section className="relative bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 pt-32 pb-12 md:pt-40 md:pb-16">
                    <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                        <nav className="text-sm text-gray-600 mb-6">
                            <Link to="/" className="hover:text-blue-600">Home</Link>{" "}
                            <span className="mx-2">/</span>{" "}
                            <Link to="/blog" className="hover:text-blue-600">Blog</Link>{" "}
                            <span className="mx-2">/</span>{" "}
                            <span className="text-gray-900">Copilot in Dynamics 365 F&O</span>
                        </nav>

                        <div className="inline-flex items-center bg-indigo-100 border border-indigo-300 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="h-4 w-4 text-indigo-700 mr-2" />
                            <span className="text-sm font-semibold text-indigo-900">
                                D365FO + AI
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Microsoft Copilot in Dynamics 365 F&O: What It Actually Does in 2026
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center"><Calendar className="h-4 w-4 mr-1.5" />Published August 2026</span>
                            <span className="flex items-center"><Clock className="h-4 w-4 mr-1.5" />10 min read</span>
                            <span className="flex items-center"><Tag className="h-4 w-4 mr-1.5" />Copilot / D365FO</span>
                        </div>
                    </div>
                </section>

                <article className="py-12 md:py-16">
                    <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                            "AI in your ERP" gets pitched a lot louder than it actually ships. Inside
                            Dynamics 365 Finance and Operations, Copilot is real and useful — but it's
                            narrower than the marketing suggests, and worth understanding precisely
                            before you plan a rollout around it.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            This is a practical rundown of what Copilot in D365FO does today, where it
                            genuinely saves time, and where it's still an assistant — not a
                            replacement for reporting, automation, or configuration work.
                        </p>

                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-10 rounded-r-lg">
                            <div className="flex items-start">
                                <AlertTriangle className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-indigo-900 mb-2">The honest framing</h3>
                                    <p className="text-indigo-800">
                                        Copilot drafts, summarizes, and answers questions about data
                                        that's already in D365FO. It doesn't build your reports, doesn't
                                        replace Power Automate workflows, and doesn't do your
                                        configuration for you.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
                            <h3 className="text-xl font-bold mb-4">In this article</h3>
                            <ul className="space-y-3 text-blue-600">
                                <li><a href="#what-it-is" className="hover:underline">1. What Copilot in D365FO actually is</a></li>
                                <li><a href="#where-it-helps" className="hover:underline">2. Where it genuinely helps today</a></li>
                                <li><a href="#collections" className="hover:underline">3. Accounts Receivable collections</a></li>
                                <li><a href="#variance" className="hover:underline">4. Variance analysis & natural-language queries</a></li>
                                <li><a href="#where-it-stops" className="hover:underline">5. Where Copilot stops</a></li>
                                <li><a href="#bottom-line" className="hover:underline">6. The bottom line</a></li>
                                <li><a href="#faq" className="hover:underline">7. Frequently asked questions</a></li>
                            </ul>
                        </div>

                        <h2 id="what-it-is" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            1. What Copilot in D365FO actually is
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Copilot in D365FO is Microsoft's generative-AI assistant embedded directly
                            into finance and supply chain workspaces. Rather than a separate chatbot
                            bolted on the side, it works inside the screens people already use —
                            summarizing a customer's account, drafting a collection email, or
                            answering a question about why a number moved.
                        </p>
                        <ul className="space-y-3 mb-6 text-gray-700">
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span><strong>In-context.</strong> Runs inside the D365FO workspace you're already in, not a separate tool.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span><strong>Grounded in your data.</strong> Responses draw on your actual D365FO records, not generic answers.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span><strong>Rolling out in phases.</strong> Coverage varies by workspace and version — it isn't uniformly available everywhere yet.</span>
                            </li>
                        </ul>

                        <h2 id="where-it-helps" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            2. Where it genuinely helps today
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The strongest use cases are the ones that are naturally language-heavy —
                            drafting, summarizing, and explaining — rather than structural changes to
                            how the system works.
                        </p>

                        <h2 id="collections" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            3. Accounts Receivable collections
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
                                <div className="bg-indigo-100 text-indigo-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4">1</div>
                                <h3 className="font-bold text-gray-900 mb-2">Account Summaries</h3>
                                <p className="text-sm text-gray-700">Copilot summarizes a customer's payment history and outstanding balances in plain language for the collections agent.</p>
                            </div>
                            <div className="bg-white border-2 border-violet-200 rounded-xl p-6">
                                <div className="bg-violet-100 text-violet-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4">2</div>
                                <h3 className="font-bold text-gray-900 mb-2">Drafted Reminders</h3>
                                <p className="text-sm text-gray-700">Drafts context-aware payment reminder emails referencing the actual invoice and due date, ready for review before sending.</p>
                            </div>
                            <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                                <div className="bg-purple-100 text-purple-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4">3</div>
                                <h3 className="font-bold text-gray-900 mb-2">Prioritization</h3>
                                <p className="text-sm text-gray-700">Helps collections teams identify which overdue accounts to work first based on risk and value.</p>
                            </div>
                        </div>

                        <h2 id="variance" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            4. Variance analysis & natural-language queries
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            In financial reporting, Copilot can explain why a line moved period over
                            period in plain language, saving an analyst the manual drill-down. Across
                            several workspaces, it also answers direct natural-language questions
                            about your data — "which vendors had the largest price increase this
                            quarter" — without building a query or report from scratch.
                        </p>

                        <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-200 rounded-xl p-6 mb-8">
                            <h3 className="font-bold text-gray-900 mb-4">Where Copilot coverage is most mature (2026):</h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="bg-indigo-600 text-white font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Accounts Receivable</p>
                                        <p className="text-sm text-gray-600">Collections summaries and payment reminder drafting</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-violet-600 text-white font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Financial Reporting</p>
                                        <p className="text-sm text-gray-600">Variance explanations and period-over-period analysis</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-purple-600 text-white font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Procurement</p>
                                        <p className="text-sm text-gray-600">Category management summaries and vendor insights</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 id="where-it-stops" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            5. Where Copilot stops
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            It's just as important to be clear about what Copilot doesn't do:
                        </p>
                        <ul className="space-y-2 mb-8 text-gray-700">
                            <li className="flex items-start">
                                <span className="bg-indigo-100 text-indigo-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 text-sm">1</span>
                                <span>It doesn't replace Power BI for structured, recurring reporting and dashboards.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-indigo-100 text-indigo-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 text-sm">2</span>
                                <span>It doesn't replace Power Automate for multi-step approval workflows and integrations.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-indigo-100 text-indigo-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 text-sm">3</span>
                                <span>It doesn't configure business logic, security roles, or custom modules — that's still implementation work.</span>
                            </li>
                        </ul>

                        <div className="bg-gradient-to-br from-indigo-700 to-purple-700 text-white rounded-2xl p-8 md:p-10 my-12">
                            <div className="inline-flex items-center bg-white/10 border border-white/30 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                                <Sparkles className="h-4 w-4 text-indigo-100 mr-2" />
                                <span className="text-sm font-semibold text-indigo-50">AI Readiness Check</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Find out what Copilot can actually do in your D365FO environment
                            </h3>
                            <p className="text-indigo-100 mb-6 leading-relaxed">
                                Copilot availability depends on your version, licensing, and workspace
                                configuration. Impacgo can assess what's already usable in your tenant
                                and what still needs implementation work.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => navigate("/contact")}
                                    className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center"
                                >
                                    Get Free Consultation
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                                <button
                                    onClick={() => navigate("/services/d365")}
                                    className="border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
                                >
                                    Explore D365 Services
                                </button>
                            </div>
                        </div>

                        <h2 id="bottom-line" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            The bottom line
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Copilot in D365FO is a genuine productivity gain for language-heavy,
                            repetitive tasks — drafting collection emails, summarizing accounts,
                            explaining variances — not a rebuild of how your ERP works.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-12">
                            The right approach is to identify where your teams already spend time
                            writing, summarizing, or explaining data, and evaluate Copilot there first
                            — rather than expecting it to replace the reporting and automation work
                            that still needs to be built.
                        </p>

                        <h2 id="faq" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4 mb-12">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-200 pt-8 mt-12">
                            <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">Related Service</p>
                            <Link
                                to="/services/d365"
                                className="group inline-flex items-center text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                            >
                                Dynamics 365 Implementation Services
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <p className="text-gray-600 mt-2">
                                See Impacgo's D365 implementation offering and request a free
                                consultation.
                            </p>
                        </div>
                    </div>
                </article>
            </main>

            <ContactCard />
            <Footer />
        </div>
    );
}
