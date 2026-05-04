import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  as?: "p" | "span";
}

export function Eyebrow({
  children,
  className = "",
  as: Component = "p",
}: EyebrowProps) {
  return (
    <Component
      className={`text-[11px] font-normal uppercase tracking-eyebrow text-mist ${className}`}
    >
      {children}
    </Component>
  );
}
