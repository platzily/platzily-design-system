import { forwardRef } from 'react';
import { SvgIcon } from '@platzily-ui/components';

const Plus = forwardRef(function Plus(props, ref) {
  return (
    <SvgIcon
      ref={ref}
      {...props}
    >
      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
    </SvgIcon>
  );
});

export default Plus;
