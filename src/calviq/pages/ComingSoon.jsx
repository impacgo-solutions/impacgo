import { Link } from 'react-router-dom';

export default function ComingSoon() {
  return (
    <section className="hero-gradient min-h-[100svh] flex items-center justify-center px-margin-mobile md:px-gutter text-center">
      <div className="space-y-6">
        <span className="material-symbols-outlined text-white text-6xl block">phone_iphone</span>
        <h1 className="font-headline-lg text-headline-lg text-white">Mobile App Coming Soon</h1>
        <p className="text-outline-variant font-body-lg max-w-md mx-auto">
          We're putting the finishing touches on the CALVIQ mobile app. Check back soon, or use the web app in the
          meantime.
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
