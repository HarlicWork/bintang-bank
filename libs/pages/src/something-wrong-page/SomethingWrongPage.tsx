import { StatusBar } from 'react-native';
import assets from '@bintang-bank/assets';
import { Image } from '@bintang-bank/shared';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface SomethingWrongPageProps {}

export function SomethingWrongPage(props: SomethingWrongPageProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <>
      <StatusBar barStyle={'default'} />
      <SafeAreaView style={styles.container}>
        <Image
          source={assets.error404}
          customStyles={styles.imageStyles}
          resizeMode="cover"
        />
      </SafeAreaView>
    </>
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
