import { useAuth } from '@bintang-bank/entities';
import { Typo } from '@bintang-bank/shared';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { forwardRef, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type Ref = BottomSheetModal;

/* eslint-disable-next-line */
export interface ProfileMenuModalProps {}

export const ProfileMenuModal = forwardRef<Ref, ProfileMenuModalProps>(
  (props, ref) => {
    const { styles } = useStyles(stylesheet);
    const { logoutUser } = useAuth();
    const { i18n } = useTranslation();

    const snapPoints = useMemo(() => ['50%', '70%'], []);

    const renderBackdrop = useCallback(
      (props: BottomSheetDefaultBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={1}
        />
      ),
      []
    );

    const onLogoutPress = () => {
      logoutUser();
    };

    const onChangeLanguagePress = () => {
      i18n.changeLanguage(i18n.language === 'en' ? 'my' : 'en');
    };

    return (
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={styles.modalBackground}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles.container}>
          <TouchableOpacity onPress={onLogoutPress}>
            <Typo screen={['common']} text="common.logout" preset="h3" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onChangeLanguagePress}>
            <Typo
              screen={['common']}
              text="common.changeLanguage"
              preset="h3"
            />
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  modalBackground: {
    backgroundColor: colors.onPrimary,
  },
}));

export default ProfileMenuModal;
