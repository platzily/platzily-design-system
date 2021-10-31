import { theme as defaultTheme } from '../theme';
import createPalette from './createPalette';

export default function createTheme(theme = defaultTheme) {
  const createdTheme = { ...theme };

  createdTheme.palette = createPalette(theme);

  return createdTheme;
}
