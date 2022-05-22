import { style } from '@vanilla-extract/css';

export const cardsStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  // gridAutoRows: 'auto',
  gap: '1rem',
});
