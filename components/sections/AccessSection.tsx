import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { copy } from "@/lib/copy";

export function AccessSection() {
  const a = copy.access;

  return (
    <section
      id="access"
      aria-labelledby="access-heading"
      className="min-h-screen bg-paper py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow className="mb-8">{a.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <SectionHeading id="access-heading" variant="xl" className="mb-10">
            {a.headline}
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-12 flex flex-col gap-10 lg:col-span-7">
            <Reveal delay={0.12}>
              <p className="max-w-[62ch] text-[17px] font-normal leading-[1.6] tracking-normal text-ink">
                {a.intro}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div
                className="h-px max-w-[min(100%,48rem)] bg-gradient-to-r from-bordeaux/70 via-hair to-transparent"
                aria-hidden
              />
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-[62ch] text-[17px] font-normal leading-[1.6] tracking-normal text-ink">
                {a.bodyMid}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <figure className="relative max-w-[min(100%,52ch)] border-l-2 border-solid border-bordeaux pl-6 pt-1">
                <blockquote className="font-serif text-[1.35rem] font-normal leading-snug tracking-tight text-ink md:text-[1.5rem]">
                  {a.quote.body}
                </blockquote>
                <figcaption className="mt-5 font-mono text-[12px] font-normal text-mist">
                  {a.quote.attribution}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="max-w-[58ch] text-[15px] font-normal leading-[1.65] tracking-normal text-mist">
                {a.bodyClose}
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:pt-2">
            <Reveal delay={0.18}>
              <div className="flex flex-col border-t border-solid border-hair pt-8 [border-top-width:0.5px] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 lg:[border-left-width:0.5px]">
                <p className="mb-8 font-mono text-[11px] font-normal uppercase tracking-[0.22em] text-bordeaux">
                  {a.asideTitle}
                </p>
                <ul className="flex flex-col gap-0">
                  {a.pillars.map((pillar, index) => (
                    <li
                      key={pillar.label}
                      className="border-t border-solid border-hair py-6 first:border-t-0 first:pt-0 [border-top-width:0.5px]"
                    >
                      <div className="flex gap-5">
                        <span
                          className="shrink-0 font-mono text-[12px] font-normal tabular-nums text-bordeaux"
                          aria-hidden
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0">
                          <p className="font-mono text-[11px] font-normal uppercase tracking-[0.14em] text-mist">
                            {pillar.label}
                          </p>
                          <p className="mt-1.5 text-[15px] font-normal leading-snug text-ink">
                            {pillar.value}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-col gap-3 border-t border-solid border-hair pt-8 [border-top-width:0.5px]">
                  {a.contactLines.map((line) => (
                    <a
                      key={line}
                      href={`mailto:${line}`}
                      className="font-mono text-[13px] font-normal text-ink underline decoration-hair decoration-[0.5px] underline-offset-4 transition-colors hover:text-bordeaux hover:decoration-bordeaux/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      {line}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
