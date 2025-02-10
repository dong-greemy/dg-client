'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';

import SearchModule from './components/SearchModule';
import usePathInfoByBusNSub from './hooks/usePathInfoByBusNSub';

const Container = styled.div`
  display: flex;
  gap: 50px;
  padding-top: 10px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: solid;
  padding: 10px;
`;

const GetButton = styled.button`
  width: 200px;
  padding: 8px;
`;

const ResetButton = styled.button`
  width: fit-content;
  padding: 3px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

interface posItem {
  poiId: number;
  poiNm: string;
  gpsX: string;
  gpsY: string;
  posX: string;
  posY: string;
}

interface pathItem {
  fid: string;
  fname: string;
  fx: string;
  fy: string;
  railLinkList: [] | null;
  routeId: string;
  routeNm: string;
  tid: string;
  tname: string;
  tx: string;
  ty: string;
}

interface pathGroup {
  distance: string;
  pathList: pathItem[];
  time: string;
}
const Page = () => {
  const [from, setFrom] = useState<posItem | null>(null);
  const [to, setTo] = useState<posItem | null>(null);

  const [pathList, setPathList] = useState<pathGroup[] | []>([]);
  const { mutate, data } = usePathInfoByBusNSub();

  useEffect(() => {
    setPathList(data?.msgBody?.itemList);
    console.log(data?.msgBody?.itemList);
  }, [data]);

  const clickGetDir = () => {
    mutate({
      startX: from?.gpsX,
      startY: from?.gpsY,
      endX: to?.gpsX,
      endY: to?.gpsY,
    });
  };

  const calculateTime = (time: string): string => {
    const num = parseInt(time, 10);
    const hour = Math.floor(num / 60);
    const min = num % 60;

    return hour > 0 ? `${hour}시간 ${min}분` : `${min}분`;
  };

  const generateDistance = (distance: string): string => {
    const num = parseInt(distance, 10);
    const km = (num / 1000).toFixed(1);
    const meter = num % 1000;

    return parseFloat(km) > 0 ? `${km} km` : `${meter} m`;
  };

  return (
    <>
      <h1 className="pl-10px">Get API Test</h1>
      <Container>
        <ItemContainer>
          <SearchModule searchTitle="From" setFn={setFrom} />
          <SearchModule searchTitle="To" setFn={setTo} />
        </ItemContainer>
        <ItemContainer>
          <h3>Get Direction</h3>
          <Row>
            <h4>Selected From: {from?.poiNm}</h4>
            {from && <ResetButton onClick={() => setFrom(null)}>reset</ResetButton>}
          </Row>
          <Row>
            <h4>Selected To: {to?.poiNm}</h4>
            {to && <ResetButton onClick={() => setTo(null)}>reset</ResetButton>}
          </Row>
          {to && from && (
            <GetButton onClick={clickGetDir} disabled={!(to && from)}>
              Get Direction
            </GetButton>
          )}
          {pathList?.map((item: pathGroup, idx) => (
            <div key={idx}>
              <Row>
                <p>시간: {calculateTime(item.time)}, </p>
                <p>거리: {generateDistance(item.distance)}</p>
              </Row>

              {item.pathList.map((path: pathItem, idx) => (
                <div key={idx}>
                  <Row>
                    <p>{idx + 1})</p>
                    <p>
                      승차: {path.fname}
                      {`=>`}
                    </p>
                    <p>하차: {path.tname}</p>
                  </Row>
                </div>
              ))}
            </div>
          ))}
        </ItemContainer>
      </Container>
    </>
  );
};

export default Page;
