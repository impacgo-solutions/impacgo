// Post-build static prerendering.
//
// This app is a pure client-side React SPA — the real content, per-page SEO
// tags and JSON-LD schema only exist in the DOM after JavaScript runs. That's
// fine for Googlebot (it renders JS, eventually), but AI crawlers that matter
// for visibility today — GPTBot, ClaudeBot, PerplexityBot, CCBot — fetch raw
// HTML and do NOT execute JavaScript. Without this step, every one of those
// crawlers sees the same empty `<div id="root">` shell for every URL on the
// site.
//
// This script starts `vite preview` against the just-built `dist/`, visits
// every real route in a headless browser, waits for it to fully render, and
// overwrites that route's `index.html` in `dist/` with the fully-rendered
// static markup — while leaving all the original JS/CSS bundles untouched.
// Real browsers still get the exact same interactive React app (main.jsx
// re-renders over the static markup on load); crawlers that don't run JS now
// see the actual page.
//
// Runs automatically after `npm run build` via the `postbuild` script, so it
// applies the same way whether the build happens locally (GitHub Pages
// deploy) or on Vercel.

import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer";
import puppeteerCore from "puppeteer-core";
import chromium from "@sparticuz/chromium";

const PORT = 4173;

// Vercel's build container is a minimal Linux image with none of the shared
// libraries (libnspr4, libnss3, etc.) a normal desktop Chromium needs to even
// start — `puppeteer`'s bundled Chromium download fails there with
// "error while loading shared libraries: libnspr4.so". @sparticuz/chromium
// ships a Chromium build specifically compiled to run in that kind of
// restricted serverless/CI Linux environment, so it's used only when
// actually building on Vercel; local dev (and the local GitHub Pages build)
// keeps using the full `puppeteer` package, which already works fine there.
async function launchBrowser() {
  if (process.env.VERCEL) {
    return puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }
  return puppeteer.launch({ headless: "new" });
}
const DIST_DIR = path.resolve("dist");

// Every real, content-bearing route on the site. Deep interactive sub-routes
// inside the CALVIQ/StockLyte/FarmYieldIQ sub-apps (signup, book-demo, etc.)
// are intentionally left out — those are transactional flows, not pages an
// AI answer or search result should be citing anyway. Keep this in sync with
// src/App.jsx's route list.
const ROUTES = [
  "/",
  "/services/pos",
  "/services/d365",
  "/services/app-development",
  "/services/implementation",
  "/services/development",
  "/services/ams",
  "/services/mes",
  "/services/integrations",
  "/services/consulting",
  "/services/ai-automation",
  "/services/ax-migration",
  "/services/power-apps",
  "/services/power-automate",
  "/services/power-bi",
  "/services/ai-builder",
  "/services/d365-development",
  "/services/d365-crm",
  "/products/dairy-farm",
  "/products/inventory-management",
  "/products/farm-yield-iq",
  "/erp/hrms",
  "/erp/finance",
  "/erp/chain",
  "/erp/make",
  "/erp/plan",
  "/erp/retail",
  "/erp/project",
  "/products/work-task",
  "/products/construction-planner",
  "/industries/manufacturing",
  "/industries/distribution",
  "/industries/retail",
  "/blog",
  "/blog/ax-2012-end-of-support-2028-india",
  "/blog/d365fo-vs-sap-s4hana-vs-oracle-netsuite",
  "/blog/how-long-does-d365fo-implementation-take",
  "/blog/replace-excel-reporting-with-power-bi-d365fo",
  "/blog/power-apps-for-d365fo",
  "/blog/power-automate-for-d365fo",
  "/blog/d365fo-modules-for-indian-manufacturers",
  "/calviq",
  "/stocklyte",
  "/farmyieldiq",
  "/faq",
  "/about",
  "/contact",
];

function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const attempt = async () => {
      try {
        const res = await fetch(url);
        if (res.status < 500) return resolve();
      } catch {
        // server not up yet
      }
      if (Date.now() - start > timeoutMs) {
        return reject(new Error(`Preview server didn't come up within ${timeoutMs}ms`));
      }
      setTimeout(attempt, 300);
    };
    attempt();
  });
}

async function main() {
  // Mirrors the same base-path logic vite.config.js uses at build time.
  const base = process.env.VERCEL ? "/" : "/impacgo/";

  console.log(`[prerender] starting vite preview (base: ${base})...`);
  // `vite preview` resolves its own `base` using vite.config.js's `command:
  // 'serve'` branch, which is NOT the same branch used for `vite build` —
  // so without passing --base explicitly here, preview always serves at
  // `/`, while the just-built dist/index.html references assets at
  // `/impacgo/assets/...` for a local (non-Vercel) build. That mismatch
  // 404s the main JS bundle silently and leaves #root permanently empty.
  const previewProc = spawn(
    "npx",
    ["vite", "preview", "--port", String(PORT), "--strictPort", "--base", base],
    { shell: true, stdio: ["ignore", "pipe", "pipe"] }
  );

  let serverLog = "";
  previewProc.stdout.on("data", (d) => (serverLog += d.toString()));
  previewProc.stderr.on("data", (d) => (serverLog += d.toString()));
  previewProc.on("error", (err) => {
    console.error("[prerender] failed to start vite preview:", err);
  });

  const originUrl = `http://localhost:${PORT}${base}`;

  try {
    await waitForServer(originUrl);
  } catch (err) {
    console.error(serverLog);
    previewProc.kill();
    throw err;
  }

  const browser = await launchBrowser();
  const page = await browser.newPage();

  page.on("pageerror", (err) => console.error(`[prerender]   pageerror: ${err.message}`));

  let ok = 0;
  let failed = 0;

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${base.replace(/\/$/, "")}${route}`;
    try {
      // `networkidle2` (rather than networkidle0) tolerates the Tawk.to
      // chat widget's long-lived websocket/long-poll connection, which
      // never fully idles and would otherwise hang this for the full
      // timeout on every route.
      await page.goto(url, { waitUntil: "networkidle2", timeout: 20000 });
      // Don't just guess a fixed delay — actually wait until React has
      // rendered real content into #root (covers lazy-loaded chunks that
      // haven't resolved yet), then a short extra settle for Framer Motion
      // entrance transitions to finish painting.
      await page.waitForFunction(
        () => {
          const root = document.getElementById("root");
          return root && root.children.length > 0 && root.textContent.trim().length > 0;
        },
        { timeout: 10000 }
      );
      await new Promise((r) => setTimeout(r, 500));
      const html = await page.content();

      if (route !== "/") {
        // Write both a directory form (dist/services/d365/index.html) and a
        // flat-file form (dist/services/d365.html). Static hosts differ on
        // which they check first for a clean, extensionless URL request
        // (Vercel checks `path.html` before `path/index.html`; GitHub Pages
        // and most others resolve `path/index.html` directly) — writing both
        // removes any dependency on guessing a specific host's resolution
        // order or on the request having a trailing slash.
        const outDir = path.join(DIST_DIR, route);
        await mkdir(outDir, { recursive: true });
        await writeFile(path.join(outDir, "index.html"), html, "utf8");
        await writeFile(path.join(DIST_DIR, `${route}.html`), html, "utf8");
      } else {
        await writeFile(path.join(DIST_DIR, "index.html"), html, "utf8");
      }
      ok++;
      console.log(`[prerender] ✓ ${route}`);
    } catch (err) {
      failed++;
      console.error(`[prerender] ✗ ${route}: ${err.message}`);
    }
  }

  await browser.close();
  previewProc.kill();

  console.log(`[prerender] done — ${ok}/${ROUTES.length} routes prerendered${failed ? `, ${failed} failed` : ""}.`);

  if (failed > 0) {
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error("[prerender] fatal:", err);
  process.exit(1);
});
