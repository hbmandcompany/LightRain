import type { Metadata } from "next";

import { ImmersiveChapterHero } from "@/components/homepage/immersive/ImmersiveChapterHero";
import { ImmersivePageShell } from "@/components/homepage/immersive/ImmersivePageShell";
import { RiskSection } from "@/components/homepage/sections/RiskSection";
import { homepageCopy } from "@/lib/homepage-copy";

const c = homepageCopy.risk;

export const metadata: Metadata = {
  title: "Les Garanties · LightRain",
  description: c.headline,
};

export default function LesGarantiesPage() {
  return (
    <ImmersivePageShell skipHref="#section-garanties">
      <ImmersiveChapterHero
        kicker="Chapitre IV · Garanties"
        title={c.headline}
        lede={c.citation}
      />
      <RiskSection />
    </ImmersivePageShell>
  );
}
