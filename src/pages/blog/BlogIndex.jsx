import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

import Header from "../../components/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";
import ContactCard from "../../components/ContactCard";
import SEO from "../../components/SEO";
import { createBreadcrumbSchema } from "../../components/schemas";
import { blogPosts } from "../../data/blogPosts";

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
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 md:px-12">
            {sortedPosts.length === 0 ? (
              <p className="text-center text-gray-600">
                No blog posts yet. Check back soon.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedPosts.map((post) => (
                  <article
                    key={post.slug}
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    className="group bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-100"
                  >
                    {/* Cover */}
                    <div className="relative h-48 bg-gradient-to-br from-blue-600 to-indigo-700 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <p className="text-white font-bold text-xl text-center leading-tight">
                          {post.category}
                        </p>
                      </div>
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-blue-700 px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
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

                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
                        Read article
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
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