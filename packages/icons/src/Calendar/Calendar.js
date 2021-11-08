import { forwardRef } from 'react';
import selectSizeIcon from '../lib/selectSizeIcon/selectSizeIcon';

const Calendar = forwardRef(function Link(props, ref) {
  const sizeIcon = selectSizeIcon(props);
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      height={sizeIcon.height}
      width={sizeIcon.width}
      {...props}
    >
      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
    </svg>
  );
});

export default Calendar;
