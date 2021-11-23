import { ButtonsGroup } from '@platzily-ui/components';
import { Fragment, useState } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';

const useStyleSheet = createStyleSheet(
  (theme) => ({
    buttonsGroupWrapper: {
      borderColor: theme.palette.neutral.secondary,
    },
  }),
  { key: 'ButtonsGroupImplementation' },
);

export default function ButtonsGroupComponent(props) {
  const { classes } = useStyleSheet(props);

  const [render, setRender] = useState('');

  const actions = [
    {
      childrenButton: 'Button One',
      selected: false,
      onClick: () => setRender('One'),
    },
    {
      childrenButton: 'Button Two',
      selected: false,
      onClick: () => setRender('Two'),
    },
    {
      childrenButton: 'Button Three',
      selected: false,
      onClick: () => setRender('Three'),
    },
  ];

  return (
    <Fragment >
      <span style={{ display:'flex', justifyContent:'center', margin:'20px' }}>
        <ButtonsGroup
          actions={actions}
          className={ classes.buttonsGroupWrapper }
          classNameButtons = { classes.ButtonsStyles }
        />
      </span>
      <p style={{ textAlign:'center', margin:'20px' }}> Actions {render}</p>
    </Fragment>
  );
}

