'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';

import useLocationInfo from '../../hooks/useLocationInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 8px;
  height: 30px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px;
  height: 300px;
  overflow: auto;
  width: 220px;
`;

const PosButton = styled.button`
  width: 200px;
  padding: 8px;
`;

interface posItem {
  poiId: number;
  poiNm: string;
  gpsX: string;
  gpsY: string;
  posX: string;
  posY: string;
}

interface Props {
  searchTitle: string;
  setFn: React.Dispatch<React.SetStateAction<posItem | null>>;
}

const SearchModule = ({ searchTitle, setFn }: Props) => {
  const [search, setSearch] = useState('');
  const [itemList, setItemList] = useState([]);
  const { mutate, data } = useLocationInfo();

  useEffect(() => {
    setItemList(data?.msgBody?.itemList);
    console.log(data?.msgBody?.itemList);
  }, [data]);

  return (
    <Container>
      <InputContainer>
        <h3>{searchTitle}: </h3>
        <input type="text" id="search" onChange={e => setSearch(e.target.value)} />
        <button onClick={() => mutate({ stSrch: search })}>가져오기</button>
      </InputContainer>
      <h4>search total: {itemList?.length}</h4>
      <ItemContainer>
        {itemList?.map((item: posItem) => (
          <PosButton key={item.poiId} onClick={() => setFn(item)}>
            {item.poiNm}
          </PosButton>
        ))}
      </ItemContainer>
    </Container>
  );
};

export default SearchModule;
