import { Link } from 'react-router-dom'

export default function FinalCTA() {
  return (
    <section className="py-48">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative glass rounded-[3rem] p-10 sm:p-16 lg:p-24 overflow-hidden text-center glow-accent border-gradient reveal-up">
          <div className="absolute inset-0 grid-pattern opacity-40"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-stocklyte-headline text-4xl sm:text-5xl lg:text-7xl font-bold mb-10 leading-tight tracking-tighter">
              Inventory on <span className="text-stocklyte-primary">Autopilot.</span>
            </h2>
            <p className="text-xl text-stocklyte-on-surface-variant mb-14 font-light">
              Join 1,200+ industry leaders reclaiming their operational margins with StockLyte Intelligence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/stocklyte/signup"
                className="shimmer-btn bg-stocklyte-primary text-stocklyte-on-primary px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all command-shadow"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="glass px-12 py-6 rounded-2xl font-bold text-xl hover:bg-stocklyte-surface-variant transition-all border-gradient"
              >
                Request Enterprise Audit
              </Link>
            </div>
            <p className="mt-12 text-[10px] font-stocklyte-data uppercase tracking-[0.4em] opacity-30">
              Instant Global Deployment • No Credit Card Required
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
