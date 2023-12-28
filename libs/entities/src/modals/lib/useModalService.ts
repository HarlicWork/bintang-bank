import {
  AccountSelectionModalRef,
  ProfileMenuModalRef,
} from '@bintang-bank/features';
import { useRef } from 'react';

export const useModalService = () => {
  const profileMenuSheetRef = useRef<ProfileMenuModalRef>(null);
  const accountSelectionSheetRef = useRef<AccountSelectionModalRef>(null);

  const openProfileMenuModal = () => {
    profileMenuSheetRef.current?.openModal();
  };

  const openAccountSelectionModal = () => {
    accountSelectionSheetRef.current?.openModal();
  };

  return {
    profileMenuSheetRef,
    openProfileMenuModal,
    accountSelectionSheetRef,
    openAccountSelectionModal,
  };
};
