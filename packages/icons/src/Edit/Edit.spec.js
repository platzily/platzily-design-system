import { render } from '@testing-library/react';
import Edit from './Edit';

describe('@icons/Edit', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Edit title="edit"/>);
    // act
    const icon = getByTitle(/edit/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
