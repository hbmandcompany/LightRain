import Link from "next/link";

import { homepageCopy } from "@/lib/homepage-copy";

const footerColumnKeys = ["A", "B", "C", "D", "E", "F"] as const;

function linkHref(label: string): string {
  if (label.includes("@")) {
    return `mailto:${label}`;
  }
  return "#";
}

export function HomepageFooter() {
  const f = homepageCopy.footer;

  return (
    <footer className="bg-noir text-parchment">
      <div className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
          <p className="font-serif text-[clamp(96px,14vw,220px)] font-normal leading-none tracking-tight text-parchment [font-variation-settings:'opsz'_144]">
            {f.slabTitle.slice(0, -1)}
            <span className="text-bordeaux">.</span>
          </p>
          <p className="mt-6 max-w-[52ch] text-[13px] font-normal leading-relaxed text-sable-parchment">
            {f.slabSubtitle}
          </p>
        </div>
      </div>

      <div className="border-t border-parchment-hair py-16 md:py-20 [border-top-width:0.5px]">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 px-6 md:grid-cols-6 md:gap-0 md:px-10">
          {footerColumnKeys.map((key, idx) => {
            const col = f.columns[key];
            return (
              <div
                key={key}
                className={`min-w-0 md:border-l md:border-parchment-hair md:px-5 [md:border-left-width:0.5px] ${idx === 0 ? "md:border-l-0 md:pl-0" : ""}`}
              >
                <p className="font-mono text-[11px] font-normal uppercase tracking-eyebrow-wide text-parchment">
                  {col.title}
                </p>
                <ul className="mt-5 flex flex-col gap-2">
                  {col.links.map((label) => (
                    <li key={label}>
                      <Link
                        href={linkHref(label)}
                        className="text-[13px] font-normal text-parchment opacity-90 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-parchment-hair py-10 [border-top-width:0.5px]">
        <div className="mx-auto max-w-[1280px] px-6 text-center font-mono text-[10px] font-normal uppercase tracking-eyebrow-wide text-sable-parchment md:px-10">
          {f.frieze}
        </div>
      </div>

      <div className="border-t border-parchment-hair py-6 [border-top-width:0.5px]">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-4 px-6 font-mono text-[11px] text-sable-parchment md:flex-row md:items-center md:px-10">
          <p className="max-w-[70ch] leading-relaxed">{f.imprintLeft}</p>
          <p className="shrink-0">{f.imprintRight}</p>
        </div>
      </div>
    </footer>
  );
}
