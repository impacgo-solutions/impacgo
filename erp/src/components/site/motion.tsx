"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/*
 * Marks every [data-reveal] / .site-line element with [data-shown] once its top
 * reaches 92% of the viewport height, or it has already been scrolled past.
 * A per-frame position check (rather than IntersectionObserver) means fast
 * scrolls and #anchor jumps can never skip an element and leave it hidden.
 */
export function RevealObserver() {
  useEffect(() => {
    let pending = [...document.querySelectorAll<HTMLElement>("[data-reveal], .site-line")];
    let frame = 0;

    const check = () => {
      const limit = window.innerHeight * 0.92;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top < limit) {
          el.setAttribute("data-shown", "");
          return false;
        }
        return true;
      });
      if (pending.length === 0) stop();
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(check);
    };
    const stop = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      stop();
      cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}

const clamp = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n));

/*
 * Scroll engine for [data-scroll] elements. Each frame it writes CSS variables
 * that site.css turns into effects:
 *   --p    0 → 1 as the element's top travels from the viewport bottom to
 *          (1 - data-scroll-end) of the viewport (default end 0.7)
 *   --y    element centre relative to the viewport centre, in viewport heights
 *   --out  0 → 1 as the page scrolls away from the top (hero hand-off)
 * It also speeds up the industry marquee while the page is scrolling.
 */
export function ScrollFx() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let boost = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const now = performance.now();
      const velocity = Math.abs(window.scrollY - lastY) / Math.max(1, now - lastT);
      lastY = window.scrollY;
      lastT = now;

      for (const el of document.querySelectorAll<HTMLElement>("[data-scroll]")) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) continue;
        const end = Number(el.dataset.scrollEnd ?? 0.7);
        const p = reduce ? 1 : clamp((vh - r.top) / (vh * end));
        const y = reduce ? 0 : clamp((r.top + r.height / 2 - vh / 2) / vh, -1.5, 1.5);
        el.style.setProperty("--p", p.toFixed(3));
        el.style.setProperty("--y", y.toFixed(3));
        if (el.dataset.scroll === "exit") el.style.setProperty("--out", reduce ? "0" : clamp(window.scrollY / (vh * 0.7)).toFixed(3));
        // Tall sections with sticky content: 0 → 1 across the pinned stretch.
        if (el.dataset.scroll === "pin") el.style.setProperty("--pin", reduce ? "1" : clamp(-r.top / Math.max(1, r.height - vh)).toFixed(3));
      }

      if (reduce) return;
      // Marquee runs faster while scrolling, then eases back to its normal pace.
      boost = Math.max(boost * 0.92, Math.min(velocity * 2.5, 5));
      for (const m of document.querySelectorAll<HTMLElement>(".site-marquee")) {
        for (const a of m.getAnimations()) a.playbackRate = 1 + boost;
      }
      if (boost > 0.01) frame = requestAnimationFrame(update);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}

/* .site-magnetic buttons lean toward a nearby mouse pointer (fine pointers only). */
export function MagneticFx() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(pointer: fine)").matches) return;
    let frame = 0;
    let x = 0;
    let y = 0;
    const update = () => {
      frame = 0;
      for (const el of document.querySelectorAll<HTMLElement>(".site-magnetic")) {
        const r = el.getBoundingClientRect();
        const dx = x - (r.left + r.width / 2);
        const dy = y - (r.top + r.height / 2);
        const near = Math.abs(dx) < r.width / 2 + 36 && Math.abs(dy) < r.height / 2 + 36;
        const next = near ? `translate(${(dx * 0.16).toFixed(1)}px, ${(dy * 0.26).toFixed(1)}px)` : "";
        if (el.style.transform !== next) el.style.transform = next;
      }
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}

/* Number that counts up (ease-out) the first time it becomes visible. */
export function CountUp({ to, duration = 1600, suffix = "" }: { to: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      setValue(0);
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

/* Cycles through words every `ms`; the key change re-triggers the CSS entrance. */
export function RotatingWord({ words, ms = 2600 }: { words: string[]; ms?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % words.length), ms);
    return () => clearInterval(id);
  }, [words.length, ms]);
  return (
    <span key={i} className="site-word site-gradient-text">
      {words[i]}
    </span>
  );
}

/* Autoplaying index that pauses while hovered/focused; manual selection restarts the timer. */
export function useAutoplay(count: number, ms: number) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % count), ms);
    return () => clearTimeout(id);
  }, [index, paused, count, ms, cycle]);

  const go = useCallback(
    (i: number) => {
      setIndex(((i % count) + count) % count);
      setCycle((c) => c + 1);
    },
    [count],
  );

  const pauseProps = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false),
  };

  return { index, go, paused, cycle, next: () => go(index + 1), prev: () => go(index - 1), pauseProps };
}
