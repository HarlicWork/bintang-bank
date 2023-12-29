import { AppRoutes, RootStackParamList } from '@bintang-bank/shared';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../../login-page/LoginPage';
import SomethingWrongPage from '../../something-wrong-page/SomethingWrongPage';
import StartupPage from '../../startup-page/StartupPage';

const Stack = createNativeStackNavigator<RootStackParamList>();

/* eslint-disable-next-line */
export interface NonAuthNavigatorProps {}

export function NonAuthNavigator(props: NonAuthNavigatorProps) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name={AppRoutes.Startup} component={StartupPage} />
        <Stack.Screen name={AppRoutes.Login} component={LoginPage} />
        <Stack.Screen
          name={AppRoutes.SomethingWrong}
          component={SomethingWrongPage}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default NonAuthNavigator;
