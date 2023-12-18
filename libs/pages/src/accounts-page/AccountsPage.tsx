import { SafeScreen, Typo } from '@bintang-bank/shared';

import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface AccountsPageProps {}

export function AccountsPage(props: AccountsPageProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <SafeScreen style={styles.container}>
      <View style={styles.container}>
        <Typo
          screen={['accounts']}
          text="greetings"
          color={theme.colors.onTypography}
          preset="h3"
        />
      </View>
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
