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
      "BMW Group's unified retail platform — the single entry point for BMW, MINI, Motorrad, and Rolls-Royce sales across 30+ global markets.",
    detailedDescription:
      "ONE Sales Workplace gives retail partners a seamless experience through all business processes — new cars, used cars, and Financial Services — across all BMW Group brands. Led cross-functional coordination between Munich and CTW, integrating Module Federation architecture and scaling the agile working model across teams.",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Led cross-functional coordination between business, development, and design teams across Munich and CTW",
      "Integrated Module Federation architecture — understanding the technical layer, not just the roadmap",
      "Implemented and scaled CTW's agile working model, streamlining communication and improving efficiency",
      "Managed complex interpersonal dynamics to build a cohesive, collaborative team environment",
    ],
    impact: [
      "25,000 new users onboarded in 4 months",
      "25% reduction in sales workflow time",
      "20% user satisfaction improvement",
      "Global platform serving 30+ markets across all BMW Group brands",
    ],
  },
  {
    id: "2",
    name: "Retailer Hub",
    role: "Product Manager — BMW Group",
    description:
      "End-to-end ownership of a complex, politically sensitive product transition — 49 epics mapped quarterly, 3 transition scenarios, capacity gap quantified.",
    detailedDescription:
      "Deep Dive covering 9 sections: system architecture, capacity analysis, risk register, stakeholder questions, epic mapping, MoSCoW prioritization, and transition planning. Authored 6 versions of the Transition Plan with Aggressive/Neutral/Conservative scenarios, managing risk across BMW AG and CTW stakeholders.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany & South Africa",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Authored Deep Dive with 9 sections covering architecture, capacity, risks, epic mapping, and MoSCoW prioritization",
      "Created 6 versions of the Transition Plan (v1.0–v1.5) with 3 scenarios",
      "Quantified capacity gap at 25–60% shortfall and proposed phased roadmap",
      "Managed stakeholder alignment across BMW AG and CTW across continents",
    ],
    impact: [
      "49 epics mapped quarterly across the portfolio",
      "10 risks identified and assessed in risk register",
      "5-month phased roadmap delivered",
      "25–60% capacity gap quantified and addressed",
    ],
  },
  {
    id: "3",
    name: "eSign",
    role: "Interim Product Owner — BMW Group",
    description:
      "A rescue story — stabilized a failing cross-country team as interim PO over 5 months, improved processes, and mentored own replacement.",
    detailedDescription:
      "5-month interim PO assignment on a struggling cross-country team. Stabilized Agile processes, reduced tech debt, strengthened team relations, and mentored own replacement before handing off cleanly. A textbook example of crisis product leadership.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Took over a struggling cross-country team as interim PO",
      "Stabilized Agile processes and reduced accumulated tech debt",
      "Strengthened team relations and rebuilt collaboration across locations",
      "Mentored own replacement and executed a clean handoff",
    ],
    impact: [
      "Team stabilized within 5 months",
      "Agile processes restored and tech debt reduced",
      "Successor PO mentored and onboarded",
      "Clean exit with no disruption to delivery",
    ],
  },
  {
    id: "4",
    name: "TNPS (The New Print Service)",
    role: "Product Manager — BMW Group",
    description:
      "Created a 14-section due diligence from scratch — 103 epics analyzed, capacity gap quantified with ~25 SP/quarter defect tax, self-service initiative phased from Q2 to Q4 across 6 iterations.",
    detailedDescription:
      "Took ownership of a new product and immediately created a comprehensive due diligence document (6 iterations, v1–v1.6) covering repository analysis, team composition, sprint velocity, epic backlog, risk register, and roadmap. Identified a hidden ~20-25 SP/quarter defect tax that was inflating roadmap commitments, restructured the document so analysis feeds into decisions, and conceptualized a self-service initiative with concrete quarterly phasing.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Created a 14-section due diligence document from scratch across 6 iterations (v1–v1.6)",
      "Analyzed 103 open epics with sprint velocity analysis and dependency-mapped 68 DEACH SAGAs",
      "Discovered hidden ~20-25 SP/quarter defect capacity tax — adjusted roadmap commitments accordingly",
      "Conceptualized self-service initiative with concrete phasing: Q2 Quick Wins, Q3/Q4 Phase 1",
      "Integrated 2 new risks into the register and consolidated 3 scattered question sections into 1",
    ],
    impact: [
      "Realistic capacity model replacing overstated planning assumptions",
      "103 epics analyzed and 68 SAGAs dependency-mapped in a single due diligence",
      "Self-service initiative phased with concrete quarterly timelines",
      "16 risks identified, integrated, and cross-referenced",
    ],
    relatedCaseId: 5,
  },
  {
    id: "5",
    name: "OpenNL",
    role: "Tech Senior Consultant — Deloitte",
    description:
      "National-scale COVID testing platform for the Netherlands — 9.4 million tests administered across 1,000+ locations, presented at OutSystems NextStep 2021.",
    detailedDescription:
      "Delivered a national-scale product under extreme time and political pressure. Managed a 10-person cross-border development team to build and scale a COVID testing platform for the Netherlands. The platform administered 9.4M tests across 1,000+ locations, and the work was presented at OutSystems NextStep 2021.",
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&h=400&fit=crop",
    link: "#",
    sector: "Public Health",
    country: "Netherlands",
    platform: "Web",
    type: "B2C",
    highlights: [
      "Managed 10-person cross-border development team",
      "Delivered under extreme time and political pressure",
      "Presented results at OutSystems NextStep 2021",
      "Scaled to support national-level testing infrastructure",
    ],
    impact: [
      "9.4 million COVID tests administered",
      "1,000+ test locations managed",
      "National-scale delivery under crisis conditions",
      "Presented at OutSystems NextStep 2021",
    ],
  },
  {
    id: "6",
    name: "Unitel",
    role: "Tech Senior Consultant — Deloitte",
    description:
      "Self-service app for Angola's largest telecom — enabling millions of subscribers to manage mobile services across web and mobile.",
    detailedDescription:
      "Led the infrastructure migration and platform upgrade on OutSystems, covering both the SelfCare and Field Service Management (FSM) modules. Ensured continuity of service while modernizing the technical foundation for Angola's largest telecom provider.",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop",
    link: "#",
    sector: "Telecommunications",
    country: "Angola",
    platform: "Web & Mobile",
    type: "B2C",
    highlights: [
      "Managed infrastructure migration and platform upgrade on OutSystems",
      "Delivered SelfCare and Field Service Management (FSM) modules",
      "Collaborated with stakeholders across geographies to align technical and business goals",
      "Ensured service continuity during complex migration processes",
    ],
    impact: [
      "Serving millions of subscribers across Angola",
      "Modernised technical foundation for the country's largest telecom",
      "Unified SelfCare and FSM into a single platform experience",
    ],
  },
  {
    id: "7",
    name: "NOS Self-Service App",
    role: "Tech Senior Consultant — Deloitte",
    description:
      "Mobile-first self-service app for NOS Portugal — inception to go-live in 10 months for one of Portugal's top telecoms.",
    detailedDescription:
      "Participated in the project from inception to initial go-live over 10 months. Structured and applied Agile methodologies and developed using the OutSystems platform. Coordinated with cross-functional teams to deliver on time and within scope.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    link: "#",
    sector: "Telecommunications",
    country: "Portugal",
    platform: "Mobile",
    type: "B2C",
    highlights: [
      "Drove the project from inception to initial go-live in 10 months",
      "Structured and applied Agile methodologies across the team",
      "Developed core features using the OutSystems platform",
      "Coordinated with cross-functional teams to deliver on time and within scope",
    ],
    impact: [
      "Launched a new digital channel for one of Portugal's top telecoms",
      "Enabled self-service for consumption, invoices, data packages, and promotions",
      "Inception to go-live in 10 months",
    ],
  },
  {
    id: "8",
    name: "HR Tool",
    role: "Tech Consultant — Deloitte",
    description:
      "Internal HR platform to centralize project sharing, timesheets, and certification management — built from scratch as a first consulting project.",
    detailedDescription:
      "Built an internal HR tool to centralize team management processes, enabling consultants to track their project history, manage timesheets, and maintain professional certifications in a single platform.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    link: "#",
    sector: "Human Resources",
    country: "Portugal",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Designed and built the platform from scratch as a first consulting project",
      "Centralized project sharing, timesheets, and certification management",
      "Created a streamlined experience for consultants to manage professional development",
    ],
    impact: [
      "Replaced manual processes with a unified digital platform",
      "Improved visibility into team capacity and project allocation",
      "Adopted internally across Deloitte Portugal teams",
    ],
  },
];
