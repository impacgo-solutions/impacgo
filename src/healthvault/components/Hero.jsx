import { Link } from 'react-router-dom';
import heroDashboard from '../assets/images/hero-dashboard-mockup.webp';

export default function Hero() {
  return (
    <section className="hv-hero-gradient pt-28 pb-16 px-margin-mobile md:pt-40 md:pb-24 md:px-gutter overflow-hidden relative hv-reveal">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-6 md:space-y-8 z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-healthvault-primary-fixed font-healthvault-body text-[11px] tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-healthvault-tertiary-fixed animate-pulse"></span>
            Family Health Records
          </span>
          <h1 className="font-healthvault-headline text-display-lg-mobile lg:text-display-lg text-white">
            Every Report. Every Member. <br />
            <span className="text-healthvault-secondary-fixed">One Vault, For Life.</span>
          </h1>
          <p className="font-healthvault-body text-body-lg text-white/80 max-w-xl leading-relaxed">
            HealthVault digitizes your family&apos;s prescriptions, lab reports and scans into one secure vault —
            with AI health insights, vitals tracking and an emergency profile everyone can rely on.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <Link
              to="/healthvault/signup"
              className="hv-shimmer-btn text-center px-8 py-4 font-healthvault-body text-label-md font-bold rounded-xl bg-healthvault-secondary text-white shadow-2xl shadow-healthvault-secondary/40 hover:-translate-y-1 transition-all active:scale-95"
            >
              Get Early Access
            </Link>
            <a
              href="/contact"
              className="text-center px-8 py-4 font-healthvault-body text-label-md font-bold rounded-xl border border-white/20 text-white hover:bg-white/5 transition-all active:scale-95"
            >
              Book a Demo
            </a>
          </div>
          <p className="text-white/60 font-healthvault-body text-[11px] uppercase tracking-widest pt-2">
            Mobile app for families · AI assistant, OCR scanning &amp; emergency QR built in
          </p>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-healthvault-secondary/20 blur-[120px] rounded-full scale-125"></div>
          <div className="relative z-10 hv-floating flex justify-center">
            <div className="relative group max-w-[320px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-healthvault-secondary to-healthvault-tertiary-fixed rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img
                alt="HealthVault family dashboard — health score, vitals and auto-filed records"
                className="w-full relative rounded-2xl shadow-2xl"
                src={heroDashboard}
                width={848}
                height={1264}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
