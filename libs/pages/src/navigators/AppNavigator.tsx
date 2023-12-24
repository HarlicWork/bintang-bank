import { useAppSelector } from '@bintang-bank/entities/store/hooks';
import { AppRoutes, RootStackParamList } from '@bintang-bank/shared';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../login-page/LoginPage';
import { SomethingWrongPage } from '../something-wrong-page/SomethingWrongPage';
import { StartupPage } from '../startup-page/StartupPage';
import DashboardNavigator from './dashboard-navigator/DashboardNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

/* eslint-disable-next-line */
export interface AppNavigatorProps {}

export function AppNavigator(props: AppNavigatorProps) {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return (
    <NavigationContainer>
      {isAuth ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name={AppRoutes.Dashboard}
            component={DashboardNavigator}
          />
          <Stack.Screen
            name={AppRoutes.SomethingWrong}
            component={SomethingWrongPage}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={AppRoutes.Startup} component={StartupPage} />
          <Stack.Screen name={AppRoutes.Login} component={LoginPage} />
          <Stack.Screen
            name={AppRoutes.Dashboard}
            component={DashboardNavigator}
          />
          <Stack.Screen
            name={AppRoutes.SomethingWrong}
            component={SomethingWrongPage}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppNavigator;
