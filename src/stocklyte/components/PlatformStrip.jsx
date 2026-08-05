// Deliberately qualitative, not fabricated scale/uptime numbers — StockLyte
// is a new product, so this leads with what's actually true about the
// platform today instead of invented usage stats.
const STATS = [
  { value: 'Real-Time', label: 'Inventory Sync Everywhere' },
  { value: 'Multi-Location', label: 'One Unified Dashboard' },
  { value: 'Cloud-Native', label: 'Modern Architecture' },
  { value: 'Built to Scale', label: 'Grows With Your Business' },
]

export default function PlatformStrip() {
  return (
    <section className="py-20 bg-stocklyte-surface-container-low border-y border-stocklyte-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center reveal-up">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <span className="block text-stocklyte-primary font-stocklyte-headline text-4xl font-bold mb-3">{stat.value}</span>
            <span className="text-[10px] uppercase font-stocklyte-data tracking-[0.3em] opacity-50">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
