import { CALVIQ_FAQS } from '../data/faqs';

// Built from the same CALVIQ design tokens and patterns as the other
// sections (ComparisonTable's section/heading styles, collapsible rows).
export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-surface overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16 reveal-up">
          <h2 className="font-headline-lg text-display-lg-mobile text-on-surface">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant font-body-md">Everything dairy farmers ask before moving their herd records to CALVIQ.</p>
        </div>
        <div className="space-y-4 reveal-up">
          {CALVIQ_FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl overflow-hidden border border-outline-variant/30 bg-white sophisticated-shadow"
            >
              <summary className="flex justify-between items-center gap-4 p-5 md:p-6 cursor-pointer list-none hover:bg-primary/5 transition-colors">
                <span className="font-label-md text-on-surface">{item.q}</span>
                <span className="material-symbols-outlined shrink-0 text-primary transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-on-surface-variant font-body-md leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
