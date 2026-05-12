interface FlashLoanCycleDiagramProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

export function FlashLoanCycleDiagram({
  className = "",
  accent = "bordeaux",
}: FlashLoanCycleDiagramProps) {
  const noteClass = accent === "none" ? "text-noir" : "text-bordeaux";

  return (
    <svg viewBox="0 0 280 220" className={`w-full ${className}`} role="img">
      <title>Flash loan cycle</title>
      <desc>
        Three numbered stages: borrow, execution, repayment, traced in a closed
        clockwise loop.
      </desc>
      <g className="text-noir" fill="none" stroke="currentColor" strokeWidth={0.65}>
        <circle cx="140" cy="110" r="78" />
        <path
          d="M140 32 A78 78 0 1 1 62 150"
          strokeWidth={0.9}
        />
      </g>
      <circle cx="140" cy="32" r="14" className="text-noir" stroke="currentColor" fill="none" strokeWidth={0.6} />
      <circle cx="218" cy="110" r="14" className="text-noir" stroke="currentColor" fill="none" strokeWidth={0.6} />
      <circle cx="140" cy="188" r="14" className="text-noir" stroke="currentColor" fill="none" strokeWidth={0.6} />
      <text x="140" y="36" textAnchor="middle" className="fill-current font-mono text-[9px]">
        ①
      </text>
      <text x="218" y="114" textAnchor="middle" className="fill-current font-mono text-[9px]">
        ②
      </text>
      <text x="140" y="192" textAnchor="middle" className="fill-current font-mono text-[9px]">
        ③
      </text>
      <text x="125" y="58" textAnchor="middle" className="fill-current font-mono text-[9px] uppercase">
        EMPRUNT
      </text>
      <text x="232" y="118" textAnchor="start" className="fill-current font-mono text-[9px] uppercase">
        EXÉCUTION
      </text>
      <text x="125" y="178" textAnchor="middle" className="fill-current font-mono text-[9px] uppercase">
        REMBOURSEMENT
      </text>
      <text
        x="248"
        y="48"
        className={`fill-current font-mono text-[8px] uppercase ${noteClass}`}
      >
        t = 1 bloc
      </text>
    </svg>
  );
}
