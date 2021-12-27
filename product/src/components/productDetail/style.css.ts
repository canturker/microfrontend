// styles.css.ts
import { sprinkles } from '../sprinkles.css';

export const container = sprinkles({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 'large'
});

export const detail = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginLeft: 'large'
});

export const name = sprinkles({
  fontSize: 'h3',
  fontWeight: 'bold',
  marginTop: 'medium'
});

export const statusGreen = sprinkles({
  fontSize: 'h6',
  fontWeight: 'bold',
  color: 'green-500'
});


export const statusRed = sprinkles({
  fontSize: 'h6',
  fontWeight: 'bold',
  color: 'red-500'
});

export const statusYellow = sprinkles({
  fontSize: 'h6',
  fontWeight: 'bold',
  color: 'yellow-500'
});


export const button = sprinkles({
  fontSize: 'h6',
  fontWeight: 'medium',
  color: 'blue-900',
  background: 'gray-100',
  paddingX: 'large',
  paddingY: 'medium',
  marginY: 'medium',
  textDecoration: 'none'
})