interface CreditLifecycleDiagramProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

export function CreditLifecycleDiagram({
  className = "",
  accent = "bordeaux",
}: CreditLifecycleDiagramProps) {
  const threshClass = accent === "none" ? "text-noir" : "text-bordeaux";

  return (
    <svg viewBox="0 0 300 200" className={`w-full ${className}`} role="img">
      <title>Credit lifecycle</title>
      <desc>
        Horizontal timeline with health factor oscillation and liquidation
        threshold.
      </desc>
      <line
        x1="20"
        y1="140"
        x2="280"
        y2="140"
        className="text-noir"
        stroke="currentColor"
        strokeWidth={0.7}
      />
      {[40, 100, 160, 220, 260].map((x, i) => (
        <g key={x}>
          <line
            x1={x}
            y1="135"
            x2={x}
            y2="145"
            className="text-noir"
            stroke="currentColor"
            strokeWidth={0.6}
          />
          <text
            x={x}
            y="158"
            textAnchor="middle"
            className="fill-current font-mono text-[7px] uppercase text-noir"
          >
            {["OUVERTURE", "DRAW", "INTÉRÊT", "RÉBALANCE", "CLÔTURE"][i]}
          </text>
        </g>
      ))}
      <path
        d="M20 90 Q70 70 100 95 T160 80 T220 100 T280 85"
        className="text-noir"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.65}
      />
      <line
        x1="20"
        y1="115"
        x2="280"
        y2="115"
        className={threshClass}
        stroke="currentColor"
        strokeWidth={0.6}
        strokeDasharray="4 3"
      />
      <text
        x="270"
        y="108"
        textAnchor="end"
        className={`fill-current font-mono text-[7px] uppercase ${threshClass}`}
      >
        liquidation
      </text>
    </svg>
  );
}
