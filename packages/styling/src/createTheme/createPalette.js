import { theme as defaultTheme } from '../theme';

const paletteKeys = [
  'primary',
  'secondary',
  'tertiary',
  'text',
  'grey',
  'backround',
];

export default function createPalette(theme) {
  const modifiedTheme = { ...theme };

  paletteKeys.forEach(key => {
    modifiedTheme.palette[key] = {
      ...defaultTheme.palette[key],
      ...theme.palette[key]
    };
  });

  return createPalette;
}
