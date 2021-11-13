import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('@icons/Dashboard', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Dashboard title="dashboard"/>);
    // act
    const icon = getByTitle(/dashboard/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
