import type { Metadata } from "next";

import { ImmersiveChapterHero } from "@/components/homepage/immersive/ImmersiveChapterHero";
import { ImmersivePageShell } from "@/components/homepage/immersive/ImmersivePageShell";
import { InstitutionsSection } from "@/components/homepage/sections/InstitutionsSection";
import { MaisonSection } from "@/components/homepage/sections/MaisonSection";
import { homepageCopy } from "@/lib/homepage-copy";

const c = homepageCopy.maison;

export const metadata: Metadata = {
  title: "La Maison · LightRain",
  description: c.headline,
};

export default function LaMaisonPage() {
  return (
    <ImmersivePageShell skipHref="#section-maison">
      <ImmersiveChapterHero
        kicker="Chapitre V · Maison"
        title={c.headline}
        lede={c.paragraphs[0]}
      />
      <MaisonSection />
      <InstitutionsSection />
    </ImmersivePageShell>
  );
}
