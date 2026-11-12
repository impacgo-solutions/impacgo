import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
    Calendar,
    Clock,
    Tag,
    Sprout,
    ArrowRight,
    CheckCircle,
    QrCode,
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

export default function CalviqDairyFarmManagementBlog() {
    const navigate = useNavigate();

    const faqs = [
        {
            question: "What is Calviq?",
            answer:
                "Calviq is a mobile-first dairy farm management app that gives every cow a digital identity via QR code, so herd records, milk production, health history, and breeding events can be logged and tracked from a phone in the field.",
        },
        {
            question: "How does QR-based cattle tracking work?",
            answer:
                "Each animal is assigned a unique QR tag. Scanning it with the Calviq app instantly pulls up that animal's full record — production history, health events, breeding status — and lets farm staff log new entries against the correct animal in seconds, without manual lookups or paper registers.",
        },
        {
            question: "Is Calviq only for large dairy farms?",
            answer:
                "No. Calviq is built to scale from a handful of animals to large commercial herds. Smaller farms benefit from digitizing paper registers, while larger operations use it to coordinate multiple staff, shifts, and locations against one shared, always up-to-date herd record.",
        },
        {
            question: "How is Calviq different from a generic spreadsheet or register?",
            answer:
                "A spreadsheet has no link to the physical animal — someone has to remember which row is which cow, and it's a single point of failure if the file is lost or misedited. Calviq ties every record to a scannable QR identity, works offline in the field, and gives every staff member the same live data instead of siloed paper books.",
        },
        {
            question: "Does Calviq handle milk production and financial tracking too?",
            answer:
                "Yes. Beyond herd and health records, Calviq tracks milk production per animal and per session, and Impacgo's related Dairy Farm Management System extends this into feed and nutrition management, breeding cycles, and financial reporting including milk sales invoicing.",
        },
    ];

    const articleSchema = createArticleSchema({
        title:
            "Calviq: How QR-Based Cattle Tracking Is Modernizing Dairy Farm Management",
        description:
            "How Calviq replaces paper herd registers with QR-based cattle tracking — giving every cow a digital identity for milk production, health records, and breeding history, accessible from a phone in the field.",
        imageUrl: "https://www.impacgo.com/logo.png",
        datePublished: "2026-07-14",
        dateModified: "2026-07-14",
        authorName: "Impacgo Solutions",
        path: "/blog/calviq-dairy-farm-management",
    });

    const faqSchema = createFaqSchema(faqs);

    const breadcrumbSchema = createBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        {
            name: "Calviq Dairy Farm Management",
            path: "/blog/calviq-dairy-farm-management",
        },
    ]);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Calviq: QR-Based Cattle Tracking for Modern Dairy Farm Management"
                description="Discover how Calviq uses QR-based cattle identity to modernize dairy farm management — tracking milk production, herd health, and breeding records from a mobile app in the field."
                keywords="Calviq, dairy farm management app, QR cattle tracking, cattle management software, herd management app, dairy farm software India, milk production tracking, livestock management app"
                path="/blog/calviq-dairy-farm-management"
                schema={[articleSchema, faqSchema, breadcrumbSchema]}
            />

            <ScrollToTop />
            <Header alwaysSolid />

            <main className="flex-grow">
                {/* ============ Article Hero ============ */}
                <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 pt-32 pb-12 md:pt-40 md:pb-16">
                    <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                        <nav className="text-sm text-gray-600 mb-6">
                            <Link to="/" className="hover:text-blue-600">
                                Home
                            </Link>{" "}
                            <span className="mx-2">/</span>{" "}
                            <Link to="/blog" className="hover:text-blue-600">
                                Blog
                            </Link>{" "}
                            <span className="mx-2">/</span>{" "}
                            <span className="text-gray-900">
                                Calviq Dairy Farm Management
                            </span>
                        </nav>

                        <div className="inline-flex items-center bg-emerald-100 border border-emerald-300 rounded-full px-4 py-2 mb-6">
                            <Sprout className="h-4 w-4 text-emerald-700 mr-2" />
                            <span className="text-sm font-semibold text-emerald-900">
                                Agri-Tech Product Spotlight
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Calviq: How QR-Based Cattle Tracking Is Modernizing Dairy Farm Management
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1.5" />
                                Published July 2026
                            </span>
                            <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1.5" />9 min read
                            </span>
                            <span className="flex items-center">
                                <Tag className="h-4 w-4 mr-1.5" />
                                Calviq
                            </span>
                        </div>
                    </div>
                </section>

                {/* ============ Article Body ============ */}
                <article className="py-12 md:py-16">
                    <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                            Most dairy farms still run herd records on paper — a register in the shed
                            office, memory of "which cow is which," and separate notebooks for milk
                            yield, vaccinations, and breeding dates. It works, until a page goes
                            missing, a new hand can't tell one cow from another, or someone needs
                            last month's numbers in a hurry.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Calviq replaces that paper trail with a single digital identity per
                            animal. Every cow gets a QR tag; scanning it opens her complete record on
                            a phone — production, health, breeding — in the field, in seconds, whether
                            it's the owner, a vet, or farm staff doing the scanning.
                        </p>

                        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-10 rounded-r-lg">
                            <div className="flex items-start">
                                <QrCode className="h-6 w-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-emerald-900 mb-2">
                                        The core idea
                                    </h3>
                                    <p className="text-emerald-800">
                                        One QR code, one cow, one always-current record — accessible to
                                        every authorized person on the farm, from any phone, without a
                                        paper register in between.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
                            <h3 className="text-xl font-bold mb-4">In this article</h3>
                            <ul className="space-y-3 text-blue-600">
                                <li>
                                    <a href="#what-is-calviq" className="hover:underline">
                                        1. What is Calviq?
                                    </a>
                                </li>
                                <li>
                                    <a href="#why-paper-fails" className="hover:underline">
                                        2. Why paper registers fall apart as a farm grows
                                    </a>
                                </li>
                                <li>
                                    <a href="#how-qr-works" className="hover:underline">
                                        3. How QR-based cattle tracking works
                                    </a>
                                </li>
                                <li>
                                    <a href="#what-it-tracks" className="hover:underline">
                                        4. What Calviq tracks day to day
                                    </a>
                                </li>
                                <li>
                                    <a href="#who-its-for" className="hover:underline">
                                        5. Who Calviq is built for
                                    </a>
                                </li>
                                <li>
                                    <a href="#bottom-line" className="hover:underline">
                                        6. The bottom line
                                    </a>
                                </li>
                                <li>
                                    <a href="#faq" className="hover:underline">
                                        7. Frequently asked questions
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* 1 */}
                        <h2 id="what-is-calviq" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            1. What is Calviq?
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Calviq is a mobile-first dairy farm management app built around a simple
                            premise: every animal should have a digital identity that anyone on the
                            farm can scan and trust. Instead of separate paper books for production,
                            health, and breeding, each cow's entire history lives behind her own QR
                            code.
                        </p>
                        <ul className="space-y-3 mb-6 text-gray-700">
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                                <span>
                                    <strong>Digital cow identity.</strong> A QR tag per animal links
                                    directly to her live record — no manual lookup, no guessing which
                                    row in a register belongs to which cow.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                                <span>
                                    <strong>Mobile-first.</strong> Built for use in the shed and the
                                    field, not just a desk — staff log data where the work actually
                                    happens.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                                <span>
                                    <strong>One shared record.</strong> Every authorized user — owner,
                                    manager, vet, or hand — sees the same up-to-date data instead of
                                    fragmented paper trails.
                                </span>
                            </li>
                        </ul>

                        {/* 2 */}
                        <h2 id="why-paper-fails" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            2. Why paper registers fall apart as a farm grows
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Paper works fine at a small scale, with one or two people who know every
                            animal by sight. The cracks show up as a herd or a team grows:
                        </p>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                            <h3 className="font-bold text-gray-900 mb-2">a) No link to the physical animal</h3>
                            <p className="text-gray-700 leading-relaxed">
                                A register is just rows and columns. Matching an entry to the actual
                                cow depends entirely on someone's memory — a real risk when staff
                                change or a new hand takes over a shift.
                            </p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                            <h3 className="font-bold text-gray-900 mb-2">b) Single point of failure</h3>
                            <p className="text-gray-700 leading-relaxed">
                                A damaged, lost, or misplaced notebook can mean losing months of health
                                and breeding history with no backup.
                            </p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                            <h3 className="font-bold text-gray-900 mb-2">c) No shared visibility</h3>
                            <p className="text-gray-700 leading-relaxed">
                                If the vet, the owner, and the farm manager each keep their own notes,
                                nobody has the complete picture at the same time.
                            </p>
                        </div>

                        {/* 3 */}
                        <h2 id="how-qr-works" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            3. How QR-based cattle tracking works
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The workflow is deliberately simple, because it has to work standing in a
                            shed, not sitting at a desk.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                                <div className="bg-emerald-100 text-emerald-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4">
                                    1
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Tag the animal</h3>
                                <p className="text-sm text-gray-700">
                                    Each cow is assigned a unique QR tag, linked once to her profile in
                                    Calviq.
                                </p>
                            </div>
                            <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                                <div className="bg-teal-100 text-teal-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4">
                                    2
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Scan in the field</h3>
                                <p className="text-sm text-gray-700">
                                    Staff scan the tag with the app to instantly pull up her full
                                    history — no searching, no paper.
                                </p>
                            </div>
                            <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                                <div className="bg-green-100 text-green-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4">
                                    3
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Log and sync</h3>
                                <p className="text-sm text-gray-700">
                                    New entries — a milking session, a treatment, a breeding event —
                                    are logged against the right animal and reflected for every user.
                                </p>
                            </div>
                        </div>

                        {/* 4 */}
                        <h2 id="what-it-tracks" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            4. What Calviq tracks day to day
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Once an animal's identity is digital, everything else attaches to it
                            naturally:
                        </p>
                        <ul className="space-y-2 mb-8 text-gray-700">
                            <li className="flex items-start">
                                <span className="bg-emerald-100 text-emerald-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 text-sm">1</span>
                                <span>Milk production per animal, per session, and per shift</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-emerald-100 text-emerald-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 text-sm">2</span>
                                <span>Health records — vaccinations, treatments, veterinary visits</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-emerald-100 text-emerald-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 text-sm">3</span>
                                <span>Breeding and reproduction — insemination, pregnancy status, calving events</span>
                            </li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            For farms that also need feed and nutrition tracking or milk-sales
                            invoicing, Impacgo's{" "}
                            <Link to="/products/dairy-farm" className="text-blue-600 hover:underline font-medium">
                                Dairy Farm Management System
                            </Link>{" "}
                            extends the same herd data into ration planning, feed cost tracking, and
                            full financial reporting.
                        </p>

                        {/* 5 */}
                        <h2 id="who-its-for" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            5. Who Calviq is built for
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Calviq scales from a handful of animals to large commercial herds. A
                            smaller farm gets an immediate upgrade from paper to a searchable digital
                            record; a larger operation gets a way to coordinate multiple staff and
                            shifts against one shared, always-current source of truth instead of
                            reconciling separate notebooks at the end of the week.
                        </p>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-emerald-700 to-teal-700 text-white rounded-2xl p-8 md:p-10 my-12">
                            <div className="inline-flex items-center bg-white/10 border border-white/30 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                                <Sprout className="h-4 w-4 text-emerald-100 mr-2" />
                                <span className="text-sm font-semibold text-emerald-50">
                                    See Calviq in Action
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Give every cow a digital identity
                            </h3>
                            <p className="text-emerald-100 mb-6 leading-relaxed">
                                Start a free trial of Calviq and replace your paper herd register with
                                QR-based tracking your whole team can use.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="https://calviq.impacgo.com/#/login"
                                    className="bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center"
                                >
                                    Start Free Trial
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                                <button
                                    onClick={() => navigate("/calviq")}
                                    className="border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
                                >
                                    Explore Calviq
                                </button>
                            </div>
                        </div>

                        {/* Bottom line */}
                        <h2 id="bottom-line" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                            The bottom line
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Paper registers don't scale, and generic spreadsheets have no link to the
                            animal they describe. Calviq closes that gap with a QR-based digital
                            identity per cow — turning a scan into instant access to her full
                            production, health, and breeding history.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-12">
                            For dairy operations that also need financial and feed management,
                            pairing Calviq's herd tracking with Impacgo's{" "}
                            <Link to="/products/dairy-farm" className="text-blue-600 hover:underline font-medium">
                                Dairy Farm Management System
                            </Link>{" "}
                            builds a complete, digital operating picture of the farm.
                        </p>

                        {/* FAQs */}
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

                        {/* Related product */}
                        <div className="border-t border-gray-200 pt-8 mt-12">
                            <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
                                Related Product
                            </p>
                            <Link
                                to="/calviq"
                                className="group inline-flex items-center text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                            >
                                Explore Calviq
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <p className="text-gray-600 mt-2">
                                See Calviq's full feature set and start a 14-day free trial.
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
