import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const cardStyle = style({
  backgroundColor: vars.colours.white,
  border: '1px solid black',
});

export const cardImage = style({
  maxWidth: '100%',
  height: 'auto',
  objectFit: 'cover',
});

export const cardText = style({
  padding: '1em',
});

export const cardName = style({
  fontFamily: vars.fonts.accent,
  fontSize: '1.5rem',
  lineHeight: '1',
  color: vars.colours.accent,
});

export const cardInfo = style({
  margin: '0',
  padding: '0',
  display: 'flex',
  gap: '1em',
});

export const cardBreed = style({
  listStyleType: 'none',
});

export const cardAge = style({
  listStyleType: 'none',
  position: 'relative',
  '::before': {
    position: 'absolute',
    content: '•',
  },
});
