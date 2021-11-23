import { ButtonsGroup } from '@platzily-ui/components';
import { useState, Fragment } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';

const useStyleSheet = createStyleSheet(
  (theme) => ({
    buttonsGroupWrapper: {
      borderColor: theme.palette.neutral.secondary,
    },
  }),
  { key: 'ButtonsGroupImplementation' },
);

const getChildrenRender = (state) => {

  const childrenRender = state.map((element) => (
    element.selected && element.children
  ));

  return childrenRender;
};

export default function ButtonsGroupComponent(props) {
  const { classes } = useStyleSheet(props);

  const actions = [
    {
      children: 'weekly',
      selected: true,
    },

    {
      children: 'monthly',
      selected: false,
    },

    {
      children: 'yearly',
      selected: false,
    },
  ];

  const [state, setState] = useState(actions);

  return (
    <Fragment  >
      <ButtonsGroup
        actions={state}
        setState={setState}
        className={ classes.buttonsGroupWrapper }
        classNameButtons = { classes.ButtonsStyles }
      />
      <p>{getChildrenRender(state)}</p>
    </Fragment>
  );


}

