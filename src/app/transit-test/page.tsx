'use client';
import { useState } from 'react';

import useLocationInfo from './hooks/useLocationInfo';

const Page = () => {
  const [search, setSearch] = useState('');
  const { mutate, data } = useLocationInfo();
  return (
    <>
      <h1>Get API Test</h1>
      <input type="text" id="search" onChange={e => setSearch(e.target.value)} />
      <button onClick={() => mutate({ stSrch: search })}>가져오기</button>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default Page;
