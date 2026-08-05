import Icon from './Icon.jsx'

const TILES = [
  { icon: 'dashboard', title: 'Command Center', desc: 'Aggregated real-time visualization of stock health across every location.' },
  {
    icon: 'barcode_scanner',
    title: 'Precision Scanning',
    desc: 'Fast, reliable SKU scanning via standard mobile hardware — no special devices needed.',
  },
  {
    icon: 'move_up',
    title: 'Intelligent Routing',
    desc: 'Dynamic stock rebalancing based on regional demand signals.',
  },
  { icon: 'groups', title: 'Role-Based Access', desc: 'Granular, role-based permissions for every team member.' },
  { icon: 'history', title: 'Audit Trail', desc: 'A detailed, timestamped log of every inventory change.' },
  {
    icon: 'description',
    title: 'Automated Reports',
    desc: 'Scheduled operational reports sent directly to stakeholders.',
  },
]

export default function InventoryEngine() {
  return (
    <section className="py-40 bg-stocklyte-surface">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-stocklyte-headline text-4xl md:text-6xl font-bold text-center mb-24 tracking-tight reveal-up">
          The Inventory Engine
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal-up">
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
