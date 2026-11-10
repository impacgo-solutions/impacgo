import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
// healthvault.css is imported in src/main.jsx (main bundle) rather than here —
// see the comment there for why.
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';
import { createProductSchema, createBreadcrumbSchema, organizationSchema } from '../components/schemas';

// Matches the ScrollToTop pattern used elsewhere in the site (Calviq,
// StockLyte, FarmYieldIQ) — without it, navigating here from a scrolled-down
// page keeps the old scroll position instead of landing on the Hero.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const healthVaultProductSchema = createProductSchema({
  name: 'HealthVault — Family Health Records Platform',
  description:
    'Digital health vault for the whole family — OCR-scanned records, AI health insights, vitals tracking, medication reminders and an emergency QR profile.',
  category: 'HealthApplication',
  path: '/healthvault',
});

const healthVaultBreadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'HealthVault', path: '/healthvault' },
]);

export default function HealthVaultApp() {
  return (
    <div className="bg-healthvault-background text-healthvault-on-background font-healthvault-body selection:bg-healthvault-primary-fixed selection:text-healthvault-on-primary-fixed antialiased overflow-x-hidden">
      <Helmet>
        <title>HealthVault | Family Health Records Platform | Impacgo Solutions</title>
        <meta
          name="description"
          content="HealthVault is a digital health vault for the whole family — OCR-scanned prescriptions and reports, AI health insights, vitals tracking, medication reminders, and an emergency QR profile. Built by Impacgo Solutions."
        />
        <meta
          name="keywords"
          content="HealthVault, family health records app, digital health locker, medical records app, AI health insights, emergency QR medical card, family medicine tracker"
        />
        <link rel="canonical" href="https://www.impacgo.com/healthvault" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.impacgo.com/healthvault" />
        <meta property="og:title" content="HealthVault | Family Health Records Platform" />
        <meta
          property="og:description"
          content="One secure digital vault for your family's health records — prescriptions, reports, vitals, reminders and an emergency profile."
        />
        <meta property="og:image" content="https://www.impacgo.com/logo.png" />
        <meta property="og:site_name" content="Impacgo Solutions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HealthVault | Family Health Records Platform" />
        <meta
          name="twitter:description"
          content="Digital health vault for the whole family, built by Impacgo Solutions."
        />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <script type="application/ld+json">
          {JSON.stringify([healthVaultProductSchema, healthVaultBreadcrumbSchema, organizationSchema])}
        </script>

        {/* These fonts are only used on this sub-app, so they're declared
            here rather than in index.html — no reason to make every other
            page on the site pay for a font request it never uses. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&display=swap"
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
