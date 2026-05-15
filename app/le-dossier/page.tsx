import type { Metadata } from "next";

import { ImmersiveChapterHero } from "@/components/homepage/immersive/ImmersiveChapterHero";
import { ImmersivePageShell } from "@/components/homepage/immersive/ImmersivePageShell";
import { DossierSection } from "@/components/homepage/sections/DossierSection";
import { homepageCopy } from "@/lib/homepage-copy";

const c = homepageCopy.dossier;

export const metadata: Metadata = {
  title: "Le Dossier · LightRain",
  description: c.headline,
};

export default function LeDossierPage() {
  return (
    <ImmersivePageShell skipHref="#section-dossier">
      <ImmersiveChapterHero
        kicker="Chapitre VI · Dossier"
        title={c.headline}
        lede={c.closing}
      />
      <DossierSection />
    </ImmersivePageShell>
  );
}
