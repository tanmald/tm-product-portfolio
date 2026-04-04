import ScrollReveal from "@/components/ScrollReveal";

const metrics = [
  { value: "73", label: "Countries where ONE is live" },
  { value: "4 yrs", label: "Continuous ownership, one platform" },
  { value: "€80K", label: "Saved via internal API discovery" },
  { value: "700+", label: "Users surveyed across 3 markets" },
  { value: "6 PMs", label: "Led in weekly product practices" },
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
