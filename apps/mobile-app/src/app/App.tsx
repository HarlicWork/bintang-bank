import '@bintang-bank/shared/styles/unistyles';
import React from 'react';

import { persistor, store } from '@bintang-bank/entities/store/store';
import { AppNavigator, SomethingWrongPage } from '@bintang-bank/pages';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={<SomethingWrongPage />} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <AppNavigator />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
