import { extendTheme } from '@chakra-ui/react';
import { sqBlack, sqWhite } from '../styles/constants';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: sqBlack,
        backgroundColor: sqWhite,
      },
    },
  },
  fonts: {
    body: 'Noto Sans KR, sans-serif',
    heading: 'Noto Sans KR, serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '0.8rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  colors: {
    olive: {
      50: '#eff5e9',
      100: '#d5ddd3',
      200: '#bbc5b9',
      300: '#a1ad9e',
      400: '#879684',
      500: '#6e7c6a',
      600: sqWhite,
      700: '#3c4539',
      800: '#222a21',
      900: sqWhite,
    },
    gray: {
      600: sqWhite,
    },
  },
});
