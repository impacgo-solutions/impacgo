const stats = [
  { value: '15%', suffix: '↑', color: 'text-secondary-fixed', label: 'Avg. Yield Increase' },
  { value: '2,400+', color: 'text-white', label: 'Farms Digitized' },
  { value: '18m', color: 'text-tertiary-fixed-dim', label: 'Daily Time Saved' },
  { value: '99.9%', color: 'text-white', label: 'Uptime Reliability' },
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
