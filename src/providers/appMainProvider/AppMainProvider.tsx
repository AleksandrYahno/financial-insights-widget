import { createContext, FC } from 'react';
import { RouterProvider } from 'react-router';

import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';
import { IAppMainActions } from '@providers/appMainProvider/appMainActions.interface';
import { appRouter } from '@/appRoutes.config';

const AppMainContext = createContext(undefined);

export let appMainActions: IAppMainActions;

const AppMainProvider: FC = () => {
  return (
    <AppMainContext.Provider value={undefined}>
      <ErrorBoundary>
        <RouterProvider
          router={appRouter}
        />
      </ErrorBoundary>
    </AppMainContext.Provider>
  );
};

export {
  AppMainProvider,
  AppMainContext,
};
