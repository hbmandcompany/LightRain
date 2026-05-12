import { BaseChainSchematic } from "@/components/homepage/illustrations/BaseChainSchematic";
import { SectionFrame } from "@/components/homepage/primitives/SectionFrame";
import { Reveal } from "@/components/primitives/Reveal";
import { Numeral } from "@/components/primitives/Numeral";
import { homepageCopy } from "@/lib/homepage-copy";

export function BaseSection() {
  const c = homepageCopy.base;

  return (
    <SectionFrame
      id={c.sectionId}
      ariaLabelledby={c.headingId}
      eyebrow={c.eyebrow}
      backgroundClass="bg-parchment"
    >
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-5">
          <Reveal delay={0}>
            <h2
              id={c.headingId}
              className="font-serif text-section font-normal leading-none tracking-tight text-noir [font-variation-settings:'opsz'_144]"
            >
              {c.headline}
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-6">
            {c.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.06 + i * 0.04}>
                <p className="text-[16px] font-normal leading-[1.65] text-noir">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <Reveal delay={0.08}>
            <BaseChainSchematic />
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-0 border-t border-trame md:grid-cols-4 [border-top-width:0.5px]">
        {c.stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col gap-1 px-4 py-4 font-mono text-[12px] text-noir font-plex-ss01 ${i < c.stats.length - 1 ? "border-r border-trame [border-right-width:0.5px]" : ""}`}
          >
            <span className="text-[10px] uppercase tracking-eyebrow-wide text-sable">
              {s.label}
            </span>
            <Numeral className="tabular-nums">{s.value}</Numeral>
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}
