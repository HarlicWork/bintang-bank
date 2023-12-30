import { ProfileMenuModal } from '@bintang-bank/features';
import {
  AppRoutes,
  ModalContextRef,
  SafeScreen,
  screenHeight,
} from '@bintang-bank/shared';
import {
  CommonHeaderPrimaryWidget,
  PromotionCardWidget,
  TotalAccountDetailWidget,
} from '@bintang-bank/widgets';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import { useContext } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  const { styles } = useStyles(stylesheet);
  const { dismiss } = useBottomSheetModal();

  const { profileMenuSheetRef } = useContext(ModalContextRef);

  return (
    <SafeScreen edges={['top']}>
      <CommonHeaderPrimaryWidget />
      <View style={styles.container}>
        <View style={styles.accountInfoContainer}>
          <TotalAccountDetailWidget />
        </View>
        <View style={styles.promoContainer}>
          <PromotionCardWidget />
        </View>
      </View>
      <ProfileMenuModal
        ref={profileMenuSheetRef}
        onClosed={() => dismiss(AppRoutes.ProfileMenuModal)}
      />
    </SafeScreen>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  accountInfoContainer: {
    height: screenHeight * 0.2,
    justifyContent: 'center',
  },
  promoContainer: {
    flex: 1,
  },
}));

export default HomePage;
