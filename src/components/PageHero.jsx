import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";

/**
 * Shared hero for every service/product page on the main site (NOT the
 * Calviq/StockLyte/FarmYieldIQ sub-apps, which intentionally keep their own
 * design systems as distinct landing pages).
 *
 * Every one of these pages used to hand-roll its own hero — ~21 near-copies
 * of the same idea with drifting quality (some got upgraded to a gradient +
 * badge + stat-row + capabilities-panel treatment, others were stuck on a
 * flat gray background with a 20%-opacity stock photo). This component is
 * that better pattern, generalized: pass `stats`/`panel` for the fuller
 * version, omit them for a simpler centered hero — either way it now shares
 * one gradient language, one type scale, one button style, and one motion
 * treatment across the whole site.
 */
export default function PageHero({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  description,
  image,
  imageAlt = "",
  gradient = "from-slate-900 via-blue-900 to-indigo-900",
  backgroundStyle,
  primaryCta,
  secondaryCta,
  stats,
  panel,
  scrollToId,
}) {
  const hasPanel = Boolean(panel);

  return (
    <section
      className={`relative w-full overflow-hidden ${backgroundStyle ? "" : `bg-gradient-to-br ${gradient}`}`}
      style={backgroundStyle ? { background: backgroundStyle } : undefined}
    >
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      )}

      {/* Decorative blur orbs — consistent depth treatment everywhere, with a
          slow drift animation for a subtler "alive" glass feel */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none animate-glass-drift" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none animate-glass-drift-slow" />

      <div className="relative container mx-auto px-6 md:px-12 pt-16 md:pt-20">
        <Breadcrumbs bare />
      </div>

      <div
        className={`relative container mx-auto px-6 md:px-12 pt-2 pb-20 md:pt-4 md:pb-28 ${
          !hasPanel ? "flex flex-col items-center text-center" : ""
        }`}
      >
        <div
          className={
            hasPanel
              ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              : "max-w-3xl"
          }
        >
          <motion.div
            initial={{ opacity: 0, y: hasPanel ? 0 : 30, x: hasPanel ? -40 : 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            {eyebrow && (
              <div className="inline-flex items-center bg-white/10 border border-white/25 backdrop-blur-xl shadow-glass-dark rounded-full px-4 py-2 mb-6">
                {EyebrowIcon && <EyebrowIcon className="h-4 w-4 text-amber-300 mr-2 flex-shrink-0" />}
                <span className="text-sm font-semibold text-white/90">{eyebrow}</span>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              {description}
            </p>

            {stats && stats.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
                {stats.map((s) => {
                  const StatIcon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center"
                    >
                      {StatIcon && <StatIcon className="h-5 w-5 text-amber-300 mx-auto mb-1" />}
                      <p className="text-xs text-white/70">{s.label}</p>
                      <p className="text-sm font-bold text-white">{s.value}</p>
                    </div>
                  );
                })}
              </div>
            )}

            <div className={`flex flex-col sm:flex-row gap-4 ${!hasPanel ? "justify-center" : ""}`}>
              {primaryCta && (
                <button
                  onClick={primaryCta.onClick}
                  className="group inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 active:translate-y-0 transition-all duration-300"
                >
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
              {secondaryCta && (
                <button
                  onClick={secondaryCta.onClick}
                  className="inline-flex items-center justify-center bg-white/5 backdrop-blur-md border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/15 hover:border-white/50 active:scale-95 transition-all duration-300"
                >
                  {secondaryCta.label}
                </button>
              )}
            </div>
          </motion.div>

          {hasPanel && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:block"
            >
              {panel}
            </motion.div>
          )}
        </div>

        {scrollToId && (
          <motion.button
            type="button"
            onClick={() => document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Scroll to next section"
            animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            className={`${hasPanel ? "absolute bottom-8 left-1/2 -translate-x-1/2" : "mt-14"}`}
          >
            <ChevronDown className="h-9 w-9 text-white/70" />
          </motion.button>
        )}
      </div>
    </section>
  );
}

/** Shared "capabilities" card frame for the right-hand panel — used by the
 * pages that pass a `panel` to PageHero, so that card's own frame/spacing
 * stays consistent too rather than each page re-implementing it. */
export function HeroPanel({ eyebrow, title, items, footnote, accent = "text-amber-300" }) {
  return (
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-glass-dark hover:border-white/30 transition-colors duration-300">
      {eyebrow && (
        <p className={`uppercase tracking-widest text-xs font-semibold mb-2 ${accent}`}>{eyebrow}</p>
      )}
      {title && <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>}
      <div className="space-y-4">
        {items.map((item) => {
          const ItemIcon = item.icon;
          return (
            <div
              key={item.title}
              className="flex items-start rounded-xl p-2 -m-2 hover:bg-white/5 transition-colors duration-300"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                {ItemIcon ? <ItemIcon className="h-5 w-5" /> : item.number}
              </div>
              <div>
                <p className="text-white font-semibold">{item.title}</p>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {footnote && (
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-sm text-white/80">{footnote}</p>
        </div>
      )}
    </div>
  );
}
