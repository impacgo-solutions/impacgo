import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
// stocklyte.css is imported in src/main.jsx (main bundle) rather than here —
// see the comment there for why.
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';
import { createProductSchema, createBreadcrumbSchema, organizationSchema } from '../components/schemas';

// Matches the ScrollToTop pattern used elsewhere in the site (Calviq,
// Dairyfarm.jsx) — without it, navigating here from a scrolled-down page
// keeps the old scroll position instead of landing on the Hero.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const stocklyteProductSchema = createProductSchema({
  name: "StockLyte — Inventory Management System",
  description:
    "Real-time, multi-location inventory management software with barcode scanning, purchase orders, and demand forecasting.",
  category: "BusinessApplication",
  path: "/stocklyte",
});

const stocklyteBreadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "StockLyte", path: "/stocklyte" },
]);

export default function StockLyteApp() {
  return (
    // "dark" here is scoped to this wrapper only (Tailwind's class-based dark
    // mode strategy works on any ancestor, not just <html>) — the original
    // design applied it to the whole document, which would have made any
    // dark: variant anywhere else on the site trigger unexpectedly.
    <div className="dark bg-stocklyte-background text-stocklyte-on-background font-stocklyte-body selection:bg-stocklyte-primary selection:text-stocklyte-on-primary antialiased overflow-x-hidden">
      <Helmet>
        <title>StockLyte | Master Your Inventory. Everywhere. In Real-Time.</title>
        <meta
          name="description"
          content="StockLyte is a real-time, multi-location inventory management system — stock tracking, automated reorder alerts, barcode scanning, purchase orders, and demand forecasting. Built by Impacgo Solutions."
        />
        <meta
          name="keywords"
          content="StockLyte, inventory management software, multi-location inventory, stock tracking software, barcode inventory system, demand forecasting software"
        />
        <link rel="canonical" href="https://www.impacgo.com/stocklyte" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.impacgo.com/stocklyte" />
        <meta property="og:title" content="StockLyte | Master Your Inventory. Everywhere. In Real-Time." />
        <meta
          property="og:description"
          content="Real-time, multi-location inventory control tower — stock tracking, reorder alerts, barcode scanning, and demand forecasting."
        />
        <meta property="og:image" content="https://www.impacgo.com/logo.png" />
        <meta property="og:site_name" content="Impacgo Solutions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StockLyte | Real-Time Inventory Management" />
        <meta
          name="twitter:description"
          content="Real-time, multi-location inventory control tower, built by Impacgo Solutions."
        />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <script type="application/ld+json">
          {JSON.stringify([stocklyteProductSchema, stocklyteBreadcrumbSchema, organizationSchema])}
        </script>

        {/* These fonts are only used on this sub-app, so they're declared
            here rather than in index.html — no reason to make every other
            page on the site pay for a font request it never uses. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Inter:wght@300..700&family=JetBrains+Mono:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
