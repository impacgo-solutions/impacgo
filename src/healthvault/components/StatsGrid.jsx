const stats = [
  { value: 'Auto-Filed', color: 'text-white', label: 'Prescriptions & Reports (OCR)' },
  { value: 'Whole Family', color: 'text-healthvault-secondary-fixed', label: 'Profiles, One Account' },
  { value: 'AI-Powered', color: 'text-healthvault-tertiary-fixed-dim', label: 'Health Insights & Risk Score' },
  { value: 'Instant', color: 'text-white', label: 'Emergency QR Access' },
];

export default function StatsGrid() {
  return (
    <div className="bg-healthvault-primary relative z-20 hv-reveal">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 md:py-16 border-t border-white/5">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2 group cursor-default">
            <p className={`${stat.color} font-healthvault-headline text-xl md:text-2xl leading-tight transition-transform group-hover:scale-105 origin-left`}>
              {stat.value}
            </p>
            <p className="text-white/60 font-healthvault-body text-label-sm uppercase tracking-widest">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
