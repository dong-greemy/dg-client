'use client';

import { ReactNode, MouseEventHandler } from 'react';

import * as S from './styled';
interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <S.DefaultButton onClick={onClick}>
      <div className={'button-title'}>{children}</div>
    </S.DefaultButton>
  );
};
