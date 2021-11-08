import { forwardRef } from 'react';
import selectSizeIcon from '../lib/selectSizeIcon/selectSizeIcon';

const Chart = forwardRef(function Link(props, ref) {
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
      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
    </svg>
  );
});

export default Chart;
