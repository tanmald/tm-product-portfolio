

## Simplify Skills Bento Grid — Clean Tiling, No Gradients

### Problem
The current CSS grid auto-placement with mixed card sizes leaves gaps in the middle of the grid. The gradient backgrounds add visual noise.

### Solution
Use **explicit grid placement** (grid-row/grid-column) so cards tile perfectly into a rectangle, with any empty space only at the bottom. Remove gradients; use flat, minimal card styling.

### Layout (3-column grid, explicit placement)

```text
Row 1-2: [AI-Augmented (2×2)     ] [Stakeholder (1×2)]
Row 3-4: [Strategic (2×2)        ] [Crisis (1×2)     ]
Row 5-6: [Quant (1×2)] [AI Str (1×2)] [Cross-Cult (1×1)]
                                       [Tech Fluency(1×1)]
Row 7:   [Entrepreneurial (1×1)] 
```

Top 6 rows tile perfectly. Only gap: bottom-right of row 7.

### File changes

#### `src/data/skills.ts`
- Remove `color` field from interface and data
- Keep `size` (still drives card dimensions)
- Add a `gridPosition` object (`{ row, col }`) to each skill for explicit placement

#### `src/components/sections/SkillsSection.tsx`
- Use `grid-cols-3` with `grid-template-rows` set to enough rows
- Place each card with explicit `gridRow` / `gridColumn` via style prop
- **Remove all gradient backgrounds** — use flat `bg-card` with simple `border border-border`
- **Remove tier-based color styling** on borders
- Keep metric gradient text (subtle, looks good)
- Keep: icons, badges, chips, ScrollReveal, hover lift
- Mobile: single column, no explicit placement (all cards stack naturally)

