import addFamilyMockup from '../assets/images/add-family-mockup.webp';

const steps = [
  {
    number: 1,
    title: 'Add Your Family',
    desc: 'Create profiles for every family member — parents, kids, grandparents — under one shared account.',
  },
  {
    number: 2,
    title: 'Scan & Auto-File Records',
    desc: 'Snap a photo of a prescription, report or scan — OCR reads and files it against the right member, automatically.',
    delay: '100ms',
  },
  {
    number: 3,
    title: 'Track, Get Insights & Stay Ready',
    desc: 'Monitor vitals, get medication reminders, review AI health insights, and keep an emergency profile always on hand.',
    delay: '200ms',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-white overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-20 hv-reveal">
          <h2 className="font-healthvault-headline text-display-lg-mobile text-healthvault-on-surface mb-4">
            From Scattered Records to One Vault in 3 Steps
          </h2>
          <p className="font-healthvault-body text-body-lg text-healthvault-on-surface-variant max-w-2xl mx-auto">
            Getting your family&apos;s history into HealthVault takes minutes, not months.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 hv-reveal flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[300px]">
              <div className="absolute -inset-6 bg-healthvault-primary/10 blur-[80px] rounded-full"></div>
              <img
                alt="Adding family member profiles in HealthVault"
                className="relative w-full rounded-2xl shadow-2xl hv-sophisticated-shadow"
                src={addFamilyMockup}
                width={848}
                height={1264}
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 gap-10 md:gap-12 relative hv-reveal order-1 lg:order-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-6 group"
                style={step.delay ? { transitionDelay: step.delay } : undefined}
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-healthvault-primary text-white flex items-center justify-center text-2xl font-black shadow-xl transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-healthvault-headline text-2xl text-healthvault-on-surface mb-2">{step.title}</h4>
                  <p className="text-healthvault-on-surface-variant leading-relaxed font-healthvault-body">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
