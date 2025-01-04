import { useState } from 'react';

import { PlaceReqType } from 'apis/searchPlace';
import { useDebounce } from 'hooks/useDebounce';
import BackIcon from 'svg/back-icon.svg';
import ClearIcon from 'svg/clear-icon.svg';

import * as S from './styled';

export const SearchBar = ({
  searchGoogle,
  onClear,
  onTextChange,
}: {
  searchGoogle: (searchData: PlaceReqType) => void;
  onClear: () => void;
  onTextChange: (value: string) => void;
}) => {
  const [text, setText] = useState<string>('');

  const debouncedSearch = useDebounce((value: string) => {
    searchGoogle({ text: value, display: 15 });
  }, 300);

  const handleSearch = (value: string) => {
    setText(value);

    if (!value) {
      onClear();
      return;
    }

    setText(value);
    onTextChange(value);
    debouncedSearch(value);
  };

  return (
    <S.SearchBar>
      <S.SearchBack onClick={() => history.back()}>
        <BackIcon />
      </S.SearchBack>
      <S.SearchInput
        value={text}
        onChange={e => handleSearch(e.target.value)}
        placeholder={'지하철 역, 장소 검색'}
      />
      <S.SearchClear
        onClick={() => {
          onClear();
          setText('');
        }}
      >
        <ClearIcon />
      </S.SearchClear>
    </S.SearchBar>
  );
};
