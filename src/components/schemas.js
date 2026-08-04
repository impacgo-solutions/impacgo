/**
 * Structured Data (JSON-LD) schemas for SEO.
 * These help Google understand your business and improve rich results in search.
 */

// 1. Organization Schema — use on HOMEPAGE
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Impacgo Solutions",
  legalName: "Impacgo Solutions Private Limited",
  url: "https://www.impacgo.com",
  logo: "https://www.impacgo.com/logo.png",
  foundingDate: "2020-03",
  founders: [
    {
      "@type": "Person",
      name: "Venkata Srikar Tantravahi",
    },
  ],
  description:
    "Visakhapatnam-based Microsoft Dynamics 365 Finance and Operations (D365FO) implementation partner and Power Platform consulting firm. Specialising in D365FO ERP implementation, AX 2012 to D365 migration, Power Apps, Power Automate, Power BI, and AI Builder for manufacturing, distribution, and enterprise clients across India.",
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
    telephone: "+91-9866323418",
    contactType: "Customer Service",
    email: "srikar@impacgo.com",
    areaServed: "IN",
    availableLanguage: ["en", "hi", "te"],
  },
  sameAs: [
    "https://www.linkedin.com/company/impacgo-solutions-private-limited/",
  ],
};

// 2. Local Business Schema — also use on HOMEPAGE
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Impacgo Solutions",
  image: "https://www.impacgo.com/logo.png",
  "@id": "https://www.impacgo.com",
  url: "https://www.impacgo.com",
  telephone: "+91-9866323418",
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
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "Impacgo Solutions",
    url: "https://www.impacgo.com",
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
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name,
  description,
  applicationCategory: category || "BusinessApplication",
  operatingSystem: "Web",
  url: `https://www.impacgo.com${path}`,
  ...(image ? { image: image.startsWith("http") ? image : `https://www.impacgo.com${image}` } : {}),
  brand: {
    "@type": "Organization",
    name: "Impacgo Solutions",
    url: "https://www.impacgo.com",
  },
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
    name: "Impacgo Solutions",
    url: "https://www.impacgo.com",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
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
  },
  publisher: {
    "@type": "Organization",
    name: "Impacgo Solutions",
    logo: {
      "@type": "ImageObject",
      url: "https://www.impacgo.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.impacgo.com${path}`,
  },
});