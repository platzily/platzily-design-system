import { render } from '@testing-library/react';
import Logout from './Logout';

describe('@icons/Logout', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Logout title="logout"/>);
    // act
    const icon = getByTitle(/logout/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
