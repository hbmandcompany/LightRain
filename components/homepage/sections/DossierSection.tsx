import Link from "next/link";

import { SectionFrame } from "@/components/homepage/primitives/SectionFrame";
import { Reveal } from "@/components/primitives/Reveal";
import { homepageCopy } from "@/lib/homepage-copy";

export function DossierSection() {
  const c = homepageCopy.dossier;

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
          className="max-w-[20ch] font-serif text-dossier font-normal leading-none tracking-tight text-noir [font-variation-settings:'opsz'_144]"
        >
          {c.headline}
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-12 gap-10 md:gap-8">
        {c.columns.map((col, i) => (
          <div key={col.title} className="col-span-12 sm:col-span-6 lg:col-span-3">
            <Reveal delay={0.06 + i * 0.04}>
              <p className="font-mono text-[11px] font-normal uppercase tracking-eyebrow-wide text-sable">
                {col.title}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {col.links.map((label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      className="group flex items-center gap-2 text-[13px] font-normal text-noir underline decoration-trame decoration-[0.5px] underline-offset-4 transition-colors hover:decoration-noir focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
                    >
                      <span>{label}</span>
                      <span className="text-bordeaux transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Reveal delay={0.18}>
          <p className="text-center font-serif text-[22px] italic leading-snug text-noir [font-variation-settings:'opsz'_144]">
            {c.closing}
          </p>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
