import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { copy } from "@/lib/copy";

export function TrustSection() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="min-h-screen bg-paper py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow className="mb-8">{copy.trust.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <SectionHeading id="trust-heading" variant="lg" className="mb-16">
            {copy.trust.headline}
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-12 gap-8 md:gap-y-16">
          {copy.trust.cards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={0.06 * (index % 3)}
              className="col-span-12 border-t border-solid border-hair pt-8 md:col-span-6 lg:col-span-4 [border-top-width:0.5px]"
            >
              <Eyebrow className="mb-4">{card.eyebrow}</Eyebrow>
              <h3 className="mb-4 font-serif text-display-md font-normal tracking-tight text-ink">
                {card.title}
              </h3>
              <p className="max-w-[62ch] text-[14px] font-normal leading-[1.6] tracking-normal text-ink">
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
