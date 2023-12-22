import { Typo } from '@bintang-bank/shared';
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
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { TouchableOpacity, View } from 'react-native';

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
  const { styles } = useStyles(stylesheet);

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
            <Typo
              style={styles.lableStyle(isFocused)}
              text={label.toString()}
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
    backgroundColor: colors.onPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  lableStyle: (isFocused) => ({
    color: isFocused ? colors.typography : colors.onTypography,
    fontSize: 13,
  }),
}));

export default DashboardTabBar;
