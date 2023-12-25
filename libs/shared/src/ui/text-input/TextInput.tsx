import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import {
  TextInput as NativeTextInput,
  StyleProp,
  TextStyle,
} from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type TextInputRef = {
  onFocus: () => void;
};

/* eslint-disable-next-line */
export interface TextInputProps {
  style?: StyleProp<TextStyle>;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  placeholder?: string;
  value?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  editable?: boolean;
  secureTextEntry?: boolean;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
}

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  (
    {
      style,
      onChangeText,
      onSubmitEditing,
      placeholder,
      value,
      autoCapitalize,
      editable,
      secureTextEntry,
      returnKeyType = 'done',
    },
    ref
  ) => {
    const { styles } = useStyles(stylesheet);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const textInputRef = useRef<NativeTextInput>(null);

    useImperativeHandle(ref, () => ({
      onFocus: () => textInputRef.current?.focus(),
    }));

    return (
      <NativeTextInput
        ref={textInputRef}
        style={[styles.defaultStyles, styles.isFocused(isFocused), style]}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        autoCapitalize={autoCapitalize}
        editable={editable}
        secureTextEntry={secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
      />
    );
  }
);

const stylesheet = createStyleSheet((theme) => ({
  defaultStyles: {
    height: 40,
    width: 200,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  isFocused: (isFocused) => ({
    borderColor: isFocused ? theme.colors.outline : theme.colors.outlineVariant,
  }),
}));

export default TextInput;
