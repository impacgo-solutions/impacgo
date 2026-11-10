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

export default function Terms() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Terms of Service", path: "/terms" },
  ]);

  return (
    <div>
      <SEO
        title="Terms of Service | Impacgo Solutions"
        description="The terms that apply to using impacgo.com and the product pages, sign-up forms, and early-access programmes it links to."
        keywords="Impacgo Solutions terms of service, Impacgo terms and conditions"
        path="/terms"
        schema={[breadcrumbSchema]}
      />
      <ScrollToTop />
      <Header alwaysSolid />

      <PageHero
        gradient="from-slate-900 via-blue-900 to-indigo-900"
        eyebrow={`Last updated ${LAST_UPDATED}`}
        title="Terms of Service"
        description="The terms that apply when you use impacgo.com, our product pages, and the forms and early-access programmes linked from them."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          <Section title="1. Acceptance of these terms">
            <p>
              By using impacgo.com or any of its product pages (CALVIQ, StockLyte, FarmYieldIQ, HealthVault,
              and the Impacgo ERP Suite pages), you agree to these terms. If you don’t agree, please don’t use
              the site. These terms are offered by{" "}
              <strong className="text-gray-800">Impacgo Solutions Private Limited</strong>, Visakhapatnam,
              Andhra Pradesh, India.
            </p>
          </Section>

          <Section title="2. What this site is">
            <p>
              impacgo.com is a marketing and informational website. It describes our Microsoft Dynamics 365
              and Power Platform consulting services, our own software products, and lets you request a
              consultation, demo, or early access to a product. It is not itself a piece of software you log
              into — where a product (like FarmYieldIQ or the CALVIQ dairy management system) has its own
              hosted application, that application may carry its own separate terms, referenced from its
              sign-up flow.
            </p>
          </Section>

          <Section title="3. Content marked 'In Development'">
            <p>
              Some products and modules on this site — including parts of the Impacgo ERP Suite and Construction
              Planner — are explicitly labelled “In Development.” These are shown to describe our roadmap and
              take early-access interest; they are not yet generally available, and availability, feature set,
              and timelines can change.
            </p>
          </Section>

          <Section title="4. Submitting information through our forms">
            <p>
              When you submit a contact, demo-request, or early-access form, you’re asking us to get in touch
              with you about that product or service. You confirm the information you provide is accurate and
              that you have the right to give it to us. See our{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> for how that
              information is handled.
            </p>
          </Section>

          <Section title="5. Intellectual property">
            <p>
              The Impacgo name, logo, product names (CALVIQ, StockLyte, FarmYieldIQ, HealthVault, and the
              Impacgo ERP Suite), and the site’s content, design, and code are the property of Impacgo
              Solutions Private Limited unless otherwise credited. You may not reproduce, resell, or represent
              this content as your own without our written permission.
            </p>
          </Section>

          <Section title="6. No warranty">
            <p>
              This site and its content are provided “as is.” While we do our best to keep information
              accurate and current, we make no guarantee that every page is error-free or that any
              “In Development” product will ship on a particular timeline.
            </p>
          </Section>

          <Section title="7. Limitation of liability">
            <p>
              To the extent permitted by law, Impacgo Solutions is not liable for indirect or consequential
              loss arising from your use of this website. This does not limit liability that cannot be
              excluded under Indian law.
            </p>
          </Section>

          <Section title="8. External links">
            <p>
              This site links to third-party services we use to operate it (for example, our live-chat
              provider) and, in places, to a hosted product application. We aren’t responsible for the content
              or practices of sites we don’t operate.
            </p>
          </Section>

          <Section title="9. Governing law">
            <p>
              These terms are governed by the laws of India, and any dispute arising from them falls under the
              jurisdiction of the courts of Visakhapatnam, Andhra Pradesh.
            </p>
          </Section>

          <Section title="10. Changes to these terms">
            <p>
              We may update these terms from time to time — the “last updated” date at the top of this page
              will reflect that. Continued use of the site after a change means you accept the updated terms.
              Questions can be sent to{" "}
              <a href="mailto:info@impacgo.com" className="text-blue-600 hover:underline">info@impacgo.com</a>.
            </p>
          </Section>

        </div>
      </section>

      <Footer />
    </div>
  );
}
