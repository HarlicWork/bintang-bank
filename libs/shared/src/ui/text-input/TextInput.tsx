import { useState } from 'react';
import {
  TextInput as NativeTextInput,
  StyleProp,
  TextStyle,
} from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface TextInputProps {
  style?: StyleProp<TextStyle>;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  value?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  editable?: boolean;
  secureTextEntry?: boolean;
}

export function TextInput({
  style,
  onChangeText,
  placeholder,
  value,
  autoCapitalize = 'none',
  editable = true,
  secureTextEntry = false,
}: TextInputProps) {
  const { styles } = useStyles(stylesheet);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <NativeTextInput
      style={[styles.defaultStyles, styles.isFocused(isFocused), style]}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      autoCapitalize={autoCapitalize}
      editable={editable}
      secureTextEntry={secureTextEntry}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
}

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
