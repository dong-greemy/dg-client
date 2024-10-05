'use client';

import * as S from './styled';
import { ReactNode } from 'react';
import Link from 'next/link';

export const HeaderLogo = ({ children }: { children?: ReactNode }) => {
  return (
    <S.HeaderLogo href={'/'}>
      <img src={'/svg/logo.svg'} alt={'logo'} />
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
      <img src={'/svg/close-icon.svg'} alt={'back-icon'} />
    </S.HeaderClose>
  );
};

export const HeaderBack = () => {
  return (
    <S.HeaderBack onClink={() => history.back()}>
      <img src={'/svg/back-icon.svg'} alt={'back-icon'} />
    </S.HeaderBack>
  );
};

export const Header = ({ children }: { children: ReactNode }) => {
  return <S.Header>{children}</S.Header>;
};
