import {
  globalFontFace,
  createGlobalTheme,
  globalStyle,
} from '@vanilla-extract/css';

globalFontFace('Ubuntu', {
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'url(https://fonts.googleapis.com/css2?family=Ubuntu:wght@400&display=swap)',
});

globalFontFace('ShadowsIntoLight', {
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'url(https://fonts.googleapis.com/css2?family=Shadows+Into+Light:wght@400&display=swap)',
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

/* TODO why is it ignoring the fonts? - because they need to be downloaded */

globalStyle('body', {
  fontFamily: vars.font.main,
  lineHeight: vars.font.lineHeight,
  backgroundColor: vars.colour.background,
});
