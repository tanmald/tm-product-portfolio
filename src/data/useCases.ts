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
    subtitle: "Feature Validation at Scale",
    emoji: "📊",
    challenge:
      "New dashboard feature launched with no structured feedback mechanism. The team needed rapid validation data to make a go/no-go decision within weeks.",
    actions: [
      "Deployed targeted in-app survey across 8 markets — collected 1,352 responses in one campaign cycle",
      "Analyzed satisfaction patterns and geographic clustering to identify localization opportunities",
      "Delivered executive summary with clear go/no-go recommendation backed by data",
    ],
    results: [
      { label: "Responses collected", value: "1,352" },
      { label: "Positive sentiment", value: "56%" },
      { label: "Markets covered", value: "8" },
      { label: "vs. baseline", value: "10x" },
    ],
    keyMetric: { label: "10x engagement vs. baseline", value: "1,352 responses" },
    learnings: [
      "Targeted surveys at feature launch generate 10x normal engagement — timing is everything",
      "56% positive is strong validation — you don't need 100% to justify a rollout",
    ],
    tags: ["Feature Validation", "User Research", "Data Analysis"],
    status: "complete",
  },
  {
    id: 2,
    title: "Notification Engagement Deep Dive",
    subtitle: "Debunking a Vanity Metric",
    emoji: "🔔",
    challenge:
      "Stakeholders reported a 91% notification read rate. Deeper analysis of 73 notifications revealed the real number: 18.5 actual readers per notification across 1,500+ active users.",
    actions: [
      "Audited 73 notifications over 6 months — surfaced 5 root causes including missing targeting and same-day expiry",
      "Quantified that 42% of underperformance was fixable with process changes alone",
      "Designed a 4-pillar improvement strategy projecting +116% reach improvement",
    ],
    results: [
      { label: "Actual avg readers", value: "18.5" },
      { label: "Quick-fixable issues", value: "42%" },
      { label: "Projected improvement", value: "+116%" },
      { label: "Additional reach", value: "+375 users" },
    ],
    keyMetric: { label: "Exposed vanity metric hiding real engagement", value: "91% → 18.5 readers" },
    learnings: [
      "Always dig into the denominator — vanity metrics hide reality",
      "Process fixes often outperform technical fixes — 42% of issues needed zero engineering",
    ],
    tags: ["Root Cause Analysis", "Engagement", "Strategy"],
    status: "in-progress",
  },
  {
    id: 3,
    title: "Translation API Migration",
    subtitle: "Finding a Better Path Under Pressure",
    emoji: "🌐",
    challenge:
      "Critical translation API being retired. The proposed replacement was blocked by infrastructure issues. Needed to find a viable alternative without new dependencies or €5K–€80K/year in costs.",
    actions: [
      "Assessed 3 candidate APIs against technical requirements — found 3 BMW teams already using a free internal LLM alternative in production",
      "Recommended phased migration with feature flag for instant rollback",
      "Eliminated proof-of-concept risk by leveraging existing internal precedent",
    ],
    results: [
      { label: "Cost saved", value: "€5K–€80K/yr" },
      { label: "Internal precedents", value: "3 teams" },
      { label: "Languages supported", value: "14+" },
      { label: "Architecture", value: "Simpler" },
    ],
    keyMetric: { label: "Free alternative that was also technically superior", value: "€5K–€80K saved" },
    learnings: [
      "Ask 'who else has done this?' before building — internal precedent eliminates months of POC work",
      "Blockers reveal opportunities — the forced exploration led to a better solution on every dimension",
    ],
    tags: ["Technical Feasibility", "AI/LLM", "Cost Optimization"],
    status: "complete",
  },
  {
    id: 4,
    title: "Support Ticket Reduction",
    subtitle: "From Noise to Signal",
    emoji: "🎯",
    challenge:
      "~360 support tickets/year with aggressive reduction targets (30% by June, 60% by November). No prior systematic analysis of ticket patterns existed.",
    actions: [
      "Analyzed 12 months of ticket data — discovered 38% were false alarms and 21% came from a single misconfigured rule",
      "Identified that 59% of volume was addressable with quick wins alone",
      "Created 7 prioritized reduction proposals with effort estimates and cumulative impact projections",
    ],
    results: [
      { label: "False alarm noise", value: "38%" },
      { label: "Single-rule impact", value: "21%" },
      { label: "Addressable volume", value: "59%" },
      { label: "30% target", value: "2 items needed" },
    ],
    keyMetric: { label: "Quick wins alone exceeded 30% target", value: "59% addressable" },
    learnings: [
      "Eliminate work that shouldn't exist before optimizing work that should — noise first, signal second",
      "Concentration risk is real — one misconfigured rule was a top-3 problem",
    ],
    tags: ["Data Analysis", "Product Improvement", "Ops"],
    status: "complete",
  },
  {
    id: 5,
    title: "Product Due Diligence",
    subtitle: "Building Context Fast on a New Product",
    emoji: "📋",
    challenge:
      "Took ownership of a new product with no prior context. Needed to build a realistic view of capacity, backlog health, and delivery risk — fast.",
    actions: [
      "Created comprehensive due diligence from scratch across 6 iterations — covering backlog, velocity, risks, and capacity",
      "Uncovered a hidden ~25 SP/quarter defect tax that was inflating every roadmap commitment",
      "Designed phased self-service initiative with concrete quarterly milestones (Q2–Q4)",
    ],
    results: [
      { label: "Defect tax found", value: "~25 SP/qtr" },
      { label: "Epics analyzed", value: "103" },
      { label: "Risks identified", value: "16" },
      { label: "Iterations", value: "6" },
    ],
    keyMetric: { label: "Realistic capacity model replacing inflated plans", value: "~25 SP/qtr hidden cost" },
    learnings: [
      "Defect tax is invisible until you quantify it — roadmaps assume zero defects by default",
      "Due diligence is the fastest way to build context and earn credibility on a new product",
    ],
    tags: ["Due Diligence", "Capacity Planning", "Product Evaluation"],
    status: "complete",
  },
  {
    id: 6,
    title: "Portfolio & Roadmap Clustering",
    subtitle: "Making 40 Epics Digestible for Executives",
    emoji: "🗺️",
    challenge:
      "40 open epics across multiple domains needed to become a clear, actionable overview for annual planning. Management needed themes, not ticket lists.",
    actions: [
      "Clustered 40 epics into 8 delivery themes with priority levels and complexity tiers",
      "Identified that infrastructure & security (9 epics) consumed 60%+ of capacity — the critical path",
      "Framed clusters as strategic narratives for executive audience",
    ],
    results: [
      { label: "Epics clustered", value: "40 → 8" },
      { label: "Critical path", value: "9 epics" },
      { label: "Capacity at risk", value: "60%+" },
      { label: "Framework", value: "Reusable" },
    ],
    keyMetric: { label: "40 epics distilled into 8 actionable themes", value: "40 → 8 clusters" },
    learnings: [
      "Clustering enables trade-off conversations — a flat list of 40 paralyzes decision-making",
      "Frame for your audience — executives need themes, not implementation details",
    ],
    tags: ["Stakeholder Management", "Portfolio", "Communication"],
    status: "complete",
  },
  {
    id: 7,
    title: "Requirements Traceability",
    subtitle: "Catching Scope Drift Before It Costs Sprints",
    emoji: "🔍",
    challenge:
      "After a stakeholder meeting, needed to verify whether created tickets actually covered all discussed requirements — and catch any scope drift between sources.",
    actions: [
      "Mapped 8 requirements from meeting notes to tickets — verified 100% coverage",
      "Found 5 discrepancies between meeting notes, blueprint, and tickets — including a 66% scope increase",
      "Flagged scope creep risk early: 5 events vs. 3 discussed = +0.5–1 sprint of unplanned work",
    ],
    results: [
      { label: "Requirements covered", value: "8/8" },
      { label: "Discrepancies found", value: "5" },
      { label: "Hidden scope increase", value: "+66%" },
      { label: "Sprint time saved", value: "0.5–1" },
    ],
    keyMetric: { label: "Prevented misaligned sprint planning", value: "0.5–1 sprint saved" },
    learnings: [
      "Meeting notes ≠ tickets ≠ blueprints — three sources always diverge. 30 min of traceability prevents 2-hour derailments",
      "Quantify scope differences — '+2 events = 0.5 sprint' is a decision-enabling statement",
    ],
    tags: ["Requirements", "Traceability", "Risk Management"],
    status: "complete",
  },
  {
    id: 8,
    title: "Estimation Calibration",
    subtitle: "Data-Driven Story Points from T-Shirt Sizes",
    emoji: "📏",
    challenge:
      "Team used T-shirt sizes but org needed Fibonacci story points for capacity planning. Initial mappings were inaccurate — M-sized epics ranged from 9 to 38 SP (4x variance).",
    actions: [
      "Analyzed 36 real epics (314 stories) to build statistical profiles per T-shirt size",
      "Mapped each size to nearest Fibonacci value with anchor epics for team calibration",
      "Established max 21 SP rule — anything larger must be split before estimation",
    ],
    results: [
      { label: "Epics analyzed", value: "36" },
      { label: "Stories processed", value: "314" },
      { label: "Max epic size", value: "21 SP" },
      { label: "Confidence", value: "High" },
    ],
    keyMetric: { label: "Data-backed estimation replacing gut-feel", value: "36 epics → calibrated model" },
    learnings: [
      "Historical data beats estimation workshops — 36 real epics outperform any group consensus exercise",
      "High variance signals the wrong abstraction — when M ranges 9–38 SP, the category is too coarse",
    ],
    tags: ["Estimation", "Capacity Planning", "Data Analysis"],
    status: "complete",
  },
  {
    id: 9,
    title: "Monte Carlo Capacity Forecasting",
    subtitle: "Replacing 'We'll Try' with Probabilities",
    emoji: "🎲",
    challenge:
      "Three teams needed delivery forecasts for Q2 2026, but traditional velocity planning only gave single-point estimates. Management needed confidence levels, not promises.",
    actions: [
      "Built Python Monte Carlo simulation (10,000 iterations per team) sampling historical throughput from 10–12 sprints",
      "Generated P50/P70/P85/P95 probability distributions with risk-calibrated delivery dates",
      "Created reusable forecast template — 1 hour to build, saves ~2 hours per team per quarter",
    ],
    results: [
      { label: "Simulations", value: "10K × 3 teams" },
      { label: "Confidence levels", value: "P50–P95" },
      { label: "Framework", value: "Reusable" },
      { label: "Teams forecasted", value: "3" },
    ],
    keyMetric: { label: "Probabilistic commitments replacing single-point estimates", value: "P85 recommended" },
    learnings: [
      "10,000 iterations cost seconds — overconfidence costs weeks of missed expectations",
      "P85 is the stakeholder sweet spot — P50 is a coin flip, P95 wastes capacity",
    ],
    tags: ["Forecasting", "Monte Carlo", "Capacity Planning"],
    status: "complete",
  },
  {
    id: 10,
    title: "Configurable Feedback System",
    subtitle: "From One-Off Requests to PM Self-Service",
    emoji: "⚙️",
    challenge:
      "Every new in-app survey required backend and frontend code changes plus a full deployment cycle. A second survey request revealed the pattern — time to abstract.",
    actions: [
      "Audited the feedback flow and identified 4 hardcoded coupling points across frontend and backend",
      "Designed a configurable system where new surveys require zero code — just a config entry",
      "Split into parallel workstreams: platform capability + immediate activation, both delivered on time",
    ],
    results: [
      { label: "New survey effort", value: "1 sprint → 30min" },
      { label: "Dev involvement", value: "Zero" },
      { label: "Coupling points", value: "4 → 1" },
      { label: "Deploy risk", value: "Eliminated" },
    ],
    keyMetric: { label: "Future surveys became PM self-service", value: "~30 min each" },
    learnings: [
      "The second instance reveals the pattern — building the same thing twice means it's time to abstract",
      "Configuration beats code for business-owned decisions — survey timing shouldn't require a release",
    ],
    tags: ["Architecture", "Scope Management", "System Design"],
    status: "complete",
  },
  {
    id: 11,
    title: "Translation Service Decoupling",
    subtitle: "Making a Platform Service Survive Independently",
    emoji: "🔗",
    challenge:
      "Translation service serves 74 markets and 14+ languages but was coupled to a parent platform in 7 specific ways. With the parent facing potential decommission, the service needed full independence — with zero downtime.",
    actions: [
      "Mapped all 7 coupling points across routing, proxies, storage, and infrastructure",
      "Designed 4-phase decoupling plan ordered by risk — lowest-risk changes first to build confidence",
      "Specified 11 implementation tasks with exact files, changes, and verification steps across 3 repos",
    ],
    results: [
      { label: "Coupling points", value: "7 → 0" },
      { label: "Decoupling phases", value: "4" },
      { label: "Implementation tasks", value: "11" },
      { label: "Disruption risk", value: "Zero" },
    ],
    keyMetric: { label: "Full service independence with zero disruption", value: "7 → 0 couplings" },
    learnings: [
      "Coupling is invisible until you map it — the service 'was already separate' but couldn't actually run alone",
      "Phase by risk, not complexity — early wins build confidence for higher-risk changes",
    ],
    tags: ["Architecture", "Platform Strategy", "Decoupling"],
    status: "complete",
  },
  {
    id: 12,
    title: "Test Manager Agent",
    subtitle: "From Meeting Transcripts to Autonomous QA",
    emoji: "🤖",
    challenge:
      "QA process was entirely manual — dependent on weekly meetings with no structured format and no automated tracking. Test results were being misreported: the agent initially showed 'all passed' when 100% had actually failed.",
    actions: [
      "Used AI to analyze 22 meeting transcripts (312KB, 2,735 lines) — extracted interaction patterns and decision flows",
      "Built a full Test Manager agent with 12 specialized skills covering test planning, defect management, and release readiness",
      "Discovered critical bug: results were based on ticket status instead of actual test outcomes — fixed to prevent false-positive releases",
    ],
    results: [
      { label: "Prep time", value: "30min → auto" },
      { label: "Test case creation", value: "15min → 3min" },
      { label: "Specialized skills", value: "12" },
      { label: "Quality gate", value: "Strengthened" },
    ],
    keyMetric: { label: "Prevented false-positive releases", value: "Critical fix" },
    learnings: [
      "The best AI training data is the existing process — using the team's own history made the agent feel native, not imposed",
      "Tribal knowledge has an expiry date — codifying it turned a people-dependency into a reusable asset",
    ],
    tags: ["AI Agent", "QA Automation", "Process Design"],
    status: "complete",
  },
];
