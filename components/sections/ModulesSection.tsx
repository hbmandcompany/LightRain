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

export function ModulesSection() {
  return (
    <section
      id="app"
      aria-labelledby="modules-heading"
      className="min-h-screen bg-paper py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow className="mb-8">{copy.modules.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <SectionHeading id="modules-heading" variant="lg" className="mb-10">
            {copy.modules.headline}
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mb-20 max-w-[62ch] text-[17px] font-normal leading-[1.6] tracking-normal text-ink">
            {copy.modules.body}
          </p>
        </Reveal>

        <div className="flex flex-col">
          {copy.modules.items.map((mod, rowIndex) => (
            <div key={mod.title}>
              {rowIndex > 0 ? (
                <div className="py-12 md:py-[96px]">
                  <Rule />
                </div>
              ) : null}
              <div className="grid grid-cols-12 gap-8">
                <Reveal
                  delay={0.06}
                  className="col-span-12 lg:col-span-6"
                >
                  <Eyebrow className="mb-3">{mod.tabEyebrow}</Eyebrow>
                  <h3 className="mb-6 font-serif text-display-md font-normal tracking-tight text-ink">
                    {mod.title}
                  </h3>
                  <p className="max-w-[52ch] text-[16px] font-normal leading-[1.6] tracking-normal text-ink">
                    {mod.description}
                  </p>
                </Reveal>
                <Reveal
                  delay={0.12}
                  className="col-span-12 lg:col-span-6"
                >
                  <ul className="flex flex-col gap-3 pt-2">
                    {mod.features.map((feature) => (
                      <li key={feature}>
                        <Rule className="mb-3" />
                        <div className="flex items-start gap-3 pt-1">
                          <SquareMark />
                          <p className="text-[13px] font-normal leading-[1.6] text-ink">
                            {feature}
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
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
