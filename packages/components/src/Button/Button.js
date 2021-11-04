import { forwardRef } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';
import { cx } from '@emotion/css';

const convertRgba = (color, alpha) => {
  return `rgba(${color}, ${color}, ${color}, ${alpha})`;
};

const selectClass = (props) => {
  return props.mode === 'secondary' ? 'secondaryButton' : 'primaryButton';
};

const useStyleSheet = createStyleSheet(
  (theme, props) => {
    return {
      primaryButton: {
        backgroundColor: props.color || theme.palette.tertiary.main,
        borderRadius: '5px',
        width: '210px',
        height: '40px',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: '20px',
        color: theme.palette.primary.main,
        '&:hover': {
          color: '#FFFFFF',
          backgroundColor: convertRgba(props.color || theme.palette.tertiary.main, 0.6)
        },
        '&:focus': {
          backgroundColor: convertRgba(props.color || theme.palette.tertiary.main, 0.6)
        },
        '&:disabled': {
          backgroundColor: '#C4C4C4',
          color: '#707070',
          PointerEvents: 'none',
        },
      },
      secondaryButton: {
        backgroundColor: '',
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
          backgroundColor: convertRgba(theme.palette.tertiary.main, 0.6),
        },
        '&:focus': {
          backgroundColor: '#ffffff',
          borderColor: theme.palette.tertiary.main,
        },
        '&:disabled': {
          PointerEvents: 'none',
          backgroundColor: '#ffffff',
          color: '#C4C4C4',
          borderColor: '#C4C4C4',
        },
      },
    };
  },
  { key: 'button' },
);

const Button = forwardRef(function Button(props, ref) {
  const { classes } = useStyleSheet(props);
  const buttonStyle = selectClass(props);
  return <button ref={ref} type="button" {...props} className={cx(classes[buttonStyle], props)} />;
});

export default Button;
