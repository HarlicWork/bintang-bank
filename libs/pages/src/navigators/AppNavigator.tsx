import { useAppSelector } from '@bintang-bank/entities/store/hooks';
import { SafeScreen } from '@bintang-bank/shared';
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Snackbar from 'react-native-snackbar';
import { useStyles } from 'react-native-unistyles';
import ConnectionErrorPage from '../connection-error-page/ConnectionErrorPage';
import { useNetworkStatus } from '../connection-error-page/lib/useNetworkStatus';
import AuthNavigator from './auth-navigator/AuthNavigator';
import NonAuthNavigator from './non-auth-navigator/NonAuthNavigator';

/* eslint-disable-next-line */
export interface AppNavigatorProps {}

export function AppNavigator(props: AppNavigatorProps) {
  const { theme } = useStyles();
  const { t } = useTranslation(['common']);
  const { isOnline } = useNetworkStatus();

  const isAuth = useAppSelector((state) => state.auth.isAuth);

  if (isOnline === false || null) {
    Snackbar.show({
      text: `${t('common:common.internetConnectionError')}`,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: theme.colors.error,
    });

    return (
      <SafeScreen
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ConnectionErrorPage />
      </SafeScreen>
    );
  }

  return (
    <NavigationContainer>
      {isAuth ? <AuthNavigator /> : <NonAuthNavigator />}
    </NavigationContainer>
  );
}

export default AppNavigator;
