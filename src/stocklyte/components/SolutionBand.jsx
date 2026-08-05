import Icon from './Icon.jsx'

// "SOC2 Verified" removed — that's a specific, formal third-party audit
// certification, not a claim to make without having actually earned it.
const ITEMS = [
  { icon: 'hub', label: 'Multi-Location Sync' },
  { icon: 'sync', label: 'Real-Time Updates' },
  { icon: 'lock', label: 'Encrypted Data' },
  // { icon: 'api', label: 'ERP Native' },
]

export default function SolutionBand() {
  return (
    <section className="py-16 border-y border-stocklyte-outline-variant/20 bg-stocklyte-surface">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-10 md:gap-20 opacity-60 reveal-up">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <Icon name={item.icon} className="text-stocklyte-primary" />
            <span className="font-stocklyte-data text-xs uppercase tracking-[0.2em]">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
