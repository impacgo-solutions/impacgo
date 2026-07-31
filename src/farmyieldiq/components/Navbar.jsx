import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useNavScroll from '../hooks/useNavScroll';

export const EXTERNAL_APP_URL = 'https://farmyieldiq.impacgo.com/';

const navLinks = [
  { label: 'Features', href: '/farmyieldiq/#features' },
  { label: 'How It Works', href: '/farmyieldiq/#how-it-works' },
  { label: 'Pricing', href: '/farmyieldiq/#pricing' },
  { label: 'FAQ', href: '/farmyieldiq/#faq' },
];

export default function Navbar() {
  const scrolled = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // The navbar sits transparent over the dark hero gradient until scrolled,
  // when it becomes an off-white bar (see .fyiq-nav-scrolled). Text/icon
  // colors have to flip with it — the dark-on-light palette below would be
  // near-invisible on the dark hero.
  const solid = scrolled || menuOpen;

  return (
    <nav
      className={`fixed top-0 w-full z-50 fyiq-nav-blur border-b border-transparent ${
        solid ? 'fyiq-nav-scrolled' : ''
      }`}
    >
      <div className="max-w-container-max mx-auto flex justify-between items-center px-margin-mobile md:px-gutter py-4 md:py-5 transition-all duration-300">
        <div className="flex items-center gap-6 min-w-0">
          <Link
            to="/farmyieldiq"
            className={`font-farmyieldiq-headline text-headline-md font-extrabold tracking-tight shrink-0 transition-colors ${
              solid ? 'text-farmyieldiq-primary' : 'text-white'
            }`}
          >
            FarmYieldIQ
          </Link>
          <div className={`hidden lg:block h-6 w-px transition-colors ${solid ? 'bg-farmyieldiq-outline-variant' : 'bg-white/30'}`}></div>
          <span
            className={`hidden lg:block font-farmyieldiq-body text-label-md tracking-wide whitespace-nowrap transition-colors ${
              solid ? 'text-farmyieldiq-outline' : 'text-white/70'
            }`}
          >
            Farmland &amp; Livestock Operations Platform
          </span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-farmyieldiq-body text-label-md transition-all ${
                solid
                  ? 'text-farmyieldiq-on-surface-variant hover:text-farmyieldiq-primary'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a
            href={EXTERNAL_APP_URL}
            className={`px-5 py-2.5 font-farmyieldiq-body text-label-md rounded-lg transition-all active:scale-95 ${
              solid ? 'text-farmyieldiq-primary hover:bg-farmyieldiq-primary-fixed/40' : 'text-white hover:bg-white/10'
            }`}
          >
            Log In
          </a>
          <a
            href={EXTERNAL_APP_URL}
            className="fyiq-shimmer-btn px-6 py-2.5 font-farmyieldiq-body text-label-md rounded-lg bg-farmyieldiq-primary text-farmyieldiq-on-primary shadow-lg shadow-farmyieldiq-primary/20 hover:shadow-xl hover:bg-farmyieldiq-secondary transition-all active:scale-95"
          >
            Start Free Trial
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={`md:hidden w-11 h-11 -mr-2 flex items-center justify-center rounded-lg active:scale-95 transition-all ${
            solid ? 'text-farmyieldiq-on-surface hover:bg-farmyieldiq-primary-fixed/40' : 'text-white hover:bg-white/10'
          }`}
        >
          <span className="material-symbols-outlined text-3xl">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out bg-white/95 backdrop-blur-xl border-t ${
          menuOpen ? 'max-h-[calc(100svh-72px)] opacity-100 border-farmyieldiq-outline-variant/30' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <div className="px-margin-mobile py-4 flex flex-col divide-y divide-farmyieldiq-outline-variant/20">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="py-4 font-farmyieldiq-body text-base text-farmyieldiq-on-surface-variant">
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-5">
            <a
              href={EXTERNAL_APP_URL}
              className="w-full text-center px-5 py-3 font-farmyieldiq-body text-label-md font-bold rounded-lg border border-farmyieldiq-primary text-farmyieldiq-primary active:scale-95 transition-all"
            >
              Log In
            </a>
            <a
              href={EXTERNAL_APP_URL}
              className="w-full text-center px-6 py-3 font-farmyieldiq-body text-label-md font-bold rounded-lg bg-farmyieldiq-primary text-farmyieldiq-on-primary shadow-lg shadow-farmyieldiq-primary/20 active:scale-95 transition-all"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
