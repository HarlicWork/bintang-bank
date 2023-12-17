import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface SafeScreenProps {
  children: React.ReactNode;
}

export function SafeScreen({ children }: SafeScreenProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={
          UnistylesRuntime.colorScheme === 'dark'
            ? 'light-content'
            : 'dark-content'
        }
      />
      {children}
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
}));

export default SafeScreen;
