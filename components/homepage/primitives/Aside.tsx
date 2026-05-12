import type { ReactNode } from "react";

interface AsideProps {
  children: ReactNode;
  className?: string;
}

export function Aside({ children, className = "" }: AsideProps) {
  return (
    <aside
      className={`border-t border-b border-trame py-4 font-mono text-[12px] font-normal text-noir [border-bottom-width:0.5px] [border-top-width:0.5px] ${className}`}
    >
      {children}
    </aside>
  );
}
