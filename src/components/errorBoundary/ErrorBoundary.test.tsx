import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';

const ThrowError = (): never => {
  throw new Error('test error');
};

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <span data-testid="child">
          content
        </span>
      </ErrorBoundary>,
    );

    expect(screen.getByTestId('child')).toHaveTextContent('content');
    expect(screen.queryByText('Something went wrong.')).not.toBeInTheDocument();
  });

  it('renders ErrorFallback when child throws', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reload/i })).toBeInTheDocument();

    vi.restoreAllMocks();
  });
});
