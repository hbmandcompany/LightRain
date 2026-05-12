interface FlashLoanCycleDiagramProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

/** Piecewise state x(τ): matplotlib step plot over one block. */
export function FlashLoanCycleDiagram({
  className = "",
  accent = "bordeaux",
}: FlashLoanCycleDiagramProps) {
  const ink = "#0E0E0C";
  const grid = "rgba(14,14,12,0.2)";
  const acc = accent === "none" ? ink : "#5A1E2C";
  const pad = { l: 40, r: 24, t: 40, b: 48 };
  const W = 280 - pad.l - pad.r;
  const H = 220 - pad.t - pad.b;

  const bands: { x0: number; x1: number; yTop: number; label: string }[] = [
    { x0: 0, x1: 0.32, yTop: 0.28, label: "borrow" },
    { x0: 0.34, x1: 0.65, yTop: 0.55, label: "execute" },
    { x0: 0.67, x1: 1, yTop: 0.28, label: "repay" },
  ];

  return (
    <svg viewBox="0 0 280 220" className={`w-full ${className}`} role="img">
      <title>Flash state · τ ∈ [0,1]</title>
      <desc>Step function x(τ) with three plateaus for one-block flash cycle.</desc>
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
      {bands.map((b) => {
        const x1 = pad.l + b.x0 * W;
        const x2 = pad.l + b.x1 * W;
        const y = pad.t + b.yTop * H;
        return (
          <rect
            key={b.label}
            x={x1}
            y={y}
            width={x2 - x1}
            height={pad.t + H - y}
            fill={acc}
            fillOpacity={0.28}
            stroke={acc}
            strokeWidth={0.75}
          />
        );
      })}
      {bands.map((b) => (
        <text
          key={`t-${b.label}`}
          x={pad.l + ((b.x0 + b.x1) / 2) * W}
          y={pad.t - 8}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="6"
          fill={ink}
        >
          {b.label}
        </text>
      ))}
      <text
        x={pad.l + W / 2}
        y={212}
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="7"
        fill={ink}
      >
        τ normalized · block length = 1
      </text>
    </svg>
  );
}
