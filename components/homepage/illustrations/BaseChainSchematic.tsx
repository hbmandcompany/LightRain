interface BaseChainSchematicProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

/** Layered settlement latency model: bar heights ∝ −log fee tier (illustrative). */
export function BaseChainSchematic({
  className = "",
  accent = "bordeaux",
}: BaseChainSchematicProps) {
  const ink = "#0E0E0C";
  const grid = "rgba(14,14,12,0.18)";
  const acc = accent === "none" ? ink : "#5A1E2C";
  const pad = { l: 48, r: 24, t: 36, b: 56 };
  const W = 360 - pad.l - pad.r;
  const H = 300 - pad.t - pad.b;
  const bars = [
    { lab: "L1", h: 0.42, sub: "Ethereum" },
    { lab: "L2", h: 0.88, sub: "Base" },
    { lab: "SC", h: 0.36, sub: "contracts" },
  ];
  const bw = (W - 24) / 3;

  return (
    <svg viewBox="0 0 360 300" className={`w-full ${className}`} role="img">
      <title>Settlement stack · bar view</title>
      <desc>Relative layer weights as vertical bars with matplotlib axes.</desc>
      {[0, 0.25, 0.5, 0.75, 1].map((g) => (
        <line
          key={g}
          x1={pad.l}
          y1={pad.t + g * H}
          x2={pad.l + W}
          y2={pad.t + g * H}
          stroke={grid}
          strokeWidth={0.35}
          strokeDasharray="3 3"
        />
      ))}
      <line x1={pad.l} y1={pad.t + H} x2={pad.l + W} y2={pad.t + H} stroke={ink} strokeWidth={0.85} />
      <line x1={pad.l} y1={pad.t} x2={pad.l} y2={pad.t + H} stroke={ink} strokeWidth={0.85} />
      {bars.map((b, i) => {
        const x = pad.l + 12 + i * (bw + 12);
        const bh = b.h * H;
        const fill = i === 1 ? acc : ink;
        return (
          <g key={b.lab}>
            <rect
              x={x}
              y={pad.t + H - bh}
              width={bw}
              height={bh}
              fill={fill}
              fillOpacity={i === 1 ? 0.45 : 0.22}
              stroke={ink}
              strokeWidth={0.65}
            />
            <text
              x={x + bw / 2}
              y={pad.t + H + 16}
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="7"
              fill={ink}
            >
              {b.lab}
            </text>
            <text
              x={x + bw / 2}
              y={pad.t + H + 28}
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="5.5"
              fill="rgba(14,14,12,0.55)"
            >
              {b.sub}
            </text>
          </g>
        );
      })}
      <text x={180} y={22} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={ink}>
        layer weight · arbitrary units
      </text>
      <text x={pad.l} y={292} fontFamily="monospace" fontSize="6" fill="rgba(14,14,12,0.55)">
        plt.bar([…]) · normalized
      </text>
    </svg>
  );
}
