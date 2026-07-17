const problems = [
  {
    icon: 'description',
    iconBg: 'bg-error-container/20',
    iconColor: 'text-error',
    title: 'Messy Paper Records',
    desc: 'Lost logs and illegible handwriting lead to data gaps and costly errors in critical breeding cycles.',
    cardClass: 'interactive-card',
    delay: undefined,
  },
  {
    icon: 'visibility_off',
    iconBg: 'bg-alert-amber/10',
    iconColor: 'text-alert-amber',
    title: 'Zero Visibility',
    desc: "Waiting for monthly tallies means you can't react to herd health drops or feed fluctuations in real-time.",
    cardClass: 'interactive-card-secondary interactive-card',
    delay: '100ms',
  },
  {
    icon: 'trending_down',
    iconBg: 'bg-primary-container/10',
    iconColor: 'text-primary',
    title: 'Stagnant Profit',
    desc: 'Without accurate cost-per-litre analysis, farms lose up to 20% of potential profit to resource waste.',
    cardClass: 'interactive-card',
    delay: '200ms',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-white overflow-hidden">
      <div className="max-w-container-max mx-auto text-center mb-12 md:mb-20 reveal-up">
        <h2 className="font-headline-lg text-display-lg-mobile text-on-surface mb-4">Escape the Manual Record Trap</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Paper logs aren't just slow—they hide the inefficiencies that eat your profit. CALVIQ brings industrial-grade
          visibility to every barn.
        </p>
      </div>
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {problems.map((p) => (
          <div
            key={p.title}
            className={`reveal-up ${p.cardClass} bg-surface-container-low/50 p-6 sm:p-8 md:p-10 rounded-2xl border border-outline-variant/30 sophisticated-shadow`}
            style={p.delay ? { transitionDelay: p.delay } : undefined}
          >
            <div className={`w-14 h-14 rounded-xl ${p.iconBg} flex items-center justify-center ${p.iconColor} mb-6 md:mb-8`}>
              <span className="material-symbols-outlined text-3xl">{p.icon}</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">{p.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="max-w-container-max mx-auto mt-12 md:mt-20 p-1 bg-gradient-to-r from-primary to-secondary rounded-3xl reveal-up">
        <div className="bg-dark-base p-6 sm:p-8 md:p-12 rounded-[1.4rem] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-white font-headline-lg text-headline-lg">Stop guessing, start growing.</h4>
            <p className="text-outline-variant font-body-md">
              Join 2,400+ progressive farms modernizing their operations today.
            </p>
          </div>
          <button className="shimmer-btn whitespace-nowrap w-full md:w-auto px-10 py-4 bg-secondary text-on-primary font-bold rounded-xl hover:opacity-90 transition-all shadow-xl shadow-secondary/20 active:scale-95">
            Switch to CALVIQ Now
          </button>
        </div>
      </div>
    </section>
  );
}
