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
  };
})