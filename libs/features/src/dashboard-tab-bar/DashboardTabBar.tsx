import { Icon, Typo } from '@bintang-bank/shared';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface DashboardTabBarProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

export function DashboardTabBar({
  state,
  descriptors,
  navigation,
}: DashboardTabBarProps) {
  const { styles, theme } = useStyles(stylesheet);

  const setLabel = (
    options: BottomTabNavigationOptions,
    route: { name: string }
  ) => {
    let label;
    if (options.tabBarLabel !== undefined) {
      label = options.tabBarLabel;
    } else if (options.title !== undefined) {
      label = options.title;
    } else {
      label = route.name;
    }

    return label;
  };

  const setIcon = (labelName: string): string => {
    switch (labelName) {
      case 'Home':
        return 'home';
      case 'Accounts':
        return 'id-card';
      case 'Settings':
        return 'settings';
      default:
        return 'question-mark';
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = setLabel(options, route);

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabContainer(state)}
          >
            <Icon
              name={setIcon(label.toString())}
              size={isFocused ? 24 : 22}
              color={
                isFocused ? theme.colors.onPrimary : theme.colors.inversePrimary
              }
            />
            <Typo
              style={styles.labelStyle(isFocused)}
              screen={['common']}
              text={`common.${label.toString().toLowerCase()}`}
              preset="title"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: { flexDirection: 'row' },
  tabContainer: (state) => ({
    height: 60,
    width: `${100 / state.routes.length}%`,
    gap: 3,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  labelStyle: (isFocused) => ({
    color: isFocused ? colors.onPrimary : colors.inversePrimary,
    fontSize: isFocused ? 14 : 13,
  }),
}));

export default DashboardTabBar;
