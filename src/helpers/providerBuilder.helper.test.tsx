import { ReactElement, ReactNode } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { buildProvidersTree } from '@helpers/providerBuilder.helper';

const MockProvider = ({ children }: { children: ReactNode }): ReactElement => (
  <div data-testid="mock-provider">
    {children}
  </div>
);

describe('buildProvidersTree', () => {
  it('returns a component that renders children', () => {
    const Tree = buildProvidersTree([]);
    expect(Tree).toBeDefined();
    expect(typeof Tree).toBe('function');
  });

  it('renders children when tree is empty', () => {
    const Tree = buildProvidersTree([]);
    render(
      <Tree>
        <span data-testid="child">
          child
        </span>
      </Tree>,
    );
    expect(screen.getByTestId('child')).toHaveTextContent('child');
  });

  it('wraps children in one provider', () => {
    const Tree = buildProvidersTree([[MockProvider]]);
    render(
      <Tree>
        <span data-testid="child">
          inner
        </span>
      </Tree>,
    );
    expect(screen.getByTestId('mock-provider')).toBeInTheDocument();
    expect(screen.getByTestId('child')).toHaveTextContent('inner');
  });

  it('nests multiple providers and renders children', () => {
    const Tree = buildProvidersTree([[MockProvider], [MockProvider]]);
    render(
      <Tree>
        <span data-testid="child">
          content
        </span>
      </Tree>,
    );
    const providers = screen.getAllByTestId('mock-provider');
    expect(providers).toHaveLength(2);
    expect(screen.getByTestId('child')).toHaveTextContent('content');
  });
});
