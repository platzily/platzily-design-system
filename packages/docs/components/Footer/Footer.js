import { Footer } from '@platzily-ui/components';
import { createStyleSheet } from '@platzily-ui/styling';

const useStyleSheet = createStyleSheet(
  (theme) => ({
    footer:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'right',
      marginTop: 40,
      color: theme.palette.neutral.secondary
    }
  }),
  { key: 'footer' }
);

export default function FooterComponent() {

  const { classes } = useStyleSheet();

  return (
    <Footer className={classes.footer} >
      © Platzily-UI 2021. All Rights Reserved.
    </Footer>
  );
}
