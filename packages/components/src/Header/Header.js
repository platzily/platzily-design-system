import { forwardRef } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';
import { cx } from '@emotion/css';

const useStyleSheet = createStyleSheet(
  (theme, props) => ({
    header: {
      position: props.position,
      width: '100%',
      height: '60px',
      left: 0,
      top: 0,
      backgroundColor: props.backgroundColor || theme.palette.text.light,
      margin: 0,
    },
  }),
  { key: 'headerWrapper' },
);

const Header = forwardRef(function Header(props, ref) {
  const { classes } = useStyleSheet(props);
  return <header ref={ref} className={cx(classes.header, props)} {...props} />;
});

export default Header;
