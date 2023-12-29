import { useModalService } from '@bintang-bank/entities';
import { AccountSelectionModal } from '@bintang-bank/features';
import { Button, SafeScreen, Typo } from '@bintang-bank/shared';
import { useTranslation } from 'react-i18next';

import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface AccountsPageProps {}

export function AccountsPage(props: AccountsPageProps) {
  const { styles, theme } = useStyles(stylesheet);
  const { t } = useTranslation(['common', 'accounts']);

  const { accountSelectionSheetRef } = useModalService();

  const openAccountSelectionModal = () => {
    accountSelectionSheetRef.current?.openModal();
  };

  return (
    <SafeScreen style={styles.container}>
      <View style={styles.container}>
        <Typo
          screen={['accounts']}
          text="greetings"
          color={theme.colors.primary}
          preset="h3"
        />
        <Button
          onPress={() => openAccountSelectionModal()}
          title={`${t('accounts:change_accounts')}`}
        />
      </View>
      <AccountSelectionModal ref={accountSelectionSheetRef} />
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
