import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="hero-gradient min-h-[100svh] flex items-center justify-center px-margin-mobile md:px-gutter text-center">
      <div className="space-y-6">
        <span className="font-display-lg text-display-lg-mobile md:text-display-lg text-white block">404</span>
        <h1 className="font-headline-lg text-headline-lg text-white">This pasture doesn't exist.</h1>
        <p className="text-outline-variant font-body-lg max-w-md mx-auto">
          The page you're looking for has wandered off. Let's get you back to the herd.
        </p>
        <Link
          to="/calviq"
          className="shimmer-btn inline-block px-8 py-4 font-label-md text-label-md font-bold rounded-xl bg-primary text-on-primary shadow-2xl shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
