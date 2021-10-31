import { theme as defaultTheme } from '../theme';
import createThemeSection from './createThemeSection';

const paletteKeys = [
  'primary',
  'secondary',
  'tertiary',
  'text',
  'grey',
  'backround',
];

export default function createTheme(theme = defaultTheme) {
  const createdTheme = { ...theme };

  createdTheme.palette = createThemeSection(theme.palette, 'palette', paletteKeys);

  return createdTheme;
}
