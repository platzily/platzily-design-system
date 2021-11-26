import { forwardRef } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';
import PropTypes from 'prop-types';

const useStyleSheet = createStyleSheet(
  (theme, { width, height }) => ({
    inputDefault: {
      width: width || 199,
      height: height || 40,
      backgroundColor: theme.palette.neutral.light,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.neutral.secondary,
      '&:focus': {
        borderColor: theme.palette.tertiary.main,
        backgroundColor: theme.palette.neutral.light,
        outline: 'none',
      },
      '&:disabled': {
        borderColor: theme.palette.neutral.tertiary,
        cursor: 'not-allowed',
      },

      '&:hover': {
        borderColor: theme.palette.tertiary.main,
      },
    },

  }),
  { key: 'Input' },
);

const Input = forwardRef(function Input(props, ref) {
  const { className, width, height, ...otherProps } = props;
  const { classes, cx } = useStyleSheet(props);

  return (
    <input
      ref={ref}
      className={cx({
        [classes.inputDefault]: true,
        [className]: !!className,
      })}
      {...otherProps}
    />
  );
});

Input.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};



export default Input;
