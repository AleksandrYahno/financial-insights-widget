import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import HomePage from '@pages/homePage/HomePage';

const loadingMock = { data: null, isLoading: true };

vi.mock('@api/index', () => ({
  useUser: () => ({ data: { premium: false } }),
  useQuantRanking: () => loadingMock,
  useRatingsSummary: () => loadingMock,
  useFactorGradesNow: () => loadingMock,
  useFactorGrades3m: () => loadingMock,
  useFactorGrades6m: () => loadingMock,
}));

const renderWithQuery = (): ReturnType<typeof render> => {
  const queryClient = new QueryClient();

  return render(
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>,
  );
};

describe('HomePage', () => {
  it('renders main landmark and financial insights rail', () => {
    renderWithQuery();

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByTestId('financial-insights-rail')).toBeInTheDocument();
  });

  it('renders at least one slot (Quant Ranking visible for non-premium)', () => {
    renderWithQuery();

    expect(screen.getByTestId('slot-quant-ranking')).toBeInTheDocument();
  });
});
