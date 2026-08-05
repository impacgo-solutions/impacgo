import Icon from './Icon.jsx'

const FAQS = [
  {
    q: 'How long does implementation take?',
    a: 'We work with you to migrate your existing multi-store SKU data and get your team onboarded with minimal disruption to day-to-day operations.',
    open: true,
  },
  {
    q: 'Does it work with poor or no connectivity?',
    a: 'StockLyte is built with a local-first architecture — scans taken in low or no connectivity are cached on the device and sync automatically once connection is restored.',
  },
  {
    q: 'Can it scale as we add locations?',
    a: 'Yes — the platform is built on cloud-native infrastructure designed to add new warehouses, storefronts, and stock locations as your business grows.',
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
