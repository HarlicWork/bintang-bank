import { useEffect, useState } from 'react';

import NetInfo from '@react-native-community/netinfo';
import { useStyles } from 'react-native-unistyles';

export const useNetworkStatus = () => {
  const { theme } = useStyles();
  const [networkStatus, setNetworkStatus] = useState<boolean | null>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetworkStatus(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, [theme.colors.error, theme.colors.primary]);

  return { networkStatus };
};
