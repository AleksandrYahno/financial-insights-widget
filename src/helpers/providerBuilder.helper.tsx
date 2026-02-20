import { FC } from 'react';

import {
  IMultiProviderProps,
  IProviderProps,
} from '@helpers/providerBuilder.interface';

export const buildProvidersTree = (
  componentsWithProps: IMultiProviderProps[],
): FC<IProviderProps> => {
  const InitialComponent: FC<IProviderProps> = ({ children }) => (
    <>
      {children}
    </>
  );

  return componentsWithProps.reduce<FC<IProviderProps>>(
    (AccumulatedComponents, [Provider, props = {}]) => {
      const NestedProvider: FC<IProviderProps> = ({ children }) => (
        <AccumulatedComponents>
          <Provider
            {...props}
          >
            {children}
          </Provider>
        </AccumulatedComponents>
      );

      return NestedProvider;
    },
    InitialComponent,
  );
};
