# Financial Insights Widget

Right-rail financial cards widget (React 19, Vite 7, TypeScript). Set up with routing, lazy loading, ErrorBoundary, and unit tests. Ready for assignment implementation (API, cards, premium gating).

---

## Tech stack

- **React 19** + **TypeScript**
- **Vite 7** (build, dev server)
- **React Router 7** (routing, lazy routes)
- **TanStack Query (React Query)** (data fetching, to be wired)
- **Tailwind CSS 3** (styling)
- **Vitest** + **React Testing Library** + **happy-dom** (unit tests)
- **ESLint** (type-aware, strict)

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

| Script        | Description                          |
|---------------|--------------------------------------|
| `npm run dev` | Start dev server (Vite)              |
| `npm run build` | Type-check + production build      |
| `npm run preview` | Serve `dist` for local preview    |
| `npm run lint` | ESLint (fails on warnings)          |
| `npm run test` | Run unit tests (Vitest)             |
| `npm run test:watch` | Run tests in watch mode        |

---

## Project structure

```
src/
├── App.tsx                 # Root: provider tree
├── main.tsx
├── appRoutes.config.tsx    # React Router + lazy routes
├── index.css               # Tailwind + base styles
├── helpers/                # buildProvidersTree, etc.
├── providers/              # AppMainProvider (router + ErrorBoundary)
├── components/             # ErrorBoundary, LazyPageBoundary, BackdropLoading
├── pages/                  # HomePage (lazy)
└── test/
    └── setup.ts            # Vitest + Testing Library setup
```

Path aliases: `@/`, `@helpers/`, `@providers/`, `@components/`, `@pages/`.

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

Unit tests cover:

- `buildProvidersTree` (empty/single/multiple providers)
- `ErrorBoundary` (renders children; shows fallback when child throws)
- `ErrorFallback` (message, Reload button, `window.location.reload`)
- `HomePage` (heading, description, `<main>`)

Run: `npm run test`.
