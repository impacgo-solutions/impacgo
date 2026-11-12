# Impacgo ERP

Marketing site for **Impacgo ERP**, served as a section of the main Impacgo website at **https://www.impacgo.com/erp-suite**.

- **Stack:** Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4, TypeScript.
- **Base path:** `/erp-suite` (`next.config.ts`). Links via `next/link` / `next/navigation` get it automatically; plain asset URLs (images, videos) must use `withBasePath()` from `src/lib/base-path.ts`. Links back to the main site use `MAIN_SITE` from the same file and must be plain `<a>` tags.

## How it fits into impacgo.com

This folder lives inside the main Impacgo website repo (`erp/`). The main site (repo root, Vite + React) owns the domain:

- **Production:** its `vercel.json` rewrites `/erp-suite` and `/erp-suite/:path*` to this app's own Vercel deployment (a second Vercel project from the same repo, Root Directory `erp`).
- **Local dev:** its `vite.config.js` proxies `/erp-suite` to this app's dev server (port 3001).

The main header's **Products** link and the homepage ERP module cards open this app. Old `/erp/<module>` URLs on the main site redirect to `/erp-suite#module-<module>`, which opens that module's tab.

## Run locally

From the **repo root** (recommended — runs the whole site):

```bash
npm run setup      # once: installs the main site's and this folder's packages
npm run dev:all    # main site on http://localhost:5173, this app on port 3001
```

Open http://localhost:5173/erp-suite. Or, from this folder on its own:

```bash
cp .env.example .env.local   # fill in the EmailJS values (same as the main site's VITE_EMAILJS_*)
npm run dev                  # http://localhost:3001/erp-suite
```

## Notable pieces

| Path | What it is |
| --- | --- |
| `src/app/page.tsx` | ERP marketing page |
| `src/components/site/DemoForm.tsx` | The one demo request form (home-page card, `/demo` page, popup). No free trial / self-serve sign-up: requests are emailed to the team, and email + phone are shown under every form |
| `src/app/demo` | Standalone “Book your free demo” page (`/signup` permanently redirects here — see `next.config.ts`) |
| `src/app/login` | App chooser: links to each module's own app (HRMS, Finance, Chain, Make, Retail) |
| `appUrl` in `src/components/site/suite.tsx` | Each module's app address — drives the “Open Impacgo …” buttons, the sign-in chooser and the address shown in the module preview. Add one here when a new module app goes live |
| `src/app/not-found.tsx` | Branded 404 for unknown `/erp-suite/*` URLs |
| `archive/crm-routes` | The old CRM demo routes, switched off (see its README) |
| `src/components/site/BrandLockup.tsx` | `IMPACGO SOLUTIONS \| ERP` logo lockup (header, footer, auth pages, intro) |
| `src/components/site/Intro.tsx`, `src/lib/intro.ts` | Once-per-session opening animation |
| `src/components/site/ContactModal.tsx`, `src/lib/contact.ts` | "Book a free demo" popup — any `<a href="#contact">` (or `/erp-suite#contact`) opens it; submissions are emailed via EmailJS |
| `src/lib/leads.ts` | Sends demo requests to the Impacgo team via EmailJS |
| `src/lib/contact.ts` | `#contact` popup trigger + Impacgo email / phone (+91 99664 77499) |
| `src/lib/site-scripts.ts` | Google Analytics + tawk.to chat (same deferred loader as the main site) |

## Deploy (Vercel)

1. In Vercel, add a **second project from the same GitHub repo** and set its **Root Directory to `erp`** (framework: Next.js).
2. Add the env vars from `.env.example`.
3. Give it the permanent domain `erp-app.impacgo.com` (CNAME at Wix DNS) — the root `vercel.json` rewrites already point there. See the root `README.md` for the full checklist.
