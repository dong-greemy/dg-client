import { Header, HeaderLogo } from '@components/Header';
import { AboutService } from '@components/AboutService';
import { Button } from '@components/Button';

import * as S from './styled';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header>
        <HeaderLogo>직주근접</HeaderLogo>
      </Header>
      <S.Main>
        <S.HomeContainer>
          <AboutService />

          <S.SearchCompany>
            <div className={'search-company-title'}>
              직장 위치가 어디인가요?
            </div>

            <Link className={'search-wrapper'} href={'/search'}>
              <img src={'/svg/search-icon.svg'} alt={'search'} />
              <div className={'search-company-text'}>
                위치를 빠르게 찾아보세요.
              </div>
            </Link>
          </S.SearchCompany>

          <S.CommuteMethod>
            <div className={'commute-method-title'}>통근 방법</div>
            <div className={'commute-method-desc'}>시간을 설정하세요</div>
          </S.CommuteMethod>
        </S.HomeContainer>
      </S.Main>
      <S.HomeFooter>
        <Button>검색하기</Button>
      </S.HomeFooter>
    </div>
  );
}
