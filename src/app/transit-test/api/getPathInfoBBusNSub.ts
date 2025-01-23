import axios from 'axios';

interface Props {
  startX: string;
  startY: string;
  endX: string;
  endY: string;
}

const getLocationInfoList = async ({ startX, startY, endX, endY }: Props) => {
  try {
    const response = await axios.get('/pathinfo/getLocationInfo', {
      params: {
        serviceKey: process.env.NEXT_PUBLIC_TRANSIT_DECODE_KEY,
        startX,
        startY,
        endX,
        endY,
        resultType: 'json',
      },
    });

    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export default getLocationInfoList;
