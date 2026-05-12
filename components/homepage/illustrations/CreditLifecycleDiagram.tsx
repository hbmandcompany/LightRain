interface CreditLifecycleDiagramProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

/** Health factor h(t) vs time with liquidation threshold h*. */
export function CreditLifecycleDiagram({
  className = "",
  accent = "bordeaux",
}: CreditLifecycleDiagramProps) {
  const ink = "#0E0E0C";
  const grid = "rgba(14,14,12,0.18)";
  const thresh = accent === "none" ? ink : "#5A1E2C";
  const pad = { l: 36, r: 18, t: 22, b: 44 };
  const W = 300 - pad.l - pad.r;
  const H = 210 - pad.t - pad.b;
  const n = 40;
  const xs = Array.from({ length: n }, (_, i) => (i / (n - 1)) * W);
  const hStar = 0.32;
  const h = xs.map(
    (x) =>
      0.72 +
      0.12 * Math.sin((x / W) * Math.PI * 2.5) -
      0.08 * (x / W) -
      0.04 * Math.sin((x / W) * Math.PI * 6),
  );
  const yPix = (v: number) => pad.t + (1 - v) * H;
  const path = xs
    .map((x, i) => `${i === 0 ? "M" : "L"} ${pad.l + x} ${yPix(h[i]!)}`)
    .join(" ");
  const threshY = yPix(hStar);
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((u) => pad.l + u * W);

  return (
    <svg viewBox="0 0 300 210" className={`w-full ${className}`} role="img">
      <title>Health factor path</title>
      <desc>
        Continuous h(t) with horizontal liquidation barrier h* and shaded safe
        region.
      </desc>
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
      <rect
        x={pad.l}
        y={threshY}
        width={W}
        height={pad.t + H - threshY}
        fill={thresh}
        fillOpacity={0.08}
      />
      <line x1={pad.l} y1={threshY} x2={pad.l + W} y2={threshY} stroke={thresh} strokeWidth={1} strokeDasharray="6 4" />
      <path d={path} fill="none" stroke={ink} strokeWidth={1.15} />
      {ticks.map((x, i) => (
        <text
          key={x}
          x={x}
          y={pad.t + H + 14}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="5.5"
          fill={ink}
        >
          {["t₀", "t₁", "t₂", "t₃", "T"][i]}
        </text>
      ))}
      <text x={pad.l + W + 6} y={threshY + 3} fontFamily="monospace" fontSize="6" fill={thresh}>
        h*
      </text>
      <text x={8} y={pad.t + 10} fontFamily="monospace" fontSize="6" fill={ink} transform={`rotate(-90 8 ${pad.t + H / 2})`}>
        h(t)
      </text>
      <text x={150} y={12} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={ink}>
        h(t) vs calendar time
      </text>
    </svg>
  );
}
