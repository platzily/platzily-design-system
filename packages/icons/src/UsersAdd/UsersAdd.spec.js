import { render } from '@testing-library/react';
import UsersAdd from './UsersAdd';

describe('@icons/Dashboar', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<UsersAdd title="usersAdd"/>);
    // act
    const icon = getByTitle(/usersAdd/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
