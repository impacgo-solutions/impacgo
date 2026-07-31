const stats = [
  { value: 'Layout → Block → Plot', color: 'text-white', label: 'Real Estate Hierarchy' },
  { value: 'Live', color: 'text-farmyieldiq-secondary-fixed', label: 'Herd Health & Milk Records' },
  { value: '360°', color: 'text-farmyieldiq-tertiary-fixed-dim', label: 'Partner Portfolio View' },
  { value: 'End-to-End', color: 'text-white', label: 'Sales Pipeline & Commissions' },
];

export default function StatsGrid() {
  return (
    <div className="bg-farmyieldiq-primary relative z-20 fyiq-reveal">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 md:py-16 border-t border-white/5">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2 group cursor-default">
            <p className={`${stat.color} font-farmyieldiq-headline text-xl md:text-2xl leading-tight transition-transform group-hover:scale-105 origin-left`}>
              {stat.value}
            </p>
            <p className="text-white/60 font-farmyieldiq-body text-label-sm uppercase tracking-widest">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
