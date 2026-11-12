import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useNavScroll from '../hooks/useNavScroll';
import BrandHomeLink from '../../components/BrandHomeLink';

const EXTERNAL_LOGIN_URL = 'https://calviq.impacgo.com/#/login';

const navLinks = [
  { label: 'Features', href: '/calviq/#features' },
  { label: 'Pricing', href: '/calviq/#pricing' },
  { label: 'Why CALVIQ', href: '/calviq/#why-calviq' },
  { label: 'Contact', href: '/calviq/#contact' },
];

const SECTION_IDS = navLinks.map((l) => l.href.split('#')[1]);

// Which nav section is currently on screen (only on the CALVIQ landing page —
// sign-up / demo pages have none). A section counts once its top has
// scrolled up past the fixed navbar; null while still at the hero.
function useActiveSection(enabled) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return undefined;
    }
    const NAV_OFFSET = 140;
    const update = () => {
      // At the very bottom, the last section (Contact) can't scroll up past
      // the navbar, so pick the lowest section that's in view instead.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      const limit = atBottom ? window.innerHeight : NAV_OFFSET;
      let current = null;
      let best = -Infinity;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= limit && top > best) {
          best = top;
          current = id;
        }
      }
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [enabled]);
  return active;
}

export default function Navbar() {
  const scrolled = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const activeSection = useActiveSection(location.pathname.replace(/\/$/, '') === '/calviq');
  const isActive = (link) => link.href.split('#')[1] === activeSection;

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 nav-blur border-b border-transparent ${
        scrolled || menuOpen ? 'nav-scrolled' : ''
      }`}
    >
      <div className="max-w-container-max mx-auto flex justify-between items-center px-margin-mobile md:px-gutter py-4 md:py-5 transition-all duration-300">
        <div className="flex items-center gap-6 min-w-0">
          <div className="flex items-center gap-2 shrink-0">
            <BrandHomeLink className="text-label-md text-outline hover:text-primary" />
            <span className="text-outline/50" aria-hidden="true">/</span>
            <Link
              to="/calviq"
              className="font-headline-md text-headline-md font-extrabold text-primary tracking-tight"
            >
              CALVIQ
            </Link>
          </div>
          <div className="hidden lg:block h-6 w-px bg-outline-variant"></div>
          <span className="hidden lg:block font-label-md text-label-md text-outline tracking-wide whitespace-nowrap">
            Dairy Farm Management System
          </span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              aria-current={isActive(link) ? 'location' : undefined}
              className={
                isActive(link)
                  ? "font-label-md text-label-md text-primary font-bold relative after:content-[''] after:absolute after:bottom-[-25px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : 'font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a
            href={EXTERNAL_LOGIN_URL}
            className="px-5 py-2.5 font-label-md text-label-md rounded-lg text-primary hover:bg-primary-fixed/50 transition-all active:scale-95"
          >
            Log In
          </a>
          <Link
            to="/calviq/signup"
            className="shimmer-btn px-6 py-2.5 font-label-md text-label-md rounded-lg bg-primary text-on-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95"
          >
            Start Free Trial
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden w-11 h-11 -mr-2 flex items-center justify-center rounded-lg text-on-surface hover:bg-primary-fixed/40 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-3xl">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out bg-white/95 backdrop-blur-xl border-t ${
          menuOpen ? 'max-h-[calc(100svh-72px)] opacity-100 border-outline-variant/30' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <div className="px-margin-mobile py-4 flex flex-col divide-y divide-outline-variant/20">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              aria-current={isActive(link) ? 'location' : undefined}
              className={`py-4 font-label-md text-base ${
                isActive(link) ? 'text-primary font-bold' : 'text-on-surface-variant'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-5">
            <a
              href={EXTERNAL_LOGIN_URL}
              className="w-full text-center px-5 py-3 font-label-md text-label-md font-bold rounded-lg border border-primary text-primary active:scale-95 transition-all"
            >
              Log In
            </a>
            <Link
              to="/calviq/signup"
              className="w-full text-center px-6 py-3 font-label-md text-label-md font-bold rounded-lg bg-primary text-on-primary shadow-lg shadow-primary/20 active:scale-95 transition-all"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
