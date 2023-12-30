import {
  AccountSelectionModalRef,
  ProfileMenuModalRef,
} from '@bintang-bank/features';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { createContext, useRef } from 'react';

export type ModalServiceContextType = {
  openProfileMenuModal: () => void;
  openAccountSelectionModal: () => void;
};

export type ModalContextRefType = {
  profileMenuSheetRef: React.RefObject<ProfileMenuModalRef> | null;
  accountSelectionSheetRef: React.RefObject<AccountSelectionModalRef> | null;
};

export const ModalServiceContext = createContext<ModalServiceContextType>({
  openProfileMenuModal: () => null,
  openAccountSelectionModal: () => null,
});

export const ModalContextRef = createContext<ModalContextRefType>({
  profileMenuSheetRef: null,
  accountSelectionSheetRef: null,
});

/* eslint-disable-next-line */
export interface ModalProviderProps {
  children: React.ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const profileMenuSheetRef = useRef<ProfileMenuModalRef>(null);
  const accountSelectionSheetRef = useRef<AccountSelectionModalRef>(null);

  const openProfileMenuModal = () => {
    profileMenuSheetRef.current?.openModal();
  };

  const openAccountSelectionModal = () => {
    accountSelectionSheetRef.current?.openModal();
  };

  return (
    <BottomSheetModalProvider>
      <ModalServiceContext.Provider
        value={{
          openProfileMenuModal,
          openAccountSelectionModal,
        }}
      >
        <ModalContextRef.Provider
          value={{
            profileMenuSheetRef,
            accountSelectionSheetRef,
          }}
        >
          {children}
        </ModalContextRef.Provider>
      </ModalServiceContext.Provider>
    </BottomSheetModalProvider>
  );
}

export default ModalProvider;
