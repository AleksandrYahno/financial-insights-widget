import { createContext, FC } from 'react';
import { RouterProvider } from 'react-router';

import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';
import { IAppMainActions } from '@providers/appMainProvider/appMainActions.interface';
import { QueryProvider } from '@providers/queryProvider/QueryProvider';
import { appRouter } from '@/appRoutes.config';

const AppMainContext = createContext(undefined);

export let appMainActions: IAppMainActions;

const AppMainProvider: FC = () => {
  return (
    <AppMainContext.Provider value={undefined}>
      <QueryProvider>
        <ErrorBoundary>
          <RouterProvider
            router={appRouter}
          />
        </ErrorBoundary>
      </QueryProvider>
    </AppMainContext.Provider>
  );
};

export {
  AppMainProvider,
  AppMainContext,
};
