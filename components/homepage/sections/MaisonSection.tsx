import { EngraveMark } from "@/components/homepage/illustrations/EngraveMark";
import { Citation } from "@/components/homepage/primitives/Citation";
import { SectionFrame } from "@/components/homepage/primitives/SectionFrame";
import { Reveal } from "@/components/primitives/Reveal";
import { homepageCopy } from "@/lib/homepage-copy";

export function MaisonSection() {
  const c = homepageCopy.maison;

  return (
    <SectionFrame
      id={c.sectionId}
      ariaLabelledby={c.headingId}
      eyebrow={c.eyebrow}
      backgroundClass="bg-ivory"
    >
      <Reveal delay={0}>
        <h2
          id={c.headingId}
          className="max-w-[24ch] font-serif text-section font-normal leading-none tracking-tight text-noir [font-variation-settings:'opsz'_144]"
        >
          {c.headline}
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-12 gap-12">
        <div className="col-span-12 flex flex-col gap-6 lg:col-span-7">
          {c.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.06 + i * 0.05}>
              <p className="text-[16px] font-normal leading-[1.65] text-noir">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="col-span-12 flex flex-col items-start gap-6 lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.1}>
            <EngraveMark variant="watermark" />
            <div className="mt-6 flex flex-col gap-1 font-mono text-[9px] font-normal uppercase tracking-eyebrow-wide text-sable">
              {c.slab.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-20">
        <Reveal delay={0.16}>
          <Citation className="text-[22px] leading-snug">
            {c.citation}
          </Citation>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
