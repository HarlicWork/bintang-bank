import { SafeScreen, Typo } from '@bintang-bank/shared';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { useModalService } from '@bintang-bank/entities';
import { ProfileMenuModal } from '@bintang-bank/features';
import { CommonHeaderPrimaryWidget } from '@bintang-bank/widgets';
import { View } from 'react-native';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  const { styles, theme } = useStyles(stylesheet);
  const { profileMenuSheetRef } = useModalService();

  const openProfileMenuModal = () => {
    profileMenuSheetRef.current?.present();
  };

  return (
    <SafeScreen>
      <CommonHeaderPrimaryWidget onPress={openProfileMenuModal} />
      <View style={styles.container}>
        <Typo
          screen={['home']}
          text="greetings"
          color={theme.colors.primary}
          preset="h3"
        />
      </View>
      <ProfileMenuModal ref={profileMenuSheetRef} />
    </SafeScreen>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default HomePage;
