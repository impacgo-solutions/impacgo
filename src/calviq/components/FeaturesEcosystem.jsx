const features = [
  { icon: 'pets', color: 'primary', label: 'Herd Registry' },
  { icon: 'opacity', color: 'secondary', label: 'Milk Records' },
  { icon: 'vaccines', color: 'tertiary', label: 'Health Management' },
  { icon: 'payments', color: 'primary', label: 'Finance Tracker' },
  { icon: 'grass', color: 'secondary', label: 'Feed Inventory' },
  { icon: 'rebase_edit', color: 'tertiary', label: 'Breeding Logs' },
];

const colorClasses = {
  primary: {
    text: 'text-primary',
    hoverBg: 'group-hover:bg-primary',
    hoverText: 'group-hover:text-primary',
  },
  secondary: {
    text: 'text-secondary',
    hoverBg: 'group-hover:bg-secondary',
    hoverText: 'group-hover:text-secondary',
  },
  tertiary: {
    text: 'text-tertiary',
    hoverBg: 'group-hover:bg-tertiary',
    hoverText: 'group-hover:text-tertiary',
  },
};

export default function FeaturesEcosystem() {
  return (
    <section id="features" className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-background-alt border-y border-outline-variant/20 overflow-hidden">
      <div className="max-w-container-max mx-auto text-center mb-12 md:mb-20 reveal-up">
        <h2 className="font-headline-lg text-display-lg-mobile mb-4">Built for Every Angle of Your Farm</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto font-body-lg">
          A unified dashboard that connects your barn, your office, and your staff.
        </p>
      </div>
      <div className="max-w-container-max mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-12 reveal-up">
        {features.map((f) => {
          const c = colorClasses[f.color];
          return (
            <div key={f.label} className="group flex flex-col items-center gap-4 text-center cursor-pointer">
              <div
                className={`w-16 h-16 rounded-2xl bg-white sophisticated-shadow flex items-center justify-center ${c.text} ${c.hoverBg} group-hover:text-white group-hover:scale-110 transition-all duration-300`}
              >
                <span className="material-symbols-outlined text-3xl">{f.icon}</span>
              </div>
              <span className={`font-label-md text-label-md ${c.hoverText} transition-colors`}>{f.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
