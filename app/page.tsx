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

export default function Home() {
  return (
    <>
      <a href="#overview" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main>
        <HeroSection />
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
