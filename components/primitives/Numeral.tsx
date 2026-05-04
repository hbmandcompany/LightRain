import type { HTMLAttributes, ReactNode } from "react";

interface NumeralProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function Numeral({ children, className = "", ...rest }: NumeralProps) {
  return (
    <span
      className={`font-mono tabular-nums ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
