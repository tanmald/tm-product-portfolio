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
    role: "Product Manager — BMW Group",
    description:
      "BMW Group's unified retail platform — 25,000 users onboarded in 4 months across 30+ markets for BMW, MINI, Motorrad, and Rolls-Royce.",
    detailedDescription:
      "Unified platform replacing fragmented sales tools across all BMW Group brands. Led cross-functional coordination between Munich and South Africa, driving adoption at scale while managing complex stakeholder dynamics across geographies.",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Led cross-functional coordination across 2 geographies and all BMW Group brands",
      "Drove adoption strategy that onboarded 25,000 users in 4 months",
      "Managed complex stakeholder dynamics to align business, design, and engineering",
    ],
    impact: [
      "25,000 users onboarded in 4 months",
      "25% reduction in sales workflow time",
      "Global platform serving 30+ markets",
    ],
  },
  {
    id: "2",
    name: "Retailer Hub",
    role: "Product Manager — BMW Group",
    description:
      "Owned a politically sensitive product transition across 2 continents — quantified a 25–60% capacity gap and delivered 3 transition scenarios to de-risk the decision.",
    detailedDescription:
      "High-stakes product transition requiring alignment between BMW AG and CTW stakeholders across Germany and South Africa. Built the analytical foundation for executive decision-making through structured scenario planning and risk quantification.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany & South Africa",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Delivered 3 transition scenarios (Aggressive/Neutral/Conservative) for executive decision-making",
      "Quantified 25–60% capacity shortfall — turning ambiguity into actionable planning",
      "Aligned stakeholders across 2 continents on a 5-month phased roadmap",
    ],
    impact: [
      "49 epics mapped across the portfolio",
      "25–60% capacity gap quantified and addressed",
      "5-month phased roadmap delivered",
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
      "Team stabilized within 5 months",
      "Successor PO mentored and onboarded",
      "Clean exit with no disruption to delivery",
    ],
  },
  {
    id: "4",
    name: "TNPS (The New Print Service)",
    role: "Product Manager — BMW Group",
    description:
      "Took ownership of a new product, built a realistic capacity model from scratch, and uncovered a hidden ~25 SP/quarter defect tax that was inflating every roadmap commitment.",
    detailedDescription:
      "Created a comprehensive due diligence from scratch across 6 iterations — analyzed 103 open epics, modeled true team capacity after accounting for defect overhead, and designed a phased self-service initiative with concrete quarterly milestones.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Built realistic capacity model revealing ~25 SP/quarter hidden defect tax",
      "Analyzed 103 epics and designed phased self-service initiative (Q2–Q4)",
      "Created due diligence from scratch across 6 iterations — earned credibility fast",
    ],
    impact: [
      "~25 SP/quarter defect tax uncovered — fixed inflated roadmap",
      "103 epics analyzed in a single due diligence",
      "Self-service initiative phased with quarterly milestones",
    ],
    relatedCaseId: 5,
  },
  {
    id: "5",
    name: "OpenNL",
    role: "Tech Senior Consultant — Deloitte",
    description:
      "National-scale COVID testing platform for the Netherlands — 9.4 million tests across 1,000+ locations, delivered under crisis conditions.",
    detailedDescription:
      "Led a 10-person cross-border team to build and scale a COVID testing platform under extreme time and political pressure. The platform became national infrastructure, and the work was presented at OutSystems NextStep 2021.",
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&h=400&fit=crop",
    link: "#",
    sector: "Public Health",
    country: "Netherlands",
    platform: "Web",
    type: "B2C",
    highlights: [
      "Led 10-person cross-border team under crisis conditions",
      "Scaled platform to national infrastructure level",
      "Presented at OutSystems NextStep 2021",
    ],
    impact: [
      "9.4 million COVID tests administered",
      "1,000+ test locations managed",
      "National-scale delivery under crisis conditions",
    ],
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
      "Serving millions of subscribers across Angola",
      "Modernized technical foundation for the country's largest telecom",
      "Unified platform experience across web and mobile",
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
      "New digital channel launched for a top Portuguese telecom",
      "Self-service for consumption, invoices, data packages, and promotions",
      "Inception to go-live in 10 months",
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
      "Replaced manual processes with a unified platform",
      "Improved visibility into team capacity and allocation",
      "Adopted across Deloitte Portugal teams",
    ],
  },
];
