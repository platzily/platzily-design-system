export interface Theme {
  palette: {
    primary: {
      main: string;
      secondary: string;
      tertiary: string;
    };
    secondary: {
      main: string;
      secondary: string;
      tertiary: string;
    };
    tertiary: {
      main: string;
      secondary: string;
      tertiary: string;
    };
    success : {
      main: string;
      secondary: string;
    };
    warning : {
      main: string;
      secondary: string;
    };
    info: {
      main: string;
      secondary: string;
    };
    error: {
      main: string;
      secondary: string;
    };
    neutral: {
      main: string,
      secondary: string,
      tertiary: string;
      light: string
      dark: string
    }
  };
}
