import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import AiSection from "@/components/sections/AiSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="relative z-10">
      <HeroSection />
      <ProductsSection />
      <AiSection />
      <FooterSection />
    </div>
  );
};

export default Index;
