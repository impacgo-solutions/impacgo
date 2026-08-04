/**
 * Soft blurred color-blob background decoration — gives flat light sections
 * (bg-white / bg-gray-50 / bg-blue-50) something colorful behind them so
 * frosted-glass cards actually read as glass instead of just looking like
 * plain white cards with a faint shadow. Generalized from the pattern
 * already used in ERPModuleDetail.jsx's SectionBlobs/colorMap.
 *
 * Pass any two Tailwind color/opacity classes (e.g. "bg-blue-300/30") — kept
 * as plain props rather than a fixed palette so each section can pick tones
 * that fit its own content instead of everything defaulting to the same hue.
 */
export default function SectionBlobs({ colorA = "bg-blue-300/30", colorB = "bg-purple-300/25", flip = false }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className={`absolute h-72 w-72 rounded-full blur-3xl animate-glass-drift ${colorA} ${
          flip ? "-bottom-16 -right-16" : "-top-16 -left-16"
        }`}
      />
      <div
        className={`absolute h-64 w-64 rounded-full blur-3xl animate-glass-drift-slow ${colorB} ${
          flip ? "-top-10 -left-10" : "-bottom-10 -right-10"
        }`}
      />
    </div>
  );
}

// Subtle dot-grid texture — plain CSS, no external image request.
export const dotGridStyle = {
  backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px)",
  backgroundSize: "22px 22px",
};
