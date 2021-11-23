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
    element.selected && element.childrenButton
  ));

  return childrenRender;
};

export default function ButtonsGroupComponent(props) {
  const { classes } = useStyleSheet(props);

  const actions = [
    {
      childrenButton: 'Button One',
      selected: true,
    },
    {
      childrenButton: 'Button Two',
      selected: false,
    },
    {
      childrenButton: 'Button Three',
      selected: false,
    },
  ];

  const [state, setState] = useState(actions);

  return (
    <Fragment  >
      <span style={{ display:'flex', justifyContent:'center', margin:'20px' }}>
        <ButtonsGroup
          actions={state}
          setState={setState}
          className={ classes.buttonsGroupWrapper }
          classNameButtons = { classes.ButtonsStyles }
        />
      </span>
      <p style={{ textAlign:'center', margin:'20px' }}>{getChildrenRender(state)}  Action</p>
    </Fragment>
  );


}

