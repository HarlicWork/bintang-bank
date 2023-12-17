import '@bintang-bank/shared/styles/unistyles';
import React from 'react';

import { LocalizationProvider, store } from '@bintang-bank/shared';

import { Provider as StoreProvider } from 'react-redux';
import AppNavigator from '../navigators/AppNavigator';

export const App = () => {
  return (
    <StoreProvider store={store}>
      <LocalizationProvider>
        <AppNavigator />
      </LocalizationProvider>
    </StoreProvider>
  );
};

export default App;
