import ScrollReveal from "@/components/ScrollReveal";

const FooterSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              together
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            I'm always open to discussing product strategy, new opportunities, or how AI can transform your workflow.
          </p>
          <a
            href="https://www.linkedin.com/in/tanmald/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-base shadow-soft hover:shadow-soft-lg hover:scale-[1.02] transition-all"
          >
            Get in touch
          </a>
        </ScrollReveal>
      </div>

      <div className="mt-20 text-center">
        <div className="flex items-center justify-center gap-3 text-muted-foreground/40">
          <span className="w-12 h-px bg-border" />
          <span className="text-xs tracking-widest uppercase">Tânia Maldonado · 2026</span>
          <span className="w-12 h-px bg-border" />
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
