import React from 'react';
import { render } from '@testing-library/react/pure';
import useTheme from '../useTheme';
import ThemeProvider from './ThemeProvider';

describe('@styling/ThemeProvider', () => {
  const spy = {};

  beforeEach(() => {
    spy.console = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    spy.console.mockRestore();
  });

  it('Given a theme prop it should provide the theme', () => {
    // arrange
    const Test = () => {
      const theme = useTheme();

      return <p>{theme.foo}</p>;
    };

    const { getByText } = render(
      <ThemeProvider theme={{ foo: 'foo' }}>
        <Test />
      </ThemeProvider>
    );

    // act
    const text = getByText('foo');

    // assert
    expect(text).toBeDefined();
    expect(spy.console).not.toBeCalled();
  });

  it('Given a nested context theme should be merged', () => {
    // arrange
    const Test = () => {
      const theme = useTheme();

      return <p>{theme.bar}{theme.foo}</p>;
    };

    const { getByText } = render(
      <ThemeProvider theme={{ bar: 'bar' }}>
        <ThemeProvider theme={{ foo: 'foo' }}>
          <Test />
        </ThemeProvider>
      </ThemeProvider>
    );

    // act
    const text = getByText('barfoo');

    // assert
    expect(text).toBeDefined();
    expect(spy.console).not.toBeCalled();
  });

  it('Given a function theme and not higher theme it should warn about missing provider', () => {
    // act
    render(
      <ThemeProvider theme={(theme) => theme}>
        <div />
      </ThemeProvider>,
    );

    // assert
    expect(spy.console).toBeCalled();
  });

  it('Given a nested function theme that do not return and object it shoudl warn about the issue', () => {
    // act
    render(
      <ThemeProvider theme={{ bar: 'bar' }}>
        <ThemeProvider theme={() => {}}>
          <div />
        </ThemeProvider>
      </ThemeProvider>,
    );

    // assert
    expect(spy.console).toBeCalled();
  });
});
