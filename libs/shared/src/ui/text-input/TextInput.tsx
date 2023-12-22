import {
  TextInput as NativeTextInput,
  StyleProp,
  TextStyle,
} from 'react-native';

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
  return (
    <NativeTextInput
      style={style}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      autoCapitalize={autoCapitalize}
      editable={editable}
      secureTextEntry={secureTextEntry}
    />
  );
}

export default TextInput;
