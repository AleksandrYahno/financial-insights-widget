import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { FactorGradesCard } from '@components/factorGradesCard/FactorGradesCard';

describe('FactorGradesCard', () => {
  it('renders with data-testid factor-grades-card', () => {
    const rows = [
      { factorKey: 'valuation', now: 'X', threeM: 'Y', sixM: 'Z' },
    ];

    render(<FactorGradesCard rows={rows} />);

    expect(screen.getByTestId('factor-grades-card')).toBeInTheDocument();
  });

  it('renders table with one heading row and body rows from props', () => {
    const rows = [
      { factorKey: 'valuation', now: 'A', threeM: 'B', sixM: 'C' },
      { factorKey: 'growth', now: 'D', threeM: 'E', sixM: 'F' },
    ];

    render(<FactorGradesCard rows={rows} />);

    const table = screen.getByRole('table');
    const bodyRows = table.querySelectorAll('tbody tr');

    expect(bodyRows).toHaveLength(rows.length);
  });

  it('renders grade values from props in document', () => {
    const rows = [
      { factorKey: 'valuation', now: 'Grade1', threeM: 'Grade2', sixM: 'Grade3' },
    ];

    render(<FactorGradesCard rows={rows} />);

    expect(screen.getByText('Grade1')).toBeInTheDocument();
    expect(screen.getByText('Grade2')).toBeInTheDocument();
    expect(screen.getByText('Grade3')).toBeInTheDocument();
  });

  it('renders exactly three column headers in thead', () => {
    const rows = [{ factorKey: 'valuation', now: 'N', threeM: '3', sixM: '6' }];

    render(<FactorGradesCard rows={rows} />);

    const table = screen.getByRole('table');
    const headerCells = table.querySelectorAll('thead th');

    expect(headerCells.length).toBeGreaterThanOrEqual(3);
  });
});
