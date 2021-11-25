import { forwardRef } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';

const useStyleSheet = createStyleSheet((theme) => {
  return {
    root: {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      padding: theme.spacing(2)
    }
  };
});

const ListItem = forwardRef(function ListItem(props, ref) {
  const { classes } = useStyleSheet(props);
  return <div {...props} ref={ref} className={classes.root}/>;
});

export default ListItem;
