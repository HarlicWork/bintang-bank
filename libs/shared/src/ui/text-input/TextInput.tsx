import { Ref, forwardRef, useImperativeHandle, useRef, useState } from 'react';
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
  textAlign?: 'left' | 'right' | 'center' | undefined;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
}

function TextInput(
  {
    style,
    onChangeText,
    onSubmitEditing,
    placeholder,
    value,
    autoCapitalize,
    editable,
    secureTextEntry,
    textAlign,
    returnKeyType = 'done',
    keyboardType = 'default',
  }: TextInputProps,
  ref: Ref<TextInputRef>
) {
  const { styles, theme } = useStyles(stylesheet);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const textInputRef = useRef<NativeTextInput>(null);

  useImperativeHandle(ref, () => ({
    onFocus: () => textInputRef.current?.focus(),
      }));

  return (
    <NativeTextInput
      autoCapitalize={autoCapitalize}
      editable={editable}
      textAlign={textAlign}
      keyboardType={keyboardType}
      onBlur={() => setIsFocused(false)}
      onChangeText={onChangeText}
      onFocus={() => setIsFocused(true)}
      onSubmitEditing={onSubmitEditing}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.outlineVariant}
      ref={textInputRef}
      returnKeyType={returnKeyType}
      secureTextEntry={secureTextEntry}
      style={[styles.defaultStyles, styles.isFocused(isFocused), style]}
      value={value}
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
    color: theme.colors.secondary,
  },
  isFocused: (isFocused) => ({
    borderColor: isFocused ? theme.colors.outline : theme.colors.outlineVariant,
  }),
}));

export default forwardRef(TextInput);
