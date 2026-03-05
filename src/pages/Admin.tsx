import { useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Upload, Eye, Save, Check, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const [content, setContent] = useState(() => localStorage.getItem("ai-use-cases-md") || "");
  const [saved, setSaved] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleFile = useCallback((file: File) => {
    if (!file.name.endsWith(".md")) {
      toast({ title: "Invalid file", description: "Please upload a .md file", variant: "destructive" });
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setContent(text);
      setSaved(false);
      setShowPreview(true);
    };
    reader.readAsText(file);
  }, [toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const handleSave = () => {
    localStorage.setItem("ai-use-cases-md", content);
    setSaved(true);
    toast({ title: "Saved!", description: "AI Use Cases page has been updated." });
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <span className="text-primary font-medium text-sm tracking-wide">Admin</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold mt-2 mb-2 text-foreground">
          Upload Content ⚙️
        </h1>
        <p className="text-muted-foreground mb-10">
          Upload a markdown file to update the AI Use Cases page.
        </p>

        {/* Drop zone */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer ${
            dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
          }`}
          onClick={() => document.getElementById("file-input")?.click()}
        >
          <Upload className="w-10 h-10 mx-auto mb-4 text-muted-foreground" />
          <p className="font-medium text-foreground mb-1">Drop your .md file here</p>
          <p className="text-sm text-muted-foreground">or click to browse</p>
          <input
            id="file-input"
            type="file"
            accept=".md"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
            }}
          />
        </div>

        {/* Content loaded indicator */}
        {content && (
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <FileText className="w-4 h-4" />
            <span>Content loaded ({content.length} characters)</span>
          </div>
        )}

        {/* Actions */}
        {content && (
          <div className="flex gap-3 mt-6">
            <Button
              variant="outline"
              onClick={() => setShowPreview(!showPreview)}
              className="gap-2"
            >
              <Eye className="w-4 h-4" />
              {showPreview ? "Hide Preview" : "Show Preview"}
            </Button>
            <Button onClick={handleSave} className="gap-2">
              {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              {saved ? "Saved!" : "Save & Publish"}
            </Button>
          </div>
        )}

        {/* Preview */}
        {showPreview && content && (
          <div className="mt-8 p-8 rounded-2xl border border-border bg-card">
            <h3 className="font-serif text-lg font-bold mb-4 text-muted-foreground">Preview</h3>
            <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-li:text-muted-foreground prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-secondary prose-pre:border prose-pre:border-border">
              <ReactMarkdown>{content}</ReactMarkdown>
            </article>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
