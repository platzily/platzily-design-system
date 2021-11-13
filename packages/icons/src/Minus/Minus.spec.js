import { render } from '@testing-library/react';
import Minus from './Minus';

describe('@icons/Minus', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Minus title="minus"/>);
    // act
    const icon = getByTitle(/minus/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
