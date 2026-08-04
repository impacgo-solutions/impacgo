import { motion, useReducedMotion } from "framer-motion";

/**
 * Shared glassmorphism card — the base visual unit for the site's card-heavy
 * sections (industries, services, why-choose-us, FAQ items, ERP modules,
 * etc.), replacing the old flat `bg-white rounded-xl shadow-md` pattern that
 * was repeated ad-hoc across ~15+ files.
 *
 * `tone="light"` (default) is a frosted white card for light/white section
 * backgrounds. `tone="dark"` is a frosted card for dark gradient backgrounds
 * (hero panels, dark sections) — same idea as PageHero's HeroPanel already
 * used, just generalized so any section can use it.
 */
export default function GlassCard({
  children,
  as = "div",
  tone = "light",
  hover = true,
  className = "",
  ...rest
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  const toneClasses =
    tone === "dark"
      ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-glass-dark"
      : "bg-white/70 backdrop-blur-xl border border-white/60 shadow-glass";

  const hoverClasses =
    hover &&
    (tone === "dark"
      ? "hover:bg-white/15 hover:border-white/30"
      : "hover:bg-white/90 hover:border-white/80 hover:shadow-glass-lg");

  return (
    <MotionTag
      whileHover={hover && !shouldReduceMotion ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`rounded-2xl transition-all duration-300 ${toneClasses} ${hoverClasses || ""} ${className}`}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
