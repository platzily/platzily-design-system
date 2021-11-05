import { Button } from '@platzily-ui/components';
import { ThemeProvider } from '@platzily-ui/styling';
import { defaultTheme } from './theme';

export default function ButtonComponent(props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button type="button" style={{ margin: '10px' }} {...props}>
        {props.children}
      </Button>
    </ThemeProvider>
  );
}
