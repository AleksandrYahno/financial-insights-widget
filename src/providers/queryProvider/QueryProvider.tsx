import { FC, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { IProviderProps } from '@helpers/providerBuilder.interface';

const QueryProvider: FC<IProviderProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export { QueryProvider };
