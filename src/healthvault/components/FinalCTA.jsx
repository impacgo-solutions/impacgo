import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "How secure are our family's health records?",
    a: 'Every record is stored in an encrypted vault, and role-based sharing means you decide exactly who — a family member, caregiver or doctor — can see what.',
  },
  {
    q: 'Can it manage records for my whole family, not just me?',
    a: 'Yes — HealthVault is built around family profiles. Add every member, from kids to grandparents, and manage their records, vitals and reminders from one shared account.',
  },
  {
    q: 'What does the AI health insight actually do?',
    a: 'It analyzes the records and vitals already in your vault to surface a health score, risk indicators and personalized recommendations — a decision-support tool, not a diagnosis.',
  },
  {
    q: 'What happens in a medical emergency?',
    a: 'Each profile carries a scannable Emergency QR card with blood group, allergies and conditions, so a first responder or new doctor can access critical info in seconds — no login required.',
  },
];

export default function FinalCTA() {
  return (
    <>
      <section id="faq" className="py-16 md:py-section-gap px-margin-mobile md:px-gutter max-w-4xl mx-auto">
        <h2 className="font-healthvault-headline text-display-lg-mobile text-healthvault-on-surface text-center mb-12 hv-reveal">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 hv-reveal">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="rounded-xl overflow-hidden border border-healthvault-outline-variant/30 group"
            >
              <summary className="w-full px-6 py-4 flex justify-between items-center gap-4 text-left bg-white hover:bg-healthvault-surface-container cursor-pointer list-none">
                <span className="font-healthvault-headline text-headline-sm text-healthvault-primary">{item.q}</span>
                <span className="material-symbols-outlined shrink-0 transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-5 text-healthvault-on-surface-variant font-healthvault-body bg-white">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-section-gap px-margin-mobile md:px-gutter hv-hero-gradient text-white overflow-hidden">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-10 hv-reveal">
          <div className="text-center md:text-left space-y-3">
            <h2 className="font-healthvault-headline text-display-lg-mobile lg:text-display-lg">
              Ready to give your family one health vault?
            </h2>
            <p className="font-healthvault-body text-body-lg text-white/80">
              Bring every prescription, report and profile into HealthVault.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <Link
              to="/healthvault/signup"
              className="hv-shimmer-btn text-center px-10 py-4 bg-healthvault-secondary text-white rounded-2xl font-bold text-lg shadow-2xl hover:-translate-y-1 transition-all active:scale-95"
            >
              Get Early Access
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
