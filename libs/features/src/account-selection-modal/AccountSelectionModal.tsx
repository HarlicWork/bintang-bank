import { BottomSheetModal, Typo } from '@bintang-bank/shared';
import {
  BottomSheetFlatList,
  BottomSheetModal as NativeBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { Ref, forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type AccountSelectionModalRef = {
  openModal: () => void;
};

const accountListDemo = Array.from({ length: 10 }, (_, i) => {
  return {
    id: `${i}`,
    title: `Account ${i + 1}`,
  };
});

/* eslint-disable-next-line */
export interface AccountSelectionModalProps {}

function AccountSelectionModal(
  props: AccountSelectionModalProps,
  ref: Ref<AccountSelectionModalRef>
) {
  const { styles, theme } = useStyles(stylesheet);

  const bottomSheetModalRef = useRef<NativeBottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '60%'], []);

  const openModal = () => {
    bottomSheetModalRef.current?.present();
  };

  useImperativeHandle(ref, () => ({
    openModal,
  }));

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
      index={1}
    >
      <BottomSheetFlatList
        data={accountListDemo}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Typo preset="h4" color={theme.colors.primary}>
              {item.title}
            </Typo>
          </View>
        )}
        contentContainerStyle={styles.contentContainer}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
    </BottomSheetModal>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  contentContainer: {
    backgroundColor: colors.onPrimary,
  },
  itemContainer: {
    padding: 16,
  },
}));

export default forwardRef(AccountSelectionModal);
