import { Link } from 'react-router-dom';
import aiBcsVisualization from '../assets/images/ai-bcs-visualization.png';

export default function AISpotlight() {
  return (
    <section className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-dark-base overflow-hidden">
      <div className="max-w-container-max mx-auto reveal-up">
        <div className="ai-card-gradient p-1 md:p-1.5 rounded-[1.75rem] sm:rounded-[2.25rem] md:rounded-[3rem] shadow-2xl transition-all duration-700 hover:shadow-primary/40">
          <div className="bg-dark-base/40 backdrop-blur-3xl rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.8rem] p-6 sm:p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full -mr-40 -mt-40"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
              <div className="space-y-6 md:space-y-10">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 text-white font-label-sm tracking-widest border border-white/20">
                  <span className="material-symbols-outlined text-lg animate-pulse text-secondary-fixed">bolt</span>
                  AI-POWERED DIAGNOSTICS
                </div>
                <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-white">
                  Body Condition Scoring (BCS) via Vision AI
                </h2>
                <p className="text-white/80 font-body-lg leading-relaxed">
                  Precision nutrition starts with objective measurement. Our AI analyzes smartphone imagery to provide
                  BCS scores on a 1.0 to 5.0 scale, identifying health risks before they impact your bottom line.
                </p>
                <div className="flex gap-8 sm:gap-12 pt-4 border-t border-white/10">
                  <div className="text-white">
                    <span className="block text-4xl font-extrabold text-secondary-fixed transition-transform hover:scale-110 origin-left cursor-default">
                      ±0.1
                    </span>
                    <span className="text-xs uppercase tracking-widest opacity-60">Accuracy</span>
                  </div>
                  <div className="text-white">
                    <span className="block text-4xl font-extrabold text-secondary-fixed transition-transform hover:scale-110 origin-left cursor-default">
                      1.2s
                    </span>
                    <span className="text-xs uppercase tracking-widest opacity-60">Analysis Time</span>
                  </div>
                </div>
                <Link
                  to="/calviq/demo"
                  className="shimmer-btn block sm:inline-block text-center px-6 py-4 sm:px-10 sm:py-5 bg-white text-dark-base font-bold rounded-2xl hover:bg-secondary-fixed transition-all shadow-2xl shadow-white/10 active:scale-95"
                >
                  Request AI Beta Access
                </Link>
              </div>
              <div className="relative group">
                <div className="bg-black/60 border border-white/20 rounded-3xl p-3 sm:p-5 backdrop-blur-md overflow-hidden relative shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    alt="AI BCS visualization"
                    className="w-full rounded-xl shadow-inner brightness-90 group-hover:brightness-100 transition-all duration-700"
                    src={aiBcsVisualization}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 left-3 sm:top-8 sm:left-8 bg-secondary px-3 py-1.5 sm:px-5 sm:py-2 rounded-lg sm:rounded-xl shadow-xl border border-white/20 animate-bounce">
                    <span className="text-white font-extrabold text-sm sm:text-xl">BCS: 3.25</span>
                  </div>
                  <div className="absolute bottom-3 right-3 sm:bottom-8 sm:right-8 bg-alert-amber px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg shadow-xl border border-white/20">
                    <span className="text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest">Optimal Zone</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
