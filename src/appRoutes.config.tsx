import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import LazyPageBoundary from '@components/lazyPageBoundary/LazyPageBoundary';

const HomePage = lazy(() => import('@pages/homePage/HomePage'));

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <LazyPageBoundary>
        <HomePage />
      </LazyPageBoundary>
    ),
  },
]);
