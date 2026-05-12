import { homepageCopy } from "@/lib/homepage-copy";

interface EngraveMarkProps {
  className?: string;
  variant?: "header" | "watermark";
}

function MarkSvg({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      className={className}
      aria-hidden
    >
      <title>LightRain house mark</title>
      <desc>
        Horizontal line through a vertical capsule with settlement point above
        and collateral cap below.
      </desc>
      <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth={1} />
      <rect
        x="12"
        y="5"
        width="4"
        height="18"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
      />
      <circle cx="14" cy="9" r="1.75" fill="currentColor" />
      <line
        x1="14"
        y1="20"
        x2="14"
        y2="24"
        stroke="currentColor"
        strokeWidth={0.75}
      />
      <rect
        x="12.25"
        y="23.25"
        width="3.5"
        height="3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.75}
      />
    </svg>
  );
}

export function EngraveMark({
  className = "",
  variant = "header",
}: EngraveMarkProps) {
  if (variant === "watermark") {
    return (
      <div className={`text-parchment opacity-[0.22] ${className}`}>
        <svg
          width="240"
          height="240"
          viewBox="0 0 28 28"
          preserveAspectRatio="xMidYMid meet"
          className="text-parchment"
          aria-hidden
        >
          <title>LightRain house mark watermark</title>
          <desc>Large engraved house mark for the maison section.</desc>
          <line
            x1="4"
            y1="14"
            x2="24"
            y2="14"
            stroke="currentColor"
            strokeWidth={0.35}
          />
          <rect
            x="12"
            y="5"
            width="4"
            height="18"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth={0.35}
          />
          <circle cx="14" cy="9" r="1.75" fill="currentColor" />
          <line
            x1="14"
            y1="20"
            x2="14"
            y2="24"
            stroke="currentColor"
            strokeWidth={0.28}
          />
          <rect
            x="12.25"
            y="23.25"
            width="3.5"
            height="3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={0.28}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-4 text-noir ${className}`}>
      <div className="shrink-0">
        <MarkSvg />
      </div>
      <div className="min-w-0 pt-0.5">
        <p className="font-serif text-[17px] font-normal tracking-wordmark text-noir [font-variation-settings:'opsz'_144]">
          {homepageCopy.brand.wordmark}
          <span className="text-bordeaux">.</span>
        </p>
        <p className="mt-1 font-sans text-[9px] font-normal leading-snug text-sable">
          {homepageCopy.brand.engraveTagline}
        </p>
      </div>
    </div>
  );
}
