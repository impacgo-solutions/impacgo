import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
// farmyieldiq.css is imported in src/main.jsx (main bundle) rather than here —
// see the comment there for why.
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';

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

export default function FarmYieldIQApp() {
  return (
    <div className="bg-farmyieldiq-background text-farmyieldiq-on-background font-farmyieldiq-body selection:bg-farmyieldiq-primary-fixed selection:text-farmyieldiq-on-primary-fixed antialiased overflow-x-hidden">
      <Helmet>
        <title>FarmYieldIQ | Farmland Plot Operations Platform</title>
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
