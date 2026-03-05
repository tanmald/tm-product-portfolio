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
      "The product team needed to validate the impact and user reception of a newly activated dashboard feature. No structured feedback mechanism was in place, and rapid validation data was needed to inform go/no-go decisions.",
    actions: [
      "Designed and deployed targeted in-app survey (FSM_STARTING_PHASE_POPUP) across 8 markets",
      "Collected both quantitative (1-10 satisfaction scores) and qualitative feedback from 1,000+ responses",
      "Delivered executive summary with key metrics framed against business objectives",
    ],
    results: [
      { label: "Feedback items", value: "1,352" },
      { label: "Positive sentiment", value: "56.1%" },
      { label: "Markets covered", value: "8" },
      { label: "Avg satisfaction", value: "6.38/10" },
    ],
    keyMetric: { label: "Highest monthly feedback ever collected", value: "1,352 items" },
    learnings: [
      "Targeted surveys at feature launch generate 10x normal engagement (~1,300 vs. baseline 100-150)",
      "56% positive is strong validation — doesn't need 100% to justify rollout",
      "Geo-clustering reveals regional factors and localization opportunities",
      "Intentional deployment + deactivation = clean campaign lifecycle with clear ROI",
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
      "Stakeholders believed notifications had a 91% read rate. Deeper analysis revealed the metric was misleading — actual engagement was only 18.5 readers per notification across ~1,500+ monthly active users.",
    actions: [
      "Audited 73 notifications over 6 months — collected reader counts, visibility duration, country targeting, content type, and attachment usage",
      "Identified 5 critical root causes: missing country targeting (8%), same-day visibility (12%), no attachments, test messages in production (4%), and low dashboard adoption",
      "Designed 4-pillar strategy: default dashboard/widget enablement, quick wins (mandatory targeting, minimum visibility), and impression tracking via Intersection Observer API",
    ],
    results: [
      { label: "Actual avg readers", value: "18.5" },
      { label: "Fixable issues", value: "42%" },
      { label: "Projected improvement", value: "+116%" },
      { label: "Additional reach", value: "+375 users" },
    ],
    keyMetric: { label: "Projected readers after implementation", value: "40+" },
    learnings: [
      "Beware vanity metrics — 91% 'read rate' hid 18.5 actual readers. Always dig into denominator and definition",
      "Process failures account for 42% of underperformance — quick fixes yield measurable results",
      "Default settings drive adoption more than discoverability — 29% of users were completely out of the loop",
      "Attachments correlate with 2.9x higher engagement (36 vs. 12 readers)",
      "Measurement gaps hide reality — couldn't distinguish 'didn't see' from 'saw but didn't click' until impression tracking was designed",
      "No single fix solves the problem — required coordinated work on infrastructure, content, process, and measurement",
    ],
    tags: ["Root Cause Analysis", "Engagement", "Strategy"],
    status: "in-progress",
  },
  {
    id: 3,
    title: "Test Manager Agent",
    subtitle: "Automating a Manual QA Process Without Losing Its Institutional Knowledge",
    emoji: "🤖",
    challenge:
      "ONE Sales Workplace had a well-functioning but entirely manual and FTE-dependent QA process. Weekly jourfix meetings brought together the PO, Test Manager, and DevOps to review progress, manage defects, and track go-live readiness — but institutional knowledge lived only in transcripts and memory. The process worked but could not scale, be handed off, or self-enforce.",
    actions: [
      "Converted institutional knowledge into agent design by synthesizing meeting transcripts, QA practice docs, and formal role standards — mapping what the team actually did against what a test management function should deliver",
      "Designed modular agent with 12 specialized QA skills covering the full lifecycle: test planning, defect governance, phase readiness gates, go-live tracking, jourfix facilitation, and release management",
      "Discovered and fixed critical quality gate bug during build: agent was treating ticket closure as equivalent to a passed test — making the automated process more rigorous than the manual one it replaced",
    ],
    results: [
      { label: "Prep time", value: "30min → auto" },
      { label: "Test case creation", value: "15min → 3min" },
      { label: "Reusable skills", value: "12" },
      { label: "Quality gate", value: "Strengthened" },
    ],
    keyMetric: { label: "Prevented false-positive releases", value: "Critical fix" },
    learnings: [
      "The best knowledge source is the existing process itself — using the team's own history as the blueprint made the agent feel native, not imposed",
      "Automation exposes hidden assumptions — translating manual process into formal logic surfaced risks that human review tends to paper over",
      "Tribal knowledge has an expiry date — everything in people's heads became a liability the moment someone changed roles. Codifying it turned a dependency into an asset",
      "Iterative build > big-bang delivery — 5+ sessions with real usage feedback meant each iteration improved in ways a single-pass design never would have caught",
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
      "Translation API being retired, proposed replacement blocked by infrastructure issues. Cost: €5K-€80K/year. Could BMW's own GAIA LLM API replace a dedicated translation API for a 74-market platform serving 14+ languages?",
    actions: [
      "Mapped complete CMT integration flow in codebase: service layers, async polling workflow, and all touchpoints",
      "Researched GAIA LLM API v2 — discovered OpenAI-compatible REST API with existing WebEAM authentication",
      "Found 3 BMW teams already using GAIA for translation in production (Newshub, DTCM, IDS) — extracted proven system prompts",
      "Designed migration architecture with feature flag for gradual rollout, eliminating complex async polling",
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
      "Look for internal precedent before building — 'Who else has done this?' eliminates months of proof-of-concept work",
      "The free alternative was also technically superior — constraints can be catalysts",
      "PMs can lead technical feasibility — with AI assistance, mapped architectures and designed migration plans in traditionally developer-only territory",
      "Feature flags de-risk everything — designing with a toggle means instant fallback, no big-bang migration needed",
      "Blockers reveal opportunities — the blocked BMW Translator forced exploration of GAIA LLM, which was better on every dimension",
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
      "~30 support tickets/month (360/year) with aggressive reduction targets (30% by June, 60% by November). Needed concrete, data-backed reduction proposals — not guesses. No prior systematic analysis of ticket patterns existed.",
    actions: [
      "Analyzed 12 months of ticket data: volume trends, severity distribution, origin attribution, time-of-week patterns",
      "Discovered 38% were canceled alerts (noise), 21% from a single misconfigured rule (FG-861), and 40% had missing attribution",
      "Created 7 structured reduction proposals in WP3 format with effort estimates, prioritization, and cumulative impact against targets",
    ],
    results: [
      { label: "Alert noise", value: "38%" },
      { label: "Single rule impact", value: "21%" },
      { label: "Reduction proposals", value: "7" },
      { label: "30% target", value: "2 items" },
    ],
    keyMetric: { label: "Quick wins alone exceed 30% target", value: "59% addressable" },
    learnings: [
      "Look for noise first — 38% of tickets were false alarms generating real overhead. Eliminate work that shouldn't exist before optimizing work that should",
      "One misconfigured threshold can be a top-3 problem — always check for concentration risk",
      "Attribution gaps hide root causes — when 40% of tickets can't be traced, proper root cause analysis is impossible",
      "Thursday 2x spikes correlate with deployment schedules — process changes are as effective as technical fixes",
      "Layer quick wins over structural changes — achieving 30% with 2 items buys credibility and time for the harder 60% target",
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
      "Inherited a product with a 14-section due diligence doc that had a critical flaw: defect analysis and self-service initiative were appended at the end, disconnected from the capacity planning and risk sections they should inform.",
    actions: [
      "Restructured all 14 sections into logical analytical flow — moved defect analysis before capacity planning so data feeds into math",
      "Calculated defect capacity tax: ~20-25 SP/quarter consumed by defect handling, subtracted from available capacity",
      "Mapped self-service initiative against quarterly capacity: Q2 Quick Wins, Q3/Q4 Phase 1",
      "Integrated 2 new risks into register and consolidated 3 scattered question sections into 1",
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
      "Due diligence is a PM superpower — structured evaluation is the fastest way to build context and earn credibility",
      "Consolidation reduces cognitive load — scattered question sections meant some were missed",
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
      "Distill 40 open epics across multiple domains into a clear, digestible overview for management stakeholders who need high-level understanding for annual planning and resource allocation.",
    actions: [
      "Classified all 40 non-Pending epics by scope, dependencies, and business domain",
      "Created 8 themed clusters with priority levels and complexity tiers (High/Medium/Low)",
      "Identified critical path: Infrastructure & Security (9 epics) consuming 60%+ capacity",
      "Framed clusters as 'delivery themes' with narrative arc for executive audience",
    ],
    results: [
      { label: "Epics clustered", value: "40 → 8" },
      { label: "Critical path", value: "9 epics" },
      { label: "Capacity risk", value: "60%+" },
      { label: "Framework", value: "Reusable" },
    ],
    keyMetric: { label: "Epics transformed into actionable themes", value: "40 → 8 clusters" },
    learnings: [
      "Clustering is the PM's secret weapon — 8 themes enable trade-off conversations that a flat list of 40 paralyzes",
      "Complexity assessment enables honest conversations — High/Medium/Low forces acknowledgment that not everything can be done",
      "Critical path dominates — 22.5% of epics consume majority of capacity. Identifying this early prevents the 'we'll do everything' trap",
      "Frame for your audience — management needs 'Infrastructure & Stability requires 6 epics' not OTEL instrumentation details",
      "Delivery themes > individual tickets — grouping creates a narrative arc that resonates with strategic planning",
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
      "After a stakeholder meeting, needed to verify whether created Jira tickets actually covered all discussed requirements — and identify scope drift between meeting notes, blueprint, and tickets.",
    actions: [
      "Extracted 8 requirements from meeting notes and mapped to Jira tickets — verified 8/8 coverage",
      "Identified 5 discrepancies between meeting notes, blueprint, and tickets (event scope, naming, timeout logic, CDH status, optional fields)",
      "Flagged scope creep risk: 5 events vs. 3 discussed = 66% scope increase (+0.5-1 sprint). Created 6 tracked action items",
    ],
    results: [
      { label: "Requirements covered", value: "8/8" },
      { label: "Discrepancies found", value: "5" },
      { label: "Scope risk", value: "+66%" },
      { label: "Action items", value: "6" },
    ],
    keyMetric: { label: "Prevented misaligned sprint planning", value: "0.5-1 sprint saved" },
    learnings: [
      "Meeting notes ≠ tickets ≠ blueprints — three sources always diverge. Systematic traceability catches drift before rework",
      "Scope creep is often accidental — blueprints are more comprehensive than discussions, inflating scope silently",
      "Quantify scope differences — '2 extra events = 0.5-1 additional sprint' is a decision-enabling statement",
      "Do gap analysis before planning, not during — 30 min prevents 2-hour derailments",
      "Traceability is a PM discipline, not overhead — small investment, large protection. The ROI is asymmetric",
    ],
    tags: ["Requirements", "Traceability", "Risk Management"],
    status: "complete",
  },
];
