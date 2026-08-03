import heroDashboard from '../assets/images/hero-dashboard-mockup.png';

export default function PartnerSpotlight() {
  return (
    <section className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-farmyieldiq-on-surface overflow-hidden">
      <div className="max-w-container-max mx-auto fyiq-reveal">
        <div className="bg-gradient-to-br from-farmyieldiq-primary to-farmyieldiq-secondary p-1 md:p-1.5 rounded-[1.75rem] sm:rounded-[2.25rem] md:rounded-[3rem] shadow-2xl">
          <div className="bg-farmyieldiq-on-surface/95 backdrop-blur-3xl rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.8rem] p-6 sm:p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full -mr-40 -mt-40"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
              <div className="space-y-6 md:space-y-10">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 text-white font-farmyieldiq-body text-[11px] tracking-widest border border-white/20">
                  <span className="material-symbols-outlined text-lg text-farmyieldiq-secondary-fixed">visibility</span>
                  PARTNER TRANSPARENCY
                </div>
                <h2 className="font-farmyieldiq-headline text-display-lg-mobile lg:text-display-lg text-white">
                  Give Every Partner a Clear View of Their Portfolio
                </h2>
                <p className="text-white/80 font-farmyieldiq-body text-body-lg leading-relaxed">
                  Partner profiles bring plots, documents and payments into one view, so partners can check the
                  status of what they hold themselves, instead of calling the office.
                </p>
                <div className="flex gap-8 sm:gap-12 pt-4 border-t border-white/10">
                  <div className="text-white">
                    <span className="block text-3xl font-extrabold text-farmyieldiq-secondary-fixed">Plots</span>
                    <span className="text-xs uppercase tracking-widest opacity-60 font-farmyieldiq-body">Docs · Payments</span>
                  </div>
                  <div className="text-white">
                    <span className="block text-3xl font-extrabold text-farmyieldiq-secondary-fixed">Full History</span>
                    <span className="text-xs uppercase tracking-widest opacity-60 font-farmyieldiq-body">Per Partner Plot</span>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="fyiq-shimmer-btn block sm:inline-block text-center px-6 py-4 sm:px-10 sm:py-5 bg-white text-farmyieldiq-on-surface font-bold rounded-2xl hover:bg-farmyieldiq-secondary-fixed transition-all shadow-2xl active:scale-95"
                >
                  See a Partner Profile Demo
                </a>
              </div>
              <div className="relative group">
                <div className="bg-black/40 border border-white/20 rounded-3xl p-3 sm:p-5 backdrop-blur-md overflow-hidden relative shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    alt="FarmYieldIQ partner profile dashboard"
                    className="w-full rounded-xl shadow-inner brightness-90 group-hover:brightness-100 transition-all duration-700"
                    src={heroDashboard}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
