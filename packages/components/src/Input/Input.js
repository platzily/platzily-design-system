import { useState } from 'react';
import { createStyleSheet } from '@platzily-ui/styling'
import PropTypes from 'prop-types'

const useStyleSheet = createStyleSheet(
  (theme, required, type) => ({
    inputDefault: {
      width: 199,
      height: 40,
      radius: 5,
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.neutral.light,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.neutral.secondary,
      required,
      type
    },
    '&:active': {
      borderColor: theme.palette.neutral.secondary,
    },
    '&:disabled': {
      borderColor: theme.palette.neutral.tertiary,
    },
    '&:error': {
      borderColor: theme.palette.error.main,
    },
    '&:hover': {
      borderColor: theme.palette.tertiary.main,
    },
  }),
  {key: 'InputComponent'}
);

const Input = forwardTef(function MyInput(props, ref) {
  const { className, ...otherProps } = props;
  const { classes, cx } = useStyleSheet(props);

  const [state, setState] = useState({
    name: '',
  });

  const handleInputChange = (event) => setState(
    { name: event.target.value }
  );

  return <input
    ref={ref}
    className={cx(classes.inputDefault, className)}
    value={state.name}
    onChange={handleInputChange}
    {...otherProps}
    />;
});

Input.propTypes = {
  className: PropTypes.string,
  inputRequired: PropTypes.boolean,
  type: PropTypes.oneOf(['text', 'submit', 'file', 'checkbox'])
}

Input.defaultProps = {
  inputRequired: false,
  type: 'text'
}

export default Input;
