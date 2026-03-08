import HeroSection from "@/components/sections/HeroSection";
import MetricsStrip from "@/components/sections/MetricsStrip";
import ProductsSection from "@/components/sections/ProductsSection";
import GitHubSection from "@/components/sections/GitHubSection";
import AiSection from "@/components/sections/AiSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="relative z-10">
      <HeroSection />
      <MetricsStrip />
      <ProductsSection />
      <GitHubSection />
      <AiSection />
      <FooterSection />
    </div>
  );
};

export default Index;
