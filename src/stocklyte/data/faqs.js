// StockLyte FAQs: shown on the /stocklyte page (components/FAQ.jsx) AND sent
// to search engines as FAQPage structured data (StockLyteApp.jsx).
export const STOCKLYTE_FAQS = [
  {
    q: 'What is StockLyte?',
    a: 'StockLyte is real-time inventory management software by Impacgo Solutions. It tracks stock across all your warehouses and stores in one command center dashboard, with barcode scanning, low-stock alerts, audit trails and automated reports.',
    open: true,
  },
  {
    q: 'How long does implementation take?',
    a: 'We work with you to migrate your existing multi-store SKU data and get your team onboarded with minimal disruption to day-to-day operations.',
  },
  {
    q: 'Can I manage inventory across multiple warehouses and stores?',
    a: 'Yes. StockLyte syncs inventory across every location in real time and shows stock health, inventory movement and live inventory valuation for all your warehouses and stores in a single dashboard.',
  },
  {
    q: 'Do I need special barcode scanners?',
    a: 'No. StockLyte scans SKUs with standard mobile hardware, and scanning stays reliable even on degraded labels or in low light.',
  },
  {
    q: 'Does it work with poor or no connectivity?',
    a: 'StockLyte is built with a local-first architecture — scans taken in low or no connectivity are cached on the device and sync automatically once connection is restored.',
  },
  {
    q: 'How does StockLyte help prevent stockouts and expiry losses?',
    a: 'It sends critical stock-out threshold notifications, and for perishable goods it enforces FIFO and raises real-time freshness alerts to avoid expiry losses.',
  },
  {
    q: 'Can I control what each team member can do?',
    a: 'Yes. Role-based access gives every team member granular permissions, and a detailed, timestamped audit trail logs every inventory change.',
  },
  {
    q: 'Can it integrate with our other systems?',
    a: 'Yes. Instead of manual CSV imports, StockLyte offers a bi-directional native API for connecting your other business systems.',
  },
  {
    q: 'Can it scale as we add locations?',
    a: 'Yes — the platform is built on cloud-native infrastructure designed to add new warehouses, storefronts, and stock locations as your business grows.',
  },
];
