import { AppRoutes } from '@bintang-bank/shared';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../../login-page/LoginPage';
import SomethingWrongPage from '../../something-wrong-page/SomethingWrongPage';
import StartupPage from '../../startup-page/StartupPage';

const Stack = createNativeStackNavigator();

/* eslint-disable-next-line */
export interface NonAuthNavigatorProps {}

export function NonAuthNavigator(props: NonAuthNavigatorProps) {
  const screens = [
    {
      name: AppRoutes.Startup,
      component: StartupPage,
    },
    {
      name: AppRoutes.Login,
      component: LoginPage,
    },
    {
      name: AppRoutes.SomethingWrong,
      component: SomethingWrongPage,
    },
  ] as const;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        {screens.map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default NonAuthNavigator;
