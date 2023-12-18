import { SafeScreen } from '@bintang-bank/shared';

import { Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Icon from 'react-native-vector-icons/FontAwesome';

/* eslint-disable-next-line */
export interface DashboardPageProps {}

export function DashboardPage(props: DashboardPageProps) {
  const { styles } = useStyles(stylesheet);
  return (
    <SafeScreen style={styles.container}>
      <Text>Welcome to DashboardPage!</Text>
      <Icon name="rocket" size={30} color="#900" />
    </SafeScreen>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default DashboardPage;
