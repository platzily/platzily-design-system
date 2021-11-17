import { ThemeProvider } from '@platzily-ui/styling';

import DefaultStyledBoxComponent from './DefaultStyledBox';
import UseThemeStyledBoxComponent from './UseThemeStyledBox';
import ColorComponent from './ColorComponent';

import HeaderComponent from '../Header/Header';
import InputComponent from '../Input/Input';

import { defaultTheme, customTheme } from './theme';

export function DefaultStyledBox({ color }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultStyledBoxComponent color={color} />
    </ThemeProvider>
  );
}

export function UseThemeStyledBox({ color }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UseThemeStyledBoxComponent color={color} />
    </ThemeProvider>
  );
}

export function CustomThemeStyledBox() {
  return (
    <ThemeProvider theme={customTheme}>
      <DefaultStyledBoxComponent />
    </ThemeProvider>
  );
}

export function CombinedThemesStyledBox() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultStyledBoxComponent />
      <br />
      <ThemeProvider theme={customTheme}>
        <DefaultStyledBoxComponent />
      </ThemeProvider>
    </ThemeProvider>
  );
}

export function Color({ color, colorType }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ColorComponent color={color} colorType={colorType} />
    </ThemeProvider>
  );
}

export function Header() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HeaderComponent  />
    </ThemeProvider>
  );
}

export function Input(props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <InputComponent {...props}/>
    </ThemeProvider>
  );
}
