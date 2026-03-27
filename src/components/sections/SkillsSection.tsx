import { useState } from "react";
import { skills } from "@/data/skills";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Target,
  TrendingUp,
  Globe,
  Cpu,
  Users,
  ShieldCheck,
  Brain,
  Zap,
  GraduationCap,
  GitBranch,
  ChevronDown,
} from "lucide-react";

const skillIcons: Record<string, React.ElementType> = {
  "AI-Augmented Product Work": Sparkles,
  "Strategic Analysis & Due Diligence": Target,
  "Stakeholder Management": Users,
  "Crisis Product Leadership": ShieldCheck,
  "Quantitative Rigor": TrendingUp,
  "AI Product Strategy": Brain,
  "Cross-Cultural Delivery": Globe,
  "Technical Fluency": Cpu,
  "Complex Transition Management": GitBranch,
  "Agile & Delivery Excellence": Zap,
  "Mentoring & Team Building": GraduationCap,
};

const tierLabels: Record<string, string> = {
  Differentiating: "Differentiating Skills",
  Strong: "Strong PM Fundamentals",
  Growth: "Current Focus",
};

const SkillsSection = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const skillsByTier = {
    Differentiating: skills.filter((s) => s.tier === "Differentiating"),
    Strong: skills.filter((s) => s.tier === "Strong"),
    Growth: skills.filter((s) => s.tier === "Growth"),
  };

  const renderTierGroup = (tier: "Differentiating" | "Strong" | "Growth", index: number) => {
    const tierSkills = skillsByTier[tier];

    return (
      <ScrollReveal key={tier} delay={index * 0.1}>
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4 pl-0.5">
            {tierLabels[tier]}
          </h3>

          <div className="space-y-0 border-t border-border/40">
            {tierSkills.map((skill, i) => {
              const Icon = skillIcons[skill.name] || Sparkles;
              const isExpanded = expandedSkill === skill.name;

              return (
                <motion.div
                  key={skill.name}
                  initial={false}
                  className={`border-b border-border/40 ${
                    tier === "Differentiating" ? "pl-3 border-l-2 border-l-primary" : ""
                  }`}
                >
                  <button
                    onClick={() =>
                      setExpandedSkill(isExpanded ? null : skill.name)
                    }
                    className="w-full py-4 px-4 sm:px-5 text-left flex items-center justify-between gap-3 hover:bg-secondary/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <Icon className="w-5 h-5 text-primary shrink-0" />
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                        {skill.metric && (
                          <p className="text-xs sm:text-sm text-primary font-medium mt-0.5">
                            {skill.metric}
                          </p>
                        )}
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 sm:px-5 pb-4 pt-0 text-sm text-muted-foreground leading-relaxed">
                          {skill.evidence}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    );
  };

  return (
    <section id="skills" className="bg-secondary py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              Competencies
            </span>
            <h2 className="text-4xl sm:text-5xl font-normal text-foreground mt-3 mb-5 font-serif">
              What I{" "}
              <span className="text-primary">bring</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Evidence-backed capabilities grounded in real product outcomes.
            </p>
          </div>
        </ScrollReveal>

        <div>
          {renderTierGroup("Differentiating", 0)}
          {renderTierGroup("Strong", 1)}
          {renderTierGroup("Growth", 2)}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
