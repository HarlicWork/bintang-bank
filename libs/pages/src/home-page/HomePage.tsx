import { useModalService } from '@bintang-bank/entities';
import { ProfileMenuModal } from '@bintang-bank/features';
import { SafeScreen, screenHeight } from '@bintang-bank/shared';
import {
  CommonHeaderPrimaryWidget,
  PromotionCardWidget,
  TotalAccountDetailWidget,
} from '@bintang-bank/widgets';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  const { styles } = useStyles(stylesheet);
  const { profileMenuSheetRef } = useModalService();

  const openProfileMenuModal = () => {
    profileMenuSheetRef.current?.present();
  };

  return (
    <SafeScreen edges={['top']}>
      <CommonHeaderPrimaryWidget onPress={openProfileMenuModal} />
      <View style={styles.container}>
        <View style={styles.accountInfoContainer}>
          <TotalAccountDetailWidget />
        </View>
        <View style={styles.promoContainer}>
          <PromotionCardWidget />
        </View>
      </View>
      <ProfileMenuModal ref={profileMenuSheetRef} />
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
