import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const cardsStyle = style({
  fontFamily: vars.fonts.main,
  backgroundColor: vars.colours.background,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  // gridAutoRows: 'auto',
  gap: '1rem',
});
