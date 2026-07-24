import Icon from './Icon.jsx'

const PROBLEMS = [
  {
    icon: 'visibility_off',
    title: 'Stock Blindness',
    desc: 'Ghost inventory and dark backrooms lead to leaked revenue and customer attrition.',
  },
  {
    icon: 'table_chart',
    title: 'Spreadsheet Sprawl',
    desc: 'Version conflicts and fragmented data hide the true state of your working capital.',
  },
  {
    icon: 'fingerprint',
    title: 'Zero Accountability',
    desc: 'Untraceable movements create shrinkage. Audit every touchpoint from dock to door.',
  },
  {
    icon: 'delete_sweep',
    title: 'Perishable Waste',
    desc: 'Avoid expiry losses with automated FIFO enforcement and real-time freshness alerts.',
  },
]

export default function ProblemSection() {
  return (
    <section className="bg-stocklyte-surface-container-lowest py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal-up">
          <h2 className="font-stocklyte-headline text-4xl md:text-5xl font-bold mb-6 tracking-tight">The Inefficiency Crisis</h2>
          <p className="text-stocklyte-on-surface-variant max-w-2xl mx-auto text-lg">
            Manual tracking is the silent killer of profitability. StockLyte eliminates the structural failures of
            legacy logistics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 reveal-up">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="glass-bright p-6 rounded-2xl flex flex-col gap-5 border-t-4 border-t-error border-gradient"
            >
              <Icon name={p.icon} className="text-stocklyte-error text-3xl" />
              <h3 className="text-xl font-bold font-stocklyte-headline leading-tight">{p.title}</h3>
              <p className="text-stocklyte-on-surface-variant text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
