import type { Metadata } from "next";

import { ImmersiveChapterHero } from "@/components/homepage/immersive/ImmersiveChapterHero";
import { ImmersivePageShell } from "@/components/homepage/immersive/ImmersivePageShell";
import { CapitalMechanicsSection } from "@/components/homepage/sections/CapitalMechanicsSection";
import { FlashCreditSection } from "@/components/homepage/sections/FlashCreditSection";
import { homepageCopy } from "@/lib/homepage-copy";

const c = homepageCopy.flashCredit;

export const metadata: Metadata = {
  title: "La Pratique · LightRain",
  description: c.headline,
};

export default function LaPratiquePage() {
  return (
    <ImmersivePageShell skipHref="#section-pratique">
      <ImmersiveChapterHero
        kicker="Chapitre II · Pratique"
        title={c.headline}
        lede={c.bridge}
      />
      <FlashCreditSection />
      <CapitalMechanicsSection />
    </ImmersivePageShell>
  );
}
