import type { Metadata } from "next";

import Link from "next/link";

import { AccessSection } from "@/components/sections/AccessSection";
import { ConstraintSection } from "@/components/sections/ConstraintSection";
import { DataFlowSection } from "@/components/sections/DataFlowSection";
import { FourLayersSection } from "@/components/sections/FourLayersSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstitutionalSection } from "@/components/sections/InstitutionalSection";
import { ModulesSection } from "@/components/sections/ModulesSection";
import { PhoneMockSection } from "@/components/sections/PhoneMockSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { gateway } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Download · LightRain",
  description:
    "Download the LightRain institutional iOS application gateway and request TestFlight access.",
};

export default function DownloadPage() {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] flex h-9 items-center justify-center border-b border-trame bg-paper [border-bottom-width:0.5px]">
        <Link
          href={gateway.returnLink.href}
          className="text-center text-[12px] font-normal text-mist transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          {gateway.returnLink.label}
        </Link>
      </div>
      <Header />
      <main>
        <HeroSection variant="gateway" />
        <ConstraintSection />
        <FourLayersSection />
        <DataFlowSection />
        <ModulesSection />
        <PhoneMockSection />
        <TrustSection />
        <InstitutionalSection />
        <AccessSection />
      </main>
      <Footer />
    </>
  );
}
