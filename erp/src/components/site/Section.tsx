import type { CSSProperties, ReactNode } from "react";
import { Words } from "@/components/site/Media";

/*
 * The homepage design system: one type scale, one section rhythm, one container.
 * Every section uses these so spacing and typography stay consistent.
 */
export const type = {
  display: "text-balance text-[44px] leading-[1.04] font-semibold tracking-[-0.032em] text-[#14161c] sm:text-[64px] lg:text-[78px]",
  h2: "text-balance text-[36px] leading-[1.1] font-semibold tracking-[-0.028em] text-[#14161c] sm:text-[50px] lg:text-[60px]",
  h3: "text-[22px] leading-[1.3] font-semibold tracking-[-0.015em] text-[#14161c]",
  lead: "text-pretty text-[18px] leading-[1.6] text-[#41464f] sm:text-[21px]",
  body: "text-[17px] leading-[1.7] text-[#5c6170]",
  eyebrow: "text-[16px] font-semibold text-[#2d4fe0]",
  label: "text-[12px] font-semibold tracking-[0.12em] text-[#686c79] uppercase",
};

/* Highlighted phrase in a heading (brand gradient). */
export const accent = "site-gradient-text";

export const button = {
  primary:
    "site-magnetic group inline-flex h-13 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[linear-gradient(180deg,#e5512f,#cc3b1c)] px-7 text-[17px] font-semibold text-white shadow-[inset_0_1px_0_rgb(255_255_255/20%),0_10px_24px_-12px_rgb(204_59_28/60%)] transition-[filter,translate] duration-200 hover:-translate-y-px hover:brightness-110",
  secondary:
    "site-magnetic inline-flex h-13 cursor-pointer items-center justify-center rounded-xl border border-[#ddd6cb] bg-white px-7 text-[17px] font-semibold text-[#14161c] transition-colors hover:border-[#c9c1b4] hover:bg-[#faf7f2]",
  link: "group inline-flex items-center gap-2 text-[17px] font-semibold text-[#2d4fe0]",
};

export const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/* Tinted sections fade into white at both edges so neighbouring sections blend instead of meeting at a hard line. */
export const tint = "bg-[linear-gradient(180deg,#ffffff,#fcf0df_180px,#fcf0df_calc(100%-180px),#ffffff)]";

const TONES = {
  white: "bg-white",
  tint,
} as const;

/* Full-screen section rhythm: at least one viewport tall on desktop, content centred vertically. */
export const sectionFrame = "flex flex-col justify-center scroll-mt-20 py-24 sm:py-28 lg:min-h-[100svh]";
export const container = "mx-auto w-full max-w-[1200px] px-5 sm:px-8";

/* Section wrapper: equal vertical rhythm and a 1200px content column everywhere. */
export function Section({ id, tone = "white", className = "", inner = "", children }: { id?: string; tone?: keyof typeof TONES; className?: string; inner?: string; children: ReactNode }) {
  return (
    <section id={id} className={`${sectionFrame} ${TONES[tone]} ${className}`}>
      <div className={`${container} ${inner}`}>{children}</div>
    </section>
  );
}

export type Title = string | (string | { text: string; className: string })[];

/* Heading block: small eyebrow, large title whose words rise in, readable subtitle. */
export function SectionHead({ eyebrow, title, sub, center = true }: { eyebrow?: string; title: Title; sub?: ReactNode; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-[880px] text-center" : "max-w-[580px]"}>
      {eyebrow ? (
        <p data-reveal className={`${type.eyebrow} pb-5`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 data-reveal="words" style={d(60)} className={type.h2}>
        <Words parts={typeof title === "string" ? [title] : title} />
      </h2>
      {sub ? (
        <p data-reveal style={d(200)} className={`${type.lead} pt-6 ${center ? "mx-auto max-w-[680px]" : ""}`}>
          {sub}
        </p>
      ) : null}
    </div>
  );
}

/* Standard gap between a SectionHead and the section's main content. */
export const afterHead = "mt-16 sm:mt-20";
