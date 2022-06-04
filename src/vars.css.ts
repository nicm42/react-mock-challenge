import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colour: {
    text: '#000000',
    white: '#ffffff',
    accent: '#6c3483',
    background: '#fcf3cf',
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
