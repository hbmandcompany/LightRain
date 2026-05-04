import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { copy } from "@/lib/copy";

export function InstitutionalSection() {
  const cols = copy.institutional.columns;

  return (
    <section
      id="institutional"
      aria-labelledby="institutional-heading"
      className="min-h-screen bg-bone py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow className="mb-8">{copy.institutional.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <SectionHeading
            id="institutional-heading"
            variant="lg"
            className="mb-16"
          >
            {copy.institutional.headline}
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-12 gap-8 md:gap-0">
          {cols.map((col, index) => (
            <Reveal
              key={col.title}
              delay={0.06 * index}
              className="col-span-12 border-t border-solid border-hair pt-10 md:col-span-4 md:border-l md:border-t-0 md:px-8 md:pt-0 lg:px-10 [&:nth-child(1)]:md:border-l-0 [border-top-width:0.5px] md:[border-left-width:0.5px]"
            >
              <h3 className="mb-6 font-serif text-display-md font-normal tracking-tight text-ink">
                {col.title}
              </h3>
              <p className="max-w-[62ch] text-[15px] font-normal leading-[1.6] tracking-normal text-ink">
                {col.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
