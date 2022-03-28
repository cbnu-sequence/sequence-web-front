import { extendTheme } from '@chakra-ui/react';
import { sqBlack, sqWhite } from '../styles/constants';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: sqWhite,
        backgroundColor: sqBlack,
      },
    },
  },
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Forum, serif',
    mono: 'Menlo, monospace',
  },
  colors: {
    olive: {
      50: '#eff5e9',
      100: '#d5ddd3',
      200: '#bbc5b9',
      300: '#a1ad9e',
      400: '#879684',
      500: '#6e7c6a',
      600: '#556152',
      700: '#3c4539',
      800: '#222a21',
      900: '#051005',
    },
  },
});
