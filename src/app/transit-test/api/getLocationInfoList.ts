import axios from 'axios';

interface Props {
  stSrch: string;
}

const getLocationInfoList = async ({ stSrch }: Props) => {
  try {
    const response = await axios.get('/pathinfo/getLocationInfo', {
      params: {
        serviceKey: process.env.NEXT_PUBLIC_TRANSIT_SEOUL_KEY,
        stSrch,
        resultType: 'json',
      },
    });

    console.log('Response:', response);

    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export default getLocationInfoList;
