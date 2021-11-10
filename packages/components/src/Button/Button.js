import { forwardRef } from 'react';
import { createStyleSheet, alpha as convertRgba } from '@platzily-ui/styling';
import { PropTypes } from 'prop-types';

const useStyleSheet = createStyleSheet(
  (theme) => {
    return {
      contained: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 5,
        paddingTop: 10,
        paddingLeft: 15,
        paddingBottom: 9,
        paddingRight: 15,
        textAlign: 'center',
        fontWeight: 500,
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        lineHeight: '1rem',
        letterSpacing: '0.02em',
        color: theme.palette.primary.main,
        '&:hover': {
          color: theme.palette.neutral.light,
          backgroundColor: convertRgba(theme.palette.secondary.main, 0.6),
        },
        '&:focus': {
          backgroundColor: convertRgba(theme.palette.secondary.main, 0.6),
        },
        '&:disabled': {
          backgroundColor: theme.palette.neutral.secondary,
          color: theme.palette.neutral.tertiary,
          cursor: 'not-allowed',
        },
      },
      outlined: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        borderWidth: 1.5,
        borderStyle: 'solid',
        borderColor: theme.palette.primary.main,
        paddingTop: 10,
        paddingLeft: 15,
        paddingBottom: 9,
        paddingRight: 15,
        textAlign: 'center',
        fontWeight: 500,
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        lineHeight: '1rem',
        letterSpacing: '0.02em',
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: convertRgba(theme.palette.secondary.main, 0.6),
        },
        '&:focus': {
          backgroundColor: theme.palette.neutral.light,
          borderColor: theme.palette.secondary.main,
        },
        '&:disabled': {
          backgroundColor: 'transparent',
          color: theme.palette.neutral.secondary,
          borderColor: theme.palette.neutral.secondary,
          cursor: 'not-allowed'
        },
      },
      text: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingTop: 10,
        paddingLeft: 15,
        paddingBottom: 9,
        paddingRight: 15,
        fontWeight: 700,
        fontSize: '1rem',
        lineHeight: '1rem',
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        textDecoration: 'underline',
        textDecorationColor: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
        '&:hover': {
          color: theme.palette.info.main,
          textDecorationColor: theme.palette.info.main,
        },
        '&:focus': {
          color: theme.palette.primary.main,
          textDecorationColor: theme.palette.primary.main
        },
        '&:disabled': {
          color: theme.palette.neutral.secondary,
          textDecorationColor: theme.palette.neutral.secondary,
          cursor: 'not-allowed'
        }
      }
    };
  },
  { key: 'button' },
);

const Button = forwardRef(function Button(props, ref) {
  const { variant, className, ...otherProps } = props;
  const { classes, cx } = useStyleSheet(props);
  return (
    <button
      ref={ref}
      type="button"
      {...otherProps}
      className={cx(classes[variant], className)}
    />
  );
});

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
};

Button.defaultProps = {
  variant: 'contained',
};

export default Button;
