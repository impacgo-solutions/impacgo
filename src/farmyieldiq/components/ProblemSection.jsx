const problems = [
  {
    icon: 'table_chart',
    iconBg: 'bg-farmyieldiq-error-container/40',
    iconColor: 'text-farmyieldiq-error',
    title: 'Plots & Payments in Spreadsheets',
    desc: 'Plot pricing, paid/balance amounts, and registration status tracked across scattered sheets, with no single source of truth.',
  },
  {
    icon: 'folder_off',
    iconBg: 'bg-farmyieldiq-tertiary-container/20',
    iconColor: 'text-farmyieldiq-tertiary-fixed-dim',
    title: 'Partner Documents Scattered Everywhere',
    desc: "Certificates, agreements and invoices live in email threads and local folders, so nobody has one place to check a partner's paperwork.",
  },
  {
    icon: 'call_missed',
    iconBg: 'bg-farmyieldiq-primary-container/10',
    iconColor: 'text-farmyieldiq-primary',
    title: 'Sales Follow-ups Fall Through',
    desc: 'Leads, follow-ups and bookings tracked in notebooks and chat threads instead of one pipeline your whole team can see.',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-white overflow-hidden">
      <div className="max-w-container-max mx-auto text-center mb-12 md:mb-20 fyiq-reveal">
        <h2 className="font-farmyieldiq-headline text-display-lg-mobile text-farmyieldiq-on-surface mb-4">
          Escape the Spreadsheet Sprawl
        </h2>
        <p className="font-farmyieldiq-body text-body-lg text-farmyieldiq-on-surface-variant max-w-2xl mx-auto">
          Land, partners and sales run on the same business — but rarely on the same system.
          FarmYieldIQ brings it all under one roof.
        </p>
      </div>
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {problems.map((p) => (
          <div
            key={p.title}
            className="fyiq-reveal fyiq-card-hover bg-farmyieldiq-surface-container-low/50 p-6 sm:p-8 md:p-10 rounded-2xl border border-farmyieldiq-outline-variant/30 fyiq-sophisticated-shadow"
          >
            <div className={`w-14 h-14 rounded-xl ${p.iconBg} flex items-center justify-center ${p.iconColor} mb-6 md:mb-8`}>
              <span className="material-symbols-outlined text-3xl">{p.icon}</span>
            </div>
            <h3 className="font-farmyieldiq-headline text-headline-md mb-4 text-farmyieldiq-on-surface">{p.title}</h3>
            <p className="text-farmyieldiq-on-surface-variant leading-relaxed font-farmyieldiq-body">{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="max-w-container-max mx-auto mt-12 md:mt-20 p-1 bg-gradient-to-r from-farmyieldiq-primary to-farmyieldiq-secondary rounded-3xl fyiq-reveal">
        <div className="bg-farmyieldiq-on-surface p-6 sm:p-8 md:p-12 rounded-[1.4rem] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-white font-farmyieldiq-headline text-headline-lg">Stop reconciling, start managing.</h4>
            <p className="text-white/60 font-farmyieldiq-body">
              One platform for layouts, plots, partners and your sales team.
            </p>
          </div>
          <a
            href="/contact"
            className="fyiq-shimmer-btn whitespace-nowrap w-full md:w-auto text-center px-10 py-4 bg-farmyieldiq-secondary text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-xl shadow-farmyieldiq-secondary/20 active:scale-95"
          >
            Switch to FarmYieldIQ
          </a>
        </div>
      </div>
    </section>
  );
}
