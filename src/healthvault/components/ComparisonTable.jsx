const rows = [
  {
    feature: 'Record Storage',
    legacy: 'Paper folders, WhatsApp, email attachments',
    modern: 'One encrypted vault, auto-filed by OCR',
  },
  {
    feature: 'Family Health View',
    legacy: 'Separate memory per member, no shared view',
    modern: 'Every family member’s profile, in one account',
  },
  {
    feature: 'Health Trends',
    legacy: 'No visibility until a doctor visit',
    modern: 'AI health score, risk analysis & insights',
  },
  {
    feature: 'Medication & Appointments',
    legacy: 'Sticky notes, missed doses',
    modern: 'Reminders, refill alerts & appointment tracking',
  },
  {
    feature: 'Emergency Readiness',
    legacy: 'Verbal history, if recalled correctly',
    modern: 'Scannable QR profile — blood group, allergies, conditions',
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-healthvault-surface overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-10 md:mb-20 hv-reveal">
          <h2 className="font-healthvault-headline text-display-lg-mobile text-healthvault-on-surface">The HealthVault Difference</h2>
          <p className="text-healthvault-on-surface-variant font-healthvault-body">See what changes when your family&apos;s health lives in one vault.</p>
        </div>
        <div className="overflow-x-auto rounded-2xl md:rounded-3xl border border-healthvault-outline-variant/30 hv-sophisticated-shadow hv-reveal">
          <table className="w-full text-left border-collapse bg-white min-w-[640px]">
            <thead>
              <tr className="bg-healthvault-surface-container-low border-b border-healthvault-outline-variant/30">
                <th className="p-4 sm:p-6 md:p-8 font-healthvault-headline text-base sm:text-lg text-healthvault-on-surface">Feature Capability</th>
                <th className="p-4 sm:p-6 md:p-8 font-healthvault-headline text-base sm:text-lg text-healthvault-outline">Paper / Scattered Apps</th>
                <th className="p-4 sm:p-6 md:p-8 font-healthvault-headline text-base sm:text-lg text-healthvault-primary bg-healthvault-primary/5">HealthVault</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-healthvault-outline-variant/20">
              {rows.map((row) => (
                <tr key={row.feature} className="hover:bg-healthvault-primary/5 transition-colors group">
                  <td className="p-4 sm:p-6 md:p-8 font-healthvault-body text-healthvault-on-surface transition-colors group-hover:text-healthvault-primary">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-6 md:p-8 text-healthvault-on-surface-variant text-sm font-healthvault-body">{row.legacy}</td>
                  <td className="p-4 sm:p-6 md:p-8 text-healthvault-secondary font-bold bg-healthvault-primary/5 group-hover:bg-healthvault-primary/10 transition-colors font-healthvault-body">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-xl shrink-0">check_circle</span> {row.modern}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
