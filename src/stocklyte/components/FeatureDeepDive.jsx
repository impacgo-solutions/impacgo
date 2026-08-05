import Icon from './Icon.jsx'

export default function FeatureDeepDive() {
  return (
    <section id="features" className="py-32">
      <div className="max-w-7xl mx-auto px-6 space-y-48">
        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-24 reveal-up">
          <div className="lg:w-1/2">
            <h3 className="font-stocklyte-headline text-4xl sm:text-5xl font-bold mb-8 tracking-tight">
              Command Center Dashboard
            </h3>
            <p className="text-stocklyte-on-surface-variant text-lg mb-10 leading-relaxed font-light">
              One source of truth for every location. Monitor stock health and inventory movement across
              all your warehouses and stores from a single dashboard.
            </p>
            <ul className="space-y-5">
              <li className="flex items-center gap-3">
                <Icon name="check_circle" className="text-stocklyte-secondary text-xl" />
                <span className="font-medium">Live inventory valuation across every location</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="check_circle" className="text-stocklyte-secondary text-xl" />
                <span className="font-medium">Critical stock-out threshold notifications</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="check_circle" className="text-stocklyte-secondary text-xl" />
                <span className="font-medium">Real-time, multi-location stock visibility</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 glass p-3 rounded-3xl glow-accent border-gradient">
            <img
              alt="StockLyte Visual Intelligence Panel"
              className="rounded-2xl w-full shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMJyGxGRKjdOJbAkm4Uimp4LmueFi35vYC0gupq6QAwWIksqVAwqObwuN5sGLZX8eG_1Gt0pajs-gq8p7kb8IlWzNhdhMa-7NqXTHJsbuFz0cNpZaI6sj7zDA75kG6ONIvx45NaQxhWAmVfzjmFpVhdaWICKGMoJguuGcBgdCWuPHTiyRuVzFZKYZafdGKuUwaZA4XFiR3-hfUPK9ctZiyqGbbM4mKfFpkKv_E0dpAVTeqURGkDqVqkjF3XF8ojO-gWvyosl2mgL6N"
            />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-24 reveal-up">
          <div className="lg:w-1/2">
            <h3 className="font-stocklyte-headline text-4xl sm:text-5xl font-bold mb-8 tracking-tight">Built for Fast-Moving Warehouses</h3>
            <p className="text-stocklyte-on-surface-variant text-lg mb-10 leading-relaxed font-light">
              Designed for high-throughput environments, with scanning that stays reliable even on degraded labels
              or in low-light conditions.
            </p>
            <div className="p-6 glass rounded-2xl border-gradient font-stocklyte-data text-xs leading-relaxed command-shadow">
              <div className="flex justify-between border-b border-stocklyte-outline-variant/30 pb-3 mb-4">
                <span className="text-stocklyte-primary font-bold">STREAM_EVENT::SCAN_ACK</span>
                <span className="text-stocklyte-secondary">SYSTEM_READY</span>
              </div>
              <div className="text-stocklyte-on-surface-variant space-y-1">
                <div>
                  SKU: <span className="text-stocklyte-primary font-bold">VX-9940-BLK-ULTRA</span>
                </div>
                <div>
                  QTY: <span className="text-stocklyte-secondary font-bold">+128 UNITS</span>
                </div>
                <div>
                  DST: <span className="text-stocklyte-on-surface font-bold">NODE_01_BAY_Z</span>
                </div>
                <div>
                  LAT: <span className="text-stocklyte-tertiary">12ms</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 glass p-3 rounded-3xl glow-accent border-gradient">
            <img
              alt="Precision Scanning Interface"
              className="rounded-2xl w-full shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5GgLJ5g6xinSinIHwkgEusxFIeyFjxUdA_2YIBdWJTsNzZg1dVLx39jeDzjAS-qTn5_CTL0gIq2Puw_XJLTxe-7HE1h2Burjndm7ttPUBcJVgWxUTDF3bqN8QE3NNvTMP15gAZeVPI1hyUhDVdvs5h-ovGeuD6esw4GWbzDFp_4jvGYuhSbh-FxxCfygG3SXgqJpeszmti_dwyXhh52-PM0jYjePVZpFSLy4SmUDLPhPI9O5tPBN9Rt5-vp_ecSkYF8KteoOSsOWq"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
