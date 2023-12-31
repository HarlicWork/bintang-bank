import DeviceInfo from 'react-native-device-info';

export const useDeviceInfo = () => {
  const buildNumber = DeviceInfo.getBuildNumber();
  const systemName = DeviceInfo.getSystemName();
  const systemVersion = DeviceInfo.getSystemVersion();

  return { buildNumber, systemName, systemVersion };
};
