interface VaultElevationProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

export function VaultElevation({
  className = "",
  accent = "bordeaux",
}: VaultElevationProps) {
  const keyClass = accent === "none" ? "text-parchment" : "text-bordeaux";

  return (
    <svg viewBox="0 0 220 360" className={`w-full ${className}`} role="img">
      <title>Vault elevation</title>
      <desc>
        Architectural vault cross-section with three collateral tiers and
        half-open door.
      </desc>
      <g className="text-parchment" stroke="currentColor" fill="none" strokeWidth={0.55}>
        <path d="M40 320 L40 40 L180 40 L180 320" />
        <path d="M40 120 L20 120 L20 320 L40 320" />
        <path d="M20 120 L30 100 L40 120" />
        <line x1="40" y1="140" x2="180" y2="140" strokeWidth={0.45} />
        <line x1="40" y1="200" x2="180" y2="200" strokeWidth={0.45} />
        <line x1="40" y1="260" x2="180" y2="260" strokeWidth={0.45} />
      </g>
      <text
        x="110"
        y="130"
        textAnchor="middle"
        className="fill-current font-mono text-[9px] uppercase text-parchment"
      >
        TIER I
      </text>
      <text
        x="110"
        y="190"
        textAnchor="middle"
        className="fill-current font-mono text-[9px] uppercase text-parchment"
      >
        TIER II
      </text>
      <text
        x="110"
        y="250"
        textAnchor="middle"
        className="fill-current font-mono text-[9px] uppercase text-parchment"
      >
        TIER III
      </text>
      {[60, 90, 120].map((y) => (
        <g key={y}>
          {[70, 100, 130, 150].map((x) => (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="8"
              height="8"
              className="text-parchment"
              fill="currentColor"
            />
          ))}
        </g>
      ))}
      <g className={keyClass}>
        <rect x="96" y="300" width="28" height="14" fill="none" stroke="currentColor" strokeWidth={0.6} />
        <path d="M110 300 L110 292" stroke="currentColor" strokeWidth={0.6} />
      </g>
      <line
        x1="48"
        y1="280"
        x2="172"
        y2="280"
        className="text-parchment"
        stroke="currentColor"
        strokeWidth={0.35}
        opacity={0.5}
      />
    </svg>
  );
}
