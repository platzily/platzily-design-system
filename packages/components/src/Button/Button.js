import { forwardRef } from 'react';
import { createStyleSheet, alpha as convertRgba } from '@platzily-ui/styling';
import { cx } from '@emotion/css';

const useStyleSheet = createStyleSheet(
  (theme) => {
    return {
      primary: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 5,
        width: 210,
        height: 40,
        textAlign: 'center',
        fontWeight: 500,
        fontSize: '1.25rem',
        color: theme.palette.primary.main,
        '&:hover': {
          color: theme.palette.text.light,
          backgroundColor: convertRgba(theme.palette.secondary.main, 0.6),
        },
        '&:focus': {
          backgroundColor: convertRgba(theme.palette.secondary.main, 0.6),
        },
        '&:disabled': {
          backgroundColor: theme.palette.text.disabled,
          color: theme.palette.text.secondary,
          cursor: 'not-allowed',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        borderWidth: 1.5,
        borderStyle: 'solid',
        borderColor: theme.palette.primary.main,
        width: 210,
        height: 40,
        textAlign: 'center',
        fontWeight: 500,
        fontSize: '1.25rem',
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: convertRgba(theme.palette.secondary.main, 0.6),
        },
        '&:focus': {
          backgroundColor: theme.palette.text.light,
          borderColor: theme.palette.secondary.main,
        },
        '&:disabled': {
          cursor: 'not-allowed',
          backgroundColor: 'transparent',
          color: theme.palette.text.disabled,
          borderColor: theme.palette.text.disabled,
        },
      },
    };
  },
  { key: 'button' },
);

const combiningClassName = (classes, props) => {
  return cx(classes[props.variant || 'primary'], props.className);
};

const Button = forwardRef(function Button(props, ref) {
  const { classes } = useStyleSheet(props);
  return (
    <button
      ref={ref}
      type="button"
      {...props}
      className={combiningClassName(classes, props)}
    />
  );
});

export default Button;
