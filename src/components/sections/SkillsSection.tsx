import { skills } from "@/data/skills";
import { products } from "@/data/products";
import { useCases } from "@/data/useCases";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Sparkles, Target, TrendingUp, Globe, Cpu, Rocket, Users, ShieldCheck, Brain } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const skillIcons: Record<string, React.ElementType> = {
  "AI-Augmented Product Work": Sparkles,
  "Strategic Analysis & Due Diligence": Target,
  "Stakeholder Management": Users,
  "Crisis Product Leadership": ShieldCheck,
  "Quantitative Rigor": TrendingUp,
  "AI Product Strategy": Brain,
  "Cross-Cultural Delivery": Globe,
  "Technical Fluency": Cpu,
  "Entrepreneurial Building": Rocket,
};

const SkillsSection = () => {
  const isMobile = useIsMobile();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-foreground mt-2 mb-3 font-serif">
              Skills{" "}
              <span className="text-primary">Inventory</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Evidence-backed capabilities — sized by strategic PM relevance, linked to real projects.
            </p>
          </div>
        </ScrollReveal>

        <div
          className="grid gap-4"
          style={
            isMobile
              ? { gridTemplateColumns: "1fr" }
              : { gridTemplateColumns: "repeat(3, 1fr)" }
          }
        >
          {skills.map((skill, i) => {
            const Icon = skillIcons[skill.name] || Sparkles;
            const isDifferentiating = skill.tier === "Differentiating";
            const relatedProducts = (skill.relatedProductIds || [])
              .map((pid) => products.find((p) => p.id === pid))
              .filter(Boolean);
            const relatedCases = (skill.relatedCaseIds || [])
              .map((cid) => useCases.find((uc) => uc.id === cid))
              .filter(Boolean);

            return (
              <ScrollReveal
                key={skill.name}
                delay={i * 0.06}
                style={
                  isMobile
                    ? undefined
                    : {
                        gridRow: skill.gridPosition.row,
                        gridColumn: skill.gridPosition.col,
                      }
                }
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className={`h-full rounded-2xl border p-5 sm:p-6 flex flex-col transition-shadow hover:shadow-soft-lg ${
                    isDifferentiating
                      ? "border-primary/30 border-l-2 border-l-primary bg-primary/[0.03]"
                      : "border-border bg-secondary/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-[10px] uppercase tracking-wider shrink-0 ${
                        isDifferentiating ? "border-primary/30 text-primary" : ""
                      }`}
                    >
                      {skill.tier}
                    </Badge>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 leading-snug">
                    {skill.name}
                  </h3>

                  {skill.metric && (
                    <p className="text-xl sm:text-2xl font-bold text-primary mb-3">
                      {skill.metric}
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {skill.evidence}
                  </p>

                  {(relatedProducts.length > 0 || relatedCases.length > 0) && (
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-border/30">
                      {relatedProducts.map((p) => (
                        <button
                          key={p!.id}
                          onClick={() => scrollTo("work")}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
                        >
                          {p!.name}
                        </button>
                      ))}
                      {relatedCases.map((uc) => (
                        <button
                          key={uc!.id}
                          onClick={() => scrollTo("ai")}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
                        >
                          Case {uc!.id}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
