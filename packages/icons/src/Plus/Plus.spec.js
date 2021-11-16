import { render } from '@testing-library/react';
import Plus from './Plus';

describe('@icons/Dashboar', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Plus title="plus"/>);
    // act
    const icon = getByTitle(/plus/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
