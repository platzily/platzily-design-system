import React from 'react';
import { render } from '@testing-library/react';
import useWindowDimensions from './useWindowDimensions';

describe('@styling/useWindowDimensions', () => {
  it('Given a render when user call the hook it should returns windows height and widht', () => {
    // arrange
    let dimensions;
    const Test = () => {
      dimensions = useWindowDimensions();
      return null;
    };

    // act
    render(<Test />);

    // assert
    expect(dimensions.height).toBeDefined();
    expect(dimensions.height).toBe(window.innerHeight);
    expect(dimensions.width).toBeDefined();
    expect(dimensions.width).toBe(window.innerWidth);
  });
});
