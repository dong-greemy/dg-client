'use client';
import { PropsWithChildren } from 'react';
import { scan } from 'react-scan';
import { ThemeProvider } from 'styled-components';

import { GlobalPortal } from 'components/GlobalPortal';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

/** 개발용 react-scan 세팅 */
if (typeof window !== 'undefined') {
  scan({
    enabled: true,
    log: true, // logs render info to console (default: false)
  });
}

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
