# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website showcasing product management and consulting work across automotive, telecommunications, and public health sectors. Built with **Vite**, **React 18**, **TypeScript**, and **shadcn-ui**, with full dark mode support and animation layers.

The project is bootstrapped from Lovable (a web app builder) but can be developed locally with standard Node.js tooling.

## Development Commands

```bash
npm run dev          # Start Vite dev server (hot reload, http://localhost:8080)
npm run build        # Production build (minified, optimized)
npm run build:dev    # Development mode build (useful for debugging prod issues)
npm run lint         # Run ESLint on all files
npm run test         # Run all tests once with Vitest
npm run test:watch   # Watch mode for tests during development
npm run preview      # Preview production build locally
```

## Architecture & Project Structure

### Pages & Routing
The app uses **React Router v6** with these key pages:
- `/` — **Index** (home): Displays hero section, metrics strip, products section, GitHub section, AI use cases, and footer
- `/admin` — **Admin**: (implementation details context-dependent)
- `/*` — **NotFound**: 404 page

**Where to find routing**: `src/App.tsx` sets up `<BrowserRouter>`, `<Routes>`, and page definitions.

### Components Organization

**`src/components/`**
- **Sections** (`sections/`): Full-page sections composing the Index page
  - `HeroSection.tsx` — Hero with call-to-action
  - `MetricsStrip.tsx` — Key metrics display
  - `ProductsSection.tsx` — Portfolio showcase (iterates `products` data)
  - `GitHubSection.tsx` — GitHub projects display (uses `githubProjects` data)
  - `AiSection.tsx` — AI use cases (uses `useCases` data)
  - `FooterSection.tsx` — Footer with links
- **UI** (`ui/`): Full shadcn-ui component library (button, card, dialog, form, etc.)
- **Core Components**:
  - `Navbar.tsx` — Navigation header with theme toggle
  - `NavLink.tsx` — Styled navigation link
  - `ScrollReveal.tsx` — Scroll animation wrapper
  - `DecorativeElements.tsx` — Background decorative SVG/visual elements

### Data Layer
All portfolio and project data is externalized:
- `src/data/products.ts` — Product/case study definitions (8 items with role, description, impact, highlights)
- `src/data/githubProjects.ts` — GitHub projects showcase data
- `src/data/useCases.ts` — AI use case examples

**Key interface** in `products.ts`:
```typescript
interface Product {
  id: string;
  name: string;
  role: string;
  description: string;
  detailedDescription: string;
  sector: string;
  country: string;
  platform: string;
  type: "B2B" | "B2C" | "B2B & B2C";
  highlights: string[];
  impact: string[];
  image: string;
  link: string;
}
```

### Styling & Theming
- **Tailwind CSS** with custom config in `tailwind.config.js`
- **Dark mode**: Uses `next-themes` for theme persistence
- **Animations**: Framer Motion for motion components
- **UI Primitives**: shadcn-ui components (built on Radix UI)
- **CSS module**: `src/index.css` (imports Tailwind directives)

### External Integrations
- **React Query** (`@tanstack/react-query`): Configured as `queryClient` in `App.tsx` for data fetching
- **Toast notifications**: Dual providers (`Toaster` from react-hot-toast + `Sonner`)
- **Lovable tagger**: Active in development mode via Vite plugin (for Lovable integration)

## Import Aliases

Use the `@` alias pointing to `src/`:
```typescript
import Button from "@/components/ui/button";
import { products } from "@/data/products";
```

This is configured in `vite.config.ts` and `tsconfig.json`.

## Testing

Tests are in `src/test/`:
- **`setup.ts`**: Vitest configuration and test utilities
- **`example.test.ts`**: Example test file

Run single test file:
```bash
npm run test -- src/test/example.test.ts
```

Watch a specific file:
```bash
npm run test:watch -- src/test/example.test.ts
```

## GitHub Workflows

Two Claude Code workflows are configured:

1. **claude.yml** — Interactive Claude Code assistant triggered by `@claude` mentions on issues, PRs, and PR comments
2. **claude-code-review.yml** — Automatic PR code review on every PR opening/update

These allow in-repo collaboration with Claude Code via GitHub. The workflows use the `claude-code-action` v1.

## Key Conventions

- **File naming**: PascalCase for components, camelCase for utils/hooks
- **Component exports**: Default exports (not named)
- **Path aliases**: Always use `@/` prefix for src imports
- **Tailwind**: No hardcoded colors; use Tailwind tokens and `cn()` utility for class merging
- **React Router**: All pages exported from `src/pages/` and referenced in `App.tsx`

## Development Notes

- The app runs on port **8080** by default (configured in vite.config.ts)
- HMR overlay is disabled (better UX for localhost development)
- The `lovable-tagger` plugin adds metadata to components in development mode—don't remove it
- All shadcn-ui components are pre-installed; new UI needs can be satisfied from the existing library before adding deps
- Dark mode is persistent per user session (via next-themes)

## Before You Edit

1. **Styling changes**: Modify component files directly or extend Tailwind config—avoid inline styles
2. **Adding new products**: Add entries to `src/data/products.ts` with the `Product` interface shape
3. **New sections**: Create in `src/components/sections/`, export from `Index.tsx` page
4. **New pages**: Create in `src/pages/`, add route to `src/App.tsx`
5. **Type safety**: This is a TypeScript project—keep strict mode enabled (`tsconfig.json`)

## Common Tasks

- **Add a new product case study**: Edit `src/data/products.ts` and maintain the `Product` interface
- **Adjust colors/spacing**: Modify Tailwind config or use inline Tailwind classes
- **Test a component**: Add to `src/test/` with `.test.ts` or `.test.tsx` extension
- **Add a new route**: Create page in `src/pages/`, add `<Route>` in `src/App.tsx`
