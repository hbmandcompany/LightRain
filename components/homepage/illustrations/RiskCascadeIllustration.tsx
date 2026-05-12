interface RiskCascadeIllustrationProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

export function RiskCascadeIllustration({
  className = "",
  accent = "bordeaux",
}: RiskCascadeIllustrationProps) {
  const acc = accent === "none" ? "text-noir" : "text-bordeaux";

  return (
    <svg viewBox="0 0 400 80" className={`w-full ${className}`} role="img">
      <title>Risk cascade discipline</title>
      <desc>
        Eight stepped surfaces converging toward a single discipline node.
      </desc>
      <g className="text-noir" stroke="currentColor" fill="none" strokeWidth={0.55}>
        {Array.from({ length: 8 }).map((_, i) => {
          const x = 20 + i * 46;
          return <rect key={x} x={x} y={20 + i * 2} width="32" height="40" />;
        })}
      </g>
      <circle cx="370" cy="48" r="8" className={acc} fill="currentColor" />
      <path
        d="M340 48 L354 48"
        className="text-noir"
        stroke="currentColor"
        strokeWidth={0.5}
      />
    </svg>
  );
}
