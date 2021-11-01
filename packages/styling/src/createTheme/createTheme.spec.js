import createTheme from './createTheme';
import { theme as defaultTheme } from '../theme';

describe('@styling/createTheme', () => {
  it('Given a empty call it should return the default theme', () => {
    // arrange
    const theme = createTheme();
    // assert
    expect(theme).toEqual(defaultTheme);
  });

  it('Given a non complete object passed as a prop it should return the default theme mixed with the changes values', () => {
    // arrange
    const mainColor = 'rebeccapurple';
    const theme = createTheme({
      palette: {
        primary: {
          main: mainColor
        }
      }
    });
    const { primary, ...nonPrimaryTheme } = theme.palette;
    const { primary: defaultPrimary, ...nonPrimaryDefaultTheme } = defaultTheme.palette;

    // assert
    expect(theme.palette.primary.main).toBe(mainColor);
    expect(nonPrimaryTheme).toEqual(nonPrimaryDefaultTheme);
  });
});
