import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@platzily-ui/styling';
import ListItem from './ListItem';

describe('@components/Button', () => {

  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByRole } = render(
      <ThemeProvider theme={createTheme()}>
        <ListItem/>
      </ThemeProvider>,
    );

    // act
    const button = getByRole('button');

    // assert
    expect(button).toBeDefined();
  });

  it('Given a onClick prop it should be called when clicked', () => {
    // arrange
    const handleClick = jest.fn();

    const { getByRole } = render(
      <ThemeProvider theme={createTheme()}>
        <ListItem onClick={handleClick}>
          ClickMe
        </ListItem>
      </ThemeProvider>,
    );

    // act
    fireEvent.click(getByRole('button', { name: /ClickMe/i }));

    // assert
    expect(handleClick).toHaveBeenCalled();
  });
});
