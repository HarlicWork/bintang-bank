import { useAppSelector } from '@bintang-bank/entities/store/hooks';
import { SafeScreen } from '@bintang-bank/shared';
import { NavigationContainer } from '@react-navigation/native';
import ConnectionErrorPage from '../connection-error-page/ConnectionErrorPage';
import { useNetworkStatus } from '../connection-error-page/lib/useNetworkStatus';
import AuthNavigator from './auth-navigator/AuthNavigator';
import NonAuthNavigator from './non-auth-navigator/NonAuthNavigator';

/* eslint-disable-next-line */
export interface AppNavigatorProps {}

export function AppNavigator(props: AppNavigatorProps) {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const { networkStatus } = useNetworkStatus();

  if (!networkStatus) {
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
