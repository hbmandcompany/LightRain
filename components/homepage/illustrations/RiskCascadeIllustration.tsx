interface RiskCascadeIllustrationProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

/** Eight risk controls as descending survival curve S(k)=Π(1-ε_i). */
export function RiskCascadeIllustration({
  className = "",
  accent = "bordeaux",
}: RiskCascadeIllustrationProps) {
  const ink = "#0E0E0C";
  const grid = "rgba(14,14,12,0.15)";
  const acc = accent === "none" ? ink : "#5A1E2C";
  const pad = { l: 36, r: 28, t: 16, b: 36 };
  const W = 420 - pad.l - pad.r;
  const H = 100 - pad.t - pad.b;
  const eps = [0.02, 0.015, 0.025, 0.02, 0.03, 0.018, 0.022, 0.028];
  let prod = 1;
  const cum: number[] = [];
  for (const e of eps) {
    prod *= 1 - e;
    cum.push(prod);
  }
  const xs = cum.map((_, i) => (i / (cum.length - 1)) * W);
  const path = cum
    .map((s, i) => {
      const px = pad.l + xs[i]!;
      const py = pad.t + (1 - s) * H;
      return `${i === 0 ? "M" : "L"} ${px} ${py}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 420 100" className={`w-full ${className}`} role="img">
      <title>Compounded survival S(k)</title>
      <desc>
        Discrete product S_k = Π(1 − ε_i) for eight independent control layers.
      </desc>
      {[0, 0.25, 0.5, 0.75, 1].map((g) => (
        <line
          key={g}
          x1={pad.l}
          y1={pad.t + g * H}
          x2={pad.l + W}
          y2={pad.t + g * H}
          stroke={grid}
          strokeWidth={0.3}
          strokeDasharray="3 3"
        />
      ))}
      <line x1={pad.l} y1={pad.t + H} x2={pad.l + W} y2={pad.t + H} stroke={ink} strokeWidth={0.75} />
      <line x1={pad.l} y1={pad.t} x2={pad.l} y2={pad.t + H} stroke={ink} strokeWidth={0.75} />
      <path d={path} fill="none" stroke={acc} strokeWidth={1.35} />
      {cum.map((s, i) => (
        <circle
          key={i}
          cx={pad.l + xs[i]!}
          cy={pad.t + (1 - s) * H}
          r="2.5"
          fill={ink}
        />
      ))}
      <text x={210} y={12} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={ink}>
        S(k) = Πᵢ(1 − εᵢ)
      </text>
      <text x={pad.l + W} y={pad.t + H + 22} textAnchor="end" fontFamily="monospace" fontSize="6" fill="rgba(14,14,12,0.55)">
        k = 1…8 controls
      </text>
    </svg>
  );
}
