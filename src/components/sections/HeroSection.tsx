import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 relative"
    >
      <div className="max-w-3xl text-center space-y-8">
        <ScrollReveal delay={0.1}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-muted-foreground tracking-wide">
            Product Manager @ BMW Group
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight text-foreground">
            Hi, I'm Tânia
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              I engineer outcomes
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            7+ years turning complexity into structure and shipping results — from
            national-scale platforms to enterprise automotive products across 30+ markets.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground/70">
            <span>🇵🇹 Portuguese</span>
            <span className="hidden sm:inline text-border">·</span>
            <span>🇬🇧 English</span>
            <span className="hidden sm:inline text-border">·</span>
            <span>🇪🇸 Spanish</span>
          </div>
        </ScrollReveal>
      </div>

      <motion.button
        onClick={scrollToWork}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
