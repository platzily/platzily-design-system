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
      secondaty: string,
      light: string
      disable: string
    }
  };
}
