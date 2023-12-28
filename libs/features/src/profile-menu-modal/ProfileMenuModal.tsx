import { useAuth } from '@bintang-bank/entities';
import { BottomSheetModal, Typo } from '@bintang-bank/shared';
import {
  BottomSheetView,
  BottomSheetModal as NativeBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { Ref, forwardRef, useImperativeHandle, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type BottomSheetModalRef = {
  openModal: () => void;
};

/* eslint-disable-next-line */
export interface ProfileMenuModalProps {}

function ProfileMenuModal<ProfileMenuModalProps>(
  props: ProfileMenuModalProps,
  ref: Ref<BottomSheetModalRef>
) {
  const { styles } = useStyles(stylesheet);
  const { logoutUser } = useAuth();
  const { i18n } = useTranslation();

  const bottomSheetModalRef = useRef<NativeBottomSheetModal>(null);

  const onLogoutPress = () => {
    logoutUser();
  };

  const onChangeLanguagePress = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'my' : 'en');
  };

  const openModal = () => {
    bottomSheetModalRef.current?.present();
  };

  useImperativeHandle(ref, () => ({
    openModal,
  }));

  return (
    <BottomSheetModal ref={bottomSheetModalRef}>
      <BottomSheetView style={styles.container}>
        <TouchableOpacity onPress={onLogoutPress}>
          <Typo screen={['common']} text="common.logout" preset="h3" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onChangeLanguagePress}>
          <Typo screen={['common']} text="common.changeLanguage" preset="h3" />
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheetModal>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
}));

export default forwardRef(ProfileMenuModal);
