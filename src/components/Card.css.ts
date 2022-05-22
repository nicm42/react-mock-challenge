import { style } from '@vanilla-extract/css';

export const cardStyle = style({
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
  fontSize: '1.2rem',
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
