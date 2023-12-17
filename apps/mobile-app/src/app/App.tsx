/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import assets from '@bintang-bank/assets';
import { Image } from '@bintang-bank/shared';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={assets.bankLogo} customStyles={styles.imageStyles} />
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyles: {
    width: 200,
    height: 200,
  },
});

export default App;
