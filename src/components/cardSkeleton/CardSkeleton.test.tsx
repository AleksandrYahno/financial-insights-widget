import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { CardSkeleton } from '@components/cardSkeleton/CardSkeleton';

describe('CardSkeleton', () => {
  it('renders with data-testid card-skeleton', () => {
    render(<CardSkeleton />);

    expect(screen.getByTestId('card-skeleton')).toBeInTheDocument();
  });

  it('renders a single root element with accessible structure', () => {
    const { container } = render(<CardSkeleton />);

    const skeleton = screen.getByTestId('card-skeleton');

    expect(container.firstChild).toBe(skeleton);
    expect(skeleton.children.length).toBeGreaterThan(0);
  });
});
