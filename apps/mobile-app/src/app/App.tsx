import '@bintang-bank/shared/styles/unistyles';
import React from 'react';

import { SomethingWrongPage } from '@bintang-bank/pages';
import { persistor, store } from '@bintang-bank/shared';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from '../navigators/AppNavigator';

export const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={<SomethingWrongPage />} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
