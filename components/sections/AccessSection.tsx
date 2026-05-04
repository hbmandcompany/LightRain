import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { AccessForm } from "@/components/sections/AccessForm";
import { copy } from "@/lib/copy";

export function AccessSection() {
  return (
    <section
      id="access"
      aria-labelledby="access-heading"
      className="min-h-screen bg-paper py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow className="mb-8">{copy.access.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <SectionHeading id="access-heading" variant="xl" className="mb-10">
            {copy.access.headline}
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-12 lg:col-span-7">
            <Reveal delay={0.12}>
              <p className="mb-12 max-w-[62ch] text-[17px] font-normal leading-[1.6] tracking-normal text-ink">
                {copy.access.body}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <AccessForm />
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pt-4">
            <Reveal delay={0.24}>
              <div className="flex flex-col gap-4 border-t border-solid border-hair pt-8 [border-top-width:0.5px] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 lg:[border-left-width:0.5px]">
                {copy.access.aside.lines.map((line) => (
                  <p key={line} className="font-mono text-[13px] font-normal text-ink">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
