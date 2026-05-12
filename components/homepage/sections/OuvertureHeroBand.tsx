import { ApplyOfferColumn } from "@/components/homepage/sections/ApplyOfferColumn";
import { Reveal } from "@/components/primitives/Reveal";
import { homepageCopy } from "@/lib/homepage-copy";

import { SignOnCard } from "./SignOnCard";

export function OuvertureHeroBand() {
  const { card, applyOfferColumn } = homepageCopy.ouverture.heroBand;

  return (
    <div className="mb-14 md:mb-20">
      <div className="hero-cards-luxury-panel -mx-1 rounded-sm px-3 py-5 sm:-mx-2 sm:px-4 sm:py-6 md:px-5 md:py-7">
        <div className="relative z-[1] mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="flex justify-center lg:ml-16 lg:justify-start">
            <Reveal delay={0}>
              <ApplyOfferColumn copy={applyOfferColumn} />
            </Reveal>
          </div>
          <div className="flex justify-center lg:mt-16">
            <Reveal delay={0.06}>
              <SignOnCard {...card} />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
