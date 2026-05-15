import type { Metadata } from "next";

import { ImmersiveChapterHero } from "@/components/homepage/immersive/ImmersiveChapterHero";
import { ImmersivePageShell } from "@/components/homepage/immersive/ImmersivePageShell";
import { ThesisSection } from "@/components/homepage/sections/ThesisSection";
import { homepageCopy } from "@/lib/homepage-copy";

const c = homepageCopy.these;
const first = c.columns.left[0];
const lede: string =
  "text" in first
    ? String(first.text)
    : `${first.lead}${first.em}${first.rest}`;

export const metadata: Metadata = {
  title: "La Thèse · LightRain",
  description: c.headline,
};

export default function LaThesePage() {
  return (
    <ImmersivePageShell skipHref="#section-these">
      <ImmersiveChapterHero
        kicker="Chapitre I · Thèse"
        title={c.headline}
        lede={lede}
      />
      <ThesisSection />
    </ImmersivePageShell>
  );
}
