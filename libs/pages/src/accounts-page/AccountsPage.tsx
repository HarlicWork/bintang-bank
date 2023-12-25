import {
  AppRoutes,
  Button,
  RootStackParamList,
  SafeScreen,
  Typo,
} from '@bintang-bank/shared';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface AccountsPageProps {}

export function AccountsPage(props: AccountsPageProps) {
  const { styles, theme } = useStyles(stylesheet);
  const { t } = useTranslation(['common', 'accounts']);
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeScreen style={styles.container}>
      <View style={styles.container}>
        <Typo
          onPress={() => navigate(AppRoutes.GeneralModal)}
          screen={['accounts']}
          text="greetings"
          color={theme.colors.primary}
          preset="h3"
        />
        <Button
          onPress={() => navigate(AppRoutes.GeneralModal)}
          title={`${t('accounts:change_accounts')}`}
        />
      </View>
    </SafeScreen>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
}));

export default AccountsPage;
