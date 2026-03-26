

## Rewrite Portfolio Content: High-Level, Outcome-Focused, AI-Leveraged

### Problem
The current content reads like detailed process documentation — step-by-step actions, internal tool names, sprint points, section counts. A hiring manager skims for 10 seconds. They want: **what was the problem, what was the outcome, how big was the impact, and what makes you different (AI leverage).**

### Approach
Rewrite all content in both data files with this lens:
- **Descriptions**: 1-2 sentences, outcome-first, no internal jargon
- **Highlights**: 3 max, framed as high-level capabilities demonstrated (not tasks performed)
- **Impact**: Lead with the biggest number, keep it punchy
- **Challenge**: 2 sentences max — the tension, not the backstory
- **Actions**: Reframe as strategic moves, not task lists
- **Learnings**: Cut to 2-3 max, make them transferable PM principles
- **AI angle**: Where AI/Copilot was used, call it out explicitly as a differentiator

### Files to change

#### 1. `src/data/products.ts` — Rewrite all 8 products
For each product, rewrite:
- `description` — outcome-first, 1 sentence, biggest number upfront
- `detailedDescription` — 2-3 sentences, strategic narrative
- `highlights` — 3 items max, capability-framed ("Led X across Y" not "Created document with Z sections")
- `impact` — 3 items max, numbers first, no filler

Examples of the shift:
- **Before (TNPS)**: "Created a 14-section due diligence document from scratch across 6 iterations (v1–v1.6)"
- **After**: "Took ownership of a new product, built a realistic capacity model, and uncovered a hidden 25 SP/quarter defect tax that was inflating every roadmap commitment"
- **Before (Retailer Hub)**: "Authored Deep Dive with 9 sections covering architecture, capacity, risks..."
- **After**: "Owned a politically sensitive product transition across 2 continents — quantified a 25-60% capacity gap and delivered 3 transition scenarios to de-risk the decision"

#### 2. `src/data/useCases.ts` — Rewrite all 12 case studies
For each case:
- `challenge` — 1-2 sentences, the tension/stakes
- `actions` — 3 items max, strategic framing, call out AI/Copilot usage where applicable
- `results` — keep 4 metrics but make them punchier
- `learnings` — cut to 2-3 max, make them PM principles a hiring manager would nod at
- `keyMetric` — ensure the value is immediately impressive

Key rewrites:
- Remove internal BMW jargon (DEACH SAGAs, FSM_STARTING_PHASE_POPUP, WP3 format, FG-861)
- Replace "Analyzed X items" with "Found Y insight that led to Z outcome"
- Where Copilot/AI was used as a tool, add it: "Used AI to analyze 22 meeting transcripts" instead of just "Analyzed 22 meeting transcripts"

#### 3. `src/components/sections/AiSection.tsx` — Update section header
- Change subtitle from "Real product management initiatives demonstrating data-driven decisions..." to something snappier like "How I use data, AI, and structured thinking to drive product outcomes."

#### 4. `src/components/sections/ProductsSection.tsx` — Update section header
- Tighten the description copy to match the new tone

### What stays the same
- All component structure, layout, modals, scroll behavior
- The `Product` and `UseCase` interfaces
- The editorial text-first design
- The TNPS ↔ Case 5 link

