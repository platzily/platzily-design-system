import { render } from '@testing-library/react';
import Search from './Search';

describe('@icons/Search', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Search title="search"/>);
    // act
    const icon = getByTitle(/search/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
