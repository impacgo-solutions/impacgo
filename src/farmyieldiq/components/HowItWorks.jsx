const steps = [
  {
    number: 1,
    title: 'Digitize Your Layouts',
    desc: 'Set up your layouts, blocks and individual plots — pricing, area, facing and cropping details included.',
  },
  {
    number: 2,
    title: 'Onboard Team & Partners',
    desc: 'Invite employees with role-based access, and add partner profiles for every customer holding a plot.',
    delay: '100ms',
  },
  {
    number: 3,
    title: 'Run Sales & Operations',
    desc: 'Track leads through to bookings, log travel-expense activity, and manage it all from one dashboard.',
    delay: '200ms',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-white overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-20 fyiq-reveal">
          <h2 className="font-farmyieldiq-headline text-display-lg-mobile text-farmyieldiq-on-surface mb-4">
            From Spreadsheets to One Dashboard in 3 Steps
          </h2>
          <p className="font-farmyieldiq-body text-body-lg text-farmyieldiq-on-surface-variant max-w-2xl mx-auto">
            Getting your team and existing records into FarmYieldIQ doesn't take months.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 relative fyiq-reveal">
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-farmyieldiq-outline-variant/40 -z-10"></div>
          {steps.map((step) => (
            <div
              key={step.number}
              className="space-y-6 relative group text-center"
              style={step.delay ? { transitionDelay: step.delay } : undefined}
            >
              <div className="w-20 h-20 rounded-[1.5rem] bg-farmyieldiq-primary text-white flex items-center justify-center mx-auto text-3xl font-black shadow-2xl relative z-10 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300">
                {step.number}
              </div>
              <h4 className="font-farmyieldiq-headline text-2xl text-farmyieldiq-on-surface">{step.title}</h4>
              <p className="text-farmyieldiq-on-surface-variant leading-relaxed font-farmyieldiq-body">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
