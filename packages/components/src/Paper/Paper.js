import { forwardRef } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';
import PropType, { number, object, string } from 'prop-types';

const detectColor = (theme, color) => {
  const colorSplit = color.split('-');
  const colorFound = theme.palette[colorSplit[0]];
  if (colorFound) {
    return colorFound[colorSplit[1] || 'main'];
  }
  return color;
};

const useStyleSheet = createStyleSheet(
  (theme, props) => {
    return {
      paper: {
        backgroundColor: detectColor(theme, props.color || 'neutral-tertiary'),
        padding: props.padding || 5,
        width: props.size.width || props.size,
        height: props.size.height || props.size,
        borderRadius: 5,
      },
      outlined: {
        border: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.neutral.dark,
      },
      boxShadow: {
        boxShadow: `0 ${props.elevation}px ${
          Number(props.elevation) < 3 ? '4' : Number(props.elevation) * 2
        }px rgba(0, 0, 0, 0.25)`,
      },
    };
  },
  { key: 'Paper' },
);

const Paper = forwardRef(function Paper(props, ref) {
  const { elevation, variant, className, ...otherProps } = props;
  const { classes, cx } = useStyleSheet(props);
  return (
    <div
      {...otherProps}
      ref={ref}
      className={cx(
        variant === 'outlined' ? classes.outlined : '',
        elevation >= 0 ? classes.boxShadow : '',
        classes.paper,
        className,
      )}
    />
  );
});

Paper.propTypes = {
  className: PropType.string,
  elevation: PropType.oneOfType([string, number]),
  size: PropType.oneOfType([string, object]),
  variant: PropType.string,
};

Paper.defaultProps = {
  size: 'auto',
};

export default Paper;
