// Deliberately qualitative, not fabricated customer-count/performance
// numbers — CalviQ is a new product, so this leads with what's actually
// true about the platform today instead of invented usage stats.
const stats = [
  { value: 'Every Herd Size', color: 'text-secondary-fixed', label: 'From Small Farms to Co-ops' },
  { value: 'Offline-Ready', color: 'text-white', label: 'Works in the Field' },
  { value: 'Mobile-First', color: 'text-tertiary-fixed-dim', label: 'Built for the Barn, Not the Office' },
  { value: 'One System', color: 'text-white', label: 'Herd, Health & Finance Together' },
];

export default function StatsGrid() {
  return (
    <div className="bg-dark-base relative z-20 reveal-up">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 md:py-16 border-t border-white/5">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2 group cursor-default">
            <p className={`${stat.color} font-headline-lg text-[40px] leading-none transition-transform group-hover:scale-110 origin-left`}>
              {stat.value} {stat.suffix && <span className="text-lg">{stat.suffix}</span>}
            </p>
            <p className="text-outline-variant font-label-md text-label-sm uppercase tracking-widest opacity-60">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
