import { render } from '@testing-library/react';
import Return from './Return';

describe('@icons/Return', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Return title="return"/>);
    // act
    const icon = getByTitle(/return/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
