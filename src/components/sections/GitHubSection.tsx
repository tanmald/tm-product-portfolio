import { Github, ExternalLink, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { githubProjects } from "@/data/githubProjects";
import ScrollReveal from "@/components/ScrollReveal";

const statusColor = {
  Active: "bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/30",
  "In Progress": "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30",
  Archived: "bg-muted text-muted-foreground border-border",
};

const GitHubSection = () => {
  return (
    <section id="github" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-20 max-w-2xl">
            <span className="text-primary font-medium text-sm tracking-wide">Open Source</span>
            <h2 className="text-4xl sm:text-6xl font-bold mt-2 mb-4 text-foreground font-serif">
              Side{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                projects
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Personal apps I've designed, built, and shipped — from AI-powered libraries to nutrition trackers.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubProjects.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="group rounded-2xl border border-border/50 bg-card p-6 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-primary shrink-0" />
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant="outline" className={statusColor[project.status]}>
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5 flex-1">
                  {project.highlights.slice(0, 3).map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-1.5" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-[10px] px-2 py-0.5">
                      {t}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
