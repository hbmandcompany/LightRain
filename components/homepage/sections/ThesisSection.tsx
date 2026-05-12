import { CapitalFlowDiagram } from "@/components/homepage/illustrations/CapitalFlowDiagram";
import { Citation } from "@/components/homepage/primitives/Citation";
import { SectionFrame } from "@/components/homepage/primitives/SectionFrame";
import { Reveal } from "@/components/primitives/Reveal";
import { homepageCopy } from "@/lib/homepage-copy";

const ordinals = ["I.", "II.", "III.", "IV."] as const;

export function ThesisSection() {
  const c = homepageCopy.these;

  return (
    <SectionFrame
      id={c.sectionId}
      ariaLabelledby={c.headingId}
      eyebrow={c.eyebrow}
      backgroundClass="bg-parchment"
    >
      <Reveal delay={0}>
        <h2
          id={c.headingId}
          className="max-w-[18ch] font-serif text-thesis font-normal leading-none tracking-tight text-noir [font-variation-settings:'opsz'_144]"
        >
          {c.headline}
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-12 gap-12">
        <div className="col-span-12 flex flex-col gap-8 lg:col-span-6">
          {c.columns.left.map((block, i) => (
            <Reveal key={ordinals[i]} delay={0.06 * (i + 1)}>
              <p className="text-[16px] font-normal leading-[1.65] text-noir">
                <span className="mr-2 font-mono text-[12px] text-bordeaux">
                  {ordinals[i]}
                </span>
                {"em" in block ? (
                  <>
                    {block.lead}
                    <em className="font-serif not-italic italic text-noir [font-variation-settings:'opsz'_144]">
                      {block.em}
                    </em>
                    {block.rest}
                  </>
                ) : (
                  block.text
                )}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-8">
          <Reveal delay={0.12}>
            <CapitalFlowDiagram />
          </Reveal>
        </div>
      </div>

      <div className="mt-20">
        <Reveal delay={0.18}>
          <Citation className="text-[28px] leading-snug">
            {c.citation.quote}{" "}
            <span className="block mt-3 font-sans text-[13px] not-italic text-sable">
              — {c.citation.attribution}
            </span>
          </Citation>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
