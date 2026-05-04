"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: true });
  const reduceMotion = useReducedMotion();

  const instant = reduceMotion === true;
  const hidden = instant ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 };
  const visible = { opacity: 1, y: 0 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={inView ? visible : hidden}
      transition={
        instant
          ? { duration: 0 }
          : { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }
      }
    >
      {children}
    </motion.div>
  );
}
