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

  it('Given a styling by style attribute using theme with createTheme() ', () => {
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
    expect(spy.console).not.toBeCalled();
  });

  it('Given a styling by style attribute using one color directly ', () => {
    // arrange
    const { getByRole } = render(
      <ThemeProvider theme={createTheme()}>
        <Header role="banner" style={{ backgroundColor: 'black' }} />

      </ThemeProvider>,
    );

    // act
    const HeaderTestedText = getByRole('banner');
    // assert
    expect(HeaderTestedText).toBeDefined();
    expect(HeaderTestedText).toHaveStyle(`background-color:black`);
    expect(spy.console).not.toBeCalled();
  });

  it('Given a styling by prop inject one color directly', () => {
    // arrange
    const { getByRole } = render(
      <ThemeProvider theme={createTheme()}>
        <Header role="banner"  backgroundColor={'red'}/>
      </ThemeProvider>,
    );

    // act
    const HeaderTestedText = getByRole('banner');

    // assert
    expect(HeaderTestedText).toBeDefined();
    expect(HeaderTestedText).toHaveStyle(`background-color:red`);
    // expect(spy.console).not.toBeCalled();
  });

  it('Given a children by prop inject ', () => {
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
    expect(spy.console).not.toBeCalled();
  });
});
