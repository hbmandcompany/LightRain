interface CapitalFlowDiagramProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

/** Two wealth processes converging (logistic-type), matplotlib fill_between style. */
export function CapitalFlowDiagram({
  className = "",
  accent = "bordeaux",
}: CapitalFlowDiagramProps) {
  const ink = "#0E0E0C";
  const grid = "rgba(14,14,12,0.2)";
  const acc = accent === "none" ? ink : "#5A1E2C";

  const pad = { l: 44, r: 16, t: 28, b: 40 };
  const W = 360 - pad.l - pad.r;
  const H = 300 - pad.t - pad.b;
  const n = 48;
  const xs = Array.from({ length: n }, (_, i) => (i / (n - 1)) * W);
  const logistic = (k: number, x: number) =>
    1 / (1 + Math.exp(-k * ((x / W) * 4 - 2)));
  const yA = xs.map((x) => H * (0.15 + 0.65 * logistic(2.2, x)));
  const yB = xs.map((x) => H * (0.2 + 0.55 * logistic(-2.4, x + 20)));
  const yM = xs.map((_, i) => (yA[i]! + yB[i]!) / 2);

  const pathA = xs
    .map((x, i) => `${i === 0 ? "M" : "L"} ${pad.l + x} ${pad.t + yA[i]}`)
    .join(" ");
  const pathB = xs
    .map((x, i) => `${i === 0 ? "M" : "L"} ${pad.l + x} ${pad.t + yB[i]}`)
    .join(" ");
  const pathM = xs
    .map((x, i) => `${i === 0 ? "M" : "L"} ${pad.l + x} ${pad.t + yM[i]}`)
    .join(" ");

  const areaA = `${pathA} L ${pad.l + W} ${pad.t + H} L ${pad.l} ${pad.t + H} Z`;
  const areaB = `${pathB} L ${pad.l + W} ${pad.t + H} L ${pad.l} ${pad.t + H} Z`;

  return (
    <svg viewBox="0 0 360 300" className={`w-full ${className}`} role="img">
      <title>Dual liquidity processes</title>
      <desc>
        Two S-curves W_A(t), W_B(t) and their arithmetic mean merge path,
        matplotlib-style axes and legend.
      </desc>
      <rect
        x={pad.l}
        y={pad.t}
        width={W}
        height={H}
        fill="rgba(14,14,12,0.03)"
        stroke="none"
      />
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
      <line
        x1={pad.l}
        y1={pad.t + H}
        x2={pad.l + W}
        y2={pad.t + H}
        stroke={ink}
        strokeWidth={0.9}
      />
      <line
        x1={pad.l}
        y1={pad.t}
        x2={pad.l}
        y2={pad.t + H}
        stroke={ink}
        strokeWidth={0.9}
      />
      <path d={areaA} fill="rgba(14,14,12,0.08)" stroke="none" />
      <path d={areaB} fill={accent === "none" ? "rgba(14,14,12,0.06)" : "rgba(90,30,44,0.12)"} stroke="none" />
      <path d={pathA} fill="none" stroke={ink} strokeWidth={1.1} />
      <path d={pathB} fill="none" stroke={ink} strokeWidth={1.1} strokeDasharray="5 3" />
      <path d={pathM} fill="none" stroke={acc} strokeWidth={1.35} />
      <text
        x={pad.l + W / 2}
        y={16}
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="8"
        fill={ink}
      >
        V(t) · capital paths
      </text>
      <text
        x={pad.l + W / 2}
        y={292}
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="7"
        fill="rgba(14,14,12,0.55)"
      >
        t → execution
      </text>
      <text
        x={pad.l + W - 4}
        y={pad.t + 14}
        textAnchor="end"
        fontFamily="monospace"
        fontSize="6"
        fill={ink}
      >
        W_A
      </text>
      <text
        x={pad.l + W - 4}
        y={pad.t + 26}
        textAnchor="end"
        fontFamily="monospace"
        fontSize="6"
        fill={ink}
      >
        W_B
      </text>
      <text
        x={pad.l + W - 4}
        y={pad.t + 38}
        textAnchor="end"
        fontFamily="monospace"
        fontSize="6"
        fill={acc}
      >
        ½(W_A+W_B)
      </text>
    </svg>
  );
}
