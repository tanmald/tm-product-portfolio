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
      "The product team needed to validate the impact and user reception of a newly activated dashboard feature. No structured feedback mechanism was in place, and rapid validation data was needed to inform go/no-go decisions within weeks of activation.",
    actions: [
      "Designed and deployed targeted in-app survey (FSM_STARTING_PHASE_POPUP) across 8 markets with both quantitative (1-10) and qualitative feedback",
      "Analyzed 1,000+ response sample for satisfaction patterns, geographic distribution, and sentiment trends",
      "Delivered executive summary with key metrics framed against business objectives for go/no-go decision",
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
      "Stakeholders believed notifications had a 91% read rate. Deeper analysis of 73 notifications over 6 months revealed the metric was misleading — actual engagement was only 18.5 readers per notification across ~1,500+ monthly active users.",
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
    title: "Translation API Migration",
    subtitle: "Evaluating Alternatives Under Technical and Commercial Constraints",
    emoji: "🌐",
    challenge:
      "ONE's Translation Service depended on the CMT Translation API, which was being retired. The proposed replacement (BMW Translator API) was blocked by infrastructure issues. Cost: €5K–€80K/year. Could a viable internal alternative unblock the team without new dependencies or significant cost?",
    actions: [
      "Mapped complete CMT integration across frontend and backend to understand full replacement scope",
      "Assessed three candidate APIs against technical requirements: authentication, language coverage, HTML support, production readiness, and cost",
      "Found 3 BMW teams already using GAIA LLM for translation in production — eliminating proof-of-concept risk",
      "Recommended phased migration with feature flag for instant rollback, noting synchronous API simplifies architecture by eliminating async polling",
    ],
    results: [
      { label: "Cost saving", value: "€5K–€80K/yr" },
      { label: "BMW precedents", value: "3 teams" },
      { label: "Languages validated", value: "14+" },
      { label: "Architecture", value: "Simpler" },
    ],
    keyMetric: { label: "Annual cost saved with free alternative", value: "€5,000+" },
    learnings: [
      "Look for internal precedent before building — 'Who else has done this?' eliminates months of proof-of-concept work",
      "Cost isn't always a tradeoff — the free alternative was also technically superior (simpler architecture, existing auth)",
      "PMs can own technical feasibility decisions with structured frameworks — architecture mapping, vendor review, and internal precedent research",
      "Feature flags de-risk everything — instant fallback, no big-bang migration needed",
      "Blockers reveal opportunities — BMW Translator's issues forced exploration of GAIA LLM, which was better on every dimension",
    ],
    tags: ["Technical Feasibility", "AI/LLM", "Cost Optimization"],
    status: "complete",
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
  {
    id: 8,
    title: "T-Shirt Size → Story Points Calibration",
    subtitle: "Data-Driven Estimation Framework",
    emoji: "📏",
    challenge:
      "The team used T-shirt sizes (2XS–XL) but organizational capacity planning required Fibonacci story points. Initial SP estimations were inaccurate, leading to unreliable capacity planning. Could we build a data-driven mapping from 36 real epics?",
    actions: [
      "Queried 96 ONEF epics from 2025, filtered to 36 with T-shirt sizes and child story data (314 stories after UX exclusions)",
      "Computed statistical profiles per T-shirt size: min, max, median, average, standard deviation — identifying 4x variance in M-sized epics (9–38 SP)",
      "Mapped each T-shirt size to nearest Fibonacci value with anchor epics for team calibration and established max 21 SP rule with mandatory split for L/XL",
      "Published calibration table to Confluence and integrated into quarterly capacity planning workflow",
    ],
    results: [
      { label: "Epics analyzed", value: "36" },
      { label: "Stories processed", value: "314" },
      { label: "Max epic size", value: "21 SP" },
      { label: "Confidence", value: "HIGH" },
    ],
    keyMetric: { label: "Data-backed estimation replacing gut-feel", value: "36 epics → Fibonacci" },
    learnings: [
      "Historical data is the best estimator — analyzing 36 real epics beats any estimation workshop. Data beats consensus",
      "Variance reveals risk — M-sized epics ranged 9–38 SP (4x spread). When variance is high, the T-shirt size is too coarse",
      "Maximum size rules prevent scope creep — a 21 SP cap forces decomposition. Large epics are harder to estimate, track, and deliver",
      "Anchor epics make estimation concrete — 'M = 13 SP, like the Dashboard Improvements epic' is far more actionable than abstract numbers",
      "Calibration is a recurring discipline — should be refreshed annually as team composition and codebase complexity evolve",
    ],
    tags: ["Estimation", "Capacity Planning", "Data Analysis"],
    status: "complete",
  },
  {
    id: 9,
    title: "Monte Carlo Capacity Forecasting",
    subtitle: "Probabilistic Delivery Planning",
    emoji: "🎲",
    challenge:
      "Three development teams needed quantified delivery forecasts for Q2 2026, but traditional velocity-based planning provided only single-point estimates. Management needed probability-based commitments — 'How confident are we?' — not 'We'll try.'",
    actions: [
      "Collected throughput data from 10–12 closed sprints per team, handling team renames and merges across predecessor boards",
      "Built Python Monte Carlo simulation (10,000 iterations per team) sampling historical throughput to generate probability distributions",
      "Created reusable forecast template with P50/P70/P85/P95 percentiles, ASCII histograms, and coefficient of variation per team",
      "Designed risk communication framework: color-coded confidence levels mapped to calendar dates and sprint counts",
    ],
    results: [
      { label: "Simulations", value: "10K × 3 teams" },
      { label: "Confidence levels", value: "P50–P95" },
      { label: "Framework", value: "Reusable" },
      { label: "Teams forecasted", value: "3" },
    ],
    keyMetric: { label: "Probabilistic commitments replacing 'we'll try'", value: "P85 recommended" },
    learnings: [
      "Single-point estimates are fiction — sprint velocity averages hide enormous variance. Monte Carlo captures this reality",
      "10,000 iterations is cheap, overconfidence is expensive — seconds of Python vs. weeks of missed expectations",
      "P85 is the stakeholder sweet spot — P50 is too risky (coin flip), P95 is too conservative (wasted capacity)",
      "Team reorganizations show up in throughput data — transition periods produce lower, more variable throughput",
      "Templates compound value — 1 hour to design, saves ~2 hours per team per quarter indefinitely",
    ],
    tags: ["Forecasting", "Monte Carlo", "Capacity Planning"],
    status: "complete",
  },
  {
    id: 10,
    title: "Configurable Feedback Prompt System",
    subtitle: "Architecture-Level Scope Management",
    emoji: "⚙️",
    challenge:
      "A new feedback popup request for OFCOn would replicate the existing hardcoded pattern — requiring backend enum, frontend enum, switch/case logic, and code deployment for every new survey. Should we build another one-off, or redesign the system?",
    actions: [
      "Audited the complete feedback flow and identified 4 hardcoded coupling points across frontend and backend",
      "Designed configurable FeedbackPromptConfig MongoDB entity with fields for component targeting, activation windows, market lists, and dismissal limits",
      "Split the epic into 2 parallel stories: platform capability (configurable system) and OFCOn activation (zero-code config only)",
      "Ensured backward compatibility — existing FSM popup continues working unchanged",
    ],
    results: [
      { label: "New survey effort", value: "1 sprint → 30min" },
      { label: "Dev involvement", value: "Zero" },
      { label: "Coupling points", value: "4 → 1" },
      { label: "Deploy risk", value: "Eliminated" },
    ],
    keyMetric: { label: "Future surveys become PM self-service", value: "~30 min each" },
    learnings: [
      "The second instance reveals the pattern — building the same thing twice signals it's time to abstract. The third, fourth, and fifth are nearly free",
      "PMs can design systems, not just request features — auditing the full call chain transforms requester into architect",
      "Parallel story decomposition accelerates delivery — platform + activation enables parallel work and decouples deadlines",
      "Configuration > code for business-owned decisions — survey timing and markets shouldn't require a software release",
      "Backward compatibility is non-negotiable — any redesign that breaks current functionality is dead on arrival",
    ],
    tags: ["Architecture", "Scope Management", "System Design"],
    status: "complete",
  },
  {
    id: 11,
    title: "Translation Service Independence",
    subtitle: "Platform Decoupling Architecture",
    emoji: "🔗",
    challenge:
      "The ONE Translation Service serves 74 markets and 14+ languages but was architecturally coupled to ONE Sales Workplace in 7 specific ways. With ONE facing potential decommission, the service needed to survive independently — with near-zero downtime tolerance.",
    actions: [
      "Mapped every coupling point: reverse proxy routing, TSClient proxy, callback dependencies, S3 bucket, ECR repository, K8s namespace, and backend consumers",
      "Designed 4-phase decoupling plan ordered by risk: internal coupling → frontend direct connection → backend consumer decoupling → infrastructure independence",
      "Specified 11 concrete tasks with target files, changes, rationale, and verification steps across 3 repositories",
      "Documented all environment variables needed for standalone operation in a deployment runbook",
    ],
    results: [
      { label: "Coupling points", value: "7" },
      { label: "Decoupling phases", value: "4" },
      { label: "Implementation tasks", value: "11" },
      { label: "Disruption risk", value: "Zero" },
    ],
    keyMetric: { label: "Service independence ensuring decommission resilience", value: "7 → 0 couplings" },
    learnings: [
      "Coupling is invisible until you map it — the service 'was already separate' (own repo, Docker, CI/CD) but 7 coupling points meant it couldn't actually run alone",
      "Phase by risk, not by complexity — starting with lowest-risk changes builds confidence before touching higher-risk items",
      "File-level specificity prevents ambiguity — 'decouple the callback' is vague; naming the exact file and method is actionable",
      "Standalone runbooks reveal hidden assumptions — documenting every env var surfaces assumptions obvious inside the platform but invisible outside",
      "Platform services outlive their parent applications — translation is a horizontal concern. Independence is the correct architecture, not a defensive measure",
    ],
    tags: ["Architecture", "Platform Strategy", "Decoupling"],
    status: "complete",
  },
  {
    id: 12,
    title: "Test Manager Agent",
    subtitle: "From Meeting Transcripts to Autonomous QA Workflow",
    emoji: "🤖",
    challenge:
      "ONE Sales Workplace had a well-functioning but entirely manual QA process dependent on weekly jourfix meetings. 22 meetings over 4 months with no structured format, inconsistent follow-up, and no automated tracking. Test results were being misreported — the agent initially reported 'all tests passed' when 100% had actually failed.",
    actions: [
      "Analyzed all 22 meeting transcripts (312KB, 2,735 lines) to extract interaction patterns, recurring topics, and decision-making flows",
      "Built a full Test Manager agent with 12 specialized skills: test planning, defect management, jourfix facilitation, release readiness, and more",
      "Discovered and fixed critical bug: agent reported test results based on Jira ticket status ('Closed') instead of actual Xray results — 100% failure rate was being reported as success",
      "Enhanced with automatic release date detection, T-7 day checklist activation, T-1 day go/no-go decision framework, and mandatory Xray workflow enforcement",
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
];
