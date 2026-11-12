import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { createBreadcrumbSchema } from "../components/schemas";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LAST_UPDATED = "27 August 2026";

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="space-y-4 text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Privacy() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy" },
  ]);

  return (
    <div>
      <SEO
        title="Privacy Policy | Impacgo Solutions"
        description="How Impacgo Solutions collects, uses, and protects information submitted through our website, contact forms, and product sign-up pages."
        keywords="Impacgo Solutions privacy policy, data protection, Impacgo privacy"
        path="/privacy"
        schema={[breadcrumbSchema]}
      />
      <ScrollToTop />
      <Header alwaysSolid />

      <PageHero
        gradient="from-slate-900 via-blue-900 to-indigo-900"
        eyebrow={`Last updated ${LAST_UPDATED}`}
        title="Privacy Policy"
        description="This policy explains what information we collect through impacgo.com and our product pages, why we collect it, and how you can control it."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          <Section title="1. Who we are">
            <p>
              This website (impacgo.com and its product pages, including the CALVIQ, StockLyte, FarmYieldIQ,
              and HealthVault landing pages) is operated by{" "}
              <strong className="text-gray-800">Impacgo Solutions Private Limited</strong>, No 9-29-19, Gupta
              Villa, Third Floor, Balaji Nagar, Visakhapatnam, Andhra Pradesh 530003, India. For any privacy
              question, contact us at{" "}
              <a href="mailto:info@impacgo.com" className="text-blue-600 hover:underline">info@impacgo.com</a> or{" "}
              <a href="tel:+919966477499" className="text-blue-600 hover:underline">+91 99664 77499</a>.
            </p>
          </Section>

          <Section title="2. Information we collect">
            <p>We collect information only when you choose to give it to us. That happens in a few places:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-800">Contact and demo-request forms</strong> (homepage contact
                form, product “Request a Demo” / “Contact Sales” links) — name, email address, phone number,
                and whatever you write in the message field.
              </li>
              <li>
                <strong className="text-gray-800">Product early-access / sign-up forms</strong> (e.g.
                HealthVault “Get Early Access”, FarmYieldIQ “Start Free Trial”) — name, email address, and
                where asked, an organisation name or phone number.
              </li>
              <li>
                <strong className="text-gray-800">Live chat</strong> — if you choose to open the chat widget,
                whatever you type into that conversation.
              </li>
              <li>
                <strong className="text-gray-800">Usage data</strong> — standard analytics data (pages
                visited, approximate location from IP, device/browser type, referring site) collected
                automatically via Google Analytics.
              </li>
            </ul>
            <p>We do not collect payment information anywhere on this site — none of our forms process payments.</p>
          </Section>

          <Section title="3. How we use it">
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your enquiry, demo request, or early-access sign-up.</li>
              <li>To understand which pages and products visitors find useful, so we can improve them.</li>
              <li>To meet legal, accounting, or security obligations where required.</li>
            </ul>
            <p>We do not sell your information, and we do not use it for advertising retargeting.</p>
          </Section>

          <Section title="4. Third-party services we use">
            <p>
              Form submissions and site analytics are processed through these third parties, each under their
              own privacy policy:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-800">EmailJS</strong> — delivers the contents of our contact and
                sign-up forms to our team’s email inbox. EmailJS does not use this data for any purpose other
                than that delivery.
              </li>
              <li>
                <strong className="text-gray-800">Google Analytics</strong> — anonymised/aggregated traffic
                analytics, using cookies to distinguish visitors.
              </li>
              <li>
                <strong className="text-gray-800">Tawk.to</strong> — powers the optional live-chat widget;
                chat transcripts are stored in our Tawk.to account.
              </li>
            </ul>
          </Section>

          <Section title="5. Cookies">
            <p>
              This site uses cookies set by Google Analytics and, if you open it, the Tawk.to chat widget, to
              recognise repeat visits and keep a chat session active. You can block or delete cookies at any
              time through your browser settings — the site will still function, though chat and analytics
              won’t.
            </p>
          </Section>

          <Section title="6. Data retention">
            <p>
              Enquiry and sign-up submissions are kept for as long as needed to respond to you and maintain a
              record of the business relationship, and are deleted on request (see Section 7).
            </p>
          </Section>

          <Section title="7. Your rights">
            <p>
              You can ask us at any time to tell you what information we hold about you, to correct it, or to
              delete it, by emailing{" "}
              <a href="mailto:info@impacgo.com" className="text-blue-600 hover:underline">info@impacgo.com</a>.
              We’ll respond within a reasonable time.
            </p>
          </Section>

          <Section title="8. Changes to this policy">
            <p>
              If this policy changes, we’ll update the “last updated” date at the top of this page. Continued
              use of the site after a change means you accept the updated policy.
            </p>
          </Section>

        </div>
      </section>

      <Footer />
    </div>
  );
}
