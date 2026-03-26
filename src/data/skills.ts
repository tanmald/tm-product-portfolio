export interface Skill {
  name: string;
  evidence: string;
  size: "large" | "medium" | "small";
  metric?: string;
  tier: string;
  color: string;
  relatedProductIds?: string[];
  relatedCaseIds?: number[];
}

export const skills: Skill[] = [
  {
    name: "AI-Augmented Product Work",
    evidence:
      "Built an MCP server and AI agents that turned 2-week manual analyses into 2-hour automated workflows — presented 6 real case studies to CTO-level leadership.",
    size: "large",
    metric: "2 weeks → 2 hours",
    tier: "Differentiating",
    color: "primary",
    relatedProductIds: ["1", "2"],
    relatedCaseIds: [12, 8, 9],
  },
  {
    name: "Strategic Analysis & Due Diligence",
    evidence:
      "Created due diligence from scratch across 6 iterations, uncovering a hidden ~25 SP/quarter defect tax and building capacity models that reshaped roadmap commitments.",
    size: "large",
    metric: "103 epics analyzed",
    tier: "Differentiating",
    color: "primary",
    relatedProductIds: ["2", "3"],
    relatedCaseIds: [5, 6, 7],
  },
  {
    name: "Stakeholder Management",
    evidence:
      "Aligned BMW AG leadership, cross-country teams (DE/ZA/PT), and government clients across 5+ countries — navigating politics to unblock product decisions.",
    size: "medium",
    tier: "Strong",
    color: "accent",
    relatedProductIds: ["1", "3"],
    relatedCaseIds: [3, 11],
  },
  {
    name: "Crisis Product Leadership",
    evidence:
      "Rescued a failing cross-country product in 5 months — stabilized delivery, mentored a replacement PO, and exited cleanly with the team self-sufficient.",
    size: "medium",
    tier: "Strong",
    color: "accent",
    relatedProductIds: ["5"],
    relatedCaseIds: [4],
  },
  {
    name: "Quantitative Rigor",
    evidence:
      "Every product ships with metrics — 25K users, 9.4M tests, 103 epics mapped. Decisions backed by data, never vibes.",
    size: "medium",
    metric: "9.4M+ data points",
    tier: "Strong",
    color: "accent",
    relatedProductIds: ["1", "2"],
    relatedCaseIds: [1, 2, 9],
  },
  {
    name: "AI Product Strategy",
    evidence:
      "Completed Anthropic AI Fluency certification, facilitated AI Community of Practice, and explored Figma MCP → backlog automation pipelines.",
    size: "medium",
    tier: "Growth",
    color: "secondary",
    relatedCaseIds: [12],
  },
  {
    name: "Cross-Cultural Delivery",
    evidence:
      "Delivered products across Portugal, Germany, Angola, Netherlands, UAE, and South Africa. Three languages.",
    size: "small",
    metric: "5+ countries",
    tier: "Strong",
    color: "accent",
    relatedProductIds: ["1", "4", "6"],
  },
  {
    name: "Technical Fluency",
    evidence:
      "Module Federation, AWS (ECS Fargate, Lambda, Aurora), OutSystems, Apigee, Terraform — credibility with engineering teams.",
    size: "small",
    tier: "Strong",
    color: "accent",
    relatedProductIds: ["1", "5"],
    relatedCaseIds: [3, 11],
  },
  {
    name: "Entrepreneurial Building",
    evidence:
      "PlateCheck product concept, BookVault AI reading tracker, nutritional planning app — from idea to prototype.",
    size: "small",
    tier: "Growth",
    color: "secondary",
  },
];
