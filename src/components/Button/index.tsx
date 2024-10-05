'use client';

import * as S from './styled';

export const Button = ({ children }) => {
  return (
    <S.DefaultButton>
      <div className={'button-title'}>{children}</div>
    </S.DefaultButton>
  );
};
