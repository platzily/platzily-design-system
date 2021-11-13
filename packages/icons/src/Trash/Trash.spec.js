import { render } from '@testing-library/react';
import Trash from './Trash';

describe('@icons/Trash', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Trash title="trash"/>);
    // act
    const icon = getByTitle(/trash/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
