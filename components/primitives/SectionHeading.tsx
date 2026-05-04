import type { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3";

interface SectionHeadingProps {
  id: string;
  children: ReactNode;
  level?: HeadingLevel;
  variant?: "xl" | "lg" | "md";
  serif?: boolean;
  className?: string;
}

const variantClass: Record<NonNullable<SectionHeadingProps["variant"]>, string> =
  {
    xl: "text-display-xl",
    lg: "text-display-lg",
    md: "text-display-md",
  };

export function SectionHeading({
  id,
  children,
  level = "h2",
  variant = "lg",
  serif = true,
  className = "",
}: SectionHeadingProps) {
  const Component = level;
  const family = serif ? "font-serif" : "font-sans";

  return (
    <Component
      id={id}
      className={`font-normal tracking-tight text-ink ${variantClass[variant]} ${family} ${className}`}
    >
      {children}
    </Component>
  );
}
