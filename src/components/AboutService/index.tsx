'use client';

import * as S from './styled';
import { ReactNode } from 'react';
import Link from 'next/link';

export const AboutService = () => {
  return (
    <S.AboutService href={'/landing'}>
      <S.LearnMore>
        <img src={'/svg/logo.svg'} alt={'logo'} />
        <div className={'learn-more-text'}>서비스명 자세히 알아보기</div>
      </S.LearnMore>
      <img src={'/svg/logo.svg'} alt={'logo'} />
    </S.AboutService>
  );
};
