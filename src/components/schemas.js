/**
 * Structured Data (JSON-LD) schemas for SEO.
 * These help Google understand your business and improve rich results in search.
 */

// One stable identifier for the company. Every schema below that mentions
// Impacgo (provider, publisher, brand, employer…) points at this same @id, so
// Google and AI search tools read them all as ONE organisation rather than
// several unrelated "Impacgo Solutions" entities.
const SITE_URL = "https://www.impacgo.com";
export const ORG_ID = `${SITE_URL}/#organization`;

// Where Impacgo works: its home city and state (local searches such as "ERP
// company in Vizag"), India, and the countries in the company profile (2026):
// Japan, Singapore, Malaysia, Thailand, the USA, the UK and the Middle East.
const AREA_SERVED = [
  { "@type": "City", name: "Visakhapatnam", alternateName: "Vizag" },
  { "@type": "State", name: "Andhra Pradesh" },
  { "@type": "Country", name: "India" },
  { "@type": "Country", name: "Japan" },
  { "@type": "Country", name: "Singapore" },
  { "@type": "Country", name: "Malaysia" },
  { "@type": "Country", name: "Thailand" },
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "Place", name: "Middle East" },
  { "@type": "Place", name: "Worldwide" },
];

// Logo (512x512, Google needs at least 112x112) and the 1200x630 share image.
const LOGO = { "@type": "ImageObject", url: `${SITE_URL}/logo-512.png`, width: 512, height: 512 };
const SHARE_IMAGE = `${SITE_URL}/og-image.jpg`;

// What Impacgo does, in the words people search for. Lets search engines and
// AI assistants connect searches like "HRMS software" or "Dynamics 365 partner"
// to this company. Only things the site actually offers.
const KNOWS_ABOUT = [
  "ERP software", "Impacgo ERP", "HRMS software", "Payroll software", "Accounting software with GST",
  "Supply chain management software", "Inventory management software", "Manufacturing ERP", "MRP software",
  "Retail POS software", "Project management software", "Microsoft Dynamics 365 Finance and Operations",
  "Dynamics 365 implementation", "AX 2012 to Dynamics 365 migration", "Power Apps", "Power Automate", "Power BI",
  "MES (Manufacturing Execution System)", "AI and automation", "Custom web and mobile app development",
  "Dairy farm management software", "GST e-invoicing", "e-way bill", "Malaysia e-invoicing (LHDN)",
  "Global ERP implementation", "Multi-country ERP rollout", "ERP support and managed services", "SAP consulting",
];
const ALTERNATE_NAMES = ["Impacgo", "IMPACGO Solutions", "Impacgo Solutions Private Limited", "Impacgo ERP"];

// Profiles confirmed in this project. Add more official profiles here (e.g.
// a Clutch or Microsoft partner listing) only once they're confirmed.
const SAME_AS = [
  "https://www.linkedin.com/company/impacgo-solutions-private-limited/",
];

// 1. Organization Schema — use on HOMEPAGE
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Impacgo Solutions",
  legalName: "Impacgo Solutions Private Limited",
  alternateName: ALTERNATE_NAMES,
  url: "https://www.impacgo.com",
  logo: LOGO,
  image: SHARE_IMAGE,
  foundingDate: "2020-03",
  foundingLocation: { "@type": "Place", name: "Visakhapatnam, Andhra Pradesh, India" },
  knowsAbout: KNOWS_ABOUT,
  founders: [
    {
      "@type": "Person",
      name: "Venkata Srikar Tantravahi",
    },
  ],
  email: "info@impacgo.com",
  telephone: "+91-9966477499",
  description:
    "Visakhapatnam-based Microsoft Dynamics 365 Finance and Operations (D365FO) implementation partner and Power Platform consulting firm, and the maker of Impacgo ERP (HRMS, Finance, Chain, Make, Plan, Retail and Project). Specialising in ERP implementation, AX 2012 to D365 migration, Power Apps, Power Automate, Power BI, AI and automation, and custom web and mobile development for manufacturing, distribution, retail, and enterprise clients across India and worldwide.",
  areaServed: AREA_SERVED,
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 9-29-19, Gupta Villa, Third Floor, Balaji Nagar",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    postalCode: "530003",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9966477499",
    contactType: "Customer Service",
    email: "info@impacgo.com",
    areaServed: AREA_SERVED,
    availableLanguage: ["en", "hi", "te"],
  },
  sameAs: SAME_AS,
};

// 1b. WebSite Schema — use on HOMEPAGE, tells search engines which
// organisation publishes www.impacgo.com.
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Impacgo Solutions",
  url: SITE_URL,
  inLanguage: "en",
  publisher: { "@id": ORG_ID },
};

// 2. Local Business Schema — also use on HOMEPAGE. Same @id as the
// Organization above, so search engines merge the two into one record
// (company details + office location/hours).
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Impacgo Solutions",
  alternateName: ALTERNATE_NAMES,
  description:
    "ERP software company in Visakhapatnam (Vizag), Andhra Pradesh, India: Impacgo ERP (HRMS, Finance, supply chain, manufacturing, planning, retail POS and projects), Microsoft Dynamics 365 and Power Platform implementation, and custom web and mobile apps.",
  image: SHARE_IMAGE,
  logo: LOGO,
  knowsAbout: KNOWS_ABOUT,
  hasMap: "https://www.google.com/maps/search/?api=1&query=Impacgo+Solutions+Visakhapatnam",
  "@id": ORG_ID,
  url: "https://www.impacgo.com",
  telephone: "+91-9966477499",
  email: "info@impacgo.com",
  areaServed: AREA_SERVED,
  sameAs: SAME_AS,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 9-29-19, Gupta Villa, Third Floor, Balaji Nagar",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    postalCode: "530003",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.7231,
    longitude: 83.3012,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

// 2b. Person Schema — the founder, referenced from the About page and
// available for any page that wants to establish "who is behind this" for
// E-E-A-T purposes. Deliberately minimal — only facts already established
// elsewhere on the site (organizationSchema above), nothing invented.
export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Venkata Srikar Tantravahi",
  jobTitle: "Founder & CEO",
  worksFor: {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Impacgo Solutions",
    url: SITE_URL,
  },
  url: "https://www.impacgo.com/about",
};

// 2c. Product / SoftwareApplication Schema — use one per product or Impacgo
// ERP Suite module page. Distinct from createServiceSchema (which describes
// a service Impacgo *performs*, like an implementation engagement) — this
// describes a piece of software Impacgo *builds*.
export const createProductSchema = ({
  name,
  description,
  category,
  path,
  image,
  // Optional extras (all backward compatible): other names people search
  // for, the main features, who it's for, and search phrases it covers.
  alternateName,
  featureList,
  audience,
  keywords,
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name,
  description,
  applicationCategory: category || "BusinessApplication",
  operatingSystem: "Web",
  url: `https://www.impacgo.com${path}`,
  ...(image ? { image: image.startsWith("http") ? image : `https://www.impacgo.com${image}` } : {}),
  ...(alternateName ? { alternateName } : {}),
  ...(featureList ? { featureList } : {}),
  ...(audience ? { audience: { "@type": "Audience", audienceType: audience } } : {}),
  ...(keywords ? { keywords } : {}),
  brand: {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Impacgo Solutions",
    url: SITE_URL,
  },
  publisher: { "@id": ORG_ID },
  // Deliberately no `offers`/`availability` block — these are contact-based
  // B2B products with no public self-serve pricing, so an InStock/PreOrder
  // claim would just be a guess dressed up as structured data.
});

// 3. Service Schema — use one per service page
export const createServiceSchema = ({
  serviceName,
  description,
  serviceType,
  path,
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: serviceType,
  name: serviceName,
  description: description,
  provider: {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Impacgo Solutions",
    url: SITE_URL,
  },
  areaServed: AREA_SERVED,
  url: `https://www.impacgo.com${path}`,
});

// 4. FAQ Schema — use on every service page (gets rich snippets in Google)
export const createFaqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// 5. Breadcrumb Schema — helps Google show breadcrumbs in search results
export const createBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: `https://www.impacgo.com${crumb.path}`,
  })),
});

// 6. Article Schema — use for blog posts later
export const createArticleSchema = ({
  title,
  description,
  imageUrl,
  datePublished,
  dateModified,
  authorName = "Impacgo Solutions",
  path,
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description: description,
  image: imageUrl,
  datePublished: datePublished,
  dateModified: dateModified || datePublished,
  author: {
    "@type": "Organization",
    name: authorName,
    ...(authorName === "Impacgo Solutions" ? { "@id": ORG_ID, url: SITE_URL } : {}),
  },
  publisher: {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Impacgo Solutions",
    logo: LOGO,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.impacgo.com${path}`,
  },
});