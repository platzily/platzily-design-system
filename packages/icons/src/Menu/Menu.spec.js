import { render } from '@testing-library/react';
import Menu from './Menu';

describe('@icons/User', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Menu title="menu"/>);
    // act
    const icon = getByTitle(/menu/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
