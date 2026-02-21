import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { FinancialInsightsRail } from '@features/financialInsightsRail/FinancialInsightsRail';

const loadingMock = { data: null, isLoading: true } as const;

vi.mock('@api/index', () => ({
  useUser: vi.fn(),
  useQuantRanking: vi.fn(() => loadingMock),
  useRatingsSummary: vi.fn(() => loadingMock),
  useFactorGradesNow: vi.fn(() => loadingMock),
  useFactorGrades3m: vi.fn(() => loadingMock),
  useFactorGrades6m: vi.fn(() => loadingMock),
}));

const { useUser } = await import('@api/index');

const renderRail = (): ReturnType<typeof render> => {
  const queryClient = new QueryClient();

  return render(
    <QueryClientProvider client={queryClient}>
      <FinancialInsightsRail />
    </QueryClientProvider>,
  );
};

describe('FinancialInsightsRail', () => {
  it('renders rail with data-testid', () => {
    vi.mocked(useUser).mockReturnValue({ data: { premium: false } } as ReturnType<typeof useUser>);

    renderRail();

    expect(screen.getByTestId('financial-insights-rail')).toBeInTheDocument();
  });

  it('renders only Quant Ranking slot when user is not premium', () => {
    vi.mocked(useUser).mockReturnValue({ data: { premium: false } } as ReturnType<typeof useUser>);

    renderRail();

    expect(screen.getByTestId('slot-quant-ranking')).toBeInTheDocument();
    expect(screen.queryByTestId('slot-ratings-summary')).not.toBeInTheDocument();
    expect(screen.queryByTestId('slot-factor-grades')).not.toBeInTheDocument();
  });

  it('renders all three slots when user is premium', () => {
    vi.mocked(useUser).mockReturnValue({ data: { premium: true } } as ReturnType<typeof useUser>);

    renderRail();

    expect(screen.getByTestId('slot-ratings-summary')).toBeInTheDocument();
    expect(screen.getByTestId('slot-factor-grades')).toBeInTheDocument();
    expect(screen.getByTestId('slot-quant-ranking')).toBeInTheDocument();
  });
});
