import { Button } from '@bintang-bank/shared';
import {
  Ref,
  forwardRef,
  useImperativeHandle,
  useReducer,
  useRef,
} from 'react';

import { View, TextInput } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type CounterInputRef = {
  onValue: () => void;
};

interface State {
  counter: number;
  customValue: number;
  error: string | null;
}

interface Action {
  type: 'increment' | 'decrement' | 'custom';
  payload?: number;
}

const initialState: State = { counter: 1, customValue: 1, error: null };

const MAX_VALUE = 9999;

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment': {
      const newCounter = state.counter + 1;
      const hasError = newCounter > MAX_VALUE;
      return { ...state, counter: hasError ? MAX_VALUE : newCounter };
    }
    case 'decrement': {
      const newCounter = state.counter - 1;
      const hasError = newCounter < 1;
      return { ...state, counter: hasError ? 1 : newCounter };
    }
    case 'custom': {
      const customValue = action.payload || 0;
      const hasError = customValue > MAX_VALUE;
      return { ...state, counter: hasError ? MAX_VALUE : customValue };
    }
    default:
      return state;
  }
};

/* eslint-disable-next-line */
export interface CounterInputButtonProps {}

function CounterInputButton(
  props: CounterInputButtonProps,
  ref: Ref<CounterInputRef>
) {
  const { styles } = useStyles(stylesheet);

  const [state, dispatch] = useReducer(reducer, initialState);
  const textInputRef = useRef<TextInput>(null);

  const onHandleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const onHandleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  const onHandleCustomValue = (value: number) => {
    dispatch({ type: 'custom', payload: value });
  };

  const getCounterValue = () => {
    return state.counter;
  };

  useImperativeHandle(ref, () => ({
    onValue: getCounterValue,
  }));

  return (
    <View style={styles.container}>
      <Button title="+" onPress={onHandleIncrement} />
      <TextInput
        ref={textInputRef}
        onChangeText={(text) => {
          onHandleCustomValue(+text);
        }}
        placeholder={'1'}
        value={state.counter.toString()}
        textAlign="center"
        autoCapitalize="none"
        keyboardType="number-pad"
        style={styles.textInputStyle}
      />
      <Button title="-" onPress={onHandleDecrement} />
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    width: 'auto',
    gap: 10,
  },
  textInputStyle: {
    width: 70,
    alignItems: 'center',
    height: 40,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    color: theme.colors.secondary,
  },
}));

export default forwardRef(CounterInputButton);
