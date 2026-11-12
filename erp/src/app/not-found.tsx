import type { Metadata } from "next";
import Link from "next/link";
import "./site.css";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ArrowRight } from "@/components/site/icons";
import { button, container, type } from "@/components/site/Section";
import { MAIN_SITE } from "@/lib/base-path";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

/* Any unknown /erp-suite/* URL: the ERP's own header and footer instead of Next's default 404. */
export default function NotFound() {
  return (
    <div className="site-grain overflow-x-clip">
      <Header />
      <main className="bg-[radial-gradient(60%_50%_at_50%_30%,#eef1ff,#ffffff_70%)]">
        <div className={`${container} flex min-h-[78svh] flex-col items-center justify-center pt-28 pb-20 text-center`}>
          <p className={type.eyebrow}>404</p>
          <h1 className={`${type.h2} pt-3`}>Page not found</h1>
          <p className={`${type.lead} max-w-[520px] pt-5`}>The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-10">
            <Link href="/" className={button.primary}>
              Go to Impacgo ERP <ArrowRight />
            </Link>
            {/* Plain <a>: the main site is outside this app's basePath. */}
            <a href={MAIN_SITE.home} className={button.secondary}>
              Impacgo home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
