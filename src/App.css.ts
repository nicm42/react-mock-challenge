import { style } from '@vanilla-extract/css';

export const cardsStyle = style({
  display: 'grid',
  gap: '1rem',
  '@media': {
    'screen and (min-width: 35em)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (min-width: 50em)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    'screen and (min-width: 65em)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    'screen and (min-width: 75em)': {
      gridTemplateColumns: 'repeat(5, 1fr)',
    },
  },
});
