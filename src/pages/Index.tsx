import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      {/* Scattered stickers */}
      <span className="absolute top-24 left-[10%] text-6xl select-none animate-float opacity-60 rotate-[-12deg]">🌸</span>
      <span className="absolute top-32 right-[12%] text-5xl select-none animate-float-slow opacity-50 rotate-[18deg]">✦</span>
      <span className="absolute bottom-32 left-[15%] text-4xl select-none animate-float opacity-40 rotate-[25deg]">🌿</span>
      <span className="absolute bottom-40 right-[8%] text-6xl select-none animate-float-slow opacity-50 rotate-[-8deg]">🌺</span>
      <span className="absolute top-[45%] left-[5%] text-3xl select-none animate-float-slow opacity-30 text-primary font-serif">→</span>
      <span className="absolute top-[55%] right-[6%] text-2xl select-none animate-float opacity-40 text-warm-orange">⭐</span>

      <div className="max-w-3xl text-center space-y-8">
        {/* Eyebrow */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-muted-foreground tracking-wide">
          Product Manager @ BMW Group
        </span>

        {/* Hero headline */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight text-foreground">
          Hi, I'm Tânia
          <br />
          <span className="italic text-primary">I build products</span>
          <span className="inline-block ml-2 text-4xl sm:text-5xl animate-float">✦</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          7+ years shaping digital products across automotive, telecom & consulting. 
          Passionate about turning complex problems into simple, delightful experiences.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link
            to="/products"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-base hover:opacity-90 transition-all"
          >
            See my work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/ai-use-cases"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-border text-foreground font-medium text-base hover:bg-secondary transition-all"
          >
            AI Use Cases 🤖
          </Link>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-muted-foreground/40">
        <span className="w-12 h-px bg-border" />
        <span className="text-xs tracking-widest uppercase">scroll or navigate</span>
        <span className="w-12 h-px bg-border" />
      </div>
    </div>
  );
};

export default Index;
