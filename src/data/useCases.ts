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
    id: 15,
    title: "AI-Native Delivery",
    subtitle: "Redesigning How Teams Ship",
    emoji: "⚡",
    challenge:
      "When development teams adopted AI agents for execution, the old operating model became the constraint: Scrum ceremonies and story points were measuring effort, not flow — and teams started consuming the backlog faster than product could refill it. The question stopped being 'how do we go faster?' and became 'what does product management look like when execution is no longer the bottleneck?'",
    actions: [
      "Led the shift of the operating model rather than patching it: replaced sprint-based planning with flow-based work queues, and dropped story points in favour of lead and cycle time — forecasting on how work actually moves, not how it's estimated",
      "Introduced intent-level artifacts as the contract between product and execution — a written 'constitution' per initiative that both humans and AI agents work against, keeping human judgment at the decisions that matter",
      "Presented the new model and its results to senior leadership — making the case with delivery data, not enthusiasm for AI",
    ],
    results: [
      { label: "Delivery speed", value: "~72% faster" },
      { label: "Flow efficiency", value: "12.5% → 27.5%" },
      { label: "Peak idea-to-prod", value: "< 1 day" },
      { label: "Story points", value: "Retired" },
    ],
    keyMetric: { label: "Teams working AI-natively ship dramatically faster", value: "~72% faster" },
    learnings: [
      "When execution accelerates, product becomes the bottleneck — my job shifted from writing backlog to designing the system that feeds it",
      "Measure the operating model like a product: flow efficiency and lead time are its outcome metrics, ceremony compliance is not",
    ],
    tags: ["AI-Native", "Operating Model", "Leadership"],
    status: "in-progress",
  },
  {
    id: 16,
    title: "Running an AI Product",
    subtitle: "Making GenAI Quality Measurable",
    emoji: "🤖",
    challenge:
      "Took over an enterprise AI assistant with usage below expectations, quality that was only anecdotal, and dashboards that contradicted each other. You can't improve what you can't measure — and for a genAI product, 'it feels wrong sometimes' is not a backlog.",
    actions: [
      "Built a KPI framework and made it binding: every epic must link to a measurable outcome (dealer efficiency, ticket reduction, satisfaction, usage) — so prioritisation follows value, not the loudest opinion",
      "Turned raw user feedback into signal: categorised 357 feedback entries into problem types, converting thumbs-down data into concrete epics and action items",
      "Pushed a regression testing approach for AI answer quality — non-deterministic products need a quality loop, not just test cases",
    ],
    results: [
      { label: "Feedback categorised", value: "357 entries" },
      { label: "Epics without a KPI", value: "Zero" },
      { label: "Prioritisation basis", value: "KPI value" },
      { label: "Quality baseline", value: "Established" },
    ],
    keyMetric: { label: "A quality baseline honest enough to manage against", value: "Every epic → KPI" },
    learnings: [
      "You can't run an AI product on anecdotes — thumbs-down data is a backlog waiting to be categorised",
      "GenAI products need classic PM discipline plus one new loop: continuous quality measurement of non-deterministic answers",
    ],
    tags: ["AI Product", "KPIs", "Product Quality"],
    status: "in-progress",
  },
  {
    id: 17,
    title: "My AI Toolkit",
    subtitle: "From Producing to Validating",
    emoji: "🧰",
    challenge:
      "Running three products in parallel meant my own throughput became the constraint. I'm a Product Manager, not a developer — the goal was never to write code, but to stop spending days producing artifacts that AI can draft, so my time goes where judgment actually matters.",
    actions: [
      "Built a refinement pipeline: 8–10 lines of raw meeting notes become fully refined epics with user stories and test cases — I validate that acceptance criteria reflect real behaviour instead of writing everything from scratch",
      "Automated the repetitive parts of the role: built a test management agent after losing an external provider, and published two reusable skills to the company's internal marketplace",
      "Made AI adoption a team sport: founded an informal 'coffee br(AI)k' series where product managers share how they actually use AI day-to-day",
    ],
    results: [
      { label: "Roadmap reorganisation", value: "1 week → 45 min" },
      { label: "Capacity analysis", value: "2 weeks → 2 hrs" },
      { label: "Skills shared internally", value: "2" },
      { label: "Products run in parallel", value: "3" },
    ],
    keyMetric: { label: "Time moved from producing artifacts to validating decisions", value: "3 products in parallel" },
    learnings: [
      "AI doesn't remove the need for expertise — it exposes it. Vague context in, generic output out",
      "My role shifted from producing to validating: AI drafts the analysis, I challenge it with domain knowledge",
    ],
    tags: ["AI Tooling", "Productivity", "Enablement"],
    status: "complete",
  },
  {
    id: 2,
    title: "Notification Engagement Deep Dive",
    subtitle: "Debunking a Vanity Metric",
    emoji: "🔔",
    challenge:
      "A senior stakeholder visited dealerships, heard agents weren't seeing notifications, and came back with a solution: make the notification icon bigger, animated, a different colour — more visible. Before touching the UI, I asked a different question: were agents actually not receiving notifications, or was something else going on? Initial analysis surfaced a 91% read rate — a number that didn't survive scrutiny. Deeper investigation of 73 notifications over 6 months revealed the real picture: 18.5 actual readers per notification across 1,500+ active users, while agents had quietly moved to informal channels outside the platform. The icon wasn't the problem.",
    actions: [
      "User interviews confirmed the pattern before the data did — agents had moved to informal channels outside the platform to stay informed. Triangulated these findings with 6 months of notification data and surfaced 5 root causes including missing targeting and same-day expiry.",
      "Quantified that 42% of underperformance was fixable with process changes alone",
      "Designed a 4-pillar improvement strategy projecting +116% reach improvement",
      "Recognised the root cause persisted beyond process fixes — currently designing Dealer Connect, a community layer that keeps peer knowledge inside the platform. And the agentic AI assistant this analysis pointed toward is now real: the Retailer Companion, a product I lead today.",
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
      "When users build workarounds, the data understates the problem — informal channels replacing official ones is a signal no dashboard will show you",
    ],
    tags: ["Root Cause Analysis", "Engagement", "Strategy"],
    status: "in-progress",
  },
  {
    id: 13,
    title: "Customer Context",
    subtitle: "Navigating Cross-Product Adoption in a Complex Platform",
    emoji: "👤",
    challenge:
      "A survey of 700+ dealership agents across Italy, Poland, and Sweden surfaced a consistent pattern: users were struggling to reuse customer data from the CRM across the sales journey, forcing repeated lookups and manual re-entry at every step. The pain was real — but solving it required coordinating adoption across multiple independent product teams, each with their own roadmaps and priorities.",
    actions: [
      "Triangulated survey data with UX research and business stakeholder input to define the problem precisely — customer data needed to be selected once in ONE and flow to all integrated products automatically.",
      "Analysed 4 architectural options (dashboard widget, header, cross-app floater, context propagation via the Retailer Companion (agentic AI layer)) with a structured trade-off matrix covering UX impact, technical complexity, adoption risk, and delivery speed.",
      "Secured management buy-in for the dashboard widget as MVP — the option with the lowest adoption friction and fastest path to value.",
      "Hit the organisational constraint: other products cited full roadmaps and couldn't commit. Currently pivoting to a back-end-first approach — secure the API and RetailCRM data exposure first, so product adoption in phase 1 requires no UI work at all.",
    ],
    results: [
      { label: "Survey responses", value: "700+" },
      { label: "Markets researched", value: "3" },
      { label: "Options analysed", value: "4" },
      { label: "Management buy-in", value: "Secured" },
    ],
    keyMetric: { label: "Survey scale that surfaced CRM re-entry as a consistent pain pattern", value: "3 markets · 700+ responses" },
    learnings: [
      "Organisational capacity is a product constraint as real as any technical blocker — map adoption dependencies before committing to an approach",
      "Back-end first reduces adoption friction — if you provide the data layer for free, the conversation shifts from 'can you build this?' to 'do you want this data?'",
      "Multi-source validation (survey + UX + business) builds a stronger case than any single input — it becomes harder to dismiss",
    ],
    tags: ["Discovery", "Cross-Product Strategy", "Stakeholder Alignment", "Platform"],
    status: "in-progress",
  },
  {
    id: 14,
    title: "Two Failed Deployments",
    subtitle: "What I Learned From Shipping Something Twice and Watching It Fail",
    emoji: "🛑",
    challenge:
      "As PM, I was accountable when an email notification feature failed in production — not once, but twice. Both times, we had planned deployments and ran testing rounds. Both times, problems only appeared after go-live: mass email blasts the first time, silent failures the second. The root cause was the same: integration scenarios with external apps that we couldn't fully control or test end-to-end, only detected once real traffic hit production. After the second failure, a key business stakeholder escalated and demanded the feature be re-enabled anyway.",
    actions: [
      "Root-caused both failures: integration testing with partner apps had gaps we couldn't close from our side alone — we had coordinated, but coordination isn't the same as verified coverage. This was the constraint I hadn't built a hard gate around.",
      "Changed the go/no-go process: for any feature with external integration dependencies, test planning now includes documented happy path and edge case scenarios, sign-off from all involved parties, and a dedicated pre-prod round designed to replicate production behaviour as closely as possible.",
      "Held the position on re-enabling: documented 6 active technical risks (1,000 sequential API calls, no retry or dead-letter queue, silent failure mode, zero load tests) and showed the data — 0 automated reminders used in 6 months, the only reminder sent had incorrect targeting. The participation gap was targeting and timing, not delivery channel.",
      "Proposed 4 immediate fixes that didn't require re-enabling email: correcting role assignments in underperforming markets, activating reminders with proper targeting, optimising send windows, shortening survey visibility to create urgency. Currently running a structured joint testing round before any production decision on email.",
    ],
    results: [
      { label: "Failed prod deployments", value: "2" },
      { label: "Root cause", value: "Integration gaps" },
      { label: "Technical risks documented", value: "6" },
      { label: "Immediate fixes identified", value: "4" },
    ],
    keyMetric: { label: "Two failures produced one lasting process change", value: "Hard integration gate" },
    learnings: [
      "Coordination with external teams is not the same as verified test coverage — if you can't confirm it, it's not a gate",
      "Owning two failed deployments meant I had the credibility and the data to hold the position when re-enablement was pushed. Accountability isn't just about what goes right.",
      "Diagnose before you prescribe — the stakeholder was solving for participation, not delivery. The data showed they were different problems.",
    ],
    tags: ["Product Judgment", "Stakeholder Management", "Risk Management", "Failure & Learning"],
    status: "in-progress",
  },
  {
    id: 3,
    title: "Translation API Migration",
    subtitle: "Finding a Better Path Under Pressure",
    emoji: "🌐",
    challenge:
      "Translators across 30+ markets had flagged a recurring pain: poorly contextualised strings, irrelevant content for specific markets, and governance gaps around who could change what. When the critical translation API was then announced for retirement and the proposed replacement hit infrastructure blockers, the migration became an opportunity to address both the technical constraint and the user pain — without adding new costs.",
    actions: [
      "Assessed 3 candidate APIs against technical requirements — and against the user pain already documented in research. Found 3 BMW teams already using a free internal LLM alternative that resolved the infrastructure blocker and, on closer inspection, also addressed the governance and contextualisation gaps users had flagged.",
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
      "When technical constraints force exploration, bring user needs into the evaluation — what looks like a forced choice can turn into a better solution on every dimension",
    ],
    tags: ["Technical Feasibility", "AI/LLM", "Cost Optimization", "User Research"],
    status: "complete",
  },
  {
    id: 5,
    title: "Product Due Diligence",
    subtitle: "Building Context Fast on a New Product",
    emoji: "📋",
    challenge:
      "Took ownership of a new product with no prior context. Needed to build a realistic view of capacity, backlog health, and delivery risk — fast — and make it digestible for executives who needed themes, not ticket lists.",
    actions: [
      "Created comprehensive due diligence from scratch across 6 iterations — covering backlog, velocity, risks, and capacity",
      "Uncovered a hidden ~25 SP/quarter defect tax that was inflating every roadmap commitment",
      "Clustered 40 open epics into 8 delivery themes with priority levels — identifying that infrastructure & security consumed 60%+ of capacity, and framing the trade-off conversation for annual planning",
      "Designed phased self-service initiative with concrete quarterly milestones (Q2–Q4)",
    ],
    results: [
      { label: "Defect tax found", value: "~25 SP/qtr" },
      { label: "Epics analyzed", value: "103" },
      { label: "Risks identified", value: "16" },
      { label: "Epics → themes", value: "40 → 8" },
    ],
    keyMetric: { label: "Realistic capacity model replacing inflated plans", value: "~25 SP/qtr hidden cost" },
    learnings: [
      "Defect tax is invisible until you quantify it — roadmaps assume zero defects by default",
      "Due diligence is the fastest way to build context and earn credibility on a new product",
      "Clustering enables trade-off conversations — a flat list of 40 epics paralyzes decision-making",
    ],
    tags: ["Due Diligence", "Capacity Planning", "Executive Communication"],
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
      "Proved the capability immediately: the first campaign collected 1,352 responses across 8 markets — 10x baseline engagement — and fed a go/no-go recommendation for the feature it measured",
    ],
    results: [
      { label: "New survey effort", value: "1 sprint → 30min" },
      { label: "Dev involvement", value: "Zero" },
      { label: "First campaign", value: "1,352 responses" },
      { label: "vs. baseline", value: "10x" },
    ],
    keyMetric: { label: "Future surveys became PM self-service", value: "~30 min each" },
    learnings: [
      "The second instance reveals the pattern — building the same thing twice means it's time to abstract",
      "Configuration beats code for business-owned decisions — survey timing shouldn't require a release",
      "Targeted surveys at feature launch generate 10x normal engagement — timing is everything",
    ],
    tags: ["Architecture", "Scope Management", "System Design"],
    status: "complete",
  },
];
