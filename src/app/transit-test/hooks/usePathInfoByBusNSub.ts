import { useMutation } from '@tanstack/react-query';

import getPathInfoByBusNSub from '../api/getPathInfoByBusNSub';

const usePathInfoByBusNSub = () => {
  return useMutation({
    mutationFn: getPathInfoByBusNSub,
    onError: error => console.error(error),
    onSuccess: success => console.log(success),
  });
};

export default usePathInfoByBusNSub;
