'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
// import { scan } from 'react-scan';

import { GlobalPortal } from 'components/GlobalPortal';
import GlobalStyles from 'styles/global';

export function Providers({ children }: PropsWithChildren) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalPortal.Provider>
          <GlobalStyles />
          {children}
        </GlobalPortal.Provider>
      </QueryClientProvider>
    </>
  );
}
