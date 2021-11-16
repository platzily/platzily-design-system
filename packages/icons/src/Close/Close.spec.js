import { render } from '@testing-library/react';
import Close from './Close';

describe('@icons/Close', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Close title="close"/>);
    // act
    const icon = getByTitle(/close/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
