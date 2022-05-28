import { createTheme } from '@vanilla-extract/css';

export const [appTheme, vars] = createTheme({
  colours: {
    text: '#000000',
    accent: '#6c3483',
    background: '#fcf3cf',
  },
  fonts: {
    main: 'sans-serif',
  },
});
