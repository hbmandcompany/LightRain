import { homepageCopy } from "@/lib/homepage-copy";

interface AppGatewayPhoneEngravingProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

/** 2×2 matplotlib subplots: synthetic cumulative returns & rolling vol. */
export function AppGatewayPhoneEngraving({
  className = "",
  accent = "bordeaux",
}: AppGatewayPhoneEngravingProps) {
  const ink = "#0E0E0C";
  const grid = "rgba(14,14,12,0.14)";
  const acc = accent === "none" ? ink : "#5A1E2C";

  const mini = (
    ox: number,
    oy: number,
    mw: number,
    mh: number,
    seed: number,
    stroke: string,
    sw: number,
  ) => {
    const n = 24;
    const xs = Array.from({ length: n }, (_, i) => (i / (n - 1)) * mw);
    const ys = xs.map((x, i) => {
      const t = (i / n) * 6 + seed;
      return mh * 0.55 + 0.22 * mh * Math.sin(t) + 0.06 * mh * Math.sin(t * 2.7);
    });
    const path = xs
      .map((x, i) => `${i === 0 ? "M" : "L"} ${ox + x} ${oy + ys[i]!}`)
      .join(" ");
    return (
      <g>
        <rect x={ox} y={oy} width={mw} height={mh} fill="#fafafa" stroke={ink} strokeWidth={0.35} />
        {[0.25, 0.5, 0.75].map((g) => (
          <line
            key={g}
            x1={ox}
            y1={oy + g * mh}
            x2={ox + mw}
            y2={oy + g * mh}
            stroke={grid}
            strokeWidth={0.25}
            strokeDasharray="2 2"
          />
        ))}
        <path d={path} fill="none" stroke={stroke} strokeWidth={sw} />
        <line x1={ox} y1={oy + mh} x2={ox + mw} y2={oy + mh} stroke={ink} strokeWidth={0.4} />
        <line x1={ox} y1={oy} x2={ox} y2={oy + mh} stroke={ink} strokeWidth={0.4} />
      </g>
    );
  };

  const ox0 = 24;
  const oy0 = 52;
  const cellW = 68;
  const cellH = 52;
  const gap = 8;

  return (
    <svg viewBox="0 0 192 400" className={`w-full max-w-[192px] ${className}`} role="img">
      <title>Read-only dashboard · figure grid</title>
      <desc>Four small axes in a 2 by 2 grid mimicking a Jupyter matplotlib figure.</desc>
      <rect x="8" y="8" width="176" height="384" fill="none" stroke={ink} strokeWidth={0.65} />
      <text x="96" y="28" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={ink}>
        fig. obs — {homepageCopy.appGateway.phoneScreenTitle}
      </text>
      {mini(ox0, oy0, cellW, cellH, 0.2, ink, 0.65)}
      {mini(ox0 + cellW + gap, oy0, cellW, cellH, 1.1, ink, 0.65)}
      {mini(ox0, oy0 + cellH + gap, cellW, cellH, 2.3, acc, 0.9)}
      {mini(ox0 + cellW + gap, oy0 + cellH + gap, cellW, cellH, 0.7, ink, 0.65)}
      <text x="96" y="380" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="rgba(14,14,12,0.5)">
        plt.subplots(2, 2, sharex=True)
      </text>
    </svg>
  );
}
