export interface Theme {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    success : {
      main: string
    };
    warning : {
      main: string
    };
    info: {
      main: string
    };
    error: {
      main: string
    };
    text: {
      main: string,
      secondary: string,
      light: string
      disabled: string
    }
  };
}
