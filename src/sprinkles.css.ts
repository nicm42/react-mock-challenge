import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const responsiveGrid = defineProperties({
  conditions: {
    default: {},
    small: { '@media': 'screen and (min-width: 35em)' },
    medium: { '@media': 'screen and (min-width: 50em)' },
    large: { '@media': 'screen and (min-width: 65em)' },
    extraLarge: { '@media': 'screen and (min-width: 75em)' },
  },
  defaultCondition: 'default',
  properties: {
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
      'repeat(4, 1fr)',
      'repeat(5, 1fr)',
    ],
  },
});

export const sprinkles = createSprinkles(responsiveGrid);
