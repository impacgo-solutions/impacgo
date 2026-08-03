import { useEffect } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, ArrowRight, Mail } from "lucide-react";
import POSHeader from "../../components/POSHeader";
import Footer from "../../components/Footer";
import ContactCard from "../../components/ContactCard";
import SEO from "../../components/SEO";
import { createServiceSchema, createFaqSchema, createBreadcrumbSchema } from "../../components/schemas";
import { erpModules, getErpModule } from "../../data/erpModules";
import Reveal, { RevealItem } from "../../components/Reveal";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Tailwind class strings can't be built dynamically (mod.color + "-600"
// wouldn't survive Tailwind's content scan), so every shade this page uses
// — including the section washes and decorative blobs below — is spelled
// out per color here instead.
const colorMap = {
  violet: {
    gradient: "from-violet-700 via-violet-600 to-purple-700",
    solid: "bg-violet-600",
    solidHover: "hover:bg-violet-700",
    light: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
    ring: "ring-violet-500",
    wash: "bg-gradient-to-b from-violet-50/70 via-white to-white",
    washAlt: "bg-gradient-to-br from-slate-50 via-violet-50/60 to-slate-50",
    blobA: "bg-violet-300/30",
    blobB: "bg-purple-300/25",
    scrim: "from-violet-950/75 via-black/45 to-purple-950/70",
  },
  blue: {
    gradient: "from-blue-700 via-blue-600 to-cyan-700",
    solid: "bg-blue-600",
    solidHover: "hover:bg-blue-700",
    light: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    ring: "ring-blue-500",
    wash: "bg-gradient-to-b from-blue-50/70 via-white to-white",
    washAlt: "bg-gradient-to-br from-slate-50 via-blue-50/60 to-slate-50",
    blobA: "bg-blue-300/30",
    blobB: "bg-cyan-300/25",
    scrim: "from-blue-950/75 via-black/45 to-cyan-950/70",
  },
  amber: {
    gradient: "from-amber-600 via-orange-600 to-amber-700",
    solid: "bg-amber-600",
    solidHover: "hover:bg-amber-700",
    light: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
    ring: "ring-amber-500",
    wash: "bg-gradient-to-b from-amber-50/70 via-white to-white",
    washAlt: "bg-gradient-to-br from-slate-50 via-amber-50/60 to-slate-50",
    blobA: "bg-amber-300/30",
    blobB: "bg-orange-300/25",
    scrim: "from-amber-950/75 via-black/45 to-orange-950/70",
  },
  slate: {
    gradient: "from-slate-800 via-slate-700 to-gray-800",
    solid: "bg-slate-700",
    solidHover: "hover:bg-slate-800",
    light: "bg-slate-100",
    text: "text-slate-700",
    border: "border-slate-200",
    ring: "ring-slate-500",
    wash: "bg-gradient-to-b from-slate-100/70 via-white to-white",
    washAlt: "bg-gradient-to-br from-gray-50 via-slate-100/60 to-gray-50",
    blobA: "bg-slate-300/30",
    blobB: "bg-gray-400/20",
    scrim: "from-slate-950/75 via-black/45 to-gray-950/70",
  },
  emerald: {
    gradient: "from-emerald-700 via-teal-600 to-emerald-700",
    solid: "bg-emerald-600",
    solidHover: "hover:bg-emerald-700",
    light: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
    ring: "ring-emerald-500",
    wash: "bg-gradient-to-b from-emerald-50/70 via-white to-white",
    washAlt: "bg-gradient-to-br from-slate-50 via-emerald-50/60 to-slate-50",
    blobA: "bg-emerald-300/30",
    blobB: "bg-teal-300/25",
    scrim: "from-emerald-950/75 via-black/45 to-teal-950/70",
  },
  orange: {
    gradient: "from-orange-500 via-orange-600 to-orange-700",
    solid: "bg-orange-600",
    solidHover: "hover:bg-orange-700",
    light: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-200",
    ring: "ring-orange-500",
    wash: "bg-gradient-to-b from-orange-50/70 via-white to-white",
    washAlt: "bg-gradient-to-br from-slate-50 via-orange-50/60 to-slate-50",
    blobA: "bg-orange-300/30",
    blobB: "bg-amber-300/25",
    scrim: "from-orange-950/85 via-black/65 to-orange-950/85",
  },
  teal: {
    gradient: "from-teal-700 via-cyan-600 to-teal-800",
    solid: "bg-teal-600",
    solidHover: "hover:bg-teal-700",
    light: "bg-teal-50",
    text: "text-teal-600",
    border: "border-teal-200",
    ring: "ring-teal-500",
    wash: "bg-gradient-to-b from-teal-50/70 via-white to-white",
    washAlt: "bg-gradient-to-br from-slate-50 via-teal-50/60 to-slate-50",
    blobA: "bg-teal-300/30",
    blobB: "bg-cyan-300/25",
    scrim: "from-teal-950/75 via-black/45 to-cyan-950/70",
  },
};

// Reusable soft blurred color blobs — a static, non-color-dependent shape
// so every section can drop in the same decorative depth without repeating
// the same six-line block everywhere it's used.
function SectionBlobs({ c, flip = false }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className={`absolute h-72 w-72 rounded-full blur-3xl ${c.blobA} ${
          flip ? "-bottom-16 -right-16" : "-top-16 -left-16"
        }`}
      />
      <div
        className={`absolute h-64 w-64 rounded-full blur-3xl ${c.blobB} ${
          flip ? "-top-10 -left-10" : "-bottom-10 -right-10"
        }`}
      />
    </div>
  );
}

// A subtle dot-grid texture — plain CSS, no external image request — used
// behind content sections that need a bit more visual texture than a flat
// gradient wash alone.
const dotGridStyle = {
  backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px)",
  backgroundSize: "22px 22px",
};

export default function ERPModuleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const mod = getErpModule(slug);

  useEffect(() => {
    if (!mod) {
      navigate("/#erp-products", { replace: true });
    }
  }, [mod, navigate]);

  if (!mod) return null;

  const c = colorMap[mod.color];
  const Icon = mod.icon;
  const otherModules = erpModules.filter((m) => m.slug !== mod.slug);

  const faqSchema = createFaqSchema(mod.faqs);
  const serviceSchema = createServiceSchema({
    serviceName: `Impacgo ${mod.name}`,
    description: mod.description,
    serviceType: `${mod.tagline} Software`,
    path: `/erp/${mod.slug}`,
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Impacgo Suite", path: "/#erp-products" },
    { name: `Impacgo ${mod.name}`, path: `/erp/${mod.slug}` },
  ]);

  return (
    <div>
      <SEO
        title={`Impacgo ${mod.name} | ${mod.tagline} | Impacgo Solutions`}
        description={`${mod.description} Part of the Impacgo Suite — currently in active development.`}
        keywords={`Impacgo Suite, Impacgo ${mod.name}, ${mod.tagline}, business management software, ${mod.capabilities.join(", ")}`}
        path={`/erp/${mod.slug}`}
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />
      <ScrollToTop />
      <POSHeader />

      {/* HERO */}
      <section
        className={`relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden ${
          mod.heroImage ? "bg-gray-950" : `bg-gradient-to-br ${c.gradient}`
        }`}
      >
        {/* Background photo stays the focal point here — lightly blurred
            for a soft, "moderate" finish (not heavily obscured) and shown
            at high opacity. Drop the generated image into
            public/erp-hero/{slug}.webp and it picks up automatically;
            missing file just falls back to the plain brand gradient below
            (see heroImage comment in src/data/erpModules.js). */}
        {mod.heroImage && (
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 blur-[2px] opacity-90"
            style={{ backgroundImage: `url(${mod.heroImage})` }}
            aria-hidden="true"
          />
        )}
        {mod.heroImage ? (
          // Neutral dark scrim (not the full-strength brand gradient) —
          // ~40-45% in the middle where the photo's most interesting detail
          // usually sits, darker at the corners for text contrast. This is
          // the standard "photo behind text" pattern: enough overlay for
          // WCAG-safe contrast on white text without drowning the image in
          // solid color.
          <div className={`absolute inset-0 bg-gradient-to-br ${c.scrim}`} aria-hidden="true" />
        ) : (
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%)]" aria-hidden="true" />
        )}
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/3 -left-16 h-64 w-64 rounded-full bg-black/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/#erp-products"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Impacgo Suite
          </Link>

          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="h-20 w-20 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center flex-shrink-0">
              <Icon className="h-10 w-10 text-white" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="bg-white/15 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                  Impacgo Suite
                </span>
                <span className="bg-amber-400 text-amber-950 text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                  In Development
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                Impacgo {mod.name}
              </h1>
              <p className="text-white/80 text-lg font-medium">{mod.tagline}</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 max-w-3xl">
            {mod.headline}
          </h2>
          <p className="text-white/85 text-lg max-w-3xl mt-4 leading-relaxed">
            {mod.subheadline}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 bg-white ${c.text} px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg`}
            >
              <Mail className="h-4 w-4" /> Talk to Our Team
            </Link>
            <Link
              to="/#erp-products"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Explore Other Modules
            </Link>
          </div>

          {/* Hero highlight tiles */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {mod.heroHighlights.map((h, index) => (
              <Reveal
                key={h.label}
                delay={0.3 + index * 0.08}
                className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10"
              >
                <p className="text-white font-bold text-sm mb-1">{h.label}</p>
                <p className="text-white/70 text-xs leading-snug">{h.value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className={`relative py-16 md:py-20 overflow-hidden ${c.wash}`}>
        <SectionBlobs c={c} />
        <div className="container mx-auto px-4 relative z-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              {mod.workflow.title}
            </h2>
            <p className="text-gray-600">{mod.workflow.description}</p>
          </Reveal>

          {mod.workflow.pipelines ? (
            <div className="space-y-10 max-w-5xl mx-auto">
              {mod.workflow.pipelines.map((pipeline) => (
                <div key={pipeline.name}>
                  <h3 className={`text-sm font-bold uppercase tracking-wide mb-4 ${c.text}`}>
                    {pipeline.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {pipeline.steps.map((step, i) => (
                      <div key={step} className="flex items-center gap-2">
                        <RevealItem
                          as="span"
                          index={i}
                          step={0.06}
                          y={0}
                          className={`bg-white/80 backdrop-blur-sm shadow-sm ${c.text} text-sm font-semibold px-4 py-2 rounded-full border ${c.border}`}
                        >
                          {step}
                        </RevealItem>
                        {i < pipeline.steps.length - 1 && (
                          <ArrowRight className="h-4 w-4 text-gray-300 flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-5xl mx-auto flex flex-wrap items-stretch justify-center gap-3">
              {mod.workflow.steps.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <RevealItem
                    index={i}
                    step={0.1}
                    className={`bg-white/80 backdrop-blur-sm shadow-sm rounded-xl border ${c.border} px-5 py-4 max-w-[220px]`}
                  >
                    <span className={`block text-xs font-bold ${c.text} mb-1`}>Step {i + 1}</span>
                    <span className="text-sm text-gray-700 font-medium">{step}</span>
                  </RevealItem>
                  {i < mod.workflow.steps.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-gray-300 flex-shrink-0 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MODULE BREAKDOWN */}
      <section className={`relative py-16 md:py-20 overflow-hidden ${c.washAlt}`}>
        <div className="absolute inset-0" style={dotGridStyle} aria-hidden="true" />
        <SectionBlobs c={c} flip />
        <div className="container mx-auto px-4 relative z-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Everything Inside Impacgo {mod.name}
            </h2>
            <p className="text-gray-600">
              A full breakdown of what this module covers today.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mod.moduleGroups.map((group, index) => (
              <RevealItem
                key={group.category}
                index={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-800 mb-4">{group.category}</h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${c.text}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-16 md:py-20 bg-white overflow-hidden">
        <div
          className={`absolute h-80 w-80 rounded-full blur-3xl ${c.blobA} opacity-40 top-1/2 -translate-y-1/2 -right-24 pointer-events-none`}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Why Teams Are Adopting Impacgo {mod.name}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mod.benefits.map((b, index) => (
              <RevealItem
                key={b.title}
                index={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`h-10 w-10 rounded-lg ${c.light} ${c.text} flex items-center justify-center mb-4 font-bold`}>
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{b.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`relative py-16 md:py-20 overflow-hidden ${c.wash}`}>
        <SectionBlobs c={c} />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <Reveal as="h2" className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
            Frequently Asked Questions
          </Reveal>
          <div className="space-y-4">
            {mod.faqs.map((faq, index) => (
              <RevealItem
                key={faq.question}
                index={index}
                step={0.1}
                as="details"
                className="group bg-white/90 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-gray-800 flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">⌄</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`relative py-16 md:py-20 overflow-hidden bg-gradient-to-br ${c.gradient}`}>
        <div className="absolute inset-0 opacity-[0.07]" style={{ ...dotGridStyle, backgroundImage: dotGridStyle.backgroundImage.replace("15, 23, 42, 0.06", "255, 255, 255, 0.5") }} aria-hidden="true" />
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-black/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <Reveal className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want an early look at Impacgo {mod.name}?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            We're building it alongside a small group of early-access partners — tell us about
            your operation and we'll show you where it stands today.
          </p>
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 bg-white ${c.text} px-8 py-3.5 rounded-lg font-bold hover:opacity-90 transition shadow-lg`}
          >
            <Mail className="h-4 w-4" /> Get in Touch
          </Link>
        </Reveal>
      </section>

      {/* EXPLORE OTHER MODULES */}
      <section className={`py-14 border-t border-gray-100 ${c.wash}`}>
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">
            Explore the Rest of the Impacgo Suite
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherModules.map((m, index) => {
              const OtherIcon = m.icon;
              return (
                <RevealItem key={m.slug} index={index} step={0.06} y={12} as="span">
                  <Link
                    to={`/erp/${m.slug}`}
                    className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-sm border border-gray-200 text-gray-700 px-4 py-2.5 rounded-full text-sm font-medium transition-colors"
                  >
                    <OtherIcon className="h-4 w-4" /> Impacgo {m.name}
                  </Link>
                </RevealItem>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCard />
      <Footer />
    </div>
  );
}
