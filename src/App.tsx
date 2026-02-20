import { FC, ReactElement, useMemo } from 'react';

import { buildProvidersTree } from '@helpers/providerBuilder.helper';
import { AppMainProvider } from '@providers/appMainProvider/AppMainProvider';

const App: FC = (): ReactElement => {
  const GlobalProviders = useMemo(() => {
    return buildProvidersTree([
      [AppMainProvider],
    ]);
  }, []);

  return (
    <GlobalProviders>
      {null}
    </GlobalProviders>
  );
};

export default App;
