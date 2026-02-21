import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { QuantRankingCard } from '@components/quantRankingCard/QuantRankingCard';

describe('QuantRankingCard', () => {
  it('renders with data-testid quant-ranking-card', () => {
    const props = {
      sector: 'Sector A',
      industry: 'Industry B',
      rankedOverall: { rank: 1, total: 10 },
      rankedInSector: { rank: 2, total: 20 },
      rankedInIndustry: { rank: 3, total: 30 },
    };

    render(<QuantRankingCard {...props} />);

    expect(screen.getByTestId('quant-ranking-card')).toBeInTheDocument();
  });

  it('renders sector, industry and rank values from props', () => {
    const sector = 'Test Sector';
    const industry = 'Test Industry';
    const rankedOverall = { rank: 111, total: 999 };
    const rankedInSector = { rank: 22, total: 88 };
    const rankedInIndustry = { rank: 3, total: 7 };

    render(
      <QuantRankingCard
        sector={sector}
        industry={industry}
        rankedOverall={rankedOverall}
        rankedInSector={rankedInSector}
        rankedInIndustry={rankedInIndustry}
      />,
    );

    expect(screen.getByText(sector)).toBeInTheDocument();
    expect(screen.getByText(industry)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`${rankedOverall.rank}.*${rankedOverall.total}`)),
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`${rankedInSector.rank}.*${rankedInSector.total}`)),
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`${rankedInIndustry.rank}.*${rankedInIndustry.total}`)),
    ).toBeInTheDocument();
  });

  it('renders exactly one link with href', () => {
    const props = {
      sector: 'S',
      industry: 'I',
      rankedOverall: { rank: 0, total: 0 },
      rankedInSector: { rank: 0, total: 0 },
      rankedInIndustry: { rank: 0, total: 0 },
    };

    render(<QuantRankingCard {...props} />);

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute('href', '#');
  });
});
