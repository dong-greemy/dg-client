'use client';

import Logo from '@svg/logo.svg';

import * as S from './styled';

export const AboutService = () => {
  return (
    <S.AboutService href={'/landing'}>
      <S.LearnMore>
        <Logo />
        <div className={'learn-more-text'}>서비스명 자세히 알아보기</div>
      </S.LearnMore>
      <Logo />
    </S.AboutService>
  );
};
