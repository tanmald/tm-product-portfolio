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
      className="min-h-screen flex flex-col items-center px-6"
    >
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl w-full text-center space-y-8">
        <ScrollReveal delay={0.1}>
          <p className="text-xs font-medium text-muted-foreground tracking-[0.2em] uppercase">
            Senior Product Manager
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] tracking-tight text-foreground font-serif">
            I'm Tânia.
            <br />
            <em className="not-italic text-primary">
              I chase the why. Then I build for it.
            </em>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex justify-center">
            <span className="block w-16 h-px bg-primary" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.38}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Biologist by training, PM by path — but never lost the scientist's
            instinct to question before building. 3.5 years in consulting at
            Deloitte, then a deliberate move to product ownership at BMW Group
            where I've spent 4 years leading ONE Sales Workplace across 73
            countries. I work best when I own the full loop: discovery,
            decision, delivery, and impact.
          </p>
        </ScrollReveal>
      </div>

      <motion.button
        onClick={scrollToWork}
        className="mb-12 flex flex-col items-center gap-2 text-primary/40 hover:text-primary transition-colors"
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
