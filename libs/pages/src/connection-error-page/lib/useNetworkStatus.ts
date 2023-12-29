import { useEffect, useState } from 'react';

import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';
import { useStyles } from 'react-native-unistyles';

export const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState<boolean | null>(true);
  const { theme } = useStyles();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetworkStatus(state.isConnected);

      if (!state.isConnected) {
        Snackbar.show({
          text: 'Network Error',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: theme.colors.error,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [theme.colors.error, theme.colors.primary]);

  return { networkStatus };
};
