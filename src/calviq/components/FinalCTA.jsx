import { Link } from 'react-router-dom';

const steps = [
  {
    number: 1,
    title: 'Create Farm Profile',
    desc: 'Register your farm, define sheds, and invite your staff in under 5 minutes.',
  },
  {
    number: 2,
    title: 'Scan & Register',
    desc: 'Bulk import your herd data or scan existing ear tags with our mobile scanner.',
    delay: '100ms',
  },
  {
    number: 3,
    title: 'Optimize Yield',
    desc: 'Access real-time dashboards and AI insights to maximize your production.',
    delay: '200ms',
  },
];

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-section-gap px-margin-mobile md:px-gutter hero-gradient text-white overflow-hidden">
      <div className="max-w-container-max mx-auto text-center">
        <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg mb-12 md:mb-20 reveal-up">
          Get started in 3 easy steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 relative reveal-up">
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-white/20"></div>
          {steps.map((step) => (
            <div
              key={step.number}
              className="space-y-6 relative group"
              style={step.delay ? { transitionDelay: step.delay } : undefined}
            >
              <div className="w-20 h-20 rounded-[1.5rem] bg-white text-dark-base flex items-center justify-center mx-auto text-3xl font-black shadow-2xl relative z-10 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300">
                {step.number}
              </div>
              <h4 className="font-headline-md text-2xl">{step.title}</h4>
              <p className="text-outline-variant leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 md:mt-24 flex flex-col md:flex-row gap-4 md:gap-6 justify-center reveal-up">
          <Link
            to="/calviq/signup"
            className="shimmer-btn text-center px-8 py-4 md:px-12 md:py-5 bg-secondary text-on-primary rounded-2xl font-bold text-lg shadow-2xl shadow-secondary/20 hover:-translate-y-1 transition-all active:scale-95"
          >
            Start 14-Day Free Trial
          </Link>
          <Link
            to="/calviq/demo"
            className="text-center px-8 py-4 md:px-12 md:py-5 border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95"
          >
            Request Enterprise Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
