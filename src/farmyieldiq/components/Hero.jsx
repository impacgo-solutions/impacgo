import heroDashboard from '../assets/images/hero-dashboard-mockup.png';
import { EXTERNAL_APP_URL } from './Navbar';

export default function Hero() {
  return (
    <section className="fyiq-hero-gradient pt-28 pb-16 px-margin-mobile md:pt-40 md:pb-24 md:px-gutter overflow-hidden relative fyiq-reveal">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-6 md:space-y-8 z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-farmyieldiq-primary-fixed font-farmyieldiq-body text-[11px] tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-farmyieldiq-secondary-fixed animate-pulse"></span>
            Farmland Plot Operations
          </span>
          <h1 className="font-farmyieldiq-headline text-display-lg-mobile lg:text-display-lg text-white">
            Every Layout. Every Plot. <br />
            <span className="text-farmyieldiq-secondary-fixed">Every Sale, Tracked.</span>
          </h1>
          <p className="font-farmyieldiq-body text-body-lg text-white/80 max-w-xl leading-relaxed">
            FarmYieldIQ is the operations platform for plotted-land businesses — one dashboard for
            layouts, blocks and plots, partner portfolios, sales pipeline, and your whole team.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <a
              href={EXTERNAL_APP_URL}
              className="fyiq-shimmer-btn text-center px-8 py-4 font-farmyieldiq-body text-label-md font-bold rounded-xl bg-farmyieldiq-secondary text-white shadow-2xl shadow-farmyieldiq-secondary/40 hover:-translate-y-1 transition-all active:scale-95"
            >
              Start Free Trial
            </a>
            <a
              href="/contact"
              className="text-center px-8 py-4 font-farmyieldiq-body text-label-md font-bold rounded-xl border border-white/20 text-white hover:bg-white/5 transition-all active:scale-95"
            >
              Book a Demo
            </a>
          </div>
          <p className="text-white/60 font-farmyieldiq-body text-[11px] uppercase tracking-widest pt-2">
            Web dashboard for admins &amp; sales teams · Mobile app for field &amp; partner access
          </p>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-farmyieldiq-secondary/20 blur-[120px] rounded-full scale-125"></div>
          <div className="relative z-10 fyiq-floating">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-farmyieldiq-secondary to-farmyieldiq-tertiary-fixed rounded-[1.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img
                alt="FarmYieldIQ dashboard — layouts, plots and partner overview"
                className="w-full relative rounded-2xl shadow-2xl border border-white/10"
                src={heroDashboard}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
