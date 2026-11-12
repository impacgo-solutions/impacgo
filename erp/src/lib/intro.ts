/*
 * Session flag for the opening reveal (<Intro>). Kept in a plain module (not
 * the "use client" Intro file) because the server-rendered root layout needs
 * the actual script string, not a client reference.
 */
export const INTRO_KEY = "impacgo:intro";

/* Runs in <head> before first paint on every full page load (app/layout.tsx). */
export const INTRO_SKIP_SCRIPT = `try{if(sessionStorage.getItem("${INTRO_KEY}")||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.setAttribute("data-intro-skip","")}catch(e){document.documentElement.setAttribute("data-intro-skip","")}`;
