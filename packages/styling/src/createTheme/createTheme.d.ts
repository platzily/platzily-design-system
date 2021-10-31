import { Theme } from '../theme';

export interface ThemeOptions {
  palette?: Record<string, any>;
}

/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @returns A complete, ready-to-use theme object.
 */
export default function createTheme(options?: ThemeOptions): Theme;
