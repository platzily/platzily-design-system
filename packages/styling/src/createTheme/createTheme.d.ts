import { Theme } from '../theme';

export interface ThemeOptions {
  palette?: {
    primary?: {
      main?: string;
      secondary?: string;
      tertiary?: string;
    };
    secondary?: {
      main?: string;
      secondary?: string;
      tertiary?: string;
    };
    tertiary?: {
      main?: string;
      secondary?: string;
      tertiary?: string;
    };
    success?: {
      main?: string;
      secondary?: string;
    };
    warning?: {
      main?: string;
      secondary?: string;
    };
    info?: {
      main?: string;
      secondary?: string;
    };
    error?: {
      main?: string;
      secondary?: string;
    };
    neutral?: {
      main?: string,
      secondary?: string,
      tertiary?: string;
      light?: string
      dark?: string
    }
  };
}

/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @returns A complete, ready-to-use theme object.
 */
export default function createTheme(options?: ThemeOptions): Theme;
