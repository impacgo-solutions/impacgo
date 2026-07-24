const STATS = [
  { value: '50M+', label: 'SKUs Tracked Daily' },
  { value: '99.99%', label: 'Uptime SLA Guaranteed' },
  { value: 'AES-256', label: 'Military Encryption' },
  { value: 'Zero-Sync', label: 'Global Latency' },
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
