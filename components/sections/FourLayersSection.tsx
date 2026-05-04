import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { Rule } from "@/components/primitives/Rule";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { copy } from "@/lib/copy";

export function FourLayersSection() {
  return (
    <section
      id="protocol"
      aria-labelledby="layers-heading"
      className="min-h-screen bg-paper py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow className="mb-8">{copy.fourLayers.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <SectionHeading id="layers-heading" variant="lg" className="mb-16">
            {copy.fourLayers.headline}
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-12 gap-8">
          {copy.fourLayers.cards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={0.06 * index}
              className="col-span-12 flex flex-col border-t border-solid border-hair pt-8 md:col-span-6 lg:col-span-3 [border-top-width:0.5px]"
            >
              <p className="mb-3 text-[13px] font-normal leading-[1.6] text-mist">
                {card.layerLine}
              </p>
              <Eyebrow className="mb-4">{card.eyebrow}</Eyebrow>
              <h3 className="mb-4 font-serif text-display-md font-normal tracking-tight text-ink">
                {card.title}
              </h3>
              <p className="mb-auto max-w-[62ch] grow text-[15px] font-normal leading-[1.6] tracking-normal text-ink">
                {card.body}
              </p>
              <p className="mt-10 font-mono text-[11px] font-normal text-ink">
                {card.detail}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Rule className="mb-10" />
          <Reveal delay={0.06}>
            <p className="text-center text-[14px] font-normal text-mist">
              {copy.fourLayers.caption}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
