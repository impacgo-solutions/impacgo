"use client";

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { withBasePath } from "@/lib/base-path";

/*
 * Muted, looping product video that only plays while on screen (saves CPU and
 * battery) and falls back to its poster for people who prefer reduced motion.
 */
export function LoopVideo({ name, label, className = "", loop = true, onEnded }: { name: string; label: string; className?: string; loop?: boolean; onEnded?: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [name]);

  return (
    <video
      ref={ref}
      key={name}
      className={`block h-auto w-full ${className}`}
      poster={withBasePath(`/videos/${name}.png`)}
      muted
      playsInline
      loop={loop}
      preload="metadata"
      aria-label={label}
      onEnded={onEnded}
    >
      <source src={withBasePath(`/videos/${name}.webm`)} type="video/webm" />
    </video>
  );
}

/* Browser-window frame that tilts gently toward the cursor. */
export function TiltFrame({ children, className = "", url = "impacgo.com/erp-suite", max = 5 }: { children: ReactNode; className?: string; url?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1400px) rotateY(${px * max}deg) rotateX(${-py * max}deg)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "perspective(1400px) rotateY(0) rotateX(0)";
  };
  return (
    <div onMouseMove={onMove} onMouseLeave={reset} className={className}>
      <div
        ref={ref}
        className="rounded-[22px] border border-[#ebe5dc] bg-white p-2 shadow-[0_40px_90px_-40px_rgb(45_79_224/40%)] transition-transform duration-300 ease-out will-change-transform sm:p-2.5"
      >
        <div className="flex items-center gap-1.5 px-2 pb-2">
          <span className="size-2.5 rounded-full bg-[#f87171]" />
          <span className="size-2.5 rounded-full bg-[#fbbf24]" />
          <span className="size-2.5 rounded-full bg-[#34d399]" />
          <span className="ml-3 hidden h-6 flex-1 items-center rounded-md bg-[#f3eee6] px-3 text-[12px] text-[#686c79] sm:flex">{url}</span>
        </div>
        <div className="relative overflow-hidden rounded-xl">{children}</div>
      </div>
    </div>
  );
}

/* Stack of live-looking notifications that slide in one after another. */
export type Toast = { tone: string; tint: string; icon: string; title: string; text: string };
const TOASTS: Toast[] = [
  { tone: "#2d4fe0", tint: "#eef1ff", icon: "+", title: "New lead", text: "Priya Raman · Orchid Studios" },
  { tone: "#15803d", tint: "#ecfdf3", icon: "✓", title: "Deal won", text: "Lumen advisory seats · $15,500" },
  { tone: "#c8452a", tint: "#fff1ec", icon: "!", title: "Task due today", text: "Contract review call" },
  { tone: "#6d4ef0", tint: "#eef5fc", icon: "→", title: "Deal moved", text: "Northwind POS · Proposal" },
  { tone: "#7a52c7", tint: "#f5f1fd", icon: "★", title: "Lead converted", text: "Kwame Mensah → Atlas Robotics" },
];

export function LiveToasts({ className = "", items = TOASTS }: { className?: string; items?: Toast[] }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 3200);
    return () => clearInterval(id);
  }, []);
  const t = items[tick % items.length];

  return (
    <div aria-hidden className={`pointer-events-none w-[270px] ${className}`}>
      <div
        key={tick}
        className="flex items-center gap-3 rounded-2xl border border-[#ebe5dc] bg-white px-4 py-3 shadow-[0_24px_50px_-20px_rgb(20_22_28/45%)]"
        style={{ animation: "site-toast-in .6s cubic-bezier(.22,1,.36,1) both" }}
      >
        <span className="relative grid size-10 shrink-0 place-items-center rounded-xl text-[16px] font-bold" style={{ background: t.tint, color: t.tone }}>
          {t.icon}
          <span className="absolute -top-1 -right-1 size-2.5 rounded-full ring-2 ring-white" style={{ background: t.tone }} />
        </span>
        <span className="min-w-0">
          <span className="block text-[14px] font-semibold text-[#14161c]">{t.title}</span>
          <span className="block truncate text-[12px] text-[#5c6170]">{t.text}</span>
        </span>
      </div>
    </div>
  );
}

/*
 * Heading whose words rise in one after another when the heading is revealed.
 * Parts can be plain strings or { text, className } for styled phrases.
 */
export function Words({ parts, start = 0 }: { parts: (string | { text: string; className: string })[]; start?: number }) {
  let i = start;
  return (
    <>
      {parts.map((part, p) => {
        const text = typeof part === "string" ? part : part.text;
        const cls = typeof part === "string" ? "" : part.className;
        // A space separates consecutive parts ("Every record," + "connected").
        return `${p > 0 ? " " : ""}${text}`
          .split(/(\s+)/)
          .filter(Boolean)
          .map((w, k) =>
            /^\s+$/.test(w) ? (
              " "
            ) : (
              <span key={`${p}-${k}`} className="site-w -mb-[0.12em] inline-block overflow-hidden pb-[0.18em] align-bottom">
                <span className={`site-w-in inline-block ${cls}`} style={{ "--i": i++ } as CSSProperties}>
                  {w}
                </span>
              </span>
            ),
          );
      })}
    </>
  );
}
