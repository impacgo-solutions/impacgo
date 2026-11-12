import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
    Calendar,
    Clock,
    Tag,
    Warehouse,
    ArrowRight,
    CheckCircle,
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

export default function D365DistributionGuideBlog() {
    const navigate = useNavigate();

    const faqs = [
        {
            question: "Which Dynamics 365 product should distributors and wholesalers use?",
            answer:
                "Most Indian distributors, wholesalers, and trading companies should use Microsoft Dynamics 365 Finance and Operations (D365 F&O). It includes Advanced Warehouse Management, trade agreements for customer and vendor pricing, multi-location inventory, and built-in GST, TDS, e-invoicing, and e-way bill compliance. Dynamics 365 Business Central can work for smaller distributors under roughly 50 users and 1-2 locations, but most growing distributors outgrow it.",
        },
        {
            question: "Can D365 F&O manage multiple warehouses and states?",
            answer:
                "Yes. D365 F&O's Advanced Warehouse Management handles unlimited warehouses and locations, with GST-compliant inter-branch stock transfers, automatic e-way bill generation, stock-in-transit accounting, and consolidated inventory visibility across every warehouse in real time.",
        },
        {
            question: "How long does a distribution ERP implementation take?",
            answer:
                "A single-entity, single-warehouse implementation typically takes 5-7 months. A multi-state, multi-warehouse rollout with advanced WMS and e-commerce integration runs 9-12 months. Importer-distributors handling customs and bonded warehouses usually need 9-15 months.",
        },
        {
            question: "Does D365 F&O integrate with B2B portals and e-commerce platforms?",
            answer:
                "Yes, via REST APIs. Common integrations include B2B customer self-service ordering, live stock and pricing display, order tracking, and payment integration, plus B2C connections to platforms like Shopify, Magento, and WooCommerce.",
        },
        {
            question: "What is trade agreement pricing and why does it matter for distributors?",
            answer:
                "Trade agreements in D365 F&O let distributors set up customer- and vendor-specific pricing, volume discounts, and promotional pricing that apply automatically at order entry — eliminating manual price lookups and the pricing errors that come with spreadsheet-based rate cards.",
        },
    ];

    const articleSchema = createArticleSchema({
        title:
            "Dynamics 365 F&O for Distribution & Wholesale Businesses: A Complete Guide",
        description:
            "How Microsoft Dynamics 365 Finance and Operations handles multi-warehouse inventory, trade agreement pricing, B2B integrations, and Indian tax compliance for distributors and wholesalers.",
        imageUrl: "https://www.impacgo.com/logo.png",
        datePublished: "2026-07-21",
        dateModified: "2026-07-21",
        authorName: "Impacgo Solutions",
        path: "/blog/d365-for-distribution-wholesale-businesses",
    });

    const faqSchema = createFaqSchema(faqs);

    const breadcrumbSchema = createBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        {
            name: "D365 for Distribution & Wholesale",
            path: "/blog/d365-for-distribution-wholesale-businesses",
        },
    ]);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Dynamics 365 F&O for Distribution & Wholesale Businesses | Complete Guide"
                description="A practical guide to Microsoft Dynamics 365 Finance and Operations for Indian distributors and wholesalers — warehouse management, trade agreement pricing, B2B integration, and GST compliance."
                keywords="D365 for distribution, Dynamics 365 wholesale, D365FO warehouse management, distribution ERP India, trade agreement pricing, multi-warehouse inventory D365, GST compliant ERP, D365 B2B integration"
                path="/blog/d365-for-distribution-wholesale-businesses"
                schema={[articleSchema, faqSchema, breadcrumbSchema]}
            />

            <ScrollToTop />
            <Header alwaysSolid />

            <main className="flex-grow">
                <section className="relative bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 pt-32 pb-12 md:pt-40 md:pb-16">
                    <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                        <nav className="text-sm text-gray-600 mb-6">
                            <Link to="/" className="hover:text-blue-600">Home</Link>{" "}
                            <span className="mx-2">/</span>{" "}
                            <Link to="/blog" className="hover:text-blue-600">Blog</Link>{" "}
                            <span className="mx-2">/</span>{" "}
                            <span className="text-gray-900">D365 for Distribution & Wholesale</span>
                        </nav>

                        <div className="inline-flex items-center bg-blue-100 border border-blue-300 rounded-full px-4 py-2 mb-6">
                            <Warehouse className="h-4 w-4 text-blue-700 mr-2" />
                            <span className="text-sm font-semibold text-blue-900">
                                Distribution & Wholesale ERP
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Dynamics 365 F&O for Distribution & Wholesale Businesses: A Complete Guide
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center"><Calendar className="h-4 w-4 mr-1.5" />Published July 2026</span>
                            <span className="flex items-center"><Clock className="h-4 w-4 mr-1.5" />11 min read</span>
                            <span className="flex items-center"><Tag className="h-4 w-4 mr-1.5" />D365FO Distribution</span>
                        </div>
                    </div>
                </section>

                <article className="py-12 md:py-16">
                    <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                            Distributors and wholesalers run on thin margins and thick complexity —
                            multiple warehouses, customer-specific pricing, GST rules on every
                            inter-branch transfer, and sales teams who need to know exactly what's in
                            stock before they promise a customer anything.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Microsoft Dynamics 365 Finance and Operations (D365 F&O) is built to carry
                            that complexity without falling back on spreadsheets and phone calls
                            between warehouses. Here's what actually matters when evaluating it for a
                            distribution or wholesale business.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-10 rounded-r-lg">
                            <div className="flex items-start">
                                <Warehouse className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-blue-900 mb-2">Why this matters</h3>
                                    <p className="text-blue-800">
                                        A distributor's biggest cost isn't the software — it's the hours
                                        lost reconciling stock across warehouses and the sales lost
                                        promising inventory that isn't actually there.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
                            <h3 className="text-xl font-bold mb-4">In this article</h3>
                            <ul className="space-y-3 text-blue-600">
                                <li><a href="#why-d365fo" className="hover:underline">1. Why D365 F&O for distribution</a></li>
                                <li><a href="#warehouse-mgmt" className="hover:underline">2. Multi-warehouse & multi-state inventory</a></li>
                                <li><a href="#trade-agreements" className="hover:underline">3. Trade agreements & customer pricing</a></li>
                                <li><a href="#compliance" className="hover:underline">4. GST, e-invoicing & e-way bill compliance</a></li>
                                <li><a href="#integrations" className="hover:underline">5. B2B portals & e-commerce integration</a></li>
                                <li><a href="#timeline" className="hover:underline">6. Realistic implementation timeline</a></li>
                                <li><a href="#bottom-line" className="hover:underline">7. The bottom line</a></li>
                                <li><a href="#faq" className="hover:underline">8. Frequently asked questions</a></li>
                            </ul>
                        </div>

                        <h2 id="why-d365fo" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            1. Why D365 F&O for distribution
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Distribution businesses need three things a generic accounting package
                            can't deliver together: real-time multi-location inventory, flexible
                            customer- and vendor-specific pricing, and Indian tax compliance baked
                            into every transaction — not bolted on after the fact.
                        </p>
                        <ul className="space-y-3 mb-8 text-gray-700">
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span><strong>Scales with growth.</strong> Handles single-warehouse traders through 20+ location, multi-state distributors on the same platform.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span><strong>Built-in compliance.</strong> GST, TDS, e-invoicing, and e-way bills are native, not third-party add-ons.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span><strong>One system of record.</strong> Finance, inventory, procurement, and sales all read from the same live data.</span>
                            </li>
                        </ul>

                        <h2 id="warehouse-mgmt" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            2. Multi-warehouse & multi-state inventory
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            D365 F&O's Advanced Warehouse Management handles unlimited warehouses,
                            sites, and locations — typically one per branch or godown for Indian
                            distributors, connected by stock transfer orders for inter-warehouse
                            movement.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                                <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4">1</div>
                                <h3 className="font-bold text-gray-900 mb-2">Real-Time Visibility</h3>
                                <p className="text-sm text-gray-700">Sales teams see exactly what's available in every warehouse before promising customers a delivery date.</p>
                            </div>
                            <div className="bg-white border-2 border-sky-200 rounded-xl p-6">
                                <div className="bg-sky-100 text-sky-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4">2</div>
                                <h3 className="font-bold text-gray-900 mb-2">Compliant Transfers</h3>
                                <p className="text-sm text-gray-700">GST-compliant branch transfers with e-way bills generated automatically, and stock-in-transit accounted for correctly.</p>
                            </div>
                            <div className="bg-white border-2 border-cyan-200 rounded-xl p-6">
                                <div className="bg-cyan-100 text-cyan-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4">3</div>
                                <h3 className="font-bold text-gray-900 mb-2">Consolidated Reporting</h3>
                                <p className="text-sm text-gray-700">Stock, sales, and margin reporting rolled up across every location without manual spreadsheet reconciliation.</p>
                            </div>
                        </div>

                        <h2 id="trade-agreements" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            3. Trade agreements & customer pricing
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Distributors rarely sell everyone at the same price. D365 F&O's trade
                            agreements let you set customer- and vendor-specific pricing, volume
                            discounts, and time-bound promotions that apply automatically at order
                            entry — no manual rate-card lookups, and no pricing mistakes that erode
                            margin.
                        </p>

                        <h2 id="compliance" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            4. GST, e-invoicing & e-way bill compliance
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Every sales order, purchase order, and stock transfer generates the
                            correct GST treatment, e-invoice, and e-way bill automatically where
                            required — a meaningful difference for distributors moving stock across
                            state lines daily, where manual compliance is both slow and a genuine
                            audit risk.
                        </p>

                        <h2 id="integrations" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            5. B2B portals & e-commerce integration
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            D365 F&O connects to B2B customer portals and e-commerce platforms via
                            REST APIs — enabling customer self-service ordering, live stock and
                            pricing visibility, order tracking, and payment integration. For B2C
                            channels, it integrates with platforms like Shopify, Magento, and
                            WooCommerce through Azure Logic Apps or custom middleware.
                        </p>

                        <h2 id="timeline" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            6. Realistic implementation timeline
                        </h2>
                        <div className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 rounded-xl p-6 mb-8">
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="bg-blue-600 text-white font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">5-7</div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Months</p>
                                        <p className="text-sm text-gray-600">Single-entity, single-warehouse implementation</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-sky-600 text-white font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">9-12</div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Months</p>
                                        <p className="text-sm text-gray-600">Multi-state, multi-warehouse with advanced WMS and e-commerce</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-cyan-600 text-white font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">9-15</div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Months</p>
                                        <p className="text-sm text-gray-600">Importer-distributors with customs and bonded warehouse needs</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-700 to-sky-700 text-white rounded-2xl p-8 md:p-10 my-12">
                            <div className="inline-flex items-center bg-white/10 border border-white/30 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                                <Warehouse className="h-4 w-4 text-blue-100 mr-2" />
                                <span className="text-sm font-semibold text-blue-50">Distribution Discovery Workshop</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Get a scope, timeline, and budget for your distribution business
                            </h3>
                            <p className="text-blue-100 mb-6 leading-relaxed">
                                Impacgo runs a free Distribution Discovery Workshop that maps your
                                warehouses, pricing structure, and compliance needs into a concrete
                                D365 F&O implementation plan.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => navigate("/contact")}
                                    className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center"
                                >
                                    Book Free Workshop
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                                <button
                                    onClick={() => navigate("/industries/distribution")}
                                    className="border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
                                >
                                    Explore Distribution Services
                                </button>
                            </div>
                        </div>

                        <h2 id="bottom-line" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            The bottom line
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            For Indian distributors and wholesalers, the real cost of the wrong system
                            isn't the license fee — it's stock nobody can see, pricing errors from
                            manual rate cards, and compliance handled after the fact instead of built
                            in.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-12">
                            D365 F&O solves all three in one platform, scaling from a single warehouse
                            to a multi-state distribution network without a system change along the
                            way.
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
                                to="/industries/distribution"
                                className="group inline-flex items-center text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                            >
                                D365 F&O for Distribution & Wholesale
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <p className="text-gray-600 mt-2">
                                See Impacgo's full distribution ERP offering and request a free
                                discovery workshop.
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
