const problems = [
  {
    icon: 'folder_off',
    iconBg: 'bg-healthvault-error-container',
    iconColor: 'text-healthvault-error',
    title: 'Reports Scattered Everywhere',
    desc: 'Prescriptions, scans and lab reports live across WhatsApp chats, email and paper folders — never the one place you need them.',
  },
  {
    icon: 'family_restroom',
    iconBg: 'bg-healthvault-tertiary-container/20',
    iconColor: 'text-healthvault-tertiary-container',
    title: 'No Single View of Family Health',
    desc: "Tracking medications, appointments and history for parents, kids and elders means juggling separate apps, folders and memory.",
  },
  {
    icon: 'emergency',
    iconBg: 'bg-healthvault-primary-container/10',
    iconColor: 'text-healthvault-primary',
    title: 'Critical Info Unavailable in an Emergency',
    desc: 'Blood group, allergies and conditions are rarely on hand when a first responder or new doctor needs them most.',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-white overflow-hidden">
      <div className="max-w-container-max mx-auto text-center mb-12 md:mb-20 hv-reveal">
        <h2 className="font-healthvault-headline text-display-lg-mobile text-healthvault-on-surface mb-4">
          Escape the Paper &amp; Folder Chaos
        </h2>
        <p className="font-healthvault-body text-body-lg text-healthvault-on-surface-variant max-w-2xl mx-auto">
          Your family&apos;s health history is scattered across pharmacies, labs and hospitals — but rarely
          in one place you control. HealthVault brings it all under one roof.
        </p>
      </div>
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {problems.map((p) => (
          <div
            key={p.title}
            className="hv-reveal hv-card-hover bg-healthvault-surface-container-low/50 p-6 sm:p-8 md:p-10 rounded-2xl border border-healthvault-outline-variant/30 hv-sophisticated-shadow"
          >
            <div className={`w-14 h-14 rounded-xl ${p.iconBg} flex items-center justify-center ${p.iconColor} mb-6 md:mb-8`}>
              <span className="material-symbols-outlined text-3xl">{p.icon}</span>
            </div>
            <h3 className="font-healthvault-headline text-headline-md mb-4 text-healthvault-on-surface">{p.title}</h3>
            <p className="text-healthvault-on-surface-variant leading-relaxed font-healthvault-body">{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="max-w-container-max mx-auto mt-12 md:mt-20 p-1 bg-gradient-to-r from-healthvault-primary to-healthvault-secondary rounded-3xl hv-reveal">
        <div className="bg-healthvault-on-surface p-6 sm:p-8 md:p-12 rounded-[1.4rem] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-white font-healthvault-headline text-headline-lg">Stop searching, start knowing.</h4>
            <p className="text-white/60 font-healthvault-body">
              One vault for records, vitals, reminders and your family&apos;s emergency profile.
            </p>
          </div>
          <a
            href="/contact"
            className="hv-shimmer-btn whitespace-nowrap w-full md:w-auto text-center px-10 py-4 bg-healthvault-secondary text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-xl shadow-healthvault-secondary/20 active:scale-95"
          >
            Switch to HealthVault
          </a>
        </div>
      </div>
    </section>
  );
}
