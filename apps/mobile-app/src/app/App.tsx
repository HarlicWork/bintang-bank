import '@bintang-bank/shared/styles/unistyles';
import React from 'react';

import { StartupPage } from '@bintang-bank/pages';
import { LocalizationProvider } from '@bintang-bank/shared';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes } from '../routers/app-routes';
import { RootStackParamList } from '../routers/root-stack-param-list.type';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App = () => {
  return (
    <LocalizationProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={AppRoutes.Startup}
            component={StartupPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LocalizationProvider>
  );
};

export default App;
