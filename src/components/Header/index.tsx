'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

import * as S from './styled';

export const HeaderLogo = ({ children }: { children?: ReactNode }) => {
  return (
    <S.HeaderLogo href={'/'}>
      <Image src={'/svg/logo.svg'} alt={'logo'} />
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
      <Image src={'/svg/close-icon.svg'} alt={'back-icon'} />
    </S.HeaderClose>
  );
};

export const HeaderBack = () => {
  return (
    <S.HeaderBack onClick={() => history.back()}>
      <Image src={'/svg/back-icon.svg'} alt={'back-icon'} />
    </S.HeaderBack>
  );
};

export const Header = ({ children }: { children: ReactNode }) => {
  return <S.Header>{children}</S.Header>;
};
