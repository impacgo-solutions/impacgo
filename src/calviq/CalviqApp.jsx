import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
import { createProductSchema, createBreadcrumbSchema, createFaqSchema, organizationSchema } from '../components/schemas';
import { CALVIQ_FAQS } from './data/faqs';
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
  name: "CALVIQ",
  alternateName: ["Calviq","CALVIQ Dairy Farm Management System","CALVIQ cattle management app"],
  description:
    "Dairy farm and cattle management software for cow farms. Tracks milk production per animal and session, herd and animal health with veterinary records, breeding, feed and farm finance, with QR ear tags for every animal, AI body condition scoring from smartphone photos and KPI dashboards. Built by Impacgo Solutions.",
  category: "BusinessApplication",
  path: "/calviq",
  featureList: [
    "Milk production tracking per animal and per session",
    "Herd and animal health / veterinary records",
    "Breeding and reproduction records",
    "Feed management",
    "QR ear tags: a digital record for every animal",
    "Body Condition Scoring (BCS) with vision AI from smartphone photos",
    "Farm finance, milk sales invoicing and reporting",
    "KPI dashboards for single farms and multi-farm enterprises",
    "Mobile app",
  ],
  audience: "Dairy farmers, cow and buffalo farm owners, dairy cooperatives and multi-farm dairy enterprises",
  keywords: "dairy farm management software, cattle management software, cow farm management app, milk recording software, herd management, dairy farm software India",
});

const calviqFaqSchema = createFaqSchema(CALVIQ_FAQS.map(({ q, a }) => ({ question: q, answer: a })));

const calviqBreadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "CALVIQ", path: "/calviq" },
]);

export default function CalviqApp() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-primary antialiased overflow-x-hidden">
      <Helmet>
        <title>CALVIQ | Dairy Farm & Cattle Management Software for Cow Farms | Impacgo</title>
        <meta
          name="description"
          content="CALVIQ is dairy farm and cattle management software for cow farms: milk production tracking per animal, herd health and vet records, breeding, feed, QR ear tags, AI body condition scoring, and farm finance."
        />
        <meta
          name="keywords"
          content="CALVIQ, dairy farm management software, cattle management software, cow farm management app, milk production tracking software, herd management software, dairy herd health records, cattle breeding records, QR ear tag cattle tracking, body condition scoring app, dairy farm software India"
        />
        <link rel="canonical" href="https://www.impacgo.com/calviq" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.impacgo.com/calviq" />
        <meta property="og:title" content="CALVIQ | Dairy Farm & Cattle Management Software for Cow Farms | Impacgo" />
        <meta
          property="og:description"
          content="Dairy farm and cattle management software for cow farms: milk records, herd health, breeding, feed, QR ear tags and AI body condition scoring."
        />
        <meta property="og:image" content="https://www.impacgo.com/logo.png" />
        <meta property="og:site_name" content="Impacgo Solutions" />
        <meta property="og:locale" content="en_IN" />

        {/* "summary" card: the only share image is the small logo (see SEO.jsx) */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="CALVIQ | Dairy Farm & Cattle Management Software for Cow Farms | Impacgo" />
        <meta
          name="twitter:description"
          content="Dairy farm and cattle management software for cow farms: milk records, herd health, breeding, feed, QR ear tags and AI body condition scoring."
        />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <script type="application/ld+json">
          {JSON.stringify([calviqProductSchema, calviqFaqSchema, calviqBreadcrumbSchema, organizationSchema])}
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
