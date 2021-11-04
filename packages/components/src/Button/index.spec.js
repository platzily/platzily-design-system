import { render } from '@testing-library/react';
import Button from './Button';

describe('@components/Button', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Button types="button"/>);
    // act
    const icon = getByTitle(/Button/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
