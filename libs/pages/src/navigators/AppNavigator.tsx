import { useAppSelector } from '@bintang-bank/entities/store/hooks';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './auth-navigator/AuthNavigator';
import NonAuthNavigator from './non-auth-navigator/NonAuthNavigator';

/* eslint-disable-next-line */
export interface AppNavigatorProps {}

export function AppNavigator(props: AppNavigatorProps) {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return (
    <NavigationContainer>
      {isAuth ? <AuthNavigator /> : <NonAuthNavigator />}
    </NavigationContainer>
  );
}

export default AppNavigator;
