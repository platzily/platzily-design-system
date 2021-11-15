import { useState } from 'react';
import { createStyleSheet } from '@platzily-ui/styling'
import PropTypes from 'prop-types'

const useStyleSheet = createStyleSheet(
  (theme, required, type) => ({
    inputDefault: {
      width: 199,
      height: 40,
      radius: 5,
      boxSizing: 'border-box',
      backgroundColor: theme.palette.neutral.light,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.neutral.secondary,
      required,
      type
    },
    inputActive: {
      borderColor: theme.palette.neutral.secondary,
    },
    inputDisabled: {
      borderColor: theme.palette.neutral.tertiary,
    },
    inputError: {
      borderColor: theme.palette.error.main,
    },
    inputFocus: {
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
