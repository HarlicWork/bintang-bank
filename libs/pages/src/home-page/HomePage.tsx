import { SafeScreen, Typo } from '@bintang-bank/shared';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { ProfileMenuModal } from '@bintang-bank/features';
import { CommonHeaderPrimaryWidget } from '@bintang-bank/widgets';
import { BottomSheetModal as BottomSheetModalType } from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { View } from 'react-native';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  const { styles, theme } = useStyles(stylesheet);

  const bottomSheetModalRef = useRef<BottomSheetModalType>(null);

  const openBottomSheetModal = () => {
    bottomSheetModalRef.current?.present();
  };

  return (
    <SafeScreen>
      <CommonHeaderPrimaryWidget onPress={openBottomSheetModal} />
      <View style={styles.container}>
        <Typo
          screen={['home']}
          text="greetings"
          color={theme.colors.primary}
          preset="h3"
        />
      </View>
      <ProfileMenuModal ref={bottomSheetModalRef} />
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
