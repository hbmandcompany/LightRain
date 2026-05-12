import type { ReactNode } from "react";

interface CitationProps {
  children: ReactNode;
  className?: string;
}

export function Citation({ children, className = "" }: CitationProps) {
  return (
    <blockquote
      className={`relative border-l-2 border-bordeaux pl-6 font-serif italic text-noir [font-variation-settings:'opsz'_144] ${className}`}
    >
      <span className="absolute -left-1 -top-1 font-serif text-[2.5rem] leading-none text-bordeaux opacity-90">
        &ldquo;
      </span>
      <span className="relative">{children}</span>
    </blockquote>
  );
}
