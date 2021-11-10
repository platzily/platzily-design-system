import { ThemeProvider } from '@platzily-ui/styling';
import { Text } from '@platzily-ui/components';
import { defaultTheme } from './theme';

export default function TextComponent(props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Text {...props}/>
    </ThemeProvider>
  );
}
