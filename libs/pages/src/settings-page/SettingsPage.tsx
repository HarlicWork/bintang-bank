import { useModalService } from '@bintang-bank/entities';
import {
  AccountSelectionModal,
  ProfileMenuModal,
} from '@bintang-bank/features';
import { AppRoutes, SafeScreen, Typo } from '@bintang-bank/shared';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';

import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface SettingsPageProps {}

export function SettingsPage(props: SettingsPageProps) {
  const { styles, theme } = useStyles(stylesheet);
  const { dismiss } = useBottomSheetModal();

  const {
    accountSelectionSheetRef,
    openAccountSelectionModal,
    profileMenuSheetRef,
    openProfileMenuModal,
  } = useModalService();

  return (
    <SafeScreen style={styles.container}>
      <View style={styles.container}>
        <Typo
          onPress={openAccountSelectionModal}
          color={theme.colors.primary}
          preset="h3"
        >
          Open Account Selection Modal
        </Typo>
        <Typo
          onPress={openProfileMenuModal}
          color={theme.colors.primary}
          preset="h3"
        >
          Open Profile Menu Modal
        </Typo>
      </View>
      <AccountSelectionModal ref={accountSelectionSheetRef} />
      <ProfileMenuModal
        ref={profileMenuSheetRef}
        onClosed={() => dismiss(AppRoutes.ProfileMenuModal)}
      />
    </SafeScreen>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
}));

export default SettingsPage;
