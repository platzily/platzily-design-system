import { Fragment } from 'react';
import { ThemeProvider } from '@platzily-ui/styling';

import DefaultStyledBoxComponent from './DefaultStyledBox';
import UseThemeStyledBoxComponent from './UseThemeStyledBox';
import ColorComponent from './ColorComponent';

import HeaderComponent from '../Header/Header';
import FooterComponent from '../Footer/Footer';

import { customTheme } from './theme';

export function DefaultStyledBox({ color }) {
  return (
    <DefaultStyledBoxComponent color={color} />
  );
}

export function UseThemeStyledBox({ color }) {
  return (
    <UseThemeStyledBoxComponent color={color} />
  );
}

export function CustomThemeStyledBox() {
  return (
    <DefaultStyledBoxComponent />
  );
}

export function CombinedThemesStyledBox() {
  return (
    <Fragment>
      <DefaultStyledBoxComponent />
      <br />
      <ThemeProvider theme={customTheme}>
        <DefaultStyledBoxComponent />
      </ThemeProvider>
    </Fragment>
  );
}

export function Color({ color, colorType }) {
  return (
    <ColorComponent color={color} colorType={colorType} />
  );
}

export function Header() {
  return (
    <HeaderComponent  />
  );
}

export function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FooterComponent  />
    </ThemeProvider>
  );
}

export { default as UseWindowDimensionsStyledBox } from './UseWindowDimensionsStyledBox';

