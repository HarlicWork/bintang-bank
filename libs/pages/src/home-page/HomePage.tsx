import { SafeScreen } from '@bintang-bank/shared';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Text } from 'react-native';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeScreen style={styles.container}>
      <Text>Welcome to HomePage!</Text>
    </SafeScreen>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default HomePage;
