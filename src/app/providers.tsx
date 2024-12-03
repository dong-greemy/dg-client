'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalPortal } from 'components/GlobalPortal';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalPortal.Provider>
          <GlobalStyles />
          {children}
        </GlobalPortal.Provider>
      </ThemeProvider>
    </>
  );
}
