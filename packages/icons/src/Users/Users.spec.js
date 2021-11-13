import { render } from '@testing-library/react';
import Users from './Users';

describe('@icons/Dashboar', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Users title="users"/>);
    // act
    const icon = getByTitle(/users/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
