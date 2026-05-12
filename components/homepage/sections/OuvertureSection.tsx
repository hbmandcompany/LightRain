import Link from "next/link";

import { CompassRose } from "@/components/homepage/illustrations/CompassRose";
import { OuvertureHeroBand } from "@/components/homepage/sections/OuvertureHeroBand";
import { DropCap } from "@/components/homepage/primitives/DropCap";
import { NumeralBordeaux } from "@/components/homepage/primitives/NumeralBordeaux";
import { Reveal } from "@/components/primitives/Reveal";
import { Numeral } from "@/components/primitives/Numeral";
import { homepageCopy } from "@/lib/homepage-copy";

export function OuvertureSection() {
  const c = homepageCopy.ouverture;

  return (
    <section
      id={c.sectionId}
      aria-labelledby={c.headingId}
      className="min-h-screen bg-ivory pt-12 pb-16 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28"
    >
      <div className="hero-ouverture-texture w-full">
        <div className="relative z-[1] mx-auto w-full max-w-[1280px] px-6 md:px-10">
          <OuvertureHeroBand />
        </div>
      </div>

      <div className="relative z-[1] mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 border-b border-trame pb-4 pt-6 md:pt-8 [border-bottom-width:0.5px]">
          <p className="col-span-12 font-mono text-[11px] font-normal uppercase tracking-eyebrow-wide text-sable lg:col-span-4">
            {c.eyebrow}
          </p>
        </div>

        <div className="grid grid-cols-12 gap-10 pt-12 md:pt-16">
          <div className="col-span-12 lg:col-span-9">
            <Reveal delay={0}>
              <h1
                id={c.headingId}
                className="font-serif text-ouverture font-normal leading-[0.96] tracking-tight text-noir [font-variation-settings:'opsz'_144]"
              >
                <span className="block">
                  <DropCap letter={c.headline.dropCap} />
                  <span className="italic">{c.headline.line1.slice(1)}</span>
                </span>
                <span className="block italic">{c.headline.line2}</span>
                <span className="block">{c.headline.line3}</span>
                <span className="block">{c.headline.line4}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-10 max-w-[58ch] text-[17px] font-normal leading-[1.65] text-noir">
                {c.body}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={c.primaryCta.href}
                  className="inline-flex rounded-full border border-solid border-noir border-[0.5px] bg-noir px-8 py-3 text-[14px] font-normal text-parchment transition-shadow hover:shadow-[inset_0_0_0_1px_#0E0E0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
                >
                  {c.primaryCta.label}
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 flex justify-end lg:col-span-3">
            <Reveal delay={0.1}>
              <CompassRose className="opacity-90" />
            </Reveal>
          </div>
        </div>

        <div className="mt-20 border-t border-trame pt-10 [border-top-width:0.5px]">
          <div className="grid grid-cols-2 gap-0 md:grid-cols-5">
            {c.statsStrip.map((cell, i) => (
              <div
                key={cell.label}
                className={`flex flex-col gap-2 px-4 py-4 ${i < c.statsStrip.length - 1 ? "md:border-r md:border-trame [md:border-right-width:0.5px]" : ""} ${i % 2 === 0 ? "border-r border-trame [border-right-width:0.5px] md:border-r-0" : ""} border-b border-trame [border-bottom-width:0.5px] md:border-b-0`}
              >
                <span className="font-mono text-[10px] font-normal uppercase tracking-eyebrow-wide text-sable">
                  {cell.label}
                </span>
                <span className="font-mono text-[14px] font-normal tabular-nums font-plex-ss01">
                  {cell.label === "NOTIONNEL TRAITÉ" ||
                  cell.label === "LIGNES DE CRÉDIT" ? (
                    <NumeralBordeaux>{cell.value}</NumeralBordeaux>
                  ) : (
                    <Numeral className="font-plex-ss01 text-noir">
                      {cell.value}
                    </Numeral>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
