import type { NextConfig } from "next";

/*
 * Served as www.impacgo.com/erp-suite — the main Impacgo site's "Products"
 * link points here, and its vercel.json rewrites /erp-suite/* to this app.
 * Locally: http://localhost:3000/erp-suite (or via the Impacgo site's dev
 * server, which proxies /erp-suite to this one).
 */
const basePath = "/erp-suite";

const nextConfig: NextConfig = {
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // Lets the Impacgo site's dev server (Vite, 127.0.0.1:5173) proxy this
  // app in development without Next blocking its dev assets / HMR.
  allowedDevOrigins: ["localhost", "127.0.0.1"],
  // No free trial / self-serve sign-up: the old sign-up page is now the demo
  // request page. (Both paths are auto-prefixed with basePath.)
  async redirects() {
    return [{ source: "/signup", destination: "/demo", permanent: true }];
  },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
