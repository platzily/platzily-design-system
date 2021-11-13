import { render } from '@testing-library/react';
import User from './User';

describe('@icons/Dashboar', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<User title="user"/>);
    // act
    const icon = getByTitle(/user/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
