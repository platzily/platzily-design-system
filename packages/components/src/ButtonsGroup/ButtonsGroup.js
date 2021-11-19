import { forwardRef, useState } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';
import { PropTypes } from 'prop-types';

const useStyleSheet = createStyleSheet(
  (theme) => ({
    buttonsGroupWrapper: {
      borderRadius: theme.spacing()
    },
    buttonUnselected: {
      backgroundColor: theme.palette.neutral.light
    },
    buttonSelected: {
      backgroundColor: theme.palette.primary.main
    },
  }),
  { key: 'ButtonsGroup' },
);

const ButtonsGroup = forwardRef(function ButtonsGroup(props, ref) {
  const { weeklyActions, monthlyActions, yearlyActions, className, ...otherProps } = props;
  const { classes, cx } = useStyleSheet(props);

  const initialState = {
    weeklySelected: true,
    monthlySelected: false,
    yearlySelected: false,
  };

  const [state, setState] = useState(initialState);

  const buttonSelectedReducer = (payload) => {
    switch (payload) {
    case 'weekly':
      setState({
        ...state,
        weeklySelected: true,
        monthlySelected: false,
        yearlySelected: false,
      });
      break;

    case 'monthly':
      setState({
        ...state,
        weeklySelected: false,
        monthlySelected: true,
        yearlySelected: false,
      });
      break;

    case 'yearly':
      setState({
        ...state,
        weeklySelected: false,
        monthlySelected: false,
        yearlySelected: true,
      });
      break;

    default:
      return state;
    }

    return state;
  };

  const selectButtonStyles = (stateButton) => {
    const styleButton = stateButton ? classes.buttonSelected : classes.buttonUnselected;
    return styleButton;
  };

  return (
    <div ref={ref} className={cx(classes.buttonsGroup, className)} {...otherProps}>
      <button
        type="button"
        onClick={() => {
          buttonSelectedReducer('weekly');
          weeklyActions();
        }}
        className={selectButtonStyles(state.weeklySelected)}
      >
        Weekly
      </button>

      <button
        type="button"
        onClick={() => {
          buttonSelectedReducer('monthly');
          monthlyActions();
        }}
        className={selectButtonStyles(state.monthlySelected)}
      >
        Monthly
      </button>

      <button
        type="button"
        onClick={() => {
          buttonSelectedReducer('yearly');
          yearlyActions();
        }}
        className={selectButtonStyles(state.yearlySelected)}
      >
        Yearly
      </button>
    </div>
  );
});

ButtonsGroup.propTypes = {
  className: PropTypes.string,
  monthlyActions: PropTypes.func,
  position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky', 'unset']),
  weeklyActions: PropTypes.func,
  yearlyActions: PropTypes.func,
};

ButtonsGroup.defaultProps = {
  position: 'unset',
};

export default ButtonsGroup;
