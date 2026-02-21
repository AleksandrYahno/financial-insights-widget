import { createContext, FC, useMemo } from 'react';
import { RouterProvider } from 'react-router';

import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';
import { buildProvidersTree } from '@helpers/providerBuilder.helper';
import { IAppMainActions } from '@providers/appMainProvider/appMainActions.interface';
import { QueryProvider } from '@providers/queryProvider/QueryProvider';
import { appRouter } from '@/appRoutes.config';

const AppMainContext = createContext(undefined);

export let appMainActions: IAppMainActions;

const AppMainProvider: FC = () => {
  const AppProviders = useMemo(() => {
    return buildProvidersTree([
      [QueryProvider],
      [ErrorBoundary],
      [RouterProvider, { router: appRouter }],
    ]);
  }, []);

  return (
    <AppMainContext.Provider value={undefined}>
      <AppProviders>
        {null}
      </AppProviders>
    </AppMainContext.Provider>
  );
};

export {
  AppMainProvider,
  AppMainContext,
};
