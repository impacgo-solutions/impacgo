const features = [
  { icon: 'document_scanner', color: 'primary', label: 'OCR Record Scanning' },
  { icon: 'family_restroom', color: 'secondary', label: 'Family Profiles' },
  { icon: 'psychology', color: 'tertiary', label: 'AI Health Insights' },
  { icon: 'monitor_heart', color: 'primary', label: 'Vitals Tracking' },
  { icon: 'medication', color: 'secondary', label: 'Medication Reminders' },
  { icon: 'qr_code_2', color: 'tertiary', label: 'Emergency QR Card' },
  { icon: 'calendar_month', color: 'primary', label: 'Appointments' },
  { icon: 'graphic_eq', color: 'secondary', label: 'Voice Assistant' },
  { icon: 'map', color: 'tertiary', label: 'Nearby Care Finder' },
  { icon: 'summarize', color: 'primary', label: 'Timeline & Reports' },
];

const colorClasses = {
  primary: {
    text: 'text-healthvault-primary',
    hoverBg: 'group-hover:bg-healthvault-primary',
    hoverText: 'group-hover:text-healthvault-primary',
  },
  secondary: {
    text: 'text-healthvault-secondary',
    hoverBg: 'group-hover:bg-healthvault-secondary',
    hoverText: 'group-hover:text-healthvault-secondary',
  },
  tertiary: {
    text: 'text-healthvault-tertiary-container',
    hoverBg: 'group-hover:bg-healthvault-tertiary-container',
    hoverText: 'group-hover:text-healthvault-tertiary-container',
  },
};

export default function FeaturesEcosystem() {
  return (
    <section
      id="features"
      className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-background-alt border-y border-healthvault-outline-variant/20 overflow-hidden"
    >
      <div className="max-w-container-max mx-auto text-center mb-12 md:mb-20 hv-reveal">
        <h2 className="font-healthvault-headline text-display-lg-mobile mb-4 text-healthvault-on-surface">
          Everything Your Family&apos;s Health Needs, In One Vault
        </h2>
        <p className="text-healthvault-on-surface-variant max-w-xl mx-auto font-healthvault-body text-body-lg">
          From scanning a prescription to checking a risk trend to sharing an emergency profile — one app
          connects it all.
        </p>
      </div>
      <div className="max-w-container-max mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-12 hv-reveal">
        {features.map((f) => {
          const c = colorClasses[f.color];
          return (
            <div key={f.label} className="group flex flex-col items-center gap-4 text-center cursor-pointer">
              <div
                className={`w-16 h-16 rounded-2xl bg-white hv-sophisticated-shadow flex items-center justify-center ${c.text} ${c.hoverBg} group-hover:text-white group-hover:scale-110 transition-all duration-300`}
              >
                <span className="material-symbols-outlined text-3xl">{f.icon}</span>
              </div>
              <span className={`font-healthvault-body text-label-md ${c.hoverText} transition-colors text-healthvault-on-surface-variant`}>
                {f.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
