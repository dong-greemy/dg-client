'use client';

import { ReactNode, MouseEventHandler } from 'react';

import * as S from './styled';
interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <S.DefaultButton onClick={onClick}>
      <div className={'button-title'}>{children}</div>
    </S.DefaultButton>
  );
};

export const ShareButton = ({ onClick, children }: ButtonProps) => {
  return (
    <S.RoundedButton onClick={onClick}>
      <img src={'/svg/ios-share.svg'} alt={'ios-share'} />
      <div className={'button-title'}>{children}</div>
    </S.RoundedButton>
  );
};
