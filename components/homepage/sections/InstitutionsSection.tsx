import { SectionFrame } from "@/components/homepage/primitives/SectionFrame";
import { Reveal } from "@/components/primitives/Reveal";
import { Numeral } from "@/components/primitives/Numeral";
import { homepageCopy } from "@/lib/homepage-copy";

export function InstitutionsSection() {
  const c = homepageCopy.institutions;

  return (
    <SectionFrame
      id={c.sectionId}
      ariaLabelledby={c.headingId}
      eyebrow={c.eyebrow}
      backgroundClass="bg-parchment"
    >
      <Reveal delay={0}>
        <h2
          id={c.headingId}
          className="max-w-[22ch] font-serif text-section font-normal leading-none tracking-tight text-noir [font-variation-settings:'opsz'_144]"
        >
          {c.headline}
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-12 gap-0">
        {c.columns.map((col, i) => (
          <div
            key={col.eyebrow}
            className={`col-span-12 border-t border-trame px-0 py-10 md:col-span-4 md:border-t-0 md:px-6 md:py-0 [border-top-width:0.5px] ${i > 0 ? "md:border-l md:border-trame [md:border-left-width:0.5px]" : ""}`}
          >
            <Reveal delay={0.06 + i * 0.05}>
              <p className="font-mono text-[11px] font-normal uppercase tracking-eyebrow-wide text-sable">
                {col.eyebrow}
              </p>
              <h3 className="mt-4 font-serif text-[30px] font-normal leading-tight tracking-tight text-noir [font-variation-settings:'opsz'_144]">
                {col.title}
              </h3>
              <p className="mt-4 text-[14px] font-normal leading-relaxed text-noir">
                {col.body}
              </p>
            </Reveal>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-2 gap-0 border-t border-trame md:grid-cols-4 [border-top-width:0.5px]">
        {c.stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col gap-1 px-4 py-4 font-mono text-[12px] text-noir font-plex-ss01 ${i < c.stats.length - 1 ? "border-r border-trame [border-right-width:0.5px]" : ""}`}
          >
            <span className="text-[10px] uppercase tracking-eyebrow-wide text-sable">
              {s.label}
            </span>
            <Numeral className="tabular-nums">{s.value}</Numeral>
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}
