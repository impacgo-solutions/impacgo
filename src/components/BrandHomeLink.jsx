import { Link } from 'react-router-dom';

// "Impacgo" breadcrumb prefix shown first in every product sub-app's navbar
// (CALVIQ, StockLyte, FarmYieldIQ, HealthVault), so a visitor never loses
// the thread that they're still on the Impacgo site while browsing a
// product with its own completely different look — and can get back with
// one click. Deliberately plain text rather than a logo/pill badge: a badge
// reads as a certification/partner mark, not as something to click, whereas
// "Impacgo / ProductName" reads immediately as a "you are here" breadcrumb,
// the same pattern used across most multi-product companies' sites.
//
// No fixed color of its own — each navbar has its own theme (color tokens,
// and whether the bar is transparent-over-a-dark-hero or always-solid), so
// the calling navbar passes classes that make sense against its own current
// background via `className`.
export default function BrandHomeLink({ className = '' }) {
  return (
    <Link
      to="/"
      className={`shrink-0 font-medium tracking-tight underline-offset-4 hover:underline transition-colors ${className}`}
    >
      Impacgo
    </Link>
  );
}
