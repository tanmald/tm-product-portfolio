import HeroSection from "@/components/sections/HeroSection";
import MetricsStrip from "@/components/sections/MetricsStrip";
import ProductsSection from "@/components/sections/ProductsSection";
import GitHubSection from "@/components/sections/GitHubSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AiSection from "@/components/sections/AiSection";
import FooterSection from "@/components/sections/FooterSection";
import NavbarTimeline from "@/components/NavbarTimeline";
import LogosStrip from "@/components/sections/LogosStrip";

const Index = () => {
  return (
    <>
      <NavbarTimeline />
      <div className="relative z-10">
        <div className="pt-0">
          <HeroSection />
        </div>
        <LogosStrip />
        <MetricsStrip />
        <ProductsSection />
        <AiSection />
        <SkillsSection />
        <GitHubSection />
        <FooterSection />
      </div>
    </>
  );
};

export default Index;
