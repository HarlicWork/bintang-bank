import { useAuth } from '@bintang-bank/entities';
import { AppRoutes, BottomSheetModal, Typo } from '@bintang-bank/shared';
import {
  BottomSheetView,
  BottomSheetModal as NativeBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { Ref, forwardRef, useImperativeHandle, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type ProfileMenuModalRef = {
  openModal: () => void;
};

/* eslint-disable-next-line */
export interface ProfileMenuModalProps {
  onClosed?: () => void;
  customFunction?: () => void;
}

const ProfileMenuModal = (
  { onClosed, customFunction }: ProfileMenuModalProps,
  ref: Ref<ProfileMenuModalRef>
) => {
  const { styles } = useStyles(stylesheet);
  const { logoutUser } = useAuth();
  const { i18n } = useTranslation(['common']);

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
    <BottomSheetModal
      ref={bottomSheetModalRef}
      name={AppRoutes.ProfileMenuModal}
      enableDismissOnClose={false}
      pressBehavior="none"
      stackBehavior="replace"
    >
      <BottomSheetView style={styles.container}>
        <Typo
          onPress={onClosed}
          preset="h3"
          color="black"
          screen={['common']}
          text="common:close"
          textAlign="right"
        />
        <Typo
          screen={['common']}
          text="common.logout"
          preset="h3"
          onPress={onLogoutPress}
        />
        <Typo
          screen={['common']}
          text="common.changeLanguage"
          preset="h3"
          onPress={onChangeLanguagePress}
        />
        <Typo
          screen={['common']}
          text="common.open_account_modal"
          preset="h3"
          onPress={customFunction}
        />
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
}));

export default forwardRef(ProfileMenuModal);
