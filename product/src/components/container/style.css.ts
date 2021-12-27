// styles.css.ts
import { sprinkles } from '../sprinkles.css';

export const container = sprinkles({
  display: 'flex',
  padding: 'medium',
  margin: 'large',
  flexWrap: 'wrap',
  // Conditional sprinkles:
  flexDirection: {
    mobile: 'column',
    desktop: 'row',
  },
  background: {
    lightMode: 'blue-50',
    darkMode: 'gray-700',
  }
});