import Logo from './Logo.jsx'
import Icon from './Icon.jsx'

const COLUMNS = [
  {
    title: 'Systems',
    links: ['Command Center', 'Vision App', 'Native APIs', 'Pricing'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Case Studies', 'Security Hub', 'Changelog'],
  },
  {
    title: 'Governance',
    links: ['Privacy', 'Terms of Ops', 'Uptime SLA', 'Compliance'],
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
                href="#"
              >
                <Icon name="public" className="text-sm" />
              </a>
              <a
                className="size-10 glass rounded-xl flex items-center justify-center hover:text-stocklyte-primary transition-colors border-gradient"
                href="#"
              >
                <Icon name="alternate_email" className="text-sm" />
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
                  <li key={link}>
                    <a className="hover:text-stocklyte-primary transition-colors" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-stocklyte-outline-variant/5 text-[10px] text-stocklyte-on-surface-variant font-stocklyte-data tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} StockLyte impacgo. (A Global Ledger Entity)</p>
          <div className="flex items-center gap-8">
            <span>Region: GLOBAL_AWS_01</span>
            <span className="flex items-center gap-2 text-stocklyte-secondary">
              <span className="size-2 bg-stocklyte-secondary rounded-full animate-pulse"></span>
              Status: Nominal
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
