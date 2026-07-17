import { Link } from 'react-router-dom';
import heroMobileApp from '../assets/images/hero-mobile-app.png';
import heroFarmScene from '../assets/images/hero-farm-scene.png';

const EXTERNAL_LOGIN_URL = 'https://calviq.impacgo.com/#/login';

export default function Hero() {
  return (
    <section className="hero-gradient pt-28 pb-16 px-margin-mobile md:pt-40 md:pb-24 md:px-gutter overflow-hidden relative reveal-up">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-6 md:space-y-8 z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-primary-fixed font-label-sm text-[11px] tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse"></span>
            Next-Gen Agri-Tech 2026
          </span>
          <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-white">
            One platform. Every cow. <br />
            <span className="text-secondary-fixed">Maximized Yield.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-outline-variant/80 max-w-xl leading-relaxed">
            The modern operating system for your dairy farm. Centralize herd tracking, automate production logs, and
            leverage AI for precision health—all in one enterprise-grade dashboard.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <Link
              to="/calviq/signup"
              className="shimmer-btn text-center px-8 py-4 font-label-md text-label-md font-bold rounded-xl bg-primary text-on-primary shadow-2xl shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95"
            >
              Start 14-Day Free Trial
            </Link>
            <button className="text-center px-8 py-4 font-label-md text-label-md font-bold rounded-xl border border-white/20 text-white hover:bg-white/5 transition-all active:scale-95">
              Watch Product Tour
            </button>
          </div>
          <div className="flex gap-6 pt-4 md:pt-8 items-center">
            <p className="text-outline-variant font-label-sm text-[11px] uppercase tracking-widest">Available on</p>
            <div className="flex gap-3">
              <a
                href={EXTERNAL_LOGIN_URL}
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-white text-lg">laptop_mac</span>
              </a>
              <Link
                to="/calviq/coming-soon"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-white text-lg">phone_iphone</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative h-[360px] sm:h-[440px] lg:h-[550px]">
          <div className="absolute inset-0 bg-primary/30 blur-[120px] rounded-full scale-125"></div>
          <div className="relative z-10 floating flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2.8rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img
                alt="CALVIQ Mobile Application"
                className="w-56 sm:w-64 lg:w-72 relative rounded-[2.5rem] shadow-2xl border-[10px] border-dark-base"
                src={heroMobileApp}
              />
            </div>
          </div>
          <div className="absolute -right-16 top-1/4 opacity-30 scale-125 pointer-events-none select-none blur-[2px]">
            <img
              alt="Dairy Farm Scene"
              className="w-[320px] sm:w-[420px] lg:w-[500px] rounded-3xl object-cover grayscale brightness-50"
              src={heroFarmScene}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
