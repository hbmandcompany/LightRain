import { VaultElevation } from "@/components/homepage/illustrations/VaultElevation";
import { SectionFrame } from "@/components/homepage/primitives/SectionFrame";
import { Reveal } from "@/components/primitives/Reveal";
import { Numeral } from "@/components/primitives/Numeral";
import { homepageCopy } from "@/lib/homepage-copy";

export function CapitalMechanicsSection() {
  const c = homepageCopy.capital;

  return (
    <SectionFrame
      id={c.sectionId}
      ariaLabelledby={c.headingId}
      eyebrow={c.eyebrow}
      backgroundClass="bg-noir text-parchment"
      eyebrowOnDark
    >
      <Reveal delay={0}>
        <h2
          id={c.headingId}
          className="max-w-[18ch] font-serif text-section font-normal leading-none tracking-tight text-parchment [font-variation-settings:'opsz'_144]"
        >
          {c.headline}
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-12 gap-12">
        <div className="col-span-12 flex flex-col gap-6 lg:col-span-4">
          {c.body.map((para, idx) => (
            <Reveal key={idx} delay={0.06}>
              <p className="text-[16px] font-normal leading-[1.65] text-parchment">
                {para}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="col-span-12 flex justify-center lg:col-span-4 lg:col-start-5">
          <Reveal delay={0.1}>
            <VaultElevation className="max-w-[220px]" />
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-3 lg:col-start-10">
          <Reveal delay={0.12}>
            <div className="border border-parchment-hair p-4 font-mono text-[12px] leading-relaxed text-parchment [border-width:0.5px]">
              <div className="grid grid-cols-3 gap-2 border-b border-parchment-hair pb-2 font-mono text-[10px] uppercase tracking-eyebrow-wide text-sable-parchment [border-bottom-width:0.5px]">
                <span>COLLATÉRAL</span>
                <span className="text-center">SEUIL</span>
                <span className="text-right">FRAIS</span>
              </div>
              {c.ledger.map((row) => (
                <div
                  key={row.asset}
                  className="grid grid-cols-3 gap-2 border-b border-parchment-hair py-2 last:border-b-0 [border-bottom-width:0.5px]"
                >
                  <span>{row.asset}</span>
                  <Numeral className="text-center font-plex-ss01 tabular-nums">
                    {row.seuil}
                  </Numeral>
                  <Numeral className="text-right font-plex-ss01 tabular-nums">
                    {row.frais}
                  </Numeral>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </SectionFrame>
  );
}
