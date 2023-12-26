import {
  BottomSheetBackdrop,
  BottomSheetModal as NativeBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { forwardRef, useCallback, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type BottomSheetModalRef = NativeBottomSheetModal;

/* eslint-disable-next-line */
export interface BottomSheetProps {
  children?: React.ReactNode;
}

export const BottomSheetModal = forwardRef<
  BottomSheetModalRef,
  BottomSheetProps
>(({ children }, ref) => {
  const { styles } = useStyles(stylesheet);
  const insets = useSafeAreaInsets();

  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

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

  return (
    <NativeBottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backgroundStyle={styles.modalBackground}
      backdropComponent={renderBackdrop}
      containerStyle={{
        marginTop: insets.top,
      }}
    >
      {children}
    </NativeBottomSheetModal>
  );
});

const stylesheet = createStyleSheet(({ colors }) => ({
  modalBackground: {
    backgroundColor: colors.onPrimary,
  },
}));

export default BottomSheetModal;
