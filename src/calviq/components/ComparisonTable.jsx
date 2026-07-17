const rows = [
  {
    feature: 'Real-time Performance Dash',
    legacy: 'Delayed / Manual Entry',
    modern: 'Instant Insights',
  },
  {
    feature: 'Comprehensive Animal History',
    legacy: 'Fragmented / Often Lost',
    modern: 'Lifetime Digital Archive',
  },
  {
    feature: 'Automated Health Alerts',
    legacy: 'Reactive Discovery',
    modern: 'Proactive Push Notifications',
  },
  {
    feature: 'Milk Yield Analytics',
    legacy: 'Estimated Weekly',
    modern: 'Precise Per-Cow Logs',
  },
  {
    feature: 'Data Security',
    legacy: 'Low (Physical Damage)',
    modern: 'Bank-Grade Cloud Encryption',
  },
];

export default function ComparisonTable() {
  return (
    <section id="why-calviq" className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-surface overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-10 md:mb-20 reveal-up">
          <h2 className="font-headline-lg text-display-lg-mobile text-on-surface">The Digital Advantage</h2>
          <p className="text-on-surface-variant font-body-md">See why 2,400+ farmers upgraded from spreadsheets.</p>
        </div>
        <div className="overflow-x-auto rounded-2xl md:rounded-3xl border border-outline-variant/30 sophisticated-shadow reveal-up">
          <table className="w-full text-left border-collapse bg-white min-w-[640px]">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/30">
                <th className="p-4 sm:p-6 md:p-8 font-headline-md text-base sm:text-lg text-on-surface">Feature Capability</th>
                <th className="p-4 sm:p-6 md:p-8 font-headline-md text-base sm:text-lg text-outline">Paper / Excel</th>
                <th className="p-4 sm:p-6 md:p-8 font-headline-md text-base sm:text-lg text-primary bg-primary/5">CALVIQ Platform</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {rows.map((row) => (
                <tr key={row.feature} className="hover:bg-primary/5 transition-colors group">
                  <td className="p-4 sm:p-6 md:p-8 font-label-md text-on-surface transition-colors group-hover:text-primary">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-6 md:p-8 text-on-surface-variant text-sm">{row.legacy}</td>
                  <td className="p-4 sm:p-6 md:p-8 text-secondary font-bold bg-primary/5 group-hover:bg-primary/10 transition-colors">
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
