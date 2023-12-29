import { AppRoutes } from '@bintang-bank/shared/routers/app-routes';
import {
  BottomSheetBackdrop,
  BottomSheetModal as NativeBottomSheetModal,
} from '@gorhom/bottom-sheet';
import {
  BackdropPressBehavior,
  BottomSheetDefaultBackdropProps,
} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { Ref, forwardRef, useCallback, useMemo } from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type BottomSheetModalRef = NativeBottomSheetModal;

/* eslint-disable-next-line */
export interface BottomSheetProps {
  children?: React.ReactNode;
  enableDismissOnClose?: boolean;
  index?: number;
  name?: string;
  onDismiss?: () => void;
  snapPoints?: string[];
  stackBehavior?: 'replace' | 'push';
  pressBehavior?: BackdropPressBehavior | undefined;
}

const BottomSheetModal = (
  {
    children,
    enableDismissOnClose = true,
    index = 1,
    name = AppRoutes.BottomSheetModal,
    onDismiss,
    snapPoints,
    stackBehavior = 'replace',
    pressBehavior,
  }: BottomSheetProps,
  ref: Ref<BottomSheetModalRef>
) => {
  const { styles } = useStyles(stylesheet);
  const insets = useSafeAreaInsets();

  const defaultSnapPoints = useMemo(() => ['25%', '50%', '100%'], []);

  const renderBackdrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
        pressBehavior={pressBehavior}
      />
    ),
    [pressBehavior]
  );

  return (
    <NativeBottomSheetModal
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.modalBackground}
      containerStyle={styles.containerStyle(insets)}
      enablePanDownToClose={enableDismissOnClose}
      index={index}
      name={name}
      onDismiss={onDismiss}
      ref={ref}
      snapPoints={snapPoints ? snapPoints : defaultSnapPoints}
      stackBehavior={stackBehavior}
    >
      {children}
    </NativeBottomSheetModal>
  );
};

const stylesheet = createStyleSheet(({ colors }) => ({
  modalBackground: {
    backgroundColor: colors.onPrimary,
  },
  containerStyle: (insets: EdgeInsets) => ({
    marginTop: insets.top,
  }),
}));

export default forwardRef(BottomSheetModal);
