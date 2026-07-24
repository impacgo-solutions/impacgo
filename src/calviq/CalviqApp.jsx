import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
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

export default function CalviqApp() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-primary antialiased overflow-x-hidden">
      <Helmet>
        <title>CALVIQ - Dairy Farm Management System</title>
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
