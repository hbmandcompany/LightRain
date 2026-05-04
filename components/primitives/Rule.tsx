interface RuleProps {
  className?: string;
}

export function Rule({ className = "" }: RuleProps) {
  return (
    <hr
      className={`border-0 border-solid border-hair ${className}`}
      style={{ borderTopWidth: 0.5 }}
    />
  );
}
