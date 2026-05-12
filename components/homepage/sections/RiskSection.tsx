import { RiskCascadeIllustration } from "@/components/homepage/illustrations/RiskCascadeIllustration";
import { SectionFrame } from "@/components/homepage/primitives/SectionFrame";
import { Reveal } from "@/components/primitives/Reveal";
import { homepageCopy } from "@/lib/homepage-copy";

export function RiskSection() {
  const c = homepageCopy.risk;
  const firstRow = c.cards.slice(0, 4);
  const secondRow = c.cards.slice(4, 8);

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
          className="max-w-[20ch] font-serif text-section font-normal leading-none tracking-tight text-noir [font-variation-settings:'opsz'_144]"
        >
          {c.headline}
        </h2>
      </Reveal>

      <div className="mt-12">
        <Reveal delay={0.06}>
          <RiskCascadeIllustration />
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
        {firstRow.map((card, i) => (
          <Reveal key={card.ordinal} delay={0.06 + i * 0.04}>
            <article className="border-t border-trame pt-4 [border-top-width:0.5px]">
              <p className="font-mono text-[11px] text-sable">{card.ordinal}</p>
              <h3 className="mt-2 font-serif text-[22px] font-normal italic leading-snug text-noir [font-variation-settings:'opsz'_144]">
                {card.title}
              </h3>
              <p className="mt-2 font-serif text-[22px] font-normal leading-snug text-noir [font-variation-settings:'opsz'_144]">
                {card.headline}
              </p>
              <p className="mt-3 text-[14px] font-normal leading-relaxed text-noir">
                {card.body}
              </p>
              <p className="mt-4 font-mono text-[11px] text-sable">{card.controls}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="my-14 flex justify-center">
        <Reveal delay={0.12}>
          <p className="max-w-[48ch] text-center font-serif text-[24px] italic leading-snug text-noir [font-variation-settings:'opsz'_144]">
            {c.citation}
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
        {secondRow.map((card, i) => (
          <Reveal key={card.ordinal} delay={0.14 + i * 0.04}>
            <article className="border-t border-trame pt-4 [border-top-width:0.5px]">
              <p className="font-mono text-[11px] text-sable">{card.ordinal}</p>
              <h3 className="mt-2 font-serif text-[22px] font-normal italic leading-snug text-noir [font-variation-settings:'opsz'_144]">
                {card.title}
              </h3>
              <p className="mt-2 font-serif text-[22px] font-normal leading-snug text-noir [font-variation-settings:'opsz'_144]">
                {card.headline}
              </p>
              <p className="mt-3 text-[14px] font-normal leading-relaxed text-noir">
                {card.body}
              </p>
              <p className="mt-4 font-mono text-[11px] text-sable">{card.controls}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}
