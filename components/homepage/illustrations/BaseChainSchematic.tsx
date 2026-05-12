interface BaseChainSchematicProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

export function BaseChainSchematic({
  className = "",
  accent = "bordeaux",
}: BaseChainSchematicProps) {
  const baseClass = accent === "none" ? "text-noir" : "text-bordeaux";

  return (
    <svg viewBox="0 0 360 280" className={`w-full ${className}`} role="img">
      <title>Base chain schematic</title>
      <desc>
        Ethereum L1, Base L2, and three protocol contracts with settlement
        direction indicated.
      </desc>
      <rect
        x="20"
        y="24"
        width="320"
        height="48"
        className="text-noir"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.55}
      />
      <text
        x="180"
        y="54"
        textAnchor="middle"
        className="fill-current font-mono text-[10px] uppercase text-noir"
      >
        Ethereum L1
      </text>
      <rect
        x="20"
        y="96"
        width="320"
        height="72"
        className={baseClass}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.1}
      />
      <text
        x="180"
        y="138"
        textAnchor="middle"
        className={`fill-current font-mono text-[11px] uppercase ${baseClass}`}
      >
        Base L2
      </text>
      <rect
        x="20"
        y="192"
        width="320"
        height="56"
        className="text-noir"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.55}
      />
      <text
        x="180"
        y="224"
        textAnchor="middle"
        className="fill-current font-mono text-[9px] uppercase text-noir"
      >
        Contrats LightRain
      </text>
      {[80, 180, 280].map((cx) => (
        <rect
          key={cx}
          x={cx - 22}
          y="208"
          width="44"
          height="22"
          rx="10"
          className="text-noir"
          fill="none"
          stroke="currentColor"
          strokeWidth={0.5}
        />
      ))}
      <line
        x1="180"
        y1="72"
        x2="180"
        y2="96"
        className="text-noir"
        stroke="currentColor"
        strokeWidth={0.45}
      />
      <line
        x1="180"
        y1="168"
        x2="180"
        y2="192"
        className="text-noir"
        stroke="currentColor"
        strokeWidth={0.45}
      />
    </svg>
  );
}
