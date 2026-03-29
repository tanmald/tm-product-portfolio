export interface Skill {
  name: string;
  evidence: string;
  metric?: string;
  tier: "Differentiating" | "Strong" | "Growth";
}

export const skills: Skill[] = [
  // Differentiating Skills
  {
    name: "Strategic Analysis & Due Diligence",
    evidence:
      "I get up to speed fast on new products — surfacing hidden costs, capacity gaps, and risks that weren't visible before. I turn ambiguity into structured scenarios that give executives what they need to decide.",
    metric: "Hidden risks surfaced fast",
    tier: "Differentiating",
  },
  {
    name: "Complex Transition Management",
    evidence:
      "I take ownership of high-stakes, politically sensitive transitions where ambiguity is high and the cost of getting it wrong is real. I give executives the clarity they need to make confident decisions.",
    tier: "Differentiating",
  },
  {
    name: "Crisis Product Leadership",
    evidence:
      "I step into broken situations — dysfunctional teams, unclear ownership, stalled delivery — and leave them stable, with the right people in place and momentum restored.",
    tier: "Differentiating",
  },
  {
    name: "AI-Augmented Product Work",
    evidence:
      "I consistently find ways to do in hours what used to take weeks. I've influenced how product teams approach AI — from individual workflows to CTO-level conversations on real use cases.",
    metric: "2 weeks → 2 hours",
    tier: "Differentiating",
  },
  {
    name: "Quantitative Rigor",
    evidence: "I never ship a decision without numbers behind it. I've repeatedly surfaced what others missed by insisting on measuring the right things — not just what's easy to count.",
    tier: "Differentiating",
  },

  // Strong PM Fundamentals
  {
    name: "Stakeholder Management",
    evidence:
      "I earn trust across very different contexts — corporate HQ, government clients, distributed engineering teams. I navigate organisational politics without losing momentum.",
    tier: "Strong",
  },
  {
    name: "Agile & Delivery Excellence",
    evidence:
      "I keep delivery honest — I call out what won't fit, flag risks early, and hold teams to commitments that were actually made, not the ones that felt good in planning.",
    tier: "Strong",
  },
  {
    name: "Technical Fluency",
    evidence:
      "I know the stack well enough to spot when a solution is overcomplicated, ask the right questions in architecture reviews, and write specs that engineers don't have to reinterpret.",
    tier: "Strong",
  },
  {
    name: "Mentoring & Team Building",
    evidence:
      "I make the people around me better — deliberately. I've coached consultants into stronger practitioners and left teams with more capability than I found.",
    tier: "Strong",
  },
  {
    name: "Cross-Cultural Delivery",
    evidence:
      "I've shipped real products across 6 countries without ever using cultural difference as an excuse for why something didn't work.",
    metric: "6 countries",
    tier: "Strong",
  },

  // Growth Edge
  {
    name: "AI Product Strategy",
    evidence:
      "I'm actively building the muscle to shape AI product strategy — not just use AI as a tool, but understand where it creates genuine product value vs. where it's noise.",
    tier: "Growth",
  },
];
