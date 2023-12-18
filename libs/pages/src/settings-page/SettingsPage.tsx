import { SafeScreen } from '@bintang-bank/shared';

import { Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface SettingsPageProps {}

export function SettingsPage(props: SettingsPageProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeScreen style={styles.container}>
      <Text>Welcome to SettingsPage!</Text>
    </SafeScreen>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default SettingsPage;
