import { Layers, Map } from "lucide-react";
import ProductGuideArticle from "./ProductGuideArticle";

const article = {
  slug: "farmland-plot-management-software",
  seoTitle: "Farmland Plot Management Software: Track Layouts, Partners & Plot Sales",
  seoDescription:
    "How managed farmland and plotted-land businesses track layouts, plots, partner payments, documents and sales in one system instead of spreadsheets, and what software features to look for.",
  title: "Farmland Plot Management Software: How Managed Farmland Businesses Track Plots, Partners and Sales",
  excerpt:
    "Managed farmland businesses juggle layouts, plot payments, partner paperwork and a sales team — usually across spreadsheets and chat threads. Here is what a single plot management system should cover, and how to move to one.",
  crumb: "Farmland Plot Management Software",
  badge: "Farmland Operations Guide",
  BadgeIcon: Layers,
  category: "FarmYieldIQ",
  datePublished: "2026-11-25",
  publishedLabel: "November 2026",
  readTime: "8 min read",
  theme: {
    hero: "from-emerald-50 via-lime-50 to-amber-50",
    badge: "bg-amber-100 border-amber-300",
    badgeIcon: "text-amber-700",
    badgeText: "text-amber-900",
    callout: "bg-amber-50 border-amber-500",
    calloutTitle: "text-amber-900",
    calloutText: "text-amber-800",
    accentText: "text-emerald-600",
    numberBadge: "bg-emerald-100 text-emerald-700",
    cta: "from-emerald-700 to-amber-700",
    ctaMuted: "text-amber-50",
    ctaButtonText: "text-emerald-700",
  },
  lead:
    "A managed farmland business runs on three things at once: land (layouts, blocks and plots), people who own or invest in those plots, and a sales team selling the next ones. In most companies, each of those lives in a different spreadsheet.",
  intro: [
    "This guide explains what farmland plot management software should cover, why spreadsheets and chat threads cause disputes and lost sales, and how to move your layouts, partners and team onto one system.",
  ],
  callout: {
    Icon: Map,
    title: "The short version",
    text: "Put layouts, plots, partner payments, documents and the sales pipeline in one system, and let partners check their own plot status instead of calling the office.",
  },
  sections: [
    {
      id: "the-problem",
      title: "Where plotted-land businesses lose control",
      cards: [
        { title: "a) Plots and payments in spreadsheets", text: "Plot pricing, paid and balance amounts and registration status are spread across sheets, with no single source of truth." },
        { title: "b) Partner documents scattered everywhere", text: "Certificates, agreements and invoices sit in email threads and local folders, so nobody can check a partner’s paperwork quickly." },
        { title: "c) Sales follow-ups fall through", text: "Leads, follow-ups and bookings are tracked in notebooks and chat groups instead of one pipeline the whole team can see." },
      ],
    },
    {
      id: "what-to-track",
      title: "What farmland plot management software should cover",
      numbered: [
        "Land hierarchy — layout → block → plot, with area, facing and pricing",
        "Live payment and registration status for every plot",
        "Optional crop details per plot, such as crop type and plant count",
        "Partner profiles that hold each partner’s plots, documents and payment history",
        "A sales pipeline from lead to booking, with team hierarchy, targets and commissions",
        "Employees, roles and access control, plus staff travel-expense approvals",
        "Dashboards and reports across all layouts",
      ],
    },
    {
      id: "partner-transparency",
      title: "Why partner transparency matters",
      paragraphs: [
        "Partners who have paid for a plot want to know its status, their payment history and that their documents are in order. When the only way to find out is to call the office, every question costs staff time — and every slow answer erodes trust.",
        "A partner profile that the partner can check themselves, on a phone, turns those calls into self-service and makes the business easier to trust and recommend.",
      ],
    },
    {
      id: "how-farmyieldiq-does-it",
      title: "How FarmYieldIQ handles it",
      paragraphs: [
        [
          { to: "/farmyieldiq", label: "FarmYieldIQ" },
          " is the operations platform for plotted-land businesses, built by Impacgo Solutions. One dashboard connects layouts, plots, partners and the sales team.",
        ],
      ],
      bullets: [
        { strong: "Layouts, blocks and plots", text: "with pricing, area, facing, optional crop details and live payment and registration status." },
        { strong: "Partner profiles", text: "bring plots, documents and payment history into one view, with a central document vault." },
        { strong: "Sales pipeline", text: "for leads, follow-ups and bookings across your hierarchy — sales associate to branch and regional leadership — with targets and commissions." },
        { strong: "Employees and roles", text: "with role-based access, plus travel expenses submitted, approved and reimbursed digitally." },
        { strong: "Web dashboard and mobile app:", text: "admins and sales teams on the web, field staff and partners on mobile." },
      ],
      after: ["Pricing is a custom plan scoped to your layouts, plots, partners and sales headcount, with dedicated onboarding support."],
    },
    {
      id: "getting-started",
      title: "From spreadsheets to one dashboard in three steps",
      steps: [
        { title: "Digitize your layouts", text: "Set up layouts, blocks and plots with pricing, area, facing and crop details." },
        { title: "Onboard team and partners", text: "Invite employees with role-based access and add a profile for every partner holding a plot." },
        { title: "Run sales and operations", text: "Track leads through to bookings, log expenses and manage everything from one dashboard." },
      ],
    },
  ],
  cta: {
    afterSection: 3,
    badge: "See FarmYieldIQ in Action",
    title: "Run land, partners and sales from one place",
    text: "Layouts, plots, partner portfolios and your sales pipeline in a single dashboard, with a mobile app for the field and your partners.",
    primary: { to: "/farmyieldiq", label: "Explore FarmYieldIQ" },
    secondary: { to: "/contact", label: "Talk to Our Team" },
  },
  bottomLine: [
    "Plotted-land businesses grow on trust: partners need to see that their plot, payments and documents are handled properly, and sales teams need one pipeline instead of scattered chats.",
    [
      "Farmland plot management software brings both into one system. ",
      { to: "/farmyieldiq", label: "Explore FarmYieldIQ" },
      " to see it with your own layouts.",
    ],
  ],
  faqs: [
    {
      question: "What is farmland plot management software?",
      answer:
        "It is software for managed farmland and plotted-land businesses that tracks layouts, blocks and plots together with partner payments, documents and the sales pipeline in one system.",
    },
    {
      question: "Can partners check their own plot status?",
      answer:
        "In FarmYieldIQ, yes. Each partner profile shows their plots, documents and payment history, and partners can access it through the mobile app.",
    },
    {
      question: "Can it manage our sales team and commissions?",
      answer:
        "Yes. FarmYieldIQ runs leads, follow-ups and bookings through a pipeline with your sales hierarchy, targets and commissions.",
    },
    {
      question: "Can we record crops grown on each plot?",
      answer:
        "Yes. Each plot can carry optional cropping details such as crop type and plant count alongside its pricing, payment and registration status.",
    },
    {
      question: "How long does it take to get started?",
      answer:
        "Setup is three steps — digitize layouts, onboard team and partners, then run sales and operations — and takes far less than months.",
    },
  ],
  related: {
    to: "/farmyieldiq",
    label: "Explore FarmYieldIQ",
    text: "The operations platform for plotted-land businesses: layouts, plots, partners and sales in one dashboard.",
  },
};

export default function FarmlandPlotManagementBlog() {
  return <ProductGuideArticle article={article} />;
}
