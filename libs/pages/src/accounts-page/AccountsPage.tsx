import { SafeScreen } from '@bintang-bank/shared';

import { Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface AccountsPageProps {}

export function AccountsPage(props: AccountsPageProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeScreen style={styles.container}>
      <Text>Welcome to AccountsPage!</Text>
    </SafeScreen>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default AccountsPage;
