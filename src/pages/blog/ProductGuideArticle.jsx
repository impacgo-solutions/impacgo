import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Calendar, Clock, Tag, ArrowRight, CheckCircle } from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactCard from "../../components/ContactCard";
import SEO from "../../components/SEO";
import {
  createArticleSchema,
  createFaqSchema,
  createBreadcrumbSchema,
} from "../../components/schemas";

/*
 * Shared layout for product guide articles. It reproduces the exact markup
 * and Tailwind classes of the existing blog posts (see
 * CalviqDairyFarmManagementBlog.jsx) so new articles look identical, while
 * each article only supplies its content as data.
 *
 * Text values may be a string, or an array mixing strings and
 * { to: "/path", label: "link text" } objects for inline internal links
 * ({ href, label } for pages served outside this React app, like /erp-suite).
 *
 * `theme` holds full Tailwind class strings (written out literally in each
 * article file so Tailwind's build picks them up).
 */

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function RichText({ value }) {
  if (!Array.isArray(value)) return value;
  return value.map((part, i) =>
    typeof part === "string" ? (
      <span key={i}>{part}</span>
    ) : part.href ? (
      // Plain link for pages outside this React app (e.g. /erp-suite).
      <a key={i} href={part.href} className="text-blue-600 hover:underline font-medium">
        {part.label}
      </a>
    ) : (
      <Link key={i} to={part.to} className="text-blue-600 hover:underline font-medium">
        {part.label}
      </Link>
    )
  );
}

const plainText = (value) =>
  Array.isArray(value) ? value.map((p) => (typeof p === "string" ? p : p.label)).join("") : value;

const STEP_STYLES = [
  { card: "border-emerald-200", badge: "bg-emerald-100 text-emerald-700" },
  { card: "border-teal-200", badge: "bg-teal-100 text-teal-700" },
  { card: "border-green-200", badge: "bg-green-100 text-green-700" },
];

export default function ProductGuideArticle({ article }) {
  const navigate = useNavigate();
  const {
    slug,
    seoTitle,
    seoDescription,
    title,
    excerpt,
    crumb,
    badge,
    BadgeIcon,
    category,
    datePublished,
    publishedLabel,
    readTime,
    theme,
    lead,
    intro,
    callout,
    sections,
    cta,
    bottomLine,
    faqs,
    related,
  } = article;
  const path = `/blog/${slug}`;

  const faqSchema = createFaqSchema(faqs);
  const articleSchema = createArticleSchema({
    title,
    description: excerpt,
    imageUrl: "https://www.impacgo.com/logo.png",
    datePublished,
    dateModified: datePublished,
    authorName: "Impacgo Solutions",
    path,
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: crumb, path },
  ]);

  const toc = [
    ...sections.map((s, i) => ({ id: s.id, label: `${i + 1}. ${s.title}` })),
    { id: "bottom-line", label: `${sections.length + 1}. The bottom line` },
    { id: "faq", label: `${sections.length + 2}. Frequently asked questions` },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEO
        title={seoTitle}
        description={seoDescription}
        path={path}
        type="article"
        schema={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      <ScrollToTop />
      <Header alwaysSolid />

      <main className="flex-grow">
        {/* ============ Article Hero ============ */}
        <section className={`relative bg-gradient-to-br ${theme.hero} pt-32 pb-12 md:pt-40 md:pb-16`}>
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
              <span className="text-gray-900">{crumb}</span>
            </nav>

            <div className={`inline-flex items-center ${theme.badge} border rounded-full px-4 py-2 mb-6`}>
              <BadgeIcon className={`h-4 w-4 ${theme.badgeIcon} mr-2`} />
              <span className={`text-sm font-semibold ${theme.badgeText}`}>{badge}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">{title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1.5" />
                Published {publishedLabel}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1.5" />
                {readTime}
              </span>
              <span className="flex items-center">
                <Tag className="h-4 w-4 mr-1.5" />
                {category}
              </span>
            </div>
          </div>
        </section>

        {/* ============ Article Body ============ */}
        <article className="py-12 md:py-16">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              <RichText value={lead} />
            </p>
            {intro.map((p, i) => (
              <p key={i} className="text-lg text-gray-700 leading-relaxed mb-8">
                <RichText value={p} />
              </p>
            ))}

            <div className={`${theme.callout} border-l-4 p-6 my-10 rounded-r-lg`}>
              <div className="flex items-start">
                <callout.Icon className={`h-6 w-6 ${theme.accentText} mr-3 flex-shrink-0 mt-1`} />
                <div>
                  <h3 className={`font-bold ${theme.calloutTitle} mb-2`}>{callout.title}</h3>
                  <p className={theme.calloutText}>
                    <RichText value={callout.text} />
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
              <h3 className="text-xl font-bold mb-4">In this article</h3>
              <ul className="space-y-3 text-blue-600">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="hover:underline">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {sections.map((s, si) => (
              <section key={s.id}>
                <h2 id={s.id} className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                  {si + 1}. {s.title}
                </h2>
                {(s.paragraphs || []).map((p, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-6">
                    <RichText value={p} />
                  </p>
                ))}
                {s.bullets && (
                  <ul className="space-y-3 mb-6 text-gray-700">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className={`h-5 w-5 ${theme.accentText} mr-3 mt-0.5 flex-shrink-0`} />
                        <span>
                          <strong>{b.strong}</strong> <RichText value={b.text} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.cards &&
                  s.cards.map((c, i) => (
                    <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                      <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                      <p className="text-gray-700 leading-relaxed">
                        <RichText value={c.text} />
                      </p>
                    </div>
                  ))}
                {s.steps && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {s.steps.map((st, i) => (
                      <div key={i} className={`bg-white border-2 ${STEP_STYLES[i % 3].card} rounded-xl p-6`}>
                        <div
                          className={`${STEP_STYLES[i % 3].badge} font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4`}
                        >
                          {i + 1}
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">{st.title}</h3>
                        <p className="text-sm text-gray-700">{st.text}</p>
                      </div>
                    ))}
                  </div>
                )}
                {s.numbered && (
                  <ul className="space-y-2 mb-8 text-gray-700">
                    {s.numbered.map((n, i) => (
                      <li key={i} className="flex items-start">
                        <span
                          className={`${theme.numberBadge} font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 text-sm`}
                        >
                          {i + 1}
                        </span>
                        <span>
                          <RichText value={n} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {(s.after || []).map((p, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-8">
                    <RichText value={p} />
                  </p>
                ))}
                {si === cta.afterSection && (
                  <div className={`bg-gradient-to-br ${theme.cta} text-white rounded-2xl p-8 md:p-10 my-12`}>
                    <div className="inline-flex items-center bg-white/10 border border-white/30 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                      <BadgeIcon className={`h-4 w-4 ${theme.ctaMuted} mr-2`} />
                      <span className={`text-sm font-semibold ${theme.ctaMuted}`}>{cta.badge}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{cta.title}</h3>
                    <p className={`${theme.ctaMuted} mb-6 leading-relaxed`}>{cta.text}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => navigate(cta.primary.to)}
                        className={`bg-white ${theme.ctaButtonText} px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center`}
                      >
                        {cta.primary.label}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                      <button
                        onClick={() => navigate(cta.secondary.to)}
                        className="border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
                      >
                        {cta.secondary.label}
                      </button>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Bottom line */}
            <h2 id="bottom-line" className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              The bottom line
            </h2>
            {bottomLine.map((p, i) => (
              <p key={i} className={`text-gray-700 leading-relaxed ${i === bottomLine.length - 1 ? "mb-12" : "mb-4"}`}>
                <RichText value={p} />
              </p>
            ))}

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
              <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">Related Product</p>
              <Link
                to={related.to}
                className="group inline-flex items-center text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                {related.label}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-gray-600 mt-2">{plainText(related.text)}</p>
            </div>
          </div>
        </article>
      </main>

      <ContactCard />
      <Footer />
    </div>
  );
}
