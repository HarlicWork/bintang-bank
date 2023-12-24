import {
  BottomSheetBackdrop,
  BottomSheetModal as NativeBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { forwardRef, useCallback, useMemo } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type Ref = NativeBottomSheetModal;

/* eslint-disable-next-line */
export interface BottomSheetProps {
  children?: React.ReactNode;
}

export const BottomSheetModal = forwardRef<Ref, BottomSheetProps>(
  ({ children }, ref) => {
    const { styles } = useStyles(stylesheet);

    const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);

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
      >
        {children}
      </NativeBottomSheetModal>
    );
  }
);

const stylesheet = createStyleSheet(({ colors }) => ({
  contentContainer: {
    flex: 1,
    padding: 24,
  },
  modalBackground: {
    backgroundColor: colors.onPrimary,
  },
}));

export default BottomSheetModal;
