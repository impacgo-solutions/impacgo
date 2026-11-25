"use client";

import { useEffect, useRef } from "react";
import { withBasePath } from "@/lib/base-path";

/*
 * The Impacgo robot, peeking over the hero's demo card with its hands resting on
 * a line in the seven ERP module colours. Its face is a dark screen; the glowing
 * eyes drawn on it follow the pointer, look at whichever form field has focus,
 * turn into happy "^ ^" eyes over the submit button, blink now and then, and
 * glance around when nobody is moving the mouse. Reduced motion: still eyes.
 *
 * The robot itself is one transparent WebP (public/images/robot.webp, ~26 KB);
 * the eyes are SVG moved by setting a transform directly, once per frame at most.
 */

const MODULE_COLORS = ["#c8452a", "#15803d", "#2d4fe0", "#b26a07", "#6d4ef0", "#c2185b", "#0e7490"];

// Geometry of robot.webp (see the cut-out script): width / height, where the
// ledge (card edge) sits, and the dark screen the eyes live on, in % of the image.
const ASPECT = 0.8574;
const LEDGE = 0.9556;
const SCREEN = { left: 15.19, top: 26.54, width: 69.55, height: 49.63 };
const WIDTH = 144; // rendered width in px
const HEIGHT = WIDTH / ASPECT;
export const ROBOT_RISE = Math.round(HEIGHT * LEDGE); // space the card leaves above itself

// Eye layout inside the screen's 120 x 86 viewBox.
const EYES = [40, 80];
const EYE_Y = 42;
const REACH = { x: 15, y: 11 };

export function Robot() {
  const svg = useRef<SVGSVGElement>(null);
  const eyes = useRef<SVGGElement>(null);
  const open = useRef<SVGGElement>(null);
  const happy = useRef<SVGGElement>(null);

  useEffect(() => {
    const el = svg.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let target: { x: number; y: number } | null = null;
    let lastMove = 0;

    const look = () => {
      frame = 0;
      if (!target || !eyes.current) return;
      const box = el.getBoundingClientRect();
      const cx = box.left + box.width / 2, cy = box.top + box.height / 2;
      const dx = target.x - cx, dy = target.y - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const k = Math.min(1, dist / 260);
      eyes.current.setAttribute("transform", `translate(${((dx / dist) * k * REACH.x).toFixed(2)} ${((dy / dist) * k * REACH.y).toFixed(2)})`);
    };
    const aim = (x: number, y: number) => {
      target = { x, y };
      lastMove = performance.now();
      if (!frame) frame = requestAnimationFrame(look);
    };
    const setHappy = (on: boolean) => {
      open.current?.setAttribute("opacity", on ? "0" : "1");
      happy.current?.setAttribute("opacity", on ? "1" : "0");
    };

    const onMove = (e: PointerEvent) => {
      aim(e.clientX, e.clientY);
      const overSubmit = e.target instanceof Element && !!e.target.closest("#demo-card button[type=submit]");
      setHappy(overSubmit);
    };
    const onFocus = (e: FocusEvent) => {
      if (!(e.target instanceof HTMLElement) || !e.target.closest("#demo-card")) return;
      setHappy(e.target.matches("button[type=submit]")); // normal eyes while typing; happy on the submit button
      const r = e.target.getBoundingClientRect();
      aim(r.left + Math.min(r.width, 180), r.top + r.height / 2);
    };

    let blinkTimer = 0, wanderTimer = 0;
    const blink = () => {
      open.current?.animate([{ transform: "scaleY(1)" }, { transform: "scaleY(0.1)" }, { transform: "scaleY(1)" }], { duration: 170, easing: "ease-in-out" });
      blinkTimer = window.setTimeout(blink, 2800 + Math.random() * 3200);
    };
    const wander = () => {
      if (performance.now() - lastMove > 4000) {
        const box = el.getBoundingClientRect();
        target = { x: box.left + box.width / 2 + (Math.random() - 0.5) * 900, y: box.top + box.height / 2 + (Math.random() - 0.35) * 500 };
        if (!frame) frame = requestAnimationFrame(look);
      }
      wanderTimer = window.setTimeout(wander, 2200 + Math.random() * 1800);
    };
    blinkTimer = window.setTimeout(blink, 2600);
    wanderTimer = window.setTimeout(wander, 3200);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("focusin", onFocus);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(blinkTimer);
      clearTimeout(wanderTimer);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("focusin", onFocus);
    };
  }, []);

  return (
    <>
      {/* The seven-colour line the robot rests its hands on, one segment per ERP module. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-6 z-20 flex h-[4px] overflow-hidden rounded-full" style={{ top: ROBOT_RISE - 2 }}>
        {MODULE_COLORS.map((c) => (
          <span key={c} className="h-full flex-1" style={{ background: c }} />
        ))}
      </div>
      {/* Clip box: the robot rises into view from the card's edge. */}
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 z-30 -translate-x-1/2 overflow-hidden" style={{ width: WIDTH, height: HEIGHT }}>
        <div className="site-robot relative" style={{ width: WIDTH, height: HEIGHT }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- tiny decorative cut-out; next/image adds nothing here */}
          <img src={withBasePath("/images/robot.webp")} alt="" width={WIDTH} height={Math.round(HEIGHT)} className="block h-full w-full select-none" draggable={false} />
          <svg
            ref={svg}
            viewBox="0 0 120 86"
            className="absolute overflow-visible"
            style={{ left: `${SCREEN.left}%`, top: `${SCREEN.top}%`, width: `${SCREEN.width}%`, height: `${SCREEN.height}%` }}
          >
            <defs>
              <filter id="robot-glow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="2.6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g ref={eyes} filter="url(#robot-glow)">
              {/* open eyes (they blink) */}
              <g ref={open} style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}>
                {EYES.map((x) => (
                  <rect key={x} x={x - 8} y={EYE_Y - 12} width="16" height="24" rx="8" fill="#e8f6ff" />
                ))}
              </g>
              {/* happy eyes, shown over the "Request my free demo" button */}
              <g ref={happy} opacity="0">
                {EYES.map((x) => (
                  <path key={x} d={`M${x - 9} ${EYE_Y + 4} Q${x} ${EYE_Y - 10} ${x + 9} ${EYE_Y + 4}`} fill="none" stroke="#e8f6ff" strokeWidth="5" strokeLinecap="round" />
                ))}
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
