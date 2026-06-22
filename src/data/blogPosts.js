export const blogPosts = [
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
    slug: "ax-2012-end-of-support-2028-india",
    title: "AX 2012 End of Support in 2028 — What Every Indian Enterprise Needs to Know Now",
    excerpt: "Microsoft has announced end of support for Dynamics AX 2012 by January 2028. Here's the complete migration guide for Indian enterprises...",
    category: "AX 2012 Migration",
    datePublished: "2026-05-18",
    readTime: "8 min read",
  },
];

export const getBlogPostBySlug = (slug) =>
  blogPosts.find((post) => post.slug === slug);