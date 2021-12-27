import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const space = {
  'none': 0,
  'small': '4px',
  'medium': '8px',
  'large': '16px',
};

const fontSizes = {
  'h1': '2.5rem',
  'h2': '2rem',
  'h3': '1.75rem',
  'h4': '1.5rem',
  'h5': '1.25rem',
  'h6': '1rem',
}

const fontWeights = {
  'light': '300',
  'regular': '400',
  'medium': '500',
  'bold': '600',
  'extra-bold': '800'
};

const widths = {
  '25': '25%',
  '50': '50%',
  '75': '75%',
  '100': '100%'
}

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' }
  },
  defaultCondition: 'mobile',
  properties: {
    gap: ['10px'],
    display: ['none', 'flex', 'block', 'inline'],
    width: widths,
    flexDirection: ['row', 'column'],
    flexWrap: ['wrap'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    textDecoration: ['none', 'underline'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    fontSize: fontSizes,
    fontWeight: fontWeights
  },
  shorthands: {
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  }
});

const colors = {
  'blue-50': '#E3F2FD',
  'blue-100': '#BBDEFB',
  'blue-200': '#90CAF9',
  'blue-900': '#0D47A1',

  'gray-100': '#F5F5F5',
  'gray-400': '#BDBDBD',
  'gray-700': '#616161',
  'gray-800': '#424242',
  'gray-900': '#212121',

  'green-500': '#4CAF50',
  'red-500': '#F44336',
  'yellow-500': '#FBC02D'
};

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' }
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colors,
    background: colors,
    // etc.
  }
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];