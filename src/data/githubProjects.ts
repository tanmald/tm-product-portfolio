export interface GitHubProject {
  name: string;
  description: string;
  longDescription: string;
  url: string;
  liveUrl?: string;
  tech: string[];
  highlights: string[];
  language: string;
  status: "Active" | "In Progress" | "Archived";
}

export const githubProjects: GitHubProject[] = [
  {
    name: "BookVault",
    description:
      "Personal digital library — AI-powered metadata extraction, social reading features, Kobo integration, and multi-language support.",
    longDescription:
      "A full-stack digital library app that uses AI to automatically extract book metadata from EPUB/PDF uploads. Features social reading with friends scoreboard, book reviews, activity feeds, Kobo e-reader integration, and three view layouts (grid, list, Kanban). Built with a privacy-first approach and available in English and Portuguese.",
    url: "https://github.com/tanmald/bookvault",
    liveUrl: "https://bookvault-kappa.vercel.app/",
    tech: ["React 18", "TypeScript", "Supabase", "OpenAI", "Tailwind CSS", "Vite"],
    highlights: [
      "AI-powered metadata extraction from EPUB/PDF files",
      "Social reading — friends scoreboard, reviews, activity feed",
      "Kobo e-reader integration with one-click transfer",
      "Multi-language support (EN/PT)",
      "Three view modes: Grid, List, Kanban",
    ],
    language: "TypeScript",
    status: "Active",
  },
  {
    name: "PlateCheck",
    description:
      "AI nutrition adherence tracker — snap a meal photo, get an instant adherence score against your nutrition plan.",
    longDescription:
      "Transforms static nutrition plans into actionable guidance. Uses OCR + NLP to parse plans from PDFs/images, then analyzes meal photos with GPT-4 Vision to provide instant 0-100 adherence scores with explainable feedback. Features confidence-aware AI results and daily/weekly progress tracking.",
    url: "https://github.com/tanmald/plate-check",
    liveUrl: "https://platecheck.vercel.app/",
    tech: ["React 18", "TypeScript", "Supabase", "GPT-4 Vision", "Tailwind CSS", "Recharts"],
    highlights: [
      "Photo-based meal logging with AI vision analysis",
      "0-100 adherence scoring with explainable feedback",
      "Smart plan import via OCR + NLP (PDF/DOCX/images)",
      "Confidence-aware AI with high/medium/low indicators",
      "Three-tier scoring system with colour-coded results",
    ],
    language: "TypeScript",
    status: "In Progress",
  },
  {
    name: "PlantSis",
    description:
      "Sassy plant care companion PWA — manage your plants, track watering schedules, and keep your greenery alive.",
    longDescription:
      "A mobile-first PWA for plant lovers. Manage your plant collection, track care schedules, and get reminders. Built with Supabase for auth and database, with AI plant identification planned via GPT-4 Vision. Designed as a fun, personality-driven app with a sassy tone.",
    url: "https://github.com/tanmald/plant-sis",
    liveUrl: "https://plant-sis.vercel.app/",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "PWA", "Vite"],
    highlights: [
      "Progressive Web App with mobile-first design",
      "Plant collection management with care tracking",
      "Supabase-powered auth and real-time database",
      "AI plant identification (planned via GPT-4 Vision)",
      "Fun, personality-driven UX",
    ],
    language: "TypeScript",
    status: "In Progress",
  },
];
