import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { Rule } from "@/components/primitives/Rule";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { copy } from "@/lib/copy";

function SquareMark() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden className="shrink-0">
      <rect width="8" height="8" fill="#0a0a0a" />
    </svg>
  );
}

export function ConstraintSection() {
  return (
    <section
      id="constraint"
      aria-labelledby="constraint-heading"
      className="min-h-screen bg-bone py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow className="mb-8">{copy.constraint.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <SectionHeading id="constraint-heading" variant="lg" className="mb-12">
            {copy.constraint.headline}
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-12 gap-8">
          <Reveal delay={0.12} className="col-span-12 lg:col-span-6">
            <p className="max-w-[62ch] text-[17px] font-normal leading-[1.6] tracking-normal text-ink">
              {copy.constraint.leftColumn}
            </p>
          </Reveal>
          <Reveal delay={0.18} className="col-span-12 lg:col-span-6">
            <ul className="flex flex-col gap-3">
              {copy.constraint.cannotItems.map((item) => (
                <li key={item}>
                  <Rule className="mb-3" />
                  <div className="flex items-start gap-3 pt-1">
                    <SquareMark />
                    <p className="text-[14px] font-normal leading-[1.6] text-ink">
                      {item}
                    </p>
                  </div>
                </li>
              ))}
              <li>
                <Rule />
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-24 md:mt-[96px]">
          <Rule className="mb-24 md:mb-[96px]" />
          <Reveal delay={0.06}>
            <p className="font-serif text-display-md font-normal italic text-mist">
              {copy.constraint.pullQuote}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
