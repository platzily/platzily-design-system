import { render } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@platzily-ui/styling';
import Input from './Input';

describe('@Components/Input', () => {
  it('Given the Input Component, when the props provide a width and his value, then the component will take those styles', () => {
    // arrange
    const theme = createTheme();
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Input role="textbox" width={150} />
      </ThemeProvider>,
    );

    // act
    const InputTestedText = getByRole('textbox');
    // assert
    expect(InputTestedText).toBeDefined();
    expect(InputTestedText).toHaveStyle(`width:150px`);
  });

  it('Given the Input Component, when the props provide type or required attributes then the component will take those props', () => {
    // arrange
    const { getByRole } = render(
      <ThemeProvider theme={createTheme()}>
        <Input role="textbox" required />
      </ThemeProvider>,
    );

    // act
    const InputTestedText = getByRole('textbox');

    // assert
    expect(InputTestedText).toBeDefined();
    expect(InputTestedText).toHaveProperty('required');
  });

  it('Given the Input Component, when include the component inside form tag, then form tag gets properties and his values. ', () => {
    // arrange
    const { getByTestId } = render(
      <ThemeProvider theme={createTheme()}>
        <form data-testid="login-form">
          <Input type="text" name="username" value="platzily-user" />
          <Input type="password" name="password" value="12345678" />
          <Input type="checkbox" name="rememberMe" checked />
          <button type="submit">Sign in</button>
        </form>
      </ThemeProvider>,
    );

    // act
    const InputTestedText = getByTestId('login-form');

    // assert
    expect(InputTestedText).toHaveFormValues({
      username: 'platzily-user',
      rememberMe: true,
    });
  });
});
