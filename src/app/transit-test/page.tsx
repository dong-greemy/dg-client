'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import useLocationInfo from './hooks/useLocationInfo';

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

const Page = () => {
  const [search, setSearch] = useState('');
  const [itemList, setItemList] = useState([]);
  const { mutate, data } = useLocationInfo();

  useEffect(() => {
    setItemList(data?.msgBody?.itemList);
    console.log(data?.msgBody?.itemList);
  }, [data]);

  // const positionClick = () => {};

  return (
    <Container>
      <h1 className="pl-10px">Get API Test</h1>
      <InputContainer>
        <h3>Start: </h3>
        <input type="text" id="search" onChange={e => setSearch(e.target.value)} />
        <button onClick={() => mutate({ stSrch: search })}>가져오기</button>
      </InputContainer>
      <ItemContainer>
        {itemList?.map((item: posItem) => <PosButton key={item.poiId}>{item.poiNm}</PosButton>)}
      </ItemContainer>
    </Container>
  );
};

export default Page;
