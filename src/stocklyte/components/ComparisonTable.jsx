const ROWS = [
  { capability: 'Ledger Accuracy', oldWay: 'Estimated / Batch', stocklyte: 'Sub-second Absolute' },
  { capability: 'Network Scale', oldWay: 'Single Store Focus', stocklyte: 'Infinite Elastic Nodes' },
  { capability: 'System Integration', oldWay: 'Manual CSV Import', stocklyte: 'Bi-directional Native API' },
  { capability: 'Field Durability', oldWay: 'Hardware Dependent', stocklyte: 'Device Agnostic Vision' },
]

export default function ComparisonTable() {
  return (
    <section className="py-40 bg-stocklyte-surface">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-stocklyte-headline text-4xl md:text-5xl font-bold text-center mb-24 tracking-tight reveal-up">
          The Competitive Edge
        </h2>
        <div className="glass overflow-x-auto rounded-[2rem] border-gradient shadow-2xl reveal-up">
          <table className="w-full text-left min-w-[560px]">
            <thead>
              <tr className="border-b border-stocklyte-outline-variant bg-stocklyte-surface-container/50">
                <th className="p-8 font-stocklyte-headline text-xs uppercase tracking-[0.2em] opacity-50">Capability</th>
                <th className="p-8 font-stocklyte-headline text-xs uppercase tracking-[0.2em] text-stocklyte-error/80">The Old Way</th>
                <th className="p-8 font-stocklyte-headline text-xs uppercase tracking-[0.2em] text-stocklyte-primary bg-stocklyte-primary/5">
                  The StockLyte Way
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stocklyte-outline-variant/20">
              {ROWS.map((row) => (
                <tr key={row.capability}>
                  <td className="p-8 font-bold text-sm whitespace-nowrap">{row.capability}</td>
                  <td className="p-8 text-stocklyte-on-surface-variant text-sm whitespace-nowrap">{row.oldWay}</td>
                  <td className="p-8 text-stocklyte-primary font-bold text-sm bg-stocklyte-primary/5 whitespace-nowrap">{row.stocklyte}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
