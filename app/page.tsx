import type { Metadata } from "next";

import { HomepageFooter } from "@/components/homepage/Footer";
import { HomeGatewayMarketing } from "@/components/homepage/HomeGatewayMarketing";
import { HomepageHeader } from "@/components/homepage/Header";
import { DossierSection } from "@/components/homepage/sections/DossierSection";
import { OuvertureSection } from "@/components/homepage/sections/OuvertureSection";
import { homepageCopy } from "@/lib/homepage-copy";

export const metadata: Metadata = {
  title: "LightRain · decentralized execution and credit on Base",
  description: homepageCopy.ouverture.body,
};

export default function Home() {
  return (
    <div className="homepage-root min-h-screen bg-ivory text-noir antialiased">
      <a
        href="#section-ouverture"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-20 focus:z-[100] focus:bg-ivory focus:px-4 focus:py-3 focus:text-[13px] focus:text-noir focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-bordeaux"
      >
        Skip to content
      </a>
      <HomepageHeader />
      <main className="pt-[72px]">
        <OuvertureSection showEditorial={false} />
        <HomeGatewayMarketing />
        <DossierSection />
      </main>
      <HomepageFooter />
    </div>
  );
}
