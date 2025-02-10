import { useMutation } from '@tanstack/react-query';

import getLocationInfoList from '../api/getLocationInfoList';

const useLocationInfo = () => {
  return useMutation({
    mutationFn: getLocationInfoList,
    onError: error => console.error(error),
    onSuccess: success => console.log(success),
  });
};

export default useLocationInfo;
