import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Home, Search, ArrowRight } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HELPFUL_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/#services" },
  { name: "Blog", path: "/blog" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEO
        title="Page Not Found | Impacgo Solutions"
        description="The page you're looking for doesn't exist or has moved."
        path={location.pathname}
        noindex
      />

      <ScrollToTop />
      <Header alwaysSolid />

      <main className="flex-grow flex items-center justify-center px-6 py-32">
        <div className="max-w-xl w-full text-center">
          <p className="text-7xl md:text-8xl font-extrabold text-blue-600 mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Page not found
          </h1>
          <p className="text-gray-600 leading-relaxed mb-10">
            The page you're looking for doesn't exist or may have moved.
            Double-check the link, or use one of the shortcuts below.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all inline-flex items-center justify-center"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </button>
            <button
              onClick={() => navigate("/blog")}
              className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all inline-flex items-center justify-center"
            >
              <Search className="mr-2 h-5 w-5" />
              Browse the Blog
            </button>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-4">
              Or try one of these
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {HELPFUL_LINKS.map((link) =>
                link.path.startsWith("/#") ? (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-blue-600 hover:underline font-medium inline-flex items-center"
                  >
                    {link.name}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-blue-600 hover:underline font-medium inline-flex items-center"
                  >
                    {link.name}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
