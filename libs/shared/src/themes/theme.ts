export const lightTheme = {
  colors: {
    typography: 'black',
    onTypography: 'gray',
    background: '#FFFBF5',
    primary: '#F7EFE5',
    onPrimary: '#C3ACD0',
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;

export const darkTheme = {
  colors: {
    typography: '#363062',
    onTypography: 'gray',
    background: '#363062',
    primary: '#435585',
    onPrimary: '#818FB4',
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;
