import {
  globalFontFace,
  createGlobalTheme,
  globalStyle,
} from '@vanilla-extract/css';

// TODO update fonts only work on build, not on dev
// Might help: https://stackoverflow.com/questions/70086712/load-local-fonts-in-vite-vue3-project

// TODO once fonts are sorted move variables into a vars.css file

globalFontFace('Ubuntu', {
  // src: 'local(./fonts/Ubuntu-Regular.ttf)',
  // src: 'url(./fonts/Ubuntu-Regular.ttf)',
  // src: "local('Ubuntu-Regular'), url(./fonts/Ubuntu-Regular.ttf)",
  src: 'local("Ubuntu-Regular"), url(fonts/Ubuntu-Regular.ttf) format("truetype")',
});

globalFontFace('ShadowsIntoLight', {
  // src: 'local(./fonts/ShadowsIntoLightTwo-Regular.ttf)',
  // src: 'url(./fonts/ShadowsIntoLightTwo-Regular.ttf)',
  // src: "local('ShadowsIntoLightTwo-Regular'), url(./fonts/ShadowsIntoLightTwo-Regular.ttf)",
  src: 'local("ShadowsIntoLightTwo-Regular"), url(fonts/ShadowsIntoLightTwo-Regular.ttf) format("truetype")',
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
