import { Button, ModalServiceContext } from '@bintang-bank/shared';
import { useContext } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface CardListTabProps {}

export function CardListTab(props: CardListTabProps) {
  const { styles } = useStyles(stylesheet);

  const { openAccountSelectionModal } = useContext(ModalServiceContext);

  return (
    <View style={styles.container}>
      <Button
        title="Open Account Selection Modal"
        onPress={openAccountSelectionModal}
      />
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
}));

export default CardListTab;
