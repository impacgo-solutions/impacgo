import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
// farmyieldiq.css is imported in src/main.jsx (main bundle) rather than here —
// see the comment there for why.
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';
import { createProductSchema, createBreadcrumbSchema, createFaqSchema, organizationSchema } from '../components/schemas';
import { FARMYIELDIQ_FAQS } from './data/faqs';

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
  name: "FarmYieldIQ",
  alternateName: ["Farm Yield IQ","FarmYield IQ","FarmYieldIQ Farmland Plot Operations Platform"],
  description:
    "Farmland plot management software for managed farmland and agricultural land projects: layout, block and plot management with pricing and registration tracking, partner portfolios with a document vault and payment tracking, and a sales pipeline for leads, bookings and team hierarchy. Built by Impacgo Solutions.",
  category: "BusinessApplication",
  path: "/farmyieldiq",
  featureList: [
    "Layout, block and plot management",
    "Plot pricing and registration tracking",
    "Partner portfolios with document vault",
    "Partner payment tracking",
    "Plot sales pipeline: leads, bookings and team hierarchy",
    "One dashboard for land, partners and sales",
  ],
  audience: "Managed farmland companies, agricultural land developers and farmland plot sellers",
  keywords: "farmland plot management software, managed farmland software, plot sales CRM, agricultural real estate software",
});

const farmYieldIqFaqSchema = createFaqSchema(FARMYIELDIQ_FAQS.map(({ q, a }) => ({ question: q, answer: a })));

const farmYieldIqBreadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "FarmYieldIQ", path: "/farmyieldiq" },
]);

export default function FarmYieldIQApp() {
  return (
    <div className="bg-farmyieldiq-background text-farmyieldiq-on-background font-farmyieldiq-body selection:bg-farmyieldiq-primary-fixed selection:text-farmyieldiq-on-primary-fixed antialiased overflow-x-hidden">
      <Helmet>
        <title>FarmYieldIQ: Farmland Plot Management Software | Impacgo</title>
        <meta
          name="description"
          content="FarmYieldIQ manages farmland projects: layouts and plots, pricing and registrations, partner portfolios with documents and payments, and plot sales."
        />
        <meta
          name="keywords"
          content="FarmYieldIQ, farmland plot management software, managed farmland software, farm land layout management, plot sales CRM, agricultural real estate software, land partner portfolio management, plot registration tracking"
        />
        <link rel="canonical" href="https://www.impacgo.com/farmyieldiq" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.impacgo.com/farmyieldiq" />
        <meta property="og:title" content="FarmYieldIQ: Farmland Plot Management Software | Impacgo" />
        <meta
          property="og:description"
          content="Farmland plot management software: layouts, blocks and plots, partner portfolios, payments and plot sales in one place."
        />
        <meta property="og:image" content="https://www.impacgo.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Impacgo Solutions" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.impacgo.com/og-image.jpg" />
        <meta name="twitter:title" content="FarmYieldIQ: Farmland Plot Management Software | Impacgo" />
        <meta
          name="twitter:description"
          content="Farmland plot management software: layouts, blocks and plots, partner portfolios, payments and plot sales in one place."
        />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <script type="application/ld+json">
          {JSON.stringify([farmYieldIqProductSchema, farmYieldIqFaqSchema, farmYieldIqBreadcrumbSchema, organizationSchema])}
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
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
