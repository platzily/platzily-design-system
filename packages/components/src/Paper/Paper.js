import { forwardRef } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';
import PropTypes from 'prop-types';

const detectColor = (theme, color) => {
  const colorSplit = color.split('-');
  const colorFound = theme.palette[colorSplit[0]];
  if (colorFound) {
    return colorFound[colorSplit[1] || 'main'];
  }
  return color;
};

const useStyleSheet = createStyleSheet(
  (theme, { padding, color, elevation }) => ({
    paper: {
      backgroundColor: detectColor(theme, color || 'neutral-tertiary'),
      padding: padding || theme.spacing(),
      borderRadius: theme.spacing(),
    },
    outlined: {
      border: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.neutral.secondary,
    },
    boxShadow: {
      boxShadow: theme.elevations[elevation],
    },
  }),
  { key: 'Paper' },
);

const Paper = forwardRef(function Paper(props, ref) {
  const { padding, elevation, variant, className, ...otherProps } = props;
  const { classes, cx } = useStyleSheet(props);
  return (
    <div
      {...otherProps}
      ref={ref}
      className={cx({
        [classes.outlined]: variant === 'outlined',
        [classes.boxShadow]: elevation >= 0,
        [classes.paper]: true,
        [className]: !!className,
      })}
    />
  );
});

Paper.propTypes = {
  className: PropTypes.string,
  elevation: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.string,
};

Paper.defaultProps = {
  className: '',
  elevation: 0,
  variant: undefined,
};

export default Paper;
