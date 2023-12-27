import React from 'react';
import { StatusBar, StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
  edges?: ['top' | 'right' | 'bottom' | 'left'] | undefined;
}

export function SafeScreen({
  children,
  customBgColor,
  style = {},
  edges = undefined,
}: SafeScreenProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <SafeAreaView style={styles.container(customBgColor, style)} edges={edges}>
      <StatusBar
        backgroundColor={theme.colors.background}
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
