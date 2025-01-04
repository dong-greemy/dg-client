import { useRouter } from 'next/navigation';
import * as React from 'react';

import { HighlightText } from 'components/HighlightText';
import CloseIcon from 'svg/close-icon-item.svg';

import * as S from './styled';

interface SearchPlaceItemProps {
  placeName: string;
  address: string;
  searchValue: string;
  isClose?: boolean;
}

export const SearchPlaceItem = ({
  placeName,
  address,
  searchValue,
  isClose = false,
}: SearchPlaceItemProps) => {
  const router = useRouter();
  const parsedTitle = placeName.replace(/<\/?b>/gi, '');

  return (
    <S.SearchItem
      onClick={() => {
        router.push(`/?place=${encodeURIComponent(parsedTitle)}`);
      }}
    >
      <S.SearchItemContent $isClose={isClose}>
        <div className={'title'}>
          <HighlightText searchValue={searchValue} text={parsedTitle} />
        </div>
        <div className={'address'}>{address}</div>
      </S.SearchItemContent>
      {isClose && (
        <S.CloseIcon>
          <CloseIcon />
        </S.CloseIcon>
      )}
    </S.SearchItem>
  );
};
