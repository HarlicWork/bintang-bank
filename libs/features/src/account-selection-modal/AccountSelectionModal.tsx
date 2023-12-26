import { forwardRef } from 'react';
import { BottomSheetModal, Typo } from '@bintang-bank/shared';
import {
  BottomSheetFlatList,
  BottomSheetModal as NativeBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type BottomSheetModalRef = NativeBottomSheetModal;

const accountListDemo = Array.from({ length: 20 }, (_, i) => {
  return {
    id: `${i}`,
    title: `Account ${i + 1}`,
  };
});

/* eslint-disable-next-line */
export interface AccountSelectionModalProps {}

export const AccountSelectionModal = forwardRef<
  BottomSheetModalRef,
  AccountSelectionModalProps
>((props, ref) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <BottomSheetModal ref={ref}>
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
});

const stylesheet = createStyleSheet(({ colors }) => ({
  contentContainer: {
    backgroundColor: colors.onPrimary,
  },
  itemContainer: {
    padding: 16,
  },
}));

export default AccountSelectionModal;
