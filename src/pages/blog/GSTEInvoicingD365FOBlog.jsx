import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
    Calendar,
    Clock,
    Tag,
    Receipt,
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

const SLUG = "/blog/gst-e-invoicing-in-dynamics-365-finance-operations";
const TITLE = "GST E-Invoicing in Dynamics 365 Finance & Operations: A Practical Setup Guide for 2026";

const setupSteps = [
    {
        title: "Turn on the India e-invoicing feature",
        text: "In System administration › Feature management, enable “(India) Electronic invoice under GST”. This unlocks the IRP integration in your India legal entities.",
    },
    {
        title: "Import the Electronic reporting configurations",
        text: "Import the latest e-invoice format configurations from the Global repository. The related data models and model mappings come across automatically with the formats.",
    },
    {
        title: "Import the IRP integration data package",
        text: "Download Microsoft’s “Indian IRP integration setup” data package from the Lifecycle Services shared asset library and import it through Workspaces › Data management in each target company. It creates most of the electronic-message setup for you.",
    },
    {
        title: "Complete the electronic message setup",
        text: "Under Tax › Setup › Electronic messages, run Generate EM in Executable class settings, set the class parameters and configure number sequences. Then review the processings created for you: OnlineInvoicing, CancelInvoice, RegisterEWB and CancelEWB.",
    },
    {
        title: "Connect to the IRP",
        text: "Enter the IRP web service addresses under Tax › Setup › Parameters › Electronic messages › Web service settings, and store the API credentials for each GST registration number. D365 supports separate credentials per GSTIN within one legal entity.",
    },
    {
        title: "Test end to end, then go live",
        text: "Use the IRP sandbox to test every document type you issue — invoices, credit notes, debit notes, stock transfers, exports and cancellations — before switching to production endpoints.",
    },
];

export default function GSTEInvoicingD365FOBlog() {
    const navigate = useNavigate();

    const faqs = [
        {
            question: "Who has to generate GST e-invoices in India?",
            answer:
                "Registered businesses whose aggregate annual turnover has exceeded ₹5 crore in any financial year since 2017-18 must report B2B invoices, credit notes, debit notes and export invoices to the Invoice Registration Portal (IRP). Some categories, such as banks, insurers and SEZ units, are exempt. Always confirm your position against the latest CBIC notifications.",
        },
        {
            question: "What is the 30-day e-invoice reporting limit?",
            answer:
                "Since 1 April 2025, taxpayers with an aggregate annual turnover of ₹10 crore or more must report invoices, credit notes and debit notes to the IRP within 30 days of the document date. The IRP rejects documents reported after that window, and an invoice without a valid IRN is not a valid tax invoice, so your customer cannot claim input tax credit on it.",
        },
        {
            question: "Does Dynamics 365 Finance & Operations support GST e-invoicing out of the box?",
            answer:
                "Yes. Microsoft provides standard India localization for e-invoicing in Dynamics 365 Finance: a feature switch, Electronic reporting formats, and a data package that sets up direct integration with the IRP — including e-way bill registration and cancellation. You configure it rather than build it, though testing every document type you issue is essential.",
        },
        {
            question: "Can D365 generate e-way bills together with e-invoices?",
            answer:
                "Yes. The standard India setup includes RegisterEWB and CancelEWB processings, so an e-way bill can be registered through the IRP as part of the e-invoice flow when the transport details are available on the document.",
        },
        {
            question: "Can an e-invoice be cancelled after it is registered?",
            answer:
                "An e-invoice can be cancelled on the IRP within 24 hours of generating the IRN, and D365 handles this through the CancelInvoice processing. After 24 hours, corrections must be made with a credit note or debit note instead.",
        },
        {
            question: "What should we check if we are already live on D365 but e-invoicing is failing?",
            answer:
                "The most common causes are expired or incorrect IRP API credentials, outdated Electronic reporting configurations after a schema change, incomplete master data (GSTINs, HSN/SAC codes, state codes, PIN codes) and number-sequence gaps. A short health check of these areas usually resolves recurring rejections.",
        },
    ];

    const articleSchema = createArticleSchema({
        title: TITLE,
        description:
            "How to set up and run GST e-invoicing in Microsoft Dynamics 365 Finance & Operations — the ₹5 crore threshold, the 30-day IRP reporting rule, step-by-step configuration, e-way bills and common pitfalls.",
        imageUrl: "https://www.impacgo.com/logo.png",
        datePublished: "2026-11-10",
        dateModified: "2026-11-10",
        authorName: "Impacgo Solutions",
        path: SLUG,
    });

    const faqSchema = createFaqSchema(faqs);

    const breadcrumbSchema = createBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "GST E-Invoicing in D365 F&O", path: SLUG },
    ]);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="GST E-Invoicing in Dynamics 365 Finance & Operations | 2026 Setup Guide"
                description="Set up GST e-invoicing in D365 Finance & Operations the right way: the ₹5 crore threshold, the 30-day IRP rule, step-by-step IRP integration, e-way bills and the pitfalls to avoid."
                keywords="GST e-invoicing Dynamics 365, D365 F&O e-invoice India, IRP integration D365, e-invoice 30 day rule, D365 e-way bill, Electronic invoice under GST D365, India localization Dynamics 365 Finance"
                path={SLUG}
                schema={[articleSchema, faqSchema, breadcrumbSchema]}
            />

            <ScrollToTop />
            <Header alwaysSolid />

            <main className="flex-grow">
                <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-32 pb-12 md:pt-40 md:pb-16">
                    <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                        <nav className="text-sm text-gray-600 mb-6">
                            <Link to="/" className="hover:text-blue-600">Home</Link>{" "}
                            <span className="mx-2">/</span>{" "}
                            <Link to="/blog" className="hover:text-blue-600">Blog</Link>{" "}
                            <span className="mx-2">/</span>{" "}
                            <span className="text-gray-900">GST E-Invoicing in D365 F&O</span>
                        </nav>

                        <div className="inline-flex items-center bg-green-100 border border-green-300 rounded-full px-4 py-2 mb-6">
                            <Receipt className="h-4 w-4 text-green-700 mr-2" />
                            <span className="text-sm font-semibold text-green-900">GST Compliance</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            {TITLE}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center"><Calendar className="h-4 w-4 mr-1.5" />Published November 2026</span>
                            <span className="flex items-center"><Clock className="h-4 w-4 mr-1.5" />9 min read</span>
                            <span className="flex items-center"><Tag className="h-4 w-4 mr-1.5" />GST / D365 Finance</span>
                        </div>
                    </div>
                </section>

                <article className="py-12 md:py-16">
                    <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                            For Indian businesses, an invoice is no longer complete when it is posted
                            in the ERP. It is complete when the Invoice Registration Portal (IRP) has
                            accepted it and returned an Invoice Reference Number (IRN) and a signed QR
                            code. If that step fails, the sale may be booked — but your customer
                            cannot claim input tax credit on it.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Microsoft Dynamics 365 Finance &amp; Operations has standard support for
                            GST e-invoicing, including direct IRP integration and e-way bills. This
                            guide explains the rules you need to meet, how the setup works in D365, and
                            the issues we most often see in live environments.
                        </p>

                        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-10 rounded-r-lg">
                            <div className="flex items-start">
                                <AlertTriangle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-green-900 mb-2">The rule that changed the stakes</h3>
                                    <p className="text-green-800">
                                        If your annual turnover is ₹10 crore or more, the IRP now
                                        rejects invoices, credit notes and debit notes reported more
                                        than 30 days after the document date. A failed integration is
                                        no longer something you can fix at month-end.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
                            <h3 className="text-xl font-bold mb-4">In this article</h3>
                            <ul className="space-y-3 text-blue-600">
                                <li><a href="#rules" className="hover:underline">1. The e-invoicing rules in 2026</a></li>
                                <li><a href="#how-d365" className="hover:underline">2. How e-invoicing works in D365 F&amp;O</a></li>
                                <li><a href="#setup" className="hover:underline">3. Step-by-step setup</a></li>
                                <li><a href="#master-data" className="hover:underline">4. Master data that must be right</a></li>
                                <li><a href="#pitfalls" className="hover:underline">5. Common pitfalls in live environments</a></li>
                                <li><a href="#bottom-line" className="hover:underline">6. The bottom line</a></li>
                                <li><a href="#faq" className="hover:underline">7. Frequently asked questions</a></li>
                            </ul>
                        </div>

                        <h2 id="rules" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            1. The e-invoicing rules in 2026
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Two separate turnover tests decide what applies to your business:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                                <p className="text-3xl font-extrabold text-green-700 mb-2">₹5 crore</p>
                                <h3 className="font-bold text-gray-900 mb-2">Who must e-invoice</h3>
                                <p className="text-sm text-gray-700">
                                    Businesses whose aggregate turnover has exceeded ₹5 crore in any
                                    financial year since 2017-18 must report B2B invoices, credit
                                    notes, debit notes and export invoices to the IRP.
                                </p>
                            </div>
                            <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                                <p className="text-3xl font-extrabold text-emerald-700 mb-2">30 days</p>
                                <h3 className="font-bold text-gray-900 mb-2">Reporting deadline</h3>
                                <p className="text-sm text-gray-700">
                                    Since 1 April 2025, businesses with turnover of ₹10 crore or more
                                    must report each document within 30 days of its date. Late
                                    documents are rejected by the IRP.
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Once the IRP accepts a document, it returns an IRN and a digitally signed
                            QR code, which must appear on the invoice you send. An invoice without a
                            valid IRN is not a valid tax invoice. Registered e-invoices can be
                            cancelled on the IRP within 24 hours; after that, corrections go through a
                            credit or debit note.
                        </p>
                        <p className="text-sm text-gray-500 italic mb-8">
                            GST rules change regularly. Always confirm thresholds and exemptions against
                            the latest CBIC and GSTN notifications for your business.
                        </p>

                        <h2 id="how-d365" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            2. How e-invoicing works in D365 F&amp;O
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Dynamics 365 Finance handles e-invoicing through three standard building
                            blocks — no custom integration is required:
                        </p>
                        <ul className="space-y-3 mb-8 text-gray-700">
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span><strong>Electronic reporting (ER).</strong> Generates the e-invoice JSON in the format the IRP expects, from your posted invoice data.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span><strong>Electronic messages (EM).</strong> Sends documents to the IRP, receives the IRN and QR code, and tracks the status of every submission, cancellation and e-way bill.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span><strong>IRP web service connection.</strong> Authenticates with the IRP using API credentials held per GST registration number, so multi-GSTIN companies are supported in one legal entity.</span>
                            </li>
                        </ul>

                        <h2 id="setup" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                            3. Step-by-step setup
                        </h2>
                        <div className="space-y-4 mb-6">
                            {setupSteps.map((step, i) => (
                                <div key={step.title} className="flex items-start bg-white border border-gray-200 rounded-xl p-5">
                                    <div className="bg-green-600 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                                        <p className="text-sm text-gray-700 leading-relaxed">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 italic mb-8">
                            Menu paths and package versions follow Microsoft’s current documentation
                            and can change between D365 releases. Check the “Electronic invoices in
                            India” article on Microsoft Learn for your version before you start.
                        </p>

                        <h2 id="master-data" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            4. Master data that must be right
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Most IRP rejections are not integration failures — they are data problems.
                            Before go-live, validate:
                        </p>
                        <ul className="space-y-3 mb-8 text-gray-700">
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span><strong>GSTINs</strong> for your own registrations, customers and ship-to addresses.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span><strong>HSN and SAC codes</strong> on every item and service you invoice.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span><strong>Addresses</strong> — state codes and PIN codes that match the GST registration.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span><strong>Units of measure</strong> mapped to the GST unit quantity codes the IRP accepts.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span><strong>Transport details</strong> (vehicle number, transporter ID, distance) wherever you want e-way bills generated with the invoice.</span>
                            </li>
                        </ul>

                        <h2 id="pitfalls" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            5. Common pitfalls in live environments
                        </h2>
                        <ul className="space-y-2 mb-8 text-gray-700">
                            {[
                                "No one owns the e-invoice queue — failed submissions sit unnoticed until a customer complains or the 30-day window closes.",
                                "IRP API credentials expire or are changed without updating D365, so every submission starts failing at once.",
                                "Electronic reporting configurations are not updated after a government schema change or a D365 upgrade.",
                                "Only standard sales invoices were tested, so credit notes, stock transfers or exports fail in production.",
                                "Cancellations are attempted after the 24-hour window, when a credit note was the correct route.",
                            ].map((text, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="bg-green-100 text-green-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 text-sm">{i + 1}</span>
                                    <span className="pt-1">{text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-gradient-to-br from-green-700 to-teal-700 text-white rounded-2xl p-8 md:p-10 my-12">
                            <div className="inline-flex items-center bg-white/10 border border-white/30 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                                <Receipt className="h-4 w-4 text-green-100 mr-2" />
                                <span className="text-sm font-semibold text-green-50">E-Invoicing Health Check</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Make sure every invoice reaches the IRP — on time
                            </h3>
                            <p className="text-green-100 mb-6 leading-relaxed">
                                Whether you are setting up e-invoicing for the first time or fixing
                                recurring rejections, Impacgo can review your D365 configuration,
                                master data and monitoring, and get your compliance back on track.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => navigate("/contact")}
                                    className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center"
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
                            Dynamics 365 Finance &amp; Operations gives you everything needed for GST
                            e-invoicing as standard. The difference between a smooth process and a
                            monthly fire drill comes down to three things: clean master data,
                            thorough testing of every document type, and someone clearly responsible
                            for monitoring submissions every day.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-12">
                            With the 30-day rule now in force for larger taxpayers, those three things
                            are no longer best practice — they are what keeps your customers able to
                            claim their input tax credit.
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
