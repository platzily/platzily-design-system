import { forwardRef } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';
import { PropTypes } from 'prop-types';

const useStyleSheet = createStyleSheet(
  (theme, { borderWrapperComponent }) => ({
    buttonsGroupWrapper: {
      width: 'auto',
      height: 'auto',
      display: 'inline-block',
      borderStyle: 'solid',
      borderColor: theme.palette.neutral.secondary,
      borderWidth: 1,
      borderRadius: borderWrapperComponent || theme.spacing(),
    },
    firstButtonStyle:{
      borderTopLeftRadius: borderWrapperComponent || theme.spacing(),
      borderBottomLeftRadius: borderWrapperComponent || theme.spacing(),
    },
    lastButtonStyle:{
      borderTopRightRadius: borderWrapperComponent || theme.spacing(),
      borderBottomRightRadius: borderWrapperComponent || theme.spacing(),
    },
    separationLinesButton: {
      borderRightStyle: 'solid',
      borderRightColor: theme.palette.neutral.secondary,
      borderRightWidth: 1,
    },
    buttonsStyles:{
      padding: '5px 10px',
    },
    buttonUnselected: {
      backgroundColor: theme.palette.neutral.light,
      color: theme.palette.neutral.dark
    },
    buttonSelected: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.neutral.light
    },
  }),
  { key: 'ButtonsGroup' },
);

const ButtonsGroup = forwardRef(function ButtonsGroup(props, ref) {
  const { actions, className, classNameButtons, separationLinesButtonProp, selectedStyles, unselectedStyles,  setState, ...otherProps } = props;
  const { classes, cx } = useStyleSheet(props);

  const selectButtonStyles = (stateButton) => {
    return stateButton ? (selectedStyles || classes.buttonSelected) : (unselectedStyles || classes.buttonUnselected);
  };

  const cornerButtonsGroup = (index) => {
    const actionsLength = actions.length;
    let styleButton;
    if (index === 0) { styleButton = classes.firstButtonStyle; }
    if (index === (actionsLength - 1)) { styleButton = classes.lastButtonStyle; }

    return styleButton;
  };

  const separationLinesButton = (index) => {
    const actionsLength = actions.length;
    let separationStyle;
    if (index !== (actionsLength - 1)) { separationStyle = separationLinesButtonProp || classes.separationLinesButton; }

    return separationStyle;
  };

  function setStateRender(index) {
    setState(actions.map((element, indexMap) => (
      (index === indexMap)
        ? {
          ...element,
          selected: true,
        }
        : {
          ...element,
          selected: false,
        }
    )));
  };

  return (
    <div ref={ref} className={cx(classes.buttonsGroupWrapper, className)} {...otherProps}>
      {actions.map((button, index) => {
        const { selected, childrenButton } = button;
        return (
          <button
            type="button"
            key={index}
            onClick={() => setStateRender(index)}
            className={cx(
              selectButtonStyles(selected),
              cornerButtonsGroup(index),
              separationLinesButton(index),
              classes.buttonsStyles,
              classNameButtons
            )}
          >
            {childrenButton}
          </button>
        );
      })}
    </div>
  );
});

ButtonsGroup.propTypes = {
  actions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object).isRequired,
    PropTypes.shape({
      buttonAction: PropTypes.func,
      childrenButton: PropTypes.element,
      selected: PropTypes.boolean,
    }).isRequired,
  ]),
  className: PropTypes.string,
  classNameButtons: PropTypes.string,
  selectedStyles: PropTypes.string,
  separationLinesButtonProp: PropTypes.string,
  setState: PropTypes.func,
  unselectedStyles: PropTypes.string,
};

ButtonsGroup.defaultProps = {
  className: '',
  separationLinesButtonProp: undefined,

};

export default ButtonsGroup;
