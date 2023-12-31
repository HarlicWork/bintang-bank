import { CounterInputButton, CounterInputRef } from '@bintang-bank/features';
import { Button, ModalServiceContext, logger } from '@bintang-bank/shared';
import { useContext, useRef } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface CardListTabProps {}

export function CardListTab(props: CardListTabProps) {
  const { styles } = useStyles(stylesheet);

  const { openAccountSelectionModal } = useContext(ModalServiceContext);
  const customInputRef = useRef<CounterInputRef>(null);

  const getCounterData = () => {
    const value = customInputRef.current?.onValue();

    if (value! === 0) return;

    logger(value);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Open Account Selection Modal"
        onPress={openAccountSelectionModal}
      />
      <CounterInputButton ref={customInputRef} />
      <Button title="Get Counter Data" onPress={getCounterData} />
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
    backgroundColor: colors.background,
  },
}));

export default CardListTab;
