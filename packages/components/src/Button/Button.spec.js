import { render } from '@testing-library/react';
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
    // act
    render(
      <ThemeProvider theme={createTheme()}>
        <Button type="button" />
      </ThemeProvider>,
    );

    // assert
    expect(spy.console).not.toBeCalled();
  });
});
