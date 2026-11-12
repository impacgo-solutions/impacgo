import type { ReactNode, SVGProps } from "react";

/* Inline icons for the homepage (stroke/fill follow currentColor). */

type P = SVGProps<SVGSVGElement>;
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const Chevron = ({ dir, ...p }: P & { dir: "left" | "right" }) => (
  <svg viewBox="0 0 24 24" aria-hidden {...base} strokeWidth={2} {...p}>
    <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </svg>
);

export const Caret = (p: P) => (
  <svg viewBox="0 0 10 7" aria-hidden className="zph-caret" {...p}>
    <path d="M1 1.5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

/** Arrow pointing up-right: marks links that open a separate Impacgo app. */
export const ExternalArrow = (p: P) => (
  <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden {...base} {...p}>
    <path d="M3.5 9.5l6-6M4.5 3.5h5v5" />
  </svg>
);

export const ArrowRight = (p: P) => (
  <svg width="15" height="12" viewBox="0 0 15 12" aria-hidden {...base} {...p}>
    <path d="M1 6h12M8.5 1.5L13 6l-4.5 4.5" />
  </svg>
);

export const Search = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
  </svg>
);

export const Globe = (p: P) => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...base} strokeWidth={1.5} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
  </svg>
);

export const Eye = ({ off, ...p }: P & { off?: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...base} strokeWidth={1.6} {...p}>
    <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
    <circle cx="12" cy="12" r="2.8" />
    {off ? <path d="M4 4l16 16" /> : null}
  </svg>
);

export const Play = (p: P) => (
  <svg width="31" height="31" viewBox="0 0 31 31" aria-hidden {...p}>
    <circle cx="15.5" cy="15.5" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M12.5 10l8 5.5-8 5.5z" fill="currentColor" />
  </svg>
);

export const Close = (p: P) => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...base} strokeWidth={2.2} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Menu = (p: P) => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden {...base} strokeWidth={2} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Mail = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden {...base} strokeWidth={1.6} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6l8.5 7 8.5-7" />
  </svg>
);

export const Star = (p: P) => (
  <svg viewBox="0 0 10 10" aria-hidden {...p}>
    <path d="M5 0l1.2 3.8L10 5 6.2 6.2 5 10 3.8 6.2 0 5l3.8-1.2z" fill="currentColor" />
  </svg>
);

/* Gradient sparkle tile used above the spotlight heading. */
export const SparkleTile = (p: P) => (
  <svg viewBox="0 0 72 64" aria-hidden {...p}>
    <defs>
      <linearGradient id="zh-spark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f86fae" />
        <stop offset="0.5" stopColor="#b26cf0" />
        <stop offset="1" stopColor="#5b8cff" />
      </linearGradient>
    </defs>
    <rect x="3" y="9" width="52" height="52" rx="12" fill="none" stroke="url(#zh-spark)" strokeWidth="3.5" />
    <path d="M29 20l3.6 9.6L42 33l-9.4 3.4L29 46l-3.6-9.6L16 33l9.4-3.4z" fill="url(#zh-spark)" />
    <path d="M57 3l2 5.6L64.5 10.5 59 12.4 57 18l-2-5.6-5.5-1.9L55 8.6z" fill="url(#zh-spark)" />
  </svg>
);

/* Industry / module glyphs */
export const Glyph = ({ name, ...p }: P & { name: string }) => {
  const d: Record<string, ReactNode> = {
    retail: <><path d="M4 9l1.5-5h13L20 9" /><path d="M4 9h16v2a3 3 0 01-5.3 1.9A3 3 0 0112 14a3 3 0 01-2.7-1.1A3 3 0 014 11z" /><path d="M5.5 14v6h13v-6" /></>,
    tech: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>,
    health: <><path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" /><path d="M9.5 11h5M12 8.5v5" /></>,
    factory: <><path d="M3 20V10l5 3V10l5 3V6h4l1 4h3v10z" /><path d="M7 16h2M12 16h2M17 16h1" /></>,
    finance: <><path d="M3 10l9-5 9 5" /><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18" /></>,
    education: <><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c3.5 2.5 8.5 2.5 12 0v-5" /></>,
    leads: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0113 0" /><path d="M17 8v6M14 11h6" /></>,
    pipeline: <><rect x="3" y="4" width="5" height="16" rx="1.5" /><rect x="10" y="4" width="5" height="11" rx="1.5" /><rect x="17" y="4" width="4" height="7" rx="1.5" /></>,
    accounts: <><path d="M4 20V6l8-3 8 3v14" /><path d="M9 20v-4h6v4M8 9h2M14 9h2M8 13h2M14 13h2" /></>,
    tasks: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
    chart: <><path d="M4 20V4M4 20h16" /><path d="M8 16l4-5 3 3 5-7" /></>,
    gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4L5.3 5.3" /></>,
    rocket: <><path d="M12 3c3.5 2 5.5 5.6 5 10l-2.5 3h-5L7 13c-.5-4.4 1.5-8 5-10z" /><circle cx="12" cy="9.5" r="1.8" /><path d="M9.5 16l-2 4M14.5 16l2 4M12 16.5v4" /></>,
    convert: <><circle cx="7" cy="7" r="3" /><path d="M7 10v4a4 4 0 004 4h6" /><path d="M14 15l3 3-3 3" /></>,
    dashboard: <><rect x="3" y="3" width="8" height="10" rx="1.5" /><rect x="13" y="3" width="8" height="6" rx="1.5" /><rect x="13" y="11" width="8" height="10" rx="1.5" /><rect x="3" y="15" width="8" height="6" rx="1.5" /></>,
    services: <><circle cx="12" cy="12" r="8.5" /><path d="M8 12.5l2.7 2.5L16 9.5" /></>,
    power: <><path d="M13 2L5 13h6l-1 9 8-11h-6z" /></>,
    bi: <><path d="M5 20V12M10 20V6M15 20v-9M20 20V9" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...base} {...p}>
      {d[name]}
    </svg>
  );
};

/* Hand-drawn looping arrow beside "Grow with Impacgo". */
export const LoopArrow = (p: P) => (
  <svg viewBox="0 0 117 113" aria-hidden {...p}>
    <path
      d="M14 8c-9 18-6 36 10 40 14 4 22-12 10-16-14-4-20 18-6 34 13 15 40 22 80 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path d="M100 78l9 8-10 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Check = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...base} strokeWidth={2.4} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);
