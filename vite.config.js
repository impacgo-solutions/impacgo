import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Two separate deploy targets share this one build:
//  - GitHub Pages (https://impacgo-solutions.github.io/impacgo/) needs assets
//    prefixed with the repo name, since it serves from a subpath.
//  - Vercel serves from the root of its own domain, and always sets the
//    VERCEL env var during its builds, so we can tell the two apart.
// Local dev (`npm run dev`) always serves from the root as normal.
export default defineConfig(({ command }) => {
  const isGhPagesBuild = command === 'build' && !process.env.VERCEL;
  return {
    plugins: [react()],
    base: isGhPagesBuild ? '/impacgo/' : '/',
    server: {
      // The header's "Products" link opens the Impacgo ERP site, a Next.js app
      // in this repo's erp/ folder (basePath "/erp-suite"). Run both with
      // `npm run dev:all` (or `npm run dev:erp` in another terminal): the ERP
      // listens on port 3001 and this forwards every /erp-suite request —
      // pages, assets, and Next's HMR websocket — to it, so it behaves
      // exactly like production (vercel.json rewrite).
      proxy: {
        '/erp-suite': {
          target: process.env.ERP_DEV_URL || 'http://localhost:3001',
          changeOrigin: true,
          ws: true,
        },
        // Next's dev error overlay calls this without the basePath.
        '/__nextjs_original-stack-frames': {
          target: process.env.ERP_DEV_URL || 'http://localhost:3001',
          changeOrigin: true,
        },
      },
    },
  };
})