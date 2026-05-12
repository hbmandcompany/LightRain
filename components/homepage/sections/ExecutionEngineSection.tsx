import { ExecutionEngineSchematic } from "@/components/homepage/illustrations/ExecutionEngineSchematic";
import { Aside } from "@/components/homepage/primitives/Aside";
import { SectionFrame } from "@/components/homepage/primitives/SectionFrame";
import { Reveal } from "@/components/primitives/Reveal";
import { homepageCopy } from "@/lib/homepage-copy";

export function ExecutionEngineSection() {
  const c = homepageCopy.execution;

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
          className="max-w-[24ch] font-serif text-section font-normal leading-none tracking-tight text-noir [font-variation-settings:'opsz'_144]"
        >
          {c.headline}
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-12 gap-12">
        <div className="col-span-12 flex flex-col gap-10 lg:col-span-6">
          <Reveal delay={0.06}>
            <p className="text-[16px] font-normal leading-[1.65] text-noir">
              {c.body}
            </p>
          </Reveal>
          {c.steps.map((step, i) => (
            <Reveal key={step.label} delay={0.08 + i * 0.05}>
              <div>
                <p className="font-mono text-[11px] font-normal uppercase tracking-eyebrow-wide text-sable">
                  {step.label}
                </p>
                <p className="mt-2 text-[14px] font-normal leading-relaxed text-noir">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Reveal delay={0.1}>
            <ExecutionEngineSchematic />
          </Reveal>
        </div>
      </div>

      <div className="mt-16">
        <Reveal delay={0.16}>
          <Aside>{c.aside}</Aside>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
