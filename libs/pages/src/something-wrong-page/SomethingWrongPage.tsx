import assets from '@bintang-bank/assets';
import { Image, SafeScreen } from '@bintang-bank/shared';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface SomethingWrongPageProps {}

export function SomethingWrongPage(props: SomethingWrongPageProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeScreen>
      <View style={styles.imageContainer}>
        <Image
          source={assets.error404}
          customStyles={styles.imageStyles}
          resizeMode="cover"
        />
      </View>
    </SafeScreen>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: {
    width: 200,
    height: 150,
  },
}));

export default SomethingWrongPage;
