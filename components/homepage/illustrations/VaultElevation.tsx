interface VaultElevationProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

/** Tiered collateral weights w_i (simplex projection) as horizontal stacked bar. */
export function VaultElevation({
  className = "",
  accent = "bordeaux",
}: VaultElevationProps) {
  const ink = "#F4EFE6";
  const grid = "rgba(244,239,230,0.2)";
  const acc = accent === "none" ? ink : "#5A1E2C";
  const pad = { l: 52, r: 20, t: 48, b: 52 };
  const W = 220 - pad.l - pad.r;
  const H = 360 - pad.t - pad.b;
  const w = [0.52, 0.31, 0.17];
  const cum = [0, w[0]!, w[0]! + w[1]!];
  const labels = ["tier I", "tier II", "tier III"];

  return (
    <svg viewBox="0 0 220 360" className={`w-full ${className}`} role="img">
      <title>Collateral simplex slice</title>
      <desc>
        Stacked proportions w₁+w₂+w₃=1 as matplotlib horizontal bar segments.
      </desc>
      <line x1={pad.l} y1={pad.t + H} x2={pad.l + W} y2={pad.t + H} stroke={ink} strokeWidth={0.75} opacity={0.5} />
      <line x1={pad.l} y1={pad.t} x2={pad.l} y2={pad.t + H} stroke={ink} strokeWidth={0.75} opacity={0.5} />
      {[0, 0.25, 0.5, 0.75, 1].map((g) => (
        <line
          key={g}
          x1={pad.l}
          y1={pad.t + g * H}
          x2={pad.l + W}
          y2={pad.t + g * H}
          stroke={grid}
          strokeWidth={0.35}
          strokeDasharray="4 3"
        />
      ))}
      {w.map((wi, i) => {
        const x0 = pad.l + cum[i]! * W;
        const fill = i === 0 ? acc : i === 1 ? "rgba(244,239,230,0.35)" : "rgba(244,239,230,0.18)";
        return (
          <g key={labels[i]}>
            <rect
              x={x0}
              y={pad.t + H * 0.35}
              width={wi * W}
              height={H * 0.38}
              fill={fill}
              stroke={ink}
              strokeWidth={0.55}
              opacity={0.95}
            />
            <text
              x={x0 + (wi * W) / 2}
              y={pad.t + H * 0.35 + (H * 0.38) / 2 + 3}
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="7"
              fill={ink}
            >
              {labels[i]}
            </text>
            <text
              x={x0 + (wi * W) / 2}
              y={pad.t + H * 0.35 + (H * 0.38) / 2 + 14}
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="6"
              fill="rgba(244,239,230,0.65)"
            >
              {(wi * 100).toFixed(0)}%
            </text>
          </g>
        );
      })}
      <text
        x={110}
        y={28}
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="8"
        fill={ink}
      >
        Σ wᵢ = 1
      </text>
      <text x={pad.l} y={340} fontFamily="monospace" fontSize="6" fill="rgba(244,239,230,0.5)">
        plt.barh(…, stacked=True)
      </text>
    </svg>
  );
}
