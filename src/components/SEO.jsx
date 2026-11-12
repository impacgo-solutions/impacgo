import { Helmet } from "react-helmet-async";

/**
 * Reusable SEO component for every page.
 *
 * Usage:
 *   <SEO
 *     title="Page Title | Impacgo Solutions"
 *     description="Page description for Google search results (150-160 chars)"
 *     keywords="keyword1, keyword2, keyword3"
 *     path="/services/example"
 *     schema={someSchema}
 *   />
 */
export default function SEO({
  title,
  description,
  keywords,
  path = "",
  image = "/logo.png",
  schema,
  type = "website",
  noindex = false,
}) {
  const siteUrl = "https://www.impacgo.com";
  const fullUrl = `${siteUrl}${path}`;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Impacgo Solutions" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Robots */}
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Language & Geo (helps with India-specific ranking) */}
      <meta httpEquiv="Content-Language" content="en-IN" />
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Visakhapatnam" />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}