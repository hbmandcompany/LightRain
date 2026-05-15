import type { Metadata } from "next";

import { ImmersiveChapterHero } from "@/components/homepage/immersive/ImmersiveChapterHero";
import { ImmersivePageShell } from "@/components/homepage/immersive/ImmersivePageShell";
import { BaseSection } from "@/components/homepage/sections/BaseSection";
import { ExecutionEngineSection } from "@/components/homepage/sections/ExecutionEngineSection";
import { homepageCopy } from "@/lib/homepage-copy";

const c = homepageCopy.execution;

export const metadata: Metadata = {
  title: "La Mécanique · LightRain",
  description: c.headline,
};

export default function LaMecaniquePage() {
  return (
    <ImmersivePageShell skipHref="#section-mecanique">
      <ImmersiveChapterHero
        kicker="Chapitre III · Mécanique"
        title={c.headline}
        lede={c.body}
      />
      <ExecutionEngineSection />
      <BaseSection />
    </ImmersivePageShell>
  );
}
