import { Button } from '@platzily-ui/components';
import { ThemeProvider, createStyleSheet } from '@platzily-ui/styling';
import { defaultTheme } from './theme';

const useStyleSheet = createStyleSheet(
  () => {
    return {
      box: {
        margin: '10px',
      },
    };
  },
  { key: 'margin' },
);

export default function ButtonComponent(props) {
  const { classes } = useStyleSheet();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button type="button" className={classes.box} {...props}>
        {props.children}
      </Button>
    </ThemeProvider>
  );
}
