import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
// farmyieldiq.css is imported in src/main.jsx (main bundle) rather than here —
// see the comment there for why.
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import { createProductSchema, createBreadcrumbSchema, organizationSchema } from '../components/schemas';

// Matches the ScrollToTop pattern used elsewhere in the site (Calviq,
// StockLyte) — without it, navigating here from a scrolled-down page keeps
// the old scroll position instead of landing on the Hero.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const farmYieldIqProductSchema = createProductSchema({
  name: "FarmYieldIQ — Farmland Plot Operations Platform",
  description:
    "Operations platform for plotted-land businesses — layout, block and plot management, partner portfolios, and an internal sales pipeline.",
  category: "BusinessApplication",
  path: "/farmyieldiq",
});

const farmYieldIqBreadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "FarmYieldIQ", path: "/farmyieldiq" },
]);

export default function FarmYieldIQApp() {
  return (
    <div className="bg-farmyieldiq-background text-farmyieldiq-on-background font-farmyieldiq-body selection:bg-farmyieldiq-primary-fixed selection:text-farmyieldiq-on-primary-fixed antialiased overflow-x-hidden">
      <Helmet>
        <title>FarmYieldIQ | Farmland Plot Operations Platform | Impacgo Solutions</title>
        <meta
          name="description"
          content="FarmYieldIQ is a unified operations platform for managed farmland plots — layout and plot management, partner portfolios with document vault, and an internal real estate sales pipeline. Built by Impacgo Solutions."
        />
        <meta
          name="keywords"
          content="FarmYieldIQ, farmland plot operations, agricultural real estate software, plot management software, farmland partner portfolio management"
        />
        <link rel="canonical" href="https://www.impacgo.com/farmyieldiq" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.impacgo.com/farmyieldiq" />
        <meta property="og:title" content="FarmYieldIQ | Farmland Plot Operations Platform" />
        <meta
          property="og:description"
          content="Unified operations for managed farmland plots, partners and sales — layout, plot management, and an internal sales pipeline."
        />
        <meta property="og:image" content="https://www.impacgo.com/logo.png" />
        <meta property="og:site_name" content="Impacgo Solutions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FarmYieldIQ | Farmland Plot Operations Platform" />
        <meta
          name="twitter:description"
          content="Unified operations platform for managed farmland plots, built by Impacgo Solutions."
        />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <script type="application/ld+json">
          {JSON.stringify([farmYieldIqProductSchema, farmYieldIqBreadcrumbSchema, organizationSchema])}
        </script>

        {/* These fonts are only used on this sub-app, so they're declared
            here rather than in index.html — no reason to make every other
            page on the site pay for a font request it never uses. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Inter:wght@400;500;600&display=swap"
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
      </Routes>
    </div>
  );
}
