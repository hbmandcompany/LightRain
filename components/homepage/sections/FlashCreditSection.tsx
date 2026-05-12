import { CreditLifecycleDiagram } from "@/components/homepage/illustrations/CreditLifecycleDiagram";
import { FlashLoanCycleDiagram } from "@/components/homepage/illustrations/FlashLoanCycleDiagram";
import { SectionFrame } from "@/components/homepage/primitives/SectionFrame";
import { Reveal } from "@/components/primitives/Reveal";
import { Numeral } from "@/components/primitives/Numeral";
import { homepageCopy } from "@/lib/homepage-copy";

export function FlashCreditSection() {
  const c = homepageCopy.flashCredit;

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
      <Reveal delay={0.06}>
        <p className="mx-auto mt-10 max-w-[62ch] text-center text-[17px] font-normal leading-[1.65] text-noir">
          {c.bridge}
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-12 gap-0 border-t border-trame [border-top-width:0.5px]">
        <div className="col-span-12 flex flex-col border-b border-trame py-10 lg:col-span-6 lg:border-b-0 lg:border-r lg:py-12 [border-bottom-width:0.5px] [lg:border-right-width:0.5px]">
          <Reveal delay={0.08}>
            <p className="mb-8 font-mono text-[11px] font-normal uppercase tracking-eyebrow-wide text-sable">
              {c.flash.label}
            </p>
            <FlashLoanCycleDiagram className="max-w-[280px]" />
            <div className="mt-10 flex flex-col divide-y divide-trame [divide-width:0.5px]">
              {c.flash.specs.map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between gap-4 py-3 font-mono text-[12px] text-noir font-plex-ss01"
                >
                  <span>{row.label}</span>
                  <Numeral className="tabular-nums">{row.value}</Numeral>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="col-span-12 flex flex-col py-10 lg:col-span-6 lg:py-12">
          <Reveal delay={0.1}>
            <p className="mb-8 font-mono text-[11px] font-normal uppercase tracking-eyebrow-wide text-sable">
              {c.credit.label}
            </p>
            <CreditLifecycleDiagram />
            <div className="mt-10 flex flex-col divide-y divide-trame [divide-width:0.5px]">
              {c.credit.specs.map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between gap-4 py-3 font-mono text-[12px] text-noir font-plex-ss01"
                >
                  <span>{row.label}</span>
                  <Numeral className="tabular-nums">{row.value}</Numeral>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </SectionFrame>
  );
}
