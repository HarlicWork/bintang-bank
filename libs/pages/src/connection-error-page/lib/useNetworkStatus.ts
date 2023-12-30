import NetInfo from '@react-native-community/netinfo';
import { useState, useSyncExternalStore } from 'react';

export const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState<boolean | null>(null);

  const subscribeNetworkStatus = () => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetworkStatus(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  };

  const getSnapshot = () => {
    return networkStatus;
  };

  const isOnline = useSyncExternalStore(subscribeNetworkStatus, getSnapshot);

  return { isOnline };
};
