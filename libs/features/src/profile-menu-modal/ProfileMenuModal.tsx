import { useAuth } from '@bintang-bank/entities';
import { BottomSheetModal, Typo } from '@bintang-bank/shared';
import {
  BottomSheetView,
  BottomSheetModal as NativeBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type BottomSheetModalRef = NativeBottomSheetModal;

/* eslint-disable-next-line */
export interface ProfileMenuModalProps {}

export const ProfileMenuModal = forwardRef<BottomSheetModalRef, ProfileMenuModalProps>(
  (props, ref) => {
    const { styles } = useStyles(stylesheet);
    const { logoutUser } = useAuth();
    const { i18n } = useTranslation();

    const onLogoutPress = () => {
      logoutUser();
    };

    const onChangeLanguagePress = () => {
      i18n.changeLanguage(i18n.language === 'en' ? 'my' : 'en');
    };

    return (
      <BottomSheetModal ref={ref}>
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
}));

export default ProfileMenuModal;
