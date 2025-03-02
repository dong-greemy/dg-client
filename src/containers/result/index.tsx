'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useReducer, useState } from 'react';

import BottomSheet from 'components/BottomSheet';
import { GlobalPortal } from 'components/GlobalPortal';
import { Header, HeaderLogo } from 'components/Header';
import Select from 'components/Select';
import { COMMUTE_TIME, COMMUTE_TIME_RESULT_LABELS } from 'constants/commute';
import LocationIcon from 'svg/result-location-icon.svg';
import ClickArrow from 'svg/right-back-icon.svg';
import TimeIcon from 'svg/time-icon.svg';

import * as S from './styled';

export default function Result() {
  const router = useRouter();
  const [isModalOpen, ModalOpen] = useReducer(state => {
    return !state;
  }, false);
  // DEFAULT VALUE = COMMUTE_TIME[2]
  const [commuteTime, setCommuteTime] = useState<string>(COMMUTE_TIME[2].result_label);

  const params = useSearchParams();
  const place = params.get('place') ?? '다시 선택해주세요.';

  const resultMockData: {
    tag: string;
    place: string;
    averageMonthlyRent: string;
    time: string;
    transfer?: number;
  }[] = [
    {
      tag: '최단시간',
      place: '서울시 중구 다산동',
      averageMonthlyRent: '50/600',
      time: '12분',
      transfer: 1,
    },
    {
      tag: '최소환승',
      place: '서울시 중구 다산1동',
      averageMonthlyRent: '50/700',
      time: '14분',
    },
    {
      tag: '최저월세',
      place: '서울시 중구 다산2동',
      averageMonthlyRent: '50/800',
      time: '16분',
    },
  ];

  const recommendPlaceHandler = () => {
    router.push(`/search?destination=result`, { scroll: false });
  };

  return (
    <div>
      <Header>
        <HeaderLogo>동그리미</HeaderLogo>
      </Header>
      <S.Main>
        <S.SelectWrapper>
          <Select icon={LocationIcon} label={place} handler={recommendPlaceHandler} />
          <Select icon={TimeIcon} label={'30분 이내'} handler={ModalOpen} />
        </S.SelectWrapper>
        <S.Map />
        <S.RecommendPlaceWrapper>
          {resultMockData.map((result, index) => (
            <S.RecommendPlace key={index}>
              <S.RecommendPlaceData>
                <p className={'tag'}>{result.tag}</p>
                <p className={'place'}>{result.place}</p>
                <p className={'averageMonthlyRent'}>{result.averageMonthlyRent}</p>
              </S.RecommendPlaceData>
              <S.RecommendPlaceTime>
                <div className={'time'}>
                  <p>{result.time}</p>
                  <ClickArrow />
                </div>
                <p className={'transfer'}>
                  {result.transfer ? `환승 ${result.transfer}회` : '\u00A0'}
                </p>
              </S.RecommendPlaceTime>
            </S.RecommendPlace>
          ))}
        </S.RecommendPlaceWrapper>
      </S.Main>
      {isModalOpen && (
        <GlobalPortal.Consumer>
          <BottomSheet
            title="통근 시간 설정"
            items={COMMUTE_TIME_RESULT_LABELS}
            selectedItem={commuteTime}
            setItem={setCommuteTime}
            onClose={ModalOpen}
            gridCol={2}
          />
        </GlobalPortal.Consumer>
      )}
    </div>
  );
}
