import type { ReactNode } from "react";

interface DropCapProps {
  letter: string;
  className?: string;
}

export function DropCap({ letter, className = "" }: DropCapProps) {
  return (
    <span
      className={`float-left mr-2 font-serif text-bordeaux [font-variation-settings:'opsz'_144] ${className}`}
      style={{
        fontSize: "1.4em",
        lineHeight: 0.85,
        paddingTop: "0.08em",
      }}
      aria-hidden
    >
      {letter}
    </span>
  );
}
