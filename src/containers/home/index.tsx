'use client';

import React, { useState, useId } from 'react';

import { AboutService } from '@components/AboutService';
import { Button } from '@components/Button';
import { Header, HeaderLogo } from '@components/Header';

import * as S from './styled';
import { COMMUTE_METHOD, COMMUTE_TIME } from '../../constants/commute';

export default function Home() {
  const id = useId();
  const commuteTimeOptions = COMMUTE_TIME;
  const v = COMMUTE_METHOD;

  const [selectedCommuteTime, setSelectedCommuteTime] = useState<number>(
    commuteTimeOptions[2].value,
  );
  const [selectedMethod, setSelectedMethod] = useState<string>('');

  const commuteMethodHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <div>
      <Header>
        <HeaderLogo>동그리미</HeaderLogo>
      </Header>
      <S.Main>
        <S.HomeContainer>
          <AboutService />

          <S.CommuteTime>
            <div className={'commute-time-wrapper'}>
              <div className={'select-time-title'}>
                통근 시간
                <S.CommuteTimeSelect
                  instanceId={id}
                  classNamePrefix="CommuteTimeSelect"
                  defaultValue={commuteTimeOptions[2]}
                  options={commuteTimeOptions}
                  isSearchable={false}
                  onChange={event => {
                    setSelectedCommuteTime(event.value);
                  }}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                />
                이내
              </div>
              <div>살기 좋은 동네 찾기</div>
            </div>
          </S.CommuteTime>
          <S.CommuteMethodGroup>
            <label htmlFor={useId()}>
              <S.CommuteMethod
                id={useId()}
                type="radio"
                name="commuteMethod"
                value="방법1"
                checked={selectedMethod === '방법1'}
                onChange={commuteMethodHandler}
              />
              방법 1
            </label>
            <label htmlFor={useId()}>
              <S.CommuteMethod
                id={useId()}
                type="radio"
                name="commuteMethod"
                value="방법2"
                checked={selectedMethod === '방법2'}
                onChange={commuteMethodHandler}
              />
              방법 2
            </label>
            <label htmlFor={useId()}>
              <S.CommuteMethod
                id={useId()}
                type="radio"
                name="commuteMethod"
                value="방법3"
                checked={selectedMethod === '방법3'}
                onChange={commuteMethodHandler}
              />
              방법 3
            </label>
          </S.CommuteMethodGroup>
        </S.HomeContainer>
      </S.Main>
      <S.HomeFooter>
        <Button>검색하기</Button>
      </S.HomeFooter>
    </div>
  );
}
