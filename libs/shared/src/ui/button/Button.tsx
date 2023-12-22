import { Button as NativeButton } from 'react-native';

/* eslint-disable-next-line */
export interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled: boolean;
}

export function Button({ title, onPress, disabled }: ButtonProps) {
  return <NativeButton title={title} onPress={onPress} disabled={disabled} />;
}

export default Button;
