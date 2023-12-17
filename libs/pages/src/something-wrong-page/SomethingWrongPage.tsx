import assets from '@bintang-bank/assets';
import { Image, SafeScreen } from '@bintang-bank/shared';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface SomethingWrongPageProps {}

export function SomethingWrongPage(props: SomethingWrongPageProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeScreen>
      <Image
        source={assets.error404}
        customStyles={styles.imageStyles}
        resizeMode="cover"
      />
    </SafeScreen>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imageStyles: {
    width: 200,
    height: 150,
  },
}));

export default SomethingWrongPage;
