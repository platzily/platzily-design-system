import { useState, forwardRef } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';
import PropTypes from 'prop-types';

const useStyleSheet = createStyleSheet(
  (theme, { required, type }) => ({
    inputDefault: {
      width: 199,
      height: 40,
      borderRadius: 5,
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.neutral.light,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.neutral.secondary,
      required,
      type,
      '&:focus': {
        borderColor: theme.palette.tertiary.main,
        backgroundColor: theme.palette.neutral.light,
        borderWidth: 1,
        borderStyle: 'solid',
        outline: 'none',
      },
      '&:disabled': {
        borderColor: theme.palette.neutral.tertiary,
        cursor: 'not-allowed',
      },
      '&:invalid': {
        borderColor: theme.palette.error.main,
      },
      '&:hover': {
        borderColor: theme.palette.tertiary.main,
      },
    },
    inputRequired: {
      textAlign: 'left',
      '&::placeholder': {
        color: theme.palette.error.main,
        paddingLeft: '95%'
      }
    },
  }),
  { key: 'InputComponent' },
);

const Input = forwardRef(function Input(props, ref) {
  const { required, className, ...otherProps } = props;
  const { classes, cx } = useStyleSheet(props);

  // useState Hook
  const [state, setState] = useState({
    name: '',
  });
  const handleInputChange = (event) => setState({ name: event.target.value });

  // Required Validation because of the styles
  let requiredStyles;
  let placeHolder;
  if(required) {
    requiredStyles = classes.inputRequired;
    placeHolder = '*';
  } else {
    requiredStyles = null;
    placeHolder = null;
  }

  return (
    <input
      ref={ref}
      className={cx(classes.inputDefault, requiredStyles , className)}
      value={state.name}
      onChange={handleInputChange}
      placeholder={placeHolder}
      {...otherProps}
    />
  );
});

Input.propTypes = {
  className: PropTypes.string,
  required: PropTypes.boolean,
};

Input.defaultProps = {
  required: false,
};

export default Input;
