import { RadixIcon } from 'radix-ui-react-native-icons';

/* eslint-disable-next-line */
export interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export function Icon({ name, size = 24, color = 'black' }: IconProps) {
  return <RadixIcon name={name} size={size} color={color} />;
}

export default Icon;
