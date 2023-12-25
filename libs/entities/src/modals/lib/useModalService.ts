import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useRef } from 'react';

export const useModalService = () => {
  const profileMenuSheetRef = useRef<BottomSheetModal>(null);

  return {
    profileMenuSheetRef,
  };
};
