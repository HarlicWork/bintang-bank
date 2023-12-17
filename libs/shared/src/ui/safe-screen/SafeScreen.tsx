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
  customBgColor?: string;
}

export function SafeScreen({ children, customBgColor }: SafeScreenProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaView style={styles.container(customBgColor)}>
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
  container: (customBgColor) => ({
    flex: 1,
    backgroundColor: customBgColor ? customBgColor : colors.background,
  }),
}));

export default SafeScreen;
