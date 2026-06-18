# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server on http://localhost:3000
npm run build        # Production build (client + SSR)
npm run preview      # Preview production build
npm run generate-routes  # Regenerate TanStack Router route tree
npm run test         # Run Vitest unit tests
```

## Architecture

**Framework:** TanStack Start (React 19, Vite 8, SSR) with file-based routing via `@tanstack/react-router`.

**Routing:** Routes live in `src/routes/`. File names map directly to URLs. `__root.tsx` is the shell (HTML, head tags, CSS injection). The route tree is auto-generated into `src/routeTree.gen.ts` — never edit that file manually, run `npm run generate-routes` instead.

**Styling:** Tailwind CSS v4 via `@tailwindcss/vite`. The CSS entry point is `src/styles.css` which imports Tailwind and defines `@theme` variables. Custom font tokens:
- `font-mabry` → Space Grotesk (Google Fonts, approximates Mabry Pro)
- `font-helvetica` → Helvetica Neue system stack

> **Note:** The design uses Mabry Pro, a commercial font. Space Grotesk is used as a substitute. Replace by adding the actual Mabry Pro `@font-face` declarations in `src/styles.css` and updating `--font-mabry`.

**Path alias:** `#/*` resolves to `src/*` (configured in `package.json` `imports` and `tsconfig.json`).

**Components:** Landing page sections live in `src/components/`. Each section is a standalone exported function:

| File | Section |
|---|---|
| `Navbar.tsx` | Sticky top nav |
| `Hero.tsx` | Dark hero with headline + image |
| `Benefits.tsx` | 3-column icon benefits |
| `FeaturesSection.tsx` | Alternating image/text rows |
| `StatsSection.tsx` | Progress bar stats |
| `BentoSection.tsx` | Orange + teal bento cards |
| `WorkflowSection.tsx` | Input → magic → output layout |
| `FeatureCards.tsx` | 3 white feature cards |
| `ForCreativeTeams.tsx` | 3-column trust signals |
| `CTASection.tsx` | Yellow email capture banner |
| `Footer.tsx` | Dark footer with link columns |

**Assets:** All Figma-exported images are in `public/assets/`. Referenced as `/assets/<filename>.png` from components.

**Deployment:** `vercel.json` is configured for Vite framework. Deploy with `vercel --prod` from the project root.
