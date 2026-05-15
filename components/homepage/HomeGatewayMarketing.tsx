import { AccessSection } from "@/components/sections/AccessSection";
import { ConstraintSection } from "@/components/sections/ConstraintSection";
import { DataFlowSection } from "@/components/sections/DataFlowSection";
import { FourLayersSection } from "@/components/sections/FourLayersSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstitutionalSection } from "@/components/sections/InstitutionalSection";
import { ModulesSection } from "@/components/sections/ModulesSection";
import { PhoneMockSection } from "@/components/sections/PhoneMockSection";
import { TrustSection } from "@/components/sections/TrustSection";

export function HomeGatewayMarketing() {
  return (
    <div className="bg-paper text-ink">
      <HeroSection variant="gateway" embedded />
      <ConstraintSection />
      <FourLayersSection />
      <DataFlowSection />
      <ModulesSection />
      <PhoneMockSection />
      <TrustSection />
      <InstitutionalSection />
      <AccessSection />
    </div>
  );
}
