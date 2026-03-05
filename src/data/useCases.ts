export interface UseCase {
  id: number;
  title: string;
  subtitle: string;
  emoji: string;
  challenge: string;
  actions: string[];
  results: { label: string; value: string }[];
  keyMetric: { label: string; value: string };
  learnings: string[];
  tags: string[];
  status: "complete" | "in-progress";
}

export const useCases: UseCase[] = [
  {
    id: 1,
    title: "Feedback Service Analytics",
    subtitle: "Dashboard Validation",
    emoji: "📊",
    challenge:
      "Needed to validate user reception of a newly activated dashboard feature with no structured feedback mechanism in place.",
    actions: [
      "Designed targeted in-app survey (FSM_STARTING_PHASE_POPUP) across 8 markets",
      "Collected quantitative (1-10 scores) and qualitative feedback",
      "Delivered executive summary with actionable insights",
    ],
    results: [
      { label: "Feedback items", value: "1,352" },
      { label: "Positive sentiment", value: "56.1%" },
      { label: "Markets covered", value: "8" },
      { label: "Avg satisfaction", value: "6.38/10" },
    ],
    keyMetric: { label: "Highest monthly feedback ever collected", value: "1,352 items" },
    learnings: [
      "Targeted surveys at feature launch generate 10x normal engagement",
      "56% positive is strong validation — doesn't need 100% to justify rollout",
      "Geo-clustering reveals localization opportunities",
    ],
    tags: ["Feature Validation", "User Research", "Data Analysis"],
    status: "complete",
  },
  {
    id: 2,
    title: "ONE News Deep Dive",
    subtitle: "Notification Engagement Strategy",
    emoji: "🔔",
    challenge:
      'Stakeholders believed notifications had a 91% read rate. Deeper analysis revealed the metric was misleading — actual engagement was only 18.5 readers per notification.',
    actions: [
      "Audited 73 notifications over 6 months across all markets",
      "Identified 5 critical root causes (missing targeting, insufficient visibility, no attachments)",
      "Designed 4-pillar strategy: default dashboard, default widget, quick wins, impression tracking",
    ],
    results: [
      { label: "Actual avg readers", value: "18.5" },
      { label: "Fixable issues", value: "42%" },
      { label: "Projected improvement", value: "+116%" },
      { label: "Additional reach", value: "+375 users" },
    ],
    keyMetric: { label: "Projected readers after implementation", value: "40+" },
    learnings: [
      "Beware vanity metrics — 91% 'read rate' hid 18.5 actual readers",
      "Default settings drive adoption more than discoverability",
      "Attachments correlate with 2.9x higher engagement",
    ],
    tags: ["Root Cause Analysis", "Engagement", "Strategy"],
    status: "in-progress",
  },
  {
    id: 3,
    title: "Test Manager Agent",
    subtitle: "From Meeting Transcripts to Autonomous QA",
    emoji: "🤖",
    challenge:
      "QA process relied on 22 informal meetings with no standardized agenda, no automated follow-up, and misreported test results (100% failure shown as success).",
    actions: [
      "Fed 22 meeting transcripts (312KB) to Copilot to extract implicit process patterns",
      "Designed modular agent with 12 specialized QA skills",
      "Fixed critical bug: agent checking Jira status instead of actual Xray test results",
      "Built automatic T-7/T-1 day go-live checklists",
    ],
    results: [
      { label: "Prep time", value: "30min → auto" },
      { label: "Test case creation", value: "15min → 3min" },
      { label: "Reusable skills", value: "12" },
      { label: "Quality gate", value: "Fixed" },
    ],
    keyMetric: { label: "Prevented false-positive releases", value: "Critical fix" },
    learnings: [
      "Meeting transcripts are untapped gold — 22 meetings contained an entire undocumented process",
      "Always verify what data field your automation checks — Jira status ≠ test result",
      "Codifying tribal knowledge into discrete skills makes it transferable",
    ],
    tags: ["AI Agent", "QA Automation", "Process Design"],
    status: "complete",
  },
  {
    id: 4,
    title: "GAIA LLM Translation Feasibility",
    subtitle: "AI Researching AI",
    emoji: "🌐",
    challenge:
      "Translation API being retired, proposed replacement blocked by infrastructure issues. Cost: €5K-€80K/year. Could BMW's own GAIA LLM API replace a dedicated translation API?",
    actions: [
      "Mapped complete CMT integration flow in codebase",
      "Researched GAIA LLM API v2 — discovered OpenAI-compatible REST API",
      "Found 3 BMW teams already using GAIA for translation in production",
      "Designed migration architecture with feature flag for gradual rollout",
    ],
    results: [
      { label: "Cost saving", value: "€5K-€80K/yr" },
      { label: "BMW precedents", value: "3 teams" },
      { label: "Languages validated", value: "14+" },
      { label: "Architecture", value: "Simpler" },
    ],
    keyMetric: { label: "Annual cost saved with free alternative", value: "€5,000+" },
    learnings: [
      "AI researching AI is a force multiplier — weeks of research compressed into one session",
      "Look for internal precedent before building — 'Who else has done this?' is the most valuable question",
      "The free alternative was also technically superior — constraints can be catalysts",
    ],
    tags: ["Technical Feasibility", "AI/LLM", "Cost Optimization"],
    status: "complete",
  },
  {
    id: 5,
    title: "Support Ticket Reduction",
    subtitle: "Data-Driven Product Improvement",
    emoji: "🎯",
    challenge:
      "~360 support tickets/year with aggressive reduction targets (30% by June, 60% by November). Needed concrete, data-backed reduction proposals — not guesses.",
    actions: [
      "Analyzed 12 months of ticket data: volume trends, severity, attribution, time patterns",
      "Discovered 38% were canceled alerts (noise) and 21% from a single misconfigured rule",
      "Created 7 structured reduction proposals with effort estimates and prioritization",
    ],
    results: [
      { label: "Alert noise", value: "38%" },
      { label: "Single rule impact", value: "21%" },
      { label: "Reduction proposals", value: "7" },
      { label: "30% target", value: "2 items" },
    ],
    keyMetric: { label: "Quick wins alone exceed 30% target", value: "59% addressable" },
    learnings: [
      "Look for noise first — 38% of tickets were false alarms generating real overhead",
      "One misconfigured threshold can be a top-3 problem",
      "Thursday 2x spikes correlate with deployment schedules — process changes are as effective as technical fixes",
    ],
    tags: ["Data Analysis", "Product Improvement", "Ops"],
    status: "complete",
  },
  {
    id: 6,
    title: "TNPS Product Due Diligence",
    subtitle: "Evaluation & Capacity Planning",
    emoji: "📋",
    challenge:
      "Inherited a product with a 14-section due diligence doc that had a critical flaw: defect analysis was disconnected from the capacity planning it should inform.",
    actions: [
      "Restructured all 14 sections into logical analytical flow",
      "Calculated defect capacity tax: ~20-25 SP/quarter consumed by defect handling",
      "Mapped self-service initiative against quarterly capacity constraints",
      "Integrated new risks into register and consolidated scattered stakeholder questions",
    ],
    results: [
      { label: "Sections reorganized", value: "14" },
      { label: "Defect tax found", value: "20-25 SP/qtr" },
      { label: "Risks added", value: "+2" },
      { label: "Question sections", value: "3 → 1" },
    ],
    keyMetric: { label: "Realistic capacity model created", value: "~25 SP/qtr overhead" },
    learnings: [
      "Analysis order determines decision quality — defect data must come before roadmap",
      "Defect tax is invisible until quantified — roadmaps assume zero defects by default",
      "'Someday' is not a plan — mapping against capacity turns aspiration into actionable phasing",
    ],
    tags: ["Due Diligence", "Capacity Planning", "Product Evaluation"],
    status: "complete",
  },
  {
    id: 7,
    title: "2026 Portfolio & Roadmap",
    subtitle: "Executive Stakeholder Management",
    emoji: "🗺️",
    challenge:
      "Distill 40 open epics across multiple domains into a clear, digestible overview for management stakeholders who need high-level understanding.",
    actions: [
      "Classified all 40 non-Pending epics by scope, dependencies, and business domain",
      "Created 8 themed clusters with priority levels and complexity tiers",
      "Identified critical path: Infrastructure & Security (9 epics) consuming 60%+ capacity",
      "Framed clusters as 'delivery themes' for executive audience",
    ],
    results: [
      { label: "Epics clustered", value: "40 → 8" },
      { label: "Critical path", value: "9 epics" },
      { label: "Capacity risk", value: "60%+" },
      { label: "Framework", value: "Reusable" },
    ],
    keyMetric: { label: "Epics transformed into actionable themes", value: "40 → 8 clusters" },
    learnings: [
      "Clustering is the PM's secret weapon — 8 themes enable trade-off conversations",
      "Critical path dominates — 22.5% of epics consume majority of capacity",
      "Frame for your audience — 'Infrastructure & Stability requires 6 epics' beats OTEL details",
    ],
    tags: ["Stakeholder Management", "Portfolio", "Communication"],
    status: "complete",
  },
  {
    id: 8,
    title: "Cross-App Analytics Gap Analysis",
    subtitle: "Requirements Traceability",
    emoji: "🔍",
    challenge:
      "After a stakeholder meeting, needed to verify whether created Jira tickets actually covered all discussed requirements — and identify scope drift.",
    actions: [
      "Extracted 8 requirements from meeting notes and mapped to Jira tickets",
      "Verified 8/8 coverage — no orphaned requirements",
      "Identified 5 discrepancies between meeting notes, blueprint, and tickets",
      "Flagged scope creep risk: 5 events vs. 3 discussed = 66% scope increase",
    ],
    results: [
      { label: "Requirements covered", value: "8/8" },
      { label: "Discrepancies found", value: "5" },
      { label: "Scope risk", value: "+66%" },
      { label: "Action items", value: "6" },
    ],
    keyMetric: { label: "Prevented misaligned sprint planning", value: "0.5-1 sprint saved" },
    learnings: [
      "Meeting notes ≠ tickets ≠ blueprints — three sources always diverge",
      "Scope creep is often accidental — blueprints are more comprehensive than discussions",
      "Do gap analysis before planning, not during — 30 min prevents 2-hour derailments",
    ],
    tags: ["Requirements", "Traceability", "Risk Management"],
    status: "complete",
  },
];
