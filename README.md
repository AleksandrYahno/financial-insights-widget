# Financial Insights Widget

Right-rail financial cards (Ratings Summary, Factor Grades, Quant Ranking) with premium gating. React 19, Vite 7, TypeScript, React Query, Tailwind, i18next.

## Prerequisites

Node.js 20+

## Setup

```bash
npm ci
npm run dev
```

Open http://localhost:5173. Build: `npm run build`. Preview: `npm run preview`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Serve `dist` |
| `npm run lint` | ESLint (max-warnings 0) |
| `npm run test` | Unit tests (Vitest) |
| `npm run e2e` | E2E: start dev on 5174 + Cypress |
| `npm run e2e:open` | Cypress UI (run `npm run dev:e2e` in another terminal first) |

## Structure

- **`src/pages/homePage`** — Main content + right rail (two-column layout).
- **`src/features/financialInsightsRail`** — Rail: slot order, visibility by premium, slot VMs (skeleton / error / card).
- **`src/components`** — Dumb cards (Quant Ranking, Ratings Summary, Factor Grades), CardSkeleton (variant heights), CardSlotError.
- **`src/api`** — HTTP client, hooks (useUser, useRatingsSummary, useFactorGrades*, useQuantRanking). Base URL in `apiConfig.ts`; override via `VITE_API_BASE_URL`.

Non-premium users see only the Quant Ranking card. Skeleton height matches each card type to avoid layout shift.

## Architecture

```mermaid
flowchart TB
  subgraph Shell["Shell"]
    App[App]
    Providers[QueryProvider, Router, i18n]
  end
  subgraph Routing["Routing & pages"]
    Router[React Router]
    HomePage[HomePage]
  end
  subgraph Features["Features"]
    Rail[Financial Insights Rail]
  end
  subgraph Presentation["Presentation"]
    VM[Slot VMs]
    Config[Visibility config]
  end
  subgraph UI["UI"]
    Cards[Dumb cards]
    Skeleton[Skeleton / Error]
  end
  subgraph Data["Data"]
    Hooks[API hooks]
    HTTP[HTTP client]
  end
  App --> Providers
  Providers --> Router
  Router --> HomePage
  HomePage --> Rail
  Rail --> Config
  Rail --> VM
  VM --> Hooks
  VM --> Cards
  VM --> Skeleton
  Hooks --> HTTP
```

## Tests

- **Unit:** 46 tests (Vitest + RTL). Run: `npm run test`.
- **E2E:** One Cypress scenario (premium vs non‑premium → slot visibility). First time: `npx cypress install`. Run: `npm run e2e`.

## CI

`.github/workflows/ci.yml` — on push/PR to `main` or `master`: lint, test, build, Cypress install, e2e.
