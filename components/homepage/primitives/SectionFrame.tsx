import type { ReactNode } from "react";

interface SectionFrameProps {
  id: string;
  ariaLabelledby: string;
  eyebrow: string;
  backgroundClass: string;
  children: ReactNode;
  eyebrowOnDark?: boolean;
}

export function SectionFrame({
  id,
  ariaLabelledby,
  eyebrow,
  backgroundClass,
  children,
  eyebrowOnDark = false,
}: SectionFrameProps) {
  const eyebrowColor = eyebrowOnDark ? "text-parchment/80" : "text-sable";

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`min-h-screen ${backgroundClass} py-24 md:py-32`}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div
          className={`border-b pb-4 pt-24 [border-bottom-width:0.5px] ${eyebrowOnDark ? "border-parchment-hair" : "border-trame"}`}
        >
          <p
            className={`font-mono text-[11px] font-normal uppercase tracking-eyebrow-wide ${eyebrowColor}`}
          >
            {eyebrow}
          </p>
        </div>
        <div className="pt-10 md:pt-12">{children}</div>
      </div>
    </section>
  );
}
