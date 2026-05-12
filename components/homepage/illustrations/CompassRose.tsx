interface CompassRoseProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

export function CompassRose({
  className = "",
  accent = "bordeaux",
}: CompassRoseProps) {
  const eastClass = accent === "none" ? "text-noir" : "text-bordeaux";
  const inkClass = "text-noir";

  return (
    <svg
      viewBox="0 0 200 200"
      className={`w-full max-w-[200px] ${className}`}
      role="img"
    >
      <title>Compass rose</title>
      <desc>
        Four-petaled engraved rose with cardinal labels for notional,
        execution, strategy, and oracle.
      </desc>
      <g className={inkClass} stroke="currentColor" fill="none" strokeWidth={0.6}>
        <path d="M100 20 Q120 100 100 180 Q80 100 100 20" />
        <path d="M20 100 Q100 80 180 100 Q100 120 20 100" />
        <circle cx="100" cy="100" r="6" strokeWidth={0.5} />
      </g>
      <path
        d="M100 100 L180 100"
        className={eastClass}
        stroke="currentColor"
        fill="none"
        strokeWidth={1.2}
      />
      <text
        x="100"
        y="12"
        textAnchor="middle"
        className={`fill-current font-mono text-[8px] uppercase ${inkClass}`}
      >
        N · NOTIONNEL
      </text>
      <text
        x="188"
        y="104"
        textAnchor="end"
        className={`fill-current font-mono text-[8px] uppercase ${eastClass}`}
      >
        E · EXÉCUTION
      </text>
      <text
        x="100"
        y="196"
        textAnchor="middle"
        className={`fill-current font-mono text-[8px] uppercase ${inkClass}`}
      >
        S · STRATÉGIE
      </text>
      <text
        x="12"
        y="104"
        textAnchor="start"
        className={`fill-current font-mono text-[8px] uppercase ${inkClass}`}
      >
        O · ORACLE
      </text>
    </svg>
  );
}
