import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
// healthvault.css is imported in src/main.jsx (main bundle) rather than here —
// see the comment there for why.
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';
import { createProductSchema, createBreadcrumbSchema, createFaqSchema, organizationSchema } from '../components/schemas';
import { HEALTHVAULT_FAQS } from './data/faqs';

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
  name: "HealthVault",
  alternateName: ["Health Vault","HealthVault Family Health Records Platform"],
  description:
    "Family health records app: OCR-scanned prescriptions, reports and scans auto-filed per family member, AI health insights and risk analysis, vitals tracking, medication reminders and an emergency QR profile. Built by Impacgo Solutions.",
  category: "BusinessApplication",
  path: "/healthvault",
  featureList: [
    "OCR scanning of prescriptions, lab reports and scans",
    "Records auto-filed per family member",
    "AI health insights, risk analysis and recommendations",
    "Vitals tracking",
    "Medication reminders",
    "Emergency QR medical profile",
  ],
  audience: "Families and individuals managing personal and family medical records",
  keywords: "family health records app, digital health locker, medical records app, personal health record",
});

const healthVaultFaqSchema = createFaqSchema(HEALTHVAULT_FAQS.map(({ q, a }) => ({ question: q, answer: a })));

const healthVaultBreadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'HealthVault', path: '/healthvault' },
]);

export default function HealthVaultApp() {
  return (
    <div className="bg-healthvault-background text-healthvault-on-background font-healthvault-body selection:bg-healthvault-primary-fixed selection:text-healthvault-on-primary-fixed antialiased overflow-x-hidden">
      <Helmet>
        <title>HealthVault: Family Health Records App | Impacgo</title>
        <meta
          name="description"
          content="HealthVault keeps your family health records in one app: scanned prescriptions and lab reports, AI health insights, vitals, reminders and an emergency QR."
        />
        <meta
          name="keywords"
          content="HealthVault, family health records app, digital health locker, medical records app, personal health record app, AI health insights, emergency QR medical card, medicine reminder app"
        />
        <link rel="canonical" href="https://www.impacgo.com/healthvault" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.impacgo.com/healthvault" />
        <meta property="og:title" content="HealthVault: Family Health Records App | Impacgo" />
        <meta
          property="og:description"
          content="Family health records app: OCR-scanned prescriptions and reports, AI health insights, vitals, reminders and an emergency QR profile."
        />
        <meta property="og:image" content="https://www.impacgo.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Impacgo Solutions" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.impacgo.com/og-image.jpg" />
        <meta name="twitter:title" content="HealthVault: Family Health Records App | Impacgo" />
        <meta
          name="twitter:description"
          content="Family health records app: OCR-scanned prescriptions and reports, AI health insights, vitals, reminders and an emergency QR profile."
        />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <script type="application/ld+json">
          {JSON.stringify([healthVaultProductSchema, healthVaultFaqSchema, healthVaultBreadcrumbSchema, organizationSchema])}
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
