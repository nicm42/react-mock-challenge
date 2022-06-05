import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colour: {
    text: '#000000',
    white: '#ffffff',
    accentH: '283',
    accentS: '43%',
    accentL: '36%',
    background: 'hsl(48, 88%, 90%)',
  },
  font: {
    main: 'Ubuntu',
    accent: 'ShadowsIntoLight',
    lineHeight: '1.2',
  },
  cardPadding: {
    padding: '1em',
  },
});
