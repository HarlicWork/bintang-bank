import { Typo } from '@bintang-bank/shared';

import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface CommonHeaderWidgetProps {
  headerTitle: string;
}

export function CommonHeaderWidget({ headerTitle }: CommonHeaderWidgetProps) {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Typo text={headerTitle} preset="h2" />
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
}));

export default CommonHeaderWidget;
