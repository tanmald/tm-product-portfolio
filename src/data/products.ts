export interface Product {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  link: string;
  sector: string;
  country: string;
  platform: string;
  type: "B2B" | "B2C" | "B2B & B2C";
  highlights: string[];
  impact: string[];
  detailedDescription: string;
  relatedCaseId?: number;
}

// Order: BMW products first (by recency/relevance), then Deloitte (reverse chronological)
export const products: Product[] = [
  {
    id: "3",
    name: "Retailer Companion",
    role: "Senior Product Manager — BMW Group · 2025–present",
    description:
      "Enterprise AI assistant for BMW Group retailers — an embedded chat widget that answers from ingested knowledge and acts on business context through AI agents, inside the tools dealers already use.",
    detailedDescription:
      "Took over BMW Group's AI assistant for retailers as overall product lead — a product explicitly described as 'missing structure'. The quality problem was real but unquantified: usage below expectations, anecdotal feedback, dashboards that contradicted each other. Built the product foundation to make it manageable: a KPI framework where every epic links to a measurable outcome (dealer efficiency, ticket reduction, satisfaction, usage), a quality backlog built by categorising real user feedback into problem types, and a regression testing approach for AI answer quality — because non-deterministic products need a quality loop, not just test cases. Scaled the team from ~10 to ~22 people across locations while onboarding a second product manager, all in parallel with ONE and Retailer Hub.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany & Portugal",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Overall product lead for an enterprise genAI assistant — the third product in a portfolio run in parallel",
      "Made an unquantified quality problem measurable — every epic now links to a KPI, so prioritisation follows value, not opinion",
      "Categorised 357 user feedback entries into problem types — turning thumbs-down data into an actionable quality backlog",
    ],
    impact: [
      "Product moved from 'missing structure' to a KPI-driven roadmap and an honest quality baseline",
      "Team scaled from ~10 to ~22 people across locations without stalling delivery",
      "Regression testing for AI answer quality embedded in the delivery process",
    ],
    relatedCaseId: 16,
  },
  {
    id: "2",
    name: "Retailer Hub",
    role: "Senior Product Manager — BMW Group · 2024–present",
    description:
      "Global communications platform for BMW, MINI, and Rolls-Royce retailers — replacing fragmented legacy systems across 12+ markets, with every go-live retiring a legacy communication channel.",
    detailedDescription:
      "Took full ownership of BMW Group's global retailer communications platform through a cross-continental transition from the South Africa team — and executed it to formal closure without stalling the market rollout train. Designed the 4-phase transition plan (knowledge transfer, handover, reverse shadowing, formal close), then led it through phased capacity shifts to completion. The platform is live in South Africa and Japan, with US and Germany go-lives scheduled — each one decommissioning a fragmented legacy communication channel. Shipped multi-language content with an AI-native team — content-level localisation with a safe fallback chain and AI-assisted translation under human review — unblocking markets that operate in multiple languages. Adoption is instrumented before go-live, not after: active users per market defined as a KPI from day one, with discovery done directly with market editors and converted into scoped, estimated epics.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany & South Africa",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Executed the cross-continental transition (South Africa → Lisbon) to formal closure — while keeping market go-lives on track",
      "Live in South Africa and Japan, with US and Germany go-lives scheduled — each retiring a legacy communication channel",
      "Shipped multi-language content with an AI-native team — 12 tasks in one sprint, AI-assisted translation with human review",
    ],
    impact: [
      "12+ markets migrating off fragmented legacy comms systems onto one platform",
      "Adoption KPIs defined before go-live, not after — active users per market instrumented from day one",
      "Discovery with market editors converted directly into scoped, estimated epics",
    ],
  },
  {
    id: "1",
    name: "ONE Sales Workplace",
    role: "Senior Product Manager — BMW Group · 2022–present",
    description:
      "BMW Group's unified retail platform for dealership agents across BMW, MINI, Motorrad, and Rolls-Royce — live across 73 countries, with 4 years of continuous product ownership.",
    detailedDescription:
      "Four years of product ownership on BMW Group's unified retail platform — starting as the PM responsible for execution and growing into defining ~80% of the platform direction. Early on, product strategy was driven primarily by the business counterpart; I made sure to be present in every strategic conversation, understand the why behind decisions, and ask the questions that weren't being asked. As the team evolved and trust was built, I earned the space to push back on requirements, reframe problems, and set the product direction based on research and user knowledge — not just business mandates. Coordinated platform go-live across 30+ markets from Lisbon. Navigated competing stakeholder agendas — from integration architecture debates to rollout decisions — by converting opinion-based escalations into criteria-driven workshops. The platform is now shifting to AI-native delivery, with the development organisation scaling from 5 to 23 people across 4 teams — and the product side being redesigned to keep pace with execution.",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany",
    platform: "Web",
    type: "B2B",
    highlights: [
      "4 years of continuous ownership — grew from executing business-defined strategy to defining ~80% of platform direction",
      "Coordinated go-live across 30+ markets — market readiness, user support, and feedback loops",
      "Resolved persistent Business vs. Engineering conflicts — from integration depth to portal strategy — by structuring decisions through evaluation criteria and workshops rather than opinion-based escalation",
      "Supporting the shift to AI-native delivery as the dev organisation scales from 5 to 23 people across 4 teams",
    ],
    impact: [
      "Platform live across 73 countries serving BMW, MINI, Motorrad, and Rolls-Royce dealerships",
      "Earned strategic ownership over 4 years — from execution PM to defining product direction",
      "Cross-market rollout coordinated from Lisbon across 30+ markets",
    ],
  },
  {
    id: "5",
    name: "OpenNL",
    role: "Tech Senior Consultant — Deloitte · 2022",
    description:
      "Contributed to the Netherlands' national COVID testing platform — coordinating requirements and client alignment as the platform scaled to become national public health infrastructure.",
    detailedDescription:
      "Joined a cross-border team in the final phase of building national COVID testing infrastructure under extreme time and political pressure. Supported requirements coordination, client meetings, and team alignment as the platform scaled to cover 1,000+ test locations across the Netherlands. Work was later presented at OutSystems NextStep 2021 as a recognised reference implementation.",
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&h=400&fit=crop",
    link: "#",
    sector: "Public Health",
    country: "Netherlands",
    platform: "Web",
    type: "B2C",
    highlights: [
      "Joined mid-project and helped stabilise roadmap direction and team coordination",
      "Supported government and client alignment as the platform scaled to national infrastructure",
      "Work later presented at OutSystems NextStep 2021 — recognised as a reference implementation",
    ],
    impact: [
      "Platform scaled to 1,000+ test locations as national COVID testing infrastructure",
      "Delivered under crisis conditions as part of national public health response",
      "Recognised as reference implementation at OutSystems NextStep 2021",
    ],
  },
  {
    id: "4",
    name: "TNPS (The New Print Service)",
    role: "Senior Product Manager — BMW Group · 2023–2024",
    description:
      "Stepped in to course-correct a product left in disarray — ran a full due diligence using an AI-powered skill built from prior analysis work, cutting weeks of effort down to days for the incoming PM.",
    detailedDescription:
      "The previous PM had left the product without a realistic capacity model or clear backlog health. Used an AI skill built during the Retailer Hub analysis to rapidly produce a comprehensive due diligence — 103 epics analyzed, true capacity modeled, and a phased self-service initiative designed — giving the incoming PM a solid foundation from day one.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Stepped in to stabilize a product left without a realistic plan by the previous PM",
      "Used an AI skill built from prior Retailer Hub analysis — compressed weeks of work into days",
      "Delivered full due diligence (103 epics, capacity model, 16 risks) to give the incoming PM a solid start",
    ],
    impact: [
      "Hidden ~25% overhead uncovered — gave the new PM a realistic baseline from day one",
      "Weeks of ramp-up time compressed using AI-powered analysis tooling",
      "Self-service initiative designed to reduce the recurring defect load going forward",
    ],
    relatedCaseId: 5,
  },
  {
    id: "6",
    name: "Unitel",
    role: "Tech Senior Consultant — Deloitte · 2021",
    description:
      "Self-service app for Angola's largest telecom — serving millions of subscribers across web and mobile.",
    detailedDescription:
      "Led infrastructure migration and platform upgrade for Angola's largest telecom provider. Ensured service continuity while modernizing the technical foundation across both self-care and field service management modules.",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop",
    link: "#",
    sector: "Telecommunications",
    country: "Angola",
    platform: "Web & Mobile",
    type: "B2C",
    highlights: [
      "Led infrastructure migration with zero service disruption",
      "Unified self-care and field service into a single platform",
      "Aligned stakeholders across geographies on technical and business goals",
    ],
    impact: [
      "Zero-downtime infrastructure migration for Angola's largest telecom",
      "Unified two separate products into one platform, reducing maintenance overhead",
      "Serving millions of subscribers across web and mobile channels",
    ],
  },
  {
    id: "7",
    name: "NOS Self-Service App",
    role: "Tech Senior Consultant — Deloitte · 2019–2020",
    description:
      "Mobile-first self-service app for NOS Portugal — inception to go-live in 10 months.",
    detailedDescription:
      "Drove the project from inception to go-live in 10 months for one of Portugal's top telecoms. Structured agile methodologies across the team and coordinated cross-functional delivery on time and within scope.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    link: "#",
    sector: "Telecommunications",
    country: "Portugal",
    platform: "Mobile",
    type: "B2C",
    highlights: [
      "Inception to go-live in 10 months",
      "Structured and applied agile methodologies across the team",
      "Coordinated cross-functional delivery on time and within scope",
    ],
    impact: [
      "New self-service channel launched in 10 months, inception to go-live",
      "Reduced call center dependency by enabling digital account management",
      "On-time, on-scope delivery across cross-functional teams",
    ],
  },
];
