import { render } from '@testing-library/react';
import Duplicate from './Duplicate';

describe('@icons/Duplicate', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Duplicate title="duplicate"/>);
    // act
    const icon = getByTitle(/duplicate/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
