import { SafeScreen, Typo, logger } from '@bintang-bank/shared';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { View } from 'react-native';
import { CommonHeaderPrimaryWidget } from '@bintang-bank/widgets';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  const { styles, theme } = useStyles(stylesheet);
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged((userState) => {
      setUser(userState);

      if (initializing) {
        setInitializing(false);
      }
    });

    logger('user', user?.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeScreen>
      <CommonHeaderPrimaryWidget username="Haliq" />
      <View style={styles.container}>
        <Typo
          screen={['home']}
          text="greetings"
          color={theme.colors.primary}
          preset="h3"
        />
      </View>
    </SafeScreen>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default HomePage;
