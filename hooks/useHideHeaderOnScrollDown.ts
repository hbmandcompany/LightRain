"use client";

import { useEffect, useState } from "react";

const SCROLL_DELTA = 10;
const TOP_REVEAL_PX = 48;

/**
 * Returns true when the user has scrolled down (past TOP_REVEAL_PX) and should
 * see the header hidden; false when near top or scrolling up.
 */
export function useHideHeaderOnScrollDown(): boolean {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;

      if (y < TOP_REVEAL_PX) {
        setHidden(false);
        return;
      }
      if (dy > SCROLL_DELTA) {
        setHidden(true);
      } else if (dy < -SCROLL_DELTA) {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return hidden;
}
