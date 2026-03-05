import { useState } from "react";
import { useCases } from "@/data/useCases";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Sparkles, TrendingUp, CheckCircle2, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const AiUseCases = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (id: number) => setExpandedId(expandedId === id ? null : id);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-primary font-medium text-sm tracking-wide">Case Studies</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold mt-2 mb-4 text-foreground">
            AI in my <span className="italic">workflow</span> 🤖
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real product management initiatives demonstrating data-driven decisions, 
            stakeholder communication, and measurable impact. Each case follows{" "}
            <span className="font-medium text-foreground">Challenge → Action → Results</span>.
          </p>
        </div>

        {/* Case cards */}
        <div className="space-y-4">
          {useCases.map((uc) => {
            const isExpanded = expandedId === uc.id;
            return (
              <div
                key={uc.id}
                className="rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                {/* Card header — always visible */}
                <button
                  onClick={() => toggle(uc.id)}
                  className="w-full text-left p-6 sm:p-8 flex items-start gap-4 sm:gap-6 group"
                >
                  <span className="text-3xl sm:text-4xl mt-0.5 shrink-0">{uc.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-primary tracking-wide uppercase">
                        Case {uc.id}
                      </span>
                      {uc.status === "complete" ? (
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                          Complete
                        </Badge>
                      ) : (
                        <Badge className="text-[10px] px-1.5 py-0 bg-primary/10 text-primary border-primary/20">
                          In Progress
                        </Badge>
                      )}
                    </div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {uc.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-0.5">{uc.subtitle}</p>
                    {/* Key metric pill */}
                    <div className="mt-3 inline-flex items-center gap-2 bg-secondary rounded-full px-3 py-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-medium text-foreground">{uc.keyMetric.value}</span>
                      <span className="text-xs text-muted-foreground">— {uc.keyMetric.label}</span>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground shrink-0 mt-2 transition-transform duration-300",
                      isExpanded && "rotate-180"
                    )}
                  />
                </button>

                {/* Expanded content */}
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-8 pt-0 space-y-8 border-t border-border">
                      {/* Challenge */}
                      <div className="pt-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-4 h-4 text-primary" />
                          <h3 className="font-serif text-lg font-bold text-foreground">Challenge</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{uc.challenge}</p>
                      </div>

                      {/* Actions */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <h3 className="font-serif text-lg font-bold text-foreground">What I Did</h3>
                        </div>
                        <ul className="space-y-2">
                          {uc.actions.map((action, i) => (
                            <li key={i} className="flex gap-3 text-muted-foreground">
                              <span className="text-primary font-bold text-sm mt-0.5 shrink-0">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="leading-relaxed">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results grid */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          <h3 className="font-serif text-lg font-bold text-foreground">Results</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {uc.results.map((r, i) => (
                            <div key={i} className="bg-secondary/60 rounded-xl p-4 text-center">
                              <div className="text-xl sm:text-2xl font-bold text-foreground font-serif">
                                {r.value}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">{r.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Learnings */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Lightbulb className="w-4 h-4 text-primary" />
                          <h3 className="font-serif text-lg font-bold text-foreground">Key Takeaways</h3>
                        </div>
                        <div className="space-y-2">
                          {uc.learnings.map((learning, i) => (
                            <div
                              key={i}
                              className="flex gap-3 p-3 rounded-lg bg-secondary/40 text-sm text-muted-foreground"
                            >
                              <span className="text-primary shrink-0">💡</span>
                              <span className="leading-relaxed">{learning}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {uc.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AiUseCases;
