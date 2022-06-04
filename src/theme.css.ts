import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { vars } from './vars.css';

globalFontFace('Ubuntu', {
  src: 'local("Ubuntu-Regular"), url(fonts/Ubuntu-Regular.ttf) format("truetype")',
});

globalFontFace('ShadowsIntoLight', {
  src: 'local("ShadowsIntoLightTwo-Regular"), url(fonts/ShadowsIntoLightTwo-Regular.ttf) format("truetype")',
});

globalStyle('body', {
  padding: '1em',
  fontFamily: vars.font.main,
  lineHeight: vars.font.lineHeight,
  backgroundColor: vars.colour.background,
});
