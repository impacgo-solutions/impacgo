import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'How secure are partner and payment records?',
    a: 'Role-based access controls limit each employee to the modules and data their role covers, and every partner’s documents and payment history are kept in a dedicated profile.',
  },
  {
    q: 'Can I track crop details alongside plot pricing?',
    a: 'Yes — each plot can carry optional cropping details, such as crop type and plant count, right alongside its pricing, payment and registration status.',
  },
  {
    q: 'Does it handle my sales team, not just customers?',
    a: 'Yes. Leads, follow-ups and bookings run through a pipeline with your sales hierarchy — from sales associate up to branch and regional leadership — plus targets and commissions.',
  },
  {
    q: 'What about staff expenses and documents?',
    a: 'Employees can log travel expenses for approval and reimbursement, and certificates, agreements and invoices are stored against the relevant partner in a central document vault.',
  },
];

export default function FinalCTA() {
  return (
    <>
      <section id="faq" className="py-16 md:py-section-gap px-margin-mobile md:px-gutter max-w-4xl mx-auto">
        <h2 className="font-farmyieldiq-headline text-display-lg-mobile text-farmyieldiq-on-surface text-center mb-12 fyiq-reveal">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 fyiq-reveal">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="rounded-xl overflow-hidden border border-farmyieldiq-outline-variant/30 group"
            >
              <summary className="w-full px-6 py-4 flex justify-between items-center gap-4 text-left bg-white hover:bg-farmyieldiq-surface-container cursor-pointer list-none">
                <span className="font-farmyieldiq-headline text-headline-sm text-farmyieldiq-primary">{item.q}</span>
                <span className="material-symbols-outlined shrink-0 transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-5 text-farmyieldiq-on-surface-variant font-farmyieldiq-body bg-white">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-section-gap px-margin-mobile md:px-gutter fyiq-hero-gradient text-white overflow-hidden">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-10 fyiq-reveal">
          <div className="text-center md:text-left space-y-3">
            <h2 className="font-farmyieldiq-headline text-display-lg-mobile lg:text-display-lg">
              Ready to run land and sales from one place?
            </h2>
            <p className="font-farmyieldiq-body text-body-lg text-white/80">
              Bring your layouts, plots and team into FarmYieldIQ.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <Link
              to="/farmyieldiq/signup"
              className="fyiq-shimmer-btn text-center px-10 py-4 bg-farmyieldiq-secondary text-white rounded-2xl font-bold text-lg shadow-2xl hover:-translate-y-1 transition-all active:scale-95"
            >
              Start Free Trial
            </Link>
            <a
              href="/contact"
              className="text-center px-10 py-4 border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
