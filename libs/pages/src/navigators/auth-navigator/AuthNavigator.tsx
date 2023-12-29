import { useAppSelector } from '@bintang-bank/entities/store/hooks';
import { AppRoutes, RootStackParamList } from '@bintang-bank/shared';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateDisplayNamePage from '../../create-display-name/CreateDisplayNamePage';
import GeneralModalPage from '../../modal-pages/general-modal-page/GeneralModalPage';
import SomethingWrongPage from '../../something-wrong-page/SomethingWrongPage';
import DashboardNavigator from '../dashboard-navigator/DashboardNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

/* eslint-disable-next-line */
export interface AuthNavigatorProps {}

export function AuthNavigator(props: AuthNavigatorProps) {
  const isDisplayNameSet = useAppSelector((state) => state.user.displayName);

  const screens = [
    {
      name: AppRoutes.Dashboard,
      component: DashboardNavigator,
    },
    {
      name: AppRoutes.SomethingWrong,
      component: SomethingWrongPage,
    },
  ] as const;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        {isDisplayNameSet === null && (
          <Stack.Screen
            name={AppRoutes.CreateDisplayName}
            component={CreateDisplayNamePage}
          />
        )}
        {screens.map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'card',
        }}
      >
        <Stack.Screen
          name={AppRoutes.GeneralModal}
          component={GeneralModalPage}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default AuthNavigator;
