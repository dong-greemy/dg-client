'use client';

import * as S from './styled';

interface TextProps {
  size?: 'h1' | 'h2' | 't1';
  children: React.ReactNode;
}

export const Text = ({ children, ...props }: TextProps) => {
  return (
    <S.LandingText {...props}>
      <div className={'title'}>{children}</div>
    </S.LandingText>
  );
};
