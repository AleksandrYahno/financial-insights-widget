import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import HomePage from '@pages/homePage/HomePage';

describe('HomePage', () => {
  it('renders heading and description', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Financial Insights Widget',
    );
    expect(
      screen.getByText(/Home page — routing and lazy loading are set up/),
    ).toBeInTheDocument();
  });

  it('renders main landmark', () => {
    render(<HomePage />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
