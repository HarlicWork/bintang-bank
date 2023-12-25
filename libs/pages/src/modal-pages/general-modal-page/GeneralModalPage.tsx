import { RootStackParamList, Typo } from '@bintang-bank/shared';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface GeneralModalPageProps {}

export function GeneralModalPage(props: GeneralModalPageProps) {
  const { styles, theme } = useStyles(stylesheet);

  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.listContainer} onPress={() => goBack()}>
        <Typo
          text="wip"
          screen={['accounts']}
          preset="title"
          color={theme.colors.error}
        />
        <Typo text="common.go_back" screen={['common']} preset="h3" />
      </TouchableOpacity>
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    gap: 10,
  },
}));

export default GeneralModalPage;
