import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import SectionBlobs from "../components/SectionBlobs";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import LocationMap from "../components/LocationMap";
import SEO from "../components/SEO";
import Reveal, { RevealItem } from "../components/Reveal";
import {
  organizationSchema,
  founderSchema,
  createBreadcrumbSchema,
} from "../components/schemas";
import {
  ShieldCheck,
  Zap,
  HeartHandshake,
  Layers,
  Target,
  LifeBuoy,
  Linkedin,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";
import founderPhoto from "../assets/founder-srikar-tantravahi.webp";
// Uncomment when real client logos/results are ready to publish here again.
// import resonac from "../assets/clients/Resonac.webp";
// import hitechi from "../assets/clients/hitechi.webp";
// import ironingboy from "../assets/clients/ironingboy.webp";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// AboutPage schema — tells Google/AI tools what this specific page is,
// distinct from the Organization/LocalBusiness schema already on the homepage.
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Impacgo Solutions",
  url: "https://www.impacgo.com/about",
  about: { "@type": "Organization", name: "Impacgo Solutions" },
};

const whyItems = [
  {
    icon: ShieldCheck,
    title: "India Compliance, Built In",
    description: "GST, e-invoicing and statutory reporting configured correctly from day one — not patched in after go-live.",
  },
  {
    icon: HeartHandshake,
    title: "Industry Know-How",
    description: "Hands-on experience across manufacturing, dairy and agriculture, distribution and professional services. We speak the language of your operations.",
  },
  {
    icon: Zap,
    title: "Fast, Low-Risk Delivery",
    description: "Phased, agile rollouts that keep your business running smoothly while we take you live.",
  },
  {
    icon: Layers,
    title: "One Team, End to End",
    description: "ERP, Power Platform and custom applications delivered by a single, accountable team.",
  },
  {
    icon: Target,
    title: "Measurable Results",
    description: "Every engagement begins with agreed business goals and ends with outcomes you can measure.",
  },
  {
    icon: LifeBuoy,
    title: "Support Beyond Go-Live",
    description: "Hypercare, user training and continuous improvement, so your system keeps getting better over time.",
  },
];

// const clients = [
//   { name: "Resonac", logo: resonac },
//   { name: "Hitachi", logo: hitechi },
//   { name: "Ironing Boy", logo: ironingboy },
// ];

export default function About() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ]);

  return (
    <div>
      <SEO
        title="About Us | Impacgo Solutions — Microsoft Dynamics 365 Partner Since 2020"
        description="Impacgo Solutions is a Microsoft Dynamics 365 Finance & Operations and Power Platform partner headquartered in Visakhapatnam, India. Since 2020 we have helped businesses in India and worldwide implement, upgrade and get more from their ERP — with India compliance built in."
        keywords="About Impacgo Solutions, Impacgo Solutions founder, Impacgo Solutions Visakhapatnam, Microsoft Dynamics 365 partner company, Impacgo history"
        path="/about"
        schema={[aboutPageSchema, organizationSchema, founderSchema, breadcrumbSchema]}
      />
      <ScrollToTop />
      <Header alwaysSolid />

      <PageHero
        gradient="from-slate-900 via-blue-900 to-indigo-900"
        eyebrow="Founded 2020 · Visakhapatnam, India"
        title="We Make Microsoft Dynamics 365 Work for Your Business"
        description="Impacgo Solutions is a Microsoft Dynamics 365 and Power Platform partner headquartered in Visakhapatnam, India. We help organizations in India and around the world implement, upgrade and get more from their ERP — and we build our own software products for the industries we know best."
      />

      {/* ---------------- OUR STORY ---------------- */}
      <section className="relative py-16 md:py-20 bg-white overflow-hidden">
        <SectionBlobs colorA="bg-blue-300/25" colorB="bg-indigo-300/20" />
        <div className="relative z-10 container mx-auto px-4 max-w-3xl">
          <Reveal as="h2" className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Story
          </Reveal>
          <RevealItem index={0} as="p" className="text-gray-600 leading-relaxed mb-4">
            We founded Impacgo Solutions in March 2020 in Visakhapatnam, India, on one simple
            belief: an ERP project only succeeds when the system fits the way the business
            actually runs. Too many Dynamics 365 rollouts go live on schedule and still fall
            short — particularly in India, where GST, e-invoicing and statutory reporting add
            real complexity.
          </RevealItem>
          <RevealItem index={1} as="p" className="text-gray-600 leading-relaxed mb-4">
            So we built a team that combines deep Microsoft Dynamics 365 Finance &amp; Operations
            and Power Platform expertise with hands-on knowledge of Indian compliance. Our clients
            get a single partner who understands both the global platform and the local rules —
            from first workshop to long after go-live.
          </RevealItem>
          <RevealItem index={2} as="p" className="text-gray-600 leading-relaxed">
            Our client work kept revealing the same gaps, so we began building products to close
            them: CALVIQ for dairy farm management, StockLyte for real-time inventory control,
            FarmYieldIQ for plotted-land businesses, and now the{" "}
            <strong>Impacgo ERP Suite</strong> — a connected business platform in active
            development across HR, Finance, Supply Chain, Manufacturing, Planning, Retail and
            Projects.
          </RevealItem>
        </div>
      </section>

      {/* ---------------- LEADERSHIP ---------------- */}
      <section className="relative py-16 md:py-20 bg-gray-50 overflow-hidden">
        <SectionBlobs colorA="bg-indigo-300/25" colorB="bg-blue-300/20" flip />
        <div className="relative z-10 container mx-auto px-4 max-w-5xl">
          <Reveal className="text-center mb-12">
            <p className="uppercase tracking-widest text-blue-600 font-semibold mb-2 text-sm">
              Leadership
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Meet the Founder</h2>
          </Reveal>

          <RevealItem
            index={0}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center"
          >
            {/* Photo */}
            <div className="md:col-span-2 flex justify-center md:justify-end">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-400/30 via-indigo-400/20 to-transparent blur-xl"
                  aria-hidden="true"
                />
                <img
                  src={founderPhoto}
                  alt="Venkata Srikar Tantravahi, Founder & CEO of Impacgo Solutions"
                  width="400"
                  height="400"
                  loading="lazy"
                  className="relative w-64 md:w-72 aspect-square object-cover rounded-[1.75rem] shadow-glass-lg border-4 border-white bg-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-glass px-4 py-2 border border-gray-100">
                  <p className="text-xs font-bold text-gray-800 whitespace-nowrap">Venkata Srikar</p>
                  <p className="text-[11px] text-blue-600 font-semibold whitespace-nowrap">Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">Venkata Srikar Tantravahi</h3>
              <p className="text-blue-600 font-semibold mb-4">Founder & CEO, Impacgo Solutions</p>

              <p className="text-gray-600 leading-relaxed mb-5">
                Srikar founded Impacgo Solutions in 2020 to build a Microsoft Dynamics 365 practice
                that pairs international delivery standards with genuine depth in Indian
                compliance. He leads the company's client delivery and product strategy — including
                the development of the Impacgo ERP Suite — with a focus on solutions that create
                lasting, measurable value for every client.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-semibold text-gray-700">
                  <Calendar className="h-3.5 w-3.5 text-blue-600" /> Founded 2020
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-semibold text-gray-700">
                  <MapPin className="h-3.5 w-3.5 text-blue-600" /> Visakhapatnam, India
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-semibold text-gray-700">
                  <Award className="h-3.5 w-3.5 text-blue-600" /> Microsoft D365 Partner
                </span>
              </div>

              <a
                href="https://www.linkedin.com/company/impacgo-solutions-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-300 shadow-md"
              >
                <Linkedin className="h-4 w-4" /> Follow Impacgo on LinkedIn
              </a>
            </div>
          </RevealItem>
        </div>
      </section>

      {/* ---------------- WHAT WE DO ---------------- */}
      <section className="relative py-16 md:py-20 bg-white overflow-hidden">
        <SectionBlobs colorA="bg-blue-300/25" colorB="bg-emerald-300/20" />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <Reveal as="h2" className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
            What We Do
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Microsoft Dynamics 365 & Power Platform",
                description: "D365 Finance & Operations implementation, AX 2012 upgrades, Power Apps, Power Automate, Power BI and AI Builder — delivered end to end, from discovery to hypercare.",
                href: `${import.meta.env.BASE_URL}#services`,
              },
              {
                title: "Industry Products",
                description: "CALVIQ, StockLyte, FarmYieldIQ, Work Task and Construction Planner — purpose-built to solve real operational challenges we've seen in the field.",
                href: `${import.meta.env.BASE_URL}#products`,
              },
              {
                title: "Impacgo ERP Suite",
                description: "Our connected business platform spanning HR, Finance, Supply Chain, Manufacturing, Planning, Retail and Projects — currently in active development.",
                href: `${import.meta.env.BASE_URL}#erp-products`,
              },
            ].map((item, index) => (
              <RevealItem
                key={item.title}
                index={index}
                as="a"
                href={item.href}
                whileHover={{ y: -6 }}
                className="block bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/60 shadow-glass hover:border-blue-300 hover:shadow-glass-lg hover:bg-white/90 transition-all duration-300"
              >
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="relative py-16 md:py-20 bg-blue-50 overflow-hidden">
        <SectionBlobs colorA="bg-teal-300/25" colorB="bg-blue-300/25" flip />
        <div className="relative z-10 container mx-auto px-4">
          <Reveal className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why Clients Work With Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We measure success by what changes in your business after go-live — not just by the go-live date.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealItem
                  key={item.title}
                  index={index}
                  whileHover={{ y: -6 }}
                  className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl p-6 shadow-glass hover:shadow-glass-lg hover:bg-white/90 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </RevealItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- CLIENTS ----------------
      Commented out at the user's request until real client logos/results
      are ready to publish here again.
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-6">
            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">Our Clients</p>
            <h3 className="text-gray-600 text-sm md:text-base">Trusted by Leading Global Enterprises</h3>
          </Reveal>
          <div className="flex md:flex-wrap items-center justify-start md:justify-center gap-x-10 overflow-x-auto md:overflow-visible scrollbar-hide px-2">
            {clients.map((client, index) => (
              <RevealItem
                key={client.name}
                index={index}
                className="flex-shrink-0 flex items-center justify-center h-7"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  width="120"
                  height="28"
                  className="h-6 md:h-5 lg:h-7 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                />
              </RevealItem>
            ))}
          </div>
        </div>
      </section>
      ---------------------------------------------- */}

      {/* ---------------- LOCATION ---------------- */}
      <section className="relative py-16 md:py-20 bg-gray-50 overflow-hidden">
        <SectionBlobs colorA="bg-blue-300/20" colorB="bg-indigo-300/20" />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <Reveal className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Where We're Based</h2>
            <p className="text-gray-600">
              Headquartered in Visakhapatnam, Andhra Pradesh — delivering projects remotely and
              on-site for clients worldwide.
            </p>
          </Reveal>
          <RevealItem index={0}>
            <LocationMap />
          </RevealItem>
        </div>
      </section>

      <ContactCard />
      <Footer />
    </div>
  );
}
