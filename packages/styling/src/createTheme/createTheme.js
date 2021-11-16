import { theme as defaultTheme } from '../theme';
import createThemeSection from './createThemeSection';
import createThemeSpacing from './createThemeSpacing';

const paletteKeys = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'warning',
  'info',
  'error',
  'neutral'
];

export default function createTheme(theme = defaultTheme) {
  let createdTheme = { ...theme };

  createdTheme.palette = createThemeSection(theme.palette, 'palette', paletteKeys);

  if (createTheme.spacing) {
    createdTheme = createThemeSpacing(createdTheme);
  }



  return { ...defaultTheme, ...createdTheme };
}
