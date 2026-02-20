# Financial Insights Widget

Right-rail financial cards widget (React 19, Vite 7, TypeScript). Implements the assignment: Mock API, React Query, card order, premium gating (non-premium sees only Quant Ranking). Steps 4.1–4.3 done; Rail and cards next.

---

## Tech stack

- **React 19** + **TypeScript**
- **Vite 7** (build, dev server)
- **React Router 7** (routing, lazy routes)
- **TanStack Query (React Query)** (data layer; QueryProvider inside AppMainProvider)
- **Tailwind CSS 3** (styling)
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

| Script           | Description                     |
|------------------|---------------------------------|
| `npm run dev`    | Start dev server (Vite)         |
| `npm run build`  | Type-check + production build  |
| `npm run preview`| Serve `dist` for local preview |
| `npm run lint`   | ESLint (fails on warnings)    |
| `npm run test`   | Run unit tests (Vitest)       |
| `npm run test:watch` | Run tests in watch mode  |

---

## Project structure

```
src/
├── App.tsx                    # Root: provider tree (AppMainProvider only)
├── main.tsx
├── appRoutes.config.tsx       # React Router + lazy routes
├── index.css                  # Tailwind + base styles
├── api/                       # Data layer (fetch-based, no Axios)
│   ├── index.ts               # Re-exports + httpClient singleton
│   ├── config/               # apiConfig (baseUrl)
│   ├── apiUrls/               # Endpoints: user, ratings-summary, factor-grades/*, quant-ranking
│   ├── helpers/               # buildFullUrl.helper
│   ├── httpClient/            # FetchHttpClient, IHttpClient, request/response interfaces
│   ├── useUser/               # useUser hook + user.interface
│   ├── useRatingsSummary/     # useRatingsSummary + ratingsSummary.interface
│   ├── useFactorGradesNow/    # useFactorGradesNow + factorGrades.interface
│   ├── useFactorGrades3m/     # useFactorGrades3m + factorGrades.interface
│   ├── useFactorGrades6m/     # useFactorGrades6m + factorGrades.interface
│   └── useQuantRanking/       # useQuantRanking + quantRanking.interface
├── helpers/                   # buildProvidersTree, providerBuilder.interface
├── providers/                 # AppMainProvider (QueryProvider → ErrorBoundary → RouterProvider)
│   ├── appMainProvider/
│   └── queryProvider/
├── components/                 # ErrorBoundary, ErrorFallback, LazyPageBoundary, BackdropLoading
├── pages/                     # HomePage (lazy)
└── test/
    └── setup.ts               # Vitest + Testing Library setup
```

Path aliases: `@/`, `@api/`, `@helpers/`, `@providers/`, `@components/`, `@pages/`.

---

## API and data layer

- **Base URL:** `https://seekingalpha.free.beeceptor.com` (see `api/config/apiConfig.ts`).
- **HTTP client:** `FetchHttpClient` (fetch-based), no Axios. Single instance exported as `httpClient` from `@api`.
- **Hooks:** `useUser`, `useRatingsSummary`, `useFactorGradesNow`, `useFactorGrades3m`, `useFactorGrades6m`, `useQuantRanking`. Each uses `useQuery`; response types are key-agnostic (`Record<string, T>` where keys come from API).
- **Implementation status (TECHNICAL_SPECIFICATION §4):** 4.1 QueryClientProvider ✓, 4.2 API base + types ✓, 4.3 React Query hooks ✓. Next: 4.4 Rail container, then skeleton and cards.

---

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs on push/PR to `main` or `master`:

1. Checkout
2. Node 20, `npm ci`
3. **Lint** (`npm run lint`)
4. **Test** (`npm run test`)
5. **Build** (`npm run build`)

---

## Tests

Unit tests (18 total):

- `buildProvidersTree` (empty / single / multiple providers)
- `ErrorBoundary` (children; fallback when child throws)
- `ErrorFallback` (message, Reload button)
- `HomePage` (heading, description, `<main>`)
- `buildFullUrl.helper` (path, baseUrl, absolute URL passthrough, trim)
- `FetchHttpClient.get` (URL building, JSON response, signal/headers)

Run: `npm run test`.
