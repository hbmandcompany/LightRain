interface ExecutionEngineSchematicProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

/** Four stacked subplots (matplotlib sharex): noisy obs → threshold → fork sim → spike exec. */
export function ExecutionEngineSchematic({
  className = "",
  accent = "bordeaux",
}: ExecutionEngineSchematicProps) {
  const ink = "#0E0E0C";
  const grid = "rgba(14,14,12,0.16)";
  const acc = accent === "none" ? ink : "#5A1E2C";
  const padL = 52;
  const padR = 12;
  const W = 320 - padL - padR;
  const rowH = 58;
  const gap = 10;
  const top = 24;
  const n = 36;
  const xs = Array.from({ length: n }, (_, i) => (i / (n - 1)) * W);

  const obsY = xs.map((x) => {
    const u = x / W;
    return 0.5 + 0.08 * Math.sin(u * 14) + 0.05 * Math.sin(u * 37);
  });

  const detY = xs.map((x) => {
    const u = x / W;
    return u > 0.45 && u < 0.55 ? 0.82 : 0.35;
  });
  const simY = xs.map((x) => {
    const u = x / W;
    return 0.4 + 0.35 / (1 + Math.exp(-40 * (u - 0.52)));
  });
  const exeY = xs.map((x) => {
    const u = x / W;
    return Math.abs(u - 0.78) < 0.02 ? 0.95 : 0.12;
  });

  const rowYs = [obsY, detY, simY, exeY];

  const labels = ["OBS", "DET", "SIM", "EXE"];

  return (
    <svg viewBox="0 0 320 300" className={`w-full ${className}`} role="img">
      <title>Pipeline · four traces</title>
      <desc>Stacked time-series subplots in matplotlib default layout.</desc>
      {labels.map((lab, ri) => {
        const y0 = top + ri * (rowH + gap);
        const ys = rowYs[ri]!;
        const path = xs
          .map((x, i) => {
            const px = padL + x;
            const py = y0 + (1 - ys[i]!) * (rowH - 8);
            return `${i === 0 ? "M" : "L"} ${px} ${py}`;
          })
          .join(" ");
        const stroke = ri === 2 ? acc : ink;
        const sw = ri === 2 ? 1.25 : 0.9;
        return (
          <g key={lab}>
            <rect
              x={padL - 2}
              y={y0 - 2}
              width={W + 4}
              height={rowH + 2}
              fill="rgba(14,14,12,0.02)"
              stroke={ink}
              strokeWidth={0.4}
            />
            <line
              x1={padL}
              y1={y0 + rowH - 8}
              x2={padL + W}
              y2={y0 + rowH - 8}
              stroke={grid}
              strokeWidth={0.35}
              strokeDasharray="3 3"
            />
            <path d={path} fill="none" stroke={stroke} strokeWidth={sw} />
            <text x={8} y={y0 + rowH / 2} fontFamily="monospace" fontSize="7" fill={ink}>
              {lab}
            </text>
          </g>
        );
      })}
      <text x={160} y={14} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={ink}>
        x → mempool clock
      </text>
      <text x={padL + W / 2} y={292} textAnchor="middle" fontFamily="monospace" fontSize="6" fill="rgba(14,14,12,0.55)">
        fig. 4 · stacked axes
      </text>
    </svg>
  );
}
