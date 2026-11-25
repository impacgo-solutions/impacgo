import { Link } from 'react-router-dom';

// Every footer link points at a real page or section — the platform items all
// live in the Features section of the CALVIQ landing page.
const FOOTER_COLUMNS = [
  {
    title: 'Platform',
    links: [
      { label: 'Herd Registry', to: '/calviq/#features' },
      { label: 'Milk Production', to: '/calviq/#features' },
      { label: 'AI BCS Scoring', to: '/calviq/#features' },
      { label: 'Pricing', to: '/calviq/#pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      // TEMP-HIDDEN: About page is hidden — uncomment when the /about route is restored.
      // { label: 'About Impacgo', to: '/about' },
      { label: 'CALVIQ Blog', to: '/blog/calviq-dairy-farm-management' },
      { label: 'Book a Demo', to: '/calviq/demo' },
      { label: 'Contact Support', to: '/contact' },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: 'Impacgo website', icon: 'language', href: '/' },
  { label: 'Impacgo on LinkedIn', icon: 'share', href: 'https://www.linkedin.com/company/impacgo-solutions-private-limited/', external: true },
  { label: 'Email us', icon: 'mail', href: 'mailto:info@impacgo.com' },
  { label: 'Call us: +91 99664 77499', icon: 'call', href: 'tel:+919966477499' },
];

export default function Footer() {
  return (
    <footer id="contact" className="w-full pt-16 md:pt-section-gap pb-10 md:pb-12 px-margin-mobile md:px-gutter bg-dark-base text-surface-bright overflow-hidden">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16 reveal-up">
        <div className="lg:col-span-4 space-y-8">
          <span className="font-headline-md text-3xl font-black text-primary tracking-tighter">CALVIQ</span>
          <p className="text-outline-variant font-body-md text-sm leading-relaxed max-w-sm">
            Empowering the global dairy industry with data precision, AI diagnostics, and modern farm management
            infrastructure.
          </p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                title={item.label}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
              >
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title} className="lg:col-span-2 space-y-6">
            <h5 className="text-white text-xs font-black uppercase tracking-widest">{col.title}</h5>
            <ul className="space-y-4">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link className="text-outline-variant hover:text-white transition-colors text-sm" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="lg:col-span-4 space-y-8">
          <h5 className="text-white text-xs font-black uppercase tracking-widest">Mobile Apps</h5>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            <Link
              to="/calviq/coming-soon"
              className="w-full py-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <span className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors">
                laptop_mac
              </span>
              <div className="text-left">
                <span className="block text-[8px] text-outline-variant leading-none uppercase font-bold">
                  Download on the
                </span>
                <span className="text-xs text-white font-bold">App Store</span>
              </div>
            </Link>
            <Link
              to="/calviq/coming-soon"
              className="w-full py-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <span className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors">
                smartphone
              </span>
              <div className="text-left">
                <span className="block text-[8px] text-outline-variant leading-none uppercase font-bold">
                  Get it on
                </span>
                <span className="text-xs text-white font-bold">Google Play</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto mt-12 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[11px] text-outline-variant font-medium tracking-wide uppercase">
          © 2026 impacgo CALVIQ Global. Accelerating the Modern Farm Revolution.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-8 text-[11px] text-outline-variant font-medium uppercase tracking-wider">
          <Link className="hover:text-white transition-colors" to="/privacy">
            Privacy Policy
          </Link>
          <Link className="hover:text-white transition-colors" to="/terms">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
