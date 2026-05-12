import Link from "next/link";

import { AppGatewayPhoneEngraving } from "@/components/homepage/illustrations/AppGatewayPhoneEngraving";
import { SectionFrame } from "@/components/homepage/primitives/SectionFrame";
import { Reveal } from "@/components/primitives/Reveal";
import { homepageCopy } from "@/lib/homepage-copy";

export function AppGatewaySection() {
  const c = homepageCopy.appGateway;

  return (
    <SectionFrame
      id={c.sectionId}
      ariaLabelledby={c.headingId}
      eyebrow={c.eyebrow}
      backgroundClass="bg-parchment"
    >
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-6">
          <Reveal delay={0}>
            <h2
              id={c.headingId}
              className="font-serif text-section font-normal leading-none tracking-tight text-noir [font-variation-settings:'opsz'_144]"
            >
              {c.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-10 text-[16px] font-normal leading-[1.65] text-noir">
              {c.body}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <Link
              href={c.cta.href}
              className="mt-10 inline-flex rounded-full border border-solid border-noir border-[0.5px] bg-transparent px-8 py-3 text-[14px] font-normal text-noir transition-shadow hover:shadow-[inset_0_0_0_1px_#0E0E0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
            >
              {c.cta.label}
            </Link>
          </Reveal>
        </div>
        <div className="col-span-12 flex justify-center lg:col-span-5 lg:col-start-8">
          <Reveal delay={0.08}>
            <AppGatewayPhoneEngraving />
          </Reveal>
        </div>
      </div>
    </SectionFrame>
  );
}
