import emergencyMockup from '../assets/images/emergency-qr-mockup.webp';

const points = [
  { icon: 'lock', label: 'Encrypted Vault' },
  { icon: 'admin_panel_settings', label: 'Role-Based Family Sharing' },
  { icon: 'visibility_off', label: 'You Control What’s Shared' },
  { icon: 'cloud_done', label: 'Automatic Secure Backup' },
];

export default function TrustSecurity() {
  return (
    <section className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-healthvault-on-surface overflow-hidden">
      <div className="max-w-container-max mx-auto hv-reveal">
        <div className="bg-gradient-to-br from-healthvault-primary to-healthvault-secondary p-1 md:p-1.5 rounded-[1.75rem] sm:rounded-[2.25rem] md:rounded-[3rem] shadow-2xl">
          <div className="bg-healthvault-on-surface/95 backdrop-blur-3xl rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.8rem] p-6 sm:p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full -mr-40 -mt-40"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
              <div className="space-y-6 md:space-y-10">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 text-white font-healthvault-body text-[11px] tracking-widest border border-white/20">
                  <span className="material-symbols-outlined text-lg text-healthvault-secondary-fixed">verified_user</span>
                  PRIVATE &amp; SECURE BY DESIGN
                </div>
                <h2 className="font-healthvault-headline text-display-lg-mobile lg:text-display-lg text-white">
                  Your Family&apos;s Health Data, Protected Like It Should Be
                </h2>
                <p className="text-white/80 font-healthvault-body text-body-lg leading-relaxed">
                  Every record is encrypted and stored in your own family vault. You decide who sees what —
                  a parent, a caregiver, or a doctor during a visit — nothing is shared without your say.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-white/10">
                  {points.map((p) => (
                    <div key={p.label} className="flex items-center gap-3 text-white">
                      <span className="material-symbols-outlined text-healthvault-secondary-fixed shrink-0">{p.icon}</span>
                      <span className="text-sm font-healthvault-body">{p.label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="hv-shimmer-btn block sm:inline-block text-center px-6 py-4 sm:px-10 sm:py-5 bg-white text-healthvault-on-surface font-bold rounded-2xl hover:bg-healthvault-secondary-fixed transition-all shadow-2xl active:scale-95"
                >
                  Ask Us About Data Security
                </a>
              </div>
              <div className="relative group flex justify-center">
                <div className="relative w-full max-w-sm transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="absolute -inset-4 bg-healthvault-secondary/20 blur-[80px] rounded-full"></div>
                  <img
                    alt="HealthVault emergency profile — scannable QR card with blood group and allergies"
                    className="relative w-full rounded-3xl shadow-2xl"
                    src={emergencyMockup}
                    width={848}
                    height={1264}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
