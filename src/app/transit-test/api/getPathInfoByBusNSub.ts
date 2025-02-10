import axios from 'axios';

interface Props {
  startX: string | undefined;
  startY: string | undefined;
  endX: string | undefined;
  endY: string | undefined;
}

const getPathInfoByBusNSub = async ({ startX, startY, endX, endY }: Props) => {
  try {
    const response = await axios.get('/pathinfo/getPathInfoByBusNSub', {
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

export default getPathInfoByBusNSub;
