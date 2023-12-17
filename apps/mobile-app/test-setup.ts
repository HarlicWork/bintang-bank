import '@testing-library/jest-native/extend-expect';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn(),
  Navigator: jest.fn(),
  Stack: jest.fn(),
}));

jest.mock('react-native-unistyles', () => {
  const createStyleSheet = () => ({
    create: jest.fn(),
  });

  const breakpoints = {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1280,
  };

  const lightTheme = {
    colors: {
      primary: '#000',
      secondary: '#fff',
    },
  };

  const darkTheme = {
    colors: {
      primary: '#fff',
      secondary: '#000',
    },
  };

  return {
    UnistylesRegistry: {
      addBreakpoints: jest.fn().mockReturnThis(),
      addThemes: jest.fn().mockReturnThis(),
      addConfig: jest.fn().mockReturnThis(),
    },
    breakpoints,
    lightTheme,
    darkTheme,
    createStyleSheet,
  };
});

jest.mock('i18n-js', () => ({
  I18n: jest.fn().mockImplementation((key: string) => key),
}));

jest.mock('react-native-localize', () => ({
  getLocales: jest.fn().mockReturnValue([
    {
      countryCode: 'US',
      languageTag: 'en-US',
      languageCode: 'en',
      isRTL: false,
    },
  ]),
  findBestAvailableLanguage: jest
    .fn()
    .mockReturnValue({ languageTag: 'en-US' }),
  getNumberFormatSettings: jest.fn(),
  getCalendar: jest.fn(),
  getCountry: jest.fn(),
  getCurrencies: jest.fn(),
  getTemperatureUnit: jest.fn(),
  getTimeZone: jest.fn(),
  uses24HourClock: jest.fn(),
  usesMetricSystem: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

jest.mock('@react-native-community/netinfo', () => ({
  useNetInfo: jest.fn().mockReturnValue({
    type: 'wifi',
    isConnected: true,
    isInternetReachable: true,
    details: {
      isConnectionExpensive: false,
      cellularGeneration: '5g',
    },
  }),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('redux-persist/es/stateReconciler/autoMergeLevel2', () => ({
  default: jest.fn(),
}));

jest.mock('react-native-mmkv-flipper-plugin', () => 'MMKVStorage');
