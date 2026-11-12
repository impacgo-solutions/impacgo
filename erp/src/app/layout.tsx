import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ContactModal } from "@/components/site/ContactModal";
import { INTRO_SKIP_SCRIPT } from "@/lib/intro";
import { OG_DEFAULTS } from "@/lib/seo";
import { SITE_SCRIPTS } from "@/lib/site-scripts";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Impacgo ERP: one platform to run your entire business", template: "%s · Impacgo" },
  description: "Impacgo ERP connects HR, finance, supply chain, manufacturing, planning, retail and projects in one integrated, multi-tenant platform.",
  // Absolute URLs throughout: this app lives at www.impacgo.com/erp-suite (basePath).
  metadataBase: new URL("https://www.impacgo.com"),
  openGraph: OG_DEFAULTS,
  twitter: { card: "summary" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the head script may add data-intro-skip to <html> before hydration.
    <html lang="en" className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* Runs once per full page load, before first paint — see <Intro>. */}
        <script dangerouslySetInnerHTML={{ __html: INTRO_SKIP_SCRIPT }} />
        {/* Analytics + chat, same as the main site (deferred — see lib/site-scripts.ts). */}
        <script dangerouslySetInnerHTML={{ __html: SITE_SCRIPTS }} />
      </head>
      <body className="flex min-h-full flex-col">
        {children}
        {/* "Book a demo" / "Talk to our team" popup, opened by any <a href="#contact"> on any page. */}
        <ContactModal />
      </body>
    </html>
  );
}
