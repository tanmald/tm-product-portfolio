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

export const products: Product[] = [
  {
    id: "1",
    name: "ONE Sales Workplace",
    role: "Senior Product Manager — BMW Group",
    description:
      "BMW Group's unified retail platform — 25,000 users onboarded in 4 months across 30+ markets for BMW, MINI, Motorrad, and Rolls-Royce.",
    detailedDescription:
      "Unified platform replacing fragmented sales tools across all BMW Group brands. Coordinated go-live across 30+ markets from Lisbon. Navigated competing stakeholder agendas — from integration architecture debates to rollout decisions — by converting opinion-based escalations into criteria-driven workshops. Actively protected team capacity by rejecting requests that exceeded bandwidth.",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Led cross-functional coordination across 2 geographies and all BMW Group brands",
      "Coordinated go-live across 30+ markets — market readiness, user support, and feedback loops",
      "Resolved persistent Business vs. Engineering conflicts — from integration depth to portal strategy — by structuring decisions through evaluation criteria and workshops rather than opinion-based escalation",
    ],
    impact: [
      "25,000 users onboarded in 4 months",
      "25% reduction in sales workflow time",
      "Global platform serving 30+ markets",
    ],
  },
  {
    id: "5",
    name: "OpenNL",
    role: "Tech Senior Consultant — Deloitte",
    description:
      "Joined mid-flight on the Netherlands' national COVID testing platform — helped steer the roadmap, manage the team, and coordinate with government stakeholders as the platform scaled to 9.4 million tests across 1,000+ locations under crisis conditions.",
    detailedDescription:
      "Joined a cross-border team building national COVID testing infrastructure under extreme time and political pressure. Contributed to roadmap direction, team coordination, and government and client alignment as the platform scaled to become public health infrastructure across the Netherlands.",
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
      "9.4 million COVID tests administered across the Netherlands",
      "1,000+ test locations managed on a single platform",
      "Delivered under crisis conditions as part of national public health response",
    ],
  },
  {
    id: "2",
    name: "Retailer Hub",
    role: "Senior Product Manager — BMW Group",
    description:
      "Global communications platform for BMW, MINI, and Rolls-Royce agents and dealerships — the central hub connecting retailers across all BMW Group brands.",
    detailedDescription:
      "Took full ownership of BMW Group's global retailer communications platform through a cross-continental transition from the South Africa team. With a departing Tech Lead, inherited backlogs, and a team simultaneously running another product, designed a 4-phase transition plan: knowledge transfer, handover, reverse shadowing, and formal close. Maintained uninterrupted delivery to markets by negotiating source team continuity during knowledge transfer and pairing on real tickets from week two.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany & South Africa",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Taking ownership of the platform roadmap serving BMW, MINI, Motorrad, and Rolls-Royce retailers",
      "Quantified 25–60% capacity gap — built the analytical foundation for executive planning",
      "Managed a high-risk transition — departing Tech Lead, compromised timelines, dual-product load — through a 4-phase plan with progressive capacity splits and negotiated source team continuity",
    ],
    impact: [
      "Full product ownership of BMW Group's global retailer communications platform",
      "25–60% capacity gap quantified — preventing blind roadmap commitments",
      "Stakeholder alignment maintained across Germany and South Africa through transition",
    ],
  },
  {
    id: "3",
    name: "eSign",
    role: "Interim Product Owner — BMW Group",
    description:
      "Rescue mission — stabilized a failing cross-country team in 5 months as interim PO, restored delivery, and mentored own replacement.",
    detailedDescription:
      "Stepped into a struggling team as interim PO, stabilized agile processes, reduced tech debt, and rebuilt cross-location collaboration. Mentored and onboarded own replacement before executing a clean handoff with zero delivery disruption.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Stabilized a struggling team and restored delivery within 5 months",
      "Reduced tech debt while rebuilding cross-location collaboration",
      "Mentored successor PO and executed a zero-disruption handoff",
    ],
    impact: [
      "Delivery restored within 5 months on a failing product",
      "Business continuity ensured through structured handoff",
      "Cross-country collaboration rebuilt between distributed teams",
    ],
  },
  {
    id: "4",
    name: "TNPS (The New Print Service)",
    role: "Senior Product Manager — BMW Group",
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
    role: "Tech Senior Consultant — Deloitte",
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
    role: "Tech Senior Consultant — Deloitte",
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
  {
    id: "8",
    name: "HR Tool",
    role: "Tech Consultant — Deloitte",
    description:
      "Internal HR platform built from scratch — centralized project sharing, timesheets, and certification management.",
    detailedDescription:
      "Designed and built an internal HR tool to centralize team management processes. Replaced manual workflows with a unified digital platform adopted across Deloitte Portugal teams.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    link: "#",
    sector: "Human Resources",
    country: "Portugal",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Designed and built the platform from scratch",
      "Replaced manual processes with a unified digital experience",
      "Adopted internally across Deloitte Portugal teams",
    ],
    impact: [
      "Eliminated manual timesheet and certification tracking across Deloitte Portugal",
      "Enabled real-time visibility into team capacity and project allocation",
      "Adopted as standard tooling across multiple Deloitte Portugal teams",
    ],
  },
];
