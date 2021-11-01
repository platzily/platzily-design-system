/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import createStyleSheet from './createStyleSheet';
import ThemeProvider from '../ThemeProvider';
import { theme as defaultTheme } from '../theme';

describe('@styling/createStyleSheet', () => {
  it('Given a render inside a ThemeProvider it should return a regular StyleSheet object', () => {
    // arrange
    const useStyles = createStyleSheet({ root: {} }, { key: 'foo' });
    let styleSheet = {};

    const Test = () => {
      const { classes } = useStyles();
      styleSheet = useStyles();

      return <div role="main" className={classes.root} />;
    };

    const { getByRole } = render(
      <ThemeProvider theme={defaultTheme}>
        <Test />
      </ThemeProvider>
    );

    // act
    const main = getByRole('main');

    // assert
    expect(main.className.includes('foo')).toBeTruthy();
    expect(styleSheet.classes).toBeDefined();
    expect(styleSheet.classes).toHaveProperty('root');
    expect(styleSheet.cx).toBeDefined();
    expect(styleSheet.theme).toBeDefined();
  });

  it('Given a render inside a ThemeProvider it should expose the theme', () => {
    // arrange
    const useStyles = createStyleSheet((theme) => ({ [theme.palette.primary.main]: {} }), { key: 'foo' });
    let styleSheet = {};

    const Test = () => {
      const { classes, theme } = useStyles();
      styleSheet = useStyles();

      return <div role="main" className={classes[theme.palette.primary.main]} />;
    };

    const { getByRole } = render(
      <ThemeProvider theme={{ palette: { primary: { main: 'bar' } } }}>
        <Test />
      </ThemeProvider>
    );

    // act
    const main = getByRole('main');

    // assert
    expect(main.className.includes('foo')).toBeTruthy();
    expect(styleSheet.classes).toBeDefined();
    expect(styleSheet.classes).toHaveProperty('bar');
    expect(styleSheet.cx).toBeDefined();
    expect(styleSheet.theme).toBeDefined();
  });

  it('Given a render inside a ThemeProvider it should expose the props when passed', () => {
    // arrange
    const useStyles = createStyleSheet((_, props) => ({ [props.className]: {} }), { key: 'foo' });
    let styleSheet = {};

    const Test = (props) => {
      const { classes } = useStyles(props);
      styleSheet = useStyles(props);

      return <div role="main" className={classes[props.className]} />;
    };

    const { getByRole } = render(
      <ThemeProvider theme={defaultTheme}>
        <Test className="bar" />
      </ThemeProvider>
    );

    // act
    const main = getByRole('main');

    // assert
    expect(main.className.includes('foo')).toBeTruthy();
    expect(styleSheet.classes).toBeDefined();
    expect(styleSheet.classes).toHaveProperty('bar');
    expect(styleSheet.cx).toBeDefined();
    expect(styleSheet.theme).toBeDefined();
  });
});
