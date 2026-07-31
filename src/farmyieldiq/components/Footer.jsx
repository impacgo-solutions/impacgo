import { EXTERNAL_APP_URL } from './Navbar';

export default function Footer() {
  return (
    <footer className="w-full pt-16 md:pt-section-gap pb-10 md:pb-12 px-margin-mobile md:px-gutter bg-farmyieldiq-on-surface text-white overflow-hidden">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16 fyiq-reveal">
        <div className="lg:col-span-5 space-y-6">
          <span className="font-farmyieldiq-headline text-3xl font-black text-farmyieldiq-secondary-fixed tracking-tight">
            FarmYieldIQ
          </span>
          <p className="text-white/60 font-farmyieldiq-body text-sm leading-relaxed max-w-sm">
            The operations platform for agri-land and livestock businesses — layouts, plots, livestock, partners
            and sales, in one dashboard.
          </p>
        </div>
        <div className="lg:col-span-3 space-y-6">
          <h5 className="text-white text-xs font-black uppercase tracking-widest">Platform</h5>
          <ul className="space-y-4">
            <li><a className="text-white/60 hover:text-white transition-colors text-sm" href="/farmyieldiq/#features">Layouts &amp; Plots</a></li>
            <li><a className="text-white/60 hover:text-white transition-colors text-sm" href="/farmyieldiq/#features">Livestock Tracking</a></li>
            <li><a className="text-white/60 hover:text-white transition-colors text-sm" href="/farmyieldiq/#features">Sales Pipeline</a></li>
            <li><a className="text-white/60 hover:text-white transition-colors text-sm" href="/farmyieldiq/#features">Partner Documents</a></li>
          </ul>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <h5 className="text-white text-xs font-black uppercase tracking-widest">Company</h5>
          <ul className="space-y-4">
            <li><a className="text-white/60 hover:text-white transition-colors text-sm" href="/contact">Contact Us</a></li>
            <li><a className="text-white/60 hover:text-white transition-colors text-sm" href="/#products">Our Products</a></li>
          </ul>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <h5 className="text-white text-xs font-black uppercase tracking-widest">Get Started</h5>
          <a
            href={EXTERNAL_APP_URL}
            className="inline-block px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/10 transition-colors"
          >
            Open App / Log In
          </a>
        </div>
      </div>
      <div className="max-w-container-max mx-auto mt-12 md:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[11px] text-white/50 font-medium tracking-wide uppercase">
          © 2026 Impacgo FarmYieldIQ. Built for agri-land &amp; livestock operators.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-8 text-[11px] text-white/50 font-medium uppercase tracking-wider">
          <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
