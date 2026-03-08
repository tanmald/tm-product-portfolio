

## Fix: Bento Cards Too Much Empty Space

The root cause is `auto-rows-[220px]` — every row is 220px tall, but the small cards (1-span) don't have enough content to fill that height. Two changes fix this:

### 1. Reduce row height and adjust card content density

**`src/components/sections/AiSection.tsx`**:
- Reduce `auto-rows-[220px]` to `auto-rows-[180px]` — tighter grid
- Show subtitle on all tall cards (index 0 and 1), not just index 0
- Show tags on all cards (not just first two) to fill vertical space
- Add a short challenge preview (1-2 lines) on the large card (index 0) to use the 2x2 space
- Add the metric label (not just value) on larger cards
- Reduce emoji size slightly on small cards (`text-2xl` instead of `text-3xl`)
- Tighter padding on small cards (`p-5` instead of `p-6`)

This approach fills the cards with useful content rather than just shrinking them, making them more informative at a glance while also reducing the row height slightly.

