'use client';

import React, { useState } from 'react';

import { AboutService } from 'components/AboutService';
import BottomSheet from 'components/BottomSheet';
import { Button } from 'components/Button';
import { GlobalPortal } from 'components/GlobalPortal';
import { Header, HeaderLogo } from 'components/Header';
import { COMMUTE_METHOD, COMMUTE_TIME, COMMUTE_TIME_LABELS } from 'constants/commute';
import SelectArrow from 'svg/select-arrow-icon.svg';

import * as S from './styled';

export interface Commute {
  time: number;
  method: string;
  location: string;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /** DEFAULT VALUE = COMMUTE_TIME[2] */
  const [commuteTime, setCommuteTime] = useState<string>(COMMUTE_TIME[2].label);
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
              <div className={'select-time-title'}>
                <span>통근 시간</span>
                <S.CommuteTimeSelect value={commuteTime} onClick={() => setIsOpen(true)}>
                  <span>{commuteTime}</span>
                  <SelectArrow />
                </S.CommuteTimeSelect>
                <span>이내</span>
              </div>
              <div>살기 좋은 동네 찾기</div>
            </div>
          </S.CommuteTime>
        </S.HomeContainer>
      </S.Main>
      <S.HomeFooter>
        <Button>검색하기</Button>
      </S.HomeFooter>

      {isOpen && (
        <GlobalPortal.Consumer>
          <BottomSheet
            title="통근 시간"
            items={COMMUTE_TIME_LABELS}
            selectedItem={commuteTime}
            setItem={setCommuteTime}
            onClose={() => setIsOpen(false)}
          />
        </GlobalPortal.Consumer>
      )}
    </>
  );
}
