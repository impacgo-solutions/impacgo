# CRM demo routes (archived)

These files used to live in `src/app/crm` and were served at
`/erp-suite/crm`: a sample-data CRM demo (leads, contacts, accounts, deals,
tasks). The CRM was removed from the Impacgo ERP site on 2026-11-12. Sign-up
now emails the team and shows a confirmation instead of opening this demo, and
sign-in explains that customer sign-in is coming soon. Any old `/erp-suite/crm`
URL now shows the ERP 404 page.

This folder is outside `src/app` (so nothing here is routed) and excluded in
`tsconfig.json` and `eslint.config.mjs` (their typed route props reference
routes that no longer exist). The supporting code is still in
`src/components/crm/*` and `src/lib/crm-*.ts`.

To bring the CRM back: move this folder to `src/app/crm` (minus this README),
remove `archive` from the tsconfig/eslint excludes if nothing else is left
here, and restore the links (header Resources, footer Company, the
"More from Impacgo" card and the FAQ entry).
