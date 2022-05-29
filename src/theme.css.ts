import {
  globalFontFace,
  createGlobalTheme,
  globalStyle,
} from '@vanilla-extract/css';

globalFontFace('Ubuntu', {
  src: 'url(./fonts/Ubuntu-Regular.ttf)',
});

globalFontFace('ShadowsIntoLight', {
  src: 'url(./fonts/ShadowsIntoLightTwo-Regular.ttf)',
});

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
});

globalStyle('body', {
  fontFamily: vars.font.main,
  lineHeight: vars.font.lineHeight,
  backgroundColor: vars.colour.background,
});
