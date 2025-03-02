'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useReducer, useState } from 'react';

import { AboutService } from 'components/AboutService';
import BottomSheet from 'components/BottomSheet';
import { Button } from 'components/Button';
import { GlobalPortal } from 'components/GlobalPortal';
import { Header, HeaderLogo } from 'components/Header';
import { COMMUTE_TIME, COMMUTE_TIME_HOME_LABELS } from 'constants/commute';
import SearchIcon from 'svg/search-icon.svg';
import SelectArrow from 'svg/select-arrow-icon.svg';

import * as S from './styled';

export interface Commute {
  time: number;
  method: string;
  location: string;
}

export default function Home() {
  const router = useRouter();
  const [isModalOpen, ModalOpen] = useReducer(state => {
    return !state;
  }, false);

  // DEFAULT VALUE = COMMUTE_TIME[2]
  const [commuteTime, setCommuteTime] = useState<string>(COMMUTE_TIME[2].home_label);
  // DEFAULT VALUE = COMMUTE_METHOD[0]
  // const [commuteMethod, setCommuteMethod] = useState<SegmentItem>(COMMUTE_METHOD[0]);

  const params = useSearchParams();
  const myCompanyLocation = params.get('place');

  return (
    <>
      <Header>
        <HeaderLogo>동그리미</HeaderLogo>
      </Header>
      <S.Main>
        <S.HomeContainer>
          <AboutService />

          <S.CommuteTime>
            <div className={'commute-time-wrapper'}>
              <div className={'vehicle-title'}>
                <span>🚌 대중교통</span>
                <span>으로</span>
              </div>
              <div className={'select-time-title'}>
                <span>통근 시간</span>
                <S.CommuteTimeSelect value={commuteTime} onClick={ModalOpen}>
                  <span>{commuteTime}</span>
                  <SelectArrow />
                </S.CommuteTimeSelect>
                <span>이내</span>
              </div>
              <div>합리적인 동네 찾기</div>
            </div>
          </S.CommuteTime>
          <S.SearchCompany
            $isSearched={myCompanyLocation}
            onClick={() => router.push('/search', { scroll: false })}
          >
            <SearchIcon />
            <div className="myCompanyLocation">
              {myCompanyLocation ? myCompanyLocation : '내 직장 위치'}
            </div>
          </S.SearchCompany>

          <S.SearchButton>
            <Button
              disabled={!myCompanyLocation}
              handler={() => {
                if (myCompanyLocation) {
                  router.push(`/result/?place=${encodeURIComponent(myCompanyLocation)}`, {
                    scroll: false,
                  });
                }
              }}
            >
              동네 검색
            </Button>
          </S.SearchButton>
        </S.HomeContainer>
      </S.Main>
      {isModalOpen && (
        <GlobalPortal.Consumer>
          <BottomSheet
            title="통근 시간"
            items={COMMUTE_TIME_HOME_LABELS}
            selectedItem={commuteTime}
            setItem={setCommuteTime}
            onClose={ModalOpen}
            gridCol={3}
          />
        </GlobalPortal.Consumer>
      )}
    </>
  );
}
