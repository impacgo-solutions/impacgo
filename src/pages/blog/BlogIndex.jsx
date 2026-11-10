import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Warehouse,
  Sprout,
  Factory,
  Workflow,
  Layers,
  Scale,
  BarChart3,
  Rocket,
  History,
  Newspaper,
  Receipt,
} from "lucide-react";

import Header from "../../components/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";
import ContactCard from "../../components/ContactCard";
import SEO from "../../components/SEO";
import { createBreadcrumbSchema } from "../../components/schemas";
import { blogPosts } from "../../data/blogPosts";

// Each blog category gets its own accent color and icon so cards are
// scannable by topic at a glance instead of all sharing one blue gradient.
// `tint` is a matching near-white wash for the card body at rest; on hover
// the body switches to plain white (see `group-hover:to-white` below) while
// the shadow stays neutral black, so the color story stays in the resting
// state and the hover state reads as clean and consistent across categories.
// `accent` drives the "Read article" link color and `hoverAccent` the title's
// hover color. Both are written out in full here (not built with template
// strings) because Tailwind's JIT only generates CSS for class names it can
// find literally in the source text.
const CATEGORY_STYLES = {
  "D365FO + AI": { gradient: "from-indigo-600 to-violet-700", tint: "from-white to-indigo-50", accent: "text-indigo-600", hoverAccent: "group-hover:text-indigo-600", icon: Sparkles },
  "D365FO Distribution": { gradient: "from-blue-600 to-sky-700", tint: "from-white to-sky-50", accent: "text-blue-600", hoverAccent: "group-hover:text-blue-600", icon: Warehouse },
  "Calviq": { gradient: "from-emerald-600 to-teal-700", tint: "from-white to-emerald-50", accent: "text-emerald-600", hoverAccent: "group-hover:text-emerald-600", icon: Sprout },
  "D365FO Manufacturing": { gradient: "from-slate-600 to-blue-700", tint: "from-white to-slate-50", accent: "text-slate-600", hoverAccent: "group-hover:text-slate-600", icon: Factory },
  "Power Automate": { gradient: "from-orange-500 to-red-600", tint: "from-white to-orange-50", accent: "text-orange-600", hoverAccent: "group-hover:text-orange-600", icon: Workflow },
  "Power Platform": { gradient: "from-purple-600 to-fuchsia-700", tint: "from-white to-purple-50", accent: "text-purple-600", hoverAccent: "group-hover:text-purple-600", icon: Layers },
  "ERP Comparison": { gradient: "from-amber-500 to-orange-600", tint: "from-white to-amber-50", accent: "text-amber-600", hoverAccent: "group-hover:text-amber-600", icon: Scale },
  "Power BI": { gradient: "from-yellow-500 to-amber-600", tint: "from-white to-yellow-50", accent: "text-amber-600", hoverAccent: "group-hover:text-amber-600", icon: BarChart3 },
  "D365 Implementation": { gradient: "from-cyan-600 to-blue-700", tint: "from-white to-cyan-50", accent: "text-cyan-600", hoverAccent: "group-hover:text-cyan-600", icon: Rocket },
  "GST Compliance": { gradient: "from-green-600 to-teal-700", tint: "from-white to-green-50", accent: "text-green-600", hoverAccent: "group-hover:text-green-600", icon: Receipt },
  "AX 2012 Migration": { gradient: "from-red-600 to-rose-700", tint: "from-white to-red-50", accent: "text-red-600", hoverAccent: "group-hover:text-red-600", icon: History },
};
const DEFAULT_CATEGORY_STYLE = { gradient: "from-blue-600 to-indigo-700", tint: "from-white to-blue-50", accent: "text-blue-600", hoverAccent: "group-hover:text-blue-600", icon: Newspaper };

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function BlogIndex() {
  const navigate = useNavigate();

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  // Sort newest first
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.datePublished) - new Date(a.datePublished)
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO
  title="Impacgo Blog | Microsoft Dynamics 365 & Power Platform Insights"
  description="Expert articles on Microsoft Dynamics 365, AX 2012 migration, Power Platform, Power BI, and digital transformation for global enterprises. Microsoft partner insights from Impacgo."
  keywords="Microsoft Dynamics 365 blog, AX 2012 migration blog, Power Platform blog, D365FO insights, Microsoft partner blog, ERP blog India, Dynamics 365 articles"
  path="/blog"
  schema={[breadcrumbSchema]}
/>

      <ScrollToTop />
      <Header />

      <main className="flex-grow">
        {/* ============ Hero ============ */}
        <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="container mx-auto px-6 md:px-12 relative">
            <Breadcrumbs bare className="mb-6" />
            <p className="uppercase tracking-widest text-blue-200 font-semibold mb-3 text-sm">
              Insights & Guides
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-4xl">
              Microsoft Dynamics 365 & Power Platform Insights
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
              Implementation guides, migration timelines, and Microsoft
              ecosystem insights for Indian enterprises. Written by Impacgo's
              D365FO and Power Platform specialists.
            </p>
          </div>
        </section>

        {/* ============ Blog Posts Grid ============ */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          {/* Subtle dot-grid background, faded at the edges so it reads as texture, not a hard block */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(100,116,139,0.35) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 100%)",
            }}
          ></div>

          <div className="container mx-auto px-6 md:px-12 relative">
            {sortedPosts.length === 0 ? (
              <p className="text-center text-gray-600">
                No blog posts yet. Check back soon.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedPosts.map((post) => {
                  const { gradient, tint, accent, hoverAccent, icon: CategoryIcon } =
                    CATEGORY_STYLES[post.category] || DEFAULT_CATEGORY_STYLE;
                  return (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
                  >
                    {/* Cover — background layer zooms in slowly on hover, independent of the icon's own scale */}
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 ease-out group-hover:scale-110`}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <CategoryIcon
                          className="h-20 w-20 text-white/25 group-hover:scale-110 group-hover:text-white/35 transition-all duration-300"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-blue-700 px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>

                    {/* Content — a faint color wash echoing the cover at rest, turning
                        plain white on hover (paired with the neutral black shadow above),
                        plus a subtle crosshatch texture so the body isn't flat white */}
                    <div
                      className={`relative p-6 flex flex-col flex-1 bg-gradient-to-b ${tint} group-hover:to-white transition-colors duration-300 overflow-hidden`}
                    >
                      <div
                        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 12px), repeating-linear-gradient(-45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 12px)",
                          color: "#475569",
                        }}
                      ></div>

                      <div className="relative z-10 flex flex-col flex-1">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                          <span className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            {new Date(post.datePublished).toLocaleDateString(
                              "en-IN",
                              { year: "numeric", month: "short", day: "numeric" }
                            )}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            {post.readTime}
                          </span>
                        </div>

                        <h2 className={`text-xl font-bold text-gray-900 mb-3 ${hoverAccent} transition-colors leading-tight`}>
                          {post.title}
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-4">
                          {post.excerpt}
                        </p>

                        <div className={`flex items-center ${accent} text-sm font-semibold mt-auto`}>
                          Read article
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to talk about your Microsoft Dynamics project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              From D365FO implementation to AX 2012 migration to Power Platform
              development — get expert advice from Microsoft Dynamics
              specialists.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all"
            >
              Get Free Consultation
            </button>
          </div>
        </section>
      </main>

      <ContactCard />
      <Footer />
    </div>
  );
}