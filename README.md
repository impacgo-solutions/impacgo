# Impacgo Solutions — website

Source for **www.impacgo.com**: the main Impacgo site plus the Impacgo ERP section, in one repo.

| Folder | What it is | Stack | Served at |
| --- | --- | --- | --- |
| repo root (`src/`, `public/`, …) | Main site — services, products (CALVIQ, StockLyte, FarmYieldIQ, HealthVault…), blog, FAQ, contact | Vite + React 18 + Tailwind 3 | `www.impacgo.com/…` |
| `erp/` | Impacgo ERP section — marketing page, module tabs with links to each module's app, demo requests, sign-in app chooser | Next.js 16 + React 19 + Tailwind 4 (see `erp/README.md`) | `www.impacgo.com/erp-suite/…` |

Visitors see one website. The main site's header **Products** link and its ERP cards open `/erp-suite`, which is handled by the `erp/` app:

- **Production:** `vercel.json` rewrites `/erp-suite/*` to the ERP's own Vercel deployment.
- **Local dev:** `vite.config.js` proxies `/erp-suite/*` to the ERP dev server (port 3001).

## Run locally

```bash
npm run setup      # once: installs packages for the main site and erp/
npm run dev:all    # starts both — open http://localhost:5173
```

Other scripts: `npm run dev` (main site only), `npm run dev:erp` (ERP only, port 3001), `npm run build` (main site, then prerender), `npm run build:erp`, `npm run lint`, `npm run lint:erp`.

Environment variables: copy `.env.example` to `.env` (main site) and `erp/.env.example` to `erp/.env.local` (ERP). Both use the same EmailJS account.

## How production is wired

```
Visitor → www.impacgo.com (DNS at Wix → Vercel)
            ├─ /erp-suite/*  → main site's vercel.json rewrite → ERP Vercel project at erp-app.impacgo.com
            └─ everything else → main site Vercel project
```

The rewrite fetches ERP pages in the background — visitors (and Google) only ever see `www.impacgo.com/erp-suite`. `erp-app.impacgo.com` is the ERP project's permanent origin address; never point `vercel.json` at a `*.vercel.app` URL (it changes if the project is renamed or recreated). Every pull request runs `.github/workflows/ci.yml` (lint + build of both apps).

## Deploy (Vercel — two projects from this one repo)

| Project | Root Directory | Framework | Env vars | Domains |
| --- | --- | --- | --- | --- |
| Main site | *(repo root)* | Vite | `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` | `www.impacgo.com`, `impacgo.com` |
| ERP | `erp` | Next.js | `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `erp-app.impacgo.com` |

**First-time ERP setup** (order matters, so `/erp-suite` is live before the main site starts linking to it):

1. Vercel → Add New → Project → import this repo → Root Directory `erp` → add the env vars → Deploy.
2. ERP project → Settings → Domains → add `erp-app.impacgo.com` → copy the CNAME value Vercel shows.
3. Wix → Domains → impacgo.com → Manage DNS Records → CNAME → add Host `erp-app`, Value = that CNAME → Save. (Leave every other record — especially MX/email — unchanged.)
4. Wait for Vercel to show the domain as Valid; check `https://erp-app.impacgo.com/erp-suite` loads.
5. Then deploy/merge the main site.

**After every production deploy — 2-minute check on www.impacgo.com:**

- [ ] Header **Products** opens `/erp-suite`
- [ ] `/erp-suite/signup` redirects to `/erp-suite/demo`
- [ ] A test ERP demo request arrives in the inbox (popup or `/erp-suite/demo`)
- [ ] The homepage / `/contact` form email arrives
- [ ] tawk.to chat appears (main site and `/erp-suite`)
- [ ] "Open Impacgo HRMS" (ERP → The suite → HRMS) opens hrms.impacgo.com
- [ ] Phone shows +91 99664 77499

Optional: each project's Settings → Git → "Ignored Build Step" can skip rebuilds that don't concern it — main site: `git diff --quiet HEAD^ HEAD -- . ':!erp'`, ERP: `git diff --quiet HEAD^ HEAD -- .`.
