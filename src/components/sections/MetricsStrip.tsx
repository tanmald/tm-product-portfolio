import ScrollReveal from "@/components/ScrollReveal";

const metrics = [
  { value: "30+", label: "Markets served globally" },
  { value: "25K", label: "Users onboarded in 4 months" },
  { value: "9.4M", label: "COVID tests administered" },
  { value: "103", label: "Epics analyzed in one audit" },
  { value: "90%+", label: "Client satisfaction" },
];

const MetricsStrip = () => {
  return (
    <section className="py-16 px-6 border-y border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {metrics.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {m.value}
                </div>
                <div className="text-xs text-muted-foreground tracking-wide">
                  {m.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsStrip;
