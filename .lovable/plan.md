

## Visual Revamp: Soft & Modern Theme

The current design uses a warm coral/terracotta palette with serif headings, floating emoji decorations, and a cream background — a "chaotic aesthetic" style. We'll replace it with a clean, soft, modern look inspired by Notion/Stripe/Apple.

### Design Direction

- **Palette**: Cool-toned with soft lavender/indigo primary, light gray background, subtle blue-gray accents
- **Typography**: Clean sans-serif throughout (Inter for everything, drop the serif headings)
- **Decorations**: Replace emoji stickers with subtle gradient blobs or soft geometric shapes
- **Cards**: Soft shadows, generous padding, gentle hover states with subtle scale
- **Navbar**: Frosted glass with softer rounding

### Files to Change

**1. `src/index.css`** — New color system:
- Background: near-white `#FAFBFC`
- Primary: soft indigo `~230 70% 55%`
- Accents: lavender, soft teal
- Remove coral/terracotta/sage custom vars
- Remove serif font override on headings

**2. `tailwind.config.ts`** — Update custom colors and remove serif font family. Add soft shadow utilities. Update animations to be gentler (slower, smaller movement).

**3. `src/components/DecorativeElements.tsx`** — Replace emoji-based decorations with soft gradient blobs (CSS-only circles with blur and low opacity). Fewer elements, more ambient.

**4. `src/pages/Index.tsx`** — Remove inline emoji stickers. Cleaner hero with gradient text accent. Softer CTA buttons with rounded-xl and subtle shadows.

**5. `src/components/Navbar.tsx`** — Lighter backdrop blur, pill-shaped active indicator with softer colors. Remove the "✦" from the logo text.

**6. `src/pages/Products.tsx`** — Softer card styling with `shadow-sm hover:shadow-md`, lighter borders.

**7. `src/pages/AiUseCases.tsx`** — Update bento grid cards to use the new palette. Softer status indicators. Modal updated with new accent colors.

### Summary of Visual Changes

| Element | Current | New |
|---------|---------|-----|
| Background | Warm cream | Cool near-white |
| Primary | Coral/orange | Soft indigo |
| Headings | Serif (Times) | Sans-serif (Inter) |
| Decorations | Floating emojis | Gradient blobs |
| Cards | Warm borders | Soft shadows |
| Overall feel | Chaotic/playful | Clean/professional |

