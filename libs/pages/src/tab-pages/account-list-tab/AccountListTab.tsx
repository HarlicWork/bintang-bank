import React from 'react';

import { View, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface AccountListTabProps {}

export function AccountListTab(props: AccountListTabProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text>Welcome to AccountListTab!</Text>
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
}));

export default AccountListTab;
