import { Paper } from '@platzily-ui/components';
import { createTheme, ThemeProvider } from '@platzily-ui/styling';

const PaperComponent = (props) => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Paper {...props} style={{ margin: 10 }} />
    </ThemeProvider>
  );
};

export default PaperComponent;
