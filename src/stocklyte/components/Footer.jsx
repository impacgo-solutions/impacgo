import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'

// Every footer link points at a real section of the StockLyte page or a real
// Impacgo page. Section links (#...) stay as plain anchors; routes use Link.
const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Overview', href: '#product' },
      { label: 'Features', href: '#features' },
      { label: 'Security', href: '#security' },
      { label: 'Solutions', href: '#solutions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Impacgo', to: '/about' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
      { label: 'Get Started', to: '/stocklyte/signup' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-stocklyte-surface-container-lowest pt-24 pb-12 border-t border-stocklyte-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Logo />
              <span className="font-stocklyte-headline text-2xl font-bold tracking-tight">StockLyte</span>
            </div>
            <p className="text-stocklyte-on-surface-variant max-w-sm mb-10 font-light leading-relaxed">
              The intelligent control tower for hyper-scale supply chains. Precision stock control, engineered for
              speed.
            </p>
            <div className="flex gap-4">
              <a
                className="size-10 glass rounded-xl flex items-center justify-center hover:text-stocklyte-primary transition-colors border-gradient"
                href="/"
                aria-label="Impacgo website"
                title="Impacgo website"
              >
                <Icon name="public" className="text-sm" />
              </a>
              <a
                className="size-10 glass rounded-xl flex items-center justify-center hover:text-stocklyte-primary transition-colors border-gradient"
                href="mailto:info@impacgo.com"
                aria-label="Email us"
                title="Email us"
              >
                <Icon name="alternate_email" className="text-sm" />
              </a>
              <a
                className="size-10 glass rounded-xl flex items-center justify-center hover:text-stocklyte-primary transition-colors border-gradient"
                href="tel:+919966477499"
                aria-label="Call us: +91 99664 77499"
                title="Call us: +91 99664 77499"
              >
                <Icon name="call" className="text-sm" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h5 className="font-bold mb-8 font-stocklyte-headline text-xs uppercase tracking-[0.2em] opacity-40">
                {col.title}
              </h5>
              <ul className="space-y-5 text-stocklyte-on-surface-variant text-sm font-medium">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link className="hover:text-stocklyte-primary transition-colors" to={link.to}>
                        {link.label}
                      </Link>
                    ) : (
                      <a className="hover:text-stocklyte-primary transition-colors" href={link.href}>
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-stocklyte-outline-variant/5 text-[10px] text-stocklyte-on-surface-variant font-stocklyte-data tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} StockLyte by Impacgo Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
