import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const useAsyncDeviceInfo = () => {
  const [deviceName, setDeviceName] = useState<string>('');
  const [deviceUID, setDeviceUID] = useState<string>('');

  const getDeviceName = async () => {
    try {
      const userDeviceName = await DeviceInfo.getDeviceName();
      setDeviceName(userDeviceName);
    } catch (error: unknown) {
      console.error('An error occurred:', error);
      throw error;
    }
  };

  const getUniqueId = async () => {
    let uid = '';

    try {
      if (Platform.OS === 'ios') {
        uid = await DeviceInfo.syncUniqueId();
      } else {
        uid = await DeviceInfo.getUniqueId();
      }

      setDeviceUID(uid);
    } catch (error: unknown) {
      console.error('An error occurred:', error);
      throw error;
    }
  };

  useEffect(() => {
    getUniqueId();
    getDeviceName();
  }, []);

  return {
    deviceName,
    deviceUID,
  };
};
