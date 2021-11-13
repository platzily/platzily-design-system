import { render } from '@testing-library/react';
import Isotype from './Isotype';

describe('@icons/Logotype', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Isotype title="isotype"/>);
    // act
    const icon = getByTitle(/isotype/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
