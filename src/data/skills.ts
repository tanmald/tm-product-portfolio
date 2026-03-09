export interface Skill {
  name: string;
  evidence: string;
}

export interface SkillTier {
  tier: number;
  label: string;
  color: string;
  skills: Skill[];
}

export const skillTiers: SkillTier[] = [
  {
    tier: 1,
    label: "Differentiating",
    color: "blue",
    skills: [
      {
        name: "Strategic Analysis & Due Diligence",
        evidence: "TNPS: 6 versions of due diligence, 103 epics analyzed, self-service initiative born from data. RHUB: Deep Dive with capacity modeling, risk register, 3 scenarios.",
      },
      {
        name: "Complex Transition Management",
        evidence: "RHUB transition from ZA Hub: multi-scenario planning, dependency mapping, stakeholder alignment across BMW AG and CTW.",
      },
      {
        name: "Crisis Product Leadership",
        evidence: "eSign: rescued a failing cross-country team in 5 months, mentored replacement, exited cleanly.",
      },
      {
        name: "AI-Augmented Product Work",
        evidence: "Built MCP server centralizing GitHub/Confluence/Jira/databases. 2-week capacity analysis → 2 hours automated. CTO-level presentation with 6 real case studies.",
      },
      {
        name: "Quantitative Rigor",
        evidence: "Every project ships with metrics — 25K users, 9.4M tests, 103 epics, 68 SAGAs mapped. No vibes — numbers.",
      },
    ],
  },
  {
    tier: 2,
    label: "Strong Fundamentals",
    color: "green",
    skills: [
      {
        name: "Stakeholder Management",
        evidence: "BMW AG, CTW leadership, cross-country teams (DE/ZA/PT), government clients (IRN, Abu Dhabi).",
      },
      {
        name: "Agile & Delivery Excellence",
        evidence: "Sprint velocity analysis, MoSCoW prioritization, Scrum/SAFe across all BMW projects.",
      },
      {
        name: "Technical Fluency",
        evidence: "Module Federation, AWS (ECS Fargate, Lambda, Aurora Postgres), OutSystems, Apigee, Terraform, MCP servers.",
      },
      {
        name: "Mentoring & Team Building",
        evidence: "3 juniors at UpSkill, PO replacement at eSign, PV tutoring, mentorship sessions.",
      },
      {
        name: "Cross-Cultural Delivery",
        evidence: "Portugal, Germany, Angola, Netherlands, UAE, South Africa. Three languages.",
      },
    ],
  },
  {
    tier: 3,
    label: "Growth Edge",
    color: "purple",
    skills: [
      {
        name: "AI Product Strategy",
        evidence: "Anthropic AI Fluency course, Community of Practice facilitation, Figma MCP → backlog automation, personal projects (BookVault).",
      },
      {
        name: "Content & Personal Brand",
        evidence: "Instagram system with Content Calendar, Growth Playbook, Hook Library, Identity Guide, 30-Day Reels Plan.",
      },
      {
        name: "Entrepreneurial Building",
        evidence: "PlateCheck product, nutritional planning app explorations, BookVault concept.",
      },
    ],
  },
];
