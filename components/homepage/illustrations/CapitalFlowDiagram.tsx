interface CapitalFlowDiagramProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

export function CapitalFlowDiagram({
  className = "",
  accent = "bordeaux",
}: CapitalFlowDiagramProps) {
  const dropClass = accent === "none" ? "text-noir" : "text-bordeaux";
  const hatchId = "hatch-capital";

  return (
    <svg
      viewBox="0 0 360 320"
      className={`w-full ${className}`}
      role="img"
    >
      <title>Capital flow diagram</title>
      <desc>
        Two reservoirs labeled atomic liquidity and durable credit converge
        into a single execution conduit.
      </desc>
      <defs>
        <pattern
          id={hatchId}
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="6"
            stroke="rgba(14,14,12,0.2)"
            strokeWidth={0.5}
          />
        </pattern>
      </defs>
      <g className="text-noir" stroke="currentColor" fill="none" strokeWidth={0.6}>
        <path
          d="M40 40 L160 40 L170 80 L30 80 Z"
          fill={`url(#${hatchId})`}
        />
        <path d="M200 40 L320 40 L330 80 L190 80 Z" fill={`url(#${hatchId})`} />
        <path d="M120 120 L240 120 L250 200 L110 200 Z" fill="none" />
        <path d="M180 200 L180 260 L120 280 L240 280 L180 260" />
      </g>
      <circle cx="180" cy="210" r="5" className={dropClass} fill="currentColor" />
      <text
        x="100"
        y="35"
        textAnchor="middle"
        className="fill-current font-mono text-[10px] uppercase"
      >
        LIQUIDITÉ ATOMIQUE
      </text>
      <text
        x="265"
        y="35"
        textAnchor="middle"
        className="fill-current font-mono text-[10px] uppercase"
      >
        CRÉDIT DURABLE
      </text>
      <text
        x="180"
        y="305"
        textAnchor="middle"
        className="fill-current font-mono text-[10px] uppercase"
      >
        EXÉCUTION
      </text>
    </svg>
  );
}
