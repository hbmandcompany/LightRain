interface ExecutionEngineSchematicProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

export function ExecutionEngineSchematic({
  className = "",
  accent = "bordeaux",
}: ExecutionEngineSchematicProps) {
  const acc = accent === "none" ? "text-noir" : "text-bordeaux";

  const rows = [
    { y: 40, label: "OBSERVATION" },
    { y: 110, label: "DÉTECTION" },
    { y: 180, label: "SIMULATION" },
    { y: 250, label: "EXÉCUTION" },
  ];

  return (
    <svg viewBox="0 0 320 320" className={`w-full ${className}`} role="img">
      <defs>
        <marker
          id="arrow-ex"
          markerWidth="5"
          markerHeight="5"
          refX="2.5"
          refY="2.5"
          orient="auto"
        >
          <path d="M0 0 L5 2.5 L0 5 Z" fill="#0E0E0C" />
        </marker>
      </defs>
      <title>Execution engine schematic</title>
      <desc>
        Four horizontal bands for observation, detection, simulation, and
        execution connected by hairline arrows.
      </desc>
      {rows.map((row, i) => (
        <g key={row.label}>
          <rect
            x="24"
            y={row.y - 22}
            width="272"
            height="44"
            className="text-noir"
            fill="none"
            stroke="currentColor"
            strokeWidth={0.55}
          />
          <text
            x="40"
            y={row.y + 4}
            className="fill-current font-mono text-[10px] uppercase text-noir"
          >
            {row.label}
          </text>
          {i < rows.length - 1 ? (
            <line
              x1="160"
              y1={row.y + 22}
              x2="160"
              y2={rows[i + 1].y - 22}
              className="text-noir"
              stroke="currentColor"
              strokeWidth={0.45}
              markerEnd="url(#arrow-ex)"
            />
          ) : null}
        </g>
      ))}
      <g transform="translate(230 178)" className={acc}>
        <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth={0.7} />
        <line x1="-5" y1="0" x2="5" y2="0" stroke="currentColor" strokeWidth={0.5} />
        <line x1="0" y1="-5" x2="0" y2="5" stroke="currentColor" strokeWidth={0.5} />
      </g>
      <rect
        x="148"
        y="246"
        width="8"
        height="8"
        className={acc}
        fill="currentColor"
      />
      <text
        x="164"
        y="254"
        className={`fill-current font-mono text-[8px] uppercase ${acc}`}
      >
        t = inclusion
      </text>
    </svg>
  );
}
