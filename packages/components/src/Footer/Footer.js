import { forwardRef } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';
import PropTypes from 'prop-types';

const useStyleSheet = createStyleSheet(
  (theme, { bgColor, height }) => ({
    footer: {
      backgroundColor: bgColor || theme.palette.neutral.light,
      width: '100%',
      height: height || 60,
      padding: 15,
      margin: 0,
      color: theme.palette.neutral.secondary,
    },
  }),
  { key: 'footer' },
);

const Footer = forwardRef(function Footer(props, ref) {
  const { bgColor, height, className, ...otherProps } = props;
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
  height: PropTypes.number,
};

export default Footer;
