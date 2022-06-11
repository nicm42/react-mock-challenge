import { style } from '@vanilla-extract/css';
import { sprinkles } from './sprinkles.css';

export const cardsStyle = style([
  sprinkles({
    gridTemplateColumns: {
      small: 'repeat(2, 1fr)',
      medium: 'repeat(3, 1fr)',
      large: 'repeat(4, 1fr)',
      extraLarge: 'repeat(5, 1fr)',
    },
  }),
  {
    display: 'grid',
    gap: '1rem',
  },
]);

export const headerStyle = style({
  textAlign: 'center',
});
