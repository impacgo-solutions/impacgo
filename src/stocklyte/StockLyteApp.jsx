import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
// stocklyte.css is imported in src/main.jsx (main bundle) rather than here —
// see the comment there for why.
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';

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

export default function StockLyteApp() {
  return (
    // "dark" here is scoped to this wrapper only (Tailwind's class-based dark
    // mode strategy works on any ancestor, not just <html>) — the original
    // design applied it to the whole document, which would have made any
    // dark: variant anywhere else on the site trigger unexpectedly.
    <div className="dark bg-stocklyte-background text-stocklyte-on-background font-stocklyte-body selection:bg-stocklyte-primary selection:text-stocklyte-on-primary antialiased overflow-x-hidden">
      <Helmet>
        <title>StockLyte | Master Your Inventory. Everywhere. In Real-Time.</title>
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
