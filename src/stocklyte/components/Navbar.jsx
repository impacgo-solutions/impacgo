import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'

const LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Security', href: '#security' },
  { label: 'Solutions', href: '#solutions' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  // Hide the nav while scrolling down, reveal it again as soon as the user
  // scrolls up — never hide near the very top of the page, so it doesn't
  // flicker away right after load.
  useEffect(() => {
    lastScrollY.current = window.scrollY
    const handleScroll = () => {
      const currentY = window.scrollY
      const scrollingDown = currentY > lastScrollY.current
      setHidden(currentY > 120 && scrollingDown)
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 glass border-b border-stocklyte-outline-variant/20 px-6 py-4 transition-transform duration-300 ${
        hidden && !open ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="font-stocklyte-headline text-xl font-bold tracking-tight">StockLyte</span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {LINKS.map((link) => (
            <a
              key={link.label}
              className="text-xs font-stocklyte-data tracking-widest uppercase hover:text-stocklyte-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/stocklyte/signup"
            className="shimmer-btn bg-stocklyte-primary text-stocklyte-on-primary text-sm font-bold px-5 py-2.5 rounded-lg shadow-lg hover:brightness-110 transition-all command-shadow"
          >
            Get Started
          </Link>
          <button
            className="lg:hidden flex items-center justify-center size-9 text-stocklyte-on-surface"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden max-w-7xl mx-auto mt-4 flex flex-col gap-6 pb-2">
          {LINKS.map((link) => (
            <a
              key={link.label}
              className="text-xs font-stocklyte-data tracking-widest uppercase hover:text-stocklyte-primary transition-colors"
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
