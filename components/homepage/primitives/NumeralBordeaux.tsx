import type { HTMLAttributes, ReactNode } from "react";

import { Numeral } from "@/components/primitives/Numeral";

interface NumeralBordeauxProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function NumeralBordeaux({
  children,
  className = "",
  ...rest
}: NumeralBordeauxProps) {
  return (
    <Numeral
      className={`font-plex-ss01 text-bordeaux ${className}`}
      {...rest}
    >
      {children}
    </Numeral>
  );
}
