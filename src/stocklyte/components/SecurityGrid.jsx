import Icon from './Icon.jsx'

const ITEMS = [
  { icon: 'lock', label: 'JWT Auth' },
  { icon: 'shield', label: 'Zero-Trust' },
  { icon: 'list_alt', label: 'Full Audit' },
  { icon: 'cloud_sync', label: 'TLS 1.3' },
  { icon: 'key', label: 'SAML SSO' },
  { icon: 'database', label: 'DR Backups' },
]

export default function SecurityGrid() {
  return (
    <section id="security" className="py-40 bg-stocklyte-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal-up">
          <div className="max-w-xl">
            <h2 className="font-stocklyte-headline text-4xl md:text-6xl font-bold mb-6 tracking-tight">Hardened Security</h2>
            <p className="text-stocklyte-on-surface-variant text-lg leading-relaxed">
              Your inventory data is treated as critical infrastructure. We maintain a zero-trust architecture at
              every network layer.
            </p>
          </div>
          <button className="flex items-center gap-3 text-stocklyte-primary font-bold hover:underline group whitespace-nowrap">
            Security Documentation
            <Icon name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 reveal-up">
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="glass-bright p-5 rounded-2xl text-center group transition-all hover:bg-stocklyte-primary/10 border-gradient"
            >
              <Icon name={item.icon} className="text-stocklyte-primary text-3xl mb-4 block" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
