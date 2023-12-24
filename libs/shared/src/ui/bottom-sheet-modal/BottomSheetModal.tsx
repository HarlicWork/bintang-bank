import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useCallback, useMemo } from 'react';
import { Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Button from '../button/Button';

/* eslint-disable-next-line */
export interface BottomSheetProps {
  bottomSheetRef: React.RefObject<BottomSheet>;
}

export function BottomSheetModal({ bottomSheetRef }: BottomSheetProps) {
  const { styles } = useStyles(stylesheet);

  const snapPoints = useMemo(() => ['25%', '70%', '100%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text>Awesome </Text>
        <Button
          title="Close"
          onPress={() => {
            bottomSheetRef.current?.close();
          }}
        />
      </BottomSheetView>
    </BottomSheet>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  contentContainer: {
    flex: 1,
    padding: 24,
  },
}));

export default BottomSheet;
