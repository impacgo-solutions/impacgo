import Icon from './Icon.jsx'

const FAQS = [
  {
    q: 'Implementation Velocity?',
    a: 'Enterprise deployment typically averages 24-48 hours. Our automated migration engine handles multi-store SKU datasets with zero downtime.',
    open: true,
  },
  {
    q: 'Shadow-Sync Capabilities?',
    a: 'StockLyte features a resilient local-first architecture. Scans in connectivity dead-zones are cryptographically cached and auto-synced upon reconnection.',
  },
  {
    q: 'Multi-Node Scalability?',
    a: 'Our backend is built on an elastic cloud-native infrastructure, supporting virtually infinite warehouse nodes, storefronts, and virtual stock locations.',
  },
]

export default function FAQ() {
  return (
    <section className="py-40 bg-stocklyte-surface-container">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-stocklyte-headline text-4xl font-bold text-center mb-16 tracking-tight reveal-up">Operation FAQ</h2>
        <div className="space-y-4 reveal-up">
          {FAQS.map((item) => (
            <details key={item.q} className="glass group rounded-2xl overflow-hidden border-gradient" open={item.open}>
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-stocklyte-surface-variant/30 transition-colors">
                <span className="font-bold">{item.q}</span>
                <Icon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="p-6 pt-0 text-stocklyte-on-surface-variant leading-relaxed font-light text-sm">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
