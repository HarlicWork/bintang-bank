import { BottomSheetModalRef } from '@bintang-bank/features';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useRef } from 'react';

export const useModalService = () => {
  const profileMenuSheetRef = useRef<BottomSheetModalRef>(null);
  const accountSelectionSheetRef = useRef<BottomSheetModal>(null);

  const openProfileMenuModal = () => {
    profileMenuSheetRef.current?.openModal();
  };

  return {
    profileMenuSheetRef,
    openProfileMenuModal,
    accountSelectionSheetRef,
  };
};
