import { homepageCopy } from "@/lib/homepage-copy";

interface EngraveMarkProps {
  className?: string;
  variant?: "header" | "watermark";
}

function MarkSvg({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" className={className} aria-hidden>
      <title>LightRain mark</title>
      <desc>Geometric mark with optional matplotlib-style axes in header variant.</desc>
      <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth={1} />
      <rect x="12" y="5" width="4" height="18" rx="1" fill="none" stroke="currentColor" strokeWidth={1} />
      <circle cx="14" cy="9" r="1.75" fill="currentColor" />
      <line x1="14" y1="20" x2="14" y2="24" stroke="currentColor" strokeWidth={0.75} />
      <rect x="12.25" y="23.25" width="3.5" height="3.5" fill="none" stroke="currentColor" strokeWidth={0.75} />
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
          <defs>
            <pattern id="mpl-wm-grid" width="3" height="3" patternUnits="userSpaceOnUse">
              <path d="M3 0 L0 0 0 3" stroke="currentColor" strokeWidth={0.08} opacity={0.25} />
            </pattern>
          </defs>
          <rect width="28" height="28" fill="url(#mpl-wm-grid)" />
          <title>LightRain watermark</title>
          <desc>Light grid and mark at reduced scale.</desc>
          <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth={0.35} />
          <rect x="12" y="5" width="4" height="18" rx="1" fill="none" stroke="currentColor" strokeWidth={0.35} />
          <circle cx="14" cy="9" r="1.75" fill="currentColor" />
          <line x1="14" y1="20" x2="14" y2="24" stroke="currentColor" strokeWidth={0.28} />
          <rect x="12.25" y="23.25" width="3.5" height="3.5" fill="none" stroke="currentColor" strokeWidth={0.28} />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-4 text-noir ${className}`}>
      <div className="relative shrink-0">
        <svg width="36" height="36" viewBox="0 0 36 36" className="absolute -right-1 -top-1 text-noir opacity-40" aria-hidden>
          <line x1="4" y1="28" x2="30" y2="28" stroke="currentColor" strokeWidth={0.35} />
          <line x1="4" y1="28" x2="4" y2="8" stroke="currentColor" strokeWidth={0.35} />
          <path
            d="M6 22 Q14 10 26 14"
            fill="none"
            stroke="currentColor"
            strokeWidth={0.4}
          />
        </svg>
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
