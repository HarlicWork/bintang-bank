import React from 'react';
import { SafeAreaView, StatusBar, StyleProp, ViewStyle } from 'react-native';

import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface SafeScreenProps {
  children: React.ReactNode;
  customBgColor?: string;
  style?: StyleProp<ViewStyle>;
}

export function SafeScreen({
  children,
  customBgColor,
  style = {},
}: SafeScreenProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaView style={styles.container(customBgColor, style)}>
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
  container: (customBgColor, customStyles) => ({
    flex: 1,
    backgroundColor: customBgColor ? customBgColor : colors.background,
    ...customStyles,
  }),
}));

export default SafeScreen;
