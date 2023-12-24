import { Typo } from '@bintang-bank/shared';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { forwardRef, useCallback, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type Ref = BottomSheetModal;

/* eslint-disable-next-line */
export interface ProfileMenuModalProps {}

export const ProfileMenuModal = forwardRef<Ref, ProfileMenuModalProps>(
  (props, ref) => {
    const { styles } = useStyles(stylesheet);

    const snapPoints = useMemo(() => ['50%', '70%'], []);

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
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={styles.modalBackground}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles.container}>
          <TouchableOpacity>
            <Typo screen={['common']} text="common.logout" preset="h3" />
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
  },
  modalBackground: {
    backgroundColor: colors.onPrimary,
  },
}));

export default ProfileMenuModal;
