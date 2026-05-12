import { homepageCopy } from "@/lib/homepage-copy";

interface AppGatewayPhoneEngravingProps {
  className?: string;
  accent?: "bordeaux" | "none";
}

export function AppGatewayPhoneEngraving({
  className = "",
  accent = "bordeaux",
}: AppGatewayPhoneEngravingProps) {
  const acc = accent === "none" ? "text-noir" : "text-bordeaux";

  return (
    <svg
      viewBox="0 0 192 396"
      className={`w-full max-w-[192px] ${className}`}
      role="img"
    >
      <title>LightRain phone engraving</title>
      <desc>
        Restrained engraved handset outline with portfolio summary lines.
      </desc>
      <rect
        x="8"
        y="8"
        width="176"
        height="380"
        rx="28"
        ry="28"
        className="text-noir"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
      />
      <rect
        x="72"
        y="22"
        width="48"
        height="5"
        rx="2"
        className="text-noir"
        fill="currentColor"
        opacity={0.35}
      />
      <line
        x1="28"
        y1="56"
        x2="164"
        y2="56"
        stroke="rgba(14,14,12,0.12)"
        strokeWidth={0.5}
      />
      <text
        x="32"
        y="86"
        className="fill-current font-serif text-[14px] text-noir"
      >
        {homepageCopy.appGateway.phoneScreenTitle}
      </text>
      <rect x="32" y="104" width="48" height="10" className="text-noir" fill="currentColor" opacity={0.12} />
      <rect x="88" y="104" width="48" height="10" className="text-noir" fill="currentColor" opacity={0.12} />
      <rect x="32" y="124" width="120" height="10" className="text-noir" fill="currentColor" opacity={0.12} />
      {[148, 168, 188, 208].map((y) => (
        <g key={y}>
          <line
            x1="32"
            y1={y}
            x2="160"
            y2={y}
            stroke="rgba(14,14,12,0.12)"
            strokeWidth={0.45}
          />
          <rect x="36" y={y - 10} width="72" height="6" className="text-noir" fill="currentColor" opacity={0.2} />
          <rect x="140" y={y - 10} width="12" height="16" className={acc} fill="currentColor" opacity={0.35} />
        </g>
      ))}
      <rect
        x="24"
        y="340"
        width="144"
        height="36"
        className="text-noir"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.5}
      />
      <line x1="72" y1="348" x2="120" y2="348" className={acc} stroke="currentColor" strokeWidth={0.8} />
    </svg>
  );
}
