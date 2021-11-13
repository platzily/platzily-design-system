import { forwardRef } from 'react';
import { SvgIcon } from '@platzily-ui/components';

const Minus = forwardRef(function Minus(props, ref) {
  return (
    <SvgIcon
      ref={ref}
      {...props}
    >
      <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
    </SvgIcon>
  );
});

export default Minus;
