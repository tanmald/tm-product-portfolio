import { useState } from "react";
import { useCases } from "@/data/useCases";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Sparkles, TrendingUp, CheckCircle2, Lightbulb, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const AiSection = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedCase = useCases.find((uc) => uc.id === selectedId);

  return (
    <section id="ai" className="py-32 px-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="text-primary-foreground/60 font-medium text-sm tracking-wide uppercase">Case Studies</span>
            <h2 className="text-4xl sm:text-5xl font-normal mt-3 mb-5 text-primary-foreground leading-tight font-serif">
              AI in my{" "}
              <span className="text-primary-foreground/70 italic">workflow</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              How I use data, AI, and structured thinking to drive product outcomes.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {useCases.map((uc, i) => (
            <ScrollReveal key={uc.id} delay={i * 0.06}>
              <button
                onClick={() => setSelectedId(uc.id)}
                className="group w-full text-left py-7 border-t border-primary-foreground/15 cursor-pointer transition-colors hover:bg-primary-foreground/8 rounded-lg"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-primary-foreground group-hover:text-white transition-colors">
                        {uc.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-primary-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <span className="text-sm font-medium text-primary-foreground/70">{uc.subtitle}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 mt-1">
                    {uc.status === "in-progress" && (
                      <Badge variant="outline" className="text-xs bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                        In Progress
                      </Badge>
                    )}
                    <Badge variant="outline" className="text-xs text-primary-foreground/70 border-primary-foreground/20">{uc.tags[0]}</Badge>
                  </div>
                </div>

                <p className="text-primary-foreground/65 leading-relaxed text-[15px] max-w-3xl line-clamp-2">
                  {uc.challenge}
                </p>

                <p className="mt-3 text-sm font-medium text-primary-foreground/80">
                  ↗ {uc.keyMetric.value}
                </p>
              </button>
            </ScrollReveal>
          ))}
          <div className="border-t border-primary-foreground/15" />
        </div>
      </div>

      {/* Modal */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-card border border-border/50 shadow-soft-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            <div className="p-8 sm:p-10 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div>
                    <span className="text-xs font-medium text-primary tracking-widest uppercase">
                      Case {selectedCase.id}
                    </span>
                    {selectedCase.status === "in-progress" && (
                      <Badge className="ml-2 text-[10px] px-1.5 py-0 bg-primary/10 text-primary border-primary/20">
                        In Progress
                      </Badge>
                    )}
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-normal text-foreground font-serif">
                  {selectedCase.title}
                </h2>
                <p className="text-muted-foreground mt-1">{selectedCase.subtitle}</p>
              </div>

              <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{selectedCase.keyMetric.value}</span>
                <span className="text-sm text-muted-foreground">— {selectedCase.keyMetric.label}</span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">Challenge</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{selectedCase.challenge}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">What I Did</h3>
                </div>
                <ul className="space-y-2">
                  {selectedCase.actions.map((action, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary font-bold text-sm mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">Results</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedCase.results.map((r, i) => (
                    <div key={i} className="bg-secondary/60 rounded-xl p-4 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-foreground">{r.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">Key Takeaways</h3>
                </div>
                <div className="space-y-2">
                  {selectedCase.learnings.map((learning, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-lg bg-secondary/40 text-sm text-muted-foreground">
                      <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{learning}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {selectedCase.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AiSection;
