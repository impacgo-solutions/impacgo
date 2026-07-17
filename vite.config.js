import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed to GitHub Pages at https://impacgodeveloper.github.io/impacgo/,
// so production assets must be prefixed with the repo name. Local dev serves
// from the root as normal.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/impacgo/' : '/',
}))