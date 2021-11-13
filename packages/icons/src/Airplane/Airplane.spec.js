import { render } from '@testing-library/react';
import Airplane from './Airplane';

describe('@icons/Search', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Airplane title="airplane"/>);
    // act
    const icon = getByTitle(/airplane/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
