import { CounterInputButton, CounterInputRef } from '@bintang-bank/features';
import {
  Button,
  ModalServiceContext,
  Typo,
  logger,
} from '@bintang-bank/shared';
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
      <View style={styles.lotContainer}>
        <Typo preset="h3" style={styles.logLabel}>
          Lot
        </Typo>
        <CounterInputButton ref={customInputRef} />
      </View>
      <Button title="Get Counter Data" onPress={getCounterData} />
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
    gap: 16,
    backgroundColor: colors.background,
  },
  lotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logLabel: {
    marginLeft: 16,
  },
}));

export default CardListTab;
