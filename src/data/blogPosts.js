export const blogPosts = [

  // GST E-Invoicing in D365FO (Blog #11) - NEWEST
  {
    slug: "gst-e-invoicing-in-dynamics-365-finance-operations",
    title: "GST E-Invoicing in Dynamics 365 Finance & Operations: A Practical Setup Guide for 2026",
    excerpt: "The ₹5 crore threshold, the 30-day IRP reporting rule, and how to set up e-invoicing and e-way bills in Dynamics 365 Finance & Operations step by step — plus the pitfalls that cause rejections in live environments.",
    category: "GST Compliance",
    datePublished: "2026-11-10",
    readTime: "9 min read",
  },

  // AX 2012 to D365FO Upgrade Checklist (Blog #12)
  {
    slug: "ax-2012-to-d365-finance-operations-upgrade-checklist",
    title: "AX 2012 to Dynamics 365 Finance & Operations: A Step-by-Step Upgrade Checklist",
    excerpt: "A four-phase checklist for moving from Dynamics AX 2012 to Dynamics 365 Finance & Operations — supported versions, upgrade vs re-implementation, customizations, integrations, data upgrade and cutover.",
    category: "AX 2012 Migration",
    datePublished: "2026-11-10",
    readTime: "10 min read",
  },

  // Copilot in D365FO (Blog #10)
  {
    slug: "copilot-in-dynamics-365-finance-operations",
    title: "Microsoft Copilot in Dynamics 365 F&O: What It Actually Does in 2026",
    excerpt: "A practical look at what Microsoft Copilot actually does inside Dynamics 365 Finance and Operations today — AI-assisted collections, variance analysis, and natural-language queries — and where it stops short of replacing reporting or automation.",
    category: "D365FO + AI",
    datePublished: "2026-08-11",
    readTime: "10 min read",
  },

  // D365 for Distribution & Wholesale (Blog #9)
  {
    slug: "d365-for-distribution-wholesale-businesses",
    title: "Dynamics 365 F&O for Distribution & Wholesale Businesses: A Complete Guide",
    excerpt: "How Microsoft Dynamics 365 Finance and Operations handles multi-warehouse inventory, trade agreement pricing, B2B integrations, and Indian GST compliance for distributors and wholesalers.",
    category: "D365FO Distribution",
    datePublished: "2026-07-21",
    readTime: "11 min read",
  },

  // Calviq Dairy Farm Management (Blog #8)
  {
    slug: "calviq-dairy-farm-management",
    title: "Calviq: How QR-Based Cattle Tracking Is Modernizing Dairy Farm Management",
    excerpt: "How Calviq replaces paper herd registers with QR-based cattle tracking — giving every cow a digital identity for milk production, health records, and breeding history, accessible from a phone in the field.",
    category: "Calviq",
    datePublished: "2026-07-14",
    readTime: "9 min read",
  },

  // D365FO Modules for Indian Manufacturers (Blog #7)
  {
    slug: "d365fo-modules-for-indian-manufacturers",
    title: "D365FO Modules for Indian Manufacturers: Complete Guide for 2026",
    excerpt: "Explore the most important D365FO modules used by Indian manufacturers including Finance, Supply Chain Management, Production Control, Warehouse Management, Quality Management, Asset Management, and Master Planning. Learn how these modules improve productivity, compliance, inventory control, and operational efficiency.",
    category: "D365FO Manufacturing",
    datePublished: "2026-06-22",
    readTime: "12 min read",
  },
   
  // Power Automate for D365FO (Blog #6) -
  {
    slug: "power-automate-for-d365fo",
    title: "Power Automate for D365FO: Streamline Approvals, Notifications, and Business Workflows",
    excerpt: "Learn how Power Automate integrates with D365FO to automate repetitive tasks, streamline approvals, trigger notifications, and connect business systems. Discover how low-code automation improves productivity and operational efficiency.",
    category: "Power Automate",
    datePublished: "2026-06-25",
    readTime: "8 min read",
  },

   // Power Apps for D365FO (Blog #5)
  {
    slug: "power-apps-for-d365fo",
    title: "Power Apps for D365FO: Extending Dynamics 365 Finance & Operations with Low-Code Applications",
    excerpt: "Discover how Microsoft Power Apps extends D365FO with custom applications, process automation, and mobile solutions. Learn about integration methods, real-world use cases, key benefits, and best practices for successful Power Apps implementations.",
    category: "Power Platform",
    datePublished: "2026-06-18",
    readTime: "12 min read", 
  },
   // D365FO vs SAP vs Oracle NetSuite (Blog #4)
  {
    slug: "d365fo-vs-sap-s4hana-vs-oracle-netsuite",
    title: "D365FO vs SAP S/4HANA vs Oracle NetSuite: Which ERP Should Growing Enterprises Choose in 2026?",
    excerpt: "Compare Microsoft Dynamics 365 Finance & Operations, SAP S/4HANA, and Oracle NetSuite. Learn which ERP platform is best for manufacturing, scalability, implementation, and business growth in 2026.",
    category: "ERP Comparison",
    datePublished: "2026-06-02",
    readTime: "10 min read",
  },
  // Excel to Power BI (Blog #3)
  {
    slug: "replace-excel-reporting-with-power-bi-d365fo",
    title: "How to Replace Excel Reporting with Power BI in D365FO — A Practical Guide for Finance Teams",
    excerpt: "Stop closing your month-end with Excel. Here's how finance teams replace spreadsheet-based reporting with live Power BI dashboards connected to Dynamics 365 F&O — including the 5 essential dashboards, a 4-8 week implementation roadmap, and common mistakes to avoid.",
    category: "Power BI",
    datePublished: "2026-05-20",
    readTime: "11 min read",
  },

  // D365FO Implementation Timeline
  {
    slug: "how-long-does-d365fo-implementation-take",
    title: "How Long Does a D365FO Implementation Take? A Realistic Timeline Guide for 2026",
    excerpt: "Microsoft Dynamics 365 Finance & Operations implementation timeline guide. Realistic durations for SMEs, mid-market, and global enterprises. Honest insights from a D365FO developer covering phase-by-phase breakdown, what speeds up projects, and what slows them down.",
    category: "D365 Implementation",
    datePublished: "2026-05-19",
    readTime: "12 min read",
  },

  // AX 2012 End of Support
  {
    slug: "ax-2012-end-of-support-india",
    title: "AX 2012 Is Out of Support: What Indian Enterprises Need to Do Now",
    excerpt: "Microsoft ended extended support for Dynamics AX 2012 R3 on 10 January 2023. What running unsupported AX 2012 means for security and GST compliance — and how Indian enterprises should plan the move to D365 Finance & Operations.",
    category: "AX 2012 Migration",
    datePublished: "2026-05-18",
    readTime: "8 min read",
  },
];

export const getBlogPostBySlug = (slug) =>
  blogPosts.find((post) => post.slug === slug);