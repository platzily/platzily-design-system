import { forwardRef } from 'react';
import { createStyleSheet, alpha as convertRgba } from '@platzily-ui/styling';
import { cx } from '@emotion/css';

const useStyleSheet = createStyleSheet(
  (theme, props) => {
    return {
      primaryButton: {
        backgroundColor: props.color || theme.palette.secondary.main,
        borderRadius: '5px',
        width: '210px',
        height: '40px',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: '20px',
        color: theme.palette.primary.main,
        '&:hover': {
          color: theme.palette.text.light,
          backgroundColor: convertRgba(props.color || theme.palette.secondary.main, 0.6),
        },
        '&:focus': {
          backgroundColor: convertRgba(props.color || theme.palette.secondary.main, 0.6),
        },
        '&:disabled': {
          backgroundColor: theme.palette.text.disabled,
          color: theme.palette.text.secondary,
          PointerEvents: 'none',
          cursor: 'default',
        },
      },
      secondaryButton: {
        backgroundColor: 'transparent',
        borderRadius: '5px',
        border: '1.5px solid',
        borderColor: props.color || theme.palette.primary.main,
        width: '210px',
        height: '40px',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: '20px',
        color: props.color || theme.palette.primary.main,
        '&:hover': {
          backgroundColor: convertRgba(props.color ||theme.palette.secondary.main, 0.6),
        },
        '&:focus': {
          backgroundColor: theme.palette.text.light,
          borderColor: props.color || theme.palette.secondary.main,
        },
        '&:disabled': {
          PointerEvents: 'none',
          backgroundColor: 'transparent',
          color: theme.palette.text.disabled,
          borderColor: theme.palette.text.disabled,
          cursor: 'default',
        },
      },
    };
  },
  { key: 'button' },
);

const selectClass = (props) => {
  return props.variant === 'secondary' ? 'secondaryButton' : 'primaryButton';
};

const combiningClassName = (classes, props) => {
  return cx(classes, props.className);
};

const Button = forwardRef(function Button(props, ref) {
  const { classes } = useStyleSheet(props);
  const buttonStyle = selectClass(props);
  return (
    <button
      ref={ref}
      type="button"
      {...props}
      className={combiningClassName(classes[buttonStyle], props)}
    />
  );
});

export default Button;
