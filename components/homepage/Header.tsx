"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { EngraveMark } from "@/components/homepage/illustrations/EngraveMark";
import { homepageCopy } from "@/lib/homepage-copy";

const sectionIds = [
  "section-these",
  "section-pratique",
  "section-mecanique",
  "section-garanties",
  "section-maison",
  "section-dossier",
] as const;

export function HomepageHeader() {
  const [active, setActive] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.1, 0.25, 0.5, 1] },
    );

    els.forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-trame bg-ivory [border-bottom-width:0.5px]">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between gap-4 px-6 md:px-10">
        <div className="min-w-0 shrink">
          <Link
            href="#section-ouverture"
            className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
          >
            <EngraveMark />
          </Link>
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-end gap-4 md:gap-8">
          <nav
            aria-label="Homepage sections"
            className="hidden max-w-none overflow-x-auto md:flex md:items-center md:gap-6"
          >
            {homepageCopy.header.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap text-[13px] font-normal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux ${
                    isActive ? "text-noir" : "text-sable hover:text-noir"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <Link
            href={homepageCopy.header.cta.href}
            className="inline-flex shrink-0 border border-solid border-noir border-[0.5px] px-3 py-2 text-[12px] font-normal text-noir transition-shadow hover:shadow-[inset_0_0_0_1px_#0E0E0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux [border-radius:4px] md:px-4 md:text-[13px]"
          >
            {homepageCopy.header.cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
