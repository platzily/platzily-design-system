import { forwardRef } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';
import PropTypes from 'prop-types';

const useStyleSheet = createStyleSheet(
  (theme, { bgColor, position }) => ({
    header: {
      backgroundColor: bgColor || theme.palette.text.light,
      position,
      width: '100%',
      height: 60,
      left: 0,
      top: 0,
      margin: 0,
    },
  }),
  { key: 'headerWrapper' },
);

const Header = forwardRef(function Header(props, ref) {
  const { bgColor, position, className, ...otherProps } = props;
  const { classes, cx } = useStyleSheet(props);
  return <header ref={ref} className={cx(classes.header, className)} {...otherProps} />;
});

Header.propTypes = {
  bgColor: PropTypes.string,
  className: PropTypes.string,
  position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky', 'unset' ])
};

Header.defaultProps = {
  position: 'unset',
};

export default Header;
