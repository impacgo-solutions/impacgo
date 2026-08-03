export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-background-alt overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-20 space-y-4 fyiq-reveal">
          <h2 className="font-farmyieldiq-headline text-display-lg-mobile lg:text-display-lg text-farmyieldiq-on-surface">
            Simple, Scalable Pricing
          </h2>
          <p className="font-farmyieldiq-body text-body-lg text-farmyieldiq-on-surface-variant max-w-xl mx-auto">
            From a single layout to a multi-layout, multi-team operation, we'll build a plan around your portfolio.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="fyiq-reveal bg-farmyieldiq-on-surface p-8 sm:p-12 md:p-16 rounded-[2rem] md:rounded-[2.5rem] border-2 border-farmyieldiq-primary shadow-2xl flex flex-col items-center text-center relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-farmyieldiq-on-tertiary-container text-farmyieldiq-tertiary px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              Tailored For Your Operation
            </div>
            <h3 className="font-farmyieldiq-headline text-2xl mb-2 text-white">Custom Plans</h3>
            <p className="text-white/60 text-sm max-w-md font-farmyieldiq-body">
              Every operation's mix of layouts, plots, partners and sales headcount is different — pricing is
              scoped to yours.
            </p>
            <ul className="space-y-5 my-10 text-left">
              <li className="flex items-center gap-3 text-sm text-white/90 font-farmyieldiq-body">
                <span className="material-symbols-outlined text-farmyieldiq-secondary-fixed font-bold">check</span>
                Layouts, Blocks &amp; Plot Management
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90 font-farmyieldiq-body">
                <span className="material-symbols-outlined text-farmyieldiq-secondary-fixed font-bold">check</span>
                Plot &amp; Partner Portfolio Tracking
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90 font-farmyieldiq-body">
                <span className="material-symbols-outlined text-farmyieldiq-secondary-fixed font-bold">check</span>
                Sales Pipeline, Hierarchy &amp; Commission Tools
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90 font-farmyieldiq-body">
                <span className="material-symbols-outlined text-farmyieldiq-secondary-fixed font-bold">check</span>
                Dedicated Onboarding Support
              </li>
            </ul>
            <a
              href="/contact"
              className="fyiq-shimmer-btn w-full sm:w-auto px-12 py-4 rounded-xl bg-farmyieldiq-secondary text-white font-extrabold shadow-lg hover:-translate-y-1 transition-all active:scale-95"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
