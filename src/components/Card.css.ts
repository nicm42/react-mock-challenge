import { style } from '@vanilla-extract/css';
import { vars } from '../vars.css';

export const cardStyle = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.colour.white,
  border: '1px solid grey', // TODO make this a box shadow rather than a border
});

export const cardImage = style({
  maxWidth: '100%',
  height: 'auto',
  objectFit: 'cover',
});

export const cardText = style({
  paddingInline: vars.cardPadding.padding,
  paddingTop: vars.cardPadding.padding,
  flexGrow: '1',
});

export const cardName = style({
  fontFamily: vars.font.accent,
  fontSize: '1.5rem',
  lineHeight: '1',
  color: vars.colour.accent,
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

export const cardLink = style({
  paddingInline: vars.cardPadding.padding,
  paddingBottom: vars.cardPadding.padding,
});

export const cardAge = style({
  listStyleType: 'none',
  position: 'relative',
  '::before': {
    position: 'absolute',
    content: '•',
    left: '-0.25em',
  },
});
