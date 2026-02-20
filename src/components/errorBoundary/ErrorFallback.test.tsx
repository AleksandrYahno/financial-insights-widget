import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import ErrorFallback from '@components/errorBoundary/ErrorFallback';

describe('ErrorFallback', () => {
  it('renders message and Reload button', () => {
    render(<ErrorFallback />);

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reload/i })).toBeInTheDocument();
  });

  it('calls window.location.reload when Reload is clicked', () => {
    const reloadMock = vi.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: reloadMock },
      writable: true,
    });

    render(<ErrorFallback />);
    fireEvent.click(screen.getByRole('button', { name: /reload/i }));

    expect(reloadMock).toHaveBeenCalledTimes(1);
  });
});
