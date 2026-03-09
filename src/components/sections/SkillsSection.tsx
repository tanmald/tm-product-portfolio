import { useState } from "react";
import { skillTiers } from "@/data/skills";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, Shield, Rocket } from "lucide-react";

const tierIcons = [Star, Shield, Rocket];
const tierColors = [
  "from-primary to-accent",
  "from-emerald-500 to-teal-500",
  "from-violet-500 to-purple-500",
];

const SkillsSection = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const toggle = (name: string) =>
    setExpandedSkill((prev) => (prev === name ? null : name));

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Skills Inventory
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Evidence-backed competencies across three tiers — from differentiating strengths to active growth areas.
          </p>
        </ScrollReveal>

        <div className="space-y-10">
          {skillTiers.map((tier, tierIdx) => {
            const Icon = tierIcons[tierIdx];
            return (
              <ScrollReveal key={tier.label} delay={tierIdx * 0.1}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-9 h-9 rounded-lg bg-gradient-to-br ${tierColors[tierIdx]} flex items-center justify-center`}
                    >
                      <Icon className="w-4.5 h-4.5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground leading-tight">
                        Tier {tier.tier}: {tier.label}
                      </h3>
                    </div>
                    <Badge variant="secondary" className="ml-auto text-xs">
                      {tier.skills.length} skills
                    </Badge>
                  </div>

                  <div className="grid gap-2">
                    {tier.skills.map((skill) => {
                      const isOpen = expandedSkill === skill.name;
                      return (
                        <button
                          key={skill.name}
                          onClick={() => toggle(skill.name)}
                          className="w-full text-left rounded-xl border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-medium text-foreground text-sm sm:text-base">
                              {skill.name}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                                  {skill.evidence}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
