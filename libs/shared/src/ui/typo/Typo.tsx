import { useTranslation } from 'react-i18next';
import { scaledSize } from '../../utils/dimensions';

import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';

export enum Fonts {
  Poppins = 'Poppins',
}

const BASE_TEXT: TextStyle = {
  fontSize: scaledSize(7),
};

export const presets = {
  default: BASE_TEXT,
  font400: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
  } as TextStyle,
  font500: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
  } as TextStyle,
  font600: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
  } as TextStyle,
  font700: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
  } as TextStyle,
  h1: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(24),
    fontWeight: '700',
  } as TextStyle,
  h2: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(21),
    fontWeight: '700',
  } as TextStyle,
  h3: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(18),
    fontWeight: '500',
  } as TextStyle,
  h4: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(15),
    fontWeight: '500',
  } as TextStyle,
  h5: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(12),
    fontWeight: '400',
  } as TextStyle,
  h6: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(9),
    fontWeight: '400',
  } as TextStyle,
  small: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(6),
    fontWeight: '300',
  } as TextStyle,
  title: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(13),
    fontWeight: '700',
  } as TextStyle,
};

export type TextPresets = keyof typeof presets;

/* eslint-disable-next-line */
export interface TypoProps extends TextProps {
  text?: string;
  style?: StyleProp<TextStyle>;
  preset?: TextPresets;
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  isSecureText?: boolean;
  screen?: string[];
}

export function Typo({
  children,
  text = '',
  color,
  preset = 'default',
  style: styleOverride,
  textAlign = 'auto',
  isSecureText = false,
  screen,
  ...rest
}: TypoProps) {
  const { theme } = useStyles();
  const { t } = useTranslation([...(screen || []), 'common']);

  const secureText = (text: string) => {
    return text.replace(/./g, '*');
  };

  const isNumeric = (value: string) => {
    return /^-?\d+$/.test(value);
  };

  const string = isSecureText ? secureText(text) : `${screen}:${text}`;

  return (
    <Text
      {...rest}
      style={[
        presets[preset] as TextProps,
        {
          color: color ? color : theme.colors.primary,
          textAlign: textAlign,
        },
        styleOverride,
      ]}
    >
      {children || `${isNumeric(string) ? string : t(string)}`}
    </Text>
  );
}

export default Typo;
