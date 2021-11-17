import { forwardRef } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';
import PropTypes from 'prop-types';

const useStyleSheet = createStyleSheet(
  (theme, { bgColor, position }) => ({
    footer: {
      backgroundColor: bgColor || theme.palette.neutral.light,
      position,
      width: '100%',
      height: 60,
      padding: 15,
      margin: 0,
      color: theme.palette.neutral.secondary,
    },
  }),
  { key: 'footerWrapper' },
);

const Footer = forwardRef(function Footer(props, ref) {
  const { bgColor, position, className, ...otherProps } = props;
  const { classes, cx } = useStyleSheet(props);

  return <footer
    ref={ref}
    className={cx(classes.footer, className)}
    {...otherProps}
  />
  ;
});

Footer.propTypes = {
  bgColor: PropTypes.string,
  className: PropTypes.string,
  position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky', 'unset']),
};

Footer.defaultProps = {
  position: 'fixed',
};

export default Footer;
