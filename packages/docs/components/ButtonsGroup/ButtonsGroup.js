import { ButtonsGroup } from '@platzily-ui/components';
import { Fragment, useState } from 'react';

export default function ButtonsGroupComponent() {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  const [state, setState] = useState('weekly');

  const weekly = () => {
    setState('weekly');
    return state;
  };

  const monthly = () => {
    setState('monthly');
    return state;
  };

  const yearly = () => {
    setState('yearly');
    return state;
  };

  return (
    <Fragment>
      <ButtonsGroup
        weeklyActions={weekly}
        monthlyActions={monthly}
        yearlyActions={yearly}
        style={headerStyle}
      />
      <p style={headerStyle}>
        {state}
      </p>
    </Fragment>
  );
}
