import { Footer } from '@platzily-ui/components';
import { useTheme } from '@platzily-ui/styling';

export default function FooterComponent() {
  const theme = useTheme();

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    marginTop: 40,
    color: theme.palette.neutral.secondary
  };

  return (
    <Footer style={headerStyle} position="static">
      © Platzily 2021. All Rights Reserved.
    </Footer>
  );
}
