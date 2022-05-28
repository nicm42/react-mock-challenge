import { createTheme } from '@vanilla-extract/css';

export const [appTheme, vars] = createTheme({
  colours: {
    text: '#000000',
    white: '#ffffff',
    accent: '#6c3483',
    background: '#fcf3cf',
  },
  fonts: {
    main: 'Ubuntu',
    accent: 'Shadows Into Light',
    lineHeight: '1.2',
  },
});
