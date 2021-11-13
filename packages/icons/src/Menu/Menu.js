import { forwardRef } from 'react';
import { SvgIcon } from '@platzily-ui/components';

const Menu = forwardRef(function Menu(props, ref) {
  return (
    <SvgIcon
      ref={ref}
      {...props}
    >
      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </SvgIcon>
  );
});

export default Menu;
