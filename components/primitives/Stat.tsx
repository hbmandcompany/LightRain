import type { ReactNode } from "react";

import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Numeral } from "@/components/primitives/Numeral";

interface StatProps {
  label: string;
  value: ReactNode;
  className?: string;
}

export function Stat({ label, value, className = "" }: StatProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <Eyebrow as="span">{label}</Eyebrow>
      <div className="text-[15px] font-normal text-ink">
        <Numeral>{value}</Numeral>
      </div>
    </div>
  );
}
