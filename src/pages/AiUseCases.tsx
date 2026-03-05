import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const DEFAULT_CONTENT = `# AI Use Cases

Upload your markdown file via the [admin panel](/admin) to populate this page with your AI use cases content.
`;

const AiUseCases = () => {
  const [content, setContent] = useState(DEFAULT_CONTENT);

  useEffect(() => {
    const saved = localStorage.getItem("ai-use-cases-md");
    if (saved) setContent(saved);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <span className="text-primary font-medium text-sm tracking-wide">Insights</span>
        <div className="mt-2 mb-12">
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-foreground">
            AI in my <span className="italic">workflow</span> 🤖
          </h1>
        </div>

        {/* Markdown content */}
        <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:text-muted-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:text-foreground prose-pre:bg-secondary prose-pre:border prose-pre:border-border">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default AiUseCases;
