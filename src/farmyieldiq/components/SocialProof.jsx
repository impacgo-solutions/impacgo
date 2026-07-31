export default function SocialProof() {
  return (
    <section className="py-16 bg-farmyieldiq-primary overflow-hidden relative fyiq-reveal">
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <pattern height="10" id="fyiq-grid" patternUnits="userSpaceOnUse" width="10">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"></path>
            </pattern>
          </defs>
          <rect fill="url(#fyiq-grid)" height="100%" width="100%"></rect>
        </svg>
      </div>
      <div className="max-w-container-max mx-auto text-center px-margin-mobile md:px-gutter relative z-10">
        <h3 className="text-white font-farmyieldiq-headline text-2xl md:text-3xl opacity-90 font-medium">
          Built for teams who owe their partners full transparency on land, livestock and payments.
        </h3>
      </div>
    </section>
  );
}
