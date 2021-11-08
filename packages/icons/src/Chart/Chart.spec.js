import { render } from '@testing-library/react';
import Chart from './Chart';

describe('@icons/Chart', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Chart title="chart"/>);
    // act
    const icon = getByTitle(/chart/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
