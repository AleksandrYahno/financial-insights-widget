import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { RatingsSummaryCard } from '@components/ratingsSummaryCard/RatingsSummaryCard';

describe('RatingsSummaryCard', () => {
  it('renders with data-testid ratings-summary-card', () => {
    const rows = [{ source: 'Source A', rating: 'R1', score: 1.5 }];

    render(<RatingsSummaryCard rows={rows} />);

    expect(screen.getByTestId('ratings-summary-card')).toBeInTheDocument();
  });

  it('renders each row source, rating and score from props', () => {
    const rows = [
      { source: 'Source One', rating: 'Rating A', score: 1.11 },
      { source: 'Source Two', rating: 'Rating B', score: 2.22 },
    ];

    render(<RatingsSummaryCard rows={rows} />);

    rows.forEach((row) => {
      expect(screen.getByText(row.source)).toBeInTheDocument();
      expect(screen.getByText(row.rating)).toBeInTheDocument();
      expect(screen.getByText(row.score.toFixed(2))).toBeInTheDocument();
    });
  });

  it('renders one heading', () => {
    render(<RatingsSummaryCard rows={[]} />);

    const headings = screen.getAllByRole('heading');

    expect(headings).toHaveLength(1);
  });

  it('renders empty state when rows is empty', () => {
    render(<RatingsSummaryCard rows={[]} />);

    expect(screen.getByTestId('ratings-summary-card')).toBeInTheDocument();
  });
});
