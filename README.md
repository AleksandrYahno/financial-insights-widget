# Financial Insights Widget

Right-rail financial cards widget (React 19, Vite 7, TypeScript). Mock API, React Query, three cards (Ratings Summary, Factor Grades, Quant Ranking), premium gating (non-premium sees only Quant Ranking). i18next (English). Rail + slot VMs + dumb cards + skeleton implemented.

---

## Tech stack

- **React 19** + **TypeScript**
- **Vite 7** (build, dev server)
- **React Router 7** (routing, lazy routes)
- **TanStack Query (React Query)** (data layer; QueryProvider inside AppMainProvider)
- **Tailwind CSS 3** (styling)
- **i18next** + **react-i18next** (translations; English only, `src/locales/en.json`)
- **Vitest** + **React Testing Library** + **happy-dom** (unit tests)
- **ESLint** (type-aware, strict, max-warnings 0)

---

## Prerequisites

- **Node.js** 20+ (or 22+) recommended. The project may run on Node 18 with engine warnings.

---

## Setup and run

```bash
# Install dependencies
npm ci

# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview
```

---

## Scripts

| Script              | Description                     |
|---------------------|---------------------------------|
| `npm run dev`       | Start dev server (Vite)         |
| `npm run build`     | Type-check + production build   |
| `npm run preview`   | Serve `dist` for local preview   |
| `npm run lint`      | ESLint (fails on warnings)      |
| `npm run test`      | Run unit tests (Vitest)         |
| `npm run test:watch`| Run tests in watch mode         |

---

## Project structure

```
src/
├── App.tsx                    # Root: provider tree (AppMainProvider)
├── main.tsx                   # Imports i18n, renders App
├── appRoutes.config.tsx       # React Router + lazy routes
├── index.css                  # Tailwind + base styles
├── i18n/
│   └── i18n.ts                # i18next + react-i18next, en only
├── locales/
│   └── en.json                # English translations (cards, rail, error)
├── api/                       # Data layer (fetch-based)
│   ├── index.ts               # Re-exports + httpClient singleton
│   ├── config/                # apiConfig (baseUrl)
│   ├── apiUrls/               # Endpoints: user, ratings-summary, factor-grades/*, quant-ranking
│   ├── helpers/               # buildFullUrl.helper
│   ├── httpClient/            # FetchHttpClient, request/response interfaces
│   ├── useUser/               # useUser (premium flag for rail)
│   ├── useRatingsSummary/     # useRatingsSummary
│   ├── useFactorGradesNow/    # useFactorGradesNow
│   ├── useFactorGrades3m/     # useFactorGrades3m
│   ├── useFactorGrades6m/     # useFactorGrades6m
│   └── useQuantRanking/       # useQuantRanking
├── features/
│   └── financialInsightsRail/
│       ├── FinancialInsightsRail.tsx   # Rail: useUser, slot order, SLOT_VM_MAP
│       ├── financialInsightsRail.config.ts  # CARD_SLOT_IDS, isSlotVisible
│       └── vm/
│           ├── QuantRankingCardVM/    # useQuantRanking → skeleton or QuantRankingCard
│           │   └── helpers/            # quantRankingCardVM.helper (mapRankings)
│           ├── RatingsSummaryCardVM/   # useRatingsSummary → skeleton or RatingsSummaryCard
│           │   └── helpers/            # ratingsSummaryCardVM.helper (mapToRows, formatSourceKey)
│           └── FactorGradesCardVM/     # useFactorGradesNow/3m/6m → skeleton or FactorGradesCard
│               └── helpers/            # factorGradesCardVM.helper (sixMToMap, mergeFactorGrades)
├── components/
│   ├── cardSkeleton/          # CardSkeleton (Tailwind pulse)
│   ├── quantRankingCard/      # Dumb: sector, industry, ranks, footer link
│   ├── ratingsSummaryCard/    # Dumb: rows (source, rating, score); source keys dynamic, underscore → space
│   ├── factorGradesCard/      # Dumb: rows (factorKey, now, threeM, sixM); factorKey → t()
│   ├── errorBoundary/         # ErrorBoundary, ErrorFallback
│   ├── lazyPageBoundary/
│   └── backdropLoading/
├── helpers/                   # buildProvidersTree
├── providers/                 # AppMainProvider, QueryProvider
├── pages/
│   └── homePage/              # HomePage (main + FinancialInsightsRail)
└── test/
    └── setup.ts               # jest-dom, i18n init
```

Path aliases: `@/`, `@api/`, `@api/*`, `@helpers/`, `@providers/`, `@components/`, `@pages/`, `@features/*`, `@locales/*`, `@i18n`.

---

## Architecture (short)

- **Rail** uses `useUser()` → `isPremium`; renders only visible slots (config order). Non-premium: only Quant Ranking slot.
- **Slot VMs** live in `features/financialInsightsRail/vm/`. Each VM calls hook(s), shows `CardSkeleton` when loading, or the **dumb card** with mapped props. Key/API mapping is in VM helpers (configs for optional API key variants).
- **Dumb cards** live in `components/` (quantRankingCard, ratingsSummaryCard, factorGradesCard). Props only; no hooks. Only the Quant Ranking footer CTA is a real link; other “link-like” text is styled only.
- **i18n:** All UI copy in `locales/en.json`; components use `useTranslation()` and `t('key')`.

---

## API and data layer

- **Base URL:** `https://seekingalpha.free.beeceptor.com` (see `api/config/apiConfig.ts`).
- **HTTP client:** `FetchHttpClient` (fetch-based). Single instance as `httpClient` from `@api`.
- **Hooks:** `useUser`, `useRatingsSummary`, `useFactorGradesNow` / `useFactorGrades3m` / `useFactorGrades6m`, `useQuantRanking`. Response shapes are key-agnostic where needed; VM helpers map API keys to display (e.g. Rankings: overall/sector/industry; Ratings: dynamic keys, underscore → space; Factor grades: config of factor keys).

---

## Tests

Unit tests (45 total):

- **Rail:** FinancialInsightsRail (testid, premium: one slot vs three slots); HomePage (main, rail, slot).
- **Cards (dumb):** QuantRankingCard, RatingsSummaryCard, FactorGradesCard — abstract tests (props-driven assertions, no hardcoded copy).
- **VM helpers:** mapRankings (QuantRanking), mapToRows / formatSourceKey (RatingsSummary), sixMToMap / mergeFactorGrades (FactorGrades).
- **Other:** CardSkeleton, ErrorBoundary, ErrorFallback, buildProvidersTree, buildFullUrl, FetchHttpClient.

Run: `npm run test`.

---

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs on push/PR to `main` or `master`:

1. Checkout
2. Node 20, `npm ci`
3. **Lint** (`npm run lint`)
4. **Test** (`npm run test`)
5. **Build** (`npm run build`)
