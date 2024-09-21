'use client';

import * as S from './styles';
import { ReactNode } from 'react';
import Link from 'next/link';

export const HeaderLogo = ({ children }: { children?: ReactNode }) => {
  return (
    <S.HeaderLogo href={'/'}>
      <img src={'/assets/svg/logo.svg'} alt={'logo'} />
      {children && <span className={'logoText'}>{children}</span>}
    </S.HeaderLogo>
  );
};

export const HeaderPage = ({ children }: { children: ReactNode }) => {
  return <S.HeaderPage>{children}</S.HeaderPage>;
};

export const HeaderClose = () => {
  return (
    <S.HeaderClose>
      <img src={'/assets/svg/close-icon.svg'} alt={'back-icon'} />
    </S.HeaderClose>
  );
};

export const HeaderBack = () => {
  return (
    <S.HeaderBack onClink={() => history.back()}>
      <img src={'/assets/svg/back-icon.svg'} alt={'back-icon'} />
    </S.HeaderBack>
  );
};

export const Header = ({ children }: { children: ReactNode }) => {
  return <S.Header>{children}</S.Header>;
};

// export const Header = Object.assign(HeaderMain, {
//   Logo: HeaderLogo,
//   Page: HeaderPage,
//   Close: HeaderClose,
//   Back: HeaderBack,
// });
