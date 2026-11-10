export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-background-alt overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-20 space-y-4 hv-reveal">
          <h2 className="font-healthvault-headline text-display-lg-mobile lg:text-display-lg text-healthvault-on-surface">
            Simple Pricing, Built Around Your Family
          </h2>
          <p className="font-healthvault-body text-body-lg text-healthvault-on-surface-variant max-w-xl mx-auto">
            From a single member to a multi-generation household, we&apos;ll build a plan around your family&apos;s needs.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="hv-reveal bg-healthvault-on-surface p-8 sm:p-12 md:p-16 rounded-[2rem] md:rounded-[2.5rem] border-2 border-healthvault-primary shadow-2xl flex flex-col items-center text-center relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-healthvault-on-tertiary-container text-healthvault-tertiary-container px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              Early Access Program
            </div>
            <h3 className="font-healthvault-headline text-2xl mb-2 text-white">Family Plan</h3>
            <p className="text-white/60 text-sm max-w-md font-healthvault-body">
              Every household&apos;s mix of members, records and reminders is different — pricing is scoped to
              yours, with an early-access discount for founding families.
            </p>
            <ul className="space-y-5 my-10 text-left">
              <li className="flex items-center gap-3 text-sm text-white/90 font-healthvault-body">
                <span className="material-symbols-outlined text-healthvault-secondary-fixed font-bold">check</span>
                Unlimited Family Member Profiles
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90 font-healthvault-body">
                <span className="material-symbols-outlined text-healthvault-secondary-fixed font-bold">check</span>
                OCR Scanning &amp; AI Health Insights
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90 font-healthvault-body">
                <span className="material-symbols-outlined text-healthvault-secondary-fixed font-bold">check</span>
                Vitals, Reminders &amp; Emergency QR Card
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90 font-healthvault-body">
                <span className="material-symbols-outlined text-healthvault-secondary-fixed font-bold">check</span>
                Dedicated Onboarding Support
              </li>
            </ul>
            <a
              href="/healthvault/signup"
              className="hv-shimmer-btn w-full sm:w-auto px-12 py-4 rounded-xl bg-healthvault-secondary text-white font-extrabold shadow-lg hover:-translate-y-1 transition-all active:scale-95"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
