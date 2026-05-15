import Link from "next/link";

import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Numeral } from "@/components/primitives/Numeral";
import { Reveal } from "@/components/primitives/Reveal";
import { Rule } from "@/components/primitives/Rule";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { copy, gateway } from "@/lib/copy";

export interface HeroSectionProps {
  variant?: "marketing" | "gateway";
  /** When true with gateway variant, use tighter top padding for embedding under the marketing homepage header. */
  embedded?: boolean;
}

export function HeroSection({
  variant = "marketing",
  embedded = false,
}: HeroSectionProps) {
  const metrics = copy.hero.metrics;
  const isGateway = variant === "gateway";
  const eyebrow = isGateway ? gateway.heroEyebrow : copy.hero.eyebrow;
  const secondaryCta = isGateway
    ? gateway.heroSecondaryCta
    : copy.hero.secondaryCta;

  const gatewayTop =
    isGateway && embedded
      ? "pt-12 md:pt-16"
      : isGateway
        ? "pt-[140px] md:pt-[148px]"
        : "pt-32 md:pt-40";

  const homeIvory = Boolean(isGateway && embedded);

  const surface = homeIvory ? "bg-ivory text-noir" : "bg-paper text-ink";

  return (
    <section
      id="overview"
      aria-labelledby="hero-heading"
      className={`min-h-screen pb-24 ${surface} ${gatewayTop}`}
    >
      <Container>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <Reveal delay={0}>
              <Eyebrow className={`mb-8 ${homeIvory ? "!text-sable" : ""}`}>
                {eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <SectionHeading
                id="hero-heading"
                level="h1"
                variant="xl"
                className={`mb-8 ${homeIvory ? "!text-noir" : ""}`}
              >
                {copy.hero.headline}
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.12}>
              <p
                className={`mb-10 max-w-[52ch] text-[17px] font-normal leading-[1.6] tracking-normal ${homeIvory ? "text-noir" : "text-ink"}`}
              >
                {copy.hero.body}
              </p>
            </Reveal>
            {isGateway ? (
              <Reveal delay={0.14}>
                <p
                  className={`mb-10 max-w-[52ch] text-[15px] font-normal leading-[1.6] ${homeIvory ? "text-sable" : "text-mist"}`}
                >
                  {gateway.heroSubline}
                </p>
              </Reveal>
            ) : null}
            <Reveal delay={0.18}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#architecture"
                  className={
                    homeIvory
                      ? "inline-flex rounded-full border border-solid border-noir border-[0.5px] bg-noir px-6 py-3 text-[14px] font-normal text-parchment transition-shadow hover:shadow-[inset_0_0_0_1px_#0E0E0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
                      : "inline-flex rounded-full bg-ink px-6 py-3 text-[14px] font-normal text-paper transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  }
                >
                  {copy.hero.primaryCta}
                </Link>
                <Link
                  href="#access"
                  className={
                    homeIvory
                      ? "inline-flex rounded-full border border-solid border-noir border-[0.5px] bg-transparent px-6 py-3 text-[14px] font-normal text-noir transition-shadow hover:shadow-[inset_0_0_0_1px_#0E0E0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
                      : "inline-flex rounded-full border border-solid border-ink px-6 py-3 text-[14px] font-normal text-ink transition-colors duration-200 hover:bg-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink [border-width:0.5px]"
                  }
                >
                  {secondaryCta}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 md:mt-[64px]">
          <Rule className={homeIvory ? "!border-trame" : ""} />
          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-0 lg:pt-16">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`px-6 py-4 ${i < metrics.length - 1 ? `border-r border-solid [border-right-width:0.5px] ${homeIvory ? "border-trame" : "border-hair"}` : ""}`}
              >
                <Reveal delay={0.06 * i}>
                  <div className="flex flex-col gap-2">
                    <Eyebrow as="span" className={homeIvory ? "!text-sable" : ""}>
                      {m.label}
                    </Eyebrow>
                    <p
                      className={`text-[15px] font-normal ${homeIvory ? "text-noir" : "text-ink"}`}
                    >
                      <Numeral>{m.value}</Numeral>
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
          <div className="flex flex-col pt-10 lg:hidden">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`py-6 ${i > 0 ? `border-t border-solid [border-top-width:0.5px] ${homeIvory ? "border-trame" : "border-hair"}` : ""}`}
              >
                <Reveal delay={0.06 * i}>
                  <div className="flex flex-col gap-2">
                    <Eyebrow as="span" className={homeIvory ? "!text-sable" : ""}>
                      {m.label}
                    </Eyebrow>
                    <p
                      className={`text-[15px] font-normal ${homeIvory ? "text-noir" : "text-ink"}`}
                    >
                      <Numeral>{m.value}</Numeral>
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
