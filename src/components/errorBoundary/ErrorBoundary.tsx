import { Component, ReactNode } from 'react';

import ErrorFallback from '@components/errorBoundary/ErrorFallback';
import {
  IErrorBoundaryProps,
  IErrorBoundaryState,
} from '@components/errorBoundary/errorBoundary.interface';

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): IErrorBoundaryState {
    return { hasError: true };
  }

  override componentDidCatch(error: Error): void {
    console.error('ErrorBoundary caught an error:', error);
  }

  override render(): ReactNode {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
