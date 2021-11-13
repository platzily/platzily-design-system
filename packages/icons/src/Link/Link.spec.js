import { render } from '@testing-library/react';
import Link from './Link';

describe('@icons/Link', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Link title="link"/>);
    // act
    const icon = getByTitle(/link/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
