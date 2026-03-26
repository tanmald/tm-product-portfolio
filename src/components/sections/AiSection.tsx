import { useState } from "react";
import { useCases } from "@/data/useCases";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, CheckCircle2, Lightbulb, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

const AiSection = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedCase = useCases.find((uc) => uc.id === selectedId);

  const getCardSize = (index: number) => {
    if (index === 0) return "md:col-span-2 md:row-span-2";
    if (index === 1) return "md:col-span-1 md:row-span-2";
    if (index === 2) return "md:col-span-1 md:row-span-1";
    if (index === 3) return "md:col-span-2 md:row-span-1";
    return "md:col-span-1 md:row-span-1";
  };

  return (
    <section id="ai" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-20 max-w-2xl">
            <span className="text-primary font-medium text-sm tracking-wide">Case Studies</span>
            <h2 className="text-4xl sm:text-6xl font-normal mt-2 mb-4 text-foreground font-serif">
              AI in my{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                workflow
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Real product management initiatives demonstrating data-driven decisions,
              stakeholder communication, and measurable impact.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {useCases.map((uc, i) => {
            const size = getCardSize(i);
            const isLarge = i === 0;
            const isTall = i === 0 || i === 1;

            return (
              <ScrollReveal key={uc.id} delay={i * 0.05} className={cn(size, "h-full")}>
                <button
                  onClick={() => setSelectedId(uc.id)}
                  className={cn(
                    "group relative w-full h-full rounded-2xl border border-border/50 bg-card overflow-hidden text-left transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 flex flex-col justify-between",
                    isLarge ? "p-6" : "p-5"
                  )}
                >
                  <div className="absolute top-4 right-4">
                    {uc.status === "in-progress" ? (
                      <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                    ) : (
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal" />
                    )}
                  </div>

                  <div className="space-y-2">
                    <span className={cn("block", isLarge ? "text-4xl" : "text-2xl")}>{uc.emoji}</span>
                    <div>
                      <span className="text-[10px] font-medium text-primary tracking-widest uppercase">
                        Case {uc.id}
                      </span>
                      <h3
                        className={cn(
                          "font-bold text-foreground group-hover:text-primary transition-colors leading-tight",
                          isLarge ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"
                        )}
                      >
                        {uc.title}
                      </h3>
                      {isTall && (
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {uc.subtitle}
                        </p>
                      )}
                      {isLarge && (
                        <p className="text-xs text-muted-foreground/70 mt-2 line-clamp-2">
                          {uc.challenge}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-3 py-1.5">
                      <TrendingUp className="w-3 h-3 text-primary shrink-0" />
                      <span className="text-xs font-medium text-foreground truncate">
                        {uc.keyMetric.value}
                      </span>
                      {isTall && (
                        <span className="text-[10px] text-muted-foreground truncate hidden sm:inline">
                          — {uc.keyMetric.label}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {uc.tags.slice(0, isLarge ? 4 : 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[10px] px-2 py-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/30 backdrop-blur-sm"
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
                  <span className="text-4xl">{selectedCase.emoji}</span>
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
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
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
                      <span className="text-primary shrink-0">💡</span>
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
