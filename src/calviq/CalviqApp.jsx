import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
import { createProductSchema, createBreadcrumbSchema, organizationSchema } from '../components/schemas';
// calviq.css is imported in src/main.jsx (main bundle) rather than here — see
// the comment there for why.
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookDemo from './pages/BookDemo';
import SignUp from './pages/SignUp';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';

// Matches the ScrollToTop pattern used elsewhere in the site (e.g. Dairyfarm.jsx) —
// without it, navigating here from a scrolled-down page keeps the old scroll
// position, landing the visitor mid-page instead of at the Hero.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const calviqProductSchema = createProductSchema({
  name: "CALVIQ — Dairy Farm Management System",
  description:
    "Complete farm management for modern dairy operations — milk production tracking, herd health, breeding, feed management, finance, and KPI dashboards.",
  category: "BusinessApplication",
  path: "/calviq",
});

const calviqBreadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "CALVIQ", path: "/calviq" },
]);

export default function CalviqApp() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-primary antialiased overflow-x-hidden">
      <Helmet>
        <title>CALVIQ - Dairy Farm Management System | Impacgo Solutions</title>
        <meta
          name="description"
          content="CALVIQ is a complete cloud-based dairy farm management system — milk production tracking, herd health, breeding, feed management, finance, and KPI dashboards. Built by Impacgo Solutions."
        />
        <meta
          name="keywords"
          content="CALVIQ, dairy farm management software, dairy farm system, cattle management software, milk production software, herd health tracking"
        />
        <link rel="canonical" href="https://www.impacgo.com/calviq" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.impacgo.com/calviq" />
        <meta property="og:title" content="CALVIQ - Dairy Farm Management System" />
        <meta
          property="og:description"
          content="Complete farm management for modern dairy operations — milk production, herd health, breeding, feed, finance, and analytics."
        />
        <meta property="og:image" content="https://www.impacgo.com/logo.png" />
        <meta property="og:site_name" content="Impacgo Solutions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CALVIQ - Dairy Farm Management System" />
        <meta
          name="twitter:description"
          content="Complete farm management for modern dairy operations, built by Impacgo Solutions."
        />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <script type="application/ld+json">
          {JSON.stringify([calviqProductSchema, calviqBreadcrumbSchema, organizationSchema])}
        </script>

        {/* These fonts are only used on this sub-app, so they're declared
            here rather than in index.html — no reason to make every other
            page on the site pay for a font request it never uses. */}
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<BookDemo />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
