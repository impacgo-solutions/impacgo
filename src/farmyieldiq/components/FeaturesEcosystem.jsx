const features = [
  { icon: 'layers', color: 'primary', label: 'Layouts & Blocks' },
  { icon: 'map', color: 'secondary', label: 'Plots & Payments' },
  { icon: 'eco', color: 'tertiary', label: 'Crop Details' },
  { icon: 'groups', color: 'primary', label: 'Partner Profiles' },
  { icon: 'trending_up', color: 'secondary', label: 'Sales Pipeline' },
  { icon: 'badge', color: 'tertiary', label: 'Employees & Roles' },
  { icon: 'flight_takeoff', color: 'primary', label: 'Travel Expenses' },
  { icon: 'folder_managed', color: 'secondary', label: 'Document Vault' },
  { icon: 'support_agent', color: 'tertiary', label: 'Partner Requests' },
  { icon: 'dashboard', color: 'primary', label: 'Dashboard & Reports' },
];

const colorClasses = {
  primary: {
    text: 'text-farmyieldiq-primary',
    hoverBg: 'group-hover:bg-farmyieldiq-primary',
    hoverText: 'group-hover:text-farmyieldiq-primary',
  },
  secondary: {
    text: 'text-farmyieldiq-secondary',
    hoverBg: 'group-hover:bg-farmyieldiq-secondary',
    hoverText: 'group-hover:text-farmyieldiq-secondary',
  },
  tertiary: {
    text: 'text-farmyieldiq-on-tertiary-container',
    hoverBg: 'group-hover:bg-farmyieldiq-on-tertiary-container',
    hoverText: 'group-hover:text-farmyieldiq-on-tertiary-container',
  },
};

export default function FeaturesEcosystem() {
  return (
    <section
      id="features"
      className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-background-alt border-y border-farmyieldiq-outline-variant/20 overflow-hidden"
    >
      <div className="max-w-container-max mx-auto text-center mb-12 md:mb-20 fyiq-reveal">
        <h2 className="font-farmyieldiq-headline text-display-lg-mobile mb-4 text-farmyieldiq-on-surface">
          Everything Your Ops Team Touches, In One Place
        </h2>
        <p className="text-farmyieldiq-on-surface-variant max-w-xl mx-auto font-farmyieldiq-body text-body-lg">
          From onboarding a plot to closing a sale to checking a partner's paperwork — one dashboard connects it all.
        </p>
      </div>
      <div className="max-w-container-max mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-12 fyiq-reveal">
        {features.map((f) => {
          const c = colorClasses[f.color];
          return (
            <div key={f.label} className="group flex flex-col items-center gap-4 text-center cursor-pointer">
              <div
                className={`w-16 h-16 rounded-2xl bg-white fyiq-sophisticated-shadow flex items-center justify-center ${c.text} ${c.hoverBg} group-hover:text-white group-hover:scale-110 transition-all duration-300`}
              >
                <span className="material-symbols-outlined text-3xl">{f.icon}</span>
              </div>
              <span className={`font-farmyieldiq-body text-label-md ${c.hoverText} transition-colors text-farmyieldiq-on-surface-variant`}>
                {f.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
