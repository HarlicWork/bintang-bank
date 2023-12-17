import '@bintang-bank/shared/styles/unistyles';
import React from 'react';

import { LocalizationProvider, store } from '@bintang-bank/shared';
import { NavigationContainer } from '@react-navigation/native';

import { Provider as StoreProvider } from 'react-redux';
import AppNavigator from '../routers/stackNavigators/app/AppNavigator';

export const App = () => {
  return (
    <StoreProvider store={store}>
      <LocalizationProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </LocalizationProvider>
    </StoreProvider>
  );
};

export default App;
