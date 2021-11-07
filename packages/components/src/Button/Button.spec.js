import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@platzily-ui/styling';
import Button from './Button';

describe('@components/Button', () => {
  const spy = {};

  beforeEach(() => {
    spy.console = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    spy.console.mockRestore();
  });

  it('Given a normal call it should render properly', () => {
    // arrange
    const { getByRole } = render(
      <ThemeProvider theme={createTheme()}>
        <Button type="button" />
      </ThemeProvider>,
    );

    // act
    const button = getByRole('button');

    // assert
    expect(button).toBeDefined();
  });

  it('Given className sent it should be combined with className of the component', () => {
    // arrange
    const { getByRole } = render(
      <ThemeProvider theme={createTheme()}>
        <Button type="button" className="foo" />
      </ThemeProvider>,
    );

    // act
    const button = getByRole('button');

    // assert
    expect(button).toHaveClass('foo');
  });

  it('Given a onClick prop it should be called when clicked', () => {
    // arrange
    const handleClick = jest.fn();

    const { getByRole } = render(
      <ThemeProvider theme={createTheme()}>
        <Button type="button" onClick={handleClick}>
          ClickMe
        </Button>
      </ThemeProvider>,
    );

    // act
    fireEvent.click(getByRole('button', { name: /ClickMe/i }));

    // assert
    expect(handleClick).toHaveBeenCalled();
  });
});
