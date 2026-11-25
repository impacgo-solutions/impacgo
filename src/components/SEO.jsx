import { Helmet } from "react-helmet-async";

/**
 * Reusable SEO component for every page.
 *
 * Usage:
 *   <SEO
 *     title="Page Title | Impacgo Solutions"
 *     description="Page description for Google search results (150-160 chars)"
 *     path="/services/example"
 *     schema={someSchema}            // one JSON-LD object or an array of them
 *     image="/images/share.jpg"      // optional, ideally 1200x630
 *     imageAlt="What the image shows" // optional
 *   />
 *
 * `keywords` is still accepted so existing pages keep working, but it is no
 * longer output: Google and Bing ignore the keywords meta tag.
 */

const SITE_URL = "https://www.impacgo.com";

// Default social-sharing image, used when a page doesn't pass its own.
// public/logo.png is only 31x60px, below the minimum LinkedIn/Facebook/X
// need for a large preview card, so it's shown as a small "summary" card.
// TO UPGRADE: add a 1200x630 branded image as public/og-default.jpg, then set
// DEFAULT_SHARE_IMAGE to { url: "/og-default.jpg", width: 1200, height: 630 }.
const DEFAULT_SHARE_IMAGE = { url: "/logo.png", width: null, height: null };
const LARGE_IMAGE_MIN_WIDTH = 600;

export default function SEO({
  title,
  description,
  // eslint-disable-next-line no-unused-vars
  keywords,
  path = "",
  image,
  imageAlt,
  schema,
  type = "website",
  noindex = false,
}) {
  const fullUrl = `${SITE_URL}${path}`;
  const imagePath = image || DEFAULT_SHARE_IMAGE.url;
  const fullImage = imagePath.startsWith("http") ? imagePath : `${SITE_URL}${imagePath}`;
  const usingDefault = !image;
  const width = usingDefault ? DEFAULT_SHARE_IMAGE.width : null;
  const height = usingDefault ? DEFAULT_SHARE_IMAGE.height : null;
  // A page-specific image is assumed to be a proper large share image; the
  // default only gets the large card once it is a real 1200x630 image.
  const largeCard = !usingDefault || (width && width >= LARGE_IMAGE_MIN_WIDTH);
  const alt = imageAlt || title;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content={alt} />
      {width && <meta property="og:image:width" content={String(width)} />}
      {height && <meta property="og:image:height" content={String(height)} />}
      <meta property="og:site_name" content="Impacgo Solutions" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter / X */}
      <meta name="twitter:card" content={largeCard ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={alt} />

      {/* Robots */}
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
