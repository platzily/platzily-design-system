import { forwardRef } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';
import PropTypes from 'prop-types';

const useStylesheet = createStyleSheet(() => ({
  root: {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentcolor',
    flexShrink: 0,
  },
  xs: {
    fontSize: '0.5rem'
  },
  sm: {
    fontSize: '0.75rem'
  },
  md: {
    fontSize: '1rem'
  },
  lg: {
    fontSize: '1.5rem'
  },
  xl: {
    fontSize: '2rem'
  },
  xxl: {
    fontSize: '2.5rem'
  }
}));


const SvgIcon = forwardRef(function SvgIcon(props, ref) {
  const { children, size, className, ...other } = props;
  const { cx, classes } = useStylesheet(props);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...other}
      className={cx(classes.root, classes[size], className)}
    >
      {children}
    </svg>
  );
});

SvgIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
};

SvgIcon.defaultProps = {
  size: 'md',
  className: ''
};

export default SvgIcon;
