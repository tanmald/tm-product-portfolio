import ScrollReveal from "@/components/ScrollReveal";

const metrics = [
  { value: "30+", label: "Markets served globally" },
  { value: "25K", label: "Users onboarded in 4 months" },
  { value: "9.4M", label: "COVID tests administered" },
  { value: "€80K", label: "Saved via internal API discovery" },
  { value: "90%+", label: "Client satisfaction" },
];

const MetricsStrip = () => {
  return (
    <section className="py-20 px-6 bg-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:divide-x md:divide-background/10">
          {metrics.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="text-center space-y-2 md:px-4">
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  {m.value}
                </div>
                <div className="text-xs text-background/55 tracking-wide leading-snug">
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
