import { render } from '@testing-library/react';
import Logotype from './Return';

describe('@icons/Logotype', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Logotype title="logotype"/>);
    // act
    const icon = getByTitle(/logotype/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
