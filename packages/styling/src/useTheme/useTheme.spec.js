import React from 'react';
import { render } from '@testing-library/react';
import useTheme from './useTheme';
import ThemeProvider from '../ThemeProvider';

describe('@styling/useTheme', () => {
  it('Given a render inside a ThemeProvider it should exposes it context', () => {
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
  });

  it('Given a render not inside a ThemeProvider it should return void', () => {
    // arrange
    const Test = () => {
      const theme = useTheme();

      return <p>{theme}</p>;
    };

    const { asFragment } = render(<Test />);
    const html = asFragment();

    // act
    const text = html.querySelector('p');

    // assert
    expect(text.innerHTML).toBe('');
  });
});
