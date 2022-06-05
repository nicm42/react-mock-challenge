import { style } from '@vanilla-extract/css';
import { vars } from '../vars.css';

export const cardStyle = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.colour.white,
  boxShadow: '0.25em 0.25em 0.5em 0 rgba(0,0,0,0.25)',
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
  color: `hsl(${vars.colour.accentH}, ${vars.colour.accentS}, ${vars.colour.accentL})`,
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
  marginInline: vars.cardPadding.padding,
  marginTop: `calc(${vars.cardPadding.padding} + 0.5em)`,
  marginBottom: vars.cardPadding.padding,
  backgroundColor: `hsl(${vars.colour.accentH}, ${vars.colour.accentS}, ${vars.colour.accentL})`,
  padding: '1em 0.5em',
  color: vars.colour.white,
  textAlign: 'center',
  textDecoration: 'none',
  ':hover': {
    backgroundColor: `hsl(${vars.colour.accentH}, ${vars.colour.accentS}, calc(${vars.colour.accentL} * 0.8))`,
  },
  ':focus': {
    backgroundColor: `hsl(${vars.colour.accentH}, ${vars.colour.accentS}, calc(${vars.colour.accentL} * 0.8))`,
  },
  ':active': {
    backgroundColor: `hsl(${vars.colour.accentH}, ${vars.colour.accentS}, calc(${vars.colour.accentL} * 0.8))`,
  },
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
