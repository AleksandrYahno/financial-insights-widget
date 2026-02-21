import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { CardSlotError } from '@components/cardSlotError/CardSlotError';

describe('CardSlotError', () => {
  it('renders with data-testid and calls onRetry when Retry is clicked', () => {
    const onRetry = vi.fn();

    render(<CardSlotError onRetry={onRetry} />);

    expect(screen.getByTestId('card-slot-error')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /retry/i }));

    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});
