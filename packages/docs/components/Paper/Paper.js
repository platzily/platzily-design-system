import { Paper } from '@platzily-ui/components';
import { createTheme, ThemeProvider, createStyleSheet } from '@platzily-ui/styling';

const useStyleSheet = createStyleSheet(() => ({
  root: {
    margin: 10,
    height: 100,
    width: 100
  }
}));

const PaperComponent = (props) => {
  const theme = createTheme();
  const { classes } = useStyleSheet();

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root} {...props} />
    </ThemeProvider>
  );
};

export default PaperComponent;
