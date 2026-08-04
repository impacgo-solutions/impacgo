import { motion, useReducedMotion } from "framer-motion";

/**
 * Lightweight scroll-reveal wrapper — fades + slides content in the moment
 * it enters the viewport. Built on Framer Motion's whileInView (IntersectionObserver
 * under the hood, so it costs nothing extra to scroll-track vs. a plain
 * fade), not a new animation library, to keep the bundle weight unchanged.
 *
 * `once: true` means each element animates in a single time and then leaves
 * `transform`/`opacity` alone — no repeated work as the user scrolls back
 * up and down, which is what keeps this smooth rather than janky.
 *
 * Respects prefers-reduced-motion: users who've asked for less motion just
 * get the content, no animation.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  scale = 0.97,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className,
  ...rest
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (shouldReduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Same idea, for grids of cards — each item reveals with a small incremental
 * delay based on its index so the grid feels like it's cascading in rather
 * than popping all at once. Delay is capped so a 20-item grid doesn't leave
 * the last card waiting seconds to appear.
 */
export function RevealItem({ index = 0, step = 0.08, max = 0.4, ...rest }) {
  return <Reveal delay={Math.min(index * step, max)} {...rest} />;
}
