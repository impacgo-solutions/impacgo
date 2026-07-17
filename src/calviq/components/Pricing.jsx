import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-background-alt overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-20 space-y-4 reveal-up">
          <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg">Simple, Transparent Pricing</h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">
            Scalable plans designed for small family units to multi-farm enterprises.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="reveal-up bg-dark-base p-8 sm:p-12 md:p-16 rounded-[2rem] md:rounded-[2.5rem] border-2 border-primary shadow-2xl shadow-primary/20 flex flex-col items-center text-center relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              Tailored For Your Farm
            </div>
            <h3 className="font-headline-md text-2xl mb-2 text-white">Custom Plans</h3>
            <p className="text-outline-variant text-sm max-w-md">
              From small family units to multi-farm enterprises, our team will build a plan around your herd size and
              feature needs.
            </p>
            <ul className="space-y-5 my-10 text-left">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <span className="material-symbols-outlined text-secondary-fixed font-bold">check</span> Herd Registry
                &amp; Milk Tracking
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <span className="material-symbols-outlined text-secondary-fixed font-bold">check</span> Advanced Farm
                Analytics
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <span className="material-symbols-outlined text-secondary-fixed font-bold">check</span> AI BCS
                Diagnostics
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <span className="material-symbols-outlined text-secondary-fixed font-bold">check</span> Dedicated
                Onboarding Support
              </li>
            </ul>
            <Link
              to="/calviq/demo"
              className="shimmer-btn w-full sm:w-auto px-12 py-4 rounded-xl bg-primary text-white font-extrabold shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
