import { render } from '@testing-library/react';
import Calendar from './Calendar';

describe('@icons/Dashboar', () => {
  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByTitle } = render(<Calendar title="calendar"/>);
    // act
    const icon = getByTitle(/calendar/i);
    // assert
    expect(icon).toBeInTheDocument();
  });
});
