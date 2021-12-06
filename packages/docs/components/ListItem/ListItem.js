import { ListItem } from '@platzily-ui/components';
import { createTheme, ThemeProvider } from '@platzily-ui/styling';

const ListItemComponent = (props) => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <ListItem {...props}/>
    </ThemeProvider>
  );
};

export default ListItemComponent;
