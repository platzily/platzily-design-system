import { createSpacing } from '../theme';

export default function createThemeSpacing(theme) {
  theme.spacing = createSpacing(theme.spacing);
  return theme;
}
