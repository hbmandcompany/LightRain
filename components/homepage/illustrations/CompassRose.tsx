interface CompassRoseProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

/** Matplotlib-style polar projection: unit directions for capital axes. */
export function CompassRose({
  className = "",
  accent = "bordeaux",
}: CompassRoseProps) {
  const accentStroke = accent === "none" ? "#0E0E0C" : "#5A1E2C";
  const ink = "#0E0E0C";
  const grid = "rgba(14,14,12,0.22)";
  const cx = 100;
  const cy = 100;
  const R = 62;

  const pts = [
    { a: -Math.PI / 2, lab: "N · NOT", sub: "notional" },
    { a: 0, lab: "E · EXE", sub: "execution" },
    { a: Math.PI / 2, lab: "S · STR", sub: "strategy" },
    { a: Math.PI, lab: "O · ORA", sub: "oracle" },
  ];

  return (
    <svg
      viewBox="0 0 200 200"
      className={`w-full max-w-[200px] ${className}`}
      role="img"
    >
      <title>Capital reference frame</title>
      <desc>
        Polar-style diagram with orthogonal axes and four labeled directions,
        matplotlib default aesthetics.
      </desc>
      {/* Grid */}
      {[-40, -20, 0, 20, 40].map((d) => (
        <g key={d}>
          <line
            x1={cx + d}
            y1={38}
            x2={cx + d}
            y2={162}
            stroke={grid}
            strokeWidth={0.4}
            strokeDasharray="3 3"
          />
          <line
            x1={38}
            y1={cy + d}
            x2={162}
            y2={cy + d}
            stroke={grid}
            strokeWidth={0.4}
            strokeDasharray="3 3"
          />
        </g>
      ))}
      {/* Spines */}
      <line x1={38} y1={cy} x2={162} y2={cy} stroke={ink} strokeWidth={0.85} />
      <line x1={cx} y1={38} x2={cx} y2={162} stroke={ink} strokeWidth={0.85} />
      {/* Unit circle */}
      <circle
        cx={cx}
        cy={cy}
        r={R}
        fill="none"
        stroke={ink}
        strokeWidth={0.65}
      />
      {/* Radials */}
      {pts.map((p, i) => {
        const x2 = cx + R * Math.cos(p.a);
        const y2 = cy + R * Math.sin(p.a);
        const isE = i === 1;
        return (
          <line
            key={p.lab}
            x1={cx}
            y1={cy}
            x2={x2}
            y2={y2}
            stroke={isE ? accentStroke : ink}
            strokeWidth={isE ? 1.4 : 0.75}
          />
        );
      })}
      <circle cx={cx} cy={cy} r="3.5" fill={ink} />
      {/* Tick labels */}
      <text x="168" y={cy + 4} fontFamily="monospace" fontSize="7" fill={ink}>
        x
      </text>
      <text x={cx - 4} y="32" textAnchor="end" fontFamily="monospace" fontSize="7" fill={ink}>
        y
      </text>
      {pts.map((p) => {
        const tx = cx + (R + 18) * Math.cos(p.a);
        const ty = cy + (R + 18) * Math.sin(p.a) + 3;
        return (
          <text
            key={p.sub}
            x={tx}
            y={ty}
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="7"
            fill={ink}
          >
            {p.lab}
          </text>
        );
      })}
      <text
        x="100"
        y="192"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="6"
        fill="rgba(14,14,12,0.55)"
      >
        fig. 1 · r(θ) = 1
      </text>
    </svg>
  );
}
