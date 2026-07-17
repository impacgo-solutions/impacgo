import qrScanCattle from '../assets/images/qr-scan-cattle.png';

export default function FeaturedModule() {
  return (
    <section className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-white overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative reveal-up mb-10 sm:mb-0">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="p-3 sm:p-4 bg-white rounded-3xl sophisticated-shadow relative z-10 border border-outline-variant/20 transition-transform hover:rotate-1 duration-500">
              <img
                alt="Scanning cattle with mobile app"
                className="w-full h-auto rounded-2xl"
                src={qrScanCattle}
              />
              <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-8 bg-secondary p-4 sm:p-8 rounded-2xl shadow-2xl text-on-primary max-w-[200px] sm:max-w-[280px] transition-transform hover:scale-105 duration-300">
                <span className="font-headline-md text-base sm:text-headline-md block mb-1 sm:mb-2">Scan &amp; Go</span>
                <p className="font-body-md text-xs sm:text-sm opacity-90 leading-snug">
                  Instant animal profile retrieval via QR Ear Tags. Record health data in seconds.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6 md:space-y-8 reveal-up">
            <div className="flex items-center gap-3">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">01 / HERD INTELLIGENCE</span>
            </div>
            <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface">
              Digital Lifelines for <br />
              Every Animal
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Create a comprehensive digital identity for your entire herd. Track ancestry, historical health events,
              and lactation cycles from birth to maturity with zero paperwork.
            </p>
            <div className="grid grid-cols-1 gap-5 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <div>
                  <span className="font-headline-md text-body-lg block transition-colors group-hover:text-secondary">
                    Automated Lactation Tracking
                  </span>
                  <p className="text-on-surface-variant text-sm">
                    Predict dry periods and peak yield cycles with algorithmic precision.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <div>
                  <span className="font-headline-md text-body-lg block transition-colors group-hover:text-secondary">
                    Pedigree Visualization
                  </span>
                  <p className="text-on-surface-variant text-sm">
                    Map lineages to prevent inbreeding and optimize genetic potential.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-2xl transition-all hover:bg-primary/10">
                <p className="font-body-md text-body-md italic text-on-surface-variant">
                  "CALVIQ reduced our daily administrative time from 2 hours to just 15 minutes. The ROI was immediate."
                </p>
                <span className="mt-4 block font-label-md text-primary">— Verma Dairy Exports</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
