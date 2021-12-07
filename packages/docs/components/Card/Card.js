import { Card, Text } from '@platzily-ui/components';
import { createTheme, ThemeProvider, createStyleSheet } from '@platzily-ui/styling';

const useStyleSheet = createStyleSheet(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
}));

const Header = (props) => {
  return (
    <Text variant="title3" {...props}>
      Header
    </Text>
  );
};

const CardComponent = (props) => {
  const theme = createTheme();
  const { classes } = useStyleSheet();

  return (
    <ThemeProvider theme={theme}>
      <Card
        {...props}
        header={<Header className={classes.textCenter} />}
        className={classes.root}
        variant="outlined"
      >
        Content
      </Card>
    </ThemeProvider>
  );
};

export default CardComponent;
