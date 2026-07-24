import Icon from './Icon.jsx'

const TILES = [
  { icon: 'dashboard', title: 'Command Center', desc: 'Aggregated real-time visualization of global stock health.' },
  {
    icon: 'barcode_scanner',
    title: 'Precision Scanning',
    desc: 'Enterprise-grade SKU scanning via standard mobile hardware.',
  },
  {
    icon: 'move_up',
    title: 'Intelligent Routing',
    desc: 'Dynamic stock rebalancing based on regional demand signals.',
  },
  { icon: 'analytics', title: 'ML Forecasting', desc: 'Predictive replenishment cycles using proprietary algorithms.' },
  {
    icon: 'inventory_2',
    title: 'Matrix Control',
    desc: 'Deep variant management across size, color, and batch IDs.',
  },
  { icon: 'groups', title: 'Security RBAC', desc: 'Military-grade granular permissions for all personnel layers.' },
  { icon: 'history', title: 'Immutable Audit', desc: 'Cryptographically signed logs for every single system event.' },
  {
    icon: 'description',
    title: 'Automated Reports',
    desc: 'Scheduled operational intelligence sent directly to stakeholders.',
  },
]

export default function InventoryEngine() {
  return (
    <section className="py-40 bg-stocklyte-surface">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-stocklyte-headline text-4xl md:text-6xl font-bold text-center mb-24 tracking-tight reveal-up">
          The Inventory Engine
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal-up">
          {TILES.map((tile) => (
            <div
              key={tile.title}
              className="glass p-5 rounded-2xl hover:border-stocklyte-primary transition-all cursor-default group border-gradient"
            >
              <div className="size-10 bg-stocklyte-primary/10 rounded-lg flex items-center justify-center text-stocklyte-primary mb-4 group-hover:scale-110 transition-transform command-shadow">
                <Icon name={tile.icon} />
              </div>
              <h4 className="font-bold mb-2 font-stocklyte-headline uppercase tracking-wider text-sm">{tile.title}</h4>
              <p className="text-xs text-stocklyte-on-surface-variant leading-relaxed">{tile.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
