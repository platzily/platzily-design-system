import { Theme } from '../theme';

export interface ThemeOptions {
  palette?: {
    primary?: {
      main?: string,
    },
    secondary?: {
      main?: string,
    },
    tertiary?: {
      main?: string,
    },
    text?: {
      main?: string,
      light?: string,
    },
    grey?: {},
    backround?: {
      main?: string,
    },
  },
}

/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @returns A complete, ready-to-use theme object.
 */
export default function createTheme(options?: ThemeOptions): Theme;
