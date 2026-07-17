import { Link } from 'react-router-dom';

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
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-lg">language</span>
            </div>
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-lg">share</span>
            </div>
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-lg">mail</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <h5 className="text-white text-xs font-black uppercase tracking-widest">Platform</h5>
          <ul className="space-y-4">
            <li>
              <a className="text-outline-variant hover:text-white transition-colors text-sm" href="#">
                Herd Registry
              </a>
            </li>
            <li>
              <a className="text-outline-variant hover:text-white transition-colors text-sm" href="#">
                Milk Production
              </a>
            </li>
            <li>
              <a className="text-outline-variant hover:text-white transition-colors text-sm" href="#">
                AI BCS Scoring
              </a>
            </li>
            <li>
              <a className="text-outline-variant hover:text-white transition-colors text-sm" href="#">
                Farm Finance
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <h5 className="text-white text-xs font-black uppercase tracking-widest">Company</h5>
          <ul className="space-y-4">
            <li>
              <a className="text-outline-variant hover:text-white transition-colors text-sm" href="#">
                Our Vision
              </a>
            </li>
            <li>
              <a className="text-outline-variant hover:text-white transition-colors text-sm" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="text-outline-variant hover:text-white transition-colors text-sm" href="#">
                Agri-Tech Blog
              </a>
            </li>
            <li>
              <a className="text-outline-variant hover:text-white transition-colors text-sm" href="#">
                Contact Support
              </a>
            </li>
          </ul>
        </div>
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
          <a className="hover:text-white transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Terms of Service
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Global Security
          </a>
        </div>
      </div>
    </footer>
  );
}
