import { render } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@platzily-ui/styling';
import Header from './Header';

describe('@Components/Header', () => {
  const spy = {};

  beforeEach(() => {
    spy.console = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    spy.console.mockRestore();
  });

  it('Given the Header Component, when the props provide an object within the styles attribute then the component will take those styles ', () => {
    // arrange
    const theme = createTheme();
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Header role="banner" style={{ color: theme.palette.secondary.main }} />
      </ThemeProvider>,
    );

    // act
    const HeaderTestedText = getByRole('banner');
    // assert
    expect(HeaderTestedText).toBeDefined();
    expect(HeaderTestedText).toHaveStyle(`color:#97c343`);
  });

  it('Given the Header Component, when the props provide position attribute then the component will take those style', () => {
    // arrange
    const { getByRole } = render(
      <ThemeProvider theme={createTheme()}>
        <Header role="banner"  position={'fixed'}/>
      </ThemeProvider>,
    );

    // act
    const HeaderTestedText = getByRole('banner');

    // assert
    expect(HeaderTestedText).toBeDefined();
    expect(HeaderTestedText).toHaveStyle(`position:fixed`);
  });

  it('Given the Header Component, when the user provide children inside the component then the component will take it', () => {
    // arrange
    const { getByRole } = render(
      <ThemeProvider theme={createTheme()}>
        <Header role="banner" >
          HeaderChildren
        </Header>
      </ThemeProvider>,
    );

    // act
    const HeaderTestedText = getByRole('banner');

    // assert
    expect(HeaderTestedText).toBeDefined();
    expect(HeaderTestedText).toHaveTextContent('HeaderChildren');
  });
});
