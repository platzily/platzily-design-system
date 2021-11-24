import { render } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@platzily-ui/styling';
import Footer from './Footer';

describe('@Components/Footer', () => {
  it('Given the Footer Component, when the props provide an object within the styles attribute then the component will take those styles ', () => {
    // arrange
    const theme = createTheme();
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Footer role="banner" style={{ color: theme.palette.secondary.main }} />
      </ThemeProvider>,
    );

    // act
    const FooterTestedText = getByRole('banner');
    // assert
    expect(FooterTestedText).toBeDefined();
    expect(FooterTestedText).toHaveStyle(`color:#97c343`);
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
