import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="product" className="relative overflow-hidden pt-32 pb-48 grid-pattern">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 bg-stocklyte-surface-container-high border border-stocklyte-outline-variant px-3 py-1 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stocklyte-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-stocklyte-secondary"></span>
              </span>
              <span className="text-[10px] font-stocklyte-data tracking-widest uppercase text-stocklyte-on-surface-variant">
                Live v2.4 Network Active
              </span>
            </div>
            <h1 className="font-stocklyte-headline text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] mb-8 tracking-tighter">
              Master Your Inventory. <span className="text-stocklyte-primary">Everywhere.</span> In Real-Time.
            </h1>
            <p className="text-stocklyte-on-surface-variant text-lg sm:text-xl max-w-xl mb-12 leading-relaxed font-light">
              Eliminate stockouts, end spreadsheet chaos, and reclaim your margins with the control tower built for
              modern distribution and retail teams.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                to="/stocklyte/signup"
                className="shimmer-btn bg-stocklyte-primary text-stocklyte-on-primary px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:scale-[1.02] active:scale-95 transition-all command-shadow"
              >
                Start Free Trial
              </Link>
              <button className="glass px-10 py-5 rounded-xl font-bold text-lg hover:bg-stocklyte-surface-variant transition-all border-gradient">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute -inset-20 bg-stocklyte-primary/20 blur-[120px] rounded-full opacity-50"></div>
            <div className="relative glass p-2 rounded-3xl glow-accent border-gradient floating">
              <img
                alt="StockLyte Inventory Intelligence Dashboard Mockup"
                className="rounded-2xl w-full object-cover aspect-[4/3] shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwW3cDUsASdL0ehHF3njnOrIGYWqeBDAV8_MJJWEa5J6IFbGajVIyC4rHc6v90bnQFTyjxBsFjTko5WJyIy3ocO7uLfX3-mi64sOhET7Q19uoCJWNW2MAh5E9-xpz5UFLEvNKtKlznbQ-eJbmrNmOYPGCUjzuf7BxP4vEXytxyC8yaUUjwFMcy3PQVnhhnAhIu1f5n0QdiTMdaN_SsOMjgTWeLDD7LloDPTxbLV7K9D_qlfWZvf7f2Vif90-u5vD170NkZ-JA3zaCK"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
