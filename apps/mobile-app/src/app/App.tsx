import '@bintang-bank/shared/styles/unistyles';
import React from 'react';

import { SomethingWrongPage, AppNavigator } from '@bintang-bank/pages';
import { persistor, store } from '@bintang-bank/entities/store/store';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={<SomethingWrongPage />} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AppNavigator />
        </GestureHandlerRootView>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
