const CASES = [
  {
    title: 'Enterprise Retail',
    desc: 'Unify flagship showrooms with global e-com inventory instantly.',
    alt: 'High-end Retail Node',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlG6kj2qmod7aXVFwWV-lyLHCIjGBAb2CHZAl8PiTfxaFE6dlS8YqvoenrWaysh7dAxmhu2L3WvW4qH5P524-wHqCMThTZirs8pZagUPcu9V6obdg-0BZEE9Lzk22ntRZriCU6fO_sGSeqOZhoz4WTGc2VHI6oaWKlTP8PbOiTv0p1cXGHHI0HYOBvkLmbsP67cS_jBM3rcSCiveFefYl_EOJmMqnLNbmoz2hBn7MzipGJtBs7uKeTdaj8mLuhAUAP04KWpAtBWbbB',
  },
  {
    title: '3PL Logistics',
    desc: 'Client-isolated vaults for third-party logistics management.',
    alt: 'Logistics Hub',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTOlVCFVWybGSO7VaCERAu6r6bIBYvsIVUjXUbos1rpEVB9_i4zDir1tpMo1lyv8cjT_6YVSDS2konCcuMO3qXmy69pN6dZRD4fqCVS50LZ67gli9N95jo6h_6s9xMsP0hPyS6GP8FGriBOXHEUNblFKgfuQJuInkUGCk6ewhJRBgoYlpE6E64DBNEcu5-KT1xhK5VOlgTSvGZex1UeH64DwWB-oelUORUgp_mHelY7OyA224zk6xSWZmtCLUlWGDYThxg1qnu5WE5',
  },
  {
    title: 'Wholesale Distro',
    desc: 'Optimize pallet-level flow across massive regional centers.',
    alt: 'Distribution Center',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnoy_B4ylyO4WC7xAVRkesTyEBV5xMqs4zcJJWUyBHpyqFusfd38gVmy--81NfnG62tOMKu0maisBbb-00FTnD9OLwnfCjOfho5N3_mLbZvqqOwM9c0yP1tRt8w5PO6XdAFlA8YPdwTGp-lmwgc6NJxWmFq91PDbNandwtJE1u8Nq3wqJMxsMmX5PSaJfYQn9O6zWBh3zMQtZrl5gHkrtW_TnnmZ9QSAQOb1jn80umqAf79qsBCnryp0VqE8AqU1yiLkwHeem2tu8E',
  },
  {
    title: 'Scaling Teams',
    desc: 'Industrial tools for agile teams graduating from manual sheets.',
    alt: 'Tech-forward SMB',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQNkCTU4PgFOP6441GlL5MhiBWdUfxI1ZSwVJJBUNRNA_qvZ-k7hIHGoGbVQvYcUWDb4tWLOLNumUbQ0CX_5219jGiLhu_JIsBgM7qYv_Fix7ZlhBQ1Tc3ThCinV33-22XqdO1lBcDDxHX8rtHqCPmOuBr1T_aBJa5DxYVlO4ZL1VNnh4PZ4W2bodi21JuFW5e4XoK2LFVUBmdvapnQSBiaelG2_yyON_U8iluELbRAANBoBkIQ8fdRnE96qXTDPJuBfAATW5PNeiQ',
  },
]

export default function UseCases() {
  return (
    <section id="solutions" className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-stocklyte-headline text-4xl md:text-6xl font-bold text-center mb-24 tracking-tight reveal-up">
          Built for Global Scale
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 reveal-up">
          {CASES.map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-3xl aspect-[3/4] border-gradient">
              <img
                alt={c.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src={c.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stocklyte-background via-stocklyte-background/40 to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <h4 className="text-xl font-bold mb-3 font-stocklyte-headline">{c.title}</h4>
                <p className="text-sm text-stocklyte-on-surface-variant leading-relaxed font-light">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
