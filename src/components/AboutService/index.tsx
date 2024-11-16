'use client';

import Image from 'next/image';

import * as S from './styled';

export const AboutService = () => {
  return (
    <S.AboutService href={'/landing'}>
      <S.LearnMore>
        <Image src={'/svg/logo.svg'} alt={'logo'} />
        <div className={'learn-more-text'}>서비스명 자세히 알아보기</div>
      </S.LearnMore>
      <Image src={'/svg/logo.svg'} alt={'logo'} />
    </S.AboutService>
  );
};
