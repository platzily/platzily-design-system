import { render } from '@testing-library/react';
import Click from './Click';

describe('@icons/Dashboar', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Click title="click"/>);
    // act
    const icon = getByTitle(/click/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
