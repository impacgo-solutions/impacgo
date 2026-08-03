const rows = [
  {
    feature: 'Plot & Payment Tracking',
    legacy: 'Spreadsheet ledgers, manual reconciliation',
    modern: 'Centralized plot ledger with live payment status',
  },
  {
    feature: 'Plot & Crop Details',
    legacy: 'Paper site records',
    modern: 'Digital plot records with optional crop details',
  },
  {
    feature: 'Sales Follow-ups',
    legacy: 'Notebooks & chat threads',
    modern: 'Pipeline with hierarchy, targets & commissions',
  },
  {
    feature: 'Partner Trust',
    legacy: 'Phone calls for updates',
    modern: 'Partner profile with documents & payment history',
  },
  {
    feature: 'Expense Approvals',
    legacy: 'Email chains',
    modern: 'Digital submit → approve/reject → reimburse',
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-farmyieldiq-surface overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-10 md:mb-20 fyiq-reveal">
          <h2 className="font-farmyieldiq-headline text-display-lg-mobile text-farmyieldiq-on-surface">The FarmYieldIQ Difference</h2>
          <p className="text-farmyieldiq-on-surface-variant font-farmyieldiq-body">See what changes when land and sales share one system.</p>
        </div>
        <div className="overflow-x-auto rounded-2xl md:rounded-3xl border border-farmyieldiq-outline-variant/30 fyiq-sophisticated-shadow fyiq-reveal">
          <table className="w-full text-left border-collapse bg-white min-w-[640px]">
            <thead>
              <tr className="bg-farmyieldiq-surface-container-low border-b border-farmyieldiq-outline-variant/30">
                <th className="p-4 sm:p-6 md:p-8 font-farmyieldiq-headline text-base sm:text-lg text-farmyieldiq-on-surface">Feature Capability</th>
                <th className="p-4 sm:p-6 md:p-8 font-farmyieldiq-headline text-base sm:text-lg text-farmyieldiq-outline">Spreadsheets / Paper</th>
                <th className="p-4 sm:p-6 md:p-8 font-farmyieldiq-headline text-base sm:text-lg text-farmyieldiq-primary bg-farmyieldiq-primary/5">FarmYieldIQ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-farmyieldiq-outline-variant/20">
              {rows.map((row) => (
                <tr key={row.feature} className="hover:bg-farmyieldiq-primary/5 transition-colors group">
                  <td className="p-4 sm:p-6 md:p-8 font-farmyieldiq-body text-farmyieldiq-on-surface transition-colors group-hover:text-farmyieldiq-primary">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-6 md:p-8 text-farmyieldiq-on-surface-variant text-sm font-farmyieldiq-body">{row.legacy}</td>
                  <td className="p-4 sm:p-6 md:p-8 text-farmyieldiq-secondary font-bold bg-farmyieldiq-primary/5 group-hover:bg-farmyieldiq-primary/10 transition-colors font-farmyieldiq-body">
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
