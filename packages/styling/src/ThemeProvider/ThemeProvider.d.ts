import { ReactNode, ReactElement } from 'react';
import { Theme } from '../theme';

export interface ThemeProviderProps<T = Theme> {
  children?: ReactNode;
  theme: Partial<T>;
}

export default function ThemeProvider<T = Theme>(props: ThemeProviderProps<T>): ReactElement<ThemeProviderProps<T>>;
