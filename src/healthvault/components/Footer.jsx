export default function Footer() {
  return (
    <footer className="w-full pt-16 md:pt-section-gap pb-10 md:pb-12 px-margin-mobile md:px-gutter bg-healthvault-on-surface text-white overflow-hidden">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16 hv-reveal">
        <div className="lg:col-span-5 space-y-6">
          <span className="font-healthvault-headline text-3xl font-black text-healthvault-secondary-fixed tracking-tight">
            HealthVault
          </span>
          <p className="text-white/60 font-healthvault-body text-sm leading-relaxed max-w-sm">
            One secure digital vault for your family&apos;s health records — prescriptions, reports, vitals,
            reminders and an emergency profile everyone can rely on.
          </p>
        </div>
        <div className="lg:col-span-3 space-y-6">
          <h5 className="text-white text-xs font-black uppercase tracking-widest">Platform</h5>
          <ul className="space-y-4">
            <li><a className="text-white/60 hover:text-white transition-colors text-sm" href="/healthvault/#features">Digital Health Vault</a></li>
            <li><a className="text-white/60 hover:text-white transition-colors text-sm" href="/healthvault/#features">Family Profiles</a></li>
            <li><a className="text-white/60 hover:text-white transition-colors text-sm" href="/healthvault/#features">AI Health Insights</a></li>
            <li><a className="text-white/60 hover:text-white transition-colors text-sm" href="/healthvault/#features">Emergency QR Card</a></li>
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
            href="/healthvault/signup"
            className="inline-block px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/10 transition-colors"
          >
            Get Early Access
          </a>
        </div>
      </div>
      <div className="max-w-container-max mx-auto mt-12 md:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[11px] text-white/50 font-medium tracking-wide uppercase">
          © 2026 Impacgo HealthVault. Built for families who deserve better health records.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-8 text-[11px] text-white/50 font-medium uppercase tracking-wider">
          <a className="hover:text-white transition-colors" href="/privacy">Privacy Policy</a>
          <a className="hover:text-white transition-colors" href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
