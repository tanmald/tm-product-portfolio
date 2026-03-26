

## Skills Inventory: Bento Grid — Reframed for AI-Native PM

### The Problem with Current Sizing
The previous plan carried over the tier structure from the original document, which gave equal weight to operational/PO skills (Agile & Delivery, Sprint velocity) and strategic PM skills. For an AI-native PM portfolio, the hierarchy should reflect what hiring managers value in a **strategic Product Manager**: vision, data-driven decision-making, AI leverage, and stakeholder influence — not sprint ceremonies or backlog grooming.

### New Skill Hierarchy (by PM importance, not original tiers)

**Large cards** (hero-level, these define you):
1. **AI-Augmented Product Work** — This is THE differentiator. An AI-native PM who builds tools, automates analysis, and uses AI as a force multiplier. Biggest card.
2. **Strategic Analysis & Due Diligence** — Core PM: taking ownership of ambiguous products, building capacity models, uncovering hidden risks with data.

**Medium cards** (strong PM signals):
3. **Stakeholder Management** — PM, not PO. Influencing execs across geographies, managing politics, aligning business and tech.
4. **Crisis Product Leadership** — Stepping into chaos, stabilizing, exiting cleanly. Shows senior PM judgment.
5. **Quantitative Rigor** — Data-driven decisions, not vibes. Every PM job description asks for this.
6. **AI Product Strategy** — Forward-looking: where you're growing into (AI strategy, not just AI tooling).

**Small cards** (supporting, not leading):
7. **Cross-Cultural Delivery** — 5+ countries, 3 languages. Important context but not a primary PM skill.
8. **Technical Fluency** — Enables credibility with engineers, but a PM isn't hired for knowing AWS.
9. **Entrepreneurial Building** — Side projects show initiative but are secondary.

**Removed / merged**:
- **"Agile & Delivery Excellence"** — This is PO territory (sprint velocity, Scrum ceremonies). Merge the relevant bits into other skills or drop it. A PM doesn't lead with "I run good sprints."
- **"Mentoring & Team Building"** — Fold into Crisis Product Leadership evidence (mentored replacement PO).
- **"Content & Personal Brand"** — Drop from skills section. It's not a PM skill a hiring manager cares about. Could live elsewhere (footer, about section).

### Files to Change

#### 1. `src/data/skills.ts`
- Flatten the tier structure into a single array of skills
- New interface: `Skill` with `name`, `evidence`, `size`, `metric?`, `relatedProductIds?`, `relatedCaseIds?`, `tier` (kept as badge label only)
- 9 skills total, sized as above
- Rewrite evidence to be outcome-first and concise (1 sentence)
- Add `metric` for the large/medium cards (e.g. "2 weeks → 2 hours", "25K users across 30+ markets")
- Map `relatedProductIds` and `relatedCaseIds` to connect to portfolio items

#### 2. `src/components/sections/SkillsSection.tsx`
- Bento grid layout (4-column on desktop, 1-column mobile)
- Large: `col-span-2 row-span-2`, Medium: `col-span-1 row-span-2` or `col-span-2 row-span-1`, Small: `col-span-1 row-span-1`
- Each card: skill name, tier badge, metric (large text), evidence (small), linked project/case chips
- Clicking a chip scrolls to the relevant section
- Gradient border by tier, hover lift effect
- Keep ScrollReveal

#### Layout sketch
```text
┌──────────────────────┬────────────┐
│  AI-Augmented        │ Stakeholder│
│  Product Work        │ Management │
│  "2wks → 2hrs"       │ (medium)   │
│  (LARGE)             │            │
│  [Case 12] [TNPS]   ├────────────┤
│                      │ Quant.     │
│                      │ Rigor (med)│
├───────────┬──────────┼────────────┤
│ Strategic │ Crisis   │ AI Product │
│ Analysis  │ Product  │ Strategy   │
│ (LARGE)   │ Leader.  │ (medium)   │
│ "103 epic"│ (medium) ├────────────┤
│ [TNPS]    │ [eSign]  │Cross-Cult. │
│ [Case 5]  │         │ (small)    │
├───────────┴──────────┼────────────┤
│ Tech Fluency (small) │ Entrepren. │
│                      │ (small)    │
└──────────────────────┴────────────┘
```

### What stays the same
- Section position and `id="skills"`
- ScrollReveal animations
- Overall design language

