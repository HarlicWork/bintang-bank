import { ActivityIndicator, ColorValue } from 'react-native';

/* eslint-disable-next-line */
export interface LoadingIndicatorProps {
  size: number | 'large' | 'small' | undefined;
  color: ColorValue | undefined;
}

export function LoadingIndicator({ size, color }: LoadingIndicatorProps) {
  return <ActivityIndicator size={size} color={color} />;
}

export default LoadingIndicator;
