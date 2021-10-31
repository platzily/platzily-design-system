import { createTheme } from '@platzily-ui/styling';

export const defaultTheme = createTheme();
export const customTheme = createTheme({
  palette: {
    primary: {
      main: 'rebeccapurple'
    }
  }
});
