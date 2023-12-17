import React from 'react';

import { View, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import assets from '@bintang-bank/assets';
import { Image, LoadingIndicator } from '@bintang-bank/shared';

/* eslint-disable-next-line */
export interface StartupPageProps {}

export function StartupPage(props: StartupPageProps) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            source={assets.bankLogo}
            customStyles={styles.imageStyles}
            resizeMode="cover"
          />
          <LoadingIndicator size="small" color="#818FB4" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363062',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyles: {
    width: 200,
    height: 150,
  },
});

export default StartupPage;
