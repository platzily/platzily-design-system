import { render } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@platzily-ui/styling';
import Footer from './Footer';

describe('@Components/Footer', () => {
  it('Given the Footer Component, when the props provide bgColor prop with a color then the component will take background-color and his value. ', () => {
    // arrange
    const theme = createTheme();
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Footer role="banner" bgColor={theme.palette.secondary.main} />
      </ThemeProvider>,
    );

    // act
    const FooterTestedText = getByRole('banner');

    // assert
    expect(FooterTestedText).toBeDefined();
    expect(FooterTestedText).toHaveStyle(`background-color:#97c343`);
  });

  it('Given the Footer Component, when the props provide height prop with a number value then the component will take the value of that height. ', () => {
    // arrange
    const theme = createTheme();
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Footer role="banner" height={120} />
      </ThemeProvider>,
    );

    // act
    const FooterTestedText = getByRole('banner');

    // assert
    expect(FooterTestedText).toBeDefined();
    expect(FooterTestedText).toHaveStyle(`height: 120px`);
  });

  it('Given the Footer Component, when the user provide children inside the component then the component will take it', () => {
    // arrange
    const { getByRole } = render(
      <ThemeProvider theme={createTheme()}>
        <Footer role="banner" >
          FooterChildren
        </Footer>
      </ThemeProvider>,
    );

    // act
    const FooterTestedText = getByRole('banner');

    // assert
    expect(FooterTestedText).toBeDefined();
    expect(FooterTestedText).toHaveTextContent('FooterChildren');
  });
});
